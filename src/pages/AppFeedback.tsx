import React, { useState } from 'react';
import { Star, Loader2, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { checkRateLimit, recordSubmission, sanitizeInput } from '../services/utils';
import { useTranslation } from '../contexts/LanguageContext';

export const AppFeedback: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const navigate = useNavigate();
  const [rating, setRating] = useState<number>(0);
  const [frequency, setFrequency] = useState<string>('');
  const [suggestion, setSuggestion] = useState('');
  const [bugs, setBugs] = useState('');
  const [comments, setComments] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Security measures
  const [honeypot, setHoneypot] = useState(''); // Bots will try to fill this
  const [startTime] = useState(Date.now()); // Track when user started filling
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaNums, setCaptchaNums] = useState(() => ({
    a: Math.floor(Math.random() * 9) + 1,
    b: Math.floor(Math.random() * 9) + 1
  }));

  const resetForm = () => {
    setRating(0);
    setFrequency('');
    setSuggestion('');
    setBugs('');
    setComments('');
    setEmail('');
    setCaptchaAnswer('');
    setHoneypot('');
    setCaptchaNums({
      a: Math.floor(Math.random() * 9) + 1,
      b: Math.floor(Math.random() * 9) + 1
    });
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Security Check: Honeypot
    if (honeypot) {
      console.warn('Bot detected: Honeypot filled');
      return;
    }

    // Security Check: Submission too fast (< 5 seconds)
    if (Date.now() - startTime < 5000) {
      alert("Please take a moment to fill out the form properly.");
      return;
    }

    // Security Check: Captcha
    if (parseInt(captchaAnswer) !== (captchaNums.a + captchaNums.b)) {
      alert("Please solve the simple math challenge correctly.");
      return;
    }

    if (rating === 0) {
      alert(t('product', 'formRating'));
      return;
    }

    if (!email.trim()) {
      alert(t('checkout', 'email').replace('*', ''));
      return;
    }
    
    setIsSending(true);

    if (!checkRateLimit('app_feedback_limit', 2, 60000)) {
      alert("Too many submissions. Please wait a minute.");
      setIsSending(false);
      return;
    }

    const payload = {
      type: 'APP_FEEDBACK',
      rating,
      frequency,
      suggestion: sanitizeInput(suggestion),
      bugs: sanitizeInput(bugs),
      comments: sanitizeInput(comments),
      email: sanitizeInput(email),
      timestamp: new Date().toISOString()
    };

    try {
      const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxX0gTTBVASx36RWp-gSAWiVSVukMD25wc1vJKJuH0SQc9wVXuqImEu0m3M1NmacfmiqQ/exec';
      
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });

      recordSubmission('app_feedback_limit');
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Error sending feedback. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fff8e1] flex items-center justify-center p-4 font-sans">
        <Helmet>
          <title>Feedback Submitted - QrSortable</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center border-t-8 border-[#FDB623] relative">
          <button 
            onClick={resetForm}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
          <div className="bg-green-100 p-6 rounded-full w-fit mx-auto mb-8">
            <Check className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4">{t('appFeedback', 'successTitle')}</h1>
          <p className="text-xl text-gray-600 font-medium mb-8">{t('appFeedback', 'successDesc')}</p>
          <button 
            onClick={resetForm}
            className="bg-[#FDB623] text-gray-900 font-black px-10 py-4 rounded-xl hover:scale-105 transition-transform text-xl"
          >
            {t('appFeedback', 'sendAnother')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff8e1] py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Helmet>
        <title>App Feedback - QrSortable</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-md border-t-8 border-[#FDB623] p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 font-itim leading-tight order-2 sm:order-1">
              {t('appFeedback', 'title')}
            </h1>
            <div className="flex gap-2 shrink-0 order-1 sm:order-2 self-end sm:self-auto">
              {(['EN', 'DE', 'FR', 'ES'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1.5 rounded-lg transition-all flex items-center justify-center ${
                    language === lang 
                      ? 'bg-[#FDB623] border-2 border-gray-900 shadow-sm' 
                      : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                  }`}
                  title={lang}
                >
                  <img 
                    src={`https://flagcdn.com/w40/${lang === 'EN' ? 'gb' : lang.toLowerCase()}.png`}
                    alt={lang}
                    className="w-6 h-auto sm:w-8"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>{t('appFeedback', 'intro1')}</p>
            <p>{t('appFeedback', 'intro2')}</p>
            <div className="pt-4">
              <h3 className="font-black text-lg sm:text-xl mb-4">{t('appFeedback', 'howItWorks')}</h3>
              <ul className="space-y-3 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-lg sm:text-xl shrink-0">🏷️</span>
                  <span>{t('appFeedback', 'step1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg sm:text-xl shrink-0">📱</span>
                  <span>{t('appFeedback', 'step2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg sm:text-xl shrink-0">📦</span>
                  <span>{t('appFeedback', 'step3')}</span>
                </li>
              </ul>
            </div>
            <p className="pt-4 sm:pt-6 font-bold break-words">
              {t('appFeedback', 'contact')} <a href="mailto:qrsortable@gmail.com" className="text-blue-600 underline">qrsortable@gmail.com</a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 pb-12">
          {/* Rating Section */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
            <label className="block text-lg sm:text-xl font-black text-gray-900 mb-2 font-itim">
              {t('appFeedback', 'ratingQuestion')} <span className="text-red-500">*</span>
            </label>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 italic">{t('appFeedback', 'ratingNote')}</p>
            <div className="flex flex-wrap justify-between items-center max-w-md mx-auto gap-2">
              {[1, 2, 3, 4, 5].map((val) => (
                <div key={val} className="flex flex-col items-center gap-2">
                  <span className="font-bold text-gray-600 text-sm sm:text-base">{val}</span>
                  <button
                    type="button"
                    onClick={() => setRating(val)}
                    className="p-1 transition-transform hover:scale-125"
                  >
                    <Star 
                      className={`h-8 w-8 sm:h-10 sm:w-10 ${rating >= val ? 'fill-[#FDB623] text-[#FDB623]' : 'text-gray-300'}`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Frequency Section */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
            <label className="block text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6 font-itim">
              {t('appFeedback', 'frequencyQuestion')}
            </label>
            <div className="space-y-3 sm:space-y-4">
              {t('appFeedback', 'frequencyOptions').map((option: string) => (
                <label key={option} className="flex items-start sm:items-center gap-3 sm:gap-4 cursor-pointer group">
                  <div className="relative flex items-center shrink-0 mt-0.5 sm:mt-0">
                    <input
                      type="radio"
                      name="frequency"
                      value={option}
                      checked={frequency === option}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDB623] focus:ring-[#FDB623] border-gray-300 cursor-pointer"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-gray-700 group-hover:text-black">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Feature Suggestion Section */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
            <label className="block text-lg sm:text-xl font-black text-gray-900 mb-3 sm:mb-4 font-itim">
              {t('appFeedback', 'featureQuestion')}
            </label>
            <textarea
              placeholder={t('appFeedback', 'placeholderLong')}
              rows={2}
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="w-full border-b border-gray-200 focus:border-[#FDB623] outline-none py-2 text-base sm:text-lg placeholder-gray-400 font-medium resize-none transition-colors"
            />
          </div>

          {/* Bugs Section */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
            <label className="block text-lg sm:text-xl font-black text-gray-900 mb-3 sm:mb-4 font-itim">
              {t('appFeedback', 'bugsQuestion')}
            </label>
            <textarea
              placeholder={t('appFeedback', 'placeholderLong')}
              rows={2}
              value={bugs}
              onChange={(e) => setBugs(e.target.value)}
              className="w-full border-b border-gray-200 focus:border-[#FDB623] outline-none py-2 text-base sm:text-lg placeholder-gray-400 font-medium resize-none transition-colors"
            />
          </div>

          {/* General Comments Section */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
            <label className="block text-lg sm:text-xl font-black text-gray-900 mb-3 sm:mb-4 font-itim">
              {t('appFeedback', 'commentsQuestion')}
            </label>
            <textarea
              placeholder={t('appFeedback', 'placeholderLong')}
              rows={2}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full border-b border-gray-200 focus:border-[#FDB623] outline-none py-2 text-base sm:text-lg placeholder-gray-400 font-medium resize-none transition-colors"
            />
          </div>

          {/* Email Section */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
            <label className="block text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6 font-itim">
              {t('appFeedback', 'emailQuestion')}
            </label>
            <input
              type="email"
              required
              placeholder={t('appFeedback', 'placeholderShort')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-200 focus:border-[#FDB623] outline-none py-2 text-base sm:text-lg placeholder-gray-400 font-medium transition-colors"
            />
          </div>

          {/* Security Verification Section */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
            <label className="block text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6 font-itim">
              {language === 'EN' ? 'Security Verification' : 
               language === 'DE' ? 'Sicherheitsüberprüfung' : 
               language === 'FR' ? 'Vérification de sécurité' : 'Verificación de seguridad'} *
            </label>
            <div className="flex items-center gap-4">
              <span className="text-xl font-black text-gray-700">
                {captchaNums.a} + {captchaNums.b} = ? 
              </span>
              <input
                type="text"
                required
                placeholder="?"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className="w-20 border-b-2 border-gray-200 focus:border-[#FDB623] outline-none py-1 text-center text-xl font-black transition-colors"
              />
            </div>
          </div>

          {/* Honeypot field (hidden from users) */}
          <div className="opacity-0 absolute -z-10 h-0 w-0 overflow-hidden" aria-hidden="true">
            <input 
              type="text" 
              name="website_url" 
              tabIndex={-1} 
              autoComplete="off" 
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-start sm:pt-4 px-2 sm:px-0">
            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto bg-[#FDB623] text-gray-900 font-black px-8 sm:px-12 py-4 sm:py-5 rounded-xl text-xl sm:text-2xl hover:bg-black hover:text-[#FDB623] transition-all shadow-xl flex items-center justify-center min-w-0 sm:min-w-[250px] active:scale-95"
            >
              {isSending ? <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin" /> : t('appFeedback', 'submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

