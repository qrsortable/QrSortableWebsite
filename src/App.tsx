import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Success } from './pages/Success';
import { GetTheApp } from './pages/GetTheApp';
import { MollieReturn } from './pages/MollieReturn';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieProvider } from './contexts/CookieContext';
import { FeedbackProvider } from './contexts/FeedbackContext';
import { CartProvider } from './contexts/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { CookieBanner } from './components/CookieBanner';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <LanguageProvider>
        <CookieProvider>
          <FeedbackProvider>
            <CartProvider>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/success" element={<Success />} />
                <Route path="/get-the-app" element={<GetTheApp />} />
                <Route path="/mollie-return" element={<MollieReturn />} />
              </Routes>
              <CartDrawer />
              <CookieBanner />
            </CartProvider>
          </FeedbackProvider>
        </CookieProvider>
      </LanguageProvider>
    </HashRouter>
  );
};

export default App;
