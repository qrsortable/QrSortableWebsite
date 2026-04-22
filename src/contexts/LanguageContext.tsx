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
  const [language, setLanguage] = useState('EN');

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
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
