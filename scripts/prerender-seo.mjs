import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');
const distIndexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(distIndexPath)) {
  console.error('prerender-seo: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const builtHtml = fs.readFileSync(distIndexPath, 'utf8');

// Extract Vite-emitted module script and stylesheet tags from dist/index.html
const assetTags = [
  ...(builtHtml.match(/<script\s+type="module"[^>]*><\/script>/g) || []),
  ...(builtHtml.match(/<link\s+rel="modulepreload"[^>]*>/g) || []),
  ...(builtHtml.match(/<link\s+rel="stylesheet"[^>]*>/g) || [])
].join('\n    ');

const BRAND_LOGO = 'https://www.qrsortable.com/images/qrsortable_product.png';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildPageHtml({
  routePath,
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = BRAND_LOGO,
  extraHead = '',
  schemas = [],
  bodyHtml
}) {
  const pageUrl = `https://www.qrsortable.com${routePath}`;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="theme-color" content="#1a1a1a" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    ${keywords ? `<meta name="keywords" content="${escapeHtml(keywords)}" />` : ''}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <link rel="canonical" href="${pageUrl}" />
    <link rel="alternate" hreflang="en" href="${pageUrl}" />
    <link rel="alternate" hreflang="de" href="${pageUrl}?lang=de" />
    <link rel="alternate" hreflang="fr" href="${pageUrl}?lang=fr" />
    <link rel="alternate" hreflang="es" href="${pageUrl}?lang=es" />
    <link rel="alternate" hreflang="x-default" href="${pageUrl}" />
    <link rel="alternate" type="text/plain" title="LLMs.txt" href="https://www.qrsortable.com/llms.txt" />
    ${extraHead}

    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="QrSortable" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:image" content="${ogImage}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImage}" />

    ${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n    ')}

    ${assetTags}
  </head>
  <body class="bg-white text-gray-900 antialiased">
    <div id="root">
      ${bodyHtml}
    </div>
  </body>
</html>
`;
}

function writePrerenderFile(relFilePath, html) {
  const fullPath = path.join(distDir, relFilePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`prerender-seo: generated dist/${relFilePath}`);
}

// 1. Article: Know What's Inside Every Box Before Opening It
const boxArticleUrl = 'https://www.qrsortable.com/articles/know-whats-inside-every-box-before-opening-it';
const boxArticleImg = 'https://www.qrsortable.com/images/qr_box_scanner_illustration.png';
const boxArticleDesc =
  'Eight professionals from events, warehousing, fulfillment and healthcare share how box-level visibility cuts picking time by 25%, receiving time by 77% and removes costly guesswork.';

writePrerenderFile(
  'articles/know-whats-inside-every-box-before-opening-it.html',
  buildPageHtml({
    routePath: '/articles/know-whats-inside-every-box-before-opening-it',
    title: 'Know What’s Inside Every Box Before Opening It: What 8 Experts Say | QrSortable',
    description: boxArticleDesc,
    keywords: 'inventory visibility, box labeling, QR code inventory, warehouse picking time, QR storage labels, box content tracker, QrSortable',
    ogType: 'article',
    ogImage: boxArticleImg,
    extraHead: `<link rel="alternate" type="text/markdown" title="AI & Markdown Version" href="https://www.qrsortable.com/articles/know-whats-inside-every-box-before-opening-it.md" />`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'QrSortable', item: 'https://www.qrsortable.com/' },
          { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.qrsortable.com/articles' },
          { '@type': 'ListItem', position: 3, name: 'Know What’s Inside Every Box Before Opening It: What 8 Experts Say', item: boxArticleUrl }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Know What’s Inside Every Box Before Opening It: What 8 Experts Say',
        description: boxArticleDesc,
        image: [boxArticleImg],
        datePublished: '2026-11-17',
        dateModified: '2026-11-17',
        inLanguage: 'en',
        mainEntityOfPage: { '@type': 'WebPage', '@id': boxArticleUrl },
        author: { '@type': 'Organization', name: 'QrSortable', url: 'https://www.qrsortable.com' },
        publisher: {
          '@type': 'Organization',
          name: 'QrSortable',
          url: 'https://www.qrsortable.com',
          logo: { '@type': 'ImageObject', url: BRAND_LOGO }
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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much time can box labeling save?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Experts here reported a 25% cut in average pick time, a 77% drop in weekly receiving time (47 hours to 11), and at least 50% faster item finding with a searchable box system.'
            }
          },
          {
            '@type': 'Question',
            name: 'What should a box label include?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A short code, the contents, and where the box belongs. A QR code can add photos, notes and live inventory details without cluttering the label.'
            }
          }
        ]
      }
    ],
    bodyHtml: `<main style="max-width: 820px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7;">
      <nav aria-label="Breadcrumb" style="margin-bottom: 1.5rem; font-size: 0.9rem;">
        <a href="https://www.qrsortable.com/">QrSortable</a> / <a href="https://www.qrsortable.com/articles">Articles</a>
      </nav>
      <article>
        <h1 id="article-headline">Know What’s Inside Every Box Before Opening It: What 8 Experts Say</h1>
        <p id="article-lead">Opening a box takes seconds. Searching, verifying, moving things around and fixing mistakes takes hours. We asked professionals across events, warehousing, fulfillment, healthcare and startups how much time clear box-level visibility saves.</p>
        <section id="numbers">
          <h2>Key Results Reported</h2>
          <ul>
            <li><strong>25%</strong> shorter average pick time (EV Cable Hub)</li>
            <li><strong>77%</strong> less weekly receiving time (47h to 11h, Fulfill.com client)</li>
            <li><strong>50%+</strong> faster item finding (Cliprise)</li>
          </ul>
        </section>
      </article>
    </main>`
  })
);

// 2. Feature: Instant PDF Label Sheets (QR & Barcodes) / QR Code Generator for Storage
const labelStudioUrl = 'https://www.qrsortable.com/features/qr-code-generator-storage';
const labelStudioImg = 'https://www.qrsortable.com/images/feature_codegenerated.png';
const labelStudioTitle = 'Instant PDF Label Sheets (QR & Barcodes) – Printable A4 & A5 | QrSortable';
const labelStudioDesc =
  'Create Instant PDF Label Sheets (QR & Barcodes) in A4 (€3 · 12 labels) or A5 (€2 · 6 labels). Custom Hex QR colors, Code-128 barcodes, box tags & €0 shipping with auto-download.';
const digitalPdfShipping = {
  '@type': 'OfferShippingDetails',
  shippingRate: { '@type': 'MonetaryAmount', value: '0.00', currency: 'EUR' },
  deliveryTime: {
    '@type': 'ShippingDeliveryTime',
    handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
    transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' }
  }
};

writePrerenderFile(
  'features/qr-code-generator-storage.html',
  buildPageHtml({
    routePath: '/features/qr-code-generator-storage',
    title: labelStudioTitle,
    description: labelStudioDesc,
    keywords:
      'Instant PDF Label Sheets, printable QR code labels PDF, Code-128 barcode label sheet, A4 A5 sticker sheet generator, storage box QR labels, moving box printable labels, QrSortable',
    ogType: 'product',
    ogImage: labelStudioImg,
    extraHead: `<link rel="alternate" type="text/markdown" title="AI & Markdown Version" href="https://www.qrsortable.com/features/qr-code-generator-storage.md" />
    <meta property="og:locale:alternate" content="de_DE" />
    <meta property="og:locale:alternate" content="fr_FR" />
    <meta property="og:locale:alternate" content="es_ES" />`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'QrSortable', item: 'https://www.qrsortable.com/' },
          { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://www.qrsortable.com/#features' },
          { '@type': 'ListItem', position: 3, name: 'Instant PDF Label Sheets (QR & Barcodes)', item: labelStudioUrl }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: labelStudioTitle,
        description: labelStudioDesc,
        url: labelStudioUrl,
        inLanguage: 'en',
        isPartOf: { '@type': 'WebSite', name: 'QrSortable', url: 'https://www.qrsortable.com/' },
        mainEntity: { '@type': 'Product', name: 'Instant PDF Label Sheets (QR & Barcodes)' },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#studio-hero-title', '#studio-summary', '#studio-specs', '#faq-section']
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'QrSortable Label Studio',
        url: labelStudioUrl,
        operatingSystem: 'Web, iOS, Android',
        applicationCategory: 'ProductivityApplication',
        description: labelStudioDesc,
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '2.00',
          highPrice: '15.00',
          priceCurrency: 'EUR'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Instant PDF Label Sheets (QR & Barcodes)',
        sku: 'QRS-PDF-LABELS',
        category: 'Office Supplies > Labels & Tags > Printable Label Sheets',
        description: labelStudioDesc,
        image: labelStudioImg,
        url: labelStudioUrl,
        brand: { '@type': 'Brand', name: 'QrSortable' },
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '2.00',
          highPrice: '15.00',
          priceCurrency: 'EUR',
          offerCount: '2',
          availability: 'https://schema.org/InStock',
          url: `${labelStudioUrl}#generator-studio`,
          offers: [
            {
              '@type': 'Offer',
              name: 'A5 PDF Label Sheet (6 labels/page)',
              sku: 'QRS-PDF-A5',
              price: '2.00',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: `${labelStudioUrl}?format=A5#generator-studio`,
              shippingDetails: digitalPdfShipping
            },
            {
              '@type': 'Offer',
              name: 'A4 PDF Label Sheet (12 labels/page)',
              sku: 'QRS-PDF-A4',
              price: '3.00',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: `${labelStudioUrl}?format=A4#generator-studio`,
              shippingDetails: digitalPdfShipping
            }
          ]
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How QrSortable’s QR Code Generator Works',
        description: labelStudioDesc,
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Choose QR Code or Barcode (Web or App)',
            text: 'Use the Interactive Label Studio on the web or open Home → Generator in the QrSortable app to select color-customizable QR Codes or crisp black Code-128 Barcodes.'
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Customize Format, Pages, Color & Tag',
            text: 'Pick A4 (12 labels/page, 3 × 4 grid) or A5 (6 labels/page, 2 × 3 grid), select 1 to 5 pages, optionally add a Tag Name and custom Hex QR color, and toggle subtle cut guides.'
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Unlock & Download Your Print-Ready PDF',
            text: 'Complete fast Mollie checkout (€0.00 shipping, no delivery address needed) to unlock unique encrypted codes and auto-download your print-ready PDF.'
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Print, Apply, and Scan',
            text: 'Print at 100% Actual Size on adhesive sheets or plain paper, apply to clean flat surfaces, and scan with QrSortable to attach items, photos, remarks, and locations.'
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Re-Download Anytime (Web or App)',
            text: 'Reprint anytime from Unlocked Printable PDF Orders in your browser or Menu → Orders → Download in the QrSortable mobile app.'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I generate QR codes from both the website and the mobile app?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Design, preview, pay, and download print-ready A4 or A5 PDF sheets directly in the Interactive Label Studio on this page or via Home → Generator inside the QrSortable iOS/Android app.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I print QR code labels myself on A4 or A5 paper?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Choose A4 (12 labels/page, 3 × 4 grid, 70 × 67.7 mm) for €3/page or A5 (6 labels/page, 2 × 3 grid, 74 × 66.3 mm) for €2/page, up to 5 pages per order, and print at 100% Actual Size.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I generate barcodes as well as custom-colored QR codes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Both the web studio and mobile app support custom Hex QR Codes (#RRGGBB) for room color-coding and high-contrast black Code-128 Barcodes (#000000).'
            }
          },
          {
            '@type': 'Question',
            name: 'Are the generated labels secure and compatible with QrSortable?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Live previews show a non-scannable watermarked sample, while paid sheets unlock unique encrypted QrSortable codes that link directly to your digital box inventory.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I re-download my generated PDF later?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Unlocked web orders stay saved on your browser under Unlocked Printable PDF Orders (with Open/Print PDF and cut-guide toggles), and app orders remain available under Menu → Orders → Download.'
            }
          }
        ]
      }
    ],
    bodyHtml: `<main style="max-width: 860px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7;">
      <nav aria-label="Breadcrumb" style="margin-bottom: 1.5rem; font-size: 0.9rem;">
        <a href="https://www.qrsortable.com/">Home</a> / <a href="https://www.qrsortable.com/#features">Features</a> / <span>Instant PDF Label Sheets (QR &amp; Barcodes)</span>
      </nav>
      <h1 id="studio-hero-title">Instant PDF Label Sheets (QR &amp; Barcodes): QR Code Generator for Storage</h1>
      <p id="studio-summary">Design and download encrypted A4 (12 labels, €3) or A5 (6 labels, €2) PDF label sheets online in our Interactive Label Studio or inside the QrSortable app. Print at home with €0 shipping and link every box to your searchable digital inventory.</p>

      <section id="studio-specs" style="margin: 2rem 0;">
        <h2>Instant PDF Label Sheets — Specifications at a Glance</h2>
        <ul>
          <li><strong>A4 Sheet Format (SKU: QRS-PDF-A4):</strong> 12 labels / page (3 × 4 grid · 70 × 67.7 mm) · €3.00 / page</li>
          <li><strong>A5 Sheet Format (SKU: QRS-PDF-A5):</strong> 6 labels / page (2 × 3 grid · 74 × 66.3 mm) · €2.00 / page</li>
          <li><strong>Supported Codes:</strong> Custom Hex QR Codes (#RRGGBB, ECC Q) &amp; Black Code-128 Barcodes (#000000)</li>
          <li><strong>Delivery &amp; Printing:</strong> €0.00 shipping · Instant PDF auto-download · Print at 100% Actual Size</li>
          <li><strong>Pages per Order:</strong> 1 to 5 pages (up to 60 A4 labels or 30 A5 labels) with optional Tag Name &amp; subtle cut guides</li>
        </ul>
      </section>

      <section style="margin: 2rem 0;">
        <h2>How QrSortable’s QR Code Generator Works</h2>
        <ol>
          <li><strong>Choose QR Code or Barcode (Web or App):</strong> Open the Interactive Label Studio on the web or go to Home → Generator inside the QrSortable app.</li>
          <li><strong>Customize Format, Pages, Color &amp; Tag:</strong> Pick A4 or A5, select 1–5 pages, choose a QR Hex color or Code-128 barcode, and add an optional box tag.</li>
          <li><strong>Unlock &amp; Download Your Print-Ready PDF:</strong> Pay securely via Mollie (€0.00 digital shipping) and auto-download your unique encrypted label PDF.</li>
          <li><strong>Print, Apply, and Scan:</strong> Print at 100% Actual Size, stick onto clean flat containers, and scan with QrSortable to log items, photos, remarks, and locations.</li>
          <li><strong>Re-Download Anytime:</strong> Access Unlocked Printable PDF Orders on the web or Menu → Orders → Download in the mobile app.</li>
        </ol>
      </section>

      <section style="margin: 2rem 0;">
        <h2>Printable PDF Labels vs. Pre-Printed Waterproof Packs</h2>
        <table>
          <thead>
            <tr><th>Feature</th><th>Instant PDF Label Sheets</th><th>Waterproof Label Packs</th></tr>
          </thead>
          <tbody>
            <tr><td>Fulfillment</td><td>Instant PDF download (€0 shipping)</td><td>Pre-printed packs shipped to your door</td></tr>
            <tr><td>Pricing</td><td>€2/page (A5, 6 codes) · €3/page (A4, 12 codes)</td><td>€14.99 (48 labels) · €29.99 (100 labels)</td></tr>
            <tr><td>Customization</td><td>Custom Hex QR color, box Tag Name, cut guides</td><td>Pre-printed color-coded or black heavy-duty sets</td></tr>
            <tr><td>Best For</td><td>Same-day moving prep, home, office &amp; reprints</td><td>Damp garages, basements &amp; heavy handling</td></tr>
          </tbody>
        </table>
      </section>

      <section id="faq-section" style="margin: 2rem 0;">
        <h2>Frequently Asked Questions</h2>
        <dl>
          <dt><strong>Can I generate QR codes from both the website and the mobile app?</strong></dt>
          <dd>Yes. Design, preview, pay, and download directly in the Interactive Label Studio or via Home → Generator inside the iOS and Android app.</dd>
          <dt><strong>Can I print QR code labels myself on A4 or A5 paper?</strong></dt>
          <dd>Yes. Choose A4 (12/page) or A5 (6/page), up to 5 pages per order, and print at 100% Actual Size on sticker sheets or plain paper.</dd>
          <dt><strong>Can I re-download my generated PDF later?</strong></dt>
          <dd>Yes. Re-download anytime from Unlocked Printable PDF Orders in your browser or Menu → Orders → Download in the mobile app.</dd>
        </dl>
      </section>

      <p><a href="https://www.qrsortable.com/">Home</a> · <a href="https://www.qrsortable.com/#products">Shop All Packs</a> · <a href="https://www.qrsortable.com/get-the-app">Get the App</a> · <a href="https://www.qrsortable.com/features/qr-code-generator-storage.md">Markdown Version</a></p>
    </main>`
  })
);

// 3. Product Detail Pages
const productPrerenders = [
  {
    slug: 'starter-pack',
    name: 'Standard Pack (48 Barcode Labels)',
    price: '14.99',
    image: 'https://lh3.googleusercontent.com/d/15PXsmikKti6F-BT7tfpcVlx7bqA0qfnE',
    desc: 'Keep home, storage, or moving items organized with ease. 48 unique black waterproof Code-128 barcode labels linked to the QrSortable app.'
  },
  {
    slug: 'pro-pack',
    name: 'Standard Pack (48 QR Labels)',
    price: '14.99',
    image: 'https://lh3.googleusercontent.com/d/1KMkk7zFMkMXXF40zllqPNOZASgT39GRd',
    desc: 'A multi-purpose organization kit for home, storage, or moving. 48 unique color-coded waterproof QR storage labels.'
  },
  {
    slug: 'business-pack',
    name: 'Large Pack (100 QR Labels)',
    price: '29.99',
    image: 'https://lh3.googleusercontent.com/d/12dbFsmeQOr3HmTM4CZB375zZv2JxXVSW',
    desc: 'Ideal for small businesses, large estates, or professional organizers. 100 heavy-duty waterproof QR labels.'
  }
];

for (const prod of productPrerenders) {
  writePrerenderFile(
    `product/${prod.slug}.html`,
    buildPageHtml({
      routePath: `/product/${prod.slug}`,
      title: `${prod.name} - QrSortable`,
      description: prod.desc,
      ogType: 'product',
      ogImage: prod.image,
      schemas: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: prod.name,
          description: prod.desc,
          image: prod.image,
          brand: { '@type': 'Brand', name: 'QrSortable' },
          offers: {
            '@type': 'Offer',
            price: prod.price,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock'
          }
        }
      ],
      bodyHtml: `<main style="max-width: 820px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7;">
        <h1>${escapeHtml(prod.name)} — €${prod.price}</h1>
        <p>${escapeHtml(prod.desc)}</p>
        <p><a href="https://www.qrsortable.com/">Browse All QrSortable Products</a></p>
      </main>`
    })
  );
}

// 4. Smart QR Code Labels Guide & Key Top-Level Pages
writePrerenderFile(
  'articles/smart-qr-code-labels-for-storage-bins.html',
  buildPageHtml({
    routePath: '/articles/smart-qr-code-labels-for-storage-bins',
    title: 'Smart QR Code Labels for Storage Bins: Scan, Search, and Organize Every Box | QrSortable',
    description: 'Learn how smart QR code labels for storage bins help you track box contents with photos, search across rooms, and avoid opening sealed containers.',
    ogType: 'article',
    ogImage: 'https://www.qrsortable.com/images/qr_storage_header.png',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Smart QR Code Labels for Storage Bins: Scan, Search, and Organize Every Box',
        image: ['https://www.qrsortable.com/images/qr_storage_header.png'],
        datePublished: '2026-07-23',
        dateModified: '2026-07-23',
        author: [{ '@type': 'Organization', name: 'QrSortable', url: 'https://www.qrsortable.com' }],
        publisher: {
          '@type': 'Organization',
          name: 'QrSortable',
          logo: { '@type': 'ImageObject', url: BRAND_LOGO }
        }
      }
    ],
    bodyHtml: `<main style="max-width: 820px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7;">
      <h1>Smart QR Code Labels for Storage Bins: Scan, Search, and Organize Every Box</h1>
      <p>Learn how dynamic smart QR storage labels link plastic bins and cardboard boxes to searchable digital item lists and high-res photos.</p>
    </main>`
  })
);

writePrerenderFile(
  'articles.html',
  buildPageHtml({
    routePath: '/articles',
    title: 'QrSortable Articles - Smart Organization & Inventory Tips',
    description: 'Practical guides, expert research, and moving tips to organize storage rooms, basements, garages, and small businesses with QR code labels.',
    ogImage: boxArticleImg,
    bodyHtml: `<main style="max-width: 820px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7;">
      <h1>QrSortable Articles &amp; Guides</h1>
      <ul>
        <li><a href="https://www.qrsortable.com/articles/know-whats-inside-every-box-before-opening-it">Know What’s Inside Every Box Before Opening It: What 8 Experts Say</a></li>
        <li><a href="https://www.qrsortable.com/articles/smart-qr-code-labels-for-storage-bins">Smart QR Code Labels for Storage Bins</a></li>
        <li><a href="https://www.qrsortable.com/articles/the-ultimate-guide-to-qr-code-storage-labels">The Ultimate Guide to QR Code Storage Labels</a></li>
      </ul>
    </main>`
  })
);

writePrerenderFile(
  'get-the-app.html',
  buildPageHtml({
    routePath: '/get-the-app',
    title: 'Get the App | QrSortable',
    description: 'Download QrSortable for iOS and Android to scan smart QR storage labels, log box contents with photos, and find anything in seconds.',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'QrSortable',
        operatingSystem: 'iOS, Android',
        applicationCategory: 'UtilitiesApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
      }
    ],
    bodyHtml: `<main style="max-width: 820px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7;">
      <h1>Download the QrSortable App (iOS &amp; Android)</h1>
      <p>Scan smart QR code and Code-128 barcode labels to manage storage boxes, photos, locations, and remarks in English, German, French, and Spanish.</p>
    </main>`
  })
);

writePrerenderFile(
  'about.html',
  buildPageHtml({
    routePath: '/about',
    title: 'About Us | QrSortable',
    description: 'Simplifying moves and home organization one scan at a time. Discover how QrSortable connects durable labels to mobile inventory software.',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Us - QrSortable',
        url: 'https://www.qrsortable.com/about'
      }
    ],
    bodyHtml: `<main style="max-width: 820px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7;">
      <h1>About QrSortable</h1>
      <p>QrSortable helps households, movers, and small businesses track every stored item by connecting physical QR labels to searchable mobile records.</p>
    </main>`
  })
);
