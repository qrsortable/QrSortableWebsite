import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../contexts/LanguageContext';

export const ReturnPolicy: React.FC = () => {
  const { t, language } = useTranslation();

  const langCode = language.toLowerCase();
  const canonicalUrl = `https://www.qrsortable.com/return-policy${language !== 'EN' ? `?lang=${langCode}` : ''}`;
  const pageTitle = t('returnPolicy', 'seoTitle');
  const pageDesc = t('returnPolicy', 'seoDesc');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Helmet htmlAttributes={{ lang: langCode }}>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content="https://www.qrsortable.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content="https://www.qrsortable.com/og-image.jpg" />

        {/* Hreflang alternates */}
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/return-policy" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/return-policy?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/return-policy?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/return-policy?lang=es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/return-policy" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": t('returnPolicy', 'title'),
            "description": pageDesc,
            "url": canonicalUrl,
            "inLanguage": langCode,
            "publisher": {
              "@type": "Organization",
              "name": "QrSortable",
              "url": "https://www.qrsortable.com"
            }
          })}
        </script>
      </Helmet>

      <header className="border-b border-gray-200 pb-8 mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          {t('returnPolicy', 'title')}
        </h1>
        <p className="text-sm font-semibold text-gray-500">
          {t('returnPolicy', 'lastUpdated')}
        </p>
      </header>

      <main className="space-y-10 text-base leading-relaxed text-gray-700">
        {/* Section 2: Returns */}
        <section id="returns" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'returns.title')}
          </h2>
          <p>{t('returnPolicy', 'returns.text')}</p>
        </section>

        {/* Section 3: Return Eligibility */}
        <section id="return-eligibility" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'eligibility.title')}
          </h2>
          <p>{t('returnPolicy', 'eligibility.text')}</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>{t('returnPolicy', 'eligibility.item1')}</li>
            <li>{t('returnPolicy', 'eligibility.item2')}</li>
            <li>{t('returnPolicy', 'eligibility.item3')}</li>
          </ul>
        </section>

        {/* Section 4: How to Request a Return */}
        <section id="how-to-request" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'howToRequest.title')}
          </h2>
          <p>{t('returnPolicy', 'howToRequest.text')}</p>
          <ol className="list-decimal pl-6 space-y-1.5">
            <li>
              {t('returnPolicy', 'howToRequest.step1Prefix')}
              <a href="mailto:support@qrsortable.com" className="text-gray-900 font-semibold underline hover:text-gray-600">
                support@qrsortable.com
              </a>
              {t('returnPolicy', 'howToRequest.step1Suffix')}
            </li>
            <li>{t('returnPolicy', 'howToRequest.step2')}</li>
            <li>{t('returnPolicy', 'howToRequest.step3')}</li>
          </ol>
        </section>

        {/* Section 5: Return Shipping */}
        <section id="return-shipping" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'shipping.title')}
          </h2>
          <p>{t('returnPolicy', 'shipping.text')}</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              <strong>{t('returnPolicy', 'shipping.nonDefectiveTitle')}:</strong> {t('returnPolicy', 'shipping.nonDefective')}
            </li>
            <li>
              <strong>{t('returnPolicy', 'shipping.defectiveTitle')}:</strong> {t('returnPolicy', 'shipping.defective')}
            </li>
          </ul>
        </section>

        {/* Section 6: Refunds */}
        <section id="refunds" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'refunds.title')}
          </h2>
          <p>{t('returnPolicy', 'refunds.text1')}</p>
          <p>{t('returnPolicy', 'refunds.text2')}</p>
        </section>

        {/* Section 7: Refund Processing Time */}
        <section id="refund-processing-time" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'processingTime.title')}
          </h2>
          <p>{t('returnPolicy', 'processingTime.text')}</p>
        </section>

        {/* Section 8: Exchanges */}
        <section id="exchanges" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'exchanges.title')}
          </h2>
          <p>
            {t('returnPolicy', 'exchanges.textPrefix')}
            <a href="mailto:support@qrsortable.com" className="text-gray-900 font-semibold underline hover:text-gray-600">
              support@qrsortable.com
            </a>
            {t('returnPolicy', 'exchanges.textSuffix')}
          </p>
        </section>

        {/* Section 9: Non-Returnable Items */}
        <section id="non-returnable-items" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'nonReturnable.title')}
          </h2>
          <p>{t('returnPolicy', 'nonReturnable.text')}</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>{t('returnPolicy', 'nonReturnable.item1')}</li>
            <li>{t('returnPolicy', 'nonReturnable.item2')}</li>
            <li>{t('returnPolicy', 'nonReturnable.item3')}</li>
          </ul>
        </section>

        {/* Section 10: Damaged or Incorrect Orders */}
        <section id="damaged-or-incorrect-orders" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'damagedOrders.title')}
          </h2>
          <p>
            {t('returnPolicy', 'damagedOrders.textPrefix')}
            <a href="mailto:support@qrsortable.com" className="text-gray-900 font-semibold underline hover:text-gray-600">
              support@qrsortable.com
            </a>
            {t('returnPolicy', 'damagedOrders.textSuffix')}
          </p>
        </section>

        {/* Section 11: Contact Us */}
        <section id="contact-us" className="space-y-3 pt-6 border-t border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {t('returnPolicy', 'contactUs.title')}
          </h2>
          <p>{t('returnPolicy', 'contactUs.text')}</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2 text-sm sm:text-base font-medium">
            <p>
              <strong className="text-gray-900">Email:</strong>{' '}
              <a href="mailto:support@qrsortable.com" className="text-gray-900 underline hover:text-gray-600">
                support@qrsortable.com
              </a>
            </p>
            <p>
              <strong className="text-gray-900">Website:</strong>{' '}
              <a href="https://www.qrsortable.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-600">
                https://www.qrsortable.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReturnPolicy;
