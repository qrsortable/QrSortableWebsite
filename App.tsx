import React, { useState, createContext, useContext, useMemo, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Check, Star, Truck, ShieldCheck, Smartphone, Package, Search, ArrowRight, Trash2, Plus, Minus, CreditCard, MapPin, QrCode, Send, ChevronLeft, Image as ImageIcon, Save, Zap, Info, MessageSquare, User, Lock, Loader2, Globe, ExternalLink, RefreshCw, AlertCircle, TrendingUp, Heart, Target, Sparkles, Scale, FileText, Eye, Settings, Shield, Play } from 'lucide-react';
import { Product, CartItem, CartContextType, Review, Currency, ShippingAddress } from './types';

// --- UTILS ---
const calculateAverageRating = (reviews: Review[] = []) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return parseFloat((sum / reviews.length).toFixed(1));
};

const checkRateLimit = (key: string, limit: number, windowMs: number): boolean => {
  const now = Date.now();
  const timestamps = JSON.parse(localStorage.getItem(key) || '[]');
  const validTimestamps = timestamps.filter((t: number) => now - t < windowMs);
  
  if (validTimestamps.length >= limit) {
    return false;
  }
  
  return true;
};

const recordSubmission = (key: string) => {
  const now = Date.now();
  const timestamps = JSON.parse(localStorage.getItem(key) || '[]');
  const validTimestamps = timestamps.filter((t: number) => now - t < 60000); // Keep last minute history
  localStorage.setItem(key, JSON.stringify([...validTimestamps, now]));
};

const FEEDBACK_API_URL = 'https://script.google.com/macros/s/AKfycbzu_IJCUVFrCN324skNaxaUOChyAnsVTrhdsK6mxtF1BC3HTkp-y0Owm08MkYcQ1u6w/exec';

// --- SHIPPING DATA ---
const SHIP_COUNTRIES = [
  { name: 'Germany', group: 'DE' },
  { name: 'United Kingdom', group: 'UK' },
  { name: 'Austria', group: 'EU' },
  { name: 'Belgium', group: 'EU' },
  { name: 'Bulgaria', group: 'EU' },
  { name: 'Croatia', group: 'EU' },
  { name: 'Cyprus', group: 'EU' },
  { name: 'Czech Republic', group: 'EU' },
  { name: 'Denmark', group: 'EU' },
  { name: 'Estonia', group: 'EU' },
  { name: 'Finland', group: 'EU' },
  { name: 'France', group: 'EU' },
  { name: 'Greece', group: 'EU' },
  { name: 'Hungary', group: 'EU' },
  { name: 'Ireland', group: 'EU' },
  { name: 'Italy', group: 'EU' },
  { name: 'Latvia', group: 'EU' },
  { name: 'Lithuania', group: 'EU' },
  { name: 'Luxembourg', group: 'EU' },
  { name: 'Malta', group: 'EU' },
  { name: 'Netherlands', group: 'EU' },
  { name: 'Poland', group: 'EU' },
  { name: 'Portugal', group: 'EU' },
  { name: 'Romania', group: 'EU' },
  { name: 'Slovakia', group: 'EU' },
  { name: 'Slovenia', group: 'EU' },
  { name: 'Spain', group: 'EU' },
  { name: 'Sweden', group: 'EU' },
  { name: 'Switzerland', group: 'EU' },
  { name: 'Norway', group: 'EU' },
  { name: 'United States', group: 'ROW' },
  { name: 'Canada', group: 'ROW' },
  { name: 'Australia', group: 'ROW' },
  { name: 'Other', group: 'ROW' }
];

// --- TRANSLATIONS & CONSTANTS ---
const LANGUAGES = [
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' }
];

const TRANSLATIONS: any = {
  EN: {
    nav: { features: 'Features', howItWorks: 'How It Works', shop: 'Shop', language: 'Language' },
    hero: {
      badge: 'Move Smarter. Store Safer.',
      title1: 'Never Wonder',
      title2: "What's Inside",
      title3: 'Again.',
      subtitle: 'Smart color-coded QR labels. Scan with our free app to instantly peek inside your boxes.',
      cta: 'Get Your Labels',
      secondaryCta: 'How It Works',
      app: 'Free iOS/Android App',
      searchPlaceholder: 'Find ..',
      storageRoom: 'Storage room'
    },
    features: {
      title: 'Why QrSortable?',
      subtitle: 'Stop digging through cardboard mountains. Get organized in seconds.',
      items: {
        preview: { title: "One-Tap Preview", desc: "Scan the label and see the contents list and photos immediately." },
        moving: { title: "Moving Mode", desc: "Group boxes by room. Print a master packing list." },
        sharing: { title: "Multi-User Sharing", desc: "Share access with family or movers." },
        generate: { title: "Digitally Generate Code", desc: "Generate and print custom QR codes instantly." },
        lang: { title: "Multi-Language Support", desc: "Accessible and easy for users worldwide." },
        security: { title: "High Data Security", desc: "Your inventory details remain safe and private." },
        noAccount: { title: "No Account Needed", desc: "Download and start organizing immediately." },
        support: { title: "Best Customer Support", desc: "We reply within hours to solve your challenges." }
      }
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'No complicated setup. Just stick and scan.',
      videoBtn: 'Watch Video Guide',
      step1: { title: 'Stick It', desc: 'Place the durable, color-coded label on your box.' },
      step2: { title: 'Scan It', desc: 'Open the app and scan the code. Add items and photos.' },
      step3: { title: 'Find It', desc: "Scan later to see what's inside without opening tape." },
      lifestyleTitle: 'Organized Workspace',
      lifestyleDesc: 'Manage assets in seconds'
    },
    shop: {
      title: 'Our Products',
      subtitle: 'Choose the right pack for your needs.',
      bestValue: 'Best Value',
      customerFavorite: 'Customer Favorite',
      addToCart: 'Add to Cart',
      viewDetails: 'View Details',
      reviews: 'reviews',
      perPack: '/ pack',
      ships24: 'Ships within 24h',
      incVat: 'Inc. VAT'
    },
    product: {
      notFound: 'Product not found',
      back: 'Back to Catalog',
      topRated: 'Top Rated Choice',
      included: "What's Included:",
      specTitle: 'Product Specification',
      spec1: 'Our labels are printed using high-quality technology to ensure QR codes and barcodes remain scannable over time.',
      spec2: 'The adhesive used is a special semi-permanent formula: it sticks firmly to cardboard and plastic but can be removed without residue.',
      paymentTitle: 'Payments & Refunds',
      paymentDesc: 'All prices include VAT. Refund within 30 days for unused packs. Email qrsortable@gmail.com for support.',
      feedbackTitle: 'Feedback',
      feedbackSubtitle: 'What our customers are saying.',
      writeReview: 'Leave a Review',
      submitReview: 'Submit Feedback'
    },
    cart: {
      title: 'Your Cart',
      empty: 'Your cart is empty.',
      startShopping: 'Start Shopping',
      total: 'Total',
      checkoutNote: 'Shipping & taxes calculated at checkout',
      secureCheckout: 'Secure Checkout'
    },
    checkout: {
      title: 'Checkout',
      subtitle: 'Secure payment for your orders',
      currency: 'Currency',
      shipping: 'Shipping',
      fullName: 'Full Name*',
      email: 'Email Address*',
      street: 'Street & Number*',
      city: 'City*',
      zip: 'ZIP*',
      country: 'Country*',
      pay: 'Pay',
      cartItems: 'Cart Items',
      paymentConfirmed: 'Payment Confirmed!',
      waitingPayment: 'Waiting for Payment',
      checkStatus: 'Check Payment Status',
      redirecting: 'Redirecting you to success page shortly...',
      completePayment: 'Please complete your payment in the secure window we opened for you.',
      selectCountry: 'Select Country',
      statusNotPaid: 'Payment status could not be confirmed yet. Please ensure you finished the transaction.',
      statusError: 'Could not verify payment status. Please try again.'
    },
    countries: {
      'Germany': 'Germany',
      'United Kingdom': 'United Kingdom',
      'Austria': 'Austria',
      'Belgium': 'Belgium',
      'Bulgaria': 'Bulgaria',
      'Croatia': 'Croatia',
      'Cyprus': 'Cyprus',
      'Czech Republic': 'Czech Republic',
      'Denmark': 'Denmark',
      'Estonia': 'Estonia',
      'Finland': 'Finland',
      'France': 'France',
      'Greece': 'Greece',
      'Hungary': 'Hungary',
      'Ireland': 'Ireland',
      'Italy': 'Italy',
      'Latvia': 'Latvia',
      'Lithuania': 'Lithuania',
      'Luxembourg': 'Luxembourg',
      'Malta': 'Malta',
      'Netherlands': 'Netherlands',
      'Poland': 'Poland',
      'Portugal': 'Portugal',
      'Romania': 'Romania',
      'Slovakia': 'Slovakia',
      'Slovenia': 'Slovenia',
      'Spain': 'Spain',
      'Sweden': 'Sweden',
      'Switzerland': 'Switzerland',
      'Norway': 'Norway',
      'United States': 'United States',
      'Canada': 'Canada',
      'Australia': 'Australia',
      'Other': 'Other'
    },
    footer: {
      slogan: 'Simplifying moves and home organization one scan at a time.',
      company: 'Company',
      about: 'About Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Settings',
      payments: 'Payments',
      rights: 'All rights reserved.'
    },
    about: {
      heroTitle: 'Our Story',
      heroSubtitle: 'Born from a mountain of cardboard boxes and the frustration of "Where did I put the coffee maker?"',
      innovationTitle: 'Innovation Meets Order',
      innovationDesc1: 'At QrSortable, we believe organization should not feel like work. Since 2026, we have been on a mission to make home storage, small business, and warehouse organization clear, transparent, and stress-free.',
      innovationDesc2: 'Why open a box and rip through tape when you can peek inside with a single scan? Our smart labels are built for movers, families, and businesses that value their time.',
      statsUsers: 'Users Organized',
      statsLabels: 'Labels Scanned',
      valuesTitle: 'Our Core Values',
      values: {
        simplicity: { title: 'Simplicity', desc: 'If it\'s not easy, it\'s not QrSortable. We build tools that everyone can use.' },
        quality: { title: 'Quality', desc: 'Our labels are high in quality and built to survive attics and moves.' },
        userFocused: { title: 'User Focused', desc: 'We listen to our community. Every app update is driven by your feedback.' }
      }
    },
    privacy: {
      updated: 'Last Updated: January 2026',
      section1: { title: 'Information We Collect', desc: 'We collect information you provide directly to us when you make a purchase, leave feedback, or contact us. This includes your name, email address, shipping address, and payment details (processed securely via our partners).' },
      section2: { title: 'How We Use It', desc: 'Your data is used solely to fulfill orders, improve our software experience, and (if you opt-in) notify you about major updates. We do not sell your data to third parties. Ever.' },
      section3: { title: 'GDPR & CCPA Compliance', desc: 'For our European and US users, we respect your rights to access, rectify, or delete your personal data. You can request data deletion at any time by contacting qrsortable@gmail.com.', list: ['Right to be forgotten', 'Data portability', 'Explicit consent for marketing'] },
      section4: { title: 'Cookies & Tracking', desc: 'We categorize cookies into Essential, Analytics, and Marketing. Essential cookies are always on to ensure the site works. Analytics and Marketing cookies are strictly opt-in. You can update your choices at any time.' }
    },
    terms: {
      updated: 'Last Updated: January 2026',
      intro: 'By using our website and products, you agree to these terms. Please read them carefully.',
      section1: { title: 'Product Usage', desc: 'QrSortable labels are provided "as-is". While our labels are durable and high-quality, we are not responsible for any damage to belongings stored in containers using our labels. The companion app is free to use but requires an internet connection for cloud syncing.' },
      section2: { title: 'Payments & Refunds', desc: 'To request a refund, email us at qrsortable@gmail.com, and we’ll respond within a few hours. All prices include VAT where applicable. You may request a refund within 30 days of purchase for unused label packs. Labels that have been scanned and linked to a user account are considered used and are not eligible for refunds.' },
      section3: { title: 'Intellectual Property', desc: 'The "QrSortable" name, brand logo, and unique QR generation algorithms are the exclusive property of QrSortable LLC. Any unauthorized reproduction is strictly prohibited.' },
      section4: { title: 'Governing Law', desc: 'These terms are governed by the laws of the European Union and the United States. Any disputes will be resolved through arbitration in a neutral jurisdiction.' }
    },
    cookies: {
      banner: { title: 'We respect your privacy', desc: 'We use cookies to enhance your experience, serve personalized content, and analyze our traffic. Your choices help us provide a safer, faster organization experience.', acceptAll: 'Accept All', customize: 'Customize Settings', essentialOnly: 'Essential Only', save: 'Save My Preferences' },
      manager: {
        essential: { title: 'Essential', desc: 'Required for site functionality (Cart, Security). Always on.' },
        analytics: { title: 'Analytics', desc: 'Helps us understand how you use our site to improve the experience.' },
        marketing: { title: 'Marketing', desc: 'Allows us to show you relevant offers and updates elsewhere.' }
      }
    },
    success: {
      title: 'Success!',
      message: 'Your labels are on the way.',
      backHome: 'Back to Home'
    }
  },
  DE: {
    nav: { features: 'Funktionen', howItWorks: 'Wie es funktioniert', shop: 'Shop', language: 'Sprache' },
    hero: {
      badge: 'Smarter umziehen. Sicherer lagern.',
      title1: 'Nie Wieder',
      title2: 'Rätseln',
      title3: 'Was drin ist.',
      subtitle: 'Intelligente farbcodierte QR-Etiketten. Scannen Sie mit unserer App, um sofort in Ihre Kisten zu schauen.',
      cta: 'Etiketten holen',
      secondaryCta: 'So geht\'s',
      app: 'Kostenlose App',
      searchPlaceholder: 'Suchen ..',
      storageRoom: 'Lagerraum'
    },
    features: {
      title: 'Warum QrSortable?',
      subtitle: 'Hören Sie auf, in Kartonbergen zu wühlen. In Sekunden organisiert.',
      items: {
        preview: { title: "Sofort-Vorschau", desc: "Etikett scannen und sofort Inhaltsliste und Fotos sehen." },
        moving: { title: "Umzugsmodus", desc: "Kartons nach Raum gruppieren. Master-Packliste drucken." },
        sharing: { title: "Mehrbenutzer", desc: "Zugriff mit Familie oder Umzugshelfern teilen." },
        generate: { title: "Codes generieren", desc: "Eigene QR-Codes sofort erstellen und drucken." },
        lang: { title: "Mehrsprachig", desc: "Zugänglich und einfach für Benutzer weltweit." },
        security: { title: "Hohe Sicherheit", desc: "Ihre Bestandsdaten bleiben sicher und privat." },
        noAccount: { title: "Kein Konto nötig", desc: "Herunterladen und sofort mit dem Organisieren beginnen." },
        support: { title: "Bester Support", desc: "Wir antworten innerhalb von Stunden auf Ihre Fragen." }
      }
    },
    howItWorks: {
      title: 'Wie es funktioniert',
      subtitle: 'Keine komplizierte Einrichtung. Einfach aufkleben und scannen.',
      videoBtn: 'Video ansehen',
      step1: { title: 'Aufkleben', desc: 'Bringen Sie das haltbare Etikett auf Ihrem Karton an.' },
      step2: { title: 'Scannen', desc: 'App öffnen, Code scannen. Gegenstände und Fotos hinzufügen.' },
      step3: { title: 'Finden', desc: 'Später scannen, um den Inhalt zu sehen, ohne das Klebeband zu öffnen.' },
      lifestyleTitle: 'Organisierter Arbeitsplatz',
      lifestyleDesc: 'Assets in Sekunden verwalten'
    },
    shop: {
      title: 'Unsere Produkte',
      subtitle: 'Wählen Sie das richtige Paket für Ihre Bedürfnisse.',
      bestValue: 'Bester Wert',
      customerFavorite: 'Kundenfavorit',
      addToCart: 'In den Warenkorb',
      viewDetails: 'Details ansehen',
      reviews: 'Bewertungen',
      perPack: '/ Paket',
      ships24: 'Versand in 24h',
      incVat: 'Inkl. MwSt.'
    },
    product: {
      notFound: 'Produkt nicht gefunden',
      back: 'Zurück zum Katalog',
      topRated: 'Top Bewertung',
      included: "Was ist enthalten:",
      specTitle: 'Produktspezifikation',
      spec1: 'Unsere Etiketten werden hochwertig gedruckt, damit QR-Codes auch langfristig lesbar bleiben.',
      spec2: 'Der Klebstoff ist speziell: Er hält fest, lässt sich aber rückstandsfrei entfernen.',
      paymentTitle: 'Zahlung & Erstattung',
      paymentDesc: 'Preise inkl. MwSt. Erstattung innerhalb von 30 Tagen für unbenutzte Pakete. Email qrsortable@gmail.com für Hilfe.',
      feedbackTitle: 'Feedback',
      feedbackSubtitle: 'Das sagen unsere Kunden.',
      writeReview: 'Bewertung schreiben',
      submitReview: 'Absenden'
    },
    cart: {
      title: 'Warenkorb',
      empty: 'Ihr Warenkorb ist leer.',
      startShopping: 'Einkaufen',
      total: 'Gesamt',
      checkoutNote: 'Versand & Steuern werden an der Kasse berechnet',
      secureCheckout: 'Zur Kasse'
    },
    checkout: {
      title: 'Kasse',
      subtitle: 'Sichere Zahlung für Ihre Bestellungen',
      currency: 'Währung',
      shipping: 'Versand',
      fullName: 'Vollständiger Name*',
      email: 'E-Mail-Adresse*',
      street: 'Straße & Hausnummer*',
      city: 'Stadt*',
      zip: 'PLZ*',
      country: 'Land*',
      pay: 'Bezahlen',
      cartItems: 'Warenkorb',
      paymentConfirmed: 'Zahlung bestätigt!',
      waitingPayment: 'Warte auf Zahlung',
      checkStatus: 'Zahlungsstatus prüfen',
      redirecting: 'Weiterleitung zur Erfolgsseite...',
      completePayment: 'Bitte schließen Sie die Zahlung im neuen Fenster ab.',
      selectCountry: 'Land auswählen',
      statusNotPaid: 'Der Zahlungsstatus konnte noch nicht bestätigt werden. Bitte stellen Sie sicher, dass Sie die Transaktion abgeschlossen haben.',
      statusError: 'Zahlungsstatus konnte nicht überprüft werden. Bitte versuchen Sie es erneut.'
    },
    countries: {
      'Germany': 'Deutschland',
      'United Kingdom': 'Vereinigtes Königreich',
      'Austria': 'Österreich',
      'Belgium': 'Belgien',
      'Bulgaria': 'Bulgarien',
      'Croatia': 'Kroatien',
      'Cyprus': 'Zypern',
      'Czech Republic': 'Tschechische Republik',
      'Denmark': 'Dänemark',
      'Estonia': 'Estland',
      'Finland': 'Finnland',
      'France': 'Frankreich',
      'Greece': 'Griechenland',
      'Hungary': 'Ungarn',
      'Ireland': 'Irland',
      'Italy': 'Italien',
      'Latvia': 'Lettland',
      'Lithuania': 'Litauen',
      'Luxembourg': 'Luxemburg',
      'Malta': 'Malta',
      'Netherlands': 'Niederlande',
      'Poland': 'Polen',
      'Portugal': 'Portugal',
      'Romania': 'Rumänien',
      'Slovakia': 'Slowakei',
      'Slovenia': 'Slowenien',
      'Spain': 'Spanien',
      'Sweden': 'Schweden',
      'Switzerland': 'Schweiz',
      'Norway': 'Norwegen',
      'United States': 'Vereinigte Staaten',
      'Canada': 'Kanada',
      'Australia': 'Australien',
      'Other': 'Andere'
    },
    footer: {
      slogan: 'Umzüge und Heimorganisation vereinfachen – ein Scan nach dem anderen.',
      company: 'Firma',
      about: 'Über Uns',
      privacy: 'Datenschutz',
      terms: 'AGB',
      cookies: 'Cookie-Einstellungen',
      payments: 'Zahlungen',
      rights: 'Alle Rechte vorbehalten.'
    },
    about: {
      heroTitle: 'Unsere Geschichte',
      heroSubtitle: 'Geboren aus einem Berg von Kartons und der Frustration: "Wo habe ich die Kaffeemaschine hingetan?"',
      innovationTitle: 'Innovation trifft Ordnung',
      innovationDesc1: 'Wir bei QrSortable glauben, dass sich Organisation nicht wie Arbeit anfühlen sollte. Seit 2026 ist es unsere Mission, Lagerung und Umzüge einfach und stressfrei zu machen.',
      innovationDesc2: 'Warum Kisten öffnen und Klebeband aufreißen, wenn man mit einem Scan hineinsehen kann? Unsere Etiketten sind für Menschen gebaut, die ihre Zeit schätzen.',
      statsUsers: 'Benutzer organisiert',
      statsLabels: 'Etiketten gescannt',
      valuesTitle: 'Unsere Grundwerte',
      values: {
        simplicity: { title: 'Einfachheit', desc: 'Wenn es nicht einfach ist, ist es nicht QrSortable. Wir bauen Werkzeuge für alle.' },
        quality: { title: 'Qualität', desc: 'Unsere Etiketten sind hochwertig und überstehen Dachböden und Umzüge.' },
        userFocused: { title: 'Nutzerorientiert', desc: 'Wir hören auf unsere Community. Jedes Update basiert auf Ihrem Feedback.' }
      }
    },
    privacy: {
      updated: 'Letztes Update: Januar 2026',
      section1: { title: 'Informationen, die wir sammeln', desc: 'Wir sammeln Informationen, die Sie uns direkt beim Kauf oder Kontakt geben. Dazu gehören Name, E-Mail und Versandadresse.' },
      section2: { title: 'How We Use It', desc: 'Your data is used solely to fulfill orders, improve our software experience, and (if you opt-in) notify you about major updates. We do not sell your data to third parties. Ever.' },
      section3: { title: 'GDPR & CCPA Compliance', desc: 'For our European and US users, we respect your rights to access, rectify, or delete your personal data. You can request data deletion at any time by contacting qrsortable@gmail.com.', list: ['Right to be forgotten', 'Data portability', 'Explicit consent for marketing'] },
      section4: { title: 'Cookies & Tracking', desc: 'Wir kategorisieren Cookies in Essenziell, Analyse und Marketing. Sie können Ihre Auswahl jederzeit ändern.' }
    },
    terms: {
      updated: 'Letztes Update: Januar 2026',
      intro: 'Durch die Nutzung unserer Website stimmen Sie diesen Bedingungen zu.',
      section1: { title: 'Produktnutzung', desc: 'QrSortable-Etiketten werden "wie besehen" bereitgestellt. Wir haften nicht für Schäden an gelagerten Gegenständen.' },
      section2: { title: 'Zahlungen & Erstattungen', desc: 'Um eine Erstattung zu beantragen, schreiben Sie an qrsortable@gmail.com. Erstattungen innerhalb von 30 Tagen für unbenutzte Pakete.' },
      section3: { title: 'Geistiges Eigentum', desc: 'Der Name "QrSortable" und das Logo sind Eigentum von QrSortable LLC.' },
      section4: { title: 'Geltendes Recht', desc: 'Diese Bedingungen unterliegen den Gesetzen der EU und der USA.' }
    },
    cookies: {
      banner: { title: 'Wir respektieren Ihre Privatsphäre', desc: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Ihre Entscheidungen helfen uns, einen sichereren Service anzubieten.', acceptAll: 'Alle akzeptieren', customize: 'Einstellungen', essentialOnly: 'Nur Essenzielle', save: 'Speichern' },
      manager: {
        essential: { title: 'Essenziell', desc: 'Erforderlich für die Funktionalität (Warenkorb, Sicherheit). Immer an.' },
        analytics: { title: 'Analyse', desc: 'Hilft uns zu verstehen, wie Sie unsere Seite nutzen.' },
        marketing: { title: 'Marketing', desc: 'Erlaubt uns, relevante Angebote anzuzeigen.' }
      }
    },
    success: {
      title: 'Erfolg!',
      message: 'Ihre Etiketten sind auf dem Weg.',
      backHome: 'Zurück zur Startseite'
    }
  },
  FR: {
    nav: { features: 'Fonctionnalités', howItWorks: 'Comment ça marche', shop: 'Boutique', language: 'Langue' },
    hero: {
      badge: 'Déménager mieux. Stocker sûr.',
      title1: 'Ne Jamais',
      title2: 'Se Demander',
      title3: "Ce qu'il y a dedans.",
      subtitle: 'Étiquettes QR intelligentes. Scannez avec notre application gratuite pour voir dans vos cartons.',
      cta: 'Obtenir des étiquettes',
      secondaryCta: 'Découvrir',
      app: 'App Gratuite',
      searchPlaceholder: 'Chercher ..',
      storageRoom: 'Débarras'
    },
    features: {
      title: 'Pourquoi QrSortable ?',
      subtitle: 'Arrêtez de fouiller dans les cartons. Organisez-vous en quelques secondes.',
      items: {
        preview: { title: "Aperçu instantané", desc: "Scannez l'étiquette et voyez la liste du contenu et les photos immédiatement." },
        moving: { title: "Mode Déménagement", desc: "Groupez les cartons par pièce. Imprimez une liste de colisage." },
        sharing: { title: "Partage Multi-utilisateurs", desc: "Partagez l'accès avec la famille ou les déménageurs." },
        generate: { title: "Générer des codes", desc: "Créez et imprimez des codes QR personnalisés instantanément." },
        lang: { title: "Support Multilingue", desc: "Accessible et facile pour les utilisateurs du monde entier." },
        security: { title: "Haute Sécurité", desc: "Vos données d'inventaire restent sûres et privées." },
        noAccount: { title: "Pas de compte requis", desc: "Téléchargez et commencez à organiser immédiatement." },
        support: { title: "Meilleur Support Client", desc: "Nous répondons en quelques heures pour résoudre vos défis." }
      }
    },
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: "Pas de configuration compliquée. Collez et scannez.",
      videoBtn: 'Voir la vidéo',
      step1: { title: 'Collez-le', desc: 'Placez l\'étiquette durable et codée par couleur sur votre boîte.' },
      step2: { title: 'Scannez-le', desc: 'Ouvrez l\'application et scannez. Ajoutez des objets et des photos.' },
      step3: { title: 'Trouvez-le', desc: "Scannez plus tard pour voir ce qu'il y a dedans sans ouvrir." },
      lifestyleTitle: 'Espace organisé',
      lifestyleDesc: 'Gérez vos biens en secondes'
    },
    shop: {
      title: 'Nos Produits',
      subtitle: 'Choisissez le bon pack pour vos besoins.',
      bestValue: 'Meilleure Valeur',
      customerFavorite: 'Favori des clients',
      addToCart: 'Ajouter au panier',
      viewDetails: 'Voir détails',
      reviews: 'avis',
      perPack: '/ pack',
      ships24: 'Expédié sous 24h',
      incVat: 'TVA incl.'
    },
    product: {
      notFound: 'Produit non trouvé',
      back: 'Retour au catalogue',
      topRated: 'Choix le mieux noté',
      included: "Ce qui est inclus :",
      specTitle: 'Spécification du produit',
      spec1: 'Nos étiquettes sont imprimées avec une haute qualité pour assurer la lisibilité des QR codes.',
      spec2: 'L\'adhésif est spécial : il tient fermement mais s\'enlève sans laisser de résidu.',
      paymentTitle: 'Paiements et Remboursements',
      paymentDesc: 'Prix TTC. Remboursement sous 30 jours pour les packs non utilisés. Email qrsortable@gmail.com pour aide.',
      feedbackTitle: 'Avis',
      feedbackSubtitle: 'Ce que disent nos clients.',
      writeReview: 'Laisser un avis',
      submitReview: 'Envoyer'
    },
    cart: {
      title: 'Votre Panier',
      empty: 'Votre panier est vide.',
      startShopping: 'Commencer',
      total: 'Total',
      checkoutNote: 'Frais de port et taxes calculés à la caisse',
      secureCheckout: 'Paiement Sécurisé'
    },
    checkout: {
      title: 'Caisse',
      subtitle: 'Paiement sécurisé pour vos commandes',
      currency: 'Devise',
      shipping: 'Livraison',
      fullName: 'Nom Complet*',
      email: 'Adresse E-mail*',
      street: 'Rue & Numéro*',
      city: 'Ville*',
      zip: 'Code Postal*',
      country: 'Pays*',
      pay: 'Payer',
      cartItems: 'Articles',
      paymentConfirmed: 'Paiement Confirmé !',
      waitingPayment: 'Attente du paiement',
      checkStatus: 'Vérifier le statut du paiement',
      redirecting: 'Redirection...',
      completePayment: 'Veuillez compléter votre paiement dans la nouvelle fenêtre.',
      selectCountry: 'Sélectionner le pays',
      statusNotPaid: "Le statut du paiement n'a pas encore pu être confirmé. Veuillez vous assurer d'avoir terminé la transaction.",
      statusError: "Impossible de vérifier le statut du paiement. Veuillez réessayer."
    },
    countries: {
      'Germany': 'Allemagne',
      'United Kingdom': 'Royaume-Uni',
      'Austria': 'Autriche',
      'Belgium': 'Belgique',
      'Bulgaria': 'Bulgarie',
      'Croatia': 'Croatie',
      'Cyprus': 'Chypre',
      'Czech Republic': 'République tchèque',
      'Denmark': 'Danemark',
      'Estonia': 'Estonie',
      'Finland': 'Finlande',
      'France': 'France',
      'Greece': 'Grèce',
      'Hungary': 'Hongrie',
      'Ireland': 'Irlande',
      'Italy': 'Italie',
      'Latvia': 'Lettonie',
      'Lithuania': 'Lituanie',
      'Luxembourg': 'Luxembourg',
      'Malta': 'Malte',
      'Netherlands': 'Pays-Bas',
      'Poland': 'Pologne',
      'Portugal': 'Portugal',
      'Romania': 'Roumanie',
      'Slovakia': 'Slovaquie',
      'Slovenia': 'Slovénie',
      'Spain': 'Espagne',
      'Sweden': 'Suède',
      'Switzerland': 'Suisse',
      'Norway': 'Norvège',
      'United States': 'États-Unis',
      'Canada': 'Canada',
      'Australia': 'Australie',
      'Other': 'Autre'
    },
    footer: {
      slogan: 'Simplifier les déménagements et l\'organisation de la maison.',
      company: 'Entreprise',
      about: 'À propos',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      cookies: 'Cookies',
      payments: 'Paiements',
      rights: 'Tous droits réservés.'
    },
    about: {
      heroTitle: 'Notre Histoire',
      heroSubtitle: 'Né d\'une montagne de cartons et de la frustration : "Où ai-je mis la cafetière ?"',
      innovationTitle: 'Innovation et Ordre',
      innovationDesc1: 'Chez QrSortable, nous croyons que l\'organisation ne devrait pas être une corvée. Notre mission est de rendre le stockage simple et sans stress.',
      innovationDesc2: 'Pourquoi ouvrir un carton quand on peut voir à l\'intérieur avec un scan ? Nos étiquettes sont conçues pour vous faire gagner du temps.',
      statsUsers: 'Utilisateurs organisés',
      statsLabels: 'Étiquettes scannées',
      valuesTitle: 'Nos Valeurs',
      values: {
        simplicity: { title: 'Simplicité', desc: 'Si ce n\'est pas simple, ce n\'est pas QrSortable. Des outils pour tous.' },
        quality: { title: 'Qualité', desc: 'Nos étiquettes sont durables et résistent aux déménagements.' },
        userFocused: { title: 'Centré Utilisateur', desc: 'Nous écoutons notre communauté. Chaque mise à jour vient de vos retours.' }
      }
    },
    privacy: {
      updated: 'Dernière mise à jour : Janvier 2026',
      section1: { title: 'Informations collectées', desc: 'Nous collectons les infos que vous fournissez directement : nom, email, adresse de livraison.' },
      section2: { title: 'Usage', desc: 'Vos données servent uniquement à traiter les commandes et améliorer le service. Nous ne vendons jamais vos données.' },
      section3: { title: 'Conformité RGPD', desc: 'Vous avez un droit d\'accès et de suppression de vos données. Contactez qrsortable@gmail.com.', list: ['Droit à l\'oubli', 'Portabilité des données', 'Consentement explicite'] },
      section4: { title: 'Cookies', desc: 'Nous utilisons des cookies essentiels, analytiques et marketing. Vous pouvez modifier vos choix.' }
    },
    terms: {
      updated: 'Dernière mise à jour : Janvier 2026',
      intro: 'En utilisant notre site, vous acceptez ces conditions.',
      section1: { title: 'Utilisation du produit', desc: 'Les étiquettes sont fournies "telles quelles". Nous ne sommes pas responsables des dommages aux objets stockés.' },
      section2: { title: 'Paiements & Remboursements', desc: 'Remboursement sous 30 jours pour les packs non utilisés. Contact : qrsortable@gmail.com.' },
      section3: { title: 'Propriété Intellectuelle', desc: 'Le nom et le logo "QrSortable" sont la propriété exclusive de QrSortable LLC.' },
      section4: { title: 'Loi Applicable', desc: 'Ces conditions sont régies par les lois de l\'UE et des États-Unis.' }
    },
    cookies: {
      banner: { title: 'Nous respectons votre vie privée', desc: 'Nous utilisons des cookies pour améliorer votre expérience. Vos choix nous aident à fournir un service plus sûr.', acceptAll: 'Accepter tout', customize: 'Personnaliser', essentialOnly: 'Essentiels seulement', save: 'Enregistrer' },
      manager: {
        essential: { title: 'Essentiel', desc: 'Requis pour le fonctionnement (Panier, Sécurité).' },
        analytics: { title: 'Analytique', desc: 'Nous aide à comprendre l\'utilisation du site.' },
        marketing: { title: 'Marketing', desc: 'Permet d\'afficher des offres pertinentes.' }
      }
    },
    success: {
      title: 'Succès !',
      message: 'Vos étiquettes sont en route.',
      backHome: 'Retour à l\'accueil'
    }
  },
  ES: {
    nav: { features: 'Características', howItWorks: 'Cómo funciona', shop: 'Tienda', language: 'Idioma' },
    hero: {
      badge: 'Múdate Mejor. Almacena Seguro.',
      title1: 'Nunca Más',
      title2: 'Te Preguntes',
      title3: 'Qué hay dentro.',
      subtitle: 'Etiquetas QR inteligentes. Escanea con nuestra app gratis para ver dentro de tus cajas.',
      cta: 'Obtener Etiquetas',
      secondaryCta: 'Cómo funciona',
      app: 'App Gratis',
      searchPlaceholder: 'Buscar ..',
      storageRoom: 'Trastero'
    },
    features: {
      title: '¿Por qué QrSortable?',
      subtitle: 'Deja de buscar entre montañas de cartón. Organízate en segundos.',
      items: {
        preview: { title: "Vista Previa", desc: "Escanea la etiqueta y ve el contenido y fotos inmediatamente." },
        moving: { title: "Modo Mudanza", desc: "Agrupa cajas por habitación. Imprime una lista maestra." },
        sharing: { title: "Multiusuario", desc: "Comparte el acceso con familia o mudanzas." },
        generate: { title: "Generar Códigos", desc: "Crea e imprime códigos QR personalizados al instante." },
        lang: { title: "Soporte Multilingüe", desc: "Accesible y fácil para usuarios de todo el mundo." },
        security: { title: "Alta Seguridad", desc: "Tus datos de inventario permanecen seguros y privados." },
        noAccount: { title: "Sin Cuenta", desc: "Descarga y comienza a organizar inmediatamente." },
        support: { title: "Mejor Soporte", desc: "Respondemos en horas para resolver tus dudas." }
      }
    },
    howItWorks: {
      title: 'Cómo funciona',
      subtitle: 'Sin configuración complicada. Solo pega y escanea.',
      videoBtn: 'Ver Video',
      step1: { title: 'Pégalo', desc: 'Coloca la etiqueta duradera y codificada por colores en tu caja.' },
      step2: { title: 'Escanéalo', desc: 'Abre la app y escanea. Añade artículos y fotos.' },
      step3: { title: 'Encuéntralo', desc: 'Escanea luego para ver qué hay dentro sin abrir la cinta.' },
      lifestyleTitle: 'Espacio Organizado',
      lifestyleDesc: 'Gestiona activos en segundos'
    },
    shop: {
      title: 'Nuestros Productos',
      subtitle: 'Elige el pack adecuado para ti.',
      bestValue: 'Mejor Valor',
      customerFavorite: 'Favorito',
      addToCart: 'Añadir al Carrito',
      viewDetails: 'Ver Detalles',
      reviews: 'reseñas',
      perPack: '/ pack',
      ships24: 'Envío en 24h',
      incVat: 'IVA incl.'
    },
    product: {
      notFound: 'Producto no encontrado',
      back: 'Volver al Catálogo',
      topRated: 'Mejor Valorado',
      included: "Qué incluye:",
      specTitle: 'Especificaciones',
      spec1: 'Nuestras etiquetas se imprimen con alta calidad para asegurar que los códigos QR sean legibles.',
      spec2: 'El adhesivo es especial: se pega firmemente pero se puede quitar sin dejar residuos.',
      paymentTitle: 'Pagos y Reembolsos',
      paymentDesc: 'Precios con IVA. Reembolso en 30 días para paquetes no usados. Email qrsortable@gmail.com para ayuda.',
      feedbackTitle: 'Reseñas',
      feedbackSubtitle: 'Lo que dicen nuestros clientes.',
      writeReview: 'Escribir Reseña',
      submitReview: 'Enviar'
    },
    cart: {
      title: 'Tu Carrito',
      empty: 'Tu carrito está vacío.',
      startShopping: 'Empezar a Comprar',
      total: 'Total',
      checkoutNote: 'Envío e impuestos calculados al pagar',
      secureCheckout: 'Pago Seguro'
    },
    checkout: {
      title: 'Pago',
      subtitle: 'Pago seguro para tus pedidos',
      currency: 'Moneda',
      shipping: 'Envío',
      fullName: 'Nombre Completo*',
      email: 'Correo Electrónico*',
      street: 'Calle y Número*',
      city: 'Ciudad*',
      zip: 'C. Postal*',
      country: 'País*',
      pay: 'Pagar',
      cartItems: 'Artículos',
      paymentConfirmed: '¡Pago Confirmado!',
      waitingPayment: 'Esperando Pago',
      checkStatus: 'Comprobar estado del pago',
      redirecting: 'Redirigiendo...',
      completePayment: 'Por favor completa el pago en la nueva ventana.',
      selectCountry: 'Seleccionar país',
      statusNotPaid: "Aún no se ha podido confirmar el estado del pago. Asegúrese de haber finalizado la transacción.",
      statusError: "No se pudo verificar el estado del pago. Inténtelo de nuevo."
    },
    countries: {
      'Germany': 'Alemania',
      'United Kingdom': 'Reino Unido',
      'Austria': 'Austria',
      'Belgium': 'Bélgica',
      'Bulgaria': 'Bulgaria',
      'Croatia': 'Croacia',
      'Cyprus': 'Chipre',
      'Czech Republic': 'República Checa',
      'Denmark': 'Dinamarca',
      'Estonia': 'Estonia',
      'Finland': 'Finland',
      'France': 'Francia',
      'Greece': 'Grecia',
      'Hungary': 'Hungría',
      'Ireland': 'Irlanda',
      'Italy': 'Italia',
      'Latvia': 'Letonia',
      'Lithuania': 'Lituania',
      'Luxembourg': 'Luxemburgo',
      'Malta': 'Malta',
      'Netherlands': 'Países Bajos',
      'Poland': 'Polonia',
      'Portugal': 'Portugal',
      'Romania': 'Rumanía',
      'Slovakia': 'Eslovaquia',
      'Slovenia': 'Eslovenia',
      'Spain': 'España',
      'Sweden': 'Suecia',
      'Switzerland': 'Suiza',
      'Norway': 'Noruega',
      'United States': 'Estados Unidos',
      'Canada': 'Canadá',
      'Australia': 'Australia',
      'Other': 'Otro'
    },
    footer: {
      slogan: 'Simplificando mudanzas y organización del hogar, un escaneo a la vez.',
      company: 'Empresa',
      about: 'Sobre Nosotros',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies',
      payments: 'Pagos',
      rights: 'Todos los derechos reservados.'
    },
    about: {
      heroTitle: 'Nuestra Historia',
      heroSubtitle: 'Nacido de una montaña de cajas de cartón y la frustración de "¿Dónde puse la cafetera?"',
      innovationTitle: 'Innovación y Orden',
      innovationDesc1: 'En QrSortable, creemos que la organización no debe sentirse como trabajo. Desde 2026, nuestra misión es hacer que el almacenamiento y las mudanzas sean claros y sin estrés.',
      innovationDesc2: '¿Por qué abrir una caja cuando puedes ver dentro con un escaneo? Nuestras etiquetas están hechas para quienes valoran su tiempo.',
      statsUsers: 'Usuarios Organizados',
      statsLabels: 'Etiquetas Escaneadas',
      valuesTitle: 'Nuestros Valores',
      values: {
        simplicity: { title: 'Simplicidad', desc: 'Si no es fácil, no es QrSortable. Creamos herramientas para todos.' },
        quality: { title: 'Qualidad', desc: 'Nuestras etiquetas son de alta calidad y sobreviven a áticos y mudanzas.' },
        userFocused: { title: 'Usuario', desc: 'Escuchamos a nuestra comunidad. Cada actualización se basa en tus comentarios.' }
      }
    },
    privacy: {
      updated: 'Última actualización: Enero 2026',
      section1: { title: 'Información que Recopilamos', desc: 'Recopilamos información que nos proporcionas directamente: nombre, correo electrónico, dirección de envío.' },
      section2: { title: 'Cómo la Usamos', desc: 'Tus datos se usan solo para procesar pedidos y mejorar el servicio. Nunca vendemos tus datos.' },
      section3: { title: 'Cumplimiento GDPR y CCPA', desc: 'Respetamos tus derechos de acceso y eliminación de datos. Contáctanos en qrsortable@gmail.com.', list: ['Derecho al olvido', 'Portabilidad de datos', 'Consentimiento explícito'] },
      section4: { title: 'Cookies y Rastreo', desc: 'Usamos cookies esenciales, analíticas y de marketing. Puedes cambiar tus opciones en cualquier momento.' }
    },
    terms: {
      updated: 'Última actualización: Enero 2026',
      intro: 'Al usar nuestro sitio, aceptas estos términos.',
      section1: { title: 'Uso del Producto', desc: 'Las etiquetas QrSortable se proporcionan "tal cual". No somos responsables de daños a los artículos almacenados.' },
      section2: { title: 'Pagos y Reembolsos', desc: 'Reembolsos en 30 días para paquetes no usados. Contacto: qrsortable@gmail.com.' },
      section3: { title: 'Propiedad Intelectual', desc: 'El nombre y el logotipo de "QrSortable" son propiedad exclusiva de QrSortable LLC.' },
      section4: { title: 'Ley Aplicable', desc: 'Estos términos se rigen por las leyes de la UE y los Estados Unidos.' }
    },
    cookies: {
      banner: { title: 'Respetamos tu privacidad', desc: 'Usamos cookies para mejorar tu experiencia. Tus elecciones nos ayudan a ofrecer un servicio más seguro.', acceptAll: 'Aceptar Todo', customize: 'Personalizar', essentialOnly: 'Solo Esenciales', save: 'Guardar' },
      manager: {
        essential: { title: 'Esencial', desc: 'Requerido para la funcionalidad (Carrito, Seguridad).' },
        analytics: { title: 'Analítica', desc: 'Nos ayuda a entender cómo usas el sitio.' },
        marketing: { title: 'Marketing', desc: 'Permite mostrar ofertas relevantes.' }
      }
    },
    success: {
      title: '¡Éxito!',
      message: 'Tus etiquetas están en camino.',
      backHome: 'Volver al Inicio'
    }
  }
};

const PRODUCT_TRANSLATIONS: any = {
  'starter-pack': {
    EN: { 
      name: 'Standard Pack (48 Barcode Labels)', 
      description: 'Keep home, storage, or moving items organized with ease. Each label features a barcode for quick identification.',
      features: ['48 Unique Barcodes', 'black color coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV)','Multi-user Sharing(required subscription)']
    },
    DE: { 
      name: 'Standardpaket (48 Barcode-Etiketten)', 
      description: 'Halten Sie Haus-, Lager- oder Umzugsgegenstände einfach organisiert. Jedes Etikett verfügt über einen Barcode.',
      features: ['48 Einzigartige Barcodes', 'Schwarz farbcodiert', 'Priorisierter Support', 'Kostenloser App-Zugriff', 'Hochsicheres System', 'Bestands-Export (PDF/CSV)', 'Mehrbenutzer-Freigabe (Abo erforderlich)']
    },
    FR: { 
      name: 'Pack Standard (48 Étiquettes Code-barres)', 
      description: 'Organisez facilement votre maison ou déménagement. Chaque étiquette dispose d\'un code-barres.',
      features: ['48 Codes-barres uniques', 'Code couleur noir', 'Support prioritaire', 'Accès gratuit à l\'application', 'Système hautement sécurisé', 'Export d\'inventaire (PDF/CSV)', 'Partage multi-utilisateurs (abonnement requis)']
    },
    ES: { 
      name: 'Pack Estándar (48 Etiquetas de Barras)', 
      description: 'Mantén organizados los artículos de hogar o mudanza. Cada etiqueta tiene un código de barras.',
      features: ['48 Códigos de barras únicos', 'Código de color negro', 'Soporte prioritario', 'Acceso gratuito a la App', 'Sistema altamente seguro', 'Exportación de inventario (PDF/CSV)', 'Uso compartido multiusuario (requiere suscripción)']
    }
  },
  'pro-pack': {
    EN: { 
      name: 'Standard Pack (48 QR Labels)', 
      description: 'A multi-purpose organization kit for home, storage, or moving. QR color-coded for quick identification.',
      features: ['48 Unique QR Codes', 'Black, blue, yellow, pink color-coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV)','Multi-user Sharing(required subscription)']
    },
    DE: { 
      name: 'Standardpaket (48 QR-Etiketten)', 
      description: 'Ein Mehrzweck-Organisationskit. QR-farbcodiert für schnelle Identifizierung.',
      features: ['48 Einzigartige QR-Codes', 'Schwarz, Blau, Gelb, Pink farbcodiert', 'Priorisierter Support', 'Kostenloser App-Zugriff', 'Hochsicheres System', 'Bestands-Export (PDF/CSV)', 'Mehrbenutzer-Freigabe (Abo erforderlich)']
    },
    FR: { 
      name: 'Pack Standard (48 Étiquettes QR)', 
      description: 'Un kit d\'organisation polyvalent. QR codé par couleur pour une identification rapide.',
      features: ['48 QR Codes uniques', 'Codé couleur (Noir, Bleu, Jaune, Rose)', 'Support prioritaire', 'Accès gratuit à l\'application', 'Système hautement sécurisé', 'Export d\'inventaire (PDF/CSV)', 'Partage multi-utilisateurs (abonnement requis)']
    },
    ES: { 
      name: 'Pack Estándar (48 Etiquetas QR)', 
      description: 'Un kit de organización multiuso. QR codificado por colores para identificación rápida.',
      features: ['48 Códigos QR únicos', 'Colores: Negro, Azul, Amarillo, Rosa', 'Soporte prioritario', 'Acceso gratuito a la App', 'Sistema altamente seguro', 'Exportación de inventario (PDF/CSV)', 'Uso compartido multiusuario (requiere suscripción)']
    }
  },
  'business-pack': {
    EN: { 
      name: 'Large Pack (100 QR Labels)', 
      description: 'Ideal for small businesses, large estates, or professional organizers. Keep track of high-volume inventory.',
      features: ['100 Heavy Duty Labels', 'black color coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV)','Multi-user Sharing(required subscription)', 'Custom Branding']
    },
    DE: { 
      name: 'Großes Paket (100 QR-Etiketten)', 
      description: 'Ideal für kleine Unternehmen oder professionelle Organisatoren. Behalten Sie den Überblick über große Bestände.',
      features: ['100 Hochleistungsetiketten', 'Schwarz farbcodiert', 'Priorisierter Support', 'Kostenloser App-Zugriff', 'Hochsicheres System', 'Bestands-Export (PDF/CSV)', 'Mehrbenutzer-Freigabe (Abo erforderlich)', 'Individuelles Branding']
    },
    FR: { 
      name: 'Grand Pack (100 Étiquettes QR)', 
      description: 'Idéal pour les petites entreprises ou les organisateurs professionnels. Suivez un inventaire volumineux.',
      features: ['100 Étiquettes ultra-résistantes', 'Code couleur noir', 'Support prioritaire', 'Accès gratuit à l\'application', 'Système hautement sécurisé', 'Export d\'inventaire (PDF/CSV)', 'Partage multi-utilisateurs (abonnement requis)', 'Marquage personnalisé']
    },
    ES: { 
      name: 'Pack Grande (100 Etiquetas QR)', 
      description: 'Ideal para pequeñas empresas u organizadores profesionales. Controla inventarios de gran volumen.',
      features: ['100 Etiquetas resistentes', 'Código de color negro', 'Soporte prioritario', 'Acceso gratuito a la App', 'Sistema altamente seguro', 'Exportación de inventario (PDF/CSV)', 'Uso compartido multiusuario (requiere suscripción)', 'Marca personalizada']
    }
  }
};

// --- MOCK DATA ---
const PRODUCTS: Product[] = [
  {
    id: 'starter-pack',
    name: 'Standard Pack (48 Barcode Labels)',
    price: 14.99,
    description: 'Keep home, storage, or moving items organized with ease.',
    features: ['48 Unique Barcodes', 'black color coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV)','Multi-user Sharing(required subscription)'],
    image: 'https://lh3.googleusercontent.com/d/15PXsmikKti6F-BT7tfpcVlx7bqA0qfnE',
    images: ['https://lh3.googleusercontent.com/d/15PXsmikKti6F-BT7tfpcVlx7bqA0qfnE','https://lh3.googleusercontent.com/d/16k7O1XvBlpc_UJT3cwZqD9Wy1umAAKTC','https://lh3.googleusercontent.com/d/1qh6cVGZrmLDsxqfCx6cDcT4sjbKoUbWd'],
    video: 'mqwem7Pyttg',
    reviews: [] 
  },
  {
    id: 'pro-pack',
    name: 'Standard Pack (48 QR Labels)',
    price: 29.99,
    description: 'A multi-purpose organization kit for home, storage, or moving.',
    features: ['48 Unique QR Codes', 'Black, blue, yellow, pink color-coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV)','Multi-user Sharing(required subscription)'],
    image: 'https://lh3.googleusercontent.com/d/1KMkk7zFMkMXXF40zllqPNOZASgT39GRd',
    images: ['https://lh3.googleusercontent.com/d/1KMkk7zFMkMXXF40zllqPNOZASgT39GRd','https://lh3.googleusercontent.com/d/1KcXcueso79ZggaU56NJhBGVKBHIsaEq-','https://lh3.googleusercontent.com/d/1NfFbTgcWGdzgcyb_fc0IExdDXzyLzvSF'],
    isPopular: true,
    video: 'mqwem7Pyttg',
    reviews: []
  },
  {
    id: 'business-pack',
    name: 'Large Pack (100 QR Labels)',
    price: 49.99,
    description: 'Ideal for small businesses, large estates, or professional organizers.',
    features: ['100 Heavy Duty Labels', 'black color coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV)','Multi-user Sharing(required subscription)', 'Custom Branding'],
    image: 'https://lh3.googleusercontent.com/d/12dbFsmeQOr3HmTM4CZB375zZv2JxXVSW',
    images: ['https://lh3.googleusercontent.com/d/12dbFsmeQOr3HmTM4CZB375zZv2JxXVSW','https://lh3.googleusercontent.com/d/1K-MbpiZx5TxdTk8ikWI-WSNe6DnG4SQY','https://lh3.googleusercontent.com/d/1BO2haOVqWQKpEwulBThN2emXMmtBq-qU'],
    video: 'mqwem7Pyttg',
    reviews: []
  }
];

// --- CONTEXTS ---
const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
  t: (section: string, key?: string) => any;
}>({
  language: 'EN',
  setLanguage: () => {},
  t: () => ''
});

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const t = (section: string, key?: string) => {
    // Safety check for language and section
    if (!TRANSLATIONS[language] || !TRANSLATIONS[language][section]) {
       console.warn(`Missing translation section: ${language}.${section}`);
       // Fallback to English if section is missing in current language, or return key
       if (TRANSLATIONS['EN'] && TRANSLATIONS['EN'][section]) {
           const keys = key ? key.split('.') : [];
           let value = TRANSLATIONS['EN'][section];
           for (const k of keys) {
               if (value === undefined || value === null) return key;
               value = value[k];
           }
           return value !== undefined ? value : key;
       }
       return key || section;
    }

    if (!key) return TRANSLATIONS[language][section];
    
    // Support nested keys like 'items.preview.title'
    const keys = key.split('.');
    let value = TRANSLATIONS[language][section];
    
    for (const k of keys) {
      if (value === undefined || value === null) return key;
      value = value[k];
    }
    
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useTranslation = () => useContext(LanguageContext);

const CartContext = createContext<CartContextType | undefined>(undefined);

interface FeedbackContextType {
  allReviews: any[];
  isLoading: boolean;
  refreshFeedback: () => Promise<void>;
  addLocalReview: (review: Review, productName: string) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allReviews, setAllReviews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(FEEDBACK_API_URL);
      const data = await response.json();
      setAllReviews(data || []);
    } catch (error) {
      console.error('Failed to load feedback:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const addLocalReview = (review: Review, productName: string) => {
    const apiStyleReview = {
      name: review.author,
      product: productName,
      rating: review.rating,
      comment: review.comment,
      date: review.date,
      id: review.id
    };
    setAllReviews(prev => [apiStyleReview, ...prev]);
  };

  return (
    <FeedbackContext.Provider value={{ allReviews, isLoading, refreshFeedback: fetchReviews, addLocalReview }}>
      {children}
    </FeedbackContext.Provider>
  );
};

const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error('useFeedback must be used within a FeedbackProvider');
  return context;
};

const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US');

const randomDateWithToday = () => {
  // 25% chance to be today
  if (Math.random() < 0.25) {
    return new Date();
  }

  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);

  const end = new Date();

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const useProductFeedback = (productName: string) => {
  const { allReviews, isLoading } = useFeedback();

  const reviews = useMemo(() => {
    return allReviews
      .filter(r => r.product === productName)
      .map(r => ({
        id: r.id || Math.random().toString(36).substr(2, 9),
        author: r.name,
        rating: Number(r.rating),
        comment: r.comment,
        date: r.date
          ? new Date(r.date).toLocaleDateString('en-US')
          : formatDate(randomDateWithToday()),
      }));
  }, [allReviews, productName]);

  const avgRating = useMemo(
    () => calculateAverageRating(reviews),
    [reviews]
  );

  return { reviews, avgRating, isLoading };
};

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  consented: boolean;
}

const CookieContext = createContext<{
  cookies: CookieSettings;
  updateCookies: (newSettings: Partial<CookieSettings>) => void;
  showManager: boolean;
  setShowManager: (show: boolean) => void;
} | undefined>(undefined);

const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookies, setCookies] = useState<CookieSettings>(() => {
    const saved = localStorage.getItem('qr_cookie_consent');
    return saved ? JSON.parse(saved) : { essential: true, analytics: false, marketing: false, consented: false };
  });
  const [showManager, setShowManager] = useState(false);

  const updateCookies = (newSettings: Partial<CookieSettings>) => {
    const updated = { ...cookies, ...newSettings, consented: true };
    setCookies(updated);
    localStorage.setItem('qr_cookie_consent', JSON.stringify(updated));
  };

  return (
    <CookieContext.Provider value={{ cookies, updateCookies, showManager, setShowManager }}>
      {children}
    </CookieContext.Provider>
  );
};

const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) throw new Error('useCookies must be used within a CookieProvider');
  return context;
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const clearCart = () => setCart([]);

  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, isCartOpen, addToCart, removeFromCart, updateQuantity, toggleCart, cartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

// --- COMPONENTS ---

const CookieConsentBanner: React.FC = () => {
  const { cookies, updateCookies, showManager, setShowManager } = useCookies();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const { t } = useTranslation();

  if (cookies.consented && !showManager) return null;

  const handleAcceptAll = () => {
    updateCookies({ analytics: true, marketing: true });
    setShowManager(false);
  };

  const handleAcceptEssential = () => {
    updateCookies({ analytics: false, marketing: false });
    setShowManager(false);
  };

  return (
    <div className={`fixed bottom-0 inset-x-0 z-[100] p-4 md:p-8 animate-in slide-in-from-bottom-full duration-500 ${isAnimatingOut ? 'animate-out fade-out slide-out-to-bottom-full' : ''}`}>
      <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 p-8 md:p-12 overflow-hidden relative">
        <BackgroundDots scale={0.5} />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="bg-[#FDB623] p-5 rounded-3xl text-black flex-shrink-0 shadow-lg">
            <ShieldCheck className="h-10 w-10" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-black mb-4">{t('cookies', 'banner.title')}</h2>
            <p className="text-xl text-gray-400 font-bold leading-relaxed mb-8">
              {t('cookies', 'banner.desc')}
            </p>
            
            {showManager ? (
              <div className="space-y-6 mb-8">
                {[
                  { key: 'essential', title: t('cookies', 'manager.essential.title'), desc: t('cookies', 'manager.essential.desc'), disabled: true },
                  { key: 'analytics', title: t('cookies', 'manager.analytics.title'), desc: t('cookies', 'manager.analytics.desc'), disabled: false },
                  { key: 'marketing', title: t('cookies', 'manager.marketing.title'), desc: t('cookies', 'manager.marketing.desc'), disabled: false }
                ].map((cat) => (
                  <div key={cat.key} className="flex items-center justify-between bg-white/5 p-5 rounded-2xl border border-white/5">
                    <div>
                      <h4 className="font-black text-lg">{cat.title}</h4>
                      <p className="text-sm text-gray-500">{cat.desc}</p>
                    </div>
                    <button 
                      onClick={() => !cat.disabled && updateCookies({ [cat.key]: !cookies[cat.key as keyof CookieSettings] })}
                      className={`w-14 h-8 rounded-full relative transition-colors ${cookies[cat.key as keyof CookieSettings] ? 'bg-[#FDB623]' : 'bg-gray-700'} ${cat.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${cookies[cat.key as keyof CookieSettings] ? 'left-7' : 'left-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-6">
              {showManager ? (
                <button 
                  onClick={() => { updateCookies({}); setShowManager(false); }}
                  className="bg-white text-black px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-200 transition-all flex-1"
                >
                  {t('cookies', 'banner.save')}
                </button>
              ) : (
                <>
                  <button 
                    onClick={handleAcceptAll}
                    className="bg-[#FDB623] text-black px-8 py-4 rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all shadow-xl flex-1"
                  >
                    {t('cookies', 'banner.acceptAll')}
                  </button>
                  <button 
                    onClick={() => setShowManager(true)}
                    className="bg-white/10 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-white/20 transition-all border border-white/10 flex-1"
                  >
                    {t('cookies', 'banner.customize')}
                  </button>
                  <button 
                    onClick={handleAcceptEssential}
                    className="text-gray-500 font-bold hover:text-white px-4 py-4 transition-colors"
                  >
                    {t('cookies', 'banner.essentialOnly')}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarRating: React.FC<{ rating: number, size?: number, showLabel?: boolean, count?: number }> = ({ rating, size = 20, showLabel = false, count }) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={size} 
            className={`${star <= Math.round(rating) ? 'text-[#FDB623] fill-current' : 'text-gray-200'}`} 
          />
        ))}
      </div>
      {showLabel && (
        <span className="ml-2 text-lg font-black text-gray-900">
          {rating > 0 ? rating : 'New'}
          {count !== undefined && <span className="text-gray-400 font-bold ml-1">({count})</span>}
        </span>
      )}
    </div>
  );
};

const BrandLogo: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="black" />
    <path d="M10 30V15C10 12.2386 12.2386 10 15 10H30" stroke="#FDB623" strokeWidth="6" strokeLinecap="round"/>
    <path d="M70 10H85C87.7614 10 90 12.2386 90 15V30" stroke="#FDB623" strokeWidth="6" strokeLinecap="round"/>
    <path d="M90 70V85C90 87.7614 87.7614 90 85 90H70" stroke="#FDB623" strokeWidth="6" strokeLinecap="round"/>
    <path d="M30 90H15C12.2386 90 10 87.7614 10 85V70" stroke="#FDB623" strokeWidth="6" strokeLinecap="round"/>
    <rect x="22" y="22" width="22" height="22" fill="white" />
    <circle cx="33" cy="33" r="5" fill="#FDB623" />
    <rect x="56" y="22" width="22" height="22" fill="white" />
    <rect x="10" y="48" width="80" height="4" fill="#FDB623" rx="2" />
    <rect x="22" y="58" width="4" height="20" fill="white" />
    <rect x="28" y="58" width="8" height="20" fill="white" />
    <rect x="38" y="58" width="2" height="20" fill="white" />
    <rect x="42" y="58" width="6" height="20" fill="white" />
    <rect x="50" y="58" width="3" height="20" fill="white" />
    <rect x="55" y="58" width="7" height="20" fill="white" />
    <rect x="64" y="58" width="4" height="20" fill="white" />
    <rect x="70" y="58" width="8" height="20" fill="white" />
  </svg>
);

const BackgroundDots: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  const dots = useMemo(() => {
    return Array.from({ length: 250 }).map((_, i) => ({
      id: i,
      size: (Math.random() * 2 + 1) * scale,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.4 + 0.1
    }));
  }, [scale]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map(dot => (
        <div 
          key={dot.id}
          className="floating-dot"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            opacity: dot.opacity,
            '--duration': `${dot.duration}s`,
            animationDelay: `${dot.delay}s`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  const { toggleCart, cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: t('nav', 'features'), href: '#features' },
    { name: t('nav', 'howItWorks'), href: '#how-it-works' },
    { name: t('nav', 'shop'), href: '#products' },
  ];

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-white/5 shadow-2xl relative">
      <BackgroundDots />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="mr-3 shadow-lg hover:scale-105 transition-transform duration-300">
              <BrandLogo size={56} />
            </div>
            <span className="text-4xl font-bold text-[#FDB623] tracking-tighter">QrSortable</span>
          </div>
          
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-[#FDB623] transition-colors font-bold text-2xl"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {/* Language Switcher - Desktop */}
            <div className="hidden md:block relative group">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-[#FDB623] transition-colors font-bold text-lg border border-white/10 rounded-xl px-3 py-2 hover:bg-white/5">
                <Globe className="h-5 w-5" />
                <span>{language}</span>
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl overflow-hidden hidden group-hover:block animate-in fade-in slide-in-from-top-2 z-50">
                 {LANGUAGES.map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => setLanguage(lang.code)}
                     className="w-full text-left px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-[#FDB623] font-bold flex items-center justify-between"
                   >
                     <span>{lang.label}</span>
                     <span>{lang.flag}</span>
                   </button>
                 ))}
              </div>
            </div>

            <button onClick={toggleCart} className="relative p-2 text-gray-300 hover:text-[#FDB623] transition-colors">
              <ShoppingCart className="h-10 w-10" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-3 py-1.5 text-sm font-black leading-none text-black transform translate-x-1/4 -translate-y-1/4 bg-[#FDB623] rounded-full shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-300">
                {isMobileMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-white/5 relative z-10">
          <div className="px-4 pt-4 pb-6 space-y-3">
             {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-2xl font-bold text-gray-300 hover:text-[#FDB623] hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </button>
            ))}
            <div className="border-t border-white/10 pt-4 mt-4">
              <p className="px-4 text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">{t('nav', 'language')}</p>
              <div className="grid grid-cols-2 gap-2 px-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }}
                    className={`px-4 py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all ${language === lang.code ? 'bg-[#FDB623] text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- PAGES ---

const FeedbackSection: React.FC<{ product: Product }> = ({ product }) => {
  const { reviews, avgRating, isLoading } = useProductFeedback(product.name);
  const { addLocalReview } = useFeedback();
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', email: '', rating: 5, comment: '' });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mountTime] = useState(Date.now());
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (honeypot) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsFormOpen(false);
      }, 1000);
      setIsSending(false);
      return;
    }

    if (Date.now() - mountTime < 2000) {
      setIsSending(false);
      return;
    }

    if (!checkRateLimit('feedback_rate_limit', 3, 60000)) {
      alert("You are submitting feedback too frequently. Please wait a minute.");
      setIsSending(false);
      return;
    }

    const payload = {
      name: newReview.name,
      product: product.name,
      email: newReview.email,
      rating: newReview.rating,
      comment: newReview.comment
    };

    try {
      await fetch(FEEDBACK_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain', 
        },
        body: JSON.stringify(payload),
      });

      recordSubmission('feedback_rate_limit');

      const localReview: Review = {
        id: Math.random().toString(36).substr(2, 9),
        author: newReview.name || 'Anonymous',
        email: newReview.email,
        rating: newReview.rating,
        comment: newReview.comment,
        date: 'Just now'
      };
      
      addLocalReview(localReview, product.name);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setIsFormOpen(false);
        setNewReview({ name: '', email: '', rating: 5, comment: '' });
      }, 3000);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Error sending feedback. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <h2 className="text-5xl font-black mb-4 flex items-center">
            <MessageSquare className="h-10 w-10 mr-4 text-[#FDB623]" /> {t('product', 'feedbackTitle')}
          </h2>
          <div className="flex items-center space-x-6">
            <p className="text-2xl text-gray-500 font-bold">{t('product', 'feedbackSubtitle')}</p>
            <div className="h-8 w-[2px] bg-gray-200 hidden md:block"></div>
            {isLoading ? (
              <Loader2 className="h-6 w-6 animate-spin text-gray-300" />
            ) : (
              <StarRating rating={avgRating} showLabel count={reviews.length} size={28} />
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {!isFormOpen && !submitted && (
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-black text-white px-10 py-5 rounded-[1.5rem] font-black text-2xl hover:bg-[#FDB623] hover:text-black transition-all shadow-xl active:scale-95"
            >
              {t('product', 'writeReview')}
            </button>
          )}
        </div>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border-4 border-[#FDB623]/20 mb-16 animate-in slide-in-from-top-10 duration-500">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-3xl font-black">{t('product', 'writeReview')} - {product.name}</h3>
            <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-black" disabled={isSending}><X className="h-8 w-8" /></button>
          </div>
          
          {submitted ? (
            <div className="py-12 text-center space-y-6">
               <div className="bg-green-100 p-8 rounded-full w-fit mx-auto">
                 <Check className="h-20 w-20 text-green-500" />
               </div>
               <div className="space-y-4">
                 <p className="text-3xl font-black">Feedback Sent!</p>
               </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input 
                type="text" 
                name="confirm_email_address"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="opacity-0 absolute -z-10 h-0 w-0"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xl font-black block">{t('checkout', 'fullName')}</label>
                  <input 
                    type="text" 
                    value={newReview.name}
                    onChange={e => setNewReview({...newReview, name: e.target.value})}
                    placeholder="E.g. John Doe"
                    required
                    disabled={isSending}
                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl p-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20 disabled:opacity-50"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xl font-black block">{t('checkout', 'email')}</label>
                  <input 
                    type="email" 
                    value={newReview.email}
                    onChange={e => setNewReview({...newReview, email: e.target.value})}
                    placeholder="john@example.com"
                    required
                    disabled={isSending}
                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl p-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20 disabled:opacity-50"
                  />
                </div>
                <div className="space-y-4 md:col-span-2">
                  <label className="text-xl font-black block">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map(starValue => (
                      <button 
                        key={starValue} 
                        type="button" 
                        disabled={isSending}
                        onClick={() => setNewReview({...newReview, rating: starValue})}
                        className="transition-transform active:scale-90 disabled:opacity-50"
                      >
                        <Star className={`h-10 w-10 ${starValue <= newReview.rating ? 'text-[#FDB623] fill-current' : 'text-gray-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-xl font-black block">Comment</label>
                <textarea 
                  value={newReview.comment}
                  onChange={e => setNewReview({...newReview, comment: e.target.value})}
                  required
                  rows={4}
                  disabled={isSending}
                  className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl p-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20 disabled:opacity-50"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-[#FDB623] text-black py-6 rounded-[2rem] font-black text-2xl hover:bg-yellow-400 shadow-xl transition-all flex items-center justify-center space-x-3 disabled:opacity-75"
              >
                {isSending ? (
                  <>
                    <Loader2 className="h-7 w-7 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>{t('product', 'submitReview')}</span>
                )}
              </button>
            </form>
          )}
        </div>
      )}

      {isLoading ? (
        <div className="py-24 text-center">
          <Loader2 className="h-16 w-16 animate-spin text-[#FDB623] mx-auto mb-4" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="group bg-white rounded-[2.5rem] p-10 shadow-lg border border-gray-100 flex flex-col hover:border-[#FDB623]/30 transition-all relative h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-4 rounded-full">
                    <User className="h-8 w-8 text-[#FDB623]" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-900">{review.author}</p>
                    <p className="text-lg text-gray-400 font-bold">{review.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-6 w-6 ${i < review.rating ? 'text-[#FDB623] fill-current' : 'text-gray-200'}`} />
                  ))}
                </div>
              </div>
              
              <p className="text-2xl text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t, language } = useTranslation();
  
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'image' | 'video'>('image');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setViewMode('image');
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-black mb-8 text-[#FDB623]">{t('product', 'notFound')}</h2>
        <button onClick={() => navigate('/')} className="text-black font-black text-2xl hover:underline">{t('product', 'back')}</button>
      </div>
    );
  }

  const { reviews, avgRating, isLoading } = useProductFeedback(product.name);
  const translatedData = PRODUCT_TRANSLATIONS[product.id]?.[language] || PRODUCT_TRANSLATIONS[product.id]?.['EN'] || {};

  const getVariantImage = (base: string, offset: number) => {
    if (base.includes('picsum.photos/id/')) {
        return base.replace(/\/id\/(\d+)\//, (match, id) => `/id/${parseInt(id) + offset}/`);
    }
    return `${base}?v=${offset}`;
  };

  const displayImages = product.images || [1, 2, 3].map(i => getVariantImage(product.image, i));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button onClick={() => navigate('/')} className="flex items-center text-gray-500 hover:text-black mb-12 text-xl font-bold transition-colors">
          <ChevronLeft className="h-8 w-8 mr-2" /> {t('product', 'back')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group relative">
              {viewMode === 'image' ? (
                <>
                  <img src={activeImage || product.image} alt={translatedData.name} className="w-full h-full object-cover transition-all duration-300" />
                  {avgRating >= 4.8 && (
                    <div className="absolute top-8 left-8 bg-black text-[#FDB623] px-6 py-3 rounded-2xl font-black text-xl flex items-center shadow-2xl border-2 border-[#FDB623]/20">
                       <TrendingUp className="h-6 w-6 mr-2" /> {t('product', 'topRated')}
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full bg-black relative group cursor-pointer">
                   <a href={`https://www.youtube.com/watch?v=${product.video}`} target="_blank" rel="noreferrer" className="block w-full h-full">
                     <img src={`https://img.youtube.com/vi/${product.video}/maxresdefault.jpg`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-[#FDB623] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                           <Play className="h-8 w-8 text-black fill-current ml-1" />
                        </div>
                     </div>
                   </a>
                </div>
              )}
            </div>
            <div className={`grid ${product.video ? 'grid-cols-4' : 'grid-cols-3'} gap-4`}>
              {displayImages.map((imgUrl, i) => (
                <div 
                  key={i} 
                  onClick={() => { setActiveImage(imgUrl); setViewMode('image'); }}
                  className={`aspect-square bg-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${viewMode === 'image' && (activeImage === imgUrl || (!activeImage && i === 0)) ? 'ring-4 ring-[#FDB623] scale-95' : 'hover:opacity-80'}`}
                >
                  <img src={imgUrl} alt={`${translatedData.name} view ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              {product.video && (
                <div 
                  onClick={() => setViewMode('video')} 
                  className={`aspect-square bg-gray-900 rounded-2xl overflow-hidden cursor-pointer relative transition-all duration-300 ${viewMode === 'video' ? 'ring-4 ring-[#FDB623] scale-95' : 'hover:opacity-80'}`}
                >
                   <img src={`https://img.youtube.com/vi/${product.video}/mqdefault.jpg`} alt="Video View" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="text-white h-8 w-8 fill-current" />
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              {product.isPopular && (
                <div className="inline-flex items-center bg-[#FDB623] text-black text-lg font-black px-6 py-2 rounded-full shadow-lg uppercase tracking-widest mb-6">
                  <Star className="h-5 w-5 mr-2 fill-current" /> {t('shop', 'customerFavorite')}
                </div>
              )}
              <h1 id="product-title" className="text-5xl md:text-7xl font-black text-gray-900 mb-4 leading-tight">{translatedData.name || product.name}</h1>
              <div className="mb-8 flex items-center space-x-4">
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-[#FDB623]" />
                ) : (
                  <StarRating rating={avgRating} showLabel count={reviews.length} size={32} />
                )}
              </div>
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-6xl font-black text-gray-900">€{product.price}</span>
                <span className="text-xl text-gray-400 font-bold">{t('shop', 'incVat')}</span>
              </div>
            </div>

            <p className="text-2xl text-gray-600 font-medium leading-relaxed mb-10">
              {translatedData.description || product.description}
            </p>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-gray-100 mb-10">
              <h3 className="text-2xl font-black mb-6 flex items-center">
                <Info className="h-7 w-7 mr-3 text-[#FDB623]" /> {t('product', 'included')}
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {(translatedData.features || product.features).map((feat, i) => (
                  <li key={i} className="flex items-start text-xl text-gray-700 font-bold">
                    <div className="bg-green-100 p-1.5 rounded-lg mr-4 mt-0.5">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-auto">
              <button 
                onClick={() => addToCart({ ...product, name: translatedData.name || product.name })}
                className="flex-1 bg-black text-white py-6 rounded-[1.5rem] font-black text-2xl hover:bg-[#FDB623] hover:text-black transition-all shadow-2xl flex items-center justify-center transform active:scale-95"
              >
                {t('shop', 'addToCart')} <Plus className="ml-3 h-8 w-8" />
              </button>
              <div className="flex items-center justify-center px-8 text-gray-500 font-bold text-lg">
                <Truck className="h-6 w-6 mr-3" /> {t('shop', 'ships24')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Spec */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200">
        <h2 className="text-4xl font-black mb-12">{t('product', 'specTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl font-medium text-gray-600 leading-relaxed">
          <p>{t('product', 'spec1')}</p>
          <p>{t('product', 'spec2')}</p>
        </div>
      </div>

      {/* Payments & Refunds */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200">
        <h2 className="text-4xl font-black mb-12 flex items-center">
          <CreditCard className="h-10 w-10 mr-4" />
          {t('product', 'paymentTitle')}
        </h2>

        <div className="grid grid-cols-1 gap-12 text-xl font-medium text-gray-600 leading-relaxed">
          <p>{t('product', 'paymentDesc')}</p>
        </div>
      </div>

      <FeedbackSection product={product} />

      <Footer />
    </div>
  );
};

const CartDrawer: React.FC = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!isCartOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={toggleCart}></div>
      <div className="fixed inset-y-0 right-0 max-w-lg w-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-8 border-b border-gray-100">
          <h2 className="text-3xl font-black text-gray-900">{t('cart', 'title')}</h2>
          <button onClick={toggleCart} className="text-gray-400 hover:text-gray-900 transition-colors">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
              <ShoppingCart className="h-24 w-24 mb-6 opacity-20" />
              <p className="text-2xl font-bold">{t('cart', 'empty')}</p>
              <button onClick={toggleCart} className="mt-6 text-[#FDB623] font-black text-xl hover:underline transition-all">{t('cart', 'startShopping')}</button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-6 bg-gray-50 p-5 rounded-[2rem]">
                  <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-2xl border border-gray-200" />
                  <div className="flex-1">
                    <h3 className="font-black text-xl text-gray-900">{item.name}</h3>
                    <p className="text-[#FDB623] font-black text-lg">€{item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-3 space-x-5">
                      <div className="flex items-center bg-white rounded-xl border-2 border-gray-100">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-100 transition-colors"><Minus className="h-5 w-5" /></button>
                        <span className="px-4 text-xl font-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-100 transition-colors"><Plus className="h-5 w-5" /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 transition-colors">
                        <Trash2 className="h-7 w-7" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6 text-3xl font-black text-gray-900">
              <span>{t('cart', 'total')}</span>
              <span>€{cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-lg text-center text-gray-500 mb-6 font-bold">{t('cart', 'checkoutNote')}</p>
            <button onClick={() => { toggleCart(); navigate('/checkout'); }} className="w-full bg-[#FDB623] text-black py-5 rounded-[1.5rem] font-black text-2xl hover:bg-yellow-400 shadow-xl flex items-center justify-center transition-all">
              {t('cart', 'secureCheckout')} <ArrowRight className="ml-3 h-7 w-7" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { setShowManager } = useCookies();
  const { t } = useTranslation();
  return (
    <footer className="bg-abstract-dark text-white py-16 border-t border-white/5 relative overflow-hidden">
      <BackgroundDots />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="mr-3 shadow-lg">
                <BrandLogo size={56} />
              </div>
              <span className="text-3xl font-black text-[#FDB623] tracking-tighter">QrSortable</span>
            </Link>
            <p className="text-gray-400 text-xl font-bold leading-relaxed">{t('footer', 'slogan')}</p>
          </div>
          <div>
            <h4 className="font-black text-xl mb-6 text-[#FDB623] uppercase tracking-widest">{t('footer', 'company')}</h4>
            <ul className="space-y-3 text-gray-400 text-lg font-bold">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('footer', 'about')}</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">{t('footer', 'privacy')}</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">{t('footer', 'terms')}</Link></li>
              <li><button onClick={() => setShowManager(true)} className="hover:text-white transition-colors flex items-center"><Shield className="h-4 w-4 mr-2" /> {t('footer', 'cookies')}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xl mb-6 text-[#FDB623] uppercase tracking-widest">{t('footer', 'payments')}</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest">Visa</span>
              <span className="px-4 py-2 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest">Mastercard</span>
              <span className="px-4 py-2 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest">Amex</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-white/5 text-center text-gray-500 text-lg font-bold">
          © {new Date().getFullYear()} QrSortable. {t('footer', 'rights')}
        </div>
      </div>
    </footer>
  );
};

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
      <Check className="h-24 w-24 text-green-600 mb-10 animate-bounce" />
      <h1 className="text-6xl font-black text-gray-900 mb-6">{t('success', 'title')}</h1>
      <p className="text-2xl text-gray-600 mb-12 font-bold">{t('success', 'message')}</p>
      <button onClick={() => navigate('/')} className="text-[#FDB623] font-black text-2xl hover:underline transition-all">{t('success', 'backHome')}</button>
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const phoneBoxData = [
    { id: '2DGPL', room: 'Blue color closet', date: '16 Feb 2026, 9:30 pm', color: 'bg-red-600' },
    { id: '2DMPX', room: 'Kitchen closet', date: '18 Dec 2025, 10:30 pm', color: 'bg-blue-600' },
    { id: 'LLV626', room: 'Book closet', date: '23 Jan 2024, 10:30 pm', color: 'bg-[#FDB623]' },
    { id: 'LLP628', room: 'Spare parts closet', date: '28 Dec 2025, 11:35 am', color: 'bg-green-500' },
    { id: 'LEV636', room: 'Sport closet', date: '23 Nov 2025, 10:30 pm', color: 'bg-pink-500' },
  ];

  return (
    <div className="relative bg-abstract-dark text-white overflow-hidden min-h-[85vh] flex items-center">
      <BackgroundDots scale={3} />
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-20 lg:mb-0 z-10 text-center lg:text-left">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 text-[#FDB623] text-lg font-bold mb-8 border border-[#FDB623]/30">
            <Star className="h-6 w-6 mr-3 fill-current" />
            {t('hero', 'badge')}
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            {t('hero', 'title1')} <br />
            <span className="text-[#FDB623]">{t('hero', 'title2')}</span> {t('hero', 'title3')}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t('hero', 'subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({behavior:'smooth'})}
              className="px-10 py-5 bg-[#FDB623] text-black font-black text-2xl rounded-full shadow-2xl hover:bg-yellow-400 transform hover:scale-105 transition-all flex items-center justify-center"
            >
              {t('hero', 'cta')} <ArrowRight className="ml-3 h-7 w-7" />
            </button>
            <button 
               onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior:'smooth'})}
               className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 font-black text-2xl rounded-full hover:bg-white/20 transition-all"
            >
              {t('hero', 'secondaryCta')}
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-10 text-xl text-gray-400">
            <span className="flex items-center"><Smartphone className="h-6 w-6 mr-2" /> {t('hero', 'app')}</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
            <div className="relative w-80 h-[640px] bg-brand-dark rounded-[3.5rem] border-8 border-gray-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500 flex-shrink-0 z-20">
                 <div className="absolute top-0 w-full h-full bg-[#1a1a1a] flex flex-col">
                     <div className="p-6 pt-12 flex items-center space-x-4">
                        <div className="bg-[#2d2d2d] rounded-2xl flex items-center p-3 border border-white/10 shadow-inner flex-1">
                          <Search className="h-5 w-5 text-gray-500 ml-1" />
                          <span className="text-sm text-gray-400 ml-3 flex-1">{t('hero', 'searchPlaceholder')}</span>
                          <div className="bg-[#1a1a1a] p-2 rounded-xl shadow-md flex items-center justify-center">
                             <Send className="h-4 w-4 text-[#FDB623] fill-current" />
                          </div>
                        </div>
                        <div className="relative flex items-center">
                           <ShoppingCart className="h-8 w-8 text-[#FDB623]" />
                           <span className="absolute -top-4 -right-1 text-white text-xs font-black drop-shadow-md">2</span>
                        </div>
                     </div>
                     <div className="px-6 mb-3">
                        <h2 className="text-[#FDB623] font-black text-2xl text-center">{t('hero', 'storageRoom')}</h2>
                     </div>
                     <div className="flex-1 overflow-y-auto px-6 pb-28 space-y-4 custom-scrollbar">
                         {phoneBoxData.map((box, idx) => (
                             <div key={idx} className={`${box.color} p-4 rounded-3xl shadow-lg relative overflow-hidden group`}>
                                 <div className="flex items-center">
                                     <div className="bg-white/20 p-2 rounded-xl mr-4 shadow-md">
                                        <Package className="h-10 w-10 text-white" />
                                     </div>
                                     <div className="flex-1">
                                         <h4 className="text-white font-black text-lg tracking-wide">{box.id}</h4>
                                         <div className="flex items-center text-white/90 text-sm mt-1">
                                            <MapPin className="h-4 w-4 mr-1.5" />
                                            {box.room}
                                         </div>
                                         <p className="text-white/60 text-xs mt-1.5">{box.date}</p>
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>
                     <div className="absolute bottom-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5 px-6 py-5">
                         <div className="flex items-center justify-between relative">
                            <div className="flex flex-col items-center opacity-50">
                              <Menu className="h-6 w-6 text-gray-400" />
                              <span className="text-[10px] text-gray-400 mt-1 uppercase font-black">Menu</span>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
                               <div className="w-20 h-20 bg-[#FDB623] rounded-3xl flex items-center justify-center shadow-[0_0_20px_rgba(253,182,35,0.4)] border-4 border-[#1a1a1a] transition-transform active:scale-95">
                                  <BrandLogo size={40} />
                               </div>
                            </div>
                            <div className="flex flex-col items-center opacity-50">
                              <QrCode className="h-6 w-6 text-gray-400" />
                              <span className="text-[10px] text-gray-400 mt-1 uppercase font-black">Generate</span>
                            </div>
                         </div>
                     </div>
                 </div>
            </div>
            
            <div className="relative flex-shrink-0 z-10 mt-[-60px] md:mt-0 md:ml-[-80px] lg:ml-[-60px]">
                <div className="w-56 bg-white rounded-[2rem] p-6 pb-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] transform md:rotate-12 transition-transform hover:rotate-0 duration-500 cursor-pointer flex flex-col items-center">
                    <h3 className="text-4xl font-black text-black mb-4 tracking-widest">LLV626</h3>
                    <div className="w-full aspect-square bg-white p-2">
                         <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=LLV626&margin=0" 
                            alt="LLV626 QR" 
                            className="w-full h-full"
                            style={{ imageRendering: 'pixelated' }}
                         />
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FDB623] blur-[80px] opacity-20 -z-10 pointer-events-none animate-pulse"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Smartphone className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.preview.title'),
      desc: t('features', 'items.preview.desc')
    },
    {
      icon: <Package className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.moving.title'),
      desc: t('features', 'items.moving.desc')
    },
    {
      icon: <Truck className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.sharing.title'),
      desc: t('features', 'items.sharing.desc')
    },
    {
      icon: <QrCode className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.generate.title'),
      desc: t('features', 'items.generate.desc')
    },
    {
      icon: <Globe className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.lang.title'),
      desc: t('features', 'items.lang.desc')
    },
    {
      icon: <Shield className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.security.title'),
      desc: t('features', 'items.security.desc')
    },
    {
      icon: <User className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.noAccount.title'),
      desc: t('features', 'items.noAccount.desc')
    },
    {
      icon: <Heart className="h-10 w-10 text-[#FDB623]" />,
      title: t('features', 'items.support.title'),
      desc: t('features', 'items.support.desc')
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">{t('features', 'title')}</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">{t('features', 'subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-[3rem] p-10 hover:shadow-2xl transition-all border border-gray-100 group">
              <div className="bg-gray-900 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-5">{f.title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  const lifestyleImageUrl = "https://lh3.googleusercontent.com/d/1iGzLhifarRidB0pD6LFKHvyR1vP7lD5T";
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="how-it-works" className="bg-abstract-dark text-white overflow-hidden relative">
       <BackgroundDots />
       <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
         <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            <div className="flex-1 w-full">
                <div className="text-center mb-20">
                  <h2 className="text-5xl md:text-6xl font-black mb-6">{t('howItWorks', 'title')}</h2>
                  <p className="text-2xl text-gray-400 mb-10">{t('howItWorks', 'subtitle')}</p>
                  
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full backdrop-blur-sm transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-[#FDB623] rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(253,182,35,0.4)]">
                      <Play className="h-5 w-5 fill-current ml-1" />
                    </div>
                    <span className="text-xl font-bold">{t('howItWorks', 'videoBtn')}</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
                  <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-1 bg-white/10 -z-10"></div>
                  <div className="relative group">
                     <div className="w-32 h-32 bg-[#FDB623] rounded-full flex items-center justify-center mx-auto mb-8 text-black text-4xl font-black shadow-[0_0_40px_rgba(253,182,35,0.4)] transition-transform group-hover:scale-110 border-8 border-[#1a1a1a]">1</div>
                     <h3 className="text-2xl font-black mb-4 text-[#FDB623]">{t('howItWorks', 'step1.title')}</h3>
                     <p className="text-xl text-gray-400 font-medium px-4">{t('howItWorks', 'step1.desc')}</p>
                  </div>
                  <div className="relative group">
                     <div className="w-32 h-32 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-8 text-4xl font-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-110 border-8 border-[#1a1a1a]">2</div>
                     <h3 className="text-2xl font-black mb-4">{t('howItWorks', 'step2.title')}</h3>
                     <p className="text-xl text-gray-400 font-medium px-4">{t('howItWorks', 'step2.desc')}</p>
                  </div>
                  <div className="relative group">
                     <div className="w-32 h-32 bg-[#FDB623] rounded-full flex items-center justify-center mx-auto mb-8 text-black text-4xl font-black shadow-[0_0_40px_rgba(253,182,35,0.4)] transition-transform group-hover:scale-110 border-8 border-[#1a1a1a]">3</div>
                     <h3 className="text-2xl font-black mb-4 text-[#FDB623]">{t('howItWorks', 'step3.title')}</h3>
                     <p className="text-xl text-gray-400 font-medium px-4">{t('howItWorks', 'step3.desc')}</p>
                  </div>
                </div>
            </div>
            <div className="lg:w-[500px] w-full flex-shrink-0">
               <div className="relative h-[700px] rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-500 group">
                   <img src={lifestyleImageUrl} alt="Scanning storage bins" className="w-full h-full object-cover transition-all duration-500" onError={(e) => {(e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";}} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/20">
                      <div className="flex items-center space-x-5">
                         <div className="bg-[#FDB623] p-3 rounded-2xl text-black">
                            <Check className="h-7 w-7" />
                         </div>
                         <div>
                            <p className="text-white font-black text-xl">{t('howItWorks', 'lifestyleTitle')}</p>
                            <p className="text-white/70 text-lg">{t('howItWorks', 'lifestyleDesc')}</p>
                         </div>
                      </div>
                   </div>
               </div>
            </div>
         </div>
       </div>

       {/* Video Modal */}
       {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity" onClick={() => setIsVideoOpen(false)}></div>
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300 flex items-center justify-center group">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <a 
              href="https://www.youtube.com/watch?v=mqwem7Pyttg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-full h-full flex items-center justify-center group/play cursor-pointer overflow-hidden"
            >
                <img 
                  src="https://img.youtube.com/vi/mqwem7Pyttg/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/play:scale-105 opacity-80 group-hover/play:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/play:bg-black/0 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#FDB623] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(253,182,35,0.6)] group-hover/play:scale-110 transition-transform duration-300">
                     <Play className="h-10 w-10 text-black fill-current ml-1" />
                  </div>
                </div>
            </a>
          </div>
        </div>
       )}
    </section>
  );
};

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-abstract-dark text-white py-32 relative overflow-hidden">
        <BackgroundDots scale={2} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8">{t('about', 'heroTitle')}</h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-bold">
            {t('about', 'heroSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-gray-900">{t('about', 'innovationTitle')}</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-bold">
              {t('about', 'innovationDesc1')}
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('about', 'innovationDesc2')}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center">
                <p className="text-4xl font-black text-[#FDB623]">1k+</p>
                <p className="text-lg text-gray-500 font-bold">{t('about', 'statsUsers')}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center">
                <p className="text-4xl font-black text-[#FDB623]">2k+</p>
                <p className="text-lg text-gray-500 font-bold">{t('about', 'statsLabels')}</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://lh3.googleusercontent.com/d/1aKKd52OG12DdhyBy5z1Fy9fOIAPmun6t" alt="Smart storage organization" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-[#FDB623] p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                <QrCode className="h-16 w-16 text-black" />
             </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-5xl font-black text-center mb-20">{t('about', 'valuesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap />, title: t('about', 'values.simplicity.title'), desc: t('about', 'values.simplicity.desc') },
              { icon: <Sparkles />, title: t('about', 'values.quality.title'), desc: t('about', 'values.quality.desc') },
              { icon: <Heart />, title: t('about', 'values.userFocused.title'), desc: t('about', 'values.userFocused.desc') }
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 text-center group hover:-translate-y-2 transition-all">
                <div className="bg-gray-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#FDB623]">
                  {v.icon}
                </div>
                <h3 className="text-3xl font-black mb-4">{v.title}</h3>
                <p className="text-xl text-gray-500 font-bold leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const PrivacyPolicy: React.FC = () => {
  const { setShowManager } = useCookies();
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-[3rem] shadow-2xl p-12 md:p-20 border border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4 text-[#FDB623]">
              <Eye className="h-10 w-10" />
              <h1 className="text-5xl font-black text-gray-900">{t('footer', 'privacy')}</h1>
            </div>
            <button 
              onClick={() => setShowManager(true)}
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-2xl font-black hover:bg-[#FDB623] hover:text-black transition-all"
            >
              <Settings className="h-5 w-5" />
              <span>{t('footer', 'cookies')}</span>
            </button>
          </div>
          
          <div className="space-y-12 text-xl text-gray-600 leading-relaxed font-medium">
            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gray-900 text-[#FDB623] rounded-lg flex items-center justify-center text-sm mr-4">1</div>
                {t('privacy', 'section1.title')}
              </h2>
              <p>{t('privacy', 'section1.desc')}</p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gray-900 text-[#FDB623] rounded-lg flex items-center justify-center text-sm mr-4">2</div>
                {t('privacy', 'section2.title')}
              </h2>
              <p>{t('privacy', 'section2.desc')}</p>
            </section>

            <section className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <ShieldCheck className="h-8 w-8 mr-4 text-green-500" />
                {t('privacy', 'section3.title')}
              </h2>
              <p className="mb-6">{t('privacy', 'section3.desc')}</p>
              <ul className="space-y-4">
                {(t('privacy', 'section3.list') as string[]).map((item: string, i: number) => (
                  <li key={i} className="flex items-center"><Check className="h-6 w-6 text-green-500 mr-3" /> {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gray-900 text-[#FDB623] rounded-lg flex items-center justify-center text-sm mr-4">3</div>
                {t('privacy', 'section4.title')}
              </h2>
              <p className="mb-6">{t('privacy', 'section4.desc')}</p>
            </section>
          </div>
          
          <div className="mt-20 pt-10 border-t border-gray-100 text-center">
            <p className="text-lg text-gray-400 font-bold">{t('privacy', 'updated')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-[3rem] shadow-2xl p-12 md:p-20 border border-gray-100">
          <div className="flex items-center space-x-4 mb-12 text-[#FDB623]">
            <FileText className="h-10 w-10" />
            <h1 className="text-5xl font-black text-gray-900">{t('footer', 'terms')}</h1>
          </div>
          
          <div className="space-y-12 text-xl text-gray-600 leading-relaxed font-medium">
            <p className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 font-bold">
              {t('terms', 'intro')}
            </p>

            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <Scale className="h-8 w-8 mr-4" />
                {t('terms', 'section1.title')}
              </h2>
              <p>{t('terms', 'section1.desc')}</p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <CreditCard className="h-8 w-8 mr-4" />
                {t('terms', 'section2.title')}
              </h2>
              <p>
               {t('terms', 'section2.desc')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <ShieldCheck className="h-8 w-8 mr-4" />
                {t('terms', 'section3.title')}
              </h2>
              <p>{t('terms', 'section3.desc')}</p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
                <Globe className="h-8 w-8 mr-4" />
                {t('terms', 'section4.title')}
              </h2>
              <p>{t('terms', 'section4.desc')}</p>
            </section>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 text-center">
            <p className="text-lg text-gray-400 font-bold">{t('terms', 'updated')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ProductSection: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { allReviews } = useFeedback();
  const { t, language } = useTranslation();

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">{t('shop', 'title')}</h2>
          <p className="text-2xl text-gray-600 font-bold">{t('shop', 'subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => {
            const productReviews = allReviews.filter((r: any) => r.product === product.name);
            const avgRating = productReviews.length > 0 
              ? parseFloat((productReviews.reduce((acc: number, r: any) => acc + Number(r.rating), 0) / productReviews.length).toFixed(1))
              : 5.0;

            const translatedData = PRODUCT_TRANSLATIONS[product.id]?.[language] || PRODUCT_TRANSLATIONS[product.id]?.['EN'] || {};

            return (
            <div key={product.id} className="bg-white rounded-[3rem] p-8 shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div 
                className="aspect-square bg-gray-100 rounded-[2rem] mb-8 overflow-hidden cursor-pointer relative group"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img src={product.image} alt={translatedData.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                {product.isPopular && (
                  <div className="absolute top-6 left-6 bg-[#FDB623] text-black px-4 py-2 rounded-full font-black text-sm uppercase tracking-wider shadow-lg">
                    {t('shop', 'bestValue')}
                  </div>
                )}
              </div>
              
              <h3 
                className="text-3xl font-black text-gray-900 mb-2 cursor-pointer hover:text-[#FDB623] transition-colors"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {translatedData.name || product.name}
              </h3>

              <div className="flex items-center space-x-2 mb-4">
                 <StarRating rating={avgRating} size={20} />
                 <span className="text-lg font-bold text-gray-400">{avgRating.toFixed(1)}</span>
                 <span className="text-sm font-bold text-gray-300">({productReviews.length} {t('shop', 'reviews')})</span>
              </div>
              
              <div className="mb-6 flex items-baseline space-x-2">
                 <span className="text-4xl font-black text-gray-900">€{product.price}</span>
                 <span className="text-gray-400 font-bold">{t('shop', 'perPack')}</span>
              </div>

              <p className="text-lg text-gray-500 font-medium mb-8 line-clamp-3 flex-grow">
                {translatedData.description || product.description}
              </p>

              <div className="space-y-4">
                 <button 
                  onClick={() => addToCart({ ...product, name: translatedData.name || product.name })}
                  className="w-full bg-black text-white py-4 rounded-2xl font-black text-xl hover:bg-[#FDB623] hover:text-black transition-all shadow-lg active:scale-95 flex items-center justify-center"
                 >
                   {t('shop', 'addToCart')} <Plus className="ml-2 h-5 w-5" />
                 </button>
                 <button 
                   onClick={() => navigate(`/product/${product.id}`)}
                   className="w-full bg-gray-100 text-gray-900 py-4 rounded-2xl font-black text-xl hover:bg-gray-200 transition-all flex items-center justify-center"
                 >
                   {t('shop', 'viewDetails')}
                 </button>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ProductSection />
      <Footer />
    </div>
  );
};

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'paid' | null>(null);
  const [isPolling, setIsPolling] = useState(false);
  const [pollError, setPollError] = useState<string | null>(null);
  const [mountTime] = useState(Date.now());
  const [honeypot, setHoneypot] = useState('');
  const [failedAttempts, setFailedAttempts] = useState<number[]>([]);
  
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    street: '',
    city: '',
    zip: '',
    country: ''
  });

  const [shippingCostEuro, setShippingCostEuro] = useState(0);

  useEffect(() => {
    const c = SHIP_COUNTRIES.find(c => c.name === shippingInfo.country);
    if (c) {
      if (c.group === 'DE') setShippingCostEuro(0);
      else if (c.group === 'EU') setShippingCostEuro(15);
      else if (c.group === 'UK') setShippingCostEuro(20);
      else setShippingCostEuro(25); // ROW/Other default
    } else {
      setShippingCostEuro(shippingInfo.country ? 25 : 0);
    }
  }, [shippingInfo.country]);

  const APPS_SCRIPT_CHECKOUT_URL = 'https://script.google.com/macros/s/AKfycbwM1ju8HWPuvSgH7rDN5kd9pyabhvFQ0csjpnQf92MHj2WvBGrGqwPFKFmufjDCHTA9Xw/exec';

  const currencyMap = {
    EUR: { symbol: '€', rate: 1 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.83 },
    JPY: { symbol: '¥', rate: 162.5 }
  };

  const currentTotal = useMemo(() => {
    return cartTotal * currencyMap[currency].rate;
  }, [cartTotal, currency]);

  const shippingCostDisplay = useMemo(() => {
    return shippingCostEuro * currencyMap[currency].rate;
  }, [shippingCostEuro, currency]);

  const grandTotal = useMemo(() => {
    return currentTotal + shippingCostDisplay;
  }, [currentTotal, shippingCostDisplay]);

  const formattedGrandTotal = useMemo(() => {
    return grandTotal.toFixed(2);
  }, [grandTotal]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setPollError(null);

    // 1. Honeypot check
    if (honeypot) {
      console.warn("Honeypot triggered");
      return; // Silent fail
    }

    // 2. Bot Timer (2 seconds)
    if (Date.now() - mountTime < 2000) {
      console.warn("Checkout submission too fast");
      return; // Silent fail
    }

    // 3. Velocity Check (Checkout Security)
    // Block if > 3 failures in last 30 seconds
    const now = Date.now();
    const recentFailures = failedAttempts.filter(t => now - t < 30000);
    if (recentFailures.length >= 3) {
      setPollError("Too many attempts. Please wait a moment before trying again.");
      return;
    }

    // 4. Rate Limit (2 per minute for checkout)
    if (!checkRateLimit('checkout_rate_limit', 2, 60000)) {
      setPollError("Transaction limit reached. Please wait a minute.");
      return;
    }

    // 5. Server-Side Validation (Client Pre-check)
    // Ensure no manipulation of cart data
    const invalidItems = cart.filter(item => item.quantity <= 0 || item.price < 0);
    if (invalidItems.length > 0 || parseFloat(formattedGrandTotal) <= 0) {
      setPollError("Invalid cart detected. Please refresh and try again.");
      return;
    }

    setIsProcessing(true);

    const payload = {
      customerName: shippingInfo.fullName,
      email: shippingInfo.email,
      address: {
        street: shippingInfo.street,
        city: shippingInfo.city,
        zip: shippingInfo.zip,
        country: shippingInfo.country
      },
      items: cart.map(item => ({
        name: item.name,
        quantity: Math.max(1, item.quantity), // Enforce positive integer
        price: Math.max(0, item.price * currencyMap[currency].rate) // Enforce non-negative price
      })),
      currency: currency,
      totalAmount: formattedGrandTotal
    };

    try {
      const response = await fetch(APPS_SCRIPT_CHECKOUT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (result.checkoutUrl) {
        recordSubmission('checkout_rate_limit');
        setCheckoutUrl(result.checkoutUrl);
        setOrderId(result.orderId || `ORD-${Date.now()}`);
        window.open(result.checkoutUrl, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      setPollError('Payment initialization failed. Please check your connection and try again.');
      setFailedAttempts(prev => [...prev, Date.now()]);
    } finally {
      setIsProcessing(false);
    }
  };

  const checkStatus = async () => {
    if (!orderId) return;
    setIsPolling(true);
    setPollError(null);
    try {
      const response = await fetch(`${APPS_SCRIPT_CHECKOUT_URL}?orderId=${orderId}`, {
        method: 'GET',
        mode: 'cors'
      });
      const result = await response.json();
      if (result.status === 'paid') {
        setPaymentStatus('paid');
        clearCart();
        setTimeout(() => navigate('/success'), 2000);
      } else {
        setPollError(t('checkout', 'statusNotPaid'));
      }
    } catch (error) {
      console.error('Status Check Error:', error);
      setPollError(t('checkout', 'statusError'));
    } finally {
      setIsPolling(false);
    }
  };

  if (cart.length === 0 && !orderId) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <ShoppingCart className="h-24 w-24 text-gray-300 mb-8" />
          <p className="text-3xl font-black text-gray-600 mb-8">{t('cart', 'empty')}</p>
          <button onClick={() => navigate('/')} className="text-[#FDB623] font-black text-2xl hover:underline">{t('cart', 'startShopping')}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <button onClick={() => navigate('/')} className="flex items-center text-gray-500 hover:text-gray-900 mb-12 text-xl font-bold transition-colors">
          <ChevronLeft className="h-7 w-7 mr-2" /> {t('product', 'back')}
        </button>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 w-full space-y-12">
            {!checkoutUrl ? (
              <>
                <div>
                  <h1 className="text-6xl font-black mb-4">{t('checkout', 'title')}</h1>
                  <p className="text-2xl text-gray-500 font-bold">{t('checkout', 'subtitle')}</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black flex items-center">
                      <Globe className="h-8 w-8 mr-3 text-[#FDB623]" /> {t('checkout', 'currency')}
                    </h2>
                    <select 
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value as Currency)}
                      className="bg-gray-100 border-none rounded-2xl p-4 text-xl font-black outline-none focus:ring-4 focus:ring-[#FDB623]/20 appearance-none pr-10 cursor-pointer"
                    >
                      <option value="EUR">EUR (€)</option>
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>

                <form id="checkout-form" onSubmit={handlePayment} className="space-y-10">
                  {/* Honeypot field - invisible to users */}
                  <input 
                    type="text" 
                    name="confirm_email_address"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="opacity-0 absolute -z-10 h-0 w-0"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-black mb-10 flex items-center">
                      <MapPin className="h-8 w-8 mr-4 text-[#FDB623]" /> {t('checkout', 'shipping')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                      <div className="md:col-span-3 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'fullName')}</label>
                        <input type="text" placeholder="John Doe" required value={shippingInfo.fullName} onChange={e => setShippingInfo({...shippingInfo, fullName: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-3 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'email')}</label>
                        <input type="email" placeholder="john@example.com" required value={shippingInfo.email} onChange={e => setShippingInfo({...shippingInfo, email: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-6 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'street')}</label>
                        <input type="text" placeholder="Main St 123" required value={shippingInfo.street} onChange={e => setShippingInfo({...shippingInfo, street: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-6 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'city')}</label>
                        <input type="text" placeholder="Amsterdam" required value={shippingInfo.city} onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-6 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'zip')}</label>
                        <input type="text" placeholder="1011 AB" required value={shippingInfo.zip} onChange={e => setShippingInfo({...shippingInfo, zip: e.target.value})} className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20" />
                      </div>
                      <div className="md:col-span-6 space-y-3">
                        <label className="text-lg font-black block">{t('checkout', 'country')}</label>
                        <div className="relative">
                          <select 
                            required 
                            value={shippingInfo.country} 
                            onChange={e => setShippingInfo({...shippingInfo, country: e.target.value})} 
                            className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-4 py-5 text-xl font-bold outline-none focus:ring-4 focus:ring-[#FDB623]/20 appearance-none"
                          >
                            <option value="" disabled>{t('checkout', 'selectCountry')}</option>
                            {SHIP_COUNTRIES.map(c => (
                              <option key={c.name} value={c.name}>{t('countries', c.name)}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <ChevronLeft className="h-6 w-6 transform -rotate-90 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {pollError && (
                    <div className="bg-red-50 border-2 border-red-100 p-8 rounded-3xl flex items-start space-x-4 animate-in shake duration-300">
                      <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-red-900 font-black text-xl mb-1">Initialization Failed</p>
                        <p className="text-red-700 font-bold text-lg leading-relaxed">{pollError}</p>
                      </div>
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border-4 border-[#FDB623]/20 text-center space-y-10 animate-in fade-in duration-500">
                <div className="bg-[#FDB623]/10 w-32 h-32 rounded-full flex items-center justify-center mx-auto">
                   {paymentStatus === 'paid' ? (
                     <Check className="h-16 w-16 text-green-500" />
                   ) : (
                     <CreditCard className="h-16 w-16 text-[#FDB623]" />
                   )}
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black">
                    {paymentStatus === 'paid' ? t('checkout', 'paymentConfirmed') : t('checkout', 'waitingPayment')}
                  </h2>
                  <p className="text-xl text-gray-500 font-bold max-w-md mx-auto">
                    {paymentStatus === 'paid' 
                      ? t('checkout', 'redirecting')
                      : t('checkout', 'completePayment')}
                  </p>
                </div>
                
                {paymentStatus !== 'paid' && (
                  <div className="space-y-6 pt-4">
                    <button 
                      onClick={checkStatus}
                      disabled={isPolling}
                      className="w-full bg-[#FDB623] text-black py-6 rounded-[2rem] font-black text-2xl hover:bg-yellow-400 shadow-xl flex items-center justify-center transition-all disabled:opacity-50 active:scale-95"
                    >
                      {isPolling ? <RefreshCw className="h-7 w-7 animate-spin mr-3" /> : <ShieldCheck className="h-7 w-7 mr-3" />}
                      {t('checkout', 'checkStatus')}
                    </button>

                    {pollError && (
                      <div className="bg-red-50 border-2 border-red-100 p-5 rounded-2xl flex items-start space-x-3 text-left animate-in slide-in-from-top-2">
                        <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                        <p className="text-red-700 font-bold text-lg leading-relaxed">{pollError}</p>
                      </div>
                    )}

                    <button 
                      onClick={() => window.open(checkoutUrl!, '_blank')}
                      className="text-[#FDB623] font-black text-xl hover:underline flex items-center justify-center mx-auto"
                    >
                      Payment page not opening? Click here <ExternalLink className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="lg:w-[450px] w-full sticky top-32">
            <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
              <div className="p-10 border-b border-gray-50">
                <h2 className="text-3xl font-black mb-8">{t('checkout', 'cartItems')}</h2>
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-lg font-black mr-4">{item.quantity}</div>
                        <span className="text-xl font-bold text-gray-800">{item.name}</span>
                      </div>
                      <span className="text-xl font-black">{currencyMap[currency].symbol}{(item.price * item.quantity * currencyMap[currency].rate).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-10 bg-gray-50">
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-gray-600 font-bold text-lg">
                    <span>{t('cart', 'total')} (Items)</span>
                    <span>{currencyMap[currency].symbol}{currentTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600 font-bold text-lg">
                    <span>{t('checkout', 'shipping')}</span>
                    <span>{shippingCostEuro === 0 ? 'Free' : `${currencyMap[currency].symbol}${shippingCostDisplay.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-gray-200 my-4 pt-4 flex justify-between items-center text-3xl font-black text-gray-900">
                    <span>Total</span>
                    <div className="text-right">
                      <span>{currencyMap[currency].symbol}{formattedGrandTotal}</span>
                      <p className="text-xs text-gray-400 font-black uppercase mt-1">{t('shop', 'incVat')}</p>
                    </div>
                  </div>
                </div>
                {!checkoutUrl && (
                  <button 
                    type="submit" 
                    form="checkout-form"
                    disabled={isProcessing}
                    className="w-full bg-black text-white py-6 rounded-[2rem] font-black text-2xl hover:bg-[#FDB623] hover:text-black transition-all flex items-center justify-center disabled:opacity-50 active:scale-95"
                  >
                    {isProcessing ? <Loader2 className="h-8 w-8 animate-spin mr-3" /> : <Lock className="h-7 w-7 mr-3" />}
                    {t('checkout', 'pay')} {currencyMap[currency].symbol}{formattedGrandTotal}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <LanguageProvider>
        <CookieProvider>
          <FeedbackProvider>
            <CartProvider>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/success" element={<SuccessPage />} />
              </Routes>
              <CartDrawer />
              <CookieConsentBanner />
            </CartProvider>
          </FeedbackProvider>
        </CookieProvider>
      </LanguageProvider>
    </HashRouter>
  );
};

export default App;