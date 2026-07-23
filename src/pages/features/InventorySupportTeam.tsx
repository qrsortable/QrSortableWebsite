import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackgroundDots } from '../../components/BackgroundDots';
import { useTranslation } from '../../contexts/LanguageContext';
import { SUPPORT_TEAM_TRANSLATIONS } from '../../constants/supportTeamTranslations';
import { Heart, ChevronRight, MessageSquare, Clock, HelpCircle, Mail, ArrowRight, ArrowLeft, UserCheck, CheckCircle2, ShieldCheck } from 'lucide-react';

export const InventorySupportTeam: React.FC = () => {
  const { language, localizePath } = useTranslation();
  const tData = SUPPORT_TEAM_TRANSLATIONS[language] || SUPPORT_TEAM_TRANSLATIONS.EN;

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

  const renderParagraphs = (text: string | undefined) => {
    if (!text) return null;
    return text.split('\n').filter(p => p.trim() !== '').map((para, i) => (
      <p key={i} className="text-lg leading-relaxed mb-6">
        {renderRichText(para)}
      </p>
    ));
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
        "item": "https://www.qrsortable.com/features/support-team"
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
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{tData.seoTitle}</title>
        <meta name="description" content={tData.seoDesc} />
        <link rel="canonical" href={`https://www.qrsortable.com/features/support-team${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/features/support-team" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/features/support-team" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/features/support-team?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/features/support-team?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/features/support-team?lang=es" />
        <meta property="og:title" content={tData.seoTitle} />
        <meta property="og:description" content={tData.seoDesc} />
        <meta property="og:url" content={`https://www.qrsortable.com/features/support-team${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
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
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover/back:-translate-x-1" /> {tData.backToHome}
            </Link>

            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-8 font-bold" aria-label="Breadcrumb">
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
                <p className="text-xl text-gray-300 leading-relaxed font-bold mb-8">
                  {tData.subheading}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all shadow-lg flex items-center gap-2 animate-pulse"
                  >
                    {tData.ctaGetLabels} <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    to={localizePath('/features/qr-code-inventory-preview')} 
                    className="bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] hover:bg-gray-700 transition-all border border-gray-700 inline-block text-center"
                  >
                    {tData.ctaExplorePreview}
                  </Link>
                </div>
                <p className="text-sm text-gray-400 mt-6 font-bold">
                  {tData.supportingText}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center p-8">
                  <Heart className="h-40 w-40 text-[#FDB623] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informative Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="prose prose-xl max-w-none text-gray-700">
            
            {/* Section 1: What is the Support Team */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec1Heading}</h2>
              <div className="text-lg leading-relaxed text-gray-800">
                {renderParagraphs(tData.sec1Body)}
              </div>
            </section>

            {/* Section 2: How Support Works */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
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
              </div>
            </section>

            {/* Section 3: What Can the Support Team Help With? */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec3Heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 mb-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><HelpCircle className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Area1Title}</strong>
                    <p className="text-gray-600 text-base">{tData.sec3Area1Body}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><Clock className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Area2Title}</strong>
                    <p className="text-gray-600 text-base">{tData.sec3Area2Body}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><MessageSquare className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Area3Title}</strong>
                    <p className="text-gray-600 text-base">{tData.sec3Area3Body}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><Mail className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Area4Title}</strong>
                    <p className="text-gray-600 text-base">{renderRichText(tData.sec3Area4Body)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><UserCheck className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Area5Title}</strong>
                    <p className="text-gray-600 text-base">{renderRichText(tData.sec3Area5Body)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><CheckCircle2 className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.sec3Area6Title}</strong>
                    <p className="text-gray-600 text-base">{tData.sec3Area6Body}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Real-Life Examples of Support */}
            <section className="mb-16 bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec4Heading}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#FDB623] pl-6 py-2 bg-white p-6 rounded-r-3xl shadow-sm">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{tData.sec4Ex1Title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{tData.sec4Ex1Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 py-2 bg-white p-6 rounded-r-3xl shadow-sm">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{tData.sec4Ex2Title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{tData.sec4Ex2Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 py-2 bg-white p-6 rounded-r-3xl shadow-sm">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{tData.sec4Ex3Title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{tData.sec4Ex3Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 py-2 bg-white p-6 rounded-r-3xl shadow-sm">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{tData.sec4Ex4Title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{tData.sec4Ex4Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 py-2 bg-white p-6 rounded-r-3xl shadow-sm">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{tData.sec4Ex5Title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{tData.sec4Ex5Body}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 py-2 bg-white p-6 rounded-r-3xl shadow-sm">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{tData.sec4Ex6Title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{tData.sec4Ex6Body}</p>
                </div>
              </div>
            </section>

            {/* Section 5: Who Uses QrSortable Support? */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec5Heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tData.sec5Card1Title}</h3>
                  <p className="text-gray-600 text-base">{renderRichText(tData.sec5Card1Body)}</p>
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

            {/* Section 6: QrSortable Support vs. Searching Alone */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec6Heading}</h2>
              <div className="text-lg leading-relaxed text-gray-800 mb-8">
                {renderParagraphs(tData.sec6Body)}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50/50 p-8 rounded-[2rem] border border-red-100">
                  <h3 className="text-2xl font-black text-red-900 mb-4">{tData.sec6SearchTitle}</h3>
                  <ul className="space-y-3">
                    {tData.sec6SearchPoints.map((pt, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-gray-700 text-base">
                        <span className="text-red-600 font-extrabold shrink-0">✕</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50/50 p-8 rounded-[2rem] border border-green-100">
                  <h3 className="text-2xl font-black text-green-900 mb-4">{tData.sec6SupportTitle}</h3>
                  <ul className="space-y-3">
                    {tData.sec6SupportPoints.map((pt, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-gray-700 text-base">
                        <span className="text-green-600 font-extrabold shrink-0">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Best Reasons to Contact Support */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec7Heading}</h2>
              <p className="text-lg text-gray-800 mb-6 font-bold">{tData.sec7Body}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tData.sec7Items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#FDB623] shrink-0" />
                    <span className="text-gray-700 text-base font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: What to Include in a Support Email */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec8Heading}</h2>
              <div className="text-lg leading-relaxed text-gray-800">
                {renderParagraphs(tData.sec8Body)}
              </div>
            </section>

            {/* Section 9: Support Built Around Real Storage Problems */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec9Heading}</h2>
              <div className="text-lg leading-relaxed text-gray-800">
                {renderParagraphs(tData.sec9Body)}
              </div>
            </section>

            {/* Section 10: Works with the Full QrSortable Workflow */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec10Heading}</h2>
              <div className="text-lg leading-relaxed text-gray-800">
                {renderParagraphs(tData.sec10Body)}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
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

            {/* Final CTA Section */}
            <section className="bg-abstract-dark text-white p-8 md:p-12 rounded-[3rem] text-center relative overflow-hidden">
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
                  >
                    {tData.ctaGetLabels}
                  </Link>
                  <Link 
                    to={localizePath('/features/qr-code-inventory-preview')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] transition-all inline-block border border-gray-700"
                  >
                    {tData.ctaExplorePreview} →
                  </Link>
                </div>
                <p className="text-xs text-gray-400 mt-6 italic font-bold">
                  Email qrsortable@gmail.com for support with labels, setup, scanning, PDFs, and inventory workflows.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

