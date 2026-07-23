import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackgroundDots } from '../../components/BackgroundDots';
import { useTranslation } from '../../contexts/LanguageContext';
import { SECURE_INVENTORY_TRANSLATIONS } from '../../constants/secureInventoryTranslations';
import { ShieldCheck, ChevronRight, Lock, EyeOff, Server, Key, ArrowRight, ArrowLeft, HelpCircle, Shield, X, Check } from 'lucide-react';

export const SecureInventoryTracking: React.FC = () => {
  const { language, localizePath } = useTranslation();

  // Retrieve translation data or default to English
  const tData = SECURE_INVENTORY_TRANSLATIONS[language] || SECURE_INVENTORY_TRANSLATIONS.EN;

  const renderRichText = (text: string | undefined) => {
    if (!text) return null;
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      const linkText = match[1];
      const linkUrl = match[2];

      if (matchIndex > lastIndex) {
        elements.push(text.substring(lastIndex, matchIndex));
      }

      elements.push(
        <Link 
          key={matchIndex} 
          to={localizePath(linkUrl)} 
          className="text-[#FDB623] hover:underline font-extrabold"
        >
          {linkText}
        </Link>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      elements.push(text.substring(lastIndex));
    }

    return elements;
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": tData.breadcrumbHome,
        "item": "https://www.qrsortable.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": tData.breadcrumbFeatures,
        "item": "https://www.qrsortable.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tData.breadcrumbCurrent,
        "item": "https://www.qrsortable.com/features/secure-inventory-tracking"
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "QrSortable",
    "operatingSystem": "iOS, Android, Web",
    "applicationCategory": "ProductivityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tData.faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" id="secure-inventory-tracking-page">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{tData.seoTitle}</title>
        <meta name="description" content={tData.seoDesc} />
        <link rel="canonical" href={`https://www.qrsortable.com/features/secure-inventory-tracking${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/features/secure-inventory-tracking" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/features/secure-inventory-tracking" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/features/secure-inventory-tracking?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/features/secure-inventory-tracking?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/features/secure-inventory-tracking?lang=es" />
        <meta property="og:title" content={tData.seoTitle} />
        <meta property="og:description" content={tData.seoDesc} />
        <meta property="og:url" content={`https://www.qrsortable.com/features/secure-inventory-tracking${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbsSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-abstract-dark text-white py-24 relative overflow-hidden">
          <BackgroundDots scale={1.5} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back to Home Navigation */}
            <Link 
              to={localizePath('/')} 
              className="inline-flex items-center text-sm font-black text-[#FDB623] hover:text-white mb-6 transition-colors gap-2 group/back animate-fadeIn"
              id="back-to-home-link"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover/back:-translate-x-1" /> {tData.backToHome}
            </Link>

            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-8 font-bold" aria-label="Breadcrumb" id="breadcrumb-nav">
              <Link to={localizePath('/')} className="hover:text-[#FDB623] transition-colors">{tData.breadcrumbHome}</Link>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <span className="text-gray-400">{tData.breadcrumbFeatures}</span>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <span className="text-[#FDB623]">{tData.breadcrumbCurrent}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-[#FDB623] text-black px-4 py-1.5 rounded-full text-sm font-black tracking-wider uppercase inline-block mb-4" id="hero-badge">
                  {tData.badge}
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" id="hero-title">
                  {tData.heading}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed font-bold mb-6" id="hero-subtitle">
                  {tData.subheading}
                </p>
                <p className="text-base text-gray-400 leading-relaxed font-medium mb-8" id="hero-supporting">
                  {tData.supportingText}
                </p>
                <div className="flex flex-wrap gap-4" id="hero-ctas">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all shadow-lg flex items-center gap-2 animate-pulse"
                    id="cta-get-labels-hero"
                  >
                    {tData.ctaGetLabels} <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    to={localizePath('/features/no-account-needed')} 
                    className="bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] hover:bg-gray-700 transition-all border border-gray-700 inline-block text-center"
                    id="cta-explore-no-account-needed-hero"
                  >
                    {tData.ctaStartWithoutAccount}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center p-8">
                  <Shield className="h-40 w-40 text-[#FDB623] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informative Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="main-content-container">
          <div className="prose prose-xl max-w-none text-gray-700">
            
            {/* Section 1 */}
            <section className="mb-16" id="section-what-is">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec1Heading}</h2>
              <p className="text-lg leading-relaxed mb-6 font-bold text-gray-800">
                {tData.sec1P1}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {tData.sec1P2}
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {tData.sec1P3}
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="section-how-it-works">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec2Heading}</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start" id="step-1">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step1Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step1Body}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="step-2">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step2Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step2Body}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="step-3">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step3Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step3Body}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="step-4">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step4Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step4Body}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="step-5">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">5</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step5Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step5Body}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-16" id="section-why-use">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec3Heading}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tData.sec3Subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="why-cards-grid">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-card-1">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Lock className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit1Title}</strong>
                    <p className="text-gray-600 text-sm">{tData.sec3Benefit1Body}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-card-2">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><EyeOff className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit2Title}</strong>
                    <p className="text-gray-600 text-sm">{tData.sec3Benefit2Body}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-card-3">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Server className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit3Title}</strong>
                    <p className="text-gray-600 text-sm">{renderRichText(tData.sec3Benefit3Body)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-card-4">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Key className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit4Title}</strong>
                    <p className="text-gray-600 text-sm">{tData.sec3Benefit4Body}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 md:col-span-2" id="why-card-5">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><ShieldCheck className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit5Title}</strong>
                    <p className="text-gray-600 text-sm">{renderRichText(tData.sec3Benefit5Body)}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-16" id="section-examples">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec4Heading}</h2>
              <div className="space-y-6" id="examples-list">
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-1">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tData.sec4Ex1Title}</h3>
                  <p className="text-gray-700">{tData.sec4Ex1Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-2">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tData.sec4Ex2Title}</h3>
                  <p className="text-gray-700">{tData.sec4Ex2Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-3">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tData.sec4Ex3Title}</h3>
                  <p className="text-gray-700">{tData.sec4Ex3Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-4">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tData.sec4Ex4Title}</h3>
                  <p className="text-gray-700">{tData.sec4Ex4Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-5">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tData.sec4Ex5Title}</h3>
                  <p className="text-gray-700">{tData.sec4Ex5Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-6">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tData.sec4Ex6Title}</h3>
                  <p className="text-gray-700">{tData.sec4Ex6Body}</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-16" id="section-who-uses">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec5Heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg" id="who-grid">
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-1">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card1Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card1Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-2">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card2Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card2Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-3">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card3Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card3Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-4">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card4Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card4Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-5">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card5Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card5Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-6">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card6Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card6Body}</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="section-comparison">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec6Heading}</h2>
              <p className="text-lg leading-relaxed mb-8">
                {tData.sec6Body1}
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-600">
                {tData.sec6Body2}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6" id="comparison-tables">
                <div className="bg-red-50/50 border border-red-100 p-6 rounded-3xl" id="comp-single-lang">
                  <h3 className="font-black text-red-950 text-xl mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" /> {tData.sec6HandwrittenTitle}
                  </h3>
                  <ul className="space-y-3 text-red-900/80 text-sm font-medium">
                    {tData.sec6HandwrittenPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50/50 border border-green-100 p-6 rounded-3xl" id="comp-qrsortable-lang">
                  <h3 className="font-black text-green-950 text-xl mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" /> {tData.sec6QrSortableTitle}
                  </h3>
                  <ul className="space-y-3 text-green-900/80 text-sm font-medium">
                    {tData.sec6QrSortablePoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-16" id="section-best-uses">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec7Heading}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tData.sec7Intro}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" id="best-uses-list">
                {tData.sec7Items.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 text-center text-sm font-bold text-gray-800 hover:border-[#FDB623] transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="section-tips">
              <h2 className="text-4xl font-black text-gray-900 mb-4">{tData.sec8Heading}</h2>
              <p className="text-lg leading-relaxed mb-8 font-bold text-gray-600">{tData.sec8Subtitle}</p>
              <div className="space-y-4" id="tips-container">
                {tData.sec8Tips.map((tip, index) => (
                  <div key={index} className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-b-0 last:pb-0">
                    <div className="bg-yellow-100 text-[#FDB623] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed font-semibold">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-16" id="section-practical">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec9Heading}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tData.sec9Body1}
              </p>
              <p className="text-lg leading-relaxed">
                {tData.sec9Body2}
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-16" id="section-workflow">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec10Heading}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tData.sec10Body1}
              </p>
              <p className="text-lg leading-relaxed">
                {renderRichText(tData.sec10Body2)}
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-16" id="faq-section">
              <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <HelpCircle className="text-[#FDB623] h-8 w-8" /> {tData.faqHeading}
              </h2>
              <div className="space-y-6">
                {tData.faqItems.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm" id={`faq-item-${idx}`}>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA Card */}
            <section className="bg-abstract-dark text-white p-8 md:p-12 rounded-[3rem] text-center relative overflow-hidden" id="final-cta-card">
              <BackgroundDots scale={1} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4">{tData.finalCtaHeading}</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 font-bold">
                  {tData.finalCtaBody}
                </p>
                <p className="text-sm text-gray-400 max-w-lg mx-auto mb-8 font-medium">
                  {tData.finalCtaSubtext}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all inline-block animate-bounce"
                    id="final-cta-get-labels"
                  >
                    {tData.ctaGetLabels}
                  </Link>
                  <Link 
                    to={localizePath('/features/no-account-needed')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] transition-all inline-block border border-gray-700"
                    id="final-cta-next-feature"
                  >
                    {tData.ctaStartWithoutAccount} →
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

