import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { articles } from '../constants/articles';
import { useTranslation } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Articles: React.FC = () => {
  const { language, t } = useTranslation();

  const faqData = t('articles', 'faq') || {};
  const faqKeys = Object.keys(faqData).filter(key => key.startsWith('q') && !isNaN(Number(key.slice(1))));
  faqKeys.sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

  const faqMainEntity = faqKeys.map(qKey => {
    const aKey = 'a' + qKey.slice(1);
    return {
      "@type": "Question",
      "name": faqData[qKey],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqData[aKey]
      }
    };
  }).filter(item => item.name && item.acceptedAnswer.text);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>{t('articles', 'seoTitle')}</title>
        <meta name="description" content={t('articles', 'seoDesc')} />
        <meta property="og:title" content={t('articles', 'seoTitle')} />
        <meta property="og:description" content={t('articles', 'seoDesc')} />
        <meta property="og:image" content="https://www.qrsortable.com/articles-og.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('articles', 'seoTitle')} />
        <meta name="twitter:description" content={t('articles', 'seoDesc')} />
        <meta name="twitter:image" content="https://www.qrsortable.com/articles-og.jpg" />
        
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/articles?lang=en" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/articles?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/articles?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/articles?lang=es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/articles" />
        
        <link rel="canonical" href={`https://www.qrsortable.com/articles${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": t('articles', 'title'),
            "description": t('articles', 'seoDesc'),
            "url": "https://www.qrsortable.com/articles",
            "publisher": {
              "@type": "Organization",
              "name": "QrSortable",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.qrsortable.com/logo.png"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqMainEntity
          })}
        </script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 font-itim"
            >
              {t('articles', 'title')} <span className="text-[#FDB623]">{t('articles', 'highlight')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto font-medium"
            >
              {t('articles', 'subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group"
              >
                <Link to={`/articles/${article.slug}`} className="block relative overflow-hidden h-56">
                  <img 
                    src={article.image} 
                    alt={article.title[language as keyof typeof article.title]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FDB623] text-gray-900 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {t('categories', article.category)}
                    </span>
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-tighter">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>

                  <Link to={`/articles/${article.slug}`}>
                    <h2 className="text-2xl font-black text-gray-900 mb-4 font-itim leading-tight group-hover:text-[#FDB623] transition-colors">
                      {article.title[language as keyof typeof article.title]}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-6 line-clamp-3 font-medium">
                    {article.excerpt[language as keyof typeof article.excerpt]}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      {article.author}
                    </div>
                    <Link 
                      to={`/articles/${article.slug}`}
                      className="text-[#FDB623] font-black inline-flex items-center gap-1 group/btn"
                    >
                      {t('articles', 'readMore')}
                      <ChevronRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center font-itim">
            {t('articles', 'faq.title')}
          </h2>
          <div className="space-y-8">
            {faqKeys.map((qKey) => {
              const aKey = 'a' + qKey.slice(1);
              const question = faqData[qKey];
              const answer = faqData[aKey];
              if (!question || !answer) return null;
              return (
                <div key={qKey} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-black text-gray-900 mb-4">{question}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
