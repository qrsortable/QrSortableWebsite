import { Product } from '../types';

export const PRODUCT_TRANSLATIONS: any = {
  'starter-pack': {
    EN: { 
      name: 'Standard Pack (48 Barcode Labels)', 
      description: 'Keep home, storage, or moving items organized with ease. Each label features a barcode for quick identification.',
      features: ['48 Unique Barcodes', 'black color coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV) (Coming Soon)','Multi-user Sharing(required subscription)']
    },
    DE: { 
      name: 'Standardpaket (48 Barcode-Etiketten)', 
      description: 'Halten Sie Haus-, Lager- oder Umzugsgegenstände einfach organisiert. Jedes Etikett verfügt über einen Barcode.',
      features: ['48 Einzigartige Barcodes', 'Schwarz farbcodiert', 'Priorisierter Support', 'Kostenloser App-Zugriff', 'Hochsicheres System', 'Bestands-Export (PDF/CSV) (Demnächst)', 'Mehrbenutzer-Freigabe (Abo erforderlich)']
    },
    FR: { 
      name: 'Pack Standard (48 Étiquettes Code-barres)', 
      description: 'Organisez facilement votre maison ou déménagement. Chaque étiquette dispose d\'un code-barres.',
      features: ['48 Codes-barres uniques', 'Code couleur noir', 'Support prioritaire', 'Accès gratuit à l\'application', 'Système hautement sécurisé', 'Export d\'inventaire (PDF/CSV) (Bientôt disponible)', 'Partage multi-utilisateurs (abonnement requis)']
    },
    ES: { 
      name: 'Pack Estándar (48 Etiquetas de Barras)', 
      description: 'Mantén organizados los artículos de hogar o mudanza. Cada etiqueta tiene un código de barras.',
      features: ['48 Códigos de barras únicos', 'Código de color negro', 'Soporte prioritario', 'Acceso gratuito a la App', 'Sistema altamente seguro', 'Exportación de inventario (PDF/CSV) (Próximamente)', 'Uso compartido multiusuario (requiere suscripción)']
    }
  },
  'pro-pack': {
    EN: { 
      name: 'Standard Pack (48 QR Labels)', 
      description: 'A multi-purpose organization kit for home, storage, or moving. QR color-coded for quick identification.',
      features: ['48 Unique QR Codes', 'Black, blue, yellow, pink color-coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV) (Coming Soon)','Multi-user Sharing(required subscription)']
    },
    DE: { 
      name: 'Standardpaket (48 QR-Etiketten)', 
      description: 'Ein Mehrzweck-Organisationskit. QR-farbcodiert für schnelle Identifizierung.',
      features: ['48 Einzigartige QR-Codes', 'Schwarz, Blau, Gelb, Pink farbcodiert', 'Priorisierter Support', 'Kostenloser App-Zugriff', 'Hochsicheres System', 'Bestands-Export (PDF/CSV) (Demnächst)', 'Mehrbenutzer-Freigabe (Abo erforderlich)']
    },
    FR: { 
      name: 'Pack Standard (48 Étiquettes QR)', 
      description: 'Un kit d\'organisation polyvalent. QR codé par couleur pour une identification rapide.',
      features: ['48 QR Codes uniques', 'Codé couleur (Noir, Bleu, Jaune, Rose)', 'Support prioritaire', 'Accès gratuit à l\'application', 'Système hautement sécurisé', 'Export d\'inventaire (PDF/CSV) (Bientôt disponible)', 'Partage multi-utilisateurs (abonnement requis)']
    },
    ES: { 
      name: 'Pack Estándar (48 Etiquetas QR)', 
      description: 'Un kit de organización multiuso. QR codificado por colores para identificación rápida.',
      features: ['48 Códigos QR únicos', 'Colores: Negro, Azul, Amarillo, Rosa', 'Soporte prioritario', 'Acceso gratuito a la App', 'Sistema altamente seguro', 'Exportación de inventario (PDF/CSV) (Próximamente)', 'Uso compartido multiusuario (requiere suscripción)']
    }
  },
  'business-pack': {
    EN: { 
      name: 'Large Pack (100 QR Labels)', 
      description: 'Ideal for small businesses, large estates, or professional organizers. Keep track of high-volume inventory.',
      features: ['100 Heavy Duty Labels', 'black color coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV) (Coming Soon)','Multi-user Sharing(required subscription)', 'Custom Branding']
    },
    DE: { 
      name: 'Großes Paket (100 QR-Etiketten)', 
      description: 'Ideal für kleine Unternehmen oder professionelle Organisatoren. Behalten Sie den Überblick über große Bestände.',
      features: ['100 Hochleistungsetiketten', 'Schwarz farbcodiert', 'Priorisierter Support', 'Kostenloser App-Zugriff', 'Hochsicheres System', 'Bestands-Export (PDF/CSV) (Demnächst)', 'Mehrbenutzer-Freigabe (Abo erforderlich)', 'Individuelles Branding']
    },
    FR: { 
      name: 'Grand Pack (100 Étiquettes QR)', 
      description: 'Idéal pour les petites entreprises ou les organisateurs professionnels. Suivez un inventaire volumineux.',
      features: ['100 Étiquettes ultra-résistantes', 'Code couleur noir', 'Support prioritaire', 'Accès gratuit à l\'application', 'Système hautement sécurisé', 'Export d\'inventaire (PDF/CSV) (Bientôt disponible)', 'Partage multi-utilisateurs (abonnement requis)', 'Marquage personnalisé']
    },
    ES: { 
      name: 'Pack Grande (100 Etiquetas QR)', 
      description: 'Ideal para pequeñas empresas u organizadores profesionales. Controla inventarios de gran volumen.',
      features: ['100 Etiquetas resistentes', 'Código de color negro', 'Soporte prioritario', 'Acceso gratuito a la App', 'Sistema altamente seguro', 'Exportación de inventario (PDF/CSV) (Próximamente)', 'Uso compartido multiusuario (requiere suscripción)', 'Marca personalizada']
    }
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'starter-pack',
    name: 'Standard Pack (48 Barcode Labels)',
    price: 14.99,
    description: 'Keep home, storage, or moving items organized with ease.',
    features: ['48 Unique Barcodes', 'black color coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV) (Coming Soon)','Multi-user Sharing(required subscription)'],
    image: 'https://lh3.googleusercontent.com/d/15PXsmikKti6F-BT7tfpcVlx7bqA0qfnE',
    images: ['https://lh3.googleusercontent.com/d/15PXsmikKti6F-BT7tfpcVlx7bqA0qfnE','https://lh3.googleusercontent.com/d/16k7O1XvBlpc_UJT3cwZqD9Wy1umAAKTC','https://lh3.googleusercontent.com/d/1qh6cVGZrmLDsxqfCx6cDcT4sjbKoUbWd'],
    video: 'foqUSgzAme0',
    reviews: [] 
  },
  {
    id: 'pro-pack',
    name: 'Standard Pack (48 QR Labels)',
    price: 29.99,
    description: 'A multi-purpose organization kit for home, storage, or moving.',
    features: ['48 Unique QR Codes', 'Black, blue, yellow, pink color-coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV) (Coming Soon)','Multi-user Sharing(required subscription)'],
    image: 'https://lh3.googleusercontent.com/d/1KMkk7zFMkMXXF40zllqPNOZASgT39GRd',
    images: ['https://lh3.googleusercontent.com/d/1KMkk7zFMkMXXF40zllqPNOZASgT39GRd','https://lh3.googleusercontent.com/d/1KcXcueso79ZggaU56NJhBGVKBHIsaEq-','https://lh3.googleusercontent.com/d/1NfFbTgcWGdzgcyb_fc0IExdDXzyLzvSF'],
    isPopular: true,
    video: 'foqUSgzAme0',
    reviews: []
  },
  {
    id: 'business-pack',
    name: 'Large Pack (100 QR Labels)',
    price: 49.99,
    description: 'Ideal for small businesses, large estates, or professional organizers.',
    features: ['100 Heavy Duty Labels', 'black color coded', 'Priority Support', 'Free App Access', 'Highly secure system', 'Inventory Export (PDF/CSV) (Coming Soon)','Multi-user Sharing(required subscription)', 'Custom Branding'],
    image: 'https://lh3.googleusercontent.com/d/12dbFsmeQOr3HmTM4CZB375zZv2JxXVSW',
    images: ['https://lh3.googleusercontent.com/d/12dbFsmeQOr3HmTM4CZB375zZv2JxXVSW','https://lh3.googleusercontent.com/d/1K-MbpiZx5TxdTk8ikWI-WSNe6DnG4SQY','https://lh3.googleusercontent.com/d/1BO2haOVqWQKpEwulBThN2emXMmtBq-qU'],
    video: 'foqUSgzAme0',
    reviews: []
  }
];
