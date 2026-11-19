import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Check, ExternalLink, FileDown, Loader2, Printer } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../contexts/LanguageContext';
import { GENERATOR_STUDIO_TRANSLATIONS } from '../constants/codeGeneratorTranslations';
import {
  finalizePaidDigitalOrder,
  getPaidPdfOrderById,
  hasAutoDownloadedOrder,
  markOrderAutoDownloaded,
} from '../utils/paidPdfOrders';
import {
  generateLabelsPdfBlob,
  triggerBlobDownload,
  triggerSequentialBlobDownloads,
} from '../utils/labelPdfGenerator';
import { PaidPdfItem, PaidPdfOrder } from '../types';

interface PreparedPdfEntry {
  url: string;
  filename: string;
  blob: Blob;
  cutLines: boolean;
}

const APPS_SCRIPT_CHECKOUT_URL =
  'https://script.google.com/macros/s/AKfycbxhKlj4fbiGR5wMA0zoSDtuYow7vTfN0i6qQl1FmyDBLWFeNfnyanqBayvCQv4aXKVrUg/exec';

export const Success: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { t, language, localizePath } = useTranslation();
  const genT = GENERATOR_STUDIO_TRANSLATIONS[language as 'EN' | 'DE' | 'FR' | 'ES'] || GENERATOR_STUDIO_TRANSLATIONS.EN;

  const orderId = searchParams.get('orderId');
  const [paidOrder, setPaidOrder] = useState<PaidPdfOrder | null>(() => {
    if (!orderId) return null;
    return getPaidPdfOrderById(orderId);
  });
  const [isVerifyingOrder, setIsVerifyingOrder] = useState(false);

  useEffect(() => {
    if (!orderId) {
      setPaidOrder(null);
      return;
    }
    const existing = getPaidPdfOrderById(orderId);
    if (existing) {
      setPaidOrder(existing);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);
    setIsVerifyingOrder(true);
    fetch(`${APPS_SCRIPT_CHECKOUT_URL}?orderId=${encodeURIComponent(orderId)}`, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((result) => {
        if (cancelled) return;
        if (result?.status === 'paid') {
          const unlocked = finalizePaidDigitalOrder(
            orderId,
            result.email,
            result.digitalCartItems
          );
          if (unlocked) setPaidOrder(unlocked);
        }
      })
      .catch(() => {
        // Leave paidOrder null if server verification fails or times out
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
        if (!cancelled) setIsVerifyingOrder(false);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [orderId]);

  const navState = (location.state as { hasPhysical?: boolean; hasDigital?: boolean } | null) || null;
  const hasPhysical = navState?.hasPhysical ?? false;

  const [cutLinesMap, setCutLinesMap] = useState<Record<string, boolean>>({});
  const [preparedMap, setPreparedMap] = useState<Record<string, PreparedPdfEntry>>({});
  const [preparingIds, setPreparingIds] = useState<Record<string, boolean>>({});
  const preparedUrlsRef = useRef<string[]>([]);

  useEffect(() => {
    if (!paidOrder || paidOrder.items.length === 0) return;

    let cancelled = false;
    const orderItems = paidOrder.items;

    const buildAll = async () => {
      const nextEntries: Record<string, PreparedPdfEntry> = {};
      const pendingMark: Record<string, boolean> = {};

      for (const item of orderItems) {
        const cutOn = cutLinesMap[item.id] ?? Boolean(item.showCutLines);
        const existing = preparedMap[item.id];
        if (existing && existing.cutLines === cutOn) {
          nextEntries[item.id] = existing;
          continue;
        }
        pendingMark[item.id] = true;
      }

      if (Object.keys(pendingMark).length > 0 && !cancelled) {
        setPreparingIds((prev) => ({ ...prev, ...pendingMark }));
      }

      const newlyCreatedFiles: Array<{ url: string; filename: string }> = [];

      for (const item of orderItems) {
        if (cancelled) return;
        const cutOn = cutLinesMap[item.id] ?? Boolean(item.showCutLines);
        if (nextEntries[item.id]) continue;

        try {
          const { blob, filename } = await generateLabelsPdfBlob(item, item.codes, { showCutLines: cutOn });
          if (cancelled) return;
          const url = URL.createObjectURL(blob);
          preparedUrlsRef.current.push(url);
          nextEntries[item.id] = { url, filename, blob, cutLines: cutOn };
          newlyCreatedFiles.push({ url, filename });
        } finally {
          if (!cancelled) {
            setPreparingIds((prev) => ({ ...prev, [item.id]: false }));
          }
        }
      }

      if (cancelled) return;
      setPreparedMap((prev) => ({ ...prev, ...nextEntries }));

      if (
        newlyCreatedFiles.length > 0 &&
        !hasAutoDownloadedOrder(paidOrder.orderId)
      ) {
        markOrderAutoDownloaded(paidOrder.orderId);
        await triggerSequentialBlobDownloads(newlyCreatedFiles);
      }
    };

    buildAll();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paidOrder, cutLinesMap]);

  useEffect(() => {
    return () => {
      for (const url of preparedUrlsRef.current) {
        URL.revokeObjectURL(url);
      }
      preparedUrlsRef.current = [];
    };
  }, []);

  const handleFallbackDownload = async (item: PaidPdfItem) => {
    const cutOn = cutLinesMap[item.id] ?? Boolean(item.showCutLines);
    const prepared = preparedMap[item.id];
    if (prepared && prepared.cutLines === cutOn) {
      triggerBlobDownload(prepared.blob, prepared.filename);
      return;
    }
    setPreparingIds((prev) => ({ ...prev, [item.id]: true }));
    try {
      const { blob, filename } = await generateLabelsPdfBlob(item, item.codes, { showCutLines: cutOn });
      triggerBlobDownload(blob, filename);
    } finally {
      setPreparingIds((prev) => ({ ...prev, [item.id]: false }));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 md:p-10 text-center">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{t('success', 'titleSeo')}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-green-100 p-5 rounded-full mb-8">
        {isVerifyingOrder ? (
          <Loader2 className="h-20 w-20 text-[#FDB623] animate-spin" />
        ) : (
          <Check className="h-20 w-20 text-green-600 animate-bounce" />
        )}
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
        {isVerifyingOrder ? genT.autoCheckingStatus : paidOrder ? genT.digitalSuccessTitle : t('success', 'title')}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 font-bold max-w-2xl">
        {isVerifyingOrder
          ? genT.preparingPdf
          : paidOrder
          ? hasPhysical
            ? genT.mixedSuccessSubtitle
            : genT.digitalSuccessSubtitle
          : t('success', 'message')}
      </p>

      {!paidOrder && orderId && (
        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">
          {t('success', 'orderIdLabel')}: {orderId}
        </p>
      )}

      {paidOrder && (
        <div className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-6 sm:p-8 text-left space-y-6 mb-10">
          {orderId && (
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">
              {t('success', 'orderIdLabel')}: {orderId}
            </p>
          )}

          <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm text-emerald-950 font-bold">
            <FileDown className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <span>{genT.autoDownloadNotice}</span>
          </div>

          {paidOrder.items.map((item) => {
            const cutOn = cutLinesMap[item.id] ?? Boolean(item.showCutLines);
            const prepared = preparedMap[item.id];
            const isBusy = Boolean(preparingIds[item.id]) || !prepared || prepared.cutLines !== cutOn;

            return (
              <div key={item.id} className="bg-gray-50 rounded-3xl p-6 border border-gray-200/80 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-6 w-6 rounded-full border-2 border-white shadow shrink-0"
                      style={{ backgroundColor: item.codeType === 'qr' ? item.hexColor : '#000000' }}
                    />
                    <div>
                      <h2 className="text-lg font-black text-gray-900">
                        {item.pageFormat} · {item.codeType === 'qr' ? genT.qrOption : genT.barcodeOption}
                      </h2>
                      <p className="text-sm font-bold text-gray-500">
                        {item.pageCount} {genT.pagesUnit} · {item.codes.length} {genT.labelsUnit}
                        {item.tagName ? ` · ${genT.tagPrefix}: "${item.tagName}"` : ''}
                      </p>
                    </div>
                  </div>
                </div>

                <label className="flex items-center gap-3 text-sm font-bold text-gray-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={cutOn}
                    onChange={(e) => setCutLinesMap((prev) => ({ ...prev, [item.id]: e.target.checked }))}
                    className="h-4 w-4 rounded accent-[#FDB623]"
                  />
                  <span>{genT.cutLinesLabel}</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {!isBusy && prepared ? (
                    <>
                      <a
                        href={prepared.url}
                        download={prepared.filename}
                        className="w-full bg-[#FDB623] text-black py-4 px-5 rounded-2xl font-black text-base sm:text-lg hover:bg-yellow-400 shadow-md flex items-center justify-center gap-2.5 transition-all text-center"
                      >
                        <FileDown className="h-5 w-5 shrink-0" />
                        <span>{genT.downloadPdfBtn}</span>
                      </a>
                      <a
                        href={prepared.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gray-900 text-white py-4 px-5 rounded-2xl font-black text-base sm:text-lg hover:bg-gray-800 shadow-md flex items-center justify-center gap-2.5 transition-all text-center"
                      >
                        <ExternalLink className="h-5 w-5 text-[#FDB623] shrink-0" />
                        <span>{genT.openPdfBtn}</span>
                      </a>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleFallbackDownload(item)}
                      disabled={isBusy}
                      className="sm:col-span-2 w-full bg-[#FDB623] text-black py-4 px-6 rounded-2xl font-black text-lg hover:bg-yellow-400 shadow-md flex items-center justify-center gap-3 transition-all disabled:opacity-70 cursor-pointer"
                    >
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>{genT.preparingPdf}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex items-start gap-3 bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-sm text-gray-700 font-medium">
            <Printer className="h-5 w-5 text-[#FDB623] shrink-0 mt-0.5" />
            <span>{genT.digitalPrintTips}</span>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-6">
        {paidOrder && (
          <Link
            to={localizePath('/features/qr-code-generator-storage')}
            className="bg-gray-900 text-white font-black text-lg px-7 py-3.5 rounded-2xl hover:bg-gray-800 transition-colors"
          >
            {genT.backToGenerator}
          </Link>
        )}
        <button
          onClick={() => navigate(localizePath('/'))}
          className="text-[#FDB623] font-black text-2xl hover:underline transition-all cursor-pointer"
        >
          {t('success', 'backHome')}
        </button>
      </div>
    </main>
  );
};
