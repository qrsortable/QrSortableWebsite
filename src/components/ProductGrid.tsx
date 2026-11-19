import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Star,
  ArrowRight,
  Truck,
  QrCode,
  ScanBarcode,
  Zap,
  Printer,
} from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { PRODUCTS, PRODUCT_TRANSLATIONS, DIGITAL_PDF_FEEDBACK_PRODUCT_NAME } from '../constants/products';
import { GENERATOR_STUDIO_TRANSLATIONS } from '../constants/codeGeneratorTranslations';
import { COLOR_SWATCH_PRESETS } from '../constants/colorSwatches';
import { PRICE_PER_PAGE_EUR } from '../utils/labelPdfGenerator';
import { StarRating } from './StarRating';
import { useProductFeedback } from '../contexts/FeedbackContext';
import { GeneratorCodeType, GeneratorPageFormat } from '../types';

const PROMO_SWATCHES = COLOR_SWATCH_PRESETS.slice(0, 5);

const DigitalGeneratorPromoCard: React.FC = () => {
  const { language, localizePath } = useTranslation();
  const langKey = (['EN', 'DE', 'FR', 'ES'].includes(language) ? language : 'EN') as 'EN' | 'DE' | 'FR' | 'ES';
  const genT = GENERATOR_STUDIO_TRANSLATIONS[langKey];

  const [codeType, setCodeType] = useState<GeneratorCodeType>('qr');
  const [pageFormat, setPageFormat] = useState<GeneratorPageFormat>('A5');
  const [selectedHex, setSelectedHex] = useState<string>('#2563EB');
  const { reviews } = useProductFeedback(DIGITAL_PDF_FEEDBACK_PRODUCT_NAME);
  const avgRating = reviews.length > 0 ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length : 0;

  const reviewsUrl = localizePath('/features/qr-code-generator-storage#reviews');
  const studioUrl = localizePath(
    `/features/qr-code-generator-storage?type=${codeType}&format=${pageFormat}&color=${encodeURIComponent(selectedHex.slice(1))}#generator-studio`
  );
  const activePrice = PRICE_PER_PAGE_EUR[pageFormat];

  return (
    <div className="bg-gray-900 text-white rounded-[3rem] p-6 xl:p-8 shadow-[0_25px_60px_-15px_rgba(253,182,35,0.28)] hover:shadow-[0_30px_70px_-12px_rgba(253,182,35,0.4)] transition-all border-2 border-[#FDB623]/70 flex flex-col group h-full relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FDB623]/15 blur-[70px] rounded-full pointer-events-none" />

      {/* Visual interactive preview stage matching aspect-square image slot */}
      <div className="relative mb-6 rounded-[2rem] bg-gradient-to-br from-gray-800/95 via-[#181818] to-black border border-white/10 aspect-square p-2.5 xl:p-3 flex flex-col justify-between gap-1.5 overflow-hidden">
        <div className="flex items-center justify-center z-10 shrink-0">
          <span className="bg-[#FDB623] text-black px-2.5 py-1 rounded-full text-[9.5px] xl:text-[10.5px] font-black uppercase tracking-wide inline-flex items-center gap-1 shadow-md max-w-full truncate">
            <Zap className="h-3 w-3 fill-current shrink-0" />
            <span className="truncate">{genT.promoBadge}</span>
          </span>
        </div>

        {/* Miniature sample labels visual */}
        <Link
          to={studioUrl}
          aria-label={genT.promoQuickCustomizeAria}
          className="flex-1 min-h-0 flex items-center justify-center relative group/preview"
        >
          <div className="flex items-center justify-center gap-2 w-full px-1">
            {/* QR Sample Mini Sticker */}
            <div
              onClick={(e) => {
                e.preventDefault();
                setCodeType('qr');
              }}
              className={`bg-white rounded-xl xl:rounded-2xl p-2 xl:p-2.5 shadow-xl border-2 transition-all duration-300 w-[49%] flex flex-col items-center cursor-pointer ${
                codeType === 'qr'
                  ? 'border-[#FDB623] scale-[1.03] -rotate-2 z-10'
                  : 'border-gray-200 opacity-75 scale-95 -rotate-3 hover:opacity-100'
              }`}
            >
              <span className="text-[8.5px] xl:text-[9.5px] font-black tracking-widest text-gray-900 mb-0.5">QR·626</span>
              <QrCode
                className="w-8 h-8 sm:w-10 sm:h-10 xl:w-11 xl:h-11 transition-colors"
                style={{ color: selectedHex }}
                strokeWidth={2}
              />
              <span className="mt-1 text-[8.5px] xl:text-[9.5px] font-black text-gray-700 truncate max-w-full">
                {genT.promoSampleTag}
              </span>
            </div>

            {/* Barcode Sample Mini Sticker */}
            <div
              onClick={(e) => {
                e.preventDefault();
                setCodeType('barcode');
              }}
              className={`bg-white rounded-xl xl:rounded-2xl p-2 xl:p-2.5 shadow-xl border-2 transition-all duration-300 w-[47%] flex flex-col items-center cursor-pointer ${
                codeType === 'barcode'
                  ? 'border-[#FDB623] scale-[1.03] rotate-2 z-10'
                  : 'border-gray-200 opacity-75 scale-95 rotate-3 hover:opacity-100'
              }`}
            >
              <span className="text-[8.5px] xl:text-[9.5px] font-black tracking-widest text-gray-900 mb-0.5">BC·804</span>
              <ScanBarcode className="w-8 h-8 sm:w-10 sm:h-10 xl:w-11 xl:h-11 text-black" strokeWidth={2} />
              <span className="mt-1 text-[8.5px] xl:text-[9.5px] font-black text-gray-700 truncate max-w-full">
                {genT.promoBarcodeTag}
              </span>
            </div>
          </div>
        </Link>

        {/* Quick Color & Format Selectors */}
        <div className="shrink-0 flex items-center justify-between gap-1.5 bg-black/65 backdrop-blur-sm border border-white/10 rounded-xl px-2 py-1.5 z-10 w-full">
          <div className="flex items-center gap-1 xl:gap-1.5 shrink-0" aria-label={genT.promoColorHint}>
            {PROMO_SWATCHES.map((swatch) => {
              const active = selectedHex === swatch.hex.toUpperCase();
              return (
                <button
                  key={swatch.hex}
                  type="button"
                  onClick={() => {
                    setCodeType('qr');
                    setSelectedHex(swatch.hex.toUpperCase());
                  }}
                  title={swatch.names[langKey]}
                  aria-label={`${swatch.names[langKey]} (${swatch.hex})`}
                  className={`w-3 h-3 xl:w-3.5 xl:h-3.5 rounded-full border transition-transform cursor-pointer shrink-0 ${
                    active ? 'ring-2 ring-[#FDB623] scale-110 border-white' : 'border-white/40 hover:scale-110'
                  }`}
                  style={{ backgroundColor: swatch.hex }}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-0.5 bg-white/10 rounded-lg p-0.5 shrink-0">
            {(['A5', 'A4'] as GeneratorPageFormat[]).map((fmt) => (
              <button
                key={fmt}
                type="button"
                onClick={() => setPageFormat(fmt)}
                className={`px-1.5 py-0.5 rounded-md text-[9px] xl:text-[10px] font-black transition-colors cursor-pointer whitespace-nowrap ${
                  pageFormat === fmt
                    ? 'bg-[#FDB623] text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {fmt} €{PRICE_PER_PAGE_EUR[fmt]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content block aligned with ProductCard */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <Link to={reviewsUrl} className="inline-flex items-center hover:opacity-85 transition-opacity">
            <StarRating rating={avgRating} size={16} count={reviews.length} showLabel dark />
          </Link>
        </div>

        <Link to={studioUrl} className="block">
          <h3 className="text-2xl font-black text-white group-hover:text-[#FDB623] transition-colors leading-tight min-h-[4.5rem] flex items-start pt-4">
            {genT.promoTitle}
          </h3>
        </Link>

        <p className="text-gray-300 font-medium leading-relaxed line-clamp-3">
          {genT.promoDesc}
        </p>

        <div className="flex items-center space-x-2 text-emerald-400">
          <Printer size={16} className="shrink-0" />
          <span className="text-sm font-black uppercase tracking-wider">{genT.promoFulfillment}</span>
        </div>

        <div className="pt-4 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs font-black text-gray-400 uppercase">{genT.promoFrom}</span>
              <span className="text-4xl font-black text-[#FDB623]">€{activePrice}</span>
            </div>
            <span className="text-[11px] font-bold text-gray-400">
              {genT.promoPriceSub}
            </span>
          </div>
          <Link
            to={studioUrl}
            aria-label={genT.promoPrimaryCta}
            className="p-5 bg-[#FDB623] text-black hover:bg-yellow-400 rounded-2xl transition-all shadow-lg active:scale-95 group/btn shrink-0"
          >
            <Printer size={24} className="group-hover/btn:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      <Link
        to={studioUrl}
        className="mt-8 py-4 px-6 bg-[#FDB623] text-black hover:bg-yellow-400 rounded-2xl text-center text-sm font-black transition-all shadow-lg flex items-center justify-center space-x-2 group/link"
      >
        <span>{genT.promoPrimaryCta}</span>
        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
};

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const { t, language, localizePath } = useTranslation();
  const { addToCart } = useCart();
  const { reviews } = useProductFeedback(product.name);
  
  const localized = PRODUCT_TRANSLATIONS[product.id]?.[language] || PRODUCT_TRANSLATIONS[product.id]?.['EN'] || {};
  const avgRating = reviews.length > 0 ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length : 0;

  return (
    <div className="bg-white rounded-[3rem] p-6 xl:p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col group h-full">
      <Link to={localizePath(`/product/${product.id}`)} className="block">
        <div className="relative mb-6 overflow-hidden rounded-[2rem] bg-gray-50 aspect-square">
          <img 
            src={product.image} 
            alt={localized.name || product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {product.isPopular && (
             <div className="absolute top-4 left-4 bg-black text-[#FDB623] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
               {t('shop', 'bestValue')}
             </div>
          )}
        </div>
      </Link>
      
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <StarRating rating={avgRating} size={16} count={reviews.length} showLabel />
        </div>
        
        <Link to={localizePath(`/product/${product.id}`)} className="block">
          <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#FDB623] transition-colors leading-tight min-h-[4.5rem] flex items-start pt-4">
            {localized.name || product.name}
          </h3>
        </Link>
        
        <p className="text-gray-700 font-medium leading-relaxed line-clamp-3">
          {localized.description || product.description}
        </p>
        
        <div className="flex items-center space-x-2 text-green-500">
           <Truck size={16} />
           <span className="text-sm font-black uppercase tracking-wider">{t('shop', 'ships24')}</span>
        </div>

        <div className="pt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-4xl font-black text-gray-900">€{product.price}</span>
            <span className="text-xs font-black text-gray-700 uppercase tracking-widest">{t('shop', 'incVat')}</span>
          </div>
          <button 
            onClick={() => addToCart(product)}
            aria-label={`${t('shop', 'addToCart')}: ${localized.name || product.name}`}
            className="p-5 bg-black text-white hover:bg-[#FDB623] hover:text-black rounded-2xl transition-all shadow-lg active:scale-95 group/btn"
          >
            <ShoppingCart size={24} className="group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
      <Link 
        to={localizePath(`/product/${product.id}`)}
        className="mt-8 py-4 px-6 bg-gray-50 rounded-2xl text-center text-sm font-black text-gray-900 hover:bg-gray-100 transition-all border border-gray-100 flex items-center justify-center space-x-2 group/link"
      >
        <span>{t('shop', 'viewDetails')}</span>
        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
};

export const ProductGrid: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="products" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fadeIn">
          <div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">{t('shop', 'title')}</h2>
            <p className="text-2xl text-gray-500 font-bold max-w-2xl">{t('shop', 'subtitle')}</p>
          </div>
        </div>

        {/* Symmetrical 4-column product grid: 1st Place Instant PDF Spotlight + 3 Physical Packs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          <DigitalGeneratorPromoCard />
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Sleek Custom Bulk / Business Banner underneath the 4-card row */}
        <div className="mt-12 bg-gray-900 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB623]/20 blur-[70px] -mr-12 -mt-12 rounded-full pointer-events-none" />
          <div className="flex items-center gap-6 relative z-10 text-center md:text-left flex-col sm:flex-row">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#FDB623] shrink-0">
              <Star size={32} className="fill-current" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white">{t('shop', 'needCustom')}</h3>
              <p className="text-base md:text-lg text-gray-300 font-bold mt-1">{t('shop', 'customDesc')}</p>
            </div>
          </div>
          <a
            href="mailto:info@qrsortable.com"
            className="relative z-10 shrink-0 px-8 py-4 bg-[#FDB623] text-black font-black text-lg rounded-2xl hover:bg-yellow-400 transition-all shadow-lg active:scale-95"
          >
            {t('shop', 'getAQuote')}
          </a>
        </div>
      </div>
    </section>
  );
};
