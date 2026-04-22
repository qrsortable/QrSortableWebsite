import React, { createContext, useContext, useState } from 'react';

export interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  consented: boolean;
}

interface CookieContextType {
  cookies: CookieSettings;
  updateCookies: (newSettings: Partial<CookieSettings>) => void;
  showManager: boolean;
  setShowManager: (show: boolean) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookies, setCookies] = useState<CookieSettings>(() => {
    try {
      const saved = localStorage.getItem('qr_cookie_consent');
      if (!saved) return { essential: true, analytics: false, marketing: false, consented: false };
      
      const parsed = JSON.parse(saved);
      // Ensure the 'consented' flag exists and is truly false if we want it to show
      return {
        essential: true,
        analytics: !!parsed.analytics,
        marketing: !!parsed.marketing,
        consented: parsed.consented ?? false
      };
    } catch (e) {
      return { essential: true, analytics: false, marketing: false, consented: false };
    }
  });
  const [showManager, setShowManager] = useState(false);

  const updateCookies = (newSettings: Partial<CookieSettings>) => {
    const updated = { ...cookies, ...newSettings, consented: true };
    setCookies(updated);
    localStorage.setItem('qr_cookie_consent', JSON.stringify(updated));
  };

  return (
    <CookieContext.Provider value={{ cookies, updateCookies, showManager, setShowManager }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) throw new Error('useCookies must be used within a CookieProvider');
  return context;
};
