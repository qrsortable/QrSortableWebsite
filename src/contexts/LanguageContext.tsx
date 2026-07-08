import React, { createContext, useContext, useState } from 'react';
import { TRANSLATIONS } from '../constants/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (section: string, key?: string) => any;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
  t: () => ''
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // 1. Check query parameter `lang` or `hl`
    try {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang') || params.get('hl');
      if (langParam) {
        const upper = langParam.toUpperCase();
        if (['EN', 'DE', 'FR', 'ES'].includes(upper)) {
          return upper;
        }
      }
    } catch (e) {}

    // 2. Check localStorage
    try {
      const saved = localStorage.getItem('language');
      if (saved && ['EN', 'DE', 'FR', 'ES'].includes(saved.toUpperCase())) {
        return saved.toUpperCase();
      }
    } catch (e) {}

    // 3. Check browser language
    try {
      const browserLang = navigator.language.split('-')[0].toUpperCase();
      if (['EN', 'DE', 'FR', 'ES'].includes(browserLang)) {
        return browserLang;
      }
    } catch (e) {}
    
    return 'EN';
  });

  const handleSetLanguage = (lang: string) => {
    const upperLang = lang.toUpperCase();
    if (!['EN', 'DE', 'FR', 'ES'].includes(upperLang)) return;
    
    setLanguage(upperLang);
    
    try {
      localStorage.setItem('language', upperLang);
    } catch (e) {}

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', upperLang.toLowerCase());
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
    } catch (e) {}
  };

  const t = (section: string, key?: string) => {
    if (!TRANSLATIONS[language] || !TRANSLATIONS[language][section]) {
       if (TRANSLATIONS['EN'] && TRANSLATIONS['EN'][section]) {
           const keys = key ? key.split('.') : [];
           let value = TRANSLATIONS['EN'][section];
           for (const k of keys) {
               if (value === undefined || value === null) return key;
               value = value[k];
           }
           return value !== undefined ? value : key;
       }
       return key || section;
    }

    if (!key) return TRANSLATIONS[language][section];
    
    const keys = key.split('.');
    let value = TRANSLATIONS[language][section];
    
    for (const k of keys) {
      if (value === undefined || value === null) return key;
      value = value[k];
    }
    
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
