import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ShoppingCart, Check, Info, ShieldCheck, Play, ArrowRight, X } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { useProductFeedback } from '../contexts/FeedbackContext';
import { PRODUCTS, PRODUCT_TRANSLATIONS } from '../constants/products';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StarRating } from '../components/StarRating';
import { FeedbackSection } from '../components/FeedbackSection';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const { reviews, isLoading } = useProductFeedback(product?.name || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div>{t('product', 'notFound')}</div>;

  const localized = PRODUCT_TRANSLATIONS[product.id]?.[language] || PRODUCT_TRANSLATIONS[product.id]?.['EN'] || {};
  const avgRating = reviews.length > 0 ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length : 0;
  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Helmet>
        <title>{`${localized.name || product.name} - QrSortable`}</title>
        <meta name="description" content={localized.description || product.description} />
        <meta property="og:title" content={`${localized.name || product.name} - QrSortable`} />
        <meta property="og:description" content={localized.description || product.description} />
        <meta property="og:image" content={product.image} />
        <link rel="alternate" hrefLang="en" href={`https://www.qrsortable.com/product/${product.id}?lang=en`} />
        <link rel="alternate" hrefLang="de" href={`https://www.qrsortable.com/product/${product.id}?lang=de`} />
        <link rel="alternate" hrefLang="fr" href={`https://www.qrsortable.com/product/${product.id}?lang=fr`} />
        <link rel="alternate" hrefLang="es" href={`https://www.qrsortable.com/product/${product.id}?lang=es`} />
        <link rel="alternate" hrefLang="x-default" href={`https://www.qrsortable.com/product/${product.id}`} />
        <link rel="canonical" href={`https://www.qrsortable.com/product/${product.id}${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": localized.name || product.name,
            "description": localized.description || product.description,
            "image": product.image,
            "brand": {
              "@type": "Brand",
              "name": "QrSortable"
            },
            "offers": {
              "@type": "Offer",
              "price": product.price,
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": avgRating || 4.7,
              "reviewCount": reviews.length || 24
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.qrsortable.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": localized.name || product.name,
                "item": `https://www.qrsortable.com/product/${product.id}`
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-black mb-12 text-xl font-bold transition-colors group"
        >
          <ChevronLeft className="h-7 w-7 mr-2 group-hover:-translate-x-1 transition-transform" /> {t('product', 'back')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8 animate-fadeIn">
            <div className="aspect-square bg-white rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative group">
               <img 
                 src={productImages[selectedImage]} 
                 alt={localized.name || product.name} 
                 className="w-full h-full object-cover"
                 loading="eager"
                 fetchPriority="high"
               />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all ${selectedImage === i ? 'border-[#FDB623] scale-105' : 'border-transparent hover:border-gray-200'}`}
                >
                  <img src={img} alt={`${localized.name || product.name} ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
              {/* Video Thumbnail */}
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="aspect-square rounded-2xl overflow-hidden border-4 border-transparent hover:border-gray-200 relative group/vid"
              >
                <img 
                  src={`https://img.youtube.com/vi/${product.video}/maxresdefault.jpg`} 
                  alt="Product Video" 
                  className="w-full h-full object-cover opacity-80 group-hover/vid:opacity-100 transition-opacity" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#FDB623] rounded-full flex items-center justify-center shadow-lg group-hover/vid:scale-110 transition-transform">
                    <Play className="h-5 w-5 text-black fill-current ml-1" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div>
              <div className="flex items-center space-x-4 mb-6">
                 <StarRating rating={avgRating} showLabel count={reviews.length} size={24} />
                 {product.isPopular && (
                    <span className="bg-black text-[#FDB623] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                      {t('shop', 'customerFavorite')}
                    </span>
                 )}
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight break-words">
                {localized.name || product.name}
              </h1>
              <p className="text-2xl text-gray-500 font-bold leading-relaxed mb-8">
                {localized.description || product.description}
              </p>
              <div className="flex items-baseline space-x-4">
                 <span className="text-6xl font-black text-gray-900">€{product.price}</span>
                 <span className="text-lg text-gray-400 font-bold uppercase tracking-widest">{t('shop', 'incVat')}</span>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
               <h3 className="text-xl font-black mb-8 uppercase tracking-widest">{t('product', 'included')}</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {(localized.features || product.features).map((feature: string, i: number) => (
                   <div key={feature} className="flex items-center font-bold text-gray-700 text-lg">
                     <div className="bg-green-100 p-1.5 rounded-lg mr-4">
                        <Check className="h-5 w-5 text-green-600" />
                     </div>
                     {feature}
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <button 
                 onClick={() => addToCart(product)}
                 className="flex-1 bg-black text-white py-6 px-10 rounded-2xl font-black text-2xl hover:bg-[#FDB623] hover:text-black transition-all shadow-xl active:scale-95 flex items-center justify-center group"
               >
                 <ShoppingCart className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform" /> {t('shop', 'addToCart')}
               </button>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
               <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-[#FDB623]">
                  <Info className="h-8 w-8" />
               </div>
               <h3 className="text-2xl font-black mb-6 uppercase tracking-widest">{t('product', 'specTitle')}</h3>
               <p className="text-gray-500 font-bold leading-relaxed">{t('product', 'spec1')}</p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
               <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-[#FDB623]">
                  <ShieldCheck className="h-8 w-8" />
               </div>
               <h3 className="text-2xl font-black mb-6 uppercase tracking-widest">{t('product', 'paymentTitle')}</h3>
               <p className="text-gray-500 font-bold leading-relaxed">{t('product', 'paymentDesc')}</p>
            </div>
        </div>

        {/* Feedback Section */}
        <FeedbackSection product={product} />
      </div>
      <Footer />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity" onClick={() => setIsVideoOpen(false)}></div>
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300 flex items-center justify-center group">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="w-full h-full relative">
               <iframe
                 src={`https://www.youtube.com/embed/${product.video}?autoplay=1`}
                 title="Product Video"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                 className="w-full h-full"
               ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
