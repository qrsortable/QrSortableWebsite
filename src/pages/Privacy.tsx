import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Settings, ShieldCheck, Check } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Privacy: React.FC = () => {
  const { setShowManager } = useCookies();
  const { t, language } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{`${t('footer', 'privacy')} | QrSortable`}</title>
        <meta name="description" content={t('privacy', 'section1.desc')} />
        <meta property="og:title" content={`${t('footer', 'privacy')} | QrSortable`} />
        <meta property="og:description" content={t('privacy', 'section1.desc')} />
        <meta property="og:image" content="https://www.qrsortable.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('footer', 'privacy')} | QrSortable`} />
        <meta name="twitter:description" content={t('privacy', 'section1.desc')} />
        <meta name="twitter:image" content="https://www.qrsortable.com/og-image.jpg" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/privacy" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/privacy?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/privacy?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/privacy?lang=es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/privacy" />
        <link rel="canonical" href={`https://www.qrsortable.com/privacy${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${t('footer', 'privacy')} - QrSortable`,
            "description": t('privacy', 'section1.desc'),
            "url": "https://www.qrsortable.com/privacy"
          })}
        </script>
      </Helmet>
      <Header />
      <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-[3rem] shadow-2xl p-12 md:p-20 border border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4 text-[#FDB623]">
              <Eye className="h-10 w-10" />
              <h1 className="text-5xl font-black text-gray-900">{t('footer', 'privacy')}</h1>
            </div>
            <button 
              onClick={() => setShowManager(true)}
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-2xl font-black hover:bg-[#FDB623] hover:text-black transition-all"
            >
              <Settings className="h-5 w-5" />
              <span>{t('footer', 'cookies')}</span>
            </button>
          </div>
          
          <div className="space-y-12 text-xl text-gray-600 leading-relaxed font-medium">
            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gray-900 text-[#FDB623] rounded-lg flex items-center justify-center text-sm mr-4">1</div>
                {t('privacy', 'section1.title')}
              </h2>
              <p>{t('privacy', 'section1.desc')}</p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gray-900 text-[#FDB623] rounded-lg flex items-center justify-center text-sm mr-4">2</div>
                {t('privacy', 'section2.title')}
              </h2>
              <p>{t('privacy', 'section2.desc')}</p>
            </section>

            <section className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <ShieldCheck className="h-8 w-8 mr-4 text-green-500" />
                {t('privacy', 'section3.title')}
              </h2>
              <p className="mb-6">{t('privacy', 'section3.desc')}</p>
              <ul className="space-y-4">
                {(t('privacy', 'section3.list') as string[]).map((item: string, i: number) => (
                  <li key={i} className="flex items-center"><Check className="h-6 w-6 text-green-500 mr-3" /> {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gray-900 text-[#FDB623] rounded-lg flex items-center justify-center text-sm mr-4">4</div>
                {t('privacy', 'section4.title')}
              </h2>
              <p>{t('privacy', 'section4.desc')}</p>
            </section>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};
