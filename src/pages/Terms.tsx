import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Lock, Globe } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Terms: React.FC = () => {
  const { t, language } = useTranslation();
  
  const sections = [
    { icon: <FileText className="h-8 w-8" />, ...t('terms', 'section1') },
    { icon: <Scale className="h-8 w-8" />, ...t('terms', 'section2') },
    { icon: <Lock className="h-8 w-8" />, ...t('terms', 'section3') },
    { icon: <Globe className="h-8 w-8" />, ...t('terms', 'section4') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{`${t('footer', 'terms')} | QrSortable`}</title>
        <meta name="description" content={t('terms', 'intro')} />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/terms" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/terms?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/terms?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/terms?lang=es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/terms" />
        <link rel="canonical" href={`https://www.qrsortable.com/terms${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-[3rem] shadow-2xl p-12 md:p-20 border border-gray-100">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-gray-900 mb-6">{t('footer', 'terms')}</h1>
            <p className="text-xl text-gray-500 font-bold">{t('terms', 'updated')}</p>
          </div>

          <div className="prose prose-xl prose-gray max-w-none">
            <p className="text-2xl font-bold text-gray-900 mb-12 text-center bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              {t('terms', 'intro')}
            </p>

            <div className="grid grid-cols-1 gap-12">
              {sections.map((section, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-8 hover:bg-gray-50 rounded-[2.5rem] transition-colors group">
                  <div className="p-5 bg-gray-900 text-[#FDB623] rounded-2xl group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">{section.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};
