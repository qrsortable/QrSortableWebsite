import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  QrCode,
  ScanBarcode,
  Minus,
  Plus,
  ShoppingCart,
  ArrowRight,
  Lock,
  Sparkles,
  FileDown,
  ExternalLink,
  Loader2,
  X,
  Check,
  Printer,
} from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { COLOR_SWATCH_PRESETS } from '../constants/colorSwatches';
import { suggestTagNames } from '../constants/tagNameSeed';
import { GENERATOR_STUDIO_TRANSLATIONS } from '../constants/codeGeneratorTranslations';
import {
  CODES_PER_PAGE,
  PRICE_PER_PAGE_EUR,
  generateLabelsPdfBlob,
  renderSampleLabelDataUrl,
  sanitizeHexColor,
  triggerBlobDownload,
} from '../utils/labelPdfGenerator';
import { getPaidPdfOrders } from '../utils/paidPdfOrders';
import { GeneratorCodeType, GeneratorPageFormat, PaidPdfItem, PaidPdfOrder } from '../types';

export const QrCodeGeneratorStudio: React.FC = () => {
  const { language, localizePath } = useTranslation();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const langKey = (['EN', 'DE', 'FR', 'ES'].includes(language) ? language : 'EN') as 'EN' | 'DE' | 'FR' | 'ES';
  const genT = GENERATOR_STUDIO_TRANSLATIONS[langKey];

  const [codeType, setCodeType] = useState<GeneratorCodeType>(() => {
    const paramType = searchParams.get('type');
    return paramType === 'barcode' ? 'barcode' : 'qr';
  });
  const [pageFormat, setPageFormat] = useState<GeneratorPageFormat>(() => {
    const paramFmt = searchParams.get('format')?.toUpperCase();
    return paramFmt === 'A5' ? 'A5' : 'A4';
  });
  const [pageCount, setPageCount] = useState<number>(1);
  const [tagName, setTagName] = useState<string>('');
  const [hexColor, setHexColor] = useState<string>(() => {
    const paramColor = searchParams.get('color');
    return paramColor ? sanitizeHexColor(paramColor) : '#000000';
  });
  const [showCutLines, setShowCutLines] = useState<boolean>(false);
  const [tagFocused, setTagFocused] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [paidOrders, setPaidOrders] = useState<PaidPdfOrder[]>(() => getPaidPdfOrders());
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const unitPrice = PRICE_PER_PAGE_EUR[pageFormat];
  const codesPerPage = CODES_PER_PAGE[pageFormat];
  const totalLabels = pageCount * codesPerPage;
  const totalPrice = pageCount * unitPrice;

  const suggestions = useMemo(() => {
    if (!tagFocused && !tagName.trim()) {
      return suggestTagNames('', langKey);
    }
    return suggestTagNames(tagName, langKey);
  }, [tagName, tagFocused, langKey]);

  useEffect(() => {
    let active = true;
    const effectiveHex = codeType === 'qr' ? sanitizeHexColor(hexColor) : '#000000';
    renderSampleLabelDataUrl(
      { codeType, tagName, hexColor: effectiveHex },
      genT.previewWatermark
    ).then((url) => {
      if (active) setPreviewUrl(url);
    });
    return () => {
      active = false;
    };
  }, [codeType, tagName, hexColor, genT.previewWatermark]);

  useEffect(() => {
    setPaidOrders(getPaidPdfOrders());
  }, []);

  useEffect(() => {
    if (location.hash === '#generator-studio') {
      const el = document.getElementById('generator-studio');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    }
  }, [location.hash]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  };

  const handleIncreasePages = () => {
    if (pageCount >= 5) {
      showToast(genT.maxPagesToast);
      return;
    }
    setPageCount((p) => p + 1);
  };

  const handleDecreasePages = () => {
    if (pageCount > 1) {
      setPageCount((p) => p - 1);
    }
  };

  const buildCartProduct = () => {
    const cleanTag = tagName.trim();
    const effectiveHex = codeType === 'qr' ? sanitizeHexColor(hexColor) : '#000000';
    const slugTag = cleanTag ? cleanTag.toLowerCase().replace(/[^a-z0-9]+/gi, '-') : 'notag';
    const id = `pdf-sheet-${codeType}-${pageFormat}-${effectiveHex.slice(1)}-${slugTag}-${showCutLines ? 'cut' : 'nocut'}`;

    return {
      id,
      name: `${genT.orderLabelPrefix} (${pageFormat} · ${codeType === 'qr' ? genT.qrOption : genT.barcodeOption})`,
      price: unitPrice,
      description: `${codesPerPage} ${genT.labelsUnit}/${genT.pagesUnit}${cleanTag ? ` · ${cleanTag}` : ''}`,
      features: [`${codesPerPage} ${genT.labelsUnit}`, codeType === 'qr' ? genT.qrOption : genT.barcodeOption, pageFormat],
      image: previewUrl || '/images/feature_codegenerated.png',
      isDigital: true,
      generatorConfig: {
        codeType,
        pageFormat,
        pageCount,
        tagName: cleanTag,
        hexColor: effectiveHex,
        showCutLines,
      },
    };
  };

  const handlePayNow = () => {
    const product = buildCartProduct();
    addToCart(product, { openDrawer: false, quantity: pageCount });
    navigate(localizePath('/checkout'));
  };

  const handleAddToCart = () => {
    const product = buildCartProduct();
    addToCart(product, { openDrawer: true, quantity: pageCount });
    showToast(genT.addedToast);
  };

  const handleRedownload = async (orderId: string, item: PaidPdfItem) => {
    const rowKey = `${orderId}-${item.id}`;
    setDownloadingId(rowKey);
    try {
      const { blob, filename } = await generateLabelsPdfBlob(item, item.codes, {
        showCutLines: item.showCutLines,
      });
      triggerBlobDownload(blob, filename);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section id="generator-studio" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
      <div className="bg-white rounded-[2.5rem] border border-gray-200/80 shadow-2xl overflow-hidden">
        {/* Studio Header */}
        <div className="bg-gray-900 text-white px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#FDB623] text-black px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="h-3.5 w-3.5" /> {genT.studioBadge}
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">
              {genT.studioTitle}
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-medium mt-2 max-w-2xl">
              {genT.studioSubtitle}
            </p>
          </div>
          <div
            className="shrink-0 flex items-center justify-center bg-white/10 border border-white/15 rounded-2xl p-3 text-gray-200"
            title={genT.previewEncryptedBadge}
            aria-label={genT.previewEncryptedBadge}
          >
            <Lock className="h-4 w-4 text-[#FDB623] shrink-0" />
          </div>
        </div>

        {/* Interactive Configurator + Live Preview */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Controls */}
          <div className="lg:col-span-7 space-y-7">
            {/* 1. Code Type */}
            <div>
              <label className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-3">
                {genT.codeTypeLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  type="button"
                  onClick={() => setCodeType('qr')}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    codeType === 'qr'
                      ? 'border-gray-900 bg-amber-50/70 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${codeType === 'qr' ? 'bg-[#FDB623] text-black' : 'bg-gray-100 text-gray-600'}`}>
                    <QrCode className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-gray-900">{genT.qrOption}</div>
                    <div className="text-xs font-medium text-gray-500">{genT.qrSub}</div>
                  </div>
                  {codeType === 'qr' && <Check className="h-5 w-5 text-gray-900 shrink-0" />}
                </button>

                <button
                  type="button"
                  onClick={() => setCodeType('barcode')}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    codeType === 'barcode'
                      ? 'border-gray-900 bg-amber-50/70 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${codeType === 'barcode' ? 'bg-[#FDB623] text-black' : 'bg-gray-100 text-gray-600'}`}>
                    <ScanBarcode className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-gray-900">{genT.barcodeOption}</div>
                    <div className="text-xs font-medium text-gray-500">{genT.barcodeSub}</div>
                  </div>
                  {codeType === 'barcode' && <Check className="h-5 w-5 text-gray-900 shrink-0" />}
                </button>
              </div>
            </div>

            {/* 2. Sheet Format */}
            <div>
              <label className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-3">
                {genT.sheetFormatLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(['A4', 'A5'] as GeneratorPageFormat[]).map((fmt) => {
                  const active = pageFormat === fmt;
                  return (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setPageFormat(fmt)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                        active
                          ? 'border-gray-900 bg-amber-50/70 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-gray-900">
                          {fmt === 'A4' ? genT.a4Option : genT.a5Option}
                        </span>
                        <span className="bg-gray-900 text-[#FDB623] text-xs font-black px-2.5 py-0.5 rounded-lg">
                          €{PRICE_PER_PAGE_EUR[fmt]}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-gray-500 mt-1">
                        {fmt === 'A4' ? genT.a4Sub : genT.a5Sub}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Page Count */}
            <div>
              <label className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-3">
                {genT.pageCountLabel}
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
                  <button
                    type="button"
                    onClick={handleDecreasePages}
                    disabled={pageCount <= 1}
                    aria-label={genT.decreasePagesAria}
                    className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-900 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="px-6 text-2xl font-black text-gray-900 tabular-nums">{pageCount}</span>
                  <button
                    type="button"
                    onClick={handleIncreasePages}
                    aria-label={genT.increasePagesAria}
                    className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                <div className="text-sm font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                  <span className="text-gray-900 font-black">{totalLabels}</span> {genT.labelsTotalLabel}
                </div>
              </div>
            </div>

            {/* 4. Tag Name + TagNameSeed Chips */}
            <div>
              <label htmlFor="generator-tag-input" className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                {genT.tagNameLabel}
              </label>
              <div className="relative">
                <input
                  id="generator-tag-input"
                  type="text"
                  maxLength={36}
                  value={tagName}
                  onFocus={() => setTagFocused(true)}
                  onBlur={() => setTimeout(() => setTagFocused(false), 180)}
                  onChange={(e) => setTagName(e.target.value)}
                  placeholder={genT.tagNamePlaceholder}
                  className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3.5 pr-11 text-base font-bold text-gray-900 outline-none focus:border-gray-900 focus:bg-white transition-all"
                />
                {tagName && (
                  <button
                    type="button"
                    onClick={() => setTagName('')}
                    aria-label={genT.clearTagAria}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-900 cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {suggestions.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-bold text-gray-500 mb-2">{genT.tagSuggestionsHint}</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => setTagName(chip)}
                        className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-[#FDB623] text-gray-800 hover:text-black text-xs font-bold border border-gray-200 transition-colors cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Color Swatch Bar (QR only) */}
            {codeType === 'qr' ? (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-black uppercase tracking-wider text-gray-700">
                    {genT.colorPickerLabel}
                  </label>
                  <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg">
                    {sanitizeHexColor(hexColor)}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {COLOR_SWATCH_PRESETS.map((swatch) => {
                    const selected = sanitizeHexColor(hexColor) === swatch.hex.toUpperCase();
                    return (
                      <button
                        key={swatch.hex}
                        type="button"
                        onClick={() => setHexColor(swatch.hex)}
                        title={swatch.names[langKey]}
                        aria-label={`${swatch.names[langKey]} (${swatch.hex})`}
                        className={`w-9 h-9 rounded-full border transition-transform cursor-pointer ${
                          selected
                            ? 'ring-3 ring-gray-900 ring-offset-2 scale-110 border-white'
                            : 'border-gray-300 hover:scale-105'
                        }`}
                        style={{ backgroundColor: swatch.hex }}
                      />
                    );
                  })}

                  <label className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 text-xs font-bold text-gray-700 cursor-pointer hover:bg-gray-200/70">
                    <input
                      type="color"
                      value={sanitizeHexColor(hexColor)}
                      onChange={(e) => setHexColor(e.target.value.toUpperCase())}
                      className="w-5 h-5 rounded-full border-0 bg-transparent cursor-pointer p-0"
                    />
                    <span>{genT.customHexLabel}</span>
                  </label>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-xs font-bold text-gray-600">
                {genT.barcodeColorNote}
              </div>
            )}

            {/* Cut guides option */}
            <label className="flex items-center gap-3 text-sm font-bold text-gray-700 cursor-pointer select-none pt-1">
              <input
                type="checkbox"
                checked={showCutLines}
                onChange={(e) => setShowCutLines(e.target.checked)}
                className="h-4 w-4 rounded accent-[#FDB623]"
              />
              <Printer className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{genT.cutLinesLabel}</span>
            </label>
          </div>

          {/* Right Column: Live Label Preview + Mollie Purchase */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <div className="bg-gray-50 rounded-[2rem] border border-gray-200 p-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-gray-500">
                  {genT.previewTitle}
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-md">
                  {genT.previewWatermark}
                </span>
              </div>

              <div className="bg-white rounded-3xl border-2 border-dashed border-gray-200 p-5 flex items-center justify-center min-h-[260px]">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt={genT.previewImgAlt}
                    className={`w-auto object-contain rounded-xl select-none pointer-events-none ${
                      codeType === 'qr' ? 'max-h-[240px]' : 'max-h-[175px]'
                    }`}
                  />
                ) : (
                  <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                )}
              </div>

              <p className="text-[11px] font-bold text-gray-500 text-center leading-snug">
                {genT.previewDummyNote}
              </p>

              {/* Price breakdown matching CodeGeneratorViewModel */}
              <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600 font-bold">
                  <span>{genT.pricePerSheet} ({pageFormat})</span>
                  <span>€{unitPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-bold">
                  <span>{pageCount} {genT.pagesUnit} · {totalLabels} {genT.labelsUnit}</span>
                  <span className="text-green-700 font-extrabold">{genT.shippingFreeLine}</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-gray-200/80">
                  <span className="text-lg font-black text-gray-900">{genT.totalPriceLabel}</span>
                  <span className="text-3xl font-black text-gray-900">€{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <button
                  type="button"
                  onClick={handlePayNow}
                  className="w-full bg-[#FDB623] hover:bg-yellow-400 text-black font-black text-base md:text-lg py-4 px-5 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>{genT.buyNowBtn}</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <ShoppingCart className="h-4 w-4 text-[#FDB623]" />
                  <span>{genT.addToCartBtn}</span>
                </button>
              </div>

              <p className="text-center text-xs font-bold text-gray-500">
                {genT.digitalDeliveryBadge}
              </p>
            </div>

            {toastMessage && (
              <div className="bg-gray-900 text-white text-sm font-bold px-4 py-3 rounded-2xl shadow-lg text-center animate-fadeIn">
                {toastMessage}
              </div>
            )}
          </div>
        </div>

        {/* Paid Digital Orders History (equivalent to Menu -> Orders -> Download) */}
        {paidOrders.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50/70 p-6 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl font-black text-gray-900">{genT.unlockedOrdersTitle}</h3>
                <p className="text-sm font-medium text-gray-500">{genT.unlockedOrdersSubtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paidOrders.map((order) =>
                order.items.map((item) => {
                  const rowKey = `${order.orderId}-${item.id}`;
                  return (
                    <div
                      key={rowKey}
                      className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-3.5 w-3.5 rounded-full border border-gray-300 shrink-0"
                            style={{ backgroundColor: item.codeType === 'qr' ? item.hexColor : '#000000' }}
                          />
                          <p className="font-black text-sm text-gray-900 truncate">
                            {item.pageFormat} · {item.codeType === 'qr' ? genT.qrOption : genT.barcodeOption}
                          </p>
                        </div>
                        <p className="text-xs font-bold text-gray-500 mt-1 truncate">
                          {item.pageCount} {genT.pagesUnit} · {item.codes.length} {genT.labelsUnit}
                          {item.tagName ? ` · "${item.tagName}"` : ''}
                        </p>
                        <p className="text-[11px] font-mono text-gray-400 mt-0.5 truncate">
                          {order.orderId}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleRedownload(order.orderId, item)}
                          disabled={downloadingId === rowKey}
                          className="bg-[#FDB623] hover:bg-yellow-400 text-black font-black text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors disabled:opacity-60 cursor-pointer"
                        >
                          {downloadingId === rowKey ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <FileDown className="h-4 w-4" />
                          )}
                          <span>{genT.redownloadPdfBtn}</span>
                        </button>
                        <Link
                          to={localizePath(`/success?orderId=${encodeURIComponent(order.orderId)}`)}
                          aria-label={genT.openPdfBtn}
                          title={genT.openPdfBtn}
                          className="bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs p-2.5 rounded-xl flex items-center justify-center transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 text-[#FDB623]" />
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
