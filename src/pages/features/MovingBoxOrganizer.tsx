import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackgroundDots } from '../../components/BackgroundDots';
import { useTranslation } from '../../contexts/LanguageContext';
import { MOVING_BOX_TRANSLATIONS } from '../../constants/movingBoxOrganizerTranslations';
import { Truck, ChevronRight, Package, ListTodo, ClipboardList, MapPin, ArrowRight, ArrowLeft, ShieldCheck, HelpCircle, Check, X } from 'lucide-react';

export const MovingBoxOrganizer: React.FC = () => {
  const { language, localizePath } = useTranslation();
  
  // Safely retrieve translations or fall back to English if not defined
  const tData = MOVING_BOX_TRANSLATIONS[language] || MOVING_BOX_TRANSLATIONS.EN;

  const faqItems = tData.faqItems || [];

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": tData.breadcrumbHome || "Home",
        "item": "https://www.qrsortable.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": tData.breadcrumbFeatures || "Features",
        "item": "https://www.qrsortable.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tData.breadcrumbCurrent || "Moving Box Organizer",
        "item": "https://www.qrsortable.com/features/moving-box-organizer"
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
    "mainEntity": faqItems.map((item: any) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans" id="moving-box-organizer-page">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{tData.seoTitle}</title>
        <meta name="description" content={tData.seoDesc} />
        <link rel="canonical" href={`https://www.qrsortable.com/features/moving-box-organizer${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/features/moving-box-organizer" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/features/moving-box-organizer" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/features/moving-box-organizer?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/features/moving-box-organizer?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/features/moving-box-organizer?lang=es" />
        <meta property="og:title" content={tData.seoTitle} />
        <meta property="og:description" content={tData.seoDesc} />
        <meta property="og:url" content={`https://www.qrsortable.com/features/moving-box-organizer${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbsSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-abstract-dark text-white py-24 relative overflow-hidden" id="hero-section">
          <BackgroundDots scale={1.5} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back to Home Navigation */}
            <Link 
              to={localizePath('/')} 
              className="inline-flex items-center text-sm font-black text-[#FDB623] hover:text-white mb-6 transition-colors gap-2 group/back animate-fadeIn"
              id="back-home-link"
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
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  {tData.heading}
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed font-bold mb-4">
                  {tData.subheading1}
                </p>
                <p className="text-base text-gray-400 leading-relaxed mb-8">
                  {tData.subheading2}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all shadow-lg flex items-center gap-2 animate-pulse"
                    id="cta-get-labels-btn"
                  >
                    {tData.ctaGetLabels} <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    to={localizePath('/features/shared-inventory-management')} 
                    className="bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] hover:bg-gray-700 transition-all border border-gray-700 inline-block text-center"
                    id="cta-explore-preview-btn"
                  >
                    {tData.ctaSharedInventory}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center p-8">
                  <Package className="h-40 w-40 text-[#FDB623] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informative Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="prose prose-xl max-w-none text-gray-700">
            
            <section className="mb-16" id="sec-what-is">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec1Title}</h2>
              <p className="text-lg leading-relaxed mb-6 font-bold text-gray-800">
                {tData.sec1P1}
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {tData.sec1P2}
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {tData.sec1P3}
              </p>
            </section>

            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="sec-how-works">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec2Title}</h2>
              
              {/* Image positioned right below the heading, showing full image */}
              <div className="mb-12 flex justify-center" id="how-it-works-image-container">
                <div className="relative max-w-4xl w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FDB623] to-[#FDB623]/30 rounded-[2.5rem] blur opacity-15"></div>
                  <img 
                    src="/images/feature_moving_box.png" 
                    alt={tData.sec2Title} 
                    className="relative rounded-[2.5rem] border-4 border-gray-900 shadow-2xl w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                    id="how-it-works-img"
                  />
                </div>
              </div>

              {/* Steps positioned underneath the image in a vertical stack matching the design layout */}
              <div className="space-y-8">
                <div className="flex gap-6 items-start" id="moving-step-1">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.step1Title}</h3>
                    <p className="text-lg text-gray-600">{tData.step1Desc}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="moving-step-2">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.step2Title}</h3>
                    <p className="text-lg text-gray-600">{tData.step2Desc}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="moving-step-3">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.step3Title}</h3>
                    <p className="text-lg text-gray-600">{tData.step3Desc}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="moving-step-4">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tData.step4Title}</h3>
                    <p className="text-lg text-gray-600">{tData.step4Desc}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16" id="sec-why-use">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec3Title}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 mb-6" id="why-use-list">
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-use-1">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.why1Title}</strong>
                    <p className="text-gray-600 text-base">{tData.why1Desc}</p>
                  </div>
                </li>
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-use-2">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><ListTodo className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.why2Title}</strong>
                    <p className="text-gray-600 text-base">{tData.why2Desc}</p>
                  </div>
                </li>
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-use-3">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><ClipboardList className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.why3Title}</strong>
                    <p className="text-gray-600 text-base">{tData.why3Desc}</p>
                  </div>
                </li>
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-use-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><Truck className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.why4Title}</strong>
                    <p className="text-gray-600 text-base">{tData.why4Desc}</p>
                  </div>
                </li>
                <li className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 md:col-span-2" id="why-use-5">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><ShieldCheck className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tData.why5Title}</strong>
                    <p className="text-gray-600 text-base">{tData.why5Desc}</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-16" id="sec-examples">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec4Title}</h2>
              <div className="space-y-6" id="examples-container">
                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl" id="example-1">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.ex1Title}</p>
                  "{tData.ex1Text}"
                </div>

                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl" id="example-2">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.ex2Title}</p>
                  "{tData.ex2Text}"
                </div>

                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl" id="example-3">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.ex3Title}</p>
                  "{tData.ex3Text}"
                </div>

                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl" id="example-4">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.ex4Title}</p>
                  "{tData.ex4Text}"
                </div>

                <div className="border-l-4 border-[#FDB623] pl-6 italic my-4 text-lg text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-3xl" id="example-5">
                  <p className="font-bold text-gray-900 not-italic mb-2">{tData.ex5Title}</p>
                  "{tData.ex5Text}"
                </div>
              </div>
            </section>

            <section className="mb-16" id="sec-who-can-use">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec5Title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg" id="who-can-use-grid">
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-use-1">
                  <h3 className="font-black text-gray-900 mb-2">{tData.who1Title}</h3>
                  <p className="text-gray-600 text-base">{tData.who1Desc}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-use-2">
                  <h3 className="font-black text-gray-900 mb-2">{tData.who2Title}</h3>
                  <p className="text-gray-600 text-base">{tData.who2Desc}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-use-3">
                  <h3 className="font-black text-gray-900 mb-2">{tData.who3Title}</h3>
                  <p className="text-gray-600 text-base">{tData.who3Desc}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-use-4">
                  <h3 className="font-black text-gray-900 mb-2">{tData.who4Title}</h3>
                  <p className="text-gray-600 text-base">{tData.who4Desc}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl md:col-span-2" id="who-use-5">
                  <h3 className="font-black text-gray-900 mb-2">{tData.who5Title}</h3>
                  <p className="text-gray-600 text-base">{tData.who5Desc}</p>
                </div>
              </div>
            </section>

            <section className="mb-16" id="sec-vs-traditional">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec6Title}</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {tData.sec6P1}
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-600">
                {tData.sec6P2}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6" id="vs-traditional-grid">
                <div className="bg-red-50/50 border border-red-100 p-6 rounded-3xl" id="traditional-labels-card">
                  <h3 className="font-black text-red-950 text-xl mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" /> {tData.tradLabelsTitle}
                  </h3>
                  <ul className="space-y-3 text-red-900/80 text-sm font-medium">
                    {(tData.tradBullets || []).map((bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50/50 border border-green-100 p-6 rounded-3xl" id="qrsortable-organizer-card">
                  <h3 className="font-black text-green-950 text-xl mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" /> {tData.qrSortableTitle}
                  </h3>
                  <ul className="space-y-3 text-green-900/80 text-sm font-medium">
                    {(tData.qrBullets || []).map((bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16" id="sec-best-uses">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec7Title}</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {language === 'EN' ? "Use QrSortable’s Moving Box Organizer for:" : 
                 language === 'DE' ? "Nutzen Sie den Umzugskarton-Organizer von QrSortable für:" :
                 language === 'FR' ? "Utilisez l'organisateur de cartons de déménagement de QrSortable pour :" :
                 "Utilice el organizador de cajas de mudanza de QrSortable para:"}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" id="best-uses-grid">
                {(tData.useCases || []).map((useCase: string, index: number) => (
                  <div key={index} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 text-center text-sm font-bold text-gray-800 hover:border-[#FDB623] transition-colors">
                    {useCase}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16" id="sec-real-problems">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec8Title}</h2>
              <p className="text-lg leading-relaxed mb-4 text-gray-600">
                {tData.sec8P1}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {tData.sec8P2}
              </p>
            </section>

            <section className="mb-16" id="sec-better-way">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tData.sec9Title}</h2>
              <p className="text-lg leading-relaxed mb-4 text-gray-600">
                {tData.sec9P1}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {tData.sec9P2}
              </p>
            </section>

            <section className="mb-16" id="sec-faqs">
              <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <HelpCircle className="text-[#FDB623] h-8 w-8" /> {tData.faqTitle}
              </h2>
              <div className="space-y-6" id="faqs-container">
                {faqItems.map((faq: any, idx: number) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-black text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-abstract-dark text-white p-8 md:p-12 rounded-[3rem] text-center relative overflow-hidden" id="sec-bottom-cta">
              <BackgroundDots scale={1} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4">{tData.bottomTitle}</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-2 font-bold">
                  {tData.bottomDesc}
                </p>
                <p className="text-sm text-gray-400 max-w-lg mx-auto mb-8 font-medium italic">
                  {tData.bottomSubtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all inline-block animate-bounce"
                    id="bottom-get-labels-btn"
                  >
                    {tData.ctaGetLabels}
                  </Link>
                  <Link 
                    to={localizePath('/features/shared-inventory-management')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] transition-all inline-block border border-gray-700"
                    id="bottom-explore-preview-btn"
                  >
                    {tData.ctaSharedInventory}
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
