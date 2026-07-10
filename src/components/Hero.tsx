import React from 'react';
import { Star, ArrowRight, Smartphone, Search, Send, ShoppingCart, Package, MapPin, Menu, QrCode } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { BackgroundDots } from './BackgroundDots';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const phoneBoxData = [
    { id: '2DGPL', room: 'Blue color closet', date: '16 Feb 2026, 9:30 pm', color: 'bg-red-600' },
    { id: '2DMPX', room: 'Kitchen closet', date: '18 Dec 2025, 10:30 pm', color: 'bg-blue-600' },
    { id: 'LLV626', room: 'Book closet', date: '23 Jan 2024, 10:30 pm', color: 'bg-[#FDB623]' },
    { id: 'LLP628', room: 'Spare parts closet', date: '28 Dec 2025, 11:35 am', color: 'bg-green-500' },
    { id: 'LEV636', room: 'Sport closet', date: '23 Nov 2025, 10:30 pm', color: 'bg-pink-500' },
  ];

  return (
    <div className="relative bg-abstract-dark text-white overflow-hidden min-h-[85vh] flex items-center">
      <BackgroundDots scale={1.5} />
      
      {/* Made in Germany Badge */}
      <div className="absolute top-28 right-8 lg:top-36 lg:right-12 z-30 animate-fadeIn pointer-events-none hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-sm font-black tracking-tight text-white mb-2 font-itim">{t('hero', 'madeInGermany')}</span>
          <div className="flex gap-1.5 mb-2">
            <div className="w-10 h-6 bg-black rounded-sm shadow-md" />
            <div className="w-10 h-6 bg-red-600 rounded-sm shadow-md" />
            <div className="w-10 h-6 bg-[#FFCC00] rounded-sm shadow-md" />
          </div>
          <div className="flex gap-1 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 text-[#FDB623] fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold text-white uppercase tracking-wider opacity-90">{t('hero', 'premiumQuality')}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-20 relative z-20">
        <div className="lg:w-1/2 text-center lg:text-left animate-fadeIn">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 text-[#FDB623] text-lg font-bold mb-8 border border-[#FDB623]/30">
            <Star className="h-6 w-6 mr-3 fill-current" />
            {t('hero', 'badge')}
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            {t('hero', 'title1')} <br />
            <span className="text-[#FDB623]">{t('hero', 'title2')}</span> {t('hero', 'title3')}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t('hero', 'subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({behavior:'smooth'})}
              className="px-10 py-5 bg-[#FDB623] text-black font-black text-2xl rounded-full shadow-2xl hover:bg-yellow-400 transform hover:scale-105 transition-all flex items-center justify-center"
            >
              {t('hero', 'cta')} <ArrowRight className="ml-3 h-7 w-7" />
            </button>
            <button 
               onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior:'smooth'})}
               className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 font-black text-2xl rounded-full hover:bg-white/20 transition-all"
            >
              {t('hero', 'secondaryCta')}
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-10 text-xl text-gray-400">
            <span className="flex items-center"><Smartphone className="h-6 w-6 mr-2" /> {t('hero', 'app')}</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
            <div className="relative w-80 h-[640px] bg-brand-dark rounded-[3.5rem] border-8 border-gray-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500 flex-shrink-0 z-20">
                 <div className="absolute top-0 w-full h-full bg-[#1a1a1a] flex flex-col">
                     <div className="p-6 pt-12 flex items-center space-x-4">
                        <div className="bg-[#2d2d2d] rounded-2xl flex items-center p-3 border border-white/10 shadow-inner flex-1">
                          <Search className="h-5 w-5 text-gray-500 ml-1" />
                          <span className="text-sm text-gray-400 ml-3 flex-1">{t('hero', 'searchPlaceholder')}</span>
                          <div className="bg-[#1a1a1a] p-2 rounded-xl shadow-md flex items-center justify-center">
                             <Send className="h-4 w-4 text-[#FDB623] fill-current" />
                          </div>
                        </div>
                        <div className="relative flex items-center">
                           <ShoppingCart className="h-8 w-8 text-[#FDB623]" />
                           <span className="absolute -top-4 -right-1 text-white text-xs font-black drop-shadow-md">2</span>
                        </div>
                     </div>
                     <div className="px-6 mb-3">
                        <div className="text-[#FDB623] font-black text-2xl text-center">{t('hero', 'storageRoom')}</div>
                     </div>
                     <div className="flex-1 overflow-y-auto px-6 pb-28 space-y-4 custom-scrollbar">
                         {phoneBoxData.map((box, idx) => {
                              const isLightBg = box.color === 'bg-[#FDB623]';
                              return (
                                  <div key={idx} className={`${box.color} p-4 rounded-3xl shadow-lg relative overflow-hidden group`}>
                                      <div className="flex items-center">
                                          <div className="bg-white/20 p-2 rounded-xl mr-4 shadow-md">
                                             <Package className={`h-10 w-10 ${isLightBg ? 'text-gray-950' : 'text-white'}`} />
                                          </div>
                                          <div className="flex-1">
                                              <div className={`font-black text-lg tracking-wide ${isLightBg ? 'text-gray-950' : 'text-white'}`}>{box.id}</div>
                                              <div className={`flex items-center text-sm mt-1 ${isLightBg ? 'text-gray-900 font-bold' : 'text-gray-100 font-medium'}`}>
                                                 <MapPin className="h-4 w-4 mr-1.5" />
                                                 {box.room}
                                              </div>
                                              <p className={`text-xs mt-1.5 ${isLightBg ? 'text-gray-800 font-bold' : 'text-gray-200 font-medium'}`}>{box.date}</p>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })}
                     </div>
                     <div className="absolute bottom-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5 px-6 py-5">
                         <div className="flex items-center justify-between relative">
                            <div className="flex flex-col items-center opacity-50">
                              <Menu className="h-6 w-6 text-gray-400" />
                              <span className="text-[10px] text-gray-400 mt-1 uppercase font-black">Menu</span>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
                               <div className="w-20 h-20 bg-[#FDB623] rounded-3xl flex items-center justify-center shadow-[0_0_20px_rgba(253,182,35,0.4)] border-4 border-[#1a1a1a] transition-transform active:scale-95">
                                  <BrandLogo size={40} />
                               </div>
                            </div>
                            <div className="flex flex-col items-center opacity-50">
                              <QrCode className="h-6 w-6 text-gray-400" />
                              <span className="text-[10px] text-gray-400 mt-1 uppercase font-black">Generate</span>
                            </div>
                         </div>
                     </div>
                 </div>
            </div>
            
            <div className="relative flex-shrink-0 z-10 mt-[-60px] md:mt-0 md:ml-[-80px] lg:ml-[-60px]">
                <div className="w-56 bg-white rounded-[2rem] p-6 pb-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] transform md:rotate-12 transition-transform hover:rotate-0 duration-500 cursor-pointer flex flex-col items-center">
                    <div className="text-4xl font-black text-black mb-4 tracking-widest">LLV626</div>
                    <div className="w-full aspect-square bg-white p-2">
                         <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=LLV626&margin=0" 
                            alt="LLV626 QR" 
                            className="w-full h-full"
                            style={{ imageRendering: 'pixelated' }}
                            loading="eager"
                            fetchPriority="high"
                         />
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FDB623] blur-[80px] opacity-20 -z-10 pointer-events-none animate-pulse"></div>
            </div>
        </div>
      </div>
    </div>
  );
};
