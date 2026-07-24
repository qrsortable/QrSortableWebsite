import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ChevronLeft, 
  Share2, 
  Bookmark, 
  Check, 
  ChevronDown, 
  List, 
  ArrowRight,
  Sparkles,
  XCircle
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useTranslation } from '../contexts/LanguageContext';
import { SMART_QR_ARTICLE_TRANSLATIONS } from '../constants/smartQrArticleTranslations';

export const SmartQrStorageBinsArticle: React.FC = () => {
  const { language, t, localizePath } = useTranslation();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showToast, setShowToast] = useState<'shared' | 'saved' | 'removed' | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default
  const [isTocMobileOpen, setIsTocMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('quick-summary');

  const art = SMART_QR_ARTICLE_TRANSLATIONS[language] || SMART_QR_ARTICLE_TRANSLATIONS.EN;

  const pageUrl = "https://www.qrsortable.com/articles/smart-qr-code-labels-for-storage-bins";
  const titleText = art.title;
  const metaDescriptionText = art.metaDesc;
  const faqItems = art.faqItems;

  useEffect(() => {
    const saved = localStorage.getItem('bookmark_smart_qr_labels');
    setIsBookmarked(!!saved);
  }, []);

  // Track scroll position for Table of Contents active highlight
  useEffect(() => {
    const sections = [
      'quick-summary',
      'what-are-qr-labels',
      'what-are-smart-labels',
      'how-it-works',
      'static-vs-dynamic',
      'why-smart-over-handwriting',
      'best-uses',
      'reddit-insights',
      'what-to-look-for',
      'systems-compared',
      'step-by-step',
      'common-mistakes',
      'is-it-worth-it',
      'references',
      'faq',
      'final-verdict'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: titleText,
      text: metaDescriptionText,
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
      localStorage.removeItem('bookmark_smart_qr_labels');
      setIsBookmarked(false);
      triggerToast('removed');
    } else {
      localStorage.setItem('bookmark_smart_qr_labels', 'true');
      setIsBookmarked(true);
      triggerToast('saved');
    }
  };

  const triggerToast = (type: 'shared' | 'saved' | 'removed') => {
    setShowToast(type);
    setTimeout(() => setShowToast(null), 3000);
  };

  const tocItems = [
    { id: 'quick-summary', label: art.tocQuickSummary },
    { id: 'what-are-qr-labels', label: art.tocWhatAreQr },
    { id: 'what-are-smart-labels', label: art.tocWhatAreSmart },
    { id: 'how-it-works', label: art.tocHowItWorks },
    { id: 'static-vs-dynamic', label: art.tocStaticVsDynamic },
    { id: 'why-smart-over-handwriting', label: art.tocWhySmartOverHandwriting },
    { id: 'best-uses', label: art.tocBestUses },
    { id: 'reddit-insights', label: art.tocRedditInsights },
    { id: 'what-to-look-for', label: art.tocWhatToLookFor },
    { id: 'systems-compared', label: art.tocSystemsCompared },
    { id: 'step-by-step', label: art.tocStepByStep },
    { id: 'common-mistakes', label: art.tocCommonMistakes },
    { id: 'is-it-worth-it', label: art.tocIsItWorthIt },
    { id: 'references', label: art.tocReferences },
    { id: 'faq', label: art.tocFaq },
    { id: 'final-verdict', label: art.tocFinalVerdict },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{titleText} | QrSortable</title>
        <meta name="description" content={metaDescriptionText} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={titleText} />
        <meta property="og:description" content={metaDescriptionText} />
        <meta property="og:image" content="https://www.qrsortable.com/images/qr_storage_header.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${pageUrl}${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={titleText} />
        <meta name="twitter:description" content={metaDescriptionText} />
        <meta name="twitter:image" content="https://www.qrsortable.com/images/qr_storage_header.png" />
        
        {/* Hreflang alternates */}
        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link rel="alternate" hrefLang="de" href={`${pageUrl}?lang=de`} />
        <link rel="alternate" hrefLang="fr" href={`${pageUrl}?lang=fr`} />
        <link rel="alternate" hrefLang="es" href={`${pageUrl}?lang=es`} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />
        
        {/* Canonical Link */}
        <link rel="canonical" href={`${pageUrl}${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        
        {/* Breadcrumb JSON-LD */}
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
                "name": titleText,
                "item": `${pageUrl}${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`
              }
            ]
          })}
        </script>
        
        {/* BlogPosting JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": titleText,
            "image": ["https://www.qrsortable.com/images/qr_storage_header.png"],
            "datePublished": "2026-07-23",
            "dateModified": "2026-07-23",
            "inLanguage": language.toLowerCase(),
            "author": [{
              "@type": "Organization",
              "name": art.author,
              "url": "https://www.qrsortable.com"
            }],
            "publisher": {
              "@type": "Organization",
              "name": "QrSortable",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.qrsortable.com/logo.png"
              }
            },
            "description": metaDescriptionText
          })}
        </script>

        {/* FAQPage JSON-LD generated using exact translated text */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })}
        </script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* Top Breadcrumb / Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to={localizePath('/articles')} className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FDB623] font-bold transition-colors group text-sm sm:text-base">
            <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            {t('articles', 'back') || 'Back to Articles'}
          </Link>
        </div>

        {/* Main Article Container */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header Metadata */}
          <header className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#FDB623]/15 text-gray-900 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#FDB623]/30">
                Organization & Storage
              </span>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                <Clock className="h-4 w-4 text-gray-400" />
                {art.readTime}
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.15] tracking-tight font-sans">
              {titleText}
            </h1>

            {/* Author & Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center border-2 border-[#FDB623]/30 text-gray-800">
                  <User className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <div className="font-extrabold text-gray-900 text-base">{art.author}</div>
                  <div className="text-sm font-medium text-gray-500 flex items-center gap-1.5 mt-0.5">
                    <Calendar className="h-3.5 w-3.5 text-gray-400" />
                    {art.publishedDate}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 relative">
                <button 
                  onClick={handleShare}
                  className="p-3 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors border border-gray-200"
                  title={art.shareTitle}
                  aria-label={art.shareTitle}
                >
                  <Share2 className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleToggleBookmark}
                  className={`p-3 rounded-full transition-colors border ${
                    isBookmarked 
                      ? 'bg-[#FDB623]/20 text-gray-900 border-[#FDB623]' 
                      : 'hover:bg-gray-100 text-gray-600 border-gray-200'
                  }`}
                  title={isBookmarked ? art.toastRemoved : art.bookmarkTitle}
                  aria-label={art.bookmarkTitle}
                >
                  <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current text-[#FDB623]' : ''}`} />
                </button>

                <AnimatePresence>
                  {showToast && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute -top-14 right-0 bg-gray-900 shadow-xl text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap z-50 border border-gray-800"
                    >
                      <Check className="h-4 w-4 text-[#FDB623]" />
                      {showToast === 'shared' && art.toastCopied}
                      {showToast === 'saved' && art.toastBookmarked}
                      {showToast === 'removed' && art.toastRemoved}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </header>

          {/* Hero Image #1 */}
          <figure className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg bg-gray-50 border border-gray-100">
            <img 
              src="/images/qr_storage_header.png" 
              alt={art.imgHeaderAlt} 
              className="w-full h-auto block object-cover max-h-[520px]" 
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <figcaption className="py-3 px-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-500 font-medium italic text-center">
              {art.imgHeaderCaption}
            </figcaption>
          </figure>

          {/* 2-Column Desktop Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 order-2 lg:order-1 space-y-6">
              
              {/* Mobile Collapsible TOC Toggle */}
              <div className="lg:hidden bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4">
                <button 
                  onClick={() => setIsTocMobileOpen(!isTocMobileOpen)}
                  className="w-full flex items-center justify-between font-bold text-gray-900 text-base"
                >
                  <span className="flex items-center gap-2">
                    <List className="h-5 w-5 text-[#FDB623]" />
                    {art.tocTitle}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isTocMobileOpen ? 'rotate-180' : ''}`} />
                </button>
                {isTocMobileOpen && (
                  <nav className="mt-4 pt-3 border-t border-amber-200/60 flex flex-col gap-2">
                    {tocItems.map(item => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setIsTocMobileOpen(false)}
                        className={`text-sm font-semibold py-1.5 px-3 rounded-lg transition-colors ${
                          activeSection === item.id 
                            ? 'bg-[#FDB623] text-gray-900 font-bold' 
                            : 'text-gray-700 hover:bg-amber-100/60'
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                )}
              </div>

              {/* Desktop Sticky Table of Contents Sidebar */}
              <div className="hidden lg:block bg-gray-50/80 border border-gray-200/70 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-gray-900 font-extrabold text-lg mb-4 pb-3 border-b border-gray-200">
                  <List className="h-5 w-5 text-amber-500" />
                  {art.tocTitle}
                </div>
                <nav className="flex flex-col gap-1">
                  {tocItems.map(item => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`text-xs font-semibold py-1.5 px-2.5 rounded-lg transition-all flex items-center gap-2 ${
                        activeSection === item.id 
                          ? 'bg-[#FDB623] text-gray-900 font-black shadow-sm translate-x-1' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${activeSection === item.id ? 'bg-gray-900' : 'bg-gray-300'}`} />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

            </aside>

            {/* Main Article Body Column */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-10 text-gray-800 text-lg leading-relaxed">
              
              {/* Quick Summary Callout Box */}
              <section id="quick-summary" className="scroll-mt-36 bg-amber-50/90 border-2 border-[#FDB623]/50 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2.5 text-gray-900 font-black text-xl mb-3">
                  <Sparkles className="h-6 w-6 text-[#1a1a1a]" />
                  {art.summaryTitle}
                </div>
                <p className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed">
                  {art.summaryBody}
                </p>
              </section>

              {/* What Are QR Code Storage Labels? */}
              <section id="what-are-qr-labels" className="scroll-mt-36 space-y-5 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec1Title}
                </h2>
                <p>{art.sec1P1}</p>
                <p>{art.sec1P2}</p>
                <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 my-4">
                  <h3 className="font-extrabold text-gray-900 text-lg mb-3">{art.sec1BoxTitle}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-gray-700 font-medium">
                    {art.sec1Uses.map((use, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                        {use}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* What Are Smart QR Code Labels? */}
              <section id="what-are-smart-labels" className="scroll-mt-36 space-y-5 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec2Title}
                </h2>
                <p>{art.sec2P1}</p>
                <p>
                  {art.sec2P2.split("SmartLabels")[0]}
                  SmartLabels<sup className="text-amber-600 font-extrabold text-xs ml-0.5"><a href="#references">[1]</a></sup>
                  {art.sec2P2.split("SmartLabels")[1]?.split("BoxQR")[0]}
                  BoxQR<sup className="text-amber-600 font-extrabold text-xs ml-0.5"><a href="#references">[2]</a></sup>
                  {art.sec2P2.split("BoxQR")[1] || ""}
                </p>
                <p>{art.sec2P3}</p>
              </section>

              {/* How QR Code Labels for Storage Bins Work */}
              <section id="how-it-works" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec3Title}
                </h2>
                <p>{art.sec3Intro}</p>
                
                <ol className="space-y-4 list-none pl-0">
                  <li className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-[#FDB623] text-gray-900 font-black flex items-center justify-center shrink-0">1</span>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec3Step1Title}</h3>
                      <p className="text-gray-600 text-base">
                        {art.sec3Step1Body.split("guidance")[0]}guidance<sup className="text-amber-600 font-extrabold text-xs ml-0.5"><a href="#references">[4]</a></sup>{art.sec3Step1Body.split("guidance")[1] || ""}
                      </p>
                    </div>
                  </li>
                  <li className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-[#FDB623] text-gray-900 font-black flex items-center justify-center shrink-0">2</span>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec3Step2Title}</h3>
                      <p className="text-gray-600 text-base">{art.sec3Step2Body}</p>
                    </div>
                  </li>
                  <li className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-[#FDB623] text-gray-900 font-black flex items-center justify-center shrink-0">3</span>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec3Step3Title}</h3>
                      <p className="text-gray-600 text-base">{art.sec3Step3Body}</p>
                    </div>
                  </li>
                  <li className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-[#FDB623] text-gray-900 font-black flex items-center justify-center shrink-0">4</span>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec3Step4Title}</h3>
                      <p className="text-gray-600 text-base">{art.sec3Step4Body}</p>
                    </div>
                  </li>
                  <li className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-[#FDB623] text-gray-900 font-black flex items-center justify-center shrink-0">5</span>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec3Step5Title}</h3>
                      <p className="text-gray-600 text-base">{art.sec3Step5Body}</p>
                    </div>
                  </li>
                </ol>

                {/* Inline Image #2 */}
                <figure className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50 max-w-2xl mx-auto">
                  <img 
                    src="/images/qr_storage_benefits1.png" 
                    alt={art.imgBenefitsAlt} 
                    className="w-full h-auto block object-cover max-h-[420px]" 
                    loading="lazy"
                  />
                  <figcaption className="py-2.5 px-4 text-xs sm:text-sm text-gray-500 font-medium italic text-center border-t border-gray-100">
                    {art.imgBenefitsCaption}
                  </figcaption>
                </figure>
              </section>

              {/* Static vs Dynamic QR Codes for Storage */}
              <section id="static-vs-dynamic" className="scroll-mt-36 space-y-5 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec4Title}
                </h2>
                <p>{art.sec4Intro}</p>
                <p>{art.sec4Static}</p>
                <p>{art.sec4Dynamic}</p>
                <div className="bg-amber-50 border-l-4 border-[#FDB623] p-4 rounded-r-xl font-bold text-gray-900 text-base">
                  {art.sec4Highlight}
                </div>
              </section>

              {/* Why Choose Smart Labels Over Handwriting? */}
              <section id="why-smart-over-handwriting" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec5Title}
                </h2>
                <p>{art.sec5P1}</p>
                <p>{art.sec5P2}</p>

                {/* Table 1: Feature Comparison */}
                <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-sm text-gray-800 border-collapse">
                    <thead>
                      <tr className="bg-gray-900 text-white font-extrabold border-b border-gray-800">
                        <th className="p-3.5 sm:p-4 w-12 text-center">#</th>
                        <th className="p-3.5 sm:p-4 min-w-[180px]">{art.sec5TableColFeature}</th>
                        <th className="p-3.5 sm:p-4 min-w-[180px]">{art.sec5TableColHandwritten}</th>
                        <th className="p-3.5 sm:p-4 min-w-[200px] bg-amber-500 text-gray-900">{art.sec5TableColSmart}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-medium">
                      {art.sec5TableRows.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}>
                          <td className="p-3.5 sm:p-4 text-center font-bold text-gray-400">{idx + 1}</td>
                          <td className="p-3.5 sm:p-4 font-bold text-gray-900">{row.feature}</td>
                          <td className="p-3.5 sm:p-4 text-gray-500">{row.handwritten}</td>
                          <td className="p-3.5 sm:p-4 font-bold text-emerald-700 bg-amber-50/50">{row.smart}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Best Uses for QR Code Labels on Storage Bins */}
              <section id="best-uses" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec6Title}
                </h2>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                    <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec6HomeTitle}</h3>
                    <p className="text-gray-600 text-base">{art.sec6HomeBody}</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                    <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec6MovingTitle}</h3>
                    <p className="text-gray-600 text-base">{art.sec6MovingBody}</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                    <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec6BusinessTitle}</h3>
                    <p className="text-gray-600 text-base">{art.sec6BusinessBody}</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                    <h3 className="font-extrabold text-gray-900 text-lg mb-1">{art.sec6StorageTitle}</h3>
                    <p className="text-gray-600 text-base">{art.sec6StorageBody}</p>
                  </div>
                </div>

                {/* Inline Image #3 */}
                <figure className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50 max-w-2xl mx-auto">
                  <img 
                    src="/images/feature_moving_box.png" 
                    alt={art.imgMovingAlt} 
                    className="w-full h-auto block object-cover max-h-[420px]" 
                    loading="lazy"
                  />
                  <figcaption className="py-2.5 px-4 text-xs sm:text-sm text-gray-500 font-medium italic text-center border-t border-gray-100">
                    {art.imgMovingCaption}
                  </figcaption>
                </figure>
              </section>

              {/* What Reddit Users Say */}
              <section id="reddit-insights" className="scroll-mt-36 space-y-5 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec7Title}<sup className="text-amber-600 font-extrabold text-xs ml-0.5"><a href="#references">[5]</a></sup>
                </h2>
                <p>{art.sec7P1}</p>
                <p>{art.sec7P2}</p>
              </section>

              {/* What to Look for in a Good System */}
              <section id="what-to-look-for" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec8Title}
                </h2>
                <div className="space-y-3">
                  {art.sec8Points.map((pt, idx) => (
                    <p key={idx}>
                      <strong>{pt.label}:</strong> {pt.text}
                    </p>
                  ))}
                </div>

                {/* Inline Image #4 */}
                <figure className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50 max-w-2xl mx-auto">
                  <img 
                    src="/images/app_preview_grid.png" 
                    alt={art.imgPreviewAlt} 
                    className="w-full h-auto block object-cover max-h-[420px]" 
                    loading="lazy"
                  />
                  <figcaption className="py-2.5 px-4 text-xs sm:text-sm text-gray-500 font-medium italic text-center border-t border-gray-100">
                    {art.imgPreviewCaption}
                  </figcaption>
                </figure>
              </section>

              {/* Systems Compared Table */}
              <section id="systems-compared" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec9Title}
                </h2>

                <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-sm text-gray-800 border-collapse">
                    <thead>
                      <tr className="bg-gray-900 text-white font-extrabold border-b border-gray-800">
                        <th className="p-3.5 sm:p-4 w-12 text-center">#</th>
                        <th className="p-3.5 sm:p-4 min-w-[130px]">{art.sec9ColSystem}</th>
                        <th className="p-3.5 sm:p-4 min-w-[180px]">{art.sec9ColBestFor}</th>
                        <th className="p-3.5 sm:p-4 min-w-[280px]">{art.sec9ColFeatures}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-medium">
                      {art.sec9Systems.map((sys, idx) => (
                        <tr 
                          key={idx} 
                          className={sys.isHighlight ? "bg-amber-50/60 hover:bg-amber-50" : idx % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}
                        >
                          <td className={`p-3.5 sm:p-4 text-center font-bold ${sys.isHighlight ? "text-gray-900" : "text-gray-400"}`}>{idx + 1}</td>
                          <td className={`p-3.5 sm:p-4 ${sys.isHighlight ? "font-black text-gray-900 text-base" : "font-bold text-gray-900"}`}>
                            {sys.name}
                            {sys.refIndex && (
                              <sup className="text-amber-600 font-extrabold text-xs ml-0.5">
                                <a href="#references">[{sys.refIndex}]</a>
                              </sup>
                            )}
                          </td>
                          <td className={`p-3.5 sm:p-4 ${sys.isHighlight ? "font-semibold text-gray-800" : "text-gray-600"}`}>{sys.bestFor}</td>
                          <td className={`p-3.5 sm:p-4 ${sys.isHighlight ? "text-gray-800" : "text-gray-600"}`}>{sys.features}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* How to Organize Storage Bins Step by Step */}
              <section id="step-by-step" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec10Title}
                </h2>
                
                <ol className="space-y-3.5 list-none pl-0">
                  {art.sec10Steps.map((step, idx) => (
                    <li key={idx} className="bg-gray-50 border border-gray-200/80 rounded-xl p-4 flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-gray-900 text-[#FDB623] font-bold flex items-center justify-center text-sm shrink-0">{idx + 1}</span>
                      <span className="text-gray-800 text-base">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Common Mistakes to Avoid */}
              <section id="common-mistakes" className="scroll-mt-36 space-y-5 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec11Title}
                </h2>
                
                <ul className="space-y-3 list-none pl-0">
                  {art.sec11Mistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-red-50/60 border border-red-100 p-3.5 rounded-xl text-gray-800">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Is It Worth It? */}
              <section id="is-it-worth-it" className="scroll-mt-36 space-y-5 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec12Title}
                </h2>
                <p>{art.sec12P1}</p>
                <p>{art.sec12P2}</p>
              </section>

              {/* References & Cited Sources Section */}
              <section id="references" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2.5 text-gray-900 font-extrabold text-2xl sm:text-3xl tracking-tight">
                  <Bookmark className="h-7 w-7 text-amber-500 shrink-0" />
                  {art.sec13Title}
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {art.sec13Intro}
                </p>
                <div className="space-y-3.5 font-medium text-sm text-gray-700">
                  {art.sec13Refs.map((ref) => (
                    <div key={ref.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 flex items-start gap-3.5 shadow-xs hover:bg-gray-100/50 transition-colors">
                      <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded text-xs shrink-0 mt-0.5">[{ref.id}]</span>
                      <div>
                        <strong className="text-gray-900 text-base font-extrabold block">{ref.name}</strong>
                        <p className="text-gray-600 text-sm mt-0.5 leading-normal">{ref.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec14Title}
                </h2>

                <div className="space-y-3.5 my-6">
                  {faqItems.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div 
                        key={idx} 
                        className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full text-left p-4 sm:p-5 font-extrabold text-gray-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span>{item.q}</span>
                          <ChevronDown className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-4 sm:px-5 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-3">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Final Verdict */}
              <section id="final-verdict" className="scroll-mt-36 space-y-6 pt-4 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.sec15Title}
                </h2>
                <p>{art.sec15P1}</p>
                <p>{art.sec15P2}</p>
                <p className="font-extrabold text-gray-900 text-lg">
                  {art.sec15BottomLine}
                </p>

                {/* Bottom Call to Action Button Section */}
                <div className="my-10 bg-gradient-to-r from-amber-500 via-[#FDB623] to-amber-400 rounded-3xl p-8 sm:p-10 text-center shadow-xl border border-amber-300">
                  <h3 className="text-2xl sm:text-4xl font-black text-gray-900 mb-3 tracking-tight">
                    {art.ctaTitle}
                  </h3>
                  <p className="text-gray-900/80 font-bold mb-6 text-base sm:text-lg max-w-xl mx-auto">
                    {art.ctaBody}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      to={localizePath('/#products')} 
                      className="bg-gray-900 text-white font-black px-8 py-4 rounded-xl hover:bg-black transition-all transform hover:scale-105 shadow-lg text-base inline-flex items-center gap-2"
                    >
                      {art.ctaButton}
                      <ArrowRight className="h-5 w-5 text-[#FDB623]" />
                    </Link>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};
