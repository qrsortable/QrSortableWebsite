import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, Globe, MapPin, Package, Lock, Loader2, Check, AlertCircle, RefreshCw, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../contexts/LanguageContext';
import { useCart, sanitizeCartItems } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { CartItem, Currency } from '../types';
import { SHIP_COUNTRIES } from '../constants/shipping';
import { PRODUCT_TRANSLATIONS } from '../constants/products';
import { checkRateLimit, recordSubmission, sanitizeInput } from '../services/utils';
import { GENERATOR_STUDIO_TRANSLATIONS } from '../constants/codeGeneratorTranslations';
import {
  finalizePaidDigitalOrder,
  hasAutoDownloadedOrder,
  markOrderAutoDownloaded,
  savePendingDigitalCartForOrder,
} from '../utils/paidPdfOrders';
import { generateLabelsPdfBlob, triggerSequentialBlobDownloads } from '../utils/labelPdfGenerator';

const APPS_SCRIPT_CHECKOUT_URL = 'https://script.google.com/macros/s/AKfycbxhKlj4fbiGR5wMA0zoSDtuYow7vTfN0i6qQl1FmyDBLWFeNfnyanqBayvCQv4aXKVrUg/exec';
const ACTIVE_CHECKOUT_STORAGE_KEY = 'qrs_active_checkout_state';
const LAST_COMPLETED_ORDER_KEY = 'qrs_last_completed_order';

interface StoredCheckoutState {
  orderId: string;
  checkoutUrl: string;
  clientRef?: string;
  email?: string;
  hasPhysical?: boolean;
  hasDigital?: boolean;
  digitalCartItems?: CartItem[];
}

interface CompletedCheckoutRecord {
  orderId: string;
  clientRef?: string;
  hasPhysical?: boolean;
  hasDigital?: boolean;
  completedAt: number;
}

function readStoredCheckoutState(): StoredCheckoutState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(ACTIVE_CHECKOUT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.orderId && parsed?.checkoutUrl ? parsed : null;
  } catch {
    return null;
  }
}

function writeCompletedCheckoutRecord(record: CompletedCheckoutRecord): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LAST_COMPLETED_ORDER_KEY, JSON.stringify(record));
  } catch {
    // Ignore storage quota errors
  }
}

function readRecentCompletedCheckoutRecord(): CompletedCheckoutRecord | null {
  if (typeof window === 'undefined') return null;
  const maxAgeMs = 10 * 60 * 1000;
  try {
    const raw = localStorage.getItem(LAST_COMPLETED_ORDER_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CompletedCheckoutRecord;
    if (parsed?.orderId && Date.now() - (parsed.completedAt || 0) < maxAgeMs) {
      return parsed;
    }
  } catch {
    return null;
  }
  return null;
}

export const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { t, language, localizePath } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const isReturnVisit = searchParams.get('mollieReturn') === '1';
  const returnRef = searchParams.get('ref') || '';
  const rawInitialStored = isReturnVisit ? readStoredCheckoutState() : null;
  const initialStoredCheckout =
    rawInitialStored && (!returnRef || rawInitialStored.clientRef === returnRef)
      ? rawInitialStored
      : null;

  const [shippingInfo, setShippingInfo] = useState({ fullName: '', email: '', street: '', city: '', zip: '', country: '' });
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(initialStoredCheckout?.checkoutUrl ?? null);
  const [orderId, setOrderId] = useState<string | null>(initialStoredCheckout?.orderId ?? null);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'paid'>('pending');
  const [isPolling, setIsPolling] = useState(false);
  const [returnResolutionDone, setReturnResolutionDone] = useState(false);
  const [pollErrorKey, setPollErrorKey] = useState<'tooManyAttempts' | 'transactionLimit' | 'invalidCart' | 'initFailed' | 'statusNotPaid' | 'statusError' | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [mountTime] = useState(Date.now());
  const [failedAttempts, setFailedAttempts] = useState<number[]>([]);

  const isCheckingRef = useRef(false);
  const paidProcessedRef = useRef(false);

  const genT = GENERATOR_STUDIO_TRANSLATIONS[language as 'EN' | 'DE' | 'FR' | 'ES'] || GENERATOR_STUDIO_TRANSLATIONS.EN;
  const pollError = pollErrorKey ? t('checkout', pollErrorKey) : null;

  const hasPhysicalItems = useMemo(() => cart.some(item => !item.isDigital), [cart]);
  const hasDigitalItems = useMemo(() => cart.some(item => item.isDigital), [cart]);

  const currencyMap = {
    EUR: { symbol: '€', rate: 1 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.86 }
  };

  const currentTotal = useMemo(() => {
    return cartTotal * currencyMap[currency].rate;
  }, [cartTotal, currency]);

  const shippingCostEuro = useMemo(() => {
    if (!hasPhysicalItems) return 0;
    const country = SHIP_COUNTRIES.find(c => c.name === shippingInfo.country);
    if (!country) return 0;
    if (country.group === 'DE') return 0;
    if (country.group === 'EU') return 15.00;
    if (country.group === 'UK') return 20.00;
    return 25.00;
  }, [shippingInfo.country, hasPhysicalItems]);

  const shippingCostDisplay = useMemo(() => {
    return shippingCostEuro * currencyMap[currency].rate;
  }, [shippingCostEuro, currency]);

  const grandTotal = useMemo(() => {
    return currentTotal + shippingCostDisplay;
  }, [currentTotal, shippingCostDisplay]);

  const formattedGrandTotal = grandTotal.toFixed(2);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;
    setPollErrorKey(null);

    // 1. Honeypot check
    if (honeypot) {
      console.warn("Honeypot triggered");
      return; // Silent fail
    }

    // 2. Bot Timer (only needed for physical shipping forms; digital orders have no form fields to fill)
    if (hasPhysicalItems && Date.now() - mountTime < 2000) {
      console.warn("Checkout submission too fast");
      return; // Silent fail
    }

    // 3. Velocity Check (Checkout Security)
    const now = Date.now();
    const recentFailures = failedAttempts.filter(t => now - t < 30000);
    if (recentFailures.length >= 3) {
      setPollErrorKey('tooManyAttempts');
      return;
    }

    // 4. Rate Limit (2 per minute)
    if (!checkRateLimit('checkout_rate_limit', 2, 60000)) {
      setPollErrorKey('transactionLimit');
      return;
    }

    // 5. Server-Side Validation (Client Pre-check with authoritative price re-hydration)
    const verifiedCart = sanitizeCartItems(cart);
    if (verifiedCart.length === 0 || verifiedCart.length !== cart.length) {
      setPollErrorKey('invalidCart');
      return;
    }

    if (hasPhysicalItems) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingInfo.email.trim());
      if (!emailOk || !SHIP_COUNTRIES.some(c => c.name === shippingInfo.country)) {
        setPollErrorKey('invalidCart');
        return;
      }
    }

    const verifiedSubtotalEur = verifiedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const verifiedGrandTotal = (verifiedSubtotalEur + shippingCostEuro) * currencyMap[currency].rate;
    if (verifiedGrandTotal <= 0) {
      setPollErrorKey('invalidCart');
      return;
    }

    setIsProcessing(true);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 20000);

    try {
      let clientRef = '';
      if (typeof window !== 'undefined' && window.crypto?.randomUUID) {
        clientRef = window.crypto.randomUUID();
      } else if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
        const bytes = window.crypto.getRandomValues(new Uint8Array(16));
        clientRef = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
      } else {
        clientRef = `${Date.now()}`;
      }

      const payload = {
        customerName: hasPhysicalItems ? sanitizeInput(shippingInfo.fullName) : 'Digital PDF Order',
        email: hasPhysicalItems ? shippingInfo.email.trim() : 'noreply@qrsortable.com',
        address: {
          street: hasPhysicalItems ? sanitizeInput(shippingInfo.street) : 'Digital Download',
          city: hasPhysicalItems ? sanitizeInput(shippingInfo.city) : 'Digital',
          zip: hasPhysicalItems ? sanitizeInput(shippingInfo.zip) : '00000',
          country: hasPhysicalItems ? shippingInfo.country : 'Digital Delivery'
        },
        items: verifiedCart.map(item => ({
          name: item.name,
          quantity: Math.max(1, item.quantity),
          price: Math.max(0, Number((item.price * currencyMap[currency].rate).toFixed(2)))
        })),
        currency: currency,
        totalAmount: verifiedGrandTotal.toFixed(2),
        redirectUrl: `${window.location.origin}${localizePath('/checkout')}?mollieReturn=1&ref=${encodeURIComponent(clientRef)}`,
      };

      const response = await fetch(APPS_SCRIPT_CHECKOUT_URL, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Checkout request failed with status ${response.status}`);
      }

      const rawText = await response.text();
      const result = JSON.parse(rawText);
      
      if (result.checkoutUrl) {
        recordSubmission('checkout_rate_limit');
        const resolvedOrderId = result.orderId || `ORD-${Date.now()}`;
        savePendingDigitalCartForOrder(resolvedOrderId, cart);
        try {
          localStorage.removeItem(LAST_COMPLETED_ORDER_KEY);
          localStorage.setItem(
            ACTIVE_CHECKOUT_STORAGE_KEY,
            JSON.stringify({
              orderId: resolvedOrderId,
              checkoutUrl: result.checkoutUrl,
              clientRef,
              email: shippingInfo.email,
              hasPhysical: hasPhysicalItems,
              hasDigital: hasDigitalItems,
            })
          );
        } catch {
          // Ignore storage quota errors
        }
        setCheckoutUrl(result.checkoutUrl);
        setOrderId(resolvedOrderId);
        const openedWindow = window.open(result.checkoutUrl, '_blank');
        setPopupBlocked(!openedWindow || openedWindow.closed || typeof openedWindow.closed === 'undefined');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      setPollErrorKey('initFailed');
      setFailedAttempts(prev => [...prev, Date.now()]);
    } finally {
      window.clearTimeout(timeoutId);
      setIsProcessing(false);
    }
  };

  const verifyPaymentStatus = useCallback(async (
    targetOrderId: string,
    overrideMeta?: { clientRef?: string; email?: string; hasPhysical?: boolean; hasDigital?: boolean; digitalCartItems?: CartItem[] },
    options?: { silent?: boolean }
  ) => {
    if (!targetOrderId || isCheckingRef.current || paidProcessedRef.current) return;
    isCheckingRef.current = true;
    const silent = Boolean(options?.silent);
    if (!silent) {
      setIsPolling(true);
      setPollErrorKey(null);
    }
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);
    try {
      const statusUrl = `${APPS_SCRIPT_CHECKOUT_URL}?orderId=${encodeURIComponent(targetOrderId)}`;
      const response = await fetch(statusUrl, {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`Status check failed with status ${response.status}`);
      }
      const rawText = await response.text();
      const result = JSON.parse(rawText);
      if (result.status === 'paid') {
        paidProcessedRef.current = true;
        setPaymentStatus('paid');
        setPollErrorKey(null);
        const storedMeta = overrideMeta ?? readStoredCheckoutState() ?? undefined;
        const unlocked = finalizePaidDigitalOrder(
          targetOrderId,
          storedMeta?.email || result.email || shippingInfo.email,
          storedMeta?.digitalCartItems || result.digitalCartItems
        );
        const hadPhysical = storedMeta?.hasPhysical ?? hasPhysicalItems;
        const hadDigital = (storedMeta?.hasDigital ?? hasDigitalItems) || Boolean(unlocked);
        writeCompletedCheckoutRecord({
          orderId: targetOrderId,
          clientRef: storedMeta?.clientRef,
          hasPhysical: hadPhysical,
          hasDigital: hadDigital,
          completedAt: Date.now(),
        });
        localStorage.removeItem(ACTIVE_CHECKOUT_STORAGE_KEY);
        if (unlocked && unlocked.items.length > 0 && !hasAutoDownloadedOrder(targetOrderId)) {
          try {
            const generatedFiles: Array<{ blob: Blob; filename: string }> = [];
            for (const pdfItem of unlocked.items) {
              const { blob, filename } = await generateLabelsPdfBlob(pdfItem, pdfItem.codes, {
                showCutLines: pdfItem.showCutLines,
              });
              generatedFiles.push({ blob, filename });
            }
            markOrderAutoDownloaded(targetOrderId);
            await triggerSequentialBlobDownloads(generatedFiles);
          } catch {
            // Manual download & Open/Print remain immediately available on /success
          }
        }
        clearCart();
        setTimeout(() => {
          navigate(localizePath(`/success?orderId=${encodeURIComponent(targetOrderId)}`), {
            replace: true,
            state: { hasPhysical: hadPhysical, hasDigital: hadDigital },
          });
        }, 700);
      } else if (!silent) {
        setPollErrorKey('statusNotPaid');
      }
    } catch (error) {
      console.error('Status Check Error:', error);
      if (!silent) {
        setPollErrorKey('statusError');
      }
    } finally {
      window.clearTimeout(timeoutId);
      isCheckingRef.current = false;
      if (!silent) {
        setIsPolling(false);
      }
    }
  }, [clearCart, hasDigitalItems, hasPhysicalItems, localizePath, navigate, shippingInfo.email]);

  const checkStatus = () => {
    if (orderId) {
      verifyPaymentStatus(orderId, readStoredCheckoutState() ?? undefined, { silent: false });
    }
  };

  // Handle Mollie redirect return in the opened/current tab (works even across partitioned iframe storage via ?ref=)
  useEffect(() => {
    if (!isReturnVisit) return;
    let cancelled = false;
    const failsafeTimer = window.setTimeout(() => {
      if (!cancelled) setReturnResolutionDone(true);
    }, 3500);

    const resolveReturn = async () => {
      const saved = readStoredCheckoutState();
      if (saved && (!returnRef || saved.clientRef === returnRef)) {
        if (!orderId) setOrderId(saved.orderId);
        if (!checkoutUrl) setCheckoutUrl(saved.checkoutUrl);
        await verifyPaymentStatus(saved.orderId, saved, { silent: true });
        if (!cancelled) setReturnResolutionDone(true);
        return;
      }

      const recentCompleted = readRecentCompletedCheckoutRecord();
      if (recentCompleted && (!returnRef || recentCompleted.clientRef === returnRef)) {
        paidProcessedRef.current = true;
        setPaymentStatus('paid');
        navigate(localizePath(`/success?orderId=${encodeURIComponent(recentCompleted.orderId)}`), {
          replace: true,
          state: {
            hasPhysical: Boolean(recentCompleted.hasPhysical),
            hasDigital: Boolean(recentCompleted.hasDigital),
          },
        });
        return;
      }

      if (!cancelled) {
        setReturnResolutionDone(true);
      }
    };

    resolveReturn();

    return () => {
      cancelled = true;
      window.clearTimeout(failsafeTimer);
    };
  }, [checkoutUrl, clearCart, isReturnVisit, localizePath, navigate, orderId, returnRef, verifyPaymentStatus]);

  // Automatic background polling + cross-tab storage sync + instant check on window focus/tab return
  useEffect(() => {
    if (!checkoutUrl || !orderId || paymentStatus === 'paid') return;

    const runSilentCheck = () => {
      verifyPaymentStatus(orderId, readStoredCheckoutState() ?? undefined, { silent: true });
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === LAST_COMPLETED_ORDER_KEY && e.newValue) {
        try {
          const completed = JSON.parse(e.newValue) as CompletedCheckoutRecord;
          if (completed?.orderId === orderId) {
            paidProcessedRef.current = true;
            setPaymentStatus('paid');
            navigate(localizePath(`/success?orderId=${encodeURIComponent(completed.orderId)}`), {
              replace: true,
              state: {
                hasPhysical: Boolean(completed.hasPhysical),
                hasDigital: Boolean(completed.hasDigital),
              },
            });
          }
        } catch {
          // Ignore malformed storage payload
        }
      }
    };

    const intervalId = window.setInterval(runSilentCheck, 2500);
    const onFocus = () => runSilentCheck();
    const onVisibility = () => {
      if (document.visibilityState === 'visible') runSilentCheck();
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [checkoutUrl, localizePath, navigate, orderId, paymentStatus, verifyPaymentStatus]);

  if (isReturnVisit && cart.length === 0 && !orderId) {
    const rawRecentCompleted = readRecentCompletedCheckoutRecord();
    const recentCompleted =
      rawRecentCompleted && (!returnRef || rawRecentCompleted.clientRef === returnRef)
        ? rawRecentCompleted
        : null;
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
          <title>{t('checkout', 'titleSeo')}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-xl mx-auto">
          {recentCompleted ? (
            <>
              <div className="bg-green-100 p-6 rounded-full mb-6">
                <Check className="h-16 w-16 text-green-600 animate-bounce" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{t('checkout', 'paymentConfirmed')}</h1>
              <p className="text-lg font-bold text-gray-500 mb-8">{genT.preparingPdf}</p>
              <button
                type="button"
                onClick={() =>
                  navigate(localizePath(`/success?orderId=${encodeURIComponent(recentCompleted.orderId)}`), {
                    replace: true,
                    state: {
                      hasPhysical: Boolean(recentCompleted.hasPhysical),
                      hasDigital: Boolean(recentCompleted.hasDigital),
                    },
                  })
                }
                className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-yellow-400 transition-colors cursor-pointer"
              >
                {genT.downloadPdfBtn}
              </button>
            </>
          ) : !returnResolutionDone ? (
            <>
              <Loader2 className="h-14 w-14 text-[#FDB623] animate-spin mb-6" />
              <p className="text-2xl font-black text-gray-700 mb-4">{genT.autoCheckingStatus}</p>
            </>
          ) : (
            <>
              <div className="bg-amber-100 p-5 rounded-full mb-6">
                <Check className="h-12 w-12 text-[#FDB623]" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">{genT.returnSessionEndedTitle}</h1>
              <p className="text-base font-bold text-gray-500 mb-8 leading-relaxed">{genT.returnSessionEndedDesc}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate(localizePath('/features/qr-code-generator-storage'))}
                  className="bg-[#FDB623] text-black font-black text-base px-6 py-3.5 rounded-2xl shadow-md hover:bg-yellow-400 transition-colors cursor-pointer"
                >
                  {genT.backToGenerator}
                </button>
                <button
                  type="button"
                  onClick={() => navigate(localizePath('/'))}
                  className="bg-gray-900 text-white font-black text-base px-6 py-3.5 rounded-2xl hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  {t('cart', 'startShopping')}
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    );
  }

  if (cart.length === 0 && !orderId) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
          <title>{t('checkout', 'titleSeo')}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-8">
          <ShoppingCart className="h-24 w-24 text-gray-300 mb-8" />
          <p className="text-3xl font-black text-gray-600 mb-8">{t('cart', 'empty')}</p>
          <button onClick={() => navigate(localizePath('/'))} className="text-[#FDB623] font-black text-2xl hover:underline">{t('cart', 'startShopping')}</button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{t('checkout', 'titleSeo')}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <button onClick={() => navigate(localizePath('/'))} className="flex items-center text-gray-500 hover:text-gray-900 mb-12 text-xl font-bold transition-colors">
          <ChevronLeft className="h-7 w-7 mr-2" /> {t('product', 'back')}
        </button>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
          <div className="flex-1 w-full min-w-0 space-y-12">
            {!checkoutUrl ? (
              <>
                <div>
                  <h1 className="text-6xl font-black mb-4">{t('checkout', 'title')}</h1>
                  <p className="text-2xl text-gray-500 font-bold">{t('checkout', 'subtitle')}</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black flex items-center">
                      <Globe className="h-8 w-8 mr-3 text-[#FDB623]" /> {t('checkout', 'currency')}
                    </h2>
                    <select 
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value as Currency)}
                      className="bg-gray-100 border-none rounded-2xl p-4 text-xl font-black outline-none focus:ring-4 focus:ring-[#FDB623]/20 appearance-none pr-10 cursor-pointer"
                    >
                      <option value="EUR">EUR (€)</option>
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>

                <form id="checkout-form" onSubmit={handlePayment} className="space-y-10">
                  <input 
                    type="text" 
                    name="confirm_email_address"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="opacity-0 absolute -z-10 h-0 w-0"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {hasPhysicalItems && (
                    <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
                      <h2 className="text-3xl font-black mb-10 flex items-center">
                        <MapPin className="h-8 w-8 mr-4 text-[#FDB623]" /> {t('checkout', 'shipping')}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                        <div className="md:col-span-3 space-y-3">
                          <label className="text-lg font-black block">{t('checkout', 'fullName')}</label>
                          <input type="text" placeholder={t('checkout', 'placeholderName')} required value={shippingInfo.fullName} onChange={e => setShippingInfo({...shippingInfo, fullName: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                        </div>
                        <div className="md:col-span-3 space-y-3">
                          <label className="text-lg font-black block">{t('checkout', 'email')}</label>
                          <input type="email" placeholder={t('checkout', 'placeholderEmail')} required value={shippingInfo.email} onChange={e => setShippingInfo({...shippingInfo, email: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                        </div>
                        <div className="md:col-span-6 space-y-3">
                          <label className="text-lg font-black block">{t('checkout', 'street')}</label>
                          <input type="text" placeholder={t('checkout', 'placeholderStreet')} required value={shippingInfo.street} onChange={e => setShippingInfo({...shippingInfo, street: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                        </div>
                        <div className="md:col-span-6 space-y-3">
                          <label className="text-lg font-black block">{t('checkout', 'city')}</label>
                          <input type="text" placeholder={t('checkout', 'placeholderCity')} required value={shippingInfo.city} onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                        </div>
                        <div className="md:col-span-6 space-y-3">
                          <label className="text-lg font-black block">{t('checkout', 'zip')}</label>
                          <input type="text" placeholder={t('checkout', 'placeholderZip')} required value={shippingInfo.zip} onChange={e => setShippingInfo({...shippingInfo, zip: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                        </div>
                        <div className="md:col-span-6 space-y-3">
                          <label className="text-lg font-black block">{t('checkout', 'country')}</label>
                          <div className="relative">
                            <select 
                              required 
                              value={shippingInfo.country} 
                              onChange={e => setShippingInfo({...shippingInfo, country: e.target.value})} 
                              className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20 appearance-none"
                            >
                              <option value="" disabled>{t('checkout', 'selectCountry')}</option>
                              {SHIP_COUNTRIES.map(c => (
                                <option key={c.name} value={c.name}>{t('countries', c.name)}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border-4 border-[#FDB623]/20 animate-in slide-in-from-top-12 duration-500">
                <div className="text-center space-y-10">
                  <div className="bg-yellow-100 p-8 rounded-full w-fit mx-auto relative">
                     <Lock className="h-24 w-24 text-[#FDB623]" />
                     {paymentStatus === 'paid' && (
                       <div className="absolute -top-2 -right-2 bg-green-500 p-3 rounded-full text-white shadow-lg animate-bounce">
                         <Check className="h-8 w-8" />
                       </div>
                     )}
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-black">{paymentStatus === 'paid' ? t('checkout', 'paymentConfirmed') : t('checkout', 'waitingPayment')}</h2>
                    <p className="text-xl sm:text-2xl text-gray-500 font-bold max-w-lg mx-auto">{t('checkout', 'completePayment')}</p>
                    {orderId && <p className="text-sm font-black text-gray-400 uppercase tracking-widest">{t('checkout', 'orderIdLabel')}: {orderId}</p>}
                    {paymentStatus !== 'paid' && (
                      <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-bold">
                        <Loader2 className="h-4 w-4 animate-spin text-[#FDB623]" />
                        <span>{genT.autoCheckingStatus}</span>
                      </div>
                    )}
                  </div>

                  {popupBlocked && paymentStatus !== 'paid' && (
                    <div className="bg-amber-50 border-2 border-[#FDB623] rounded-2xl p-5 space-y-3 text-center">
                      <p className="text-base font-black text-gray-900">{genT.popupBlockedTitle}</p>
                      <a
                        href={checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#FDB623] text-black py-4 px-6 rounded-2xl font-black text-xl hover:bg-yellow-400 shadow-lg inline-flex items-center justify-center gap-2 transition-all"
                      >
                        <ExternalLink className="h-6 w-6 shrink-0" />
                        <span>{genT.openPaymentBtn}</span>
                      </a>
                    </div>
                  )}

                  <div className="space-y-4 pt-4">
                    <button 
                      onClick={checkStatus}
                      disabled={isPolling || paymentStatus === 'paid'}
                      className={`w-full py-6 rounded-2xl font-black text-xl sm:text-2xl shadow-xl flex items-center justify-center transition-all disabled:opacity-50 cursor-pointer ${
                        popupBlocked
                          ? 'bg-gray-900 text-white hover:bg-gray-800'
                          : 'bg-[#FDB623] text-black hover:bg-yellow-400'
                      }`}
                    >
                      {isPolling ? <Loader2 className="h-8 w-8 animate-spin mr-3 shrink-0" /> : <RefreshCw className="h-8 w-8 mr-3 shrink-0" />}
                      {t('checkout', 'checkStatus')}
                    </button>
                    
                    <a 
                      href={checkoutUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-gray-700 font-black text-lg hover:text-black py-3 underline underline-offset-4"
                    >
                      <ExternalLink className="h-5 w-5 shrink-0" />
                      <span>{genT.openPaymentBtn}</span>
                    </a>
                  </div>
                  
                  {pollError && (
                    <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 flex items-center justify-center font-bold text-lg animate-shake">
                      <AlertCircle className="mr-3 h-6 w-6 shrink-0" /> <span>{pollError}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[420px] shrink-0 min-w-0">
            <div className="sticky top-32 space-y-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-[3rem] p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-black mb-8 flex items-center">
                  <Package className="h-8 w-8 mr-3 text-[#FDB623] shrink-0" /> {t('checkout', 'cartItems')}
                </h3>
                <div className="space-y-6 flex-1 max-h-[40vh] overflow-y-auto pr-1 custom-scrollbar">
                  {cart.map(item => {
                    const cfg = item.generatorConfig;
                    const displayName = item.isDigital && cfg
                      ? `${genT.orderLabelPrefix} (${cfg.pageFormat} · ${cfg.codeType === 'qr' ? genT.qrOption : genT.barcodeOption})`
                      : (PRODUCT_TRANSLATIONS[item.id]?.[language]?.name || item.name);
                    return (
                      <div key={item.id} className="flex items-start justify-between gap-3">
                        <div className="flex items-center space-x-4 min-w-0 flex-1">
                          <div className="relative shrink-0">
                             <img src={item.image} alt={displayName} className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-2xl border border-gray-100 shadow-sm" />
                             <span className="absolute -top-2.5 -right-2.5 bg-gray-900 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-black border-4 border-white">
                               {item.quantity}
                             </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-black text-base sm:text-lg text-gray-900 min-w-0 break-words leading-snug">
                              {displayName}
                            </div>
                            {item.isDigital && cfg && (
                              <p className="text-xs font-bold text-gray-500 mt-1 break-words">
                                {item.quantity} {genT.pagesUnit} · {item.quantity * (cfg.pageFormat === 'A5' ? 6 : 12)} {genT.labelsUnit}
                                {cfg.tagName ? ` · ${cfg.tagName}` : ''}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="font-black text-lg sm:text-xl whitespace-nowrap shrink-0 pl-2">
                          {currencyMap[currency].symbol}{(item.price * item.quantity * currencyMap[currency].rate).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t-4 border-gray-100 border-dashed space-y-4">
                  <div className="flex justify-between items-baseline gap-3 text-lg sm:text-xl font-bold text-gray-500">
                    <span className="shrink-0">{t('cart', 'subtotal')}</span>
                    <span className="whitespace-nowrap">{currencyMap[currency].symbol}{(cartTotal * currencyMap[currency].rate).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-3 text-lg sm:text-xl font-bold text-gray-500">
                    <span className="shrink-0">{t('cart', 'shipping')}</span>
                    <span className="text-right break-words min-w-0">
                      {hasPhysicalItems
                        ? `${currencyMap[currency].symbol}${shippingCostDisplay.toFixed(2)}`
                        : genT.digitalShippingFree}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[#FDB623] pt-3">
                    <div>
                      <p className="text-4xl font-black">{currencyMap[currency].symbol}{formattedGrandTotal}</p>
                      <p className="text-[10px] text-gray-400 font-black uppercase mt-1 tracking-widest">{t('shop', 'incVat')}</p>
                    </div>
                  </div>
                </div>
                {!checkoutUrl && (
                  <div className="mt-10">
                    <button 
                      type="submit" 
                      form="checkout-form"
                      disabled={isProcessing}
                      className="w-full bg-black text-white py-6 rounded-2xl font-black text-2xl hover:bg-[#FDB623] hover:text-black transition-all shadow-2xl flex items-center justify-center disabled:opacity-50 active:scale-95"
                    >
                      {isProcessing ? <Loader2 className="h-8 w-8 animate-spin mr-3" /> : <ShoppingCart className="h-7 w-7 mr-3" />}
                      {t('checkout', 'pay')}
                    </button>
                    {pollError && <div className="mt-4 text-red-500 font-black text-center text-sm">{pollError}</div>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
