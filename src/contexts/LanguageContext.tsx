import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TRANSLATIONS } from '../constants/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (section: string, key?: string) => any;
  localizePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
  t: () => '',
  localizePath: (path: string) => path
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // 0. Check pathname prefix like /de/, /fr/, /es/
    try {
      const pathname = window.location.pathname;
      const match = pathname.match(/^\/(de|fr|es)\b/i);
      if (match) {
        return match[1].toUpperCase();
      }
    } catch (e) {}

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

  const location = useLocation();

  useEffect(() => {
    try {
      const pathname = window.location.pathname;
      const match = pathname.match(/^\/(de|fr|es)(\/.*)?$/i);
      if (match) {
        const detectedLang = match[1].toLowerCase();
        const remainingPath = match[2] || '/';
        
        // Construct new URL with ?lang=detectedLang
        const url = new URL(window.location.href);
        url.pathname = remainingPath;
        url.searchParams.set('lang', detectedLang);
        
        // Update language state
        handleSetLanguage(detectedLang.toUpperCase());
        
        // Redirect seamlessly
        window.location.replace(url.pathname + url.search + url.hash);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const langParam = params.get('lang') || params.get('hl');
      if (langParam) {
        const upper = langParam.toUpperCase();
        if (['EN', 'DE', 'FR', 'ES'].includes(upper) && upper !== language) {
          setLanguage(upper);
          try {
            localStorage.setItem('language', upper);
          } catch (e) {}
        }
      }
    } catch (e) {}
  }, [location.search, language]);

  const t = (section: string, key?: string) => {
    const resolveFromLang = (langCode: string) => {
      const langData = TRANSLATIONS[langCode];
      if (!langData || !langData[section]) return undefined;
      if (!key) return langData[section];

      const keys = key.split('.');
      let value = langData[section];
      for (const k of keys) {
        if (value === undefined || value === null) return undefined;
        value = value[k];
      }
      return value;
    };

    const localized = resolveFromLang(language);
    if (localized !== undefined) return localized;

    const fallback = resolveFromLang('EN');
    if (fallback !== undefined) return fallback;

    return key || section;
  };

  const localizePath = (path: string) => {
    if (!path) return path;
    if (path.startsWith('#')) return path;
    if (language === 'EN') return path;
    const cleanPath = path.split('#')[0];
    const hash = path.includes('#') ? '#' + path.split('#')[1] : '';
    const separator = cleanPath.includes('?') ? '&' : '?';
    return `${cleanPath}${separator}lang=${language.toLowerCase()}${hash}`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, localizePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
