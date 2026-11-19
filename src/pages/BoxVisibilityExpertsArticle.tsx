import React, { useState, useEffect, useRef } from 'react';
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
  RotateCcw,
  Tag,
  EyeOff
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useTranslation } from '../contexts/LanguageContext';
import { BOX_VISIBILITY_ARTICLE_TRANSLATIONS } from '../constants/boxVisibilityArticleTranslations';

type IndustryFilter = 'All' | 'Events' | 'Warehousing' | 'Fulfillment' | 'Healthcare' | 'Tech';

function shuffleItems(items: string[]): string[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const BoxVisibilityExpertsArticle: React.FC = () => {
  const { language, t, localizePath } = useTranslation();
  const art = BOX_VISIBILITY_ARTICLE_TRANSLATIONS[language] || BOX_VISIBILITY_ARTICLE_TRANSLATIONS.EN;

  const pageUrl = 'https://www.qrsortable.com/articles/know-whats-inside-every-box-before-opening-it';
  const canonicalUrl = `${pageUrl}${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`;
  const ogImageUrl = 'https://www.qrsortable.com/images/qr_box_scanner_illustration.png';

  // Reading progress & TOC state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('problem');
  const [isTocMobileOpen, setIsTocMobileOpen] = useState(false);

  // Share & Bookmark state
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showToast, setShowToast] = useState<'shared' | 'saved' | 'removed' | null>(null);

  // Expert industry filter state
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryFilter>('All');

  // Animated bars visibility state
  const [barsVisible, setBarsVisible] = useState(false);
  const barsRef = useRef<HTMLDivElement | null>(null);

  // Interactive box game state
  const [withLabels, setWithLabels] = useState(false);
  const [boxOrder, setBoxOrder] = useState<string[]>(() => shuffleItems(art.tryIt.items));
  const [openedIndices, setOpenedIndices] = useState<number[]>([]);

  // ROI calculator state
  const [boxesPerDay, setBoxesPerDay] = useState<number>(30);
  const [minutesPerSearch, setMinutesPerSearch] = useState<number>(2);
  const [hourlyRate, setHourlyRate] = useState<number>(30);
  const [savingsPercent, setSavingsPercent] = useState<number>(25);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Re-sync game items when language changes while keeping shuffle
  useEffect(() => {
    setBoxOrder(shuffleItems(art.tryIt.items));
    setOpenedIndices([]);
  }, [language, art.tryIt.items]);

  useEffect(() => {
    const saved = localStorage.getItem('bookmark_box_visibility_experts');
    setIsBookmarked(!!saved);
  }, []);

  // Scroll progress and active TOC section tracker
  useEffect(() => {
    const sections = ['problem', 'experts', 'numbers', 'try', 'calc', 'theme', 'faq'];

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight || 1;
      const pct = Math.min(100, Math.max(0, (doc.scrollTop / scrollable) * 100));
      setScrollProgress(pct);

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for animated savings bars
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      setBarsVisible(true);
      return;
    }

    const target = barsRef.current;
    if (!target) return;

    if (typeof IntersectionObserver === 'undefined') {
      setBarsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBarsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const triggerToast = (type: 'shared' | 'saved' | 'removed') => {
    setShowToast(type);
    setTimeout(() => setShowToast(null), 3000);
  };

  const handleShare = async () => {
    const shareData = {
      title: art.title,
      text: art.seoDesc,
      url: window.location.href
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
      localStorage.removeItem('bookmark_box_visibility_experts');
      setIsBookmarked(false);
      triggerToast('removed');
    } else {
      localStorage.setItem('bookmark_box_visibility_experts', 'true');
      setIsBookmarked(true);
      triggerToast('saved');
    }
  };

  const handleNewRound = (nextLabelsMode?: boolean) => {
    if (typeof nextLabelsMode === 'boolean') {
      setWithLabels(nextLabelsMode);
    }
    setBoxOrder(shuffleItems(art.tryIt.items));
    setOpenedIndices([]);
  };

  const handleBoxClick = (idx: number) => {
    if (openedIndices.includes(idx)) return;
    setOpenedIndices((prev) => [...prev, idx]);
  };

  const targetItem = art.tryIt.items[0];
  const foundTarget = openedIndices.some((i) => boxOrder[i] === targetItem);
  const triesCount = openedIndices.length;

  let gameMessage = withLabels ? art.tryIt.msgDefaultWithLabels : art.tryIt.msgDefaultNoLabels;
  if (foundTarget) {
    gameMessage =
      triesCount === 1
        ? art.tryIt.msgLucky
        : `${art.tryIt.msgFoundBefore}${triesCount}${art.tryIt.msgFoundAfter}`;
  }

  // Filtered experts
  const filteredExperts =
    selectedIndustry === 'All'
      ? art.experts.items
      : art.experts.items.filter((e) => e.industryKey === selectedIndustry);

  const industryTabs: { key: IndustryFilter; label: string }[] = [
    { key: 'All', label: art.experts.allFilter },
    { key: 'Events', label: art.experts.industries.Events },
    { key: 'Warehousing', label: art.experts.industries.Warehousing },
    { key: 'Fulfillment', label: art.experts.industries.Fulfillment },
    { key: 'Healthcare', label: art.experts.industries.Healthcare },
    { key: 'Tech', label: art.experts.industries.Tech }
  ];

  // Calculator math (220 working days per year)
  const annualHoursSaved = Math.max(
    0,
    Math.round(((boxesPerDay || 0) * (minutesPerSearch || 0) * (savingsPercent / 100) * 220) / 60)
  );
  const annualEuroSaved = Math.max(0, Math.round(annualHoursSaved * (hourlyRate || 0)));

  const tocItems = [
    { id: 'problem', label: art.toc.problem },
    { id: 'experts', label: art.toc.experts },
    { id: 'numbers', label: art.toc.numbers },
    { id: 'try', label: art.toc.tryIt },
    { id: 'calc', label: art.toc.calc },
    { id: 'theme', label: art.toc.theme },
    { id: 'faq', label: art.toc.faq }
  ];

  const barData = [
    { label: art.numbers.bar1Label, pct: 25 },
    { label: art.numbers.bar2Label, pct: 50 },
    { label: art.numbers.bar3Label, pct: 77 }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{art.seoTitle} | QrSortable</title>
        <meta name="description" content={art.seoDesc} />
        <meta name="keywords" content={art.seoKeywords} />
        <meta name="author" content="QrSortable Team" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="QrSortable" />
        <meta
          property="og:locale"
          content={
            language === 'DE'
              ? 'de_DE'
              : language === 'FR'
              ? 'fr_FR'
              : language === 'ES'
              ? 'es_ES'
              : 'en_US'
          }
        />
        <meta property="og:title" content={art.seoTitle} />
        <meta property="og:description" content={art.seoDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={art.figAriaLabel} />
        <meta property="article:published_time" content="2026-11-17T00:00:00Z" />
        <meta property="article:modified_time" content="2026-11-17T00:00:00Z" />
        <meta property="article:section" content={art.categoryLabel} />
        <meta property="article:tag" content="Inventory visibility" />
        <meta property="article:tag" content="QR code inventory" />
        <meta property="article:tag" content="Warehouse efficiency" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={art.seoTitle} />
        <meta name="twitter:description" content={art.seoDesc} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Hreflang & Canonical */}
        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link rel="alternate" hrefLang="de" href={`${pageUrl}?lang=de`} />
        <link rel="alternate" hrefLang="fr" href={`${pageUrl}?lang=fr`} />
        <link rel="alternate" hrefLang="es" href={`${pageUrl}?lang=es`} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <link
          rel="alternate"
          type="text/markdown"
          title="AI & Markdown Version"
          href="https://www.qrsortable.com/articles/know-whats-inside-every-box-before-opening-it.md"
        />

        {/* BreadcrumbList JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'QrSortable',
                item: `https://www.qrsortable.com/${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: t('nav', 'articles') || 'Articles',
                item: `https://www.qrsortable.com/articles${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: art.title,
                item: canonicalUrl
              }
            ]
          })}
        </script>

        {/* Article & Speakable JSON-LD for Search Engines & AI Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: art.title,
            description: art.seoDesc,
            image: [ogImageUrl],
            datePublished: '2026-11-17',
            dateModified: '2026-11-17',
            inLanguage: language.toLowerCase(),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl
            },
            author: {
              '@type': 'Organization',
              name: 'QrSortable',
              url: 'https://www.qrsortable.com'
            },
            publisher: {
              '@type': 'Organization',
              name: 'QrSortable',
              url: 'https://www.qrsortable.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.qrsortable.com/images/qrsortable_product.png'
              }
            },
            about: ['inventory labeling', 'QR code inventory', 'warehouse efficiency', 'box visibility'],
            citation: [
              'https://arxiv.org/pdf/2002.00167',
              'https://www.zebra.com/content/dam/zebra_dam/en/white-paper/retail-white-paper-inventory-visibility-retail-touchpoints-en-us.pdf'
            ],
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['#article-headline', '#article-lead', '#numbers', '#theme']
            }
          })}
        </script>

        {/* FAQPage JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: art.faq.items.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a
              }
            }))
          })}
        </script>
      </Helmet>

      <Header />

      {/* Subtle reading progress indicator */}
      <div className="fixed top-20 left-0 right-0 h-1 bg-transparent z-40 pointer-events-none">
        <div
          className="h-full bg-[#FDB623] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* Back link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to={localizePath('/articles')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FDB623] font-bold transition-colors group text-sm sm:text-base"
          >
            <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            {t('articles', 'back') || 'Back to Articles'}
          </Link>
        </div>

        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial Header */}
          <header className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-extrabold text-amber-600 tracking-wide mb-4">
              <span>{art.kicker}</span>
            </div>

            <h1
              id="article-headline"
              className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-gray-900 mb-6 leading-[1.12] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              {art.title}
            </h1>

            <p id="article-lead" className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed mb-8">
              {art.lead}
            </p>

            {/* Author & Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 py-5 border-y border-gray-100">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center border-2 border-[#FDB623]/30 text-gray-900">
                  <User className="h-5 w-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <div className="font-extrabold text-gray-900 text-sm sm:text-base">{art.metaByline}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-500 flex flex-wrap items-center gap-2 mt-0.5">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-gray-400" />
                      {art.metaDate}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-gray-400" />
                      {art.metaReadTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 relative">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors border border-gray-200"
                  title={art.shareTitle}
                  aria-label={art.shareTitle}
                >
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  onClick={handleToggleBookmark}
                  className={`p-2.5 rounded-full transition-colors border ${
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

          {/* Hero Illustration */}
          <figure className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100">
            <picture>
              <source srcSet="/images/qr_box_scanner_illustration.webp" type="image/webp" />
              <img
                src="/images/qr_box_scanner_illustration.png"
                alt={art.figAriaLabel}
                width={1200}
                height={492}
                className="w-full h-auto block object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </picture>
            <figcaption className="py-3 px-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-500 font-medium italic text-center">
              {art.figCaption}
            </figcaption>
          </figure>

          {/* 2-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar TOC */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 order-2 lg:order-1 space-y-6">
              {/* Mobile TOC */}
              <div className="lg:hidden bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4">
                <button
                  onClick={() => setIsTocMobileOpen(!isTocMobileOpen)}
                  className="w-full flex items-center justify-between font-bold text-gray-900 text-base"
                  aria-expanded={isTocMobileOpen}
                >
                  <span className="flex items-center gap-2">
                    <List className="h-5 w-5 text-[#FDB623]" />
                    {art.tocTitle}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isTocMobileOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isTocMobileOpen && (
                  <nav className="mt-3 pt-3 border-t border-amber-200/60 flex flex-col gap-1.5" aria-label={art.tocTitle}>
                    {tocItems.map((item) => (
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

              {/* Desktop Sticky TOC */}
              <div className="hidden lg:block bg-gray-50/80 border border-gray-200/70 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-gray-900 font-extrabold text-base mb-4 pb-3 border-b border-gray-200">
                  <List className="h-5 w-5 text-amber-500" />
                  {art.tocTitle}
                </div>
                <nav className="flex flex-col gap-1" aria-label={art.tocTitle}>
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-[#FDB623] text-gray-900 font-black shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Article Body */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-12 text-gray-800 text-lg leading-relaxed max-w-prose">
              {/* Section 1: Problem */}
              <section id="problem" className="scroll-mt-28 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.problem.heading}
                </h2>
                <p>{art.problem.p1}</p>
                <p>
                  {art.problem.p2BeforeTravel}
                  <strong className="font-bold text-gray-900">{art.problem.p2Travel}</strong>
                  {art.problem.p2Between}
                  <strong className="font-bold text-gray-900">{art.problem.p2Searching}</strong>
                  {art.problem.p2AfterSearching}
                  <a
                    href="https://arxiv.org/pdf/2002.00167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 underline decoration-[#FDB623] underline-offset-4 hover:text-gray-900 font-bold"
                  >
                    {art.problem.p2LinkText}
                  </a>
                  .
                </p>
                <p>
                  {art.problem.p3BeforeLink}
                  <a
                    href="https://www.zebra.com/content/dam/zebra_dam/en/white-paper/retail-white-paper-inventory-visibility-retail-touchpoints-en-us.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 underline decoration-[#FDB623] underline-offset-4 hover:text-gray-900 font-bold"
                  >
                    {art.problem.p3LinkText}
                  </a>
                  {art.problem.p3AfterLink}
                </p>
                <p>
                  {art.problem.p4BeforeBold}
                  <strong className="font-bold text-gray-900">{art.problem.p4Bold}</strong>
                </p>
              </section>

              {/* Section 2: What the experts said */}
              <section id="experts" className="scroll-mt-28 space-y-5 pt-8 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.experts.heading}
                </h2>
                <p className="text-gray-600">{art.experts.intro}</p>

                {/* Interactive Industry Filter Bar */}
                <div
                  className="flex flex-wrap gap-2"
                  role="group"
                  aria-label={art.experts.heading}
                >
                  {industryTabs.map((tab) => {
                    const isActive = selectedIndustry === tab.key;
                    return (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => setSelectedIndustry(tab.key)}
                        aria-pressed={isActive}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap shrink-0 border ${
                          isActive
                            ? 'bg-[#FDB623] border-[#FDB623] text-gray-900 shadow-xs'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Expert Cards */}
                <div className="space-y-4">
                  {filteredExperts.map((expert) => (
                    <div
                      key={expert.name}
                      className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold text-amber-700">
                        <span>{expert.industry}</span>
                      </div>
                      <blockquote className="text-gray-900 text-lg italic leading-relaxed">
                        “{expert.quote}”
                      </blockquote>
                      <div className="text-sm font-extrabold text-gray-900">
                        {expert.name}{' '}
                        <span className="font-medium text-gray-500">· {expert.role}</span>
                      </div>
                      <p className="text-base text-gray-600 pt-2 border-t border-gray-200/70">
                        {expert.takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: The results in numbers */}
              <section id="numbers" className="scroll-mt-28 space-y-6 pt-8 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.numbers.heading}
                </h2>
                <p className="text-gray-600">{art.numbers.intro}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-amber-50/90 border border-[#FDB623]/40 rounded-2xl p-5 text-center">
                    <div className="text-4xl font-black text-gray-900 tabular-nums">
                      {art.numbers.stat1Val}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold mt-1">
                      {art.numbers.stat1Label}
                    </div>
                  </div>
                  <div className="bg-amber-50/90 border border-[#FDB623]/40 rounded-2xl p-5 text-center">
                    <div className="text-4xl font-black text-gray-900 tabular-nums">
                      {art.numbers.stat2Val}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold mt-1">
                      {art.numbers.stat2Label}
                    </div>
                  </div>
                  <div className="bg-amber-50/90 border border-[#FDB623]/40 rounded-2xl p-5 text-center">
                    <div className="text-4xl font-black text-gray-900 tabular-nums">
                      {art.numbers.stat3Val}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold mt-1">
                      {art.numbers.stat3Label}
                    </div>
                  </div>
                </div>

                <div ref={barsRef} className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 space-y-4">
                  {barData.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[120px_1fr_52px] sm:grid-cols-[150px_1fr_56px] gap-3 items-center text-sm"
                    >
                      <span className="font-bold text-gray-900 truncate">{row.label}</span>
                      <div className="bg-gray-200 rounded-lg h-5 overflow-hidden">
                        <div
                          className="h-full rounded-lg transition-[width] duration-1000 ease-out"
                          style={{
                            width: barsVisible ? `${row.pct}%` : '0%',
                            background: 'linear-gradient(90deg, #FDB623, #d97706)'
                          }}
                        />
                      </div>
                      <span className="font-black text-gray-900 text-right tabular-nums">
                        {row.pct}%
                      </span>
                    </div>
                  ))}
                  <p className="text-sm text-gray-600 pt-2">{art.numbers.footnote}</p>
                </div>
              </section>

              {/* Section 4: Try it interactive box simulation */}
              <section id="try" className="scroll-mt-28 space-y-5 pt-8 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.tryIt.heading}
                </h2>
                <p>{art.tryIt.intro}</p>

                <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleNewRound(false)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border transition-colors whitespace-nowrap shrink-0 ${
                        !withLabels
                          ? 'bg-[#FDB623] border-[#FDB623] text-gray-900'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      <EyeOff className="h-4 w-4" />
                      {art.tryIt.noLabelsBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNewRound(true)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border transition-colors whitespace-nowrap shrink-0 ${
                        withLabels
                          ? 'bg-[#FDB623] border-[#FDB623] text-gray-900'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      <Tag className="h-4 w-4" />
                      {art.tryIt.withLabelsBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNewRound()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 transition-colors whitespace-nowrap shrink-0"
                    >
                      <RotateCcw className="h-4 w-4" />
                      {art.tryIt.newRoundBtn}
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-gray-900">
                    <span className="font-bold">{art.tryIt.goalBefore}</span>
                    <span className="font-black text-amber-700">{art.tryIt.goalItem}</span>
                    <span>{art.tryIt.goalAfter} </span>
                    <span className="text-gray-600">
                      {art.tryIt.openedLabel}{' '}
                      <strong className="text-gray-900 tabular-nums">{triesCount}</strong>
                    </span>
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {boxOrder.map((itemName, idx) => {
                      const isOpened = openedIndices.includes(idx);
                      const isTarget = itemName === targetItem;
                      const showTargetHighlight = (withLabels && isTarget) || (isOpened && isTarget);

                      return (
                        <button
                          key={`${itemName}-${idx}`}
                          type="button"
                          onClick={() => handleBoxClick(idx)}
                          className={`aspect-[1.25] rounded-xl border-2 p-2 text-xs sm:text-sm font-bold transition-colors flex items-center justify-center text-center ${
                            showTargetHighlight
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                              : isOpened
                              ? 'border-gray-200 bg-white text-gray-900'
                              : 'border-amber-200 bg-amber-50 text-gray-900 hover:border-[#FDB623]'
                          }`}
                        >
                          {withLabels || isOpened ? itemName : `${art.tryIt.boxPrefix} ${idx + 1}`}
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-sm font-medium text-gray-600">{gameMessage}</p>
                </div>
              </section>

              {/* Section 5: Interactive Savings Calculator */}
              <section id="calc" className="scroll-mt-28 space-y-5 pt-8 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.calc.heading}
                </h2>

                <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="calc-boxes"
                        className="block text-sm font-bold text-gray-900 mb-1.5"
                      >
                        {art.calc.boxesLabel}
                      </label>
                      <input
                        id="calc-boxes"
                        type="number"
                        min={0}
                        value={boxesPerDay}
                        onChange={(e) => setBoxesPerDay(Math.max(0, Number(e.target.value)))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 font-semibold tabular-nums focus:outline-none focus:ring-2 focus:ring-[#FDB623]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="calc-minutes"
                        className="block text-sm font-bold text-gray-900 mb-1.5"
                      >
                        {art.calc.minutesLabel}
                      </label>
                      <input
                        id="calc-minutes"
                        type="number"
                        min={0}
                        step={0.5}
                        value={minutesPerSearch}
                        onChange={(e) => setMinutesPerSearch(Math.max(0, Number(e.target.value)))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 font-semibold tabular-nums focus:outline-none focus:ring-2 focus:ring-[#FDB623]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="calc-rate"
                        className="block text-sm font-bold text-gray-900 mb-1.5"
                      >
                        {art.calc.hourlyLabel}
                      </label>
                      <input
                        id="calc-rate"
                        type="number"
                        min={0}
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(Math.max(0, Number(e.target.value)))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 font-semibold tabular-nums focus:outline-none focus:ring-2 focus:ring-[#FDB623]"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-bold text-gray-900 mb-2">
                      {art.calc.savingsLabel}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { val: 25, label: art.calc.preset25 },
                        { val: 50, label: art.calc.preset50 },
                        { val: 77, label: art.calc.preset77 }
                      ].map((preset) => (
                        <button
                          key={preset.val}
                          type="button"
                          onClick={() => setSavingsPercent(preset.val)}
                          aria-pressed={savingsPercent === preset.val}
                          className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors whitespace-nowrap shrink-0 ${
                            savingsPercent === preset.val
                              ? 'bg-[#FDB623] border-[#FDB623] text-gray-900'
                              : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl sm:text-3xl font-black text-amber-700 tabular-nums">
                      {annualHoursSaved.toLocaleString(language.toLowerCase())} {art.calc.hoursPerYearSuffix}
                    </div>
                    <div className="text-base font-semibold text-gray-700 tabular-nums mt-1">
                      {art.calc.approxPrefix}
                      {annualEuroSaved.toLocaleString(language.toLowerCase())} {art.calc.workingTimeSuffix}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-3">{art.calc.disclaimer}</p>
                  </div>
                </div>
              </section>

              {/* Section 6: Common Theme */}
              <section id="theme" className="scroll-mt-28 space-y-5 pt-8 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.theme.heading}
                </h2>
                <p>{art.theme.intro}</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-800">
                  {art.theme.bullets.map((bullet, idx) => (
                    <li key={idx} className="font-medium">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p>
                  {art.theme.pAfterBeforeBold}
                  <strong className="font-bold text-gray-900">{art.theme.pAfterBold}</strong>
                </p>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-28 space-y-5 pt-8 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {art.faq.heading}
                </h2>

                <div className="space-y-3.5">
                  {art.faq.items.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          className="w-full text-left p-4 sm:p-5 font-extrabold text-gray-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <span>{item.q}</span>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-amber-500' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-3">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* CTA Block */}
              <section className="bg-gradient-to-r from-amber-500 via-[#FDB623] to-amber-400 rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-300 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
                  {art.cta.heading}
                </h2>
                <p className="text-gray-900/85 font-semibold text-base sm:text-lg leading-relaxed">
                  {art.cta.body}
                </p>
                <p className="font-black text-gray-900 text-lg">{art.cta.boldLine}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to={localizePath('/#products')}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white font-black px-6 py-3.5 rounded-xl hover:bg-black transition-colors text-sm sm:text-base whitespace-nowrap shrink-0 shadow-md"
                  >
                    {art.cta.primaryBtn}
                    <ArrowRight className="h-4 w-4 text-[#FDB623]" />
                  </Link>
                  <Link
                    to={localizePath('/get-the-app')}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-black px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap shrink-0 border border-gray-200"
                  >
                    {art.cta.secondaryBtn}
                  </Link>
                </div>
              </section>

              {/* Sources */}
              <footer className="text-sm text-gray-500 leading-relaxed pt-4 border-t border-gray-100">
                <strong className="text-gray-900">{art.sources.label}</strong> {art.sources.textBefore}
                <a
                  href="https://arxiv.org/pdf/2002.00167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 underline underline-offset-2 hover:text-gray-900"
                >
                  {art.sources.link1Text}
                </a>
                ;{' '}
                <a
                  href="https://www.zebra.com/content/dam/zebra_dam/en/white-paper/retail-white-paper-inventory-visibility-retail-touchpoints-en-us.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 underline underline-offset-2 hover:text-gray-900"
                >
                  {art.sources.link2Text}
                </a>
                .
              </footer>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};
