import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Linkedin, ArrowUpRight, MapPin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';
import { BrandLogo } from './BrandLogo';
import { BackgroundDots } from './BackgroundDots';

const XIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { language, t, localizePath } = useTranslation();
  const { setShowManager } = useCookies();
  
  const sections = [
    {
      title: t('footer', 'company'),
      links: [
        { name: t('footer', 'about'), href: '/about' },
        { name: t('footer', 'articles'), href: '/articles' },
        { name: t('footer', 'contact'), href: '/contact' },
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
            <Link to={localizePath('/')} className="flex items-center space-x-3 mb-8 group">
              <BrandLogo size={48} />
              <div className="flex flex-col items-start leading-none">
                <span className="text-3xl font-black tracking-tighter text-white group-hover:text-[#FDB623] transition-colors">
                  QrSortable
                </span>
                <span className="text-[10px] font-black text-[#FDB623] mt-1 tracking-widest uppercase">Smart labels</span>
              </div>
            </Link>
            <p className="text-gray-300 font-bold leading-relaxed mb-10 max-w-xs mx-auto md:mx-0">
              {t('footer', 'slogan')}
            </p>
            <div className="flex items-center space-x-4">
              {[
                { Icon: XIcon, href: "https://x.com/QrSortable", label: "X" },
                { Icon: Instagram, href: "https://www.instagram.com/qrsortable2026/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/share/14iQCiz7hCH/", label: "Facebook" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/135935143/admin/dashboard/", label: "LinkedIn" }
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
                      to={localizePath(link.href)} 
                      className="text-gray-300 font-bold hover:text-[#FDB623] transition-all flex items-center group whitespace-nowrap"
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
            
            <div className="text-gray-300 font-bold mb-6 text-center md:text-left">
              <span className="block text-[11px] uppercase text-gray-400 tracking-wider font-black mb-1">
                {t('footer', 'contactUs') || 'Contact us anytime at:'}
              </span>
              <a href="mailto:qrsortable@gmail.com" className="block text-white font-black hover:text-[#FDB623] transition-colors mt-1 text-lg">
                qrsortable@gmail.com
              </a>
              
              <span className="block text-[11px] uppercase text-gray-400 tracking-wider font-black mt-4 mb-1">
                {language === 'DE' ? 'Firmensitz' : 'Office Location'}
              </span>
              <a 
                href="https://maps.google.com/?q=Fahlenbacher+Str.,+85296+Rohrbach" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FDB623] transition-colors flex items-center justify-center md:justify-start gap-1.5 font-bold mt-1 text-sm group"
              >
                <MapPin size={15} className="text-[#FDB623] shrink-0" />
                <span className="underline decoration-white/20 group-hover:decoration-current">Fahlenbacher Str., 85296 Rohrbach</span>
              </a>
            </div>

            {/* Compact Map Embed */}
            <div className="w-full max-w-[280px] h-[140px] rounded-xl overflow-hidden border border-white/10 mb-6 shadow-md shadow-black/30 relative group">
              <iframe 
                src="https://maps.google.com/maps?q=Fahlenbacher%20Str.,%2085296%20Rohrbach&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                width="100%" 
                height="100%" 
                className="border-0 opacity-80 group-hover:opacity-100 transition-opacity" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="QrSortable Location Map"
              />
              <a 
                href="https://maps.google.com/?q=Fahlenbacher+Str.,+85296+Rohrbach" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 bg-transparent cursor-pointer"
                aria-label="Open in Google Maps"
              />
            </div>

            <div className="flex items-center flex-wrap justify-center md:justify-start gap-2.5">
              {['Visa', 'Mastercard', 'Google Pay', 'Apple Pay'].map((method) => (
                <div key={method} className="px-3 py-1.5 bg-white/5 rounded-xl border border-white/10 font-black text-[9px] text-gray-300 uppercase tracking-widest">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 font-bold text-sm text-gray-300">
          <p>© 2026 QrSortable. {t('footer', 'rights')}</p>
          <div className="mt-6 md:mt-0 flex items-center space-x-8">
            <Link to={localizePath('/about')} className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-black">{t('footer', 'about')}</Link>
            <Link to={localizePath('/articles')} className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-black">{t('footer', 'articles')}</Link>
            <Link to={localizePath('/privacy')} className="hover:text-white transition-colors uppercase tracking-widest text-[11px] font-black">{t('footer', 'privacy')}</Link>
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
