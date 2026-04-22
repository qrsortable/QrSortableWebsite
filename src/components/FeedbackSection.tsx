import React, { useState } from 'react';
import { MessageSquare, Loader2, X, Check } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useFeedback, useProductFeedback } from '../contexts/FeedbackContext';
import { Product, Review } from '../types';
import { StarRating } from './StarRating';
import { checkRateLimit, recordSubmission, formatDate, sanitizeInput } from '../services/utils';

export const FeedbackSection: React.FC<{ product: Product }> = ({ product }) => {
  const { reviews, isLoading } = useProductFeedback(product.name);
  const { addLocalReview } = useFeedback();
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', email: '', rating: 5, comment: '' });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mountTime] = useState(Date.now());
  const [honeypot, setHoneypot] = useState('');

  const avgRating = reviews.length > 0 ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (honeypot) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsFormOpen(false);
      }, 1000);
      setIsSending(false);
      return;
    }

    if (Date.now() - mountTime < 2000) {
      setIsSending(false);
      return;
    }

    if (!checkRateLimit('feedback_rate_limit', 3, 60000)) {
      alert("You are submitting feedback too frequently. Please wait a minute.");
      setIsSending(false);
      return;
    }

    const payload = {
      name: sanitizeInput(newReview.name),
      product: product.name,
      email: newReview.email,
      rating: newReview.rating,
      comment: sanitizeInput(newReview.comment)
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzu_IJCUVFrCN324skNaxaUOChyAnsVTrhdsK6mxtF1BC3HTkp-y0Owm08MkYcQ1u6w/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain', 
        },
        body: JSON.stringify(payload),
      });

      recordSubmission('feedback_rate_limit');

      const localReview: Review = {
        id: Math.random().toString(36).substr(2, 9),
        author: sanitizeInput(newReview.name) || 'Anonymous',
        email: newReview.email,
        rating: newReview.rating,
        comment: sanitizeInput(newReview.comment),
        date: formatDate(new Date())
      };
      
      addLocalReview(localReview, product.name);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setIsFormOpen(false);
        setNewReview({ name: '', email: '', rating: 5, comment: '' });
      }, 3000);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Error sending feedback. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <h2 className="text-5xl font-black mb-4 flex items-center">
            <MessageSquare className="h-10 w-10 mr-4 text-[#FDB623]" /> {t('product', 'feedbackTitle')}
          </h2>
          <div className="flex items-center space-x-6">
            <p className="text-2xl text-gray-500 font-bold">{t('product', 'feedbackSubtitle')}</p>
            <div className="h-8 w-[2px] bg-gray-200 hidden md:block"></div>
            {isLoading ? (
              <Loader2 className="h-6 w-6 animate-spin text-gray-300" />
            ) : (
              <StarRating rating={avgRating} showLabel count={reviews.length} size={28} />
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {!isFormOpen && !submitted && (
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-black text-white px-10 py-5 rounded-[1.5rem] font-black text-2xl hover:bg-[#FDB623] hover:text-black transition-all shadow-xl active:scale-95"
            >
              {t('product', 'writeReview')}
            </button>
          )}
        </div>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border-4 border-[#FDB623]/20 mb-16 animate-in slide-in-from-top-10 duration-500">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-3xl font-black">{t('product', 'writeReview')} - {product.name}</h3>
            <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-black" disabled={isSending}><X className="h-8 w-8" /></button>
          </div>
          
          {submitted ? (
            <div className="py-12 text-center space-y-6">
               <div className="bg-green-100 p-8 rounded-full w-fit mx-auto">
                 <Check className="h-20 w-20 text-green-500" />
               </div>
               <div className="space-y-4">
                 <p className="text-3xl font-black">{t('product', 'formSent')}</p>
               </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase mb-2">{t('product', 'formName')}</label>
                  <input 
                    required 
                    type="text" 
                    value={newReview.name}
                    onChange={e => setNewReview({...newReview, name: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-xl font-bold outline-none focus:border-[#FDB623]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-black uppercase mb-2">{t('product', 'formEmail')}</label>
                  <input 
                    required 
                    type="email" 
                    value={newReview.email}
                    onChange={e => setNewReview({...newReview, email: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-xl font-bold outline-none focus:border-[#FDB623]" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black uppercase mb-2">{t('product', 'formRating')}</label>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map(val => (
                    <button 
                      key={val}
                      type="button"
                      onClick={() => setNewReview({...newReview, rating: val})}
                      className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black transition-all ${newReview.rating === val ? 'bg-[#FDB623] text-black shadow-lg scale-110' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-black uppercase mb-2">{t('product', 'formComment')}</label>
                <textarea 
                  required 
                  rows={4}
                  value={newReview.comment}
                  onChange={e => setNewReview({...newReview, comment: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-xl font-bold outline-none focus:border-[#FDB623]"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-black text-white py-6 rounded-2xl font-black text-2xl hover:bg-[#FDB623] hover:text-black transition-all flex items-center justify-center"
              >
                {isSending ? <Loader2 className="h-8 w-8 animate-spin" /> : t('product', 'submitReview')}
              </button>
            </form>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full flex flex-col group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="font-black text-2xl text-gray-900 group-hover:text-[#FDB623] transition-colors">{review.author}</div>
                <div className="text-gray-400 font-bold text-sm uppercase tracking-widest mt-1">{review.date}</div>
              </div>
              <StarRating rating={review.rating} size={20} />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-medium flex-grow italic break-words">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
