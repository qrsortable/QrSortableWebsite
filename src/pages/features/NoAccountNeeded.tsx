import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackgroundDots } from '../../components/BackgroundDots';
import { useTranslation } from '../../contexts/LanguageContext';
import { NO_ACCOUNT_NEEDED_TRANSLATIONS } from '../../constants/noAccountNeededTranslations';
import { User, ChevronRight, Zap, RefreshCw, Eye, ShieldCheck, ArrowRight, ArrowLeft, HelpCircle, Check, X } from 'lucide-react';

export const NoAccountNeeded: React.FC = () => {
  const { language, localizePath } = useTranslation();

  // Retrieve translation data or default to English
  const tData = NO_ACCOUNT_NEEDED_TRANSLATIONS[language] || NO_ACCOUNT_NEEDED_TRANSLATIONS.EN;

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
        "item": "https://www.qrsortable.com/features/no-account-needed"
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
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" id="no-account-needed-page">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{tData.seoTitle}</title>
        <meta name="description" content={tData.seoDesc} />
        <link rel="canonical" href={`https://www.qrsortable.com/features/no-account-needed${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/features/no-account-needed" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/features/no-account-needed" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/features/no-account-needed?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/features/no-account-needed?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/features/no-account-needed?lang=es" />
        <meta property="og:title" content={tData.seoTitle} />
        <meta property="og:description" content={tData.seoDesc} />
        <meta property="og:url" content={`https://www.qrsortable.com/features/no-account-needed${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
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
                <span className="bg-[#FDB623] text-black px-4 py-1.5 rounded-full text-sm font-black tracking-wider uppercase inline-block mb-4">
                  {tData.badge}
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  {tData.heading}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed font-bold mb-4">
                  {tData.subheading}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed font-semibold mb-8">
                  {tData.supportingText}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all shadow-lg flex items-center gap-2 animate-pulse"
                    id="cta-get-labels-hero"
                  >
                    {tData.ctaGetLabels} <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    to={localizePath('/features/support-team')} 
                    className="bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] hover:bg-gray-700 transition-all border border-gray-700 inline-block text-center"
                    id="cta-support-team-hero"
                  >
                    {tData.ctaSupportTeam}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center p-8">
                  <User className="h-40 w-40 text-[#FDB623] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informative Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="prose prose-xl max-w-none text-gray-700">
            
            {/* Section 1: What does it mean? */}
            <section className="mb-16" id="section-meaning">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec1Heading}</h2>
              <div className="text-lg leading-relaxed mb-6 font-bold text-gray-800 whitespace-pre-line">
                {tData.sec1Body}
              </div>
            </section>

            {/* Section 2: How it works */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="section-how-it-works">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec2Heading}</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step1Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step1Body}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step2Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step2Body}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step3Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step3Body}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step4Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step4Body}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">5</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.sec2Step5Title}</h3>
                    <p className="text-lg text-gray-600">{tData.sec2Step5Body}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Why Use a No Account Inventory App? */}
            <section className="mb-16" id="section-benefits">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec3Heading}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 mb-6">
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600"><Zap className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit1Title}</strong>
                    <p className="text-gray-600 text-base">{tData.sec3Benefit1Body}</p>
                  </div>
                </li>
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600"><Eye className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit2Title}</strong>
                    <p className="text-gray-600 text-base">{tData.sec3Benefit2Body}</p>
                  </div>
                </li>
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600"><RefreshCw className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit3Title}</strong>
                    <p className="text-gray-600 text-base">{renderRichText(tData.sec3Benefit3Body)}</p>
                  </div>
                </li>
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600"><ShieldCheck className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit4Title}</strong>
                    <p className="text-gray-600 text-base">{tData.sec3Benefit4Body}</p>
                  </div>
                </li>
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 md:col-span-2">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600"><User className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Benefit5Title}</strong>
                    <p className="text-gray-600 text-base">{renderRichText(tData.sec3Benefit5Body)}</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 4: Real-Life Examples */}
            <section className="mb-16 animate-fadeIn" id="section-examples">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec4Heading}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.sec4Ex1Title}</p>
                  {tData.sec4Ex1Body}
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.sec4Ex2Title}</p>
                  {tData.sec4Ex2Body}
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.sec4Ex3Title}</p>
                  {tData.sec4Ex3Body}
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.sec4Ex4Title}</p>
                  {tData.sec4Ex4Body}
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.sec4Ex5Title}</p>
                  {renderRichText(tData.sec4Ex5Body)}
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.sec4Ex6Title}</p>
                  {tData.sec4Ex6Body}
                </div>
              </div>
            </section>

            {/* Section 5: Who Uses No Account Inventory? */}
            <section className="mb-16" id="section-who-uses">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec5Heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card1Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card1Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card2Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card2Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card3Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card3Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card4Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card4Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card5Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card5Body}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card6Title}</h3>
                  <p className="text-gray-600 text-base">{tData.sec5Card6Body}</p>
                </div>
              </div>
            </section>

            {/* Section 6: No Account Needed vs. Account-Based */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="section-comparison">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec6Heading}</h2>
              <div className="text-lg leading-relaxed mb-8 whitespace-pre-line text-gray-600">
                {tData.sec6Body}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6" id="comparison-tables">
                <div className="bg-red-50/50 border border-red-100 p-6 rounded-3xl">
                  <h3 className="font-black text-red-950 text-xl mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" /> {tData.sec6AccountTitle}
                  </h3>
                  <ul className="space-y-3 text-red-900/80 text-sm font-medium">
                    {tData.sec6AccountPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50/50 border border-green-100 p-6 rounded-3xl">
                  <h3 className="font-black text-green-950 text-xl mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" /> {tData.sec6NoAccountTitle}
                  </h3>
                  <ul className="space-y-3 text-green-900/80 text-sm font-medium">
                    {tData.sec6NoAccountPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Best Uses */}
            <section className="mb-16" id="section-best-uses">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec7Heading}</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {tData.sec7Body}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" id="best-uses-list">
                {tData.sec7Items.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 text-center text-sm font-bold text-gray-800 hover:border-[#FDB623] transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: When Do You Need Premium */}
            <section className="mb-16" id="section-premium-need">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec8Heading}</h2>
              <div className="text-lg leading-relaxed mb-6 text-gray-600 whitespace-pre-line">
                {tData.sec8Body}
              </div>
            </section>

            {/* Section 9: Designed for Quick and Simple Storage Organization */}
            <section className="mb-16 shadow-inner bg-yellow-50/30 p-8 rounded-[2.5rem] border border-yellow-100" id="section-quick-simple">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec9Heading}</h2>
              <div className="text-lg leading-relaxed text-gray-600 whitespace-pre-line">
                {tData.sec9Body}
              </div>
            </section>

            {/* Section 10: Works with QrSortable's Full Inventory Workflow */}
            <section className="mb-16" id="section-full-workflow">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec10Heading}</h2>
              <div className="text-lg leading-relaxed text-gray-600 whitespace-pre-line">
                {tData.sec10Body}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16" id="faq-section">
              <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <HelpCircle className="text-[#FDB623] h-8 w-8" /> {tData.faqHeading}
              </h2>
              <div className="space-y-6">
                {tData.faqItems.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-black text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-abstract-dark text-white p-8 md:p-12 rounded-[3rem] text-center relative overflow-hidden" id="final-cta">
              <BackgroundDots scale={1} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4">{tData.finalCtaHeading}</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-bold">
                  {tData.finalCtaBody}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all inline-block animate-bounce"
                    id="cta-get-labels-bottom"
                  >
                    {tData.ctaGetLabels}
                  </Link>
                  <Link 
                    to={localizePath('/features/support-team')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] transition-all inline-block border border-gray-700"
                    id="cta-support-team-bottom"
                  >
                    {tData.ctaSupportTeam} →
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
