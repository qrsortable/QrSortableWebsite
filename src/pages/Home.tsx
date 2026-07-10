import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../contexts/LanguageContext';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { ProductGrid } from '../components/ProductGrid';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{t('seo', 'homeTitle')}</title>
        <meta name="description" content={t('seo', 'homeDesc')} />
        <meta name="keywords" content={t('seo', 'keywords')} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={t('seo', 'homeTitle')} />
        <meta property="og:description" content={t('seo', 'homeDesc')} />
        <meta property="og:image" content="https://www.qrsortable.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo', 'homeTitle')} />
        <meta name="twitter:description" content={t('seo', 'homeDesc')} />
        <meta name="twitter:image" content="https://www.qrsortable.com/og-image.jpg" />
        
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/?lang=es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/" />
        <link rel="canonical" href={`https://www.qrsortable.com/${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "QrSortable",
            "url": "https://www.qrsortable.com",
            "logo": "https://www.qrsortable.com/logo.png",
            "sameAs": [
              "https://x.com/QrSortable",
              "https://www.facebook.com/share/14iQCiz7hCH/",
              "https://www.instagram.com/qrsortable2026/",
              "https://www.linkedin.com/company/135935143/admin/dashboard/"
            ]
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "QrSortable",
            "operatingSystem": "iOS, Android, Web",
            "applicationCategory": "ProductivityApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "420"
            },
            "offers": {
              "@type": "PriceSpecification",
              "price": "0.00",
              "priceCurrency": "EUR"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": t('home', 'faq.q1') || "How do QR code storage labels help with moving?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('home', 'faq.a1') || "QR code storage labels allow you to digitize your moving inventory. By scanning a label, you can see high-res photos and lists of what is inside a box without opening it, making the unpacking process much faster."
                }
              },
              {
                "@type": "Question",
                "name": t('home', 'faq.q2') || "Are these labels compatible with any smartphone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('home', 'faq.a2') || "Yes, our QR labels are standard format and can be scanned by any smartphone camera. For the best experience and full inventory features, we recommend using the free QrSortable app."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <main id="main-content">
      <Hero />
      <Features />
      <HowItWorks />
      <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};
