import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Clock, ChevronLeft, Share2, Bookmark, Check } from 'lucide-react';
import { articles } from '../constants/articles';
import { useTranslation } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import ReactMarkdown from 'react-markdown';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t, localizePath } = useTranslation();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showToast, setShowToast] = useState<'shared' | 'saved' | 'removed' | null>(null);
  
  const article = articles.find(a => 
    a.slug === slug || 
    (a.id === '4' && slug === 'qr-code-storage-labels-the-smarter-way-to-find-what-you-own')
  );

  useEffect(() => {
    if (article) {
      const saved = localStorage.getItem(`bookmark_${article.slug}`);
      setIsBookmarked(!!saved);
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  // Handle SEO redirection from old slug to canonical slug
  if (slug === 'qr-code-storage-labels-the-smarter-way-to-find-what-you-own') {
    return <Navigate to={`/articles/${article.slug}`} replace />;
  }

  const handleShare = async () => {
    const shareData = {
      title: article.title[language as keyof typeof article.title],
      text: article.excerpt[language as keyof typeof article.excerpt],
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        triggerToast('shared');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const handleToggleBookmark = () => {
    if (isBookmarked) {
      localStorage.removeItem(`bookmark_${article?.slug}`);
      setIsBookmarked(false);
      triggerToast('removed');
    } else {
      localStorage.setItem(`bookmark_${article?.slug}`, 'true');
      setIsBookmarked(true);
      triggerToast('saved');
    }
  };

  const triggerToast = (type: 'shared' | 'saved' | 'removed') => {
    setShowToast(type);
    setTimeout(() => setShowToast(null), 3000);
  };

  const title = article.title[language as keyof typeof article.title];
  const content = article.content[language as keyof typeof article.content];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{title} | QrSortable</title>
        <meta name="description" content={article.excerpt[language as keyof typeof article.excerpt]} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={article.excerpt[language as keyof typeof article.excerpt]} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={article.excerpt[language as keyof typeof article.excerpt]} />
        <meta name="twitter:image" content={article.image} />
        
        <link rel="alternate" hrefLang="en" href={`https://www.qrsortable.com/articles/${article.slug}`} />
        <link rel="alternate" hrefLang="de" href={`https://www.qrsortable.com/articles/${article.slug}?lang=de`} />
        <link rel="alternate" hrefLang="fr" href={`https://www.qrsortable.com/articles/${article.slug}?lang=fr`} />
        <link rel="alternate" hrefLang="es" href={`https://www.qrsortable.com/articles/${article.slug}?lang=es`} />
        <link rel="alternate" hrefLang="x-default" href={`https://www.qrsortable.com/articles/${article.slug}`} />
        
        <link rel="canonical" href={`https://www.qrsortable.com/articles/${article.slug}${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.qrsortable.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Articles",
                "item": "https://www.qrsortable.com/articles"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": `https://www.qrsortable.com/articles/${article.slug}`
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "image": [article.image],
            "datePublished": article.date,
            "author": [{
              "@type": "Person",
              "name": article.author
            }],
            "publisher": {
              "@type": "Organization",
              "name": "QrSortable",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.qrsortable.com/logo.png"
              }
            },
            "description": article.excerpt[language as keyof typeof article.excerpt]
          })}
        </script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to={localizePath('/articles')} className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FDB623] font-black transition-colors group">
            <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            {t('articles', 'back')}
          </Link>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#FDB623]/10 text-[#FDB623] text-sm font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                {t('categories', article.category)}
              </span>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1 text-sm font-bold text-gray-400">
                <Clock className="h-4 w-4" />
                {article.readTime} {t('articles', 'readTime')}
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 font-itim leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-[#FDB623]/20">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <div className="font-black text-gray-900">{article.author}</div>
                  <div className="text-sm font-bold text-gray-400 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 relative">
                <button 
                  onClick={handleShare}
                  className="p-3 rounded-full hover:bg-gray-50 text-gray-400 hover:text-[#FDB623] transition-colors border border-transparent hover:border-gray-100"
                  title="Share article"
                >
                  <Share2 className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleToggleBookmark}
                  className={`p-3 rounded-full transition-colors border border-transparent hover:border-gray-100 ${
                    isBookmarked 
                      ? 'bg-[#FDB623]/10 text-[#FDB623] border-[#FDB623]/20' 
                      : 'hover:bg-gray-50 text-gray-400 hover:text-[#FDB623]'
                  }`}
                  title={isBookmarked ? "Remove bookmark" : "Save article"}
                >
                  <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>

                <AnimatePresence>
                  {showToast && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute -top-14 right-0 bg-gray-900 shadow-2xl text-white px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2 whitespace-nowrap z-50 border border-white/10"
                    >
                      <Check className="h-4 w-4 text-[#FDB623]" />
                      {showToast === 'shared' && 'Link copied to clipboard!'}
                      {showToast === 'saved' && 'Article saved to bookmarks!'}
                      {showToast === 'removed' && 'Removed from bookmarks'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </header>

          <figure className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-gray-100">
            <img 
              src={article.image} 
              alt={title} 
              className="w-full h-auto block object-contain" 
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
            />
            {article.imageCaption && (
              <figcaption className="py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-500 font-bold italic text-center px-4 block">
                {article.imageCaption[language as keyof typeof article.imageCaption] || article.imageCaption.EN}
              </figcaption>
            )}
          </figure>

          <div className="prose prose-xl prose-slate max-w-none prose-img:rounded-3xl prose-img:shadow-xl prose-headings:font-itim prose-headings:font-black">
            <ReactMarkdown
              components={{
                img: ({ node, ...props }) => {
                  const isSmall = props.alt?.includes('Figure 2');
                  return (
                    <div className={`flex flex-col items-center my-12 ${isSmall ? 'max-w-xs mx-auto' : 'w-full'}`}>
                      <img 
                        {...props} 
                        className={`rounded-3xl shadow-xl ${isSmall ? 'w-full' : ''}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      {props.title && (
                        <span className="mt-4 text-sm text-gray-400 font-bold italic text-center block w-full px-4">
                          {props.alt?.includes('Figure') ? `${props.alt.split(':')[0]}: ${props.title}` : props.title}
                        </span>
                      )}
                    </div>
                  );
                },
                p: ({ children }) => <div className="mb-6 leading-relaxed bg-transparent">{children}</div>,
              }}
            >
              {content}
            </ReactMarkdown>
            
            <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 italic">
              <p className="text-gray-600 text-lg">
                {t('articles', 'ctaText')} <Link to={localizePath('/#products')} className="text-[#FDB623] font-black underline decoration-2 underline-offset-4">{t('articles', 'ctaLink')}</Link> {t('articles', 'ctaSuffix')}
              </p>
            </div>
          </div>

          <footer className="mt-16 pt-12 border-t border-gray-100">
            <div className="bg-[#FDB623] rounded-3xl p-8 sm:p-12 text-center">
              <h3 className="text-3xl font-black text-gray-900 mb-4 font-itim">{t('articles', 'ctaTitle')}</h3>
              <p className="text-gray-900/80 font-bold mb-8 text-lg">{t('articles', 'ctaDesc')}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to={localizePath('/get-the-app')} className="bg-gray-900 text-white px-8 py-4 rounded-xl font-black hover:scale-105 transition-transform">
                  {t('articles', 'getApp')}
                </Link>
                <Link to={localizePath('/')} className="bg-white text-gray-900 px-8 py-4 rounded-xl font-black hover:scale-105 transition-transform border-b-4 border-gray-200">
                  {t('articles', 'browseLabels')}
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};
