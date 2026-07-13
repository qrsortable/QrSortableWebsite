import React from 'react';
import { Smartphone, Package, Truck, QrCode, Globe, Shield, User, Heart } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Smartphone className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.preview.title'),
      desc: t('features', 'items.preview.desc')
    },
    {
      icon: <Package className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.moving.title'),
      desc: t('features', 'items.moving.desc')
    },
    {
      icon: <Truck className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.sharing.title'),
      desc: t('features', 'items.sharing.desc')
    },
    {
      icon: <QrCode className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.generate.title'),
      desc: t('features', 'items.generate.desc')
    },
    {
      icon: <Globe className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.lang.title'),
      desc: t('features', 'items.lang.desc')
    },
    {
      icon: <Shield className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.security.title'),
      desc: t('features', 'items.security.desc')
    },
    {
      icon: <User className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.noAccount.title'),
      desc: t('features', 'items.noAccount.desc')
    },
    {
      icon: <Heart className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.support.title'),
      desc: t('features', 'items.support.desc')
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">{t('features', 'title')}</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">{t('features', 'subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-[3rem] p-10 hover:shadow-2xl transition-all border border-gray-100 group">
              <div className="bg-gray-900 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-5">{f.title}</h3>
              <p className="text-xl text-gray-700 leading-relaxed font-bold">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
