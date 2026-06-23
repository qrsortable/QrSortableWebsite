import React, { useState } from 'react';
import { Play, X, Check } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { BackgroundDots } from './BackgroundDots';

export const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  const lifestyleImageUrl = "https://lh3.googleusercontent.com/d/1iGzLhifarRidB0pD6LFKHvyR1vP7lD5T";
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="how-it-works" className="bg-abstract-dark text-white overflow-hidden relative">
       <BackgroundDots />
       <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
         <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            <div className="flex-1 w-full">
                <div className="text-center mb-20">
                  <h2 className="text-5xl md:text-6xl font-black mb-6">{t('howItWorks', 'title')}</h2>
                  <p className="text-2xl text-gray-400 mb-10">{t('howItWorks', 'subtitle')}</p>
                  
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full backdrop-blur-sm transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-[#FDB623] rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(253,182,35,0.4)]">
                      <Play className="h-5 w-5 fill-current ml-1" />
                    </div>
                    <span className="text-xl font-bold">{t('howItWorks', 'videoBtn')}</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
                  <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-1 bg-white/10 -z-10"></div>
                  <div className="relative group">
                     <div className="w-32 h-32 bg-[#FDB623] rounded-full flex items-center justify-center mx-auto mb-8 text-black text-4xl font-black shadow-[0_0_40px_rgba(253,182,35,0.4)] transition-transform group-hover:scale-110 border-8 border-[#1a1a1a]">1</div>
                     <h3 className="text-2xl font-black mb-4 text-[#FDB623]">{t('howItWorks', 'step1.title')}</h3>
                     <p className="text-xl text-gray-400 font-medium px-4">{t('howItWorks', 'step1.desc')}</p>
                  </div>
                  <div className="relative group">
                     <div className="w-32 h-32 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-8 text-4xl font-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-110 border-8 border-[#1a1a1a]">2</div>
                     <h3 className="text-2xl font-black mb-4">{t('howItWorks', 'step2.title')}</h3>
                     <p className="text-xl text-gray-400 font-medium px-4">{t('howItWorks', 'step2.desc')}</p>
                  </div>
                  <div className="relative group">
                     <div className="w-32 h-32 bg-[#FDB623] rounded-full flex items-center justify-center mx-auto mb-8 text-black text-4xl font-black shadow-[0_0_40px_rgba(253,182,35,0.4)] transition-transform group-hover:scale-110 border-8 border-[#1a1a1a]">3</div>
                     <h3 className="text-2xl font-black mb-4 text-[#FDB623]">{t('howItWorks', 'step3.title')}</h3>
                     <p className="text-xl text-gray-400 font-medium px-4">{t('howItWorks', 'step3.desc')}</p>
                  </div>
                </div>
            </div>
            <div className="lg:w-[500px] w-full flex-shrink-0">
               <div className="relative h-[700px] rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-500 group">
                   <img src={lifestyleImageUrl} alt="Scanning storage bins for smart organization" loading="lazy" className="w-full h-full object-cover transition-all duration-500" onError={(e) => {(e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";}} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/20">
                      <div className="flex items-center space-x-5">
                         <div className="bg-[#FDB623] p-3 rounded-2xl text-black">
                            <Check className="h-7 w-7" />
                         </div>
                         <div>
                            <p className="text-white font-black text-xl">{t('howItWorks', 'lifestyleTitle')}</p>
                            <p className="text-white/70 text-lg">{t('howItWorks', 'lifestyleDesc')}</p>
                         </div>
                      </div>
                   </div>
               </div>
            </div>
         </div>
       </div>

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
            
            <a 
              href="https://www.youtube.com/watch?v=foqUSgzAme0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-full h-full flex items-center justify-center group/play cursor-pointer overflow-hidden"
            >
                <img 
                  src="https://img.youtube.com/vi/foqUSgzAme0/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/play:scale-105 opacity-80 group-hover/play:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/play:bg-black/0 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#FDB623] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(253,182,35,0.6)] group-hover/play:scale-110 transition-transform duration-300">
                     <Play className="h-10 w-10 text-black fill-current ml-1" />
                  </div>
                </div>
            </a>
          </div>
        </div>
       )}
    </section>
  );
};
