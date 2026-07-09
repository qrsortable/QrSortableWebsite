import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, Globe, ChevronLeft } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { BrandLogo } from './BrandLogo';
import { LANGUAGES } from '../constants/translations';

export const Header: React.FC = () => {
  const { toggleCart, cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, localizePath } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: t('nav', 'features'), href: '#features' },
    { name: t('nav', 'howItWorks'), href: '#how-it-works' },
    { name: t('nav', 'shop'), href: '#products' },
    { name: t('nav', 'articles'), href: '/articles', isExternal: true },
  ];

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate(localizePath('/'));
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to={localizePath('/')} className="flex items-center space-x-3 group animate-fadeIn">
            <BrandLogo size={40} />
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-[#FDB623] transition-colors">
              QrSortable
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              link.isExternal ? (
                <Link
                  key={link.name}
                  to={localizePath(link.href)}
                  className="text-[15px] font-bold text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FDB623] transition-all group-hover:w-full" />
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[15px] font-bold text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FDB623] transition-all group-hover:w-full" />
                </button>
              )
            ))}
            <Link 
              to={localizePath('/get-the-app')} 
              className="text-[15px] font-bold text-gray-400 hover:text-white transition-colors relative group"
            >
              {t('nav', 'getApp')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FDB623] transition-all group-hover:w-full" />
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-white/5 rounded-2xl p-1 border border-white/10">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-4 py-2.5 rounded-xl transition-all flex items-center space-x-2.5 ${
                    language === lang.code
                      ? 'bg-white text-gray-900 shadow-sm scale-[1.02]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <img 
                    src={lang.flag} 
                    alt={lang.label} 
                    className="w-5 h-auto rounded-[2px] shadow-sm select-none pointer-events-none" 
                  />
                  <div className="flex items-baseline uppercase">
                    <span className="text-sm font-black tracking-tight">{lang.code}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={toggleCart}
              className="p-3 rounded-2xl bg-[#FDB623] text-black hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 relative group"
            >
              <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black animate-bounceIn">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-3 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-all border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-white/5 animate-slideDown shadow-2xl">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              link.isExternal ? (
                <Link
                  key={link.name}
                  to={localizePath(link.href)}
                  className="block w-full text-left px-6 py-4 text-lg font-black text-white bg-white/5 rounded-2xl hover:bg-[#FDB623]/10 transition-colors border border-transparent hover:border-[#FDB623]/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-6 py-4 text-lg font-black text-white bg-white/5 rounded-2xl hover:bg-[#FDB623]/10 transition-colors border border-transparent hover:border-[#FDB623]/20"
                >
                  {link.name}
                </button>
              )
            ))}
            <Link 
              to={localizePath('/get-the-app')} 
              className="block w-full text-left px-6 py-4 text-lg font-black text-white bg-white/5 rounded-2xl hover:bg-[#FDB623]/10 transition-colors border border-transparent hover:border-[#FDB623]/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav', 'getApp')}
            </Link>
            
            <div className="grid grid-cols-2 gap-4 p-2 bg-white/5 rounded-3xl border border-white/10">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center space-x-3 px-4 py-5 rounded-2xl font-black transition-all ${
                    language === lang.code
                      ? 'bg-white text-gray-900 shadow-md border border-gray-100 scale-[1.02]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <img 
                    src={lang.flag} 
                    alt={lang.label} 
                    className="w-8 h-auto rounded-sm shadow-sm select-none" 
                  />
                  <div className="flex items-baseline uppercase">
                    <span className="text-xl font-black tracking-tight">{lang.code}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
