import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';
import { BrandLogo } from './BrandLogo';
import { BackgroundDots } from './BackgroundDots';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { setShowManager } = useCookies();
  
  const sections = [
    {
      title: t('footer', 'company'),
      links: [
        { name: t('footer', 'about'), href: '/about' },
        { name: t('footer', 'articles'), href: '/articles' },
        { name: t('footer', 'privacy'), href: '/privacy' },
        { name: t('footer', 'terms'), href: '/terms' },
      ]
    }
  ];

  return (
    <footer className="relative bg-brand-dark pt-24 pb-12 border-t border-white/5 overflow-hidden text-white">
      <BackgroundDots scale={1.5} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FDB623] to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24 text-center md:text-left">
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <BrandLogo size={48} />
              <div className="flex flex-col items-start leading-none">
                <span className="text-3xl font-black tracking-tighter text-white group-hover:text-[#FDB623] transition-colors">
                  QrSortable
                </span>
                <span className="text-[10px] font-black text-[#FDB623] mt-1 tracking-widest uppercase">Smart labels</span>
              </div>
            </Link>
            <p className="text-gray-400 font-bold leading-relaxed mb-10 max-w-xs mx-auto md:mx-0">
              {t('footer', 'slogan')}
            </p>
            <div className="flex items-center space-x-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/qrsortable/?r=nametag&utm_source=qr_widget", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/share/14iQCiz7hCH/", label: "Facebook" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/qrsortable-q-6a0196419", label: "LinkedIn" }
              ].map(({ Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-2xl bg-white/5 text-white hover:bg-[#FDB623] hover:text-black transition-all transform hover:-translate-y-1 active:translate-y-0 group inline-flex items-center justify-center"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-10 relative">
                {section.title}
                <span className="absolute -bottom-3 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-8 h-1 bg-[#FDB623] rounded-full" />
              </h3>
              <ul className="space-y-5 flex flex-col items-center md:items-start">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 font-bold hover:text-[#FDB623] transition-all flex items-center group whitespace-nowrap"
                    >
                      <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FDB623]" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-10 relative">
              {t('footer', 'payments')}
              <span className="absolute -bottom-3 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-8 h-1 bg-[#FDB623] rounded-full" />
            </h3>
            <p className="text-gray-400 font-bold mb-8 text-center md:text-left">
              Contact us anytime at: 
              <a href="mailto:qrsortable@gmail.com" className="block text-white font-black hover:text-[#FDB623] transition-colors mt-2 text-lg">
                qrsortable@gmail.com
              </a>
            </p>
            <div className="flex items-center flex-wrap justify-center md:justify-start gap-4">
              {['Visa', 'Mastercard', 'Google Pay', 'Apple Pay'].map((method) => (
                <div key={method} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 font-black text-[10px] text-gray-500 uppercase tracking-widest">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 font-bold text-sm text-gray-500">
          <p>© 2026 QrSortable. {t('footer', 'rights')}</p>
          <div className="mt-6 md:mt-0 flex items-center space-x-8">
            <Link to="/about" className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-black">{t('footer', 'about')}</Link>
            <Link to="/articles" className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-black">{t('footer', 'articles')}</Link>
            <Link to="/privacy" className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-black">{t('footer', 'privacy')}</Link>
            <button 
              onClick={() => setShowManager(true)}
              className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-black"
            >
              {t('footer', 'cookies')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
