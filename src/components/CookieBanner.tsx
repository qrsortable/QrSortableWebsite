import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies, CookieSettings } from '../contexts/CookieContext';
import { useTranslation } from '../contexts/LanguageContext';
import { Shield, X, AlertCircle, Settings, Check, ArrowRight } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { cookies, updateCookies, showManager, setShowManager } = useCookies();
  const { t } = useTranslation();
  const [localSettings, setLocalSettings] = useState<CookieSettings>(cookies);

  useEffect(() => {
    setLocalSettings(cookies);
  }, [cookies, showManager]);

  if (cookies.consented && !showManager) return null;

  const handleAcceptAll = () => {
    updateCookies({ essential: true, analytics: true, marketing: true });
    setShowManager(false);
  };

  const handleAcceptEssential = () => {
    updateCookies({ essential: true, analytics: false, marketing: false });
    setShowManager(false);
  };

  const handleSavePreferences = () => {
    updateCookies(localSettings);
    setShowManager(false);
  };

  const categories = [
    { key: 'essential', disabled: true },
    { key: 'analytics', disabled: false },
    { key: 'marketing', disabled: false },
  ];

  // Manager View (Modal)
  if (showManager) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-fadeIn">
        <div className="w-full max-w-2xl animate-in zoom-in-95 duration-300">
          <div className="bg-[#111] text-white p-8 sm:p-12 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDB623]/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#FDB623] rounded-2xl shadow-lg">
                    <Settings className="text-black" size={24} />
                  </div>
                  <h2 className="text-3xl font-black">{t('cookies', 'banner.customize')}</h2>
                </div>
                <button 
                  onClick={() => setShowManager(false)}
                  className="p-3 hover:bg-white/10 rounded-2xl transition-colors text-gray-500 hover:text-white"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="space-y-4 mb-12">
                {categories.map((cat) => (
                  <div key={cat.key} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-[#FDB623]/20 transition-all">
                    <div className="flex-1 mr-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-black text-xl capitalize">{t('cookies', `manager.${cat.key}.title`)}</h4>
                        {cat.disabled && (
                          <span className="px-3 py-1 bg-white/10 text-[10px] font-black uppercase rounded-lg text-gray-300 tracking-widest">Required</span>
                        )}
                      </div>
                      <p className="text-gray-300 font-bold leading-relaxed">{t('cookies', `manager.${cat.key}.desc`)}</p>
                    </div>
                    <button 
                      onClick={() => !cat.disabled && setLocalSettings(prev => ({ ...prev, [cat.key]: !prev[cat.key as keyof CookieSettings] }))}
                      className={`w-16 h-9 rounded-full relative transition-all shadow-inner px-1 flex items-center ${
                        localSettings[cat.key as keyof CookieSettings] ? 'bg-[#FDB623]' : 'bg-gray-800'
                      } ${cat.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}`}
                    >
                      <div className={`w-7 h-7 bg-white rounded-full shadow-md transition-all transform ${
                        localSettings[cat.key as keyof CookieSettings] ? 'translate-x-7' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAcceptAll}
                  className="bg-[#FDB623] text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-all shadow-xl active:scale-95 flex-1 order-2 sm:order-1"
                >
                  {t('cookies', 'banner.acceptAll')}
                </button>
                <button 
                  onClick={handleSavePreferences}
                  className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-xl active:scale-95 flex-1 order-1 sm:order-2 flex items-center justify-center space-x-2"
                >
                  <Check size={20} />
                  <span>{t('cookies', 'banner.save')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Initial Banner View (Bottom Floating)
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-12 flex justify-center pointer-events-none">
      <div className="w-full max-w-4xl bg-[#0a0a0c] text-white p-8 sm:p-12 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5 relative overflow-hidden pointer-events-auto animate-slideUp">
        {/* Subtle Background dots/stars effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full w-1 h-1" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
            <div className="flex-shrink-0">
               <div className="w-24 h-24 bg-[#FDB623] rounded-[2rem] flex items-center justify-center shadow-[0_10px_30px_rgba(253,182,35,0.3)]">
                  <div className="w-12 h-12 border-4 border-black rounded-lg flex items-center justify-center">
                    <Check className="text-black" size={24} strokeWidth={4} />
                  </div>
               </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-4 tracking-tight">
                {t('cookies', 'banner.title')}
              </h2>
              <p className="text-gray-300 font-bold text-xl leading-relaxed max-w-3xl">
                {t('cookies', 'banner.desc')}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={handleAcceptAll}
                className="bg-[#FDB623] text-black px-14 py-5 rounded-[1.5rem] font-black text-xl hover:bg-yellow-400 transition-all shadow-xl active:scale-95 w-full sm:w-auto flex items-center justify-center"
              >
                {t('cookies', 'banner.acceptAll')}
              </button>
              <button 
                onClick={() => setShowManager(true)}
                className="bg-white/10 text-white px-10 py-5 rounded-[1.5rem] font-black text-xl hover:bg-white/20 transition-all border border-white/10 active:scale-95 w-full sm:w-auto flex items-center justify-center"
              >
                {t('cookies', 'banner.customize')}
              </button>
            </div>
            
            <button 
              onClick={handleAcceptEssential}
              className="text-gray-500 hover:text-white font-black text-lg transition-colors px-4 py-2"
            >
              {t('cookies', 'banner.essentialOnly')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
