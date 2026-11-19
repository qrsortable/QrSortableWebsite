import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../contexts/LanguageContext';
import { useProductFeedback } from '../contexts/FeedbackContext';
import { DIGITAL_PDF_FEEDBACK_PRODUCT_NAME } from '../constants/products';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { ProductGrid } from '../components/ProductGrid';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  const { t, language } = useTranslation();
  const { reviews: digitalReviews } = useProductFeedback(DIGITAL_PDF_FEEDBACK_PRODUCT_NAME);
  const digitalAvgRating = digitalReviews.length > 0 ? digitalReviews.reduce((a, b) => a + b.rating, 0) / digitalReviews.length : 0;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Helmet htmlAttributes={{ lang: language.toLowerCase() }}>
        <title>{t('seo', 'homeTitle')}</title>
        <meta name="description" content={t('seo', 'homeDesc')} />
        <meta name="keywords" content={t('seo', 'keywords')} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={t('seo', 'homeTitle')} />
        <meta property="og:description" content={t('seo', 'homeDesc')} />
        <meta property="og:image" content="https://www.qrsortable.com/images/qrsortable_product.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo', 'homeTitle')} />
        <meta name="twitter:description" content={t('seo', 'homeDesc')} />
        <meta name="twitter:image" content="https://www.qrsortable.com/images/qrsortable_product.png" />
        
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
            "logo": "https://www.qrsortable.com/images/qrsortable_product.png",
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
                "name": t('articles', 'faq.q1'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('articles', 'faq.a1')
                }
              },
              {
                "@type": "Question",
                "name": t('articles', 'faq.q2'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('articles', 'faq.a2')
                }
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": t('shop', 'title'),
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": DIGITAL_PDF_FEEDBACK_PRODUCT_NAME,
                  "sku": "QRS-PDF-LABELS",
                  "category": "Office Supplies > Labels & Tags > Printable Label Sheets",
                  "description": "Create Instant PDF Label Sheets (QR & Barcodes) in A4 (€3 · 12 labels) or A5 (€2 · 6 labels). Custom Hex QR colors, Code-128 barcodes, box tags & €0 shipping with auto-download.",
                  "image": "https://www.qrsortable.com/images/feature_codegenerated.png",
                  "url": "https://www.qrsortable.com/features/qr-code-generator-storage",
                  "brand": { "@type": "Brand", "name": "QrSortable" },
                  ...(digitalReviews.length > 0 ? {
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": digitalAvgRating.toFixed(1),
                      "reviewCount": digitalReviews.length
                    }
                  } : {}),
                  "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "2.00",
                    "highPrice": "15.00",
                    "priceCurrency": "EUR",
                    "offerCount": "2",
                    "availability": "https://schema.org/InStock",
                    "url": "https://www.qrsortable.com/features/qr-code-generator-storage#generator-studio",
                    "offers": [
                      {
                        "@type": "Offer",
                        "name": "A5 PDF Label Sheet (6 labels/page)",
                        "sku": "QRS-PDF-A5",
                        "price": "2.00",
                        "priceCurrency": "EUR",
                        "availability": "https://schema.org/InStock",
                        "url": "https://www.qrsortable.com/features/qr-code-generator-storage?format=A5#generator-studio",
                        "shippingDetails": {
                          "@type": "OfferShippingDetails",
                          "shippingRate": { "@type": "MonetaryAmount", "value": "0.00", "currency": "EUR" },
                          "deliveryTime": {
                            "@type": "ShippingDeliveryTime",
                            "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" },
                            "transitTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" }
                          }
                        }
                      },
                      {
                        "@type": "Offer",
                        "name": "A4 PDF Label Sheet (12 labels/page)",
                        "sku": "QRS-PDF-A4",
                        "price": "3.00",
                        "priceCurrency": "EUR",
                        "availability": "https://schema.org/InStock",
                        "url": "https://www.qrsortable.com/features/qr-code-generator-storage?format=A4#generator-studio",
                        "shippingDetails": {
                          "@type": "OfferShippingDetails",
                          "shippingRate": { "@type": "MonetaryAmount", "value": "0.00", "currency": "EUR" },
                          "deliveryTime": {
                            "@type": "ShippingDeliveryTime",
                            "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" },
                            "transitTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" }
                          }
                        }
                      }
                    ]
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "Standard Pack (48 Barcode Labels)",
                  "url": "https://www.qrsortable.com/product/starter-pack",
                  "brand": { "@type": "Brand", "name": "QrSortable" },
                  "offers": {
                    "@type": "Offer",
                    "price": "14.99",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": "Standard Pack (48 QR Labels)",
                  "url": "https://www.qrsortable.com/product/pro-pack",
                  "brand": { "@type": "Brand", "name": "QrSortable" },
                  "offers": {
                    "@type": "Offer",
                    "price": "14.99",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Product",
                  "name": "Large Pack (100 QR Labels)",
                  "url": "https://www.qrsortable.com/product/business-pack",
                  "brand": { "@type": "Brand", "name": "QrSortable" },
                  "offers": {
                    "@type": "Offer",
                    "price": "29.99",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock"
                  }
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
