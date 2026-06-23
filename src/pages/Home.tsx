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
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('seo', 'homeTitle')}</title>
        <meta name="description" content={t('seo', 'homeDesc')} />
        <meta name="keywords" content={t('seo', 'keywords')} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={t('seo', 'homeTitle')} />
        <meta property="og:description" content={t('seo', 'homeDesc')} />
        <meta property="og:image" content="https://qrsortable.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo', 'homeTitle')} />
        <meta name="twitter:description" content={t('seo', 'homeDesc')} />
        <meta name="twitter:image" content="https://qrsortable.app/og-image.jpg" />
        <link rel="canonical" href="https://qrsortable.app/" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "QrSortable",
            "url": "https://qrsortable.app",
            "logo": "https://qrsortable.app/logo.png",
            "sameAs": [
              "https://www.facebook.com/share/14iQCiz7hCH/",
              "https://www.instagram.com/qrsortable/?r=nametag&utm_source=qr_widget",
              "https://www.linkedin.com/in/qrsortable-q-6a0196419"
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
      </Helmet>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ProductGrid />
      <Footer />
    </div>
  );
};
