export interface GeneratorStudioTranslation {
  studioBadge: string;
  studioTitle: string;
  studioSubtitle: string;
  codeTypeLabel: string;
  qrOption: string;
  qrSub: string;
  barcodeOption: string;
  barcodeSub: string;
  sheetFormatLabel: string;
  a4Option: string;
  a4Sub: string;
  a5Option: string;
  a5Sub: string;
  pageCountLabel: string;
  maxPagesToast: string;
  labelsTotalLabel: string;
  tagNameLabel: string;
  tagNamePlaceholder: string;
  tagSuggestionsHint: string;
  colorPickerLabel: string;
  customHexLabel: string;
  barcodeColorNote: string;
  previewTitle: string;
  previewWatermark: string;
  previewEncryptedBadge: string;
  pricePerSheet: string;
  totalPriceLabel: string;
  digitalDeliveryBadge: string;
  buyNowBtn: string;
  addToCartBtn: string;
  addedToast: string;
  cutLinesLabel: string;
  unlockedOrdersTitle: string;
  unlockedOrdersSubtitle: string;
  downloadPdfBtn: string;
  redownloadPdfBtn: string;
  generatingPdf: string;
  digitalCheckoutNoticeTitle: string;
  digitalCheckoutNoticeDesc: string;
  digitalCheckoutOnlyInfo: string;
  digitalShippingFree: string;
  digitalSuccessTitle: string;
  digitalSuccessSubtitle: string;
  digitalPrintTips: string;
  mixedSuccessSubtitle: string;
  orderLabelPrefix: string;
  pagesUnit: string;
  labelsUnit: string;
  tagPrefix: string;
  colorPrefix: string;
  backToGenerator: string;
  shippingFreeLine: string;
  decreasePagesAria: string;
  increasePagesAria: string;
  clearTagAria: string;
  previewImgAlt: string;
  previewDummyNote: string;
  autoCheckingStatus: string;
  popupBlockedTitle: string;
  openPaymentBtn: string;
  autoDownloadNotice: string;
  openPdfBtn: string;
  preparingPdf: string;
  returnSessionEndedTitle: string;
  returnSessionEndedDesc: string;
  promoBadge: string;
  promoTagline: string;
  promoTitle: string;
  promoDesc: string;
  promoFulfillment: string;
  promoFrom: string;
  promoPriceSub: string;
  promoPrimaryCta: string;
  promoSecondaryCta: string;
  promoSampleTag: string;
  promoBarcodeTag: string;
  promoColorHint: string;
  promoQuickCustomizeAria: string;
  paymentExpiredTitle: string;
  paymentExpiredDesc: string;
  paymentCanceledTitle: string;
  paymentCanceledDesc: string;
  paymentFailedTitle: string;
  paymentFailedDesc: string;
  retryPaymentBtn: string;
  editCheckoutBtn: string;
  pollingPausedNotice: string;
}

export const GENERATOR_STUDIO_TRANSLATIONS: Record<'EN' | 'DE' | 'FR' | 'ES', GeneratorStudioTranslation> = {
  EN: {
    studioBadge: 'Interactive Label Studio',
    studioTitle: 'Create Your Custom Encrypted PDF Label Sheet',
    studioSubtitle: 'Configure QR or Barcode sheets compatible with the QrSortable mobile app. Preview live, pay securely via Mollie, and download your print-ready A4 or A5 PDF immediately.',
    codeTypeLabel: '1. Select Code Type',
    qrOption: 'QR Code',
    qrSub: 'Custom color · Encrypted for app',
    barcodeOption: 'Barcode (CODE-128)',
    barcodeSub: 'Classic black · High-contrast',
    sheetFormatLabel: '2. Sheet Format',
    a4Option: 'A4 (12 codes / page)',
    a4Sub: '3 × 4 grid · 70 × 67.7 mm · €3 / page',
    a5Option: 'A5 (6 codes / page)',
    a5Sub: '2 × 3 grid · 74 × 66.3 mm · €2 / page',
    pageCountLabel: '3. Number of Pages (Max 5)',
    maxPagesToast: 'Maximum 5 pages per order.',
    labelsTotalLabel: 'unique encrypted labels total',
    tagNameLabel: '4. Label Tag Name (Optional)',
    tagNamePlaceholder: 'e.g. Kitchen, Fragile, Archive...',
    tagSuggestionsHint: 'Suggestions (tap to fill):',
    colorPickerLabel: '5. QR Color Hex',
    customHexLabel: 'Custom Hex',
    barcodeColorNote: 'Barcodes are printed in crisp black (#000000) for universal scanner reliability.',
    previewTitle: 'Live Label Preview',
    previewWatermark: 'SAMPLE',
    previewEncryptedBadge: 'Encrypted & App Compatible',
    pricePerSheet: 'Price per sheet',
    totalPriceLabel: 'Total',
    digitalDeliveryBadge: 'Instant Digital PDF · €0 Shipping',
    buyNowBtn: 'Pay with Mollie & Download PDF',
    addToCartBtn: 'Add PDF Sheet to Cart',
    addedToast: 'Added PDF sheet configuration to cart!',
    cutLinesLabel: 'Include subtle cut guides on PDF (helpful for plain paper)',
    unlockedOrdersTitle: 'Your Unlocked Printable PDF Orders',
    unlockedOrdersSubtitle: 'Verified payments on this device — download or reprint anytime.',
    downloadPdfBtn: 'Download Print-Ready PDF',
    redownloadPdfBtn: 'Download PDF Again',
    generatingPdf: 'Generating Encrypted PDF...',
    digitalCheckoutNoticeTitle: 'Instant Digital PDF Delivery',
    digitalCheckoutNoticeDesc: 'Shipping is €0.00. Only your name and email are required — your encrypted PDF downloads immediately after Mollie confirms payment.',
    digitalCheckoutOnlyInfo: 'No physical delivery address needed for digital PDF sheets.',
    digitalShippingFree: '€0.00 (Digital PDF)',
    digitalSuccessTitle: 'Your Encrypted Label PDF Is Ready!',
    digitalSuccessSubtitle: 'Click below to download your print-ready label sheet. Print at 100% scale on A4 or A5 sticker paper and scan any label directly with QrSortable.',
    digitalPrintTips: 'Print at 100% (Actual Size) without scaling so sticker grid alignment matches cleanly.',
    mixedSuccessSubtitle: 'Your physical labels are on the way, and your printable PDF sheets are ready below.',
    orderLabelPrefix: 'Custom PDF Sheet',
    pagesUnit: 'page(s)',
    labelsUnit: 'labels',
    tagPrefix: 'Tag',
    colorPrefix: 'Color',
    backToGenerator: 'Create Another Label Sheet',
    shippingFreeLine: '€0.00 shipping',
    decreasePagesAria: 'Decrease pages',
    increasePagesAria: 'Increase pages',
  clearTagAria: 'Clear tag',
    previewImgAlt: 'Live QrSortable label preview',
    previewDummyNote: 'Visual layout preview only — non-scannable dummy code. Real encrypted codes unlock after payment.',
    autoCheckingStatus: 'Checking payment status automatically...',
    popupBlockedTitle: 'Payment tab did not open? Tap below to continue to Mollie:',
    openPaymentBtn: 'Open Mollie Payment Page',
    autoDownloadNotice: 'Your PDF download should start automatically. If your browser blocked it, tap Download or Open / Print below.',
    openPdfBtn: 'Open / Print PDF',
    preparingPdf: 'Unlocking & preparing your encrypted PDF...',
    returnSessionEndedTitle: 'Payment Window Completed',
    returnSessionEndedDesc: 'Your PDF was unlocked in your original checkout window, or this link has already expired. Open the QR Code Generator to view and re-download your unlocked PDFs.',
    promoBadge: 'Print Today · €0 Shipping',
    promoTagline: 'Instant Web & App Studio',
    promoTitle: 'Instant PDF Label Sheets (QR & Barcodes)',
    promoDesc: 'Pick custom QR colors or black Code-128 barcodes, add a box tag, choose A4 or A5, and print at home in 30 seconds.',
    promoFulfillment: 'Instant Download · €0 Shipping',
    promoFrom: 'From',
    promoPriceSub: 'A5 €2 (6 labels) · A4 €3 (12 labels)',
    promoPrimaryCta: 'Design & Download PDF',
    promoSecondaryCta: 'See how it works',
    promoSampleTag: 'Kitchen',
    promoBarcodeTag: 'Archive',
    promoColorHint: 'QR color:',
    promoQuickCustomizeAria: 'Customize instant PDF labels',
    paymentExpiredTitle: 'Payment Session Expired',
    paymentExpiredDesc: 'This Mollie payment link expired before completion and can no longer be used. Start a fresh payment session below to continue.',
    paymentCanceledTitle: 'Payment Canceled',
    paymentCanceledDesc: 'The payment was canceled before completion. You can start a new payment session below whenever you are ready.',
    paymentFailedTitle: 'Payment Failed',
    paymentFailedDesc: 'The transaction could not be completed. Start a fresh payment session below to try again.',
    retryPaymentBtn: 'Try Payment Again (New Session)',
    editCheckoutBtn: 'Back to Checkout Details',
    pollingPausedNotice: 'Automatic check paused. Click Check Payment Status after paying, or start a new session.',
  },
  DE: {
    studioBadge: 'Interaktives Etiketten-Studio',
    studioTitle: 'Erstellen Sie Ihren individuellen verschlüsselten PDF-Etikettenbogen',
    studioSubtitle: 'Konfigurieren Sie QR- oder Barcode-Bögen, die direkt mit der QrSortable-App funktionieren. Live-Vorschau ansehen, sicher mit Mollie bezahlen und druckfertiges A4- oder A5-PDF sofort herunterladen.',
    codeTypeLabel: '1. Code-Typ wählen',
    qrOption: 'QR-Code',
    qrSub: 'Farbwahl · Sicher & App-kompatibel',
    barcodeOption: 'Barcode (CODE-128)',
    barcodeSub: 'Klassisch Schwarz · Hoher Kontrast',
    sheetFormatLabel: '2. Seitenformat',
    a4Option: 'A4 (12 Codes / Seite)',
    a4Sub: '3 × 4 Raster · 70 × 67,7 mm · 3 € / Seite',
    a5Option: 'A5 (6 Codes / Seite)',
    a5Sub: '2 × 3 Raster · 74 × 66,3 mm · 2 € / Seite',
    pageCountLabel: '3. Seitenanzahl (Max. 5)',
    maxPagesToast: 'Maximal 5 Seiten pro Bestellung.',
    labelsTotalLabel: 'einzigartige verschlüsselte Etiketten',
    tagNameLabel: '4. Etiketten-Tag (Optional)',
    tagNamePlaceholder: 'z. B. Küche, Zerbrechlich, Archiv...',
    tagSuggestionsHint: 'Vorschläge (tippen zum Übernehmen):',
    colorPickerLabel: '5. QR-Farbcode (Hex)',
    customHexLabel: 'Eigener Hex',
    barcodeColorNote: 'Barcodes werden für maximale Scanner-Sicherheit in tiefem Schwarz (#000000) gedruckt.',
    previewTitle: 'Live-Etikettenvorschau',
    previewWatermark: 'MUSTER',
    previewEncryptedBadge: 'Verschlüsselt & App-Kompatibel',
    pricePerSheet: 'Preis pro Bogen',
    totalPriceLabel: 'Gesamt',
    digitalDeliveryBadge: 'Sofortiger PDF-Download · 0 € Versand',
    buyNowBtn: 'Mit Mollie zahlen & PDF laden',
    addToCartBtn: 'PDF-Bogen in den Warenkorb',
    addedToast: 'PDF-Konfiguration zum Warenkorb hinzugefügt!',
    cutLinesLabel: 'Dezente Schnittlinien im PDF anzeigen (ideal für Normalpapier)',
    unlockedOrdersTitle: 'Ihre freigeschalteten PDF-Bestellungen',
    unlockedOrdersSubtitle: 'Verifizierte Zahlungen auf diesem Gerät – jederzeit erneut herunterladen.',
    downloadPdfBtn: 'Druckfertiges PDF herunterladen',
    redownloadPdfBtn: 'PDF erneut herunterladen',
    generatingPdf: 'Verschlüsseltes PDF wird erstellt...',
    digitalCheckoutNoticeTitle: 'Sofortige digitale PDF-Lieferung',
    digitalCheckoutNoticeDesc: 'Der Versand beträgt 0,00 €. Es werden nur Name und E-Mail benötigt – Ihr PDF steht direkt nach Mollie-Bestätigung zum Download bereit.',
    digitalCheckoutOnlyInfo: 'Für digitale PDF-Bögen ist keine Lieferadresse erforderlich.',
    digitalShippingFree: '0,00 € (Digitales PDF)',
    digitalSuccessTitle: 'Ihr verschlüsseltes Etiketten-PDF ist fertig!',
    digitalSuccessSubtitle: 'Laden Sie Ihren druckfertigen Bogen unten herunter. Drucken Sie in Originalgröße (100 %) auf A4- oder A5-Etikettenpapier und scannen Sie direkt mit QrSortable.',
    digitalPrintTips: 'In Originalgröße (100 %) ohne Seitenanpassung drucken, damit das Etikettenraster exakt passt.',
    mixedSuccessSubtitle: 'Ihre physischen Etiketten sind unterwegs und Ihre druckbaren PDF-Bögen stehen unten bereit.',
    orderLabelPrefix: 'Individueller PDF-Bogen',
    pagesUnit: 'Seite(n)',
    labelsUnit: 'Etiketten',
    tagPrefix: 'Tag',
    colorPrefix: 'Farbe',
    backToGenerator: 'Weiteren Etikettenbogen erstellen',
    shippingFreeLine: '0,00 € Versand',
    decreasePagesAria: 'Seitenanzahl verringern',
    increasePagesAria: 'Seitenanzahl erhöhen',
    clearTagAria: 'Tag löschen',
    previewImgAlt: 'Live-Etikettenvorschau von QrSortable',
    previewDummyNote: 'Nur Layout-Vorschau – nicht scanbarer Mustercode. Echte verschlüsselte Codes werden nach Zahlung freigeschaltet.',
    autoCheckingStatus: 'Zahlungsstatus wird automatisch geprüft...',
    popupBlockedTitle: 'Zahlungsfenster nicht geöffnet? Tippen Sie unten, um zu Mollie fortzufahren:',
    openPaymentBtn: 'Mollie-Zahlungsseite öffnen',
    autoDownloadNotice: 'Ihr PDF-Download sollte automatisch starten. Falls Ihr Browser ihn blockiert hat, nutzen Sie die Buttons unten.',
    openPdfBtn: 'PDF öffnen / drucken',
    preparingPdf: 'Verschlüsseltes PDF wird vorbereitet...',
    returnSessionEndedTitle: 'Zahlungsvorgang abgeschlossen',
    returnSessionEndedDesc: 'Ihr PDF wurde bereits im ursprünglichen Checkout-Fenster freigeschaltet oder dieser Rückkehrlauf ist abgelaufen. Öffnen Sie den QR-Code-Generator, um Ihre freigeschalteten PDFs herunterzuladen.',
    promoBadge: 'Heute drucken · 0 € Versand',
    promoTagline: 'Sofort-Web & App-Studio',
    promoTitle: 'Sofort-PDF Etikettenbögen (QR & Barcodes)',
    promoDesc: 'Wählen Sie QR-Wunschfarben oder Code-128-Barcodes, fügen Sie ein Tag hinzu, wählen Sie A4 oder A5 und drucken Sie in 30 Sekunden.',
    promoFulfillment: 'Sofort-Download · 0 € Versand',
    promoFrom: 'Ab',
    promoPriceSub: 'A5 2 € (6 Codes) · A4 3 € (12 Codes)',
    promoPrimaryCta: 'Gestalten & PDF laden',
    promoSecondaryCta: 'So funktioniert’s',
    promoSampleTag: 'Küche',
    promoBarcodeTag: 'Archiv',
    promoColorHint: 'QR-Farbe:',
    promoQuickCustomizeAria: 'Sofort-PDF-Etiketten anpassen',
    paymentExpiredTitle: 'Zahlungssitzung abgelaufen',
    paymentExpiredDesc: 'Dieser Mollie-Zahlungslink ist vor Abschluss abgelaufen und kann nicht mehr verwendet werden. Starten Sie unten eine neue Zahlung.',
    paymentCanceledTitle: 'Zahlung abgebrochen',
    paymentCanceledDesc: 'Die Zahlung wurde vor Abschluss abgebrochen. Starten Sie unten eine neue Zahlungssitzung, sobald Sie bereit sind.',
    paymentFailedTitle: 'Zahlung fehlgeschlagen',
    paymentFailedDesc: 'Die Transaktion konnte nicht abgeschlossen werden. Starten Sie unten eine neue Zahlungssitzung, um es erneut zu versuchen.',
    retryPaymentBtn: 'Zahlung erneut versuchen',
    editCheckoutBtn: 'Zurück zu den Bestelldaten',
    pollingPausedNotice: 'Automatische Prüfung pausiert. Klicken Sie nach der Zahlung auf Zahlungsstatus prüfen oder starten Sie neu.',
  },
  FR: {
    studioBadge: 'Studio d’Étiquettes Interactif',
    studioTitle: 'Créez votre planche d’étiquettes PDF chiffrée',
    studioSubtitle: 'Configurez vos planches QR ou codes-barres compatibles avec l’application QrSortable. Prévisualisez en direct, payez via Mollie et téléchargez immédiatement votre PDF A4 ou A5 prêt à imprimer.',
    codeTypeLabel: '1. Choisir le type de code',
    qrOption: 'Code QR',
    qrSub: 'Couleur au choix · Chiffré pour l’app',
    barcodeOption: 'Code-barres (CODE-128)',
    barcodeSub: 'Noir classique · Haut contraste',
    sheetFormatLabel: '2. Format de page',
    a4Option: 'A4 (12 étiquettes / page)',
    a4Sub: 'Grille 3 × 4 · 70 × 67,7 mm · 3 € / page',
    a5Option: 'A5 (6 étiquettes / page)',
    a5Sub: 'Grille 2 × 3 · 74 × 66,3 mm · 2 € / page',
    pageCountLabel: '3. Nombre de pages (Max 5)',
    maxPagesToast: 'Maximum 5 pages par commande.',
    labelsTotalLabel: 'étiquettes uniques chiffrées au total',
    tagNameLabel: '4. Nom du tag (Optionnel)',
    tagNamePlaceholder: 'ex. Cuisine, Fragile, Archives...',
    tagSuggestionsHint: 'Suggestions (appuyez pour remplir) :',
    colorPickerLabel: '5. Couleur Hex du QR',
    customHexLabel: 'Hex personnalisé',
    barcodeColorNote: 'Les codes-barres sont imprimés en noir (#000000) pour une lecture optimale.',
    previewTitle: 'Aperçu en direct',
    previewWatermark: 'EXEMPLE',
    previewEncryptedBadge: 'Chiffré et Compatible App',
    pricePerSheet: 'Prix par feuille',
    totalPriceLabel: 'Total',
    digitalDeliveryBadge: 'PDF numérique instantané · 0 € de port',
    buyNowBtn: 'Payer avec Mollie & Télécharger',
    addToCartBtn: 'Ajouter la planche PDF au panier',
    addedToast: 'Configuration PDF ajoutée au panier !',
    cutLinesLabel: 'Inclure de légers repères de coupe (utile sur papier ordinaire)',
    unlockedOrdersTitle: 'Vos commandes PDF débloquées',
    unlockedOrdersSubtitle: 'Paiements vérifiés sur cet appareil — téléchargez ou réimprimez à tout moment.',
    downloadPdfBtn: 'Télécharger le PDF prêt à imprimer',
    redownloadPdfBtn: 'Télécharger à nouveau le PDF',
    generatingPdf: 'Génération du PDF chiffré...',
    digitalCheckoutNoticeTitle: 'Livraison numérique instantanée',
    digitalCheckoutNoticeDesc: 'Frais de port de 0,00 €. Seuls votre nom et votre e-mail sont requis — votre PDF est téléchargeable dès confirmation Mollie.',
    digitalCheckoutOnlyInfo: 'Aucune adresse postale requise pour les planches PDF numériques.',
    digitalShippingFree: '0,00 € (PDF Numérique)',
    digitalSuccessTitle: 'Votre PDF d’étiquettes chiffrées est prêt !',
    digitalSuccessSubtitle: 'Cliquez ci-dessous pour télécharger votre planche prête à imprimer. Imprimez à l’échelle 100 % sur A4 ou A5 et scannez avec QrSortable.',
    digitalPrintTips: 'Imprimez à taille réelle (100 %) sans mise à l’échelle pour conserver l’alignement exact des étiquettes.',
    mixedSuccessSubtitle: 'Vos étiquettes physiques sont en route et vos planches PDF sont prêtes ci-dessous.',
    orderLabelPrefix: 'Planche PDF sur mesure',
    pagesUnit: 'page(s)',
    labelsUnit: 'étiquettes',
    tagPrefix: 'Tag',
    colorPrefix: 'Couleur',
    backToGenerator: 'Créer une autre planche',
    shippingFreeLine: '0,00 € livraison',
    decreasePagesAria: 'Réduire le nombre de pages',
    increasePagesAria: 'Augmenter le nombre de pages',
    clearTagAria: 'Effacer le tag',
    previewImgAlt: 'Aperçu en direct de l’étiquette QrSortable',
    previewDummyNote: 'Aperçu visuel uniquement — code factice non scannable. Les vrais codes chiffrés sont débloqués après paiement.',
    autoCheckingStatus: 'Vérification automatique du paiement...',
    popupBlockedTitle: 'La fenêtre de paiement ne s’est pas ouverte ? Appuyez ci-dessous pour continuer vers Mollie :',
    openPaymentBtn: 'Ouvrir la page de paiement Mollie',
    autoDownloadNotice: 'Votre téléchargement PDF devrait démarrer automatiquement. S’il est bloqué, utilisez les boutons ci-dessous.',
    openPdfBtn: 'Ouvrir / Imprimer le PDF',
    preparingPdf: 'Déblocage et préparation de votre PDF chiffré...',
    returnSessionEndedTitle: 'Fenêtre de paiement terminée',
    returnSessionEndedDesc: 'Votre PDF a été débloqué dans la fenêtre de paiement initiale ou ce lien a expiré. Ouvrez le générateur de codes QR pour accéder à vos PDF.',
    promoBadge: 'Imprimer ce jour · 0 € port',
    promoTagline: 'Studio Web & App Instantané',
    promoTitle: 'Planches PDF Instantanées (QR & Codes-barres)',
    promoDesc: 'Choisissez la couleur du QR ou un code-barres Code-128, ajoutez un tag, sélectionnez A4 ou A5 et imprimez en 30 secondes.',
    promoFulfillment: 'Téléchargement immédiat · 0 € port',
    promoFrom: 'Dès',
    promoPriceSub: 'A5 2 € (6 codes) · A4 3 € (12 codes)',
    promoPrimaryCta: 'Créer & Télécharger PDF',
    promoSecondaryCta: 'Voir le fonctionnement',
    promoSampleTag: 'Cuisine',
    promoBarcodeTag: 'Archives',
    promoColorHint: 'Couleur QR :',
    promoQuickCustomizeAria: 'Personnaliser les étiquettes PDF instantanées',
    paymentExpiredTitle: 'Session de paiement expirée',
    paymentExpiredDesc: 'Ce lien de paiement Mollie a expiré avant sa validation et ne peut plus être utilisé. Lancez une nouvelle session ci-dessous.',
    paymentCanceledTitle: 'Paiement annulé',
    paymentCanceledDesc: 'Le paiement a été annulé avant la fin. Vous pouvez lancer une nouvelle session de paiement ci-dessous.',
    paymentFailedTitle: 'Échec du paiement',
    paymentFailedDesc: 'La transaction n’a pas pu aboutir. Lancez une nouvelle session de paiement ci-dessous pour réessayer.',
    retryPaymentBtn: 'Réessayer le paiement',
    editCheckoutBtn: 'Retour aux détails de commande',
    pollingPausedNotice: 'Vérification automatique en pause. Cliquez sur Vérifier le statut après paiement ou relancez un paiement.',
  },
  ES: {
    studioBadge: 'Estudio Interactivo de Etiquetas',
    studioTitle: 'Crea tu hoja de etiquetas PDF cifrada',
    studioSubtitle: 'Configura hojas de códigos QR o barras compatibles con la app QrSortable. Previsualiza al instante, paga de forma segura con Mollie y descarga tu PDF A4 o A5 listo para imprimir.',
    codeTypeLabel: '1. Elegir tipo de código',
    qrOption: 'Código QR',
    qrSub: 'Color a elegir · Cifrado para la app',
    barcodeOption: 'Código de barras (CODE-128)',
    barcodeSub: 'Negro clásico · Alto contraste',
    sheetFormatLabel: '2. Formato de hoja',
    a4Option: 'A4 (12 etiquetas / página)',
    a4Sub: 'Cuadrícula 3 × 4 · 70 × 67,7 mm · 3 € / página',
    a5Option: 'A5 (6 etiquetas / página)',
    a5Sub: 'Cuadrícula 2 × 3 · 74 × 66,3 mm · 2 € / página',
    pageCountLabel: '3. Número de páginas (Máx. 5)',
    maxPagesToast: 'Máximo 5 páginas por pedido.',
    labelsTotalLabel: 'etiquetas únicas cifradas en total',
    tagNameLabel: '4. Etiqueta o Tag (Opcional)',
    tagNamePlaceholder: 'ej. Cocina, Frágil, Archivo...',
    tagSuggestionsHint: 'Sugerencias (toca para usar):',
    colorPickerLabel: '5. Color Hex del QR',
    customHexLabel: 'Hex personalizado',
    barcodeColorNote: 'Los códigos de barras se imprimen en negro sólido (#000000) para garantizar el escaneo.',
    previewTitle: 'Vista previa en vivo',
    previewWatermark: 'MUESTRA',
    previewEncryptedBadge: 'Cifrado y Compatible con App',
    pricePerSheet: 'Precio por hoja',
    totalPriceLabel: 'Total',
    digitalDeliveryBadge: 'PDF digital instantáneo · 0 € envío',
    buyNowBtn: 'Pagar con Mollie y Descargar PDF',
    addToCartBtn: 'Añadir hoja PDF al carrito',
    addedToast: '¡Configuración de hoja PDF añadida al carrito!',
    cutLinesLabel: 'Incluir líneas de corte sutiles (útil en papel normal)',
    unlockedOrdersTitle: 'Tus pedidos de PDF desbloqueados',
    unlockedOrdersSubtitle: 'Pagos verificados en este dispositivo — descarga o reimprime cuando quieras.',
    downloadPdfBtn: 'Descargar PDF listo para imprimir',
    redownloadPdfBtn: 'Volver a descargar PDF',
    generatingPdf: 'Generando PDF cifrado...',
    digitalCheckoutNoticeTitle: 'Entrega digital instantánea',
    digitalCheckoutNoticeDesc: 'El envío es 0,00 €. Solo necesitamos tu nombre y correo electrónico — tu PDF se desbloquea al confirmar Mollie.',
    digitalCheckoutOnlyInfo: 'No se requiere dirección de envío físico para hojas PDF digitales.',
    digitalShippingFree: '0,00 € (PDF Digital)',
    digitalSuccessTitle: '¡Tu PDF de etiquetas cifradas está listo!',
    digitalSuccessSubtitle: 'Haz clic abajo para descargar tu hoja lista para imprimir. Imprime al 100 % en papel A4 o A5 y escanea con QrSortable.',
    digitalPrintTips: 'Imprime al tamaño real (100 %) sin ajustar escala para mantener la alineación exacta de las etiquetas.',
    mixedSuccessSubtitle: 'Tus etiquetas físicas están en camino y tus hojas PDF están listas abajo.',
    orderLabelPrefix: 'Hoja PDF personalizada',
    pagesUnit: 'página(s)',
    labelsUnit: 'etiquetas',
    tagPrefix: 'Etiqueta',
    colorPrefix: 'Color',
    backToGenerator: 'Crear otra hoja de etiquetas',
    shippingFreeLine: '0,00 € envío',
    decreasePagesAria: 'Reducir páginas',
    increasePagesAria: 'Aumentar páginas',
    clearTagAria: 'Borrar etiqueta',
    previewImgAlt: 'Vista previa en vivo de la etiqueta QrSortable',
    previewDummyNote: 'Solo vista previa visual — código ficticio no escaneable. Los códigos cifrados reales se desbloquean tras el pago.',
    autoCheckingStatus: 'Comprobando el estado del pago automáticamente...',
    popupBlockedTitle: '¿No se abrió la ventana de pago? Toca abajo para ir a Mollie:',
    openPaymentBtn: 'Abrir página de pago de Mollie',
    autoDownloadNotice: 'Tu descarga en PDF debería iniciarse automáticamente. Si tu navegador la bloqueó, usa los botones de abajo.',
    openPdfBtn: 'Abrir / Imprimir PDF',
    preparingPdf: 'Desbloqueando y preparando tu PDF cifrado...',
    returnSessionEndedTitle: 'Ventana de pago completada',
    returnSessionEndedDesc: 'Tu PDF ya se desbloqueó en la ventana de pago original o este enlace caducó. Abre el generador de códigos QR para descargar tus PDF desbloqueados.',
    promoBadge: 'Imprimir hoy · 0 € envío',
    promoTagline: 'Estudio Web y App Instantáneo',
    promoTitle: 'Hojas PDF Instantáneas (QR y Códigos)',
    promoDesc: 'Elige colores QR o códigos Code-128, añade tu etiqueta, selecciona A4 o A5 e imprime en casa en 30 segundos.',
    promoFulfillment: 'Descarga inmediata · 0 € envío',
    promoFrom: 'Desde',
    promoPriceSub: 'A5 2 € (6 etiq.) · A4 3 € (12 etiq.)',
    promoPrimaryCta: 'Diseñar y Descargar PDF',
    promoSecondaryCta: 'Ver cómo funciona',
    promoSampleTag: 'Cocina',
    promoBarcodeTag: 'Archivo',
    promoColorHint: 'Color QR:',
    promoQuickCustomizeAria: 'Personalizar etiquetas PDF instantáneas',
    paymentExpiredTitle: 'Sesión de pago caducada',
    paymentExpiredDesc: 'Este enlace de pago de Mollie caducó antes de completarse y ya no se puede reutilizar. Inicia una nueva sesión abajo para continuar.',
    paymentCanceledTitle: 'Pago cancelado',
    paymentCanceledDesc: 'El pago fue cancelado antes de completarse. Puedes iniciar una nueva sesión de pago abajo cuando estés listo.',
    paymentFailedTitle: 'Pago fallido',
    paymentFailedDesc: 'La transacción no pudo completarse. Inicia una nueva sesión de pago abajo para intentarlo de nuevo.',
    retryPaymentBtn: 'Intentar pago de nuevo',
    editCheckoutBtn: 'Volver a los datos del pedido',
    pollingPausedNotice: 'Comprobación automática en pausa. Pulsa Comprobar estado tras pagar o inicia una nueva sesión.',
  },
};
