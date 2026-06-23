import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, Globe, MapPin, Package, Lock, Loader2, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { Currency } from '../types';
import { SHIP_COUNTRIES } from '../constants/shipping';
import { PRODUCT_TRANSLATIONS } from '../constants/products';
import { checkRateLimit, recordSubmission, sanitizeInput } from '../services/utils';

const APPS_SCRIPT_CHECKOUT_URL = 'https://script.google.com/macros/s/AKfycbxhKlj4fbiGR5wMA0zoSDtuYow7vTfN0i6qQl1FmyDBLWFeNfnyanqBayvCQv4aXKVrUg/exec';

export const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { t, language } = useTranslation();
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({ fullName: '', email: '', street: '', city: '', zip: '', country: '' });
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'paid'>('pending');
  const [isPolling, setIsPolling] = useState(false);
  const [pollError, setPollError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [mountTime] = useState(Date.now());
  const [failedAttempts, setFailedAttempts] = useState<number[]>([]);

  const currencyMap = {
    EUR: { symbol: '€', rate: 1 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.86 }
  };

  const currentTotal = useMemo(() => {
    return cartTotal * currencyMap[currency].rate;
  }, [cartTotal, currency]);

  const shippingCostEuro = useMemo(() => {
    const country = SHIP_COUNTRIES.find(c => c.name === shippingInfo.country);
    if (!country) return 0;
    if (country.group === 'DE') return 0;
    if (country.group === 'EU') return 15.00;
    if (country.group === 'UK') return 20.00;
    return 25.00;
  }, [shippingInfo.country]);

  const shippingCostDisplay = useMemo(() => {
    return shippingCostEuro * currencyMap[currency].rate;
  }, [shippingCostEuro, currency]);

  const grandTotal = useMemo(() => {
    return currentTotal + shippingCostDisplay;
  }, [currentTotal, shippingCostDisplay]);

  const formattedGrandTotal = grandTotal.toFixed(2);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setPollError(null);

    // 1. Honeypot check
    if (honeypot) {
      console.warn("Honeypot triggered");
      return; // Silent fail
    }

    // 2. Bot Timer (2 seconds)
    if (Date.now() - mountTime < 2000) {
      console.warn("Checkout submission too fast");
      return; // Silent fail
    }

    // 3. Velocity Check (Checkout Security)
    const now = Date.now();
    const recentFailures = failedAttempts.filter(t => now - t < 30000);
    if (recentFailures.length >= 3) {
      setPollError("Too many attempts. Please wait a moment before trying again.");
      return;
    }

    // 4. Rate Limit (2 per minute for checkout)
    if (!checkRateLimit('checkout_rate_limit', 2, 60000)) {
      setPollError("Transaction limit reached. Please wait a minute.");
      return;
    }

    // 5. Server-Side Validation (Client Pre-check)
    const invalidItems = cart.filter(item => item.quantity <= 0 || item.price < 0);
    if (invalidItems.length > 0 || parseFloat(formattedGrandTotal) <= 0) {
      setPollError("Invalid cart detected. Please refresh and try again.");
      return;
    }

    setIsProcessing(true);

    const payload = {
      customerName: sanitizeInput(shippingInfo.fullName),
      email: shippingInfo.email,
      address: {
        street: sanitizeInput(shippingInfo.street),
        city: sanitizeInput(shippingInfo.city),
        zip: sanitizeInput(shippingInfo.zip),
        country: shippingInfo.country
      },
      items: cart.map(item => ({
        name: item.name,
        quantity: Math.max(1, item.quantity),
        price: Math.max(0, item.price * currencyMap[currency].rate)
      })),
      currency: currency,
      totalAmount: formattedGrandTotal
    };

    try {
      const response = await fetch(APPS_SCRIPT_CHECKOUT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (result.checkoutUrl) {
        recordSubmission('checkout_rate_limit');
        setCheckoutUrl(result.checkoutUrl);
        setOrderId(result.orderId || `ORD-${Date.now()}`);
        window.open(result.checkoutUrl, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      setPollError('Payment initialization failed. Please check your connection and try again.');
      setFailedAttempts(prev => [...prev, Date.now()]);
    } finally {
      setIsProcessing(false);
    }
  };

  const checkStatus = async () => {
    if (!orderId) return;
    setIsPolling(true);
    setPollError(null);
    try {
      const response = await fetch(`${APPS_SCRIPT_CHECKOUT_URL}?orderId=${orderId}`, {
        method: 'GET',
        mode: 'cors'
      });
      const result = await response.json();
      if (result.status === 'paid') {
        setPaymentStatus('paid');
        clearCart();
        setTimeout(() => navigate('/success'), 2000);
      } else {
        setPollError(t('checkout', 'statusNotPaid'));
      }
    } catch (error) {
      console.error('Status Check Error:', error);
      setPollError(t('checkout', 'statusError'));
    } finally {
      setIsPolling(false);
    }
  };

  if (cart.length === 0 && !orderId) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <ShoppingCart className="h-24 w-24 text-gray-300 mb-8" />
          <p className="text-3xl font-black text-gray-600 mb-8">{t('cart', 'empty')}</p>
          <button onClick={() => navigate('/')} className="text-[#FDB623] font-black text-2xl hover:underline">{t('cart', 'startShopping')}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-32">
        <button onClick={() => navigate('/')} className="flex items-center text-gray-500 hover:text-gray-900 mb-12 text-xl font-bold transition-colors">
          <ChevronLeft className="h-7 w-7 mr-2" /> {t('product', 'back')}
        </button>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 w-full space-y-12">
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

                  <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-black mb-10 flex items-center">
                      <MapPin className="h-8 w-8 mr-4 text-[#FDB623]" /> {t('checkout', 'shipping')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                      <div className="md:col-span-3 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'fullName')}</label>
                        <input type="text" placeholder="John Doe" required value={shippingInfo.fullName} onChange={e => setShippingInfo({...shippingInfo, fullName: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-3 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'email')}</label>
                        <input type="email" placeholder="john@example.com" required value={shippingInfo.email} onChange={e => setShippingInfo({...shippingInfo, email: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-6 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'street')}</label>
                        <input type="text" placeholder="Main St 123" required value={shippingInfo.street} onChange={e => setShippingInfo({...shippingInfo, street: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-6 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'city')}</label>
                        <input type="text" placeholder="Amsterdam" required value={shippingInfo.city} onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-6 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'zip')}</label>
                        <input type="text" placeholder="1011 AB" required value={shippingInfo.zip} onChange={e => setShippingInfo({...shippingInfo, zip: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
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
                  
                  <div className="space-y-6">
                    <h2 className="text-5xl font-black">{paymentStatus === 'paid' ? t('checkout', 'paymentConfirmed') : t('checkout', 'waitingPayment')}</h2>
                    <p className="text-2xl text-gray-500 font-bold max-w-lg mx-auto">{t('checkout', 'completePayment')}</p>
                    {orderId && <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Order ID: {orderId}</p>}
                  </div>

                  <div className="space-y-4 pt-10">
                    <button 
                      onClick={checkStatus}
                      disabled={isPolling || paymentStatus === 'paid'}
                      className="w-full bg-[#FDB623] text-black py-6 rounded-2xl font-black text-2xl hover:bg-yellow-400 shadow-xl flex items-center justify-center transition-all disabled:opacity-50"
                    >
                      {isPolling ? <Loader2 className="h-8 w-8 animate-spin mr-3" /> : <RefreshCw className="h-8 w-8 mr-3" />}
                      {t('checkout', 'checkStatus')}
                    </button>
                    
                    <a 
                      href={checkoutUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-gray-500 font-black text-xl hover:text-black py-4"
                    >
                      Return to Checkout Page
                    </a>
                  </div>
                  
                  {pollError && (
                    <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 flex items-center justify-center font-bold text-lg animate-shake">
                      <AlertCircle className="mr-3 h-6 w-6" /> {pollError}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[450px]">
            <div className="sticky top-32 space-y-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 flex flex-col">
                <h3 className="text-3xl font-black mb-10 flex items-center">
                  <Package className="h-8 w-8 mr-3 text-[#FDB623]" /> {t('checkout', 'cartItems')}
                </h3>
                <div className="space-y-8 flex-1 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-5">
                        <div className="relative">
                           <img src={item.image} alt={PRODUCT_TRANSLATIONS[item.id]?.[language]?.name || item.name} className="h-20 w-20 object-cover rounded-2xl border border-gray-100 shadow-sm" />
                           <span className="absolute -top-3 -right-3 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border-4 border-white">
                             {item.quantity}
                           </span>
                        </div>
                        <div className="font-black text-xl text-gray-900 min-w-0 break-words">
                          {PRODUCT_TRANSLATIONS[item.id]?.[language]?.name || item.name}
                        </div>
                      </div>
                      <div className="font-black text-xl whitespace-nowrap ml-4">
                        {currencyMap[currency].symbol}{(item.price * item.quantity * currencyMap[currency].rate).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-10 border-t-4 border-gray-100 border-dashed space-y-5">
                  <div className="flex justify-between text-xl font-bold text-gray-500">
                    <span>{t('cart', 'subtotal')}</span>
                    <span>{currencyMap[currency].symbol}{(cartTotal * currencyMap[currency].rate).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-500">
                    <span>{t('cart', 'shipping')}</span>
                    <span>{currencyMap[currency].symbol}{shippingCostDisplay.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#FDB623] pt-4">
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
      </div>
    </div>
  );
};
