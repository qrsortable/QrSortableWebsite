import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Success } from './pages/Success';
import { GetTheApp } from './pages/GetTheApp';
import { MollieReturn } from './pages/MollieReturn';
import { AppFeedback } from './pages/AppFeedback';
import { Articles } from './pages/Articles';
import { ArticleDetail } from './pages/ArticleDetail';
import { SmartQrStorageBinsArticle } from './pages/SmartQrStorageBinsArticle';
import { QrCodeInventoryPreview } from './pages/features/QrCodeInventoryPreview';
import { MovingBoxOrganizer } from './pages/features/MovingBoxOrganizer';
import { SharedInventoryManagement } from './pages/features/SharedInventoryManagement';
import { QrCodeGeneratorStorage } from './pages/features/QrCodeGeneratorStorage';
import { MultilingualInventoryApp } from './pages/features/MultilingualInventoryApp';
import { SecureInventoryTracking } from './pages/features/SecureInventoryTracking';
import { NoAccountNeeded } from './pages/features/NoAccountNeeded';
import { InventorySupportTeam } from './pages/features/InventorySupportTeam';
import { LanguageProvider, useTranslation } from './contexts/LanguageContext';
import { CookieProvider } from './contexts/CookieContext';
import { FeedbackProvider } from './contexts/FeedbackContext';
import { CartProvider } from './contexts/CartContext';
import { HelmetProvider } from 'react-helmet-async';
import { CartDrawer } from './components/CartDrawer';
import { CookieBanner } from './components/CookieBanner';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      } else {
        const timer = setTimeout(() => {
          const elRetry = document.querySelector(hash);
          if (elRetry) {
            elRetry.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const LanguageSync = () => {
  const { language } = useTranslation();
  
  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <LanguageSync />
          <CookieProvider>
            <FeedbackProvider>
              <CartProvider>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/features/qr-code-inventory-preview" element={<QrCodeInventoryPreview />} />
                  <Route path="/features/moving-box-organizer" element={<MovingBoxOrganizer />} />
                  <Route path="/features/shared-inventory-management" element={<SharedInventoryManagement />} />
                  <Route path="/features/qr-code-generator-storage" element={<QrCodeGeneratorStorage />} />
                  <Route path="/features/multilingual-inventory-app" element={<MultilingualInventoryApp />} />
                  <Route path="/features/secure-inventory-tracking" element={<SecureInventoryTracking />} />
                  <Route path="/features/start-without-account" element={<NoAccountNeeded />} />
                  <Route path="/features/no-account-needed" element={<NoAccountNeeded />} />
                  <Route path="/features/inventory-support-team" element={<InventorySupportTeam />} />
                  <Route path="/features/support-team" element={<InventorySupportTeam />} />
                  <Route path="/support-team" element={<InventorySupportTeam />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/get-the-app" element={<GetTheApp />} />
                  <Route path="/mollie-return" element={<MollieReturn />} />
                  <Route path="/app-feedback" element={<AppFeedback />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/articles/smart-qr-code-labels-for-storage-bins" element={<SmartQrStorageBinsArticle />} />
                  <Route path="/articles/:slug" element={<ArticleDetail />} />
                </Routes>
                <CartDrawer />
                <CookieBanner />
              </CartProvider>
            </FeedbackProvider>
          </CookieProvider>
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  );
};

export default App;
