import React from 'react';
import { Helmet } from 'react-helmet-async';
import { QrCode, Zap, Sparkles, Heart } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BackgroundDots } from '../components/BackgroundDots';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${t('footer', 'about')} | QrSortable`}</title>
        <meta name="description" content={t('about', 'heroSubtitle')} />
        <link rel="canonical" href="https://qrsortable.app/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="bg-abstract-dark text-white py-32 relative overflow-hidden">
        <BackgroundDots scale={2} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8">{t('about', 'heroTitle')}</h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-bold">
            {t('about', 'heroSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-gray-900">{t('about', 'innovationTitle')}</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-bold">
              {t('about', 'innovationDesc1')}
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('about', 'innovationDesc2')}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center">
                <p className="text-4xl font-black text-[#FDB623]">1k+</p>
                <p className="text-lg text-gray-500 font-bold">{t('about', 'statsUsers')}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center">
                <p className="text-4xl font-black text-[#FDB623]">2k+</p>
                <p className="text-lg text-gray-500 font-bold">{t('about', 'statsLabels')}</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://lh3.googleusercontent.com/d/1aKKd52OG12DdhyBy5z1Fy9fOIAPmun6t" alt="Smart storage organization" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-[#FDB623] p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                <QrCode className="h-16 w-16 text-black" />
             </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-5xl font-black text-center mb-20">{t('about', 'valuesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap />, title: t('about', 'values.simplicity.title'), desc: t('about', 'values.simplicity.desc') },
              { icon: <Sparkles />, title: t('about', 'values.quality.title'), desc: t('about', 'values.quality.desc') },
              { icon: <Heart />, title: t('about', 'values.userFocused.title'), desc: t('about', 'values.userFocused.desc') }
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 text-center group hover:-translate-y-2 transition-all">
                <div className="bg-gray-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#FDB623]">
                  {v.icon}
                </div>
                <h3 className="text-3xl font-black mb-4">{v.title}</h3>
                <p className="text-xl text-gray-500 font-bold leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
