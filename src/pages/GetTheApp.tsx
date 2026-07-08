import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const GetTheApp: React.FC = () => {
  const { t, language } = useTranslation();
  const [googlePlayUrl, setGooglePlayUrl] = React.useState('https://play.google.com/store/apps/details?id=com.danfe.qrsortable&pcampaignid=web_share');
  const [appStoreUrl, setAppStoreUrl] = React.useState('https://apps.apple.com/de/app/qrsortable/id6775796519');

  React.useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      setGooglePlayUrl('https://play.google.com/store/apps/details?id=com.danfe.qrsortable');
      setAppStoreUrl('https://apps.apple.com/de/app/qrsortable/id6775796519');
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>{`${t('nav', 'getApp')} | QrSortable`}</title>
        <meta name="description" content={t('nav', 'getAppSubtitle')} />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/get-the-app?lang=en" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/get-the-app?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/get-the-app?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/get-the-app?lang=es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/get-the-app" />
        <link rel="canonical" href={`https://www.qrsortable.com/get-the-app${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 py-20">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black text-gray-900 mb-6">{t('nav', 'getApp')}</h1>
            <p className="text-2xl text-gray-600 font-bold max-w-2xl mx-auto">{t('nav', 'getAppSubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* App Store */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-8">
                <a 
                  href={appStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-24"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
              <p className="text-gray-600 text-xl font-bold">{t('nav', 'appleStoreDesc')}</p>
            </div>

            {/* Google Play */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-8">
                <a 
                  href={googlePlayUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-24"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
              <p className="text-gray-600 text-xl font-bold">{t('nav', 'googlePlayDesc')}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
