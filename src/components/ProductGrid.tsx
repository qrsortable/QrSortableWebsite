import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowRight, Truck } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { PRODUCTS, PRODUCT_TRANSLATIONS } from '../constants/products';
import { StarRating } from './StarRating';
import { useProductFeedback } from '../contexts/FeedbackContext';

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const { t, language } = useTranslation();
  const { addToCart } = useCart();
  const { reviews, isLoading } = useProductFeedback(product.name);
  
  const localized = PRODUCT_TRANSLATIONS[product.id]?.[language] || PRODUCT_TRANSLATIONS[product.id]?.['EN'] || {};
  const avgRating = reviews.length > 0 ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length : 0;

  return (
    <div className="bg-white rounded-[3rem] p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col group h-full">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative mb-8 overflow-hidden rounded-[2rem] bg-gray-50 aspect-square">
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
        
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#FDB623] transition-colors leading-tight min-h-[4.5rem] flex items-start pt-4">
            {localized.name || product.name}
          </h3>
        </Link>
        
        <p className="text-gray-500 font-bold leading-relaxed line-clamp-3">
          {localized.description || product.description}
        </p>
        
        <div className="flex items-center space-x-2 text-green-500">
           <Truck size={16} />
           <span className="text-sm font-black uppercase tracking-wider">{t('shop', 'ships24')}</span>
        </div>

        <div className="pt-6 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-4xl font-black text-gray-900">€{product.price}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('shop', 'incVat')}</span>
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="p-5 bg-black text-white hover:bg-[#FDB623] hover:text-black rounded-2xl transition-all shadow-lg active:scale-95 group/btn"
          >
            <ShoppingCart size={24} className="group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
      <Link 
        to={`/product/${product.id}`}
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-fadeIn">
          <div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">{t('shop', 'title')}</h2>
            <p className="text-2xl text-gray-500 font-bold max-w-2xl">{t('shop', 'subtitle')}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Custom label pack teaser */}
          <div className="bg-gray-900 rounded-[3rem] p-10 shadow-xl border border-white/5 flex flex-col justify-center text-center group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB623]/20 blur-[60px] -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform" />
             <div className="relative z-10">
               <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#FDB623]">
                 <Star size={40} className="fill-current" />
               </div>
               <h3 className="text-3xl font-black text-white mb-6">{t('shop', 'needCustom')}</h3>
               <p className="text-lg text-gray-400 font-bold mb-10 leading-relaxed">{t('shop', 'customDesc')}</p>
               <a href="mailto:qrsortable@gmail.com" className="inline-block px-8 py-4 bg-[#FDB623] text-black font-black text-lg rounded-2xl hover:bg-yellow-400 transition-all shadow-lg active:scale-95">
                 {t('shop', 'getAQuote')}
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
