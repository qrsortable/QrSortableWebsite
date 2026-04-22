import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export const Success: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
      <Check className="h-24 w-24 text-green-600 mb-10 animate-bounce" />
      <h1 className="text-6xl font-black text-gray-900 mb-6">{t('success', 'title')}</h1>
      <p className="text-2xl text-gray-600 mb-12 font-bold">{t('success', 'message')}</p>
      <button onClick={() => navigate('/')} className="text-[#FDB623] font-black text-2xl hover:underline transition-all">{t('success', 'backHome')}</button>
    </div>
  );
};
