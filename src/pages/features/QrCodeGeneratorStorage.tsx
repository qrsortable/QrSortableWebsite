import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackgroundDots } from '../../components/BackgroundDots';
import { useTranslation } from '../../contexts/LanguageContext';
import { useProductFeedback } from '../../contexts/FeedbackContext';
import { QrCode, ChevronRight, Printer, RefreshCw, Palette, Laptop, ArrowRight, ArrowLeft, CheckCircle2, HelpCircle, Check, X } from 'lucide-react';
import { QrCodeGeneratorStudio } from '../../components/QrCodeGeneratorStudio';
import { StarRating } from '../../components/StarRating';
import { FeedbackSection } from '../../components/FeedbackSection';
import { GENERATOR_STUDIO_TRANSLATIONS } from '../../constants/codeGeneratorTranslations';
import { DIGITAL_PDF_FEEDBACK_PRODUCT, DIGITAL_PDF_FEEDBACK_PRODUCT_NAME } from '../../constants/products';

const TRANSLATIONS_PAGE: Record<string, any> = {
  EN: {
    seoTitle: "Instant PDF Label Sheets (QR & Barcodes) – Printable A4 & A5 | QrSortable",
    seoDesc: "Create Instant PDF Label Sheets (QR & Barcodes) in A4 (€3 · 12 labels) or A5 (€2 · 6 labels). Custom Hex QR colors, Code-128 barcodes, box tags & €0 shipping with auto-download.",
    seoKeywords: "Instant PDF Label Sheets, printable QR code labels PDF, Code-128 barcode label sheet, A4 A5 sticker sheet generator, storage box QR labels, moving box printable labels, QrSortable",
    backToHome: "Back to Home",
    home: "Home",
    features: "Features",
    pageTitleBreadcrumb: "Instant PDF Label Sheets (QR & Barcodes)",
    badge: "Instant PDF Label Sheets · Web & App",
    heroTitle: "Instant PDF Label Sheets (QR & Barcodes): QR Code Generator for Storage",
    heroSubtitle: "Design and download encrypted A4 (12 labels, €3) or A5 (6 labels, €2) PDF label sheets online in our Interactive Label Studio or inside the QrSortable app. Print at home with €0 shipping and link every box to your searchable digital inventory.",
    heroDescription: "Need labels today? Configure A4 or A5 QR or Code-128 barcode PDFs online or in the app, customize QR Hex colors, box tags, and optional cut guides, and start organizing immediately.",
    specsTitle: "Instant PDF Label Sheets — Specifications at a Glance",
    specsA4Label: "A4 Sheet Format",
    specsA4Value: "12 labels / page (3 × 4 grid · 70 × 67.7 mm) · €3.00 / page",
    specsA5Label: "A5 Sheet Format",
    specsA5Value: "6 labels / page (2 × 3 grid · 74 × 66.3 mm) · €2.00 / page",
    specsCodesLabel: "Supported Codes",
    specsCodesValue: "Custom Hex QR Codes (#RRGGBB) & Black Code-128 Barcodes (#000000)",
    specsDeliveryLabel: "Delivery & Printing",
    specsDeliveryValue: "€0.00 shipping · Instant PDF auto-download · Print at 100% Actual Size",
    ctaGetLabels: "Get Smart Labels Now",
    ctaExploreMultilingual: "Explore Multilingual App",
    whatIsTitle: "What Is a QR Code Generator for Storage?",
    whatIsDesc1: "A QR Code Generator for Storage creates encrypted, app-compatible printable QR code or Code-128 barcode labels for physical storage containers. Every label generated from the QrSortable website or mobile app links securely to a digital QrSortable box record containing box location, category, item names, remarks, and photos.",
    whatIsDesc2: "Instead of writing long item lists on every box, you can print a clear code label, attach it to the container, scan it with QrSortable, and build a digital inventory. This makes printed labels useful for storage rooms, garages, moving boxes, office archives, classrooms, workshops, and long-term storage.",
    whatIsDesc3: "QrSortable’s generator works both right here in your browser and inside the iOS and Android app—ideal when you want to start organizing immediately with your own printer or prepare labels while waiting for physical packs.",
    howItWorksTitle: "How QrSortable’s QR Code Generator Works",
    step1Title: "Choose QR Code or Barcode (Web or App)",
    step1Desc: "Use the Interactive Label Studio above on the web, or open QrSortable on mobile and go to Home → Generator. Select color-customizable QR Codes or crisp black Code-128 Barcodes depending on your storage workflow.",
    step2Title: "Customize Format, Pages, Color & Tag",
    step2Desc: "Pick A4 (12 labels/page, 3 × 4 grid) or A5 (6 labels/page, 2 × 3 grid) and choose 1 to 5 pages per order. Optionally add a Tag Name (e.g. Kitchen, Fragile, Archive), pick a custom QR Hex color for room or category color-coding, and toggle subtle cut guides for plain paper while viewing a live sample preview.",
    step3Title: "Unlock & Download Your Print-Ready PDF",
    step3Desc: "Complete fast checkout (digital PDFs have €0.00 shipping and require no physical delivery address). Immediately after payment, your unique encrypted codes unlock and your A4 or A5 PDF downloads automatically—ready to print or open at 100% scale on plain paper or sticker sheets.",
    step4Title: "Print, Apply, and Scan",
    step4Desc: "Print the labels at Actual Size (100%), apply them to clean, dry, flat surfaces, and scan them with QrSortable. Each encrypted code connects to a digital box record where you store item names, remarks, photos, location, and category.",
    step5Title: "Re-Download Anytime (Web or App)",
    step5Desc: "Need an extra copy or replacement? Re-download or Open/Print anytime directly from the Unlocked Printable PDF Orders section on this page (where you can also toggle cut guides), or open Menu → Orders → Download inside the QrSortable mobile app.",
    whyTitle: "Why Use a QR Code Generator for Storage?",
    whySubtitle: "Creating custom sheets from the web studio or app with your own printer gives you an immediate, secure, and cost-effective way to label inventory.",
    whyItem1Title: "Start Organizing Immediately",
    whyItem1Desc: "Generate A4 or A5 PDF sheets online or in the app in seconds—no waiting for shipping. Download your PDF automatically after checkout, print, and start labeling boxes today.",
    whyItem2Title: "Color-Code & Tag Every Project",
    whyItem2Desc: "Assign custom QR Hex colors and optional Tag Names for moving boxes, plastic bins, office folders, shelves, classroom supplies, workshop drawers, and long-term storage.",
    whyItem3Title: "Protected Labels Connected to Digital Inventory",
    whyItem3Desc: "Printed QR and Code-128 barcode labels use encrypted app-ready codes designed for QrSortable, turning physical labels into secure, searchable records with location, category, item names, remarks, and photos.",
    whyItem4Title: "Print Exact Quantities in A4 or A5",
    whyItem4Desc: "Choose compact A5 sheets (6 labels/page) or standard A4 sheets (12 labels/page), and order 1 to 5 pages per sheet configuration—whether for a closet or a full home move.",
    whyItem5Title: "Reprint Labels When Needed",
    whyItem5Desc: "Damaged or misplaced a label? Re-download your unlocked PDF right on this page under Unlocked Printable PDF Orders or via Menu → Orders → Download in the mobile app.",
    examplesTitle: "Real-Life Examples of QR Code Generator for Storage",
    ex1Title: "Printing Moving Box Labels Before Packing",
    ex1Desc: "A family preparing for a move needs labels before packing begins. Instead of waiting for shipped packs, they open the Interactive Label Studio on the website or the QrSortable app, generate a color-coded A4 or A5 QR sheet tagged 'Kitchen' or 'Bedroom', print the PDF, and start recording items and photos.",
    ex2Title: "Labeling Storage Boxes by Room",
    ex2Desc: "A user packing kitchen, bedroom, garage, and basement items uses different QR colors per room so each box is recognizable at a glance. Scanning any label opens its QrSortable digital inventory record without opening multiple boxes.",
    ex3Title: "Organizing Plastic Bins in a Garage",
    ex3Desc: "A homeowner stores holiday decorations, seasonal clothes, cables, tools, and spare parts in plastic bins. Generated QR labels make it easier to create a separate digital record for each bin and update the contents when items are added or removed.",
    ex4Title: "Office Archive Box Organization",
    ex4Desc: "An office administrator needs to organize archived documents, folders, backup equipment, and supplies. Printable QR or Code-128 barcode labels connect each archive box to a clear QrSortable record with location, category, remarks, and item details.",
    ex5Title: "Reprinting a Damaged Label",
    ex5Desc: "A printed label gets scuffed during a move. The user either opens this page on the same browser to re-download from Unlocked Printable PDF Orders (even toggling cut guides if needed), or opens Menu → Orders → Download in the app and prints a fresh replacement.",
    ex6Title: "Classroom and Workshop Supplies",
    ex6Desc: "A teacher or workshop user organizes books, craft materials, tools, parts, and supply bins. Printable QR or barcode labels create a clean, searchable inventory system instead of handwritten notes.",
    whoTitle: "Who Can Use This Feature?",
    who1Title: "Homeowners and Renters",
    who1Desc: "Create printable A4 or A5 labels on web or mobile for closets, garages, basements, attics, storage rooms, and seasonal boxes.",
    who2Title: "People Who Are Moving",
    who2Desc: "Generate color-coded moving box QR labels with custom room tags before packing, then add item names, remarks, and photos inside QrSortable.",
    who3Title: "Office Administrators",
    who3Desc: "Label archive boxes, document folders, cabinets, backup hardware, and supplies with high-contrast Code-128 barcodes or colored QR sheets.",
    who4Title: "Small Business Users",
    who4Desc: "Use generated labels for product samples, spare parts, stock boxes, equipment, and storage shelves directly from your desktop browser or phone.",
    who5Title: "Teachers and Classrooms",
    who5Desc: "Organize books, educational materials, craft supplies, learning tools, and classroom bins with printable QR code labels.",
    who6Title: "Workshops and Hobby Users",
    who6Desc: "Label drawers, boxes, part containers, tools, craft materials, and collectible storage with QR or barcode labels.",
    vsTitle: "Printable QR Labels vs. Premium Physical Label Packs",
    vsDesc1: "Printable QR code labels are useful when you want to start quickly from the web studio or app with your own printer. Premium physical label packs are ideal when you want ready-made labels engineered for maximum durability and heavy handling.",
    vsDesc2: "Both options support the same goal: connecting a secure physical label to a digital QrSortable inventory record.",
    vsCol1Title: "Printable QR & Barcode Labels",
    vsCol1Bullet1: "Instant start via web browser or mobile app",
    vsCol1Bullet2: "Available in A4 (12/page) and A5 (6/page) PDFs",
    vsCol1Bullet3: "Custom QR Hex colors, tag names & optional cut guides",
    vsCol1Bullet4: "Print on plain paper or A4/A5 sticker sheets",
    vsCol1Bullet5: "May need protection from moisture or heavy handling",
    vsCol1Bullet6: "Re-downloadable anytime on web (same device) or app",
    vsCol2Title: "Premium Physical Label Packs",
    vsCol2Bullet1: "Ready to use without home printing",
    vsCol2Bullet2: "Designed for stronger durability",
    vsCol2Bullet3: "Better for long-term storage and repeated handling",
    vsCol2Bullet4: "Useful for garages, basements, storage rooms, and busy workspaces",
    vsCol2Bullet5: "A good choice when labels need to withstand more frequent use",
    vsCol2Bullet6: "Made of high-quality, tear-resistant, and water-resistant materials",
    bestUsesTitle: "Best Uses for QR Code Generator for Storage",
    bestUsesIntro: "Use QrSortable’s QR Code Generator for Storage for:",
    bestUsesList: [
      "Storage boxes",
      "Moving boxes",
      "Plastic storage bins",
      "Garage storage",
      "Basement storage",
      "Attic storage",
      "Closet organization",
      "Office archives",
      "Document boxes",
      "Classroom supplies",
      "Workshop drawers",
      "Hobby materials",
      "Spare parts",
      "Books and records",
      "Seasonal clothing",
      "Holiday decorations",
      "Small business storage",
      "Product samples",
      "Storage shelves",
      "Temporary labels",
      "Reprinted labels",
      "Kitchen boxes",
      "Bedroom boxes",
      "Fragile item boxes",
      "Electronics boxes",
      "Donation boxes",
      "Long-term storage boxes"
    ],
    tipsTitle: "Tips for Printing and Applying Storage QR Labels",
    tipsIntro: "For crisp printing, fast scanning, and long-term use:",
    tipsList: [
      "Always print PDFs at 100% (Actual Size) without scaling so A4/A5 grids align cleanly.",
      "Enable subtle cut guides if you plan to print on plain paper and cut labels by hand.",
      "Test on plain paper first before printing on A4 or A5 adhesive sticker sheets.",
      "Attach labels to clean, dry, flat surfaces.",
      "Avoid corners, folds, seams, or curved areas where the code may distort.",
      "Reduce glare when scanning plastic bins or glossy sticker sheets.",
      "Use good lighting when scanning.",
      "Keep the phone steady while scanning.",
      "Replace damaged labels anytime by reprinting from your unlocked order.",
      "Update the box record in QrSortable if a label is replaced."
    ],
    practicalWayTitle: "A Practical Way to Build a Digital Storage Inventory",
    practicalWayDesc1: "QrSortable’s QR Code Generator for Storage does more than output images. Whether created on the web or in the mobile app, each label uses a secure encrypted QrSortable code tied to your digital inventory—so you can add items, remarks, and photos, and search anytime.",
    practicalWayDesc2: "This makes the generator practical for real-world storage where boxes move, rooms are color-coded, labels need quick replacements, or contents must be found without opening every container.",
    workflowTitle: "Works with the QrSortable Inventory Workflow",
    workflowDesc1: "After printing and applying a generated QR code or Code-128 barcode label, scan it with the QrSortable app to create or open the related box record. Add the box location, category, item names, remarks, and photos.",
    workflowDesc2: "Later, search across your entire inventory by item name, remark, tag, location, or category.",
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      {
        q: "What is a QR Code Generator for Storage?",
        a: "A QR Code Generator for Storage creates encrypted, app-compatible printable QR code or Code-128 barcode sheets for storage boxes, moving boxes, bins, shelves, folders, and archives. You can generate labels directly in the web studio on this page or inside the QrSortable mobile app."
      },
      {
        q: "Can I generate QR codes from both the website and the mobile app?",
        a: "Yes. You can design, preview, pay, and download print-ready A4 or A5 PDF sheets directly in the Interactive Label Studio on this page, or generate them inside the QrSortable iOS/Android app via Home → Generator."
      },
      {
        q: "Can I print QR code labels myself on A4 or A5 paper?",
        a: "Yes. Choose A4 (12 labels per page, 3 × 4 grid) or A5 (6 labels per page, 2 × 3 grid), up to 5 pages per order. Print the downloaded PDF at 100% Actual Size on adhesive sticker paper or plain paper—with optional cut guides enabled for easy cutting."
      },
      {
        q: "Can I generate barcodes as well as custom-colored QR codes?",
        a: "Yes. Both the web Label Studio and the app support QR Codes (with preset swatches or any custom Hex color for room/category coding) and high-contrast black Code-128 Barcodes (#000000) for universal scanner reliability."
      },
      {
        q: "Are the generated labels secure and compatible with QrSortable?",
        a: "Yes. Preview labels use non-scannable sample codes, while real paid sheets unlock unique encrypted codes built specifically for the QrSortable workflow so your storage records stay protected and link reliably to your digital inventory."
      },
      {
        q: "Can I use generated QR labels for moving boxes?",
        a: "Yes. You can even print optional Tag Names (like Kitchen, Bedroom, or Fragile) directly on each label and pair them with QR colors before packing, then log every box’s contents and photos in the app."
      },
      {
        q: "Can I use generated QR labels for long-term storage?",
        a: "Yes. Printable QR and barcode labels work great for closets, attics, and storage rooms. For damp garages, heavy handling, or outdoor exposure, our pre-printed waterproof Premium Physical Label Packs offer extra durability."
      },
      {
        q: "Can I re-download my generated PDF later?",
        a: "Yes. Web orders are saved on your browser under Unlocked Printable PDF Orders right on this page (including Open / Print PDF and cut-guide toggles), and app orders remain accessible inside the QrSortable app under Menu → Orders → Download."
      },
      {
        q: "What is the difference between printed labels and premium label packs?",
        a: "Printable PDFs let you start right away at home or the office with your own printer in A4 or A5 format. Premium physical label packs arrive pre-printed on tear-resistant, water-resistant material built for heavy, long-term handling."
      },
      {
        q: "What information can I store after scanning a generated label?",
        a: "You can store box location, category, item names, remarks, and item photos inside QrSortable—turning every physical label into a searchable digital inventory record."
      },
      {
        q: "How should I apply QR labels for reliable scanning?",
        a: "Print at 100% scale, cut cleanly if using plain paper, and apply labels to clean, dry, flat surfaces. Avoid corners, seams, glare, and curved edges, and keep your phone steady in good lighting while scanning."
      },
      {
        q: "Can I use generated labels for office archives?",
        a: "Yes. Generated QR or Code-128 barcode labels are ideal for document boxes, archive folders, office supplies, IT backup hardware, and storage cabinets."
      },
      {
        q: "Can I use generated labels for classrooms or workshops?",
        a: "Yes. Teachers and workshop users can color-code and tag supply bins, books, tools, parts drawers, craft materials, and organized storage areas."
      },
      {
        q: "Do I need to write every item on the outside of the box?",
        a: "No. Keep the sticker clean with an optional short Tag Name and store the full searchable item list, remarks, and photos inside QrSortable—easy to update whenever contents change."
      }
    ],
    finalCtaTitle: "Generate Printable QR Labels and Start Organizing Today",
    finalCtaDesc1: "Use QrSortable’s Interactive Label Studio on the web or the mobile app to create encrypted A4 or A5 QR and barcode PDFs for boxes, bins, shelves, and moves. Print your labels, scan with QrSortable, and search your inventory in seconds.",
    finalCtaDesc2: "Generate on web or app, print labels, scan boxes, and stay organized with QrSortable."
  },
  DE: {
    seoTitle: "Sofort-PDF-Etikettenbögen (QR & Barcode) – A4 & A5 Druck | QrSortable",
    seoDesc: "Erstellen Sie Sofort-PDF-Etikettenbögen (QR & Barcode) in A4 (3 € · 12 Etiketten) oder A5 (2 € · 6 Etiketten). Wunsch-Hex-Farben, Code-128, Box-Tags & 0 € Versand mit Sofort-Download.",
    seoKeywords: "Sofort-PDF-Etikettenbögen, druckbare QR-Code-Etiketten PDF, Code-128 Barcode drucken, A4 A5 Etiketten Generator, Lagerbox QR Etiketten, Umzugskisten Etiketten PDF, QrSortable",
    backToHome: "Zurück zur Startseite",
    home: "Startseite",
    features: "Funktionen",
    pageTitleBreadcrumb: "Sofort-PDF-Etikettenbögen (QR & Barcode)",
    badge: "Sofort-PDF-Etikettenbögen · Web & App",
    heroTitle: "Sofort-PDF-Etikettenbögen (QR & Barcode): Druckbare Lageretiketten",
    heroSubtitle: "Erstellen und laden Sie verschlüsselte A4- (12 Etiketten, 3 €) oder A5-PDF-Etikettenbögen (6 Etiketten, 2 €) direkt online im Etiketten-Studio oder in der QrSortable-App. Sofort mit 0 € Versand zu Hause drucken und jede Kiste digital verknüpfen.",
    heroDescription: "Brauchen Sie heute Etiketten? Konfigurieren Sie A4- oder A5-PDFs für QR- oder Code-128-Barcodes mit Wunschfarbe, Tag und Schnittlinien im Web oder in der App.",
    specsTitle: "Sofort-PDF-Etikettenbögen — Spezifikationen auf einen Blick",
    specsA4Label: "A4-Bogenformat",
    specsA4Value: "12 Etiketten / Seite (3 × 4 Raster · 70 × 67,7 mm) · 3,00 € / Seite",
    specsA5Label: "A5-Bogenformat",
    specsA5Value: "6 Etiketten / Seite (2 × 3 Raster · 74 × 66,3 mm) · 2,00 € / Seite",
    specsCodesLabel: "Code-Typen",
    specsCodesValue: "QR-Codes in Wunsch-Hex-Farbe (#RRGGBB) & schwarze Code-128-Barcodes",
    specsDeliveryLabel: "Versand & Druck",
    specsDeliveryValue: "0,00 € Versand · Sofortiger PDF-Download · Druck mit 100 % Originalgröße",
    ctaGetLabels: "Smarte Etiketten holen",
    ctaExploreMultilingual: "Mehrsprachige App entdecken",
    whatIsTitle: "Was ist ein QR-Code-Generator für Aufbewahrung?",
    whatIsDesc1: "Ein QR-Code-Generator für Aufbewahrung erstellt verschlüsselte, App-kompatible QR-Code- oder Code-128-Barcode-Etiketten für physische Behälter. Jeder im Web-Studio oder in der QrSortable-App erstellte Code verknüpft Ihre Box sicher mit einem digitalen Eintrag inklusive Standort, Kategorie, Artikeln, Notizen und Fotos.",
    whatIsDesc2: "Anstatt lange Artikellisten auf jede Kiste zu schreiben, drucken Sie ein klares Etikett, kleben es auf, scannen es mit QrSortable und bauen ein durchsuchbares Inventar auf – ideal für Lagerräume, Garagen, Umzüge, Büroarchive, Klassenzimmer und Werkstätten.",
    whatIsDesc3: "Der Generator funktioniert sowohl direkt hier im Browser als auch in der iOS- und Android-App – perfekt, wenn Sie sofort mit dem eigenen Drucker loslegen oder Etiketten vor Ankunft physischer Pakete vorbereiten möchten.",
    howItWorksTitle: "So funktioniert der QR-Code-Generator von QrSortable",
    step1Title: "QR-Code oder Barcode wählen (Web oder App)",
    step1Desc: "Nutzen Sie das interaktive Etiketten-Studio oben auf dieser Seite oder öffnen Sie Startseite → Generator in der QrSortable-App. Wählen Sie zwischen farblich anpassbaren QR-Codes oder kontrastreichen schwarzen Code-128-Barcodes.",
    step2Title: "Format, Seitenanzahl, Farbe & Tag anpassen",
    step2Desc: "Wählen Sie A4 (12 Etiketten/Seite, 3 × 4 Raster) oder A5 (6 Etiketten/Seite, 2 × 3 Raster) und 1 bis 5 Seiten pro Bestellung. Fügen Sie optional ein Etiketten-Tag (z. B. Küche, Zerbrechlich, Archiv), einen eigenen QR-Hex-Farbcode sowie dezente Schnittlinien für Normalpapier hinzu und prüfen Sie alles in der Live-Vorschau.",
    step3Title: "Freischalten & druckfertiges PDF laden",
    step3Desc: "Schließen Sie den schnellen digitalen Checkout ab (0,00 € Versand, keine Lieferadresse erforderlich). Direkt nach der Zahlung werden Ihre einzigartigen verschlüsselten Codes freigeschaltet und Ihr A4- oder A5-PDF lädt automatisch herunter – druckbereit in Originalgröße (100 %).",
    step4Title: "Drucken, Anbringen und Scannen",
    step4Desc: "Drucken Sie die Etiketten mit 100 % Skalierung aus, kleben Sie sie auf saubere, trockene, flache Flächen und scannen Sie sie mit QrSortable. Jeder verschlüsselte Code öffnet einen digitalen Kisteneintrag für Artikelnamen, Bemerkungen, Fotos, Standort und Kategorie.",
    step5Title: "Jederzeit erneut herunterladen (Web oder App)",
    step5Desc: "Sie brauchen einen Nachdruck? Nutzen Sie auf dieser Seite den Bereich „Ihre freigeschalteten PDF-Bestellungen“ (inkl. Öffnen/Drucken & Schnittlinien-Option) oder öffnen Sie Menü → Bestellungen → Herunterladen in der QrSortable-App.",
    whyTitle: "Warum einen QR-Code-Generator für Aufbewahrung verwenden?",
    whySubtitle: "Eigene Bögen aus dem Web-Studio oder der App bieten eine sofortige, sichere und günstige Lösung für die Inventarisierung mit dem eigenen Drucker.",
    whyItem1Title: "Sofort mit dem Organisieren beginnen",
    whyItem1Desc: "Erstellen Sie A4- oder A5-PDFs in Sekunden online oder in der App – ganz ohne Lieferzeit. Direkt nach der Zahlung lädt das PDF automatisch und Sie können sofort drucken und beschriften.",
    whyItem2Title: "Projekte mit Farben & Tags strukturieren",
    whyItem2Desc: "Vergeben Sie individuelle QR-Hex-Farben und optionale Etiketten-Tags für Umzugskisten, Kunststoffboxen, Büroordner, Regale, Schulbedarf, Werkstattschubladen und Langzeitlagerung.",
    whyItem3Title: "Geschützte Etiketten für Ihr digitales Inventar",
    whyItem3Desc: "Die gedruckten QR- und Code-128-Etiketten nutzen verschlüsselte, App-kompatible Codes für QrSortable – so bleiben Ihre Kistendaten geschützt und nahtlos mit Standort, Kategorie, Artikeln und Fotos verbunden.",
    whyItem4Title: "Exakte Mengen in A4 oder A5 drucken",
    whyItem4Desc: "Wählen Sie kompakte A5-Bögen (6 Codes/Seite) oder Standard-A4-Bögen (12 Codes/Seite) mit 1 bis 5 Seiten pro Konfiguration – vom einzelnen Schrank bis zum großen Umzug.",
    whyItem5Title: "Etiketten bei Bedarf nachdrucken",
    whyItem5Desc: "Ist ein Etikett beschädigt? Laden Sie das freigeschaltete PDF direkt hier auf der Website erneut herunter oder greifen Sie in der App unter Menü → Bestellungen → Herunterladen darauf zu.",
    examplesTitle: "Praxisbeispiele für den QR-Code-Generator für Aufbewahrung",
    ex1Title: "Umzugskistenetiketten vor dem Packen drucken",
    ex1Desc: "Eine Familie braucht vor dem Umzug schnell Etiketten. Statt auf den Versand zu warten, erstellt sie direkt im Web-Studio oder in der App farbkodierte A4- oder A5-QR-Bögen mit Tags wie „Küche“ oder „Schlafzimmer“, druckt das PDF aus und erfasst Artikel sowie Fotos.",
    ex2Title: "Lagerboxen nach Raum farblich beschriften",
    ex2Desc: "Beim Packen von Küche, Schlafzimmer, Garage und Keller sorgen unterschiedliche QR-Farben pro Raum für sofortigen Überblick. Ein Scan genügt, um den Inhalt digital anzuzeigen, ohne Kisten zu öffnen.",
    ex3Title: "Kunststoffbehälter in einer Garage organisieren",
    ex3Desc: "Ein Hausbesitzer lagert Feiertagsdekorationen, saisonale Kleidung, Kabel, Werkzeuge und Ersatzteile in Kunststoffbehältern. Generierte QR-Etiketten erleichtern es, für jeden Behälter einen separaten digitalen Eintrag zu erstellen und den Inhalt jederzeit aktuell zu halten.",
    ex4Title: "Organisation von Büroarchivboxen",
    ex4Desc: "Ein Büroadministrator strukturiert archivierte Dokumente, Ordner, Backup-Geräte und Verbrauchsmaterialien. Druckbare QR- oder Code-128-Barcode-Etiketten verbinden jede Archivbox mit einem klaren QrSortable-Eintrag.",
    ex5Title: "Nachdrucken eines beschädigten Etiketts",
    ex5Desc: "Ein gedrucktes Etikett wird beim Umzug beschädigt. Der Nutzer öffnet diese Seite im selben Browser, lädt das PDF unter „Ihre freigeschalteten PDF-Bestellungen“ erneut herunter (bei Bedarf mit Schnittlinien) oder nutzt Menü → Bestellungen → Herunterladen in der App.",
    ex6Title: "Klassenzimmer- und Werkstattbedarf",
    ex6Desc: "Lehrkräfte oder Werkstätten organisieren Bücher, Bastelmaterialien, Werkzeuge, Kleinteile und Vorratsbehälter. Druckbare QR- oder Barcode-Etiketten ersetzen unleserliche Handnotizen durch ein durchsuchbares System.",
    whoTitle: "Wer kann diese Funktion nutzen?",
    who1Title: "Hausbesitzer und Mieter",
    who1Desc: "Erstellen Sie druckbare A4- oder A5-Etiketten im Web oder per App für Schränke, Garagen, Keller, Dachböden und Haushaltskisten.",
    who2Title: "Personen, die umziehen",
    who2Desc: "Erstellen Sie vor dem Packen farbkodierte QR-Etiketten mit Raum-Tags und verbinden Sie jede Kiste mit Artikelnamen, Notizen und Fotos.",
    who3Title: "Büroadministratoren",
    who3Desc: "Beschriften Sie Archivboxen, Dokumentenordner, Schränke und Backup-Hardware mit kontrastreichen Code-128-Barcodes oder farbigen QR-Bögen.",
    who4Title: "Kleinunternehmer",
    who4Desc: "Erstellen Sie direkt vom Desktop-Browser oder Smartphone aus Etiketten für Produktmuster, Ersatzteile, Lagerkisten und Regale.",
    who5Title: "Lehrer und Klassenzimmer",
    who5Desc: "Organisieren Sie Bücher, Lehrmaterialien, Bastelbedarf, Lernwerkzeuge und Klassenbehälter mit druckbaren QR-Code-Etiketten.",
    who6Title: "Werkstätten und Hobby-Anwender",
    who6Desc: "Beschriften Sie Schubladen, Kisten, Kleinteilebehälter, Werkzeuge, Bastelmaterialien und Sammlungen mit QR- oder Barcode-Etiketten.",
    vsTitle: "Druckbare QR-Etiketten vs. Physische Premium-Etikettenpakete",
    vsDesc1: "Druckbare QR- und Barcode-Etiketten sind ideal, wenn Sie sofort über das Web-Studio oder die App mit Ihrem eigenen Drucker starten möchten. Physische Premium-Etikettenpakete sind ideal für gebrauchsfertige, besonders robuste Etiketten.",
    vsDesc2: "Beide Optionen verfolgen dasselbe Ziel: ein sicheres physisches Etikett mit einem digitalen QrSortable-Inventareintrag zu verbinden.",
    vsCol1Title: "Druckbare QR- & Barcode-Etiketten",
    vsCol1Bullet1: "Sofortstart über Web-Browser oder mobile App",
    vsCol1Bullet2: "Als A4- (12/Seite) und A5-PDF (6/Seite) verfügbar",
    vsCol1Bullet3: "Freie QR-Farbwahl (Hex), Tags & optionale Schnittlinien",
    vsCol1Bullet4: "Auf Normalpapier oder A4-/A5-Aufkleberbögen druckbar",
    vsCol1Bullet5: "Je nach Papier ggf. empfindlicher bei Nässe oder Abrieb",
    vsCol1Bullet6: "Jederzeit im Web (gleiches Gerät) oder in der App neu ladbar",
    vsCol2Title: "Physische Premium-Etikettenpakete",
    vsCol2Bullet1: "Sofort einsatzbereit ohne Drucken zu Hause",
    vsCol2Bullet2: "Ausgelegt für stärkere Haltbarkeit",
    vsCol2Bullet3: "Besser für Langzeitlagerung und wiederholte Handhabung",
    vsCol2Bullet4: "Nützlich für Garagen, Keller, Lagerräume und geschäftige Arbeitsbereiche",
    vsCol2Bullet5: "Eine gute Wahl, wenn Etiketten einer häufigeren Nutzung standhalten müssen",
    vsCol2Bullet6: "Hergestellt aus hochwertigen, reißfesten und wasserabweisenden Materialien",
    bestUsesTitle: "Beste Anwendungen für den QR-Code-Generator",
    bestUsesIntro: "Verwenden Sie den QR-Code-Generator von QrSortable für:",
    bestUsesList: [
      "Lagerboxen",
      "Umzugskisten",
      "Kunststoff-Lagerbehälter",
      "Garagenlagerung",
      "Kellerlagerung",
      "Dachbodenlagerung",
      "Schrankorganisation",
      "Büroarchive",
      "Dokumentenkisten",
      "Klassenzimmerbedarf",
      "Werkstattschubladen",
      "Hobbymaterialien",
      "Ersatzteile",
      "Bücher und Schallplatten",
      "Saisonale Kleidung",
      "Feiertagsdekorationen",
      "Lagerung für Kleinunternehmen",
      "Produktmuster",
      "Lagerregale",
      "Temporäre Etiketten",
      "Nachgedruckte Etiketten",
      "Küchenkisten",
      "Schlafzimmerkisten",
      "Kisten für zerbrechliche Artikel",
      "Elektronikkisten",
      "Spendenkisten",
      "Langzeit-Lagerboxen"
    ],
    tipsTitle: "Tipps zum Drucken und Anbringen von QR-Lageretiketten",
    tipsIntro: "Für scharfen Druck, schnelles Scannen und langfristige Nutzung:",
    tipsList: [
      "Drucken Sie PDFs immer in Originalgröße (100 %) ohne Seitenanpassung, damit das A4-/A5-Raster exakt passt.",
      "Aktivieren Sie dezente Schnittlinien, wenn Sie auf Normalpapier drucken und von Hand zuschneiden.",
      "Machen Sie einen Probedruck auf Normalpapier, bevor Sie auf A4- oder A5-Aufkleberbögen drucken.",
      "Bringen Sie Etiketten auf sauberen, trockenen und flachen Oberflächen an.",
      "Vermeiden Sie Ecken, Falten, Nähte oder gekrümmte Bereiche, die den Code verzerren können.",
      "Reduzieren Sie Blendung beim Scannen von Kunststoffbehältern oder glänzenden Etiketten.",
      "Sorgen Sie beim Scannen für gute Beleuchtung.",
      "Halten Sie das Telefon beim Scannen ruhig.",
      "Ersetzen Sie beschädigte Etiketten jederzeit durch einen Nachdruck aus Ihrer freigeschalteten Bestellung.",
      "Aktualisieren Sie den Kisteneintrag in QrSortable, wenn ein Etikett ersetzt wird."
    ],
    practicalWayTitle: "Ein praktischer Weg zum Aufbau eines digitalen Lagerinventars",
    practicalWayDesc1: "Der QR-Code-Generator von QrSortable erstellt nicht nur Bilder. Ob im Web-Studio oder in der App erzeugt: Jedes Etikett enthält einen verschlüsselten, geschützten Code für QrSortable, mit dem Sie Artikel, Bemerkungen und Fotos verknüpfen und später blitzschnell suchen können.",
    practicalWayDesc2: "Das macht den Generator ideal für echte Lagersituationen, in denen Kisten umziehen, Räume farblich markiert werden oder Etiketten schnell nachgedruckt werden müssen.",
    workflowTitle: "Funktioniert mit dem QrSortable-Inventar-Workflow",
    workflowDesc1: "Nachdem Sie ein generiertes QR-Code- oder Code-128-Barcode-Etikett gedruckt und angebracht haben, scannen Sie es mit der QrSortable-App, um den Kisteneintrag zu erstellen oder zu öffnen und Standort, Kategorie, Artikel, Notizen und Fotos hinzuzufügen.",
    workflowDesc2: "Später durchsuchen Sie Ihr gesamtes Inventar nach Artikelname, Bemerkung, Tag, Standort oder Kategorie.",
    faqTitle: "Häufig gestellte Fragen",
    faqItems: [
      {
        q: "Was ist ein QR-Code-Generator für Aufbewahrung?",
        a: "Ein QR-Code-Generator für Aufbewahrung erstellt verschlüsselte, App-kompatible QR-Code- oder Code-128-Barcode-Etiketten für Lagerboxen, Umzugskisten, Behälter, Regale und Archive. Sie können Etiketten direkt hier im Web-Studio auf der Website oder in der QrSortable-App erstellen."
      },
      {
        q: "Kann ich QR-Codes sowohl über die Website als auch in der App erstellen?",
        a: "Ja. Sie können druckfertige A4- oder A5-PDFs direkt im interaktiven Etiketten-Studio auf dieser Seite konfigurieren, bezahlen und herunterladen – oder sie in der QrSortable-App für iOS/Android über Startseite → Generator erzeugen."
      },
      {
        q: "Kann ich QR-Code-Etiketten selbst im A4- oder A5-Format drucken?",
        a: "Ja. Wählen Sie A4 (12 Codes pro Seite, 3 × 4 Raster) oder A5 (6 Codes pro Seite, 2 × 3 Raster) mit bis zu 5 Seiten pro Bestellung. Drucken Sie das PDF in Originalgröße (100 %) auf Etikettenbögen oder Normalpapier (optional mit Schnittlinien)."
      },
      {
        q: "Kann ich sowohl Barcodes als auch farbige QR-Codes generieren?",
        a: "Ja. Sowohl das Web-Studio als auch die App unterstützen QR-Codes (mit Farbfeldern oder eigenem Hex-Code zur Farbkodierung) sowie tiefschwarze Code-128-Barcodes (#000000) für maximale Scanner-Zuverlässigkeit."
      },
      {
        q: "Sind die generierten Etiketten sicher und mit QrSortable kompatibel?",
        a: "Ja. Die Live-Vorschau zeigt lediglich ein nicht scanbares Muster. Nach dem Kauf werden einzigartige verschlüsselte Codes freigeschaltet, die speziell für QrSortable konzipiert sind und Ihre Inventardaten zuverlässig schützen."
      },
      {
        q: "Kann ich generierte QR-Etiketten für Umzugskisten verwenden?",
        a: "Ja. Sie können vor dem Packen sogar optionale Tags (z. B. Küche, Schlafzimmer, Zerbrechlich) und Raumfarben aufdrucken und anschließend alle Artikel und Fotos in der App festhalten."
      },
      {
        q: "Kann ich generierte QR-Etiketten für die Langzeitlagerung verwenden?",
        a: "Ja. Druckbare QR- und Barcode-Etiketten eignen sich bestens für Schränke, Dachböden und Lagerräume. Für feuchte Keller, Garagen oder starke Beanspruchung sind unsere vorgedruckten, wasserabweisenden physischen Premium-Etikettenpakete besonders langlebig."
      },
      {
        q: "Kann ich mein generiertes PDF später erneut herunterladen?",
        a: "Ja. Web-Bestellungen bleiben auf demselben Gerät direkt auf dieser Seite unter „Ihre freigeschalteten PDF-Bestellungen“ abrufbar (inkl. PDF öffnen/drucken & Schnittlinien), und App-Bestellungen finden Sie jederzeit unter Menü → Bestellungen → Herunterladen."
      },
      {
        q: "Was ist der Unterschied zwischen gedruckten Etiketten und Premium-Etikettenpaketen?",
        a: "Druckbare PDFs ermöglichen den sofortigen Start am eigenen Drucker in A4 oder A5. Physische Premium-Etikettenpakete kommen fertig gedruckt auf reiß- und wasserfestem Material für dauerhafte Beanspruchung."
      },
      {
        q: "Welche Informationen kann ich nach dem Scannen eines generierten Etiketts speichern?",
        a: "Sie können Kistenstandort, Kategorie, Artikelnamen, Anmerkungen und Artikelfotos in QrSortable speichern und so jedes physische Etikett durchsuchbar machen."
      },
      {
        q: "Wie sollte ich QR-Etiketten anbringen, um ein zuverlässiges Scannen zu gewährleisten?",
        a: "Drucken Sie zu 100 % skaliert, schneiden Sie Normalpapier sauber zu und kleben Sie Etiketten auf saubere, trockene, flache Flächen. Vermeiden Sie Falten, Ecken, Nähte sowie Blendung und halten Sie das Smartphone bei gutem Licht ruhig."
      },
      {
        q: "Kann ich generierte Etiketten für Büroarchive verwenden?",
        a: "Ja. Generierte QR- oder Code-128-Barcode-Etiketten eignen sich ideal für Dokumentenboxen, Archivordner, Büromaterial, Backup-Geräte und Lagerschränke."
      },
      {
        q: "Kann ich generierte Etiketten für Klassenzimmer oder Werkstätten verwenden?",
        a: "Ja. Lehrkräfte und Werkstätten können Behältnisse, Bücher, Werkzeuge, Kleinteile-Schubladen und Bastelmaterialien farblich und per Tag strukturiert kennzeichnen."
      },
      {
        q: "Muss ich jeden Artikel auf die Außenseite der Kiste schreiben?",
        a: "Nein. Halten Sie das Etikett außen schlicht mit einem kurzen optionalen Tag und pflegen Sie die vollständige Artikelliste samt Fotos flexibel innerhalb von QrSortable."
      }
    ],
    finalCtaTitle: "Druckbare QR-Etiketten generieren und noch heute mit dem Organisieren beginnen",
    finalCtaDesc1: "Nutzen Sie das interaktive Etiketten-Studio im Web oder die QrSortable-App, um verschlüsselte A4- oder A5-QR- und Barcode-PDFs für Kisten, Behälter, Regale und Umzüge zu erstellen – drucken, scannen und in Sekunden finden.",
    finalCtaDesc2: "Im Web oder in der App erstellen, Etiketten drucken, Kisten scannen und Ordnung halten mit QrSortable."
  },
  FR: {
    seoTitle: "Planches d’Étiquettes PDF Instantanées (QR & Codes-barres) A4/A5 | QrSortable",
    seoDesc: "Créez vos planches d’étiquettes PDF instantanées (QR & codes-barres) en A4 (3 € · 12 codes) ou A5 (2 € · 6 codes). Couleurs Hex, tags, 0 € de port et téléchargement immédiat.",
    seoKeywords: "Planches étiquettes PDF instantanées, étiquettes QR code imprimables A4 A5, générateur code-barres Code-128 PDF, étiquettes boîtes rangement déménagement, QrSortable",
    backToHome: "Retour à l'accueil",
    home: "Accueil",
    features: "Fonctionnalités",
    pageTitleBreadcrumb: "Planches d’Étiquettes PDF Instantanées",
    badge: "Étiquettes PDF Instantanées · Web & App",
    heroTitle: "Planches d’Étiquettes PDF Instantanées (QR & Codes-barres) à Imprimer",
    heroSubtitle: "Créez et téléchargez des planches PDF chiffrées A4 (12 étiquettes, 3 €) ou A5 (6 étiquettes, 2 €) depuis notre Studio d’Étiquettes ou l’app QrSortable. Imprimez chez vous avec 0 € de port et liez chaque boîte à votre inventaire numérique.",
    heroDescription: "Besoin d’étiquettes aujourd’hui ? Configurez vos PDF A4 ou A5 QR ou Code-128 avec couleur Hex, tag et repères de coupe en ligne ou dans l’application.",
    specsTitle: "Planches d’Étiquettes PDF — Spécifications en un coup d’œil",
    specsA4Label: "Format A4",
    specsA4Value: "12 étiquettes / page (grille 3 × 4 · 70 × 67,7 mm) · 3,00 € / page",
    specsA5Label: "Format A5",
    specsA5Value: "6 étiquettes / page (grille 2 × 3 · 74 × 66,3 mm) · 2,00 € / page",
    specsCodesLabel: "Types de codes",
    specsCodesValue: "QR Codes couleur Hex (#RRGGBB) & Codes-barres Code-128 noirs",
    specsDeliveryLabel: "Livraison & Impression",
    specsDeliveryValue: "0,00 € de port · Téléchargement PDF immédiat · Impression à 100 %",
    ctaGetLabels: "Obtenir des Étiquettes Intelligentes",
    ctaExploreMultilingual: "Explorer l'application multilingue",
    whatIsTitle: "Qu'est-ce qu'un Générateur de Code QR pour Stockage ?",
    whatIsDesc1: "Un Générateur de Code QR pour Stockage crée des étiquettes QR ou codes-barres Code-128 chiffrées, imprimables et compatibles avec QrSortable. Chaque code généré depuis notre site web ou l’application mobile se relie de façon sécurisée à une fiche de boîte contenant emplacement, catégorie, articles, remarques et photos.",
    whatIsDesc2: "Au lieu d’écrire de longues listes sur chaque carton, imprimez une étiquette nette, collez-la sur le conteneur, scannez-la avec QrSortable et constituez un inventaire numérique consultable pour garages, déménagements, archives de bureau, classes et ateliers.",
    whatIsDesc3: "Le générateur de QrSortable fonctionne directement ici dans votre navigateur ainsi que sur l’app iOS et Android—pratique pour démarrer tout de suite avec votre imprimante ou patienter avant la livraison de packs physiques.",
    howItWorksTitle: "Comment fonctionne le générateur de codes QR de QrSortable",
    step1Title: "Choisir Code QR ou Code-barres (Web ou App)",
    step1Desc: "Utilisez le Studio d’Étiquettes Interactif ci-dessus sur le web, ou ouvrez l’application QrSortable via Accueil → Générateur. Choisissez des Codes QR personnalisables en couleur ou des Codes-barres Code-128 noirs à fort contraste.",
    step2Title: "Régler Format, Pages, Couleur et Tag",
    step2Desc: "Sélectionnez A4 (12 codes/page, grille 3 × 4) ou A5 (6 codes/page, grille 2 × 3) et de 1 à 5 pages par commande. Ajoutez si souhaité un Tag (ex. Cuisine, Fragile, Archives), choisissez une couleur Hex du QR pour coder vos pièces, activez de légers repères de coupe pour papier ordinaire et vérifiez l’aperçu en direct.",
    step3Title: "Débloquer et Télécharger le PDF prêt à imprimer",
    step3Desc: "Finalisez le paiement sécurisé (0,00 € de port, aucune adresse postale requise pour les PDF numériques). Dès confirmation, vos codes chiffrés uniques sont débloqués et le PDF A4 ou A5 se télécharge automatiquement—prêt à être imprimé à 100 % sur papier ordinaire ou autocollant.",
    step4Title: "Imprimer, Appliquer et Scanner",
    step4Desc: "Imprimez à taille réelle (100 %), collez les étiquettes sur des surfaces propres, sèches et planes, puis scannez-les avec QrSortable. Chaque code chiffré ouvre une fiche de boîte pour ajouter articles, remarques, photos, emplacement et catégorie.",
    step5Title: "Télécharger à Nouveau à Tout Moment (Web ou App)",
    step5Desc: "Besoin de réimprimer ? Retrouvez vos fichiers directement sur cette page dans « Vos commandes PDF débloquées » (avec option Ouvrir / Imprimer et repères de coupe) ou ouvrez Menu → Commandes → Télécharger dans l’application QrSortable.",
    whyTitle: "Pourquoi utiliser un Générateur de Code QR pour Stockage ?",
    whySubtitle: "Créer vos planches sur mesure depuis le studio web ou l’application avec votre imprimante offre une solution immédiate, sécurisée et économique.",
    whyItem1Title: "Commencer à organiser immédiatement",
    whyItem1Desc: "Générez des PDF A4 ou A5 en quelques secondes en ligne ou sur l’app sans attendre de colis. Votre PDF se télécharge automatiquement après paiement pour étiqueter vos boîtes le jour même.",
    whyItem2Title: "Trier chaque projet par couleur et par tag",
    whyItem2Desc: "Attribuez des couleurs Hex QR et des tags optionnels pour cartons de déménagement, bacs en plastique, dossiers de bureau, étagères, matériel scolaire et tiroirs d’atelier.",
    whyItem3Title: "Étiquettes protégées liées à l’inventaire numérique",
    whyItem3Desc: "Une étiquette QR ou code-barres Code-128 imprimée devient encore plus utile grâce à des codes chiffrés conçus pour QrSortable—reliant chaque boîte à un dossier sécurisé avec emplacement, catégorie, articles, remarques et photos.",
    whyItem4Title: "Imprimer le format et la quantité exacts",
    whyItem4Desc: "Optez pour des planches A5 compactes (6 étiquettes/page) ou A4 standard (12 étiquettes/page), de 1 à 5 pages selon vos besoins.",
    whyItem5Title: "Réimprimer les étiquettes en cas de besoin",
    whyItem5Desc: "Une étiquette abîmée ou perdue ? Téléchargez à nouveau votre PDF débloqué sur cette page web ou via Menu → Commandes → Télécharger dans l’app.",
    examplesTitle: "Exemples Réels de Générateur de Code QR pour Stockage",
    ex1Title: "Imprimer les étiquettes de cartons avant d’emballer",
    ex1Desc: "Une famille préparant un déménagement a besoin d’étiquettes sans délai. Elle ouvre le Studio Interactif sur le site web ou l’app QrSortable, génère une planche A4 ou A5 de codes QR colorés avec le tag « Cuisine » ou « Chambre », l’imprime et enregistre chaque article.",
    ex2Title: "Étiqueter les boîtes de rangement par pièce",
    ex2Desc: "Un utilisateur attribue une couleur QR différente à la cuisine, aux chambres, au garage et au sous-sol pour identifier chaque carton d’un coup d’œil et consulter son contenu par scan sans tout ouvrir.",
    ex3Title: "Organiser les bacs en plastique dans un garage",
    ex3Desc: "Un propriétaire stocke décorations de fête, vêtements de saison, câbles, outils et pièces de rechange dans des bacs en plastique. Les étiquettes QR générées facilitent le suivi numérique de chaque bac à mesure que le contenu évolue.",
    ex4Title: "Organisation de boîtes d’archives de bureau",
    ex4Desc: "Un administrateur de bureau classe documents archivés, dossiers, matériel de secours et fournitures grâce aux étiquettes imprimables QR ou Code-128 liées à des fiches QrSortable claires.",
    ex5Title: "Réimprimer une étiquette endommagée",
    ex5Desc: "Une étiquette s’abîme pendant le transport. L’utilisateur revient sur cette page dans son navigateur pour la télécharger depuis « Vos commandes PDF débloquées » (avec ou sans repères de coupe), ou passe par Menu → Commandes → Télécharger dans l’application.",
    ex6Title: "Fournitures de classe et d’atelier",
    ex6Desc: "Un enseignant ou artisan organise livres, matériel créatif, outils et bacs de pièces avec des étiquettes QR ou codes-barres lisibles et durables.",
    whoTitle: "Qui peut utiliser cette fonctionnalité ?",
    who1Title: "Propriétaires et Locataires",
    who1Desc: "Créez des étiquettes A4 ou A5 sur le web ou l’application pour placards, garages, caves, greniers et boîtes saisonnières.",
    who2Title: "Personnes qui déménagent",
    who2Desc: "Générez des étiquettes QR colorées avec nom de pièce avant d’emballer, puis ajoutez listes d’articles, remarques et photos dans QrSortable.",
    who3Title: "Administrateurs de bureau",
    who3Desc: "Étiquetez archives, classeurs, armoires et équipements de secours avec des codes-barres Code-128 ou QR en couleur.",
    who4Title: "Utilisateurs de petites entreprises",
    who4Desc: "Générez depuis votre ordinateur ou smartphone des étiquettes pour échantillons, pièces détachées, stocks et étagères.",
    who5Title: "Enseignants et Salles de classe",
    who5Desc: "Organisez livres, matériel pédagogique, fournitures de bricolage et bacs de classe avec des étiquettes de codes QR imprimables.",
    who6Title: "Ateliers et Passionnés",
    who6Desc: "Étiquetez tiroirs, boîtes, bacs à vis, outils, matériel créatif et collections avec des codes QR ou codes-barres.",
    vsTitle: "Étiquettes QR Imprimables vs Packs d’Étiquettes Physiques Premium",
    vsDesc1: "Les étiquettes imprimables sont idéales pour démarrer immédiatement sur votre propre imprimante depuis le studio web ou l’application. Les packs d’étiquettes physiques premium sont parfaits lorsque vous recherchez une robustesse maximale prête à l’emploi.",
    vsDesc2: "Les deux options répondent au même objectif : relier une étiquette sécurisée à une fiche d’inventaire numérique QrSortable.",
    vsCol1Title: "Étiquettes QR & Codes-barres Imprimables",
    vsCol1Bullet1: "Démarrage immédiat depuis le navigateur web ou l’app",
    vsCol1Bullet2: "Formats PDF A4 (12/page) et A5 (6/page) disponibles",
    vsCol1Bullet3: "Couleurs Hex QR, noms de tag & repères de coupe optionnels",
    vsCol1Bullet4: "Impression sur papier ordinaire ou feuilles autocollantes A4/A5",
    vsCol1Bullet5: "Sensibilité accrue à l’humidité ou aux frottements sans protection",
    vsCol1Bullet6: "Retéléchargeable sur le web (même appareil) ou dans l’app",
    vsCol2Title: "Packs d’Étiquettes Physiques Premium",
    vsCol2Bullet1: "Prêt à l’emploi sans impression à domicile",
    vsCol2Bullet2: "Conçu pour une plus grande durabilité",
    vsCol2Bullet3: "Idéal pour le stockage à long terme et les manipulations répétées",
    vsCol2Bullet4: "Utile pour les garages, sous-sols, pièces de stockage et espaces de travail animés",
    vsCol2Bullet5: "Un bon choix lorsque les étiquettes doivent résister à un usage plus fréquent",
    vsCol2Bullet6: "Fabriqué à partir de matériaux de haute qualité, résistants aux déchirures et à l’eau",
    bestUsesTitle: "Meilleures Utilisations pour le Générateur de Code QR pour Stockage",
    bestUsesIntro: "Utilisez le Générateur de Code QR pour Stockage de QrSortable pour :",
    bestUsesList: [
      "Boîtes de stockage",
      "Cartons de déménagement",
      "Bacs de stockage en plastique",
      "Rangement de garage",
      "Rangement de sous-sol",
      "Rangement de grenier",
      "Organisation des placards",
      "Archives de bureau",
      "Boîtes de documents",
      "Fournitures scolaires",
      "Tiroirs d'atelier",
      "Matériel de loisirs",
      "Pièces de rechange",
      "Livres et disques",
      "Vêtements de saison",
      "Décorations de fête",
      "Stockage de petites entreprises",
      "Échantillons de produits",
      "Étagères de stockage",
      "Étiquettes temporaires",
      "Étiquettes réimprimées",
      "Boîtes de cuisine",
      "Boîtes de chambre",
      "Boîtes d'articles fragiles",
      "Boîtes d'électronique",
      "Boîtes de dons",
      "Boîtes de stockage à long terme"
    ],
    tipsTitle: "Conseils pour Imprimer et Appliquer les Étiquettes QR de Stockage",
    tipsIntro: "Pour une impression nette, un scan rapide et une tenue durable :",
    tipsList: [
      "Imprimez toujours vos PDF à taille réelle (100 %) sans mise à l’échelle pour préserver la grille A4/A5.",
      "Activez les repères de coupe discrets si vous imprimez sur papier ordinaire pour découper à la main.",
      "Faites un test sur papier ordinaire avant d’imprimer sur vos planches autocollantes A4 ou A5.",
      "Collez les étiquettes sur des surfaces propres, sèches et planes.",
      "Évitez les coins, plis, coutures ou zones courbes pouvant déformer le code.",
      "Réduisez les reflets lors du scan de bacs en plastique ou d’étiquettes brillantes.",
      "Utilisez un bon éclairage lors de la numérisation.",
      "Gardez le téléphone stable pendant le scan.",
      "Remplacez toute étiquette abîmée en la réimprimant depuis votre commande débloquée.",
      "Mettez à jour la fiche de boîte si une étiquette est remplacée."
    ],
    practicalWayTitle: "Un moyen pratique de constituer un inventaire de stockage numérique",
    practicalWayDesc1: "Le Générateur de Code QR pour Stockage de QrSortable va bien au-delà d’un simple visuel. Créée sur le web ou dans l’application, chaque étiquette intègre un code chiffré compatible QrSortable afin de relier vos conteneurs à des fiches protégées avec articles, remarques et photos.",
    practicalWayDesc2: "C’est une solution concrète lorsque des cartons déménagent, changent de contenu ou nécessitent une réimpression rapide.",
    workflowTitle: "Fonctionne avec le flux de travail de l'inventaire QrSortable",
    workflowDesc1: "Après avoir imprimé et posé une étiquette QR ou Code-128 générée, scannez-la avec QrSortable pour créer ou ouvrir la fiche correspondante et renseigner emplacement, catégorie, articles, remarques et photos.",
    workflowDesc2: "Plus tard, recherchez dans tout votre inventaire par nom d’article, remarque, tag, emplacement ou catégorie.",
    faqTitle: "Foire Aux Questions",
    faqItems: [
      {
        q: "Qu'est-ce qu'un Générateur de Code QR pour Stockage ?",
        a: "Un Générateur de Code QR pour Stockage crée des étiquettes QR ou codes-barres Code-128 chiffrées, imprimables et compatibles avec QrSortable pour cartons, bacs, étagères et archives—accessibles directement depuis ce studio web ou dans l’application mobile."
      },
      {
        q: "Puis-je générer des codes aussi bien depuis le site web que depuis l’application ?",
        a: "Oui. Vous pouvez configurer, prévisualiser, payer et télécharger vos PDF A4 ou A5 directement dans le Studio d’Étiquettes Interactif sur cette page, ou les créer depuis l’application mobile iOS/Android via Accueil → Générateur."
      },
      {
        q: "Puis-je imprimer mes étiquettes moi-même au format A4 ou A5 ?",
        a: "Oui. Choisissez le format A4 (12 étiquettes/page, grille 3 × 4) ou A5 (6 étiquettes/page, grille 2 × 3), jusqu’à 5 pages par commande. Imprimez à l’échelle 100 % sur papier autocollant ou papier ordinaire (avec repères de coupe en option)."
      },
      {
        q: "Puis-je générer des codes-barres ainsi que des codes QR en couleur ?",
        a: "Oui. Le studio web comme l’application prennent en charge les Codes QR (avec nuancier ou code Hex personnalisé) ainsi que les Codes-barres Code-128 en noir pur (#000000) pour une lecture optimale."
      },
      {
        q: "Les étiquettes générées sont-elles sécurisées pour QrSortable ?",
        a: "Oui. L’aperçu affiche uniquement un code exemple non scannable ; après validation, vos planches contiennent des codes chiffrés uniques pensés pour protéger l’accès à votre inventaire QrSortable."
      },
      {
        q: "Puis-je utiliser des étiquettes QR générées pour les cartons de déménagement ?",
        a: "Oui. Ajoutez un Tag optionnel (Cuisine, Chambre, Fragile) et une couleur QR par pièce directement avant d’emballer, puis notez le contenu et les photos de chaque carton dans l’application."
      },
      {
        q: "Puis-je utiliser des étiquettes QR générées pour le stockage à long terme ?",
        a: "Oui. Elles conviennent très bien aux placards, greniers et pièces de rangement. Pour les caves humides ou manipulations intensives, nos packs d’étiquettes physiques premium résistants à l’eau seront encore plus durables."
      },
      {
        q: "Puis-je télécharger à nouveau mon PDF généré plus tard ?",
        a: "Oui. Sur le web, vos commandes restent accessibles sur le même navigateur sous « Vos commandes PDF débloquées » (avec boutons Télécharger et Ouvrir / Imprimer ainsi que l’option repères de coupe), et sur mobile via Menu → Commandes → Télécharger."
      },
      {
        q: "Quelle est la différence entre les étiquettes imprimées et les packs d’étiquettes premium ?",
        a: "Les PDF imprimables permettent de démarrer tout de suite chez vous ou au bureau en A4 ou A5. Les packs physiques premium sont livrés prêts à coller sur un support résistant aux déchirures et à l’humidité."
      },
      {
        q: "Quelles informations puis-je stocker après avoir scanné une étiquette générée ?",
        a: "Vous pouvez enregistrer l’emplacement, la catégorie, la liste des articles, des remarques et des photos dans QrSortable pour rendre chaque boîte instantanément consultable."
      },
      {
        q: "Comment dois-je appliquer les étiquettes QR pour une numérisation fiable ?",
        a: "Imprimez à 100 %, découpez proprement si besoin et appliquez les étiquettes sur des surfaces propres, sèches et planes. Évitez plis, coins, coutures et reflets, et gardez le téléphone stable sous un bon éclairage."
      },
      {
        q: "Puis-je utiliser des étiquettes générées pour les archives de bureau ?",
        a: "Oui. Les étiquettes QR ou Code-128 conviennent parfaitement aux boîtes de documents, dossiers d’archives, fournitures et matériels de sauvegarde."
      },
      {
        q: "Puis-je utiliser des étiquettes générées pour les salles de classe ou les ateliers ?",
        a: "Oui. Enseignants et ateliers peuvent classer bacs de fournitures, livres, outils, tiroirs de pièces et matériel créatif par couleur et par tag."
      },
      {
        q: "Dois-je écrire chaque article à l’extérieur de la boîte ?",
        a: "Non. Gardez une étiquette propre avec un court Tag optionnel et gérez tout le détail des articles et photos dans QrSortable."
      }
    ],
    finalCtaTitle: "Générez des Étiquettes QR Imprimables et Commencez à Organiser Aujourd'hui",
    finalCtaDesc1: "Utilisez le Studio d’Étiquettes Interactif sur le web ou l’application mobile QrSortable pour créer vos PDF chiffrés A4 ou A5 de QR codes et codes-barres—imprimez, scannez et retrouvez vos affaires en quelques secondes.",
    finalCtaDesc2: "Générez sur le web ou l’app, imprimez, scannez vos boîtes et organisez votre stockage avec QrSortable."
  },
  ES: {
    seoTitle: "Hojas de Etiquetas PDF Instantáneas (QR y Barras) A4 y A5 | QrSortable",
    seoDesc: "Crea hojas de etiquetas PDF instantáneas (QR y códigos de barras) en A4 (3 € · 12 códigos) o A5 (2 € · 6 códigos). Color Hex, tags, 0 € de envío y descarga inmediata.",
    seoKeywords: "Hojas etiquetas PDF instantáneas, etiquetas QR imprimibles A4 A5, generador códigos de barras Code-128 PDF, etiquetas cajas mudanza almacenamiento, QrSortable",
    backToHome: "Volver al Inicio",
    home: "Inicio",
    features: "Funcionalidades",
    pageTitleBreadcrumb: "Hojas de Etiquetas PDF Instantáneas",
    badge: "Etiquetas PDF Instantáneas · Web & App",
    heroTitle: "Hojas de Etiquetas PDF Instantáneas (QR y Códigos de Barras)",
    heroSubtitle: "Diseñe y descargue hojas PDF cifradas A4 (12 etiquetas, 3 €) o A5 (6 etiquetas, 2 €) desde nuestro Estudio Interactivo o la app QrSortable. Imprima en casa con 0 € de envío y conecte cada caja con su inventario digital.",
    heroDescription: "¿Necesita etiquetas hoy mismo? Configure archivos PDF A4 o A5 con códigos QR o Code-128, color Hex, tag y líneas de corte desde la web o la app.",
    specsTitle: "Hojas de Etiquetas PDF — Especificaciones clave",
    specsA4Label: "Formato A4",
    specsA4Value: "12 etiquetas / página (cuadrícula 3 × 4 · 70 × 67,7 mm) · 3,00 € / pág.",
    specsA5Label: "Formato A5",
    specsA5Value: "6 etiquetas / página (cuadrícula 2 × 3 · 74 × 66,3 mm) · 2,00 € / pág.",
    specsCodesLabel: "Códigos compatibles",
    specsCodesValue: "Códigos QR en color Hex (#RRGGBB) y barras Code-128 en negro",
    specsDeliveryLabel: "Envío e impresión",
    specsDeliveryValue: "0,00 € de envío · Descarga PDF automática · Imprimir al 100 %",
    ctaGetLabels: "Obtener Etiquetas Inteligentes",
    ctaExploreMultilingual: "Explorar la aplicación multilingüe",
    whatIsTitle: "¿Qué es un Generador de Códigos QR para Almacenamiento?",
    whatIsDesc1: "Un Generador de Códigos QR para Almacenamiento crea etiquetas cifradas y compatibles con la app de códigos QR o códigos de barras Code-128 imprimibles para contenedores físicos. Cada etiqueta generada desde la web o la app QrSortable se vincula de forma segura a un registro digital con ubicación, categoría, artículos, notas y fotos.",
    whatIsDesc2: "En lugar de escribir largas listas en cada caja, imprima una etiqueta clara, péguela al contenedor, escanéela con QrSortable y cree un inventario digital para trasteros, garajes, mudanzas, archivos de oficina, aulas y talleres.",
    whatIsDesc3: "El generador de QrSortable funciona tanto aquí en su navegador web como en la aplicación para iOS y Android, ideal para empezar al instante con su impresora o mientras recibe paquetes físicos.",
    howItWorksTitle: "Cómo funciona el generador de códigos QR de QrSortable",
    step1Title: "Elegir Código QR o de Barras (Web o App)",
    step1Desc: "Use el Estudio Interactivo de Etiquetas de arriba en la web o abra QrSortable en su móvil y vaya a Inicio → Generador. Elija códigos QR con color personalizado o códigos de barras Code-128 negros de alto contraste.",
    step2Title: "Configurar Formato, Páginas, Color y Tag",
    step2Desc: "Elija formato A4 (12 códigos/página, cuadrícula 3 × 4) o A5 (6 códigos/página, cuadrícula 2 × 3) y de 1 a 5 páginas por pedido. Opcionalmente añada un Tag (ej. Cocina, Frágil, Archivo), elija un color Hex para su QR, active líneas de corte sutiles para papel normal y revise la vista previa en vivo.",
    step3Title: "Desbloquear y Descargar el PDF listo para imprimir",
    step3Desc: "Complete el pago rápido (0,00 € de envío, sin dirección física para hojas PDF digitales). Al instante se desbloquean sus códigos cifrados únicos y su PDF A4 o A5 se descarga automáticamente, listo para imprimir al 100 % en papel normal o adhesivo.",
    step4Title: "Imprimir, Aplicar y Escanear",
    step4Desc: "Imprima a tamaño real (100 %), aplique las etiquetas sobre superficies limpias, secas y planas, y escanéelas con QrSortable. Cada código cifrado abre un registro digital para guardar ubicación, categoría, nombres de artículos, comentarios y fotos.",
    step5Title: "Volver a descargar cuando quiera (Web o App)",
    step5Desc: "¿Necesita reimprimir? Vuelva a descargar o abrir/imprimir su PDF directamente en esta página en «Tus pedidos de PDF desbloqueados» (con opción de líneas de corte), o abra Menú → Pedidos → Descargar en la app móvil QrSortable.",
    whyTitle: "¿Por qué usar un Generador de Códigos QR para Almacenamiento?",
    whySubtitle: "Crear hojas personalizadas desde el estudio web o la app con su propia impresora le ofrece un método inmediato, seguro y económico.",
    whyItem1Title: "Comience a organizar de inmediato",
    whyItem1Desc: "Genere hojas PDF A4 o A5 en segundos desde la web o la app sin esperar envíos. Su PDF se descarga automáticamente tras el pago para empezar a etiquetar hoy mismo.",
    whyItem2Title: "Organice cada proyecto con color y etiquetas",
    whyItem2Desc: "Asigne colores Hex personalizados a sus QR y Tags opcionales para cajas de mudanza, contenedores de plástico, carpetas de oficina, estantes, aulas y cajones de taller.",
    whyItem3Title: "Etiquetas protegidas vinculadas al inventario digital",
    whyItem3Desc: "Cada etiqueta QR o código de barras Code-128 impresa utiliza códigos cifrados compatibles con QrSortable, protegiendo sus registros digitales con ubicación, categoría, artículos, notas y fotos.",
    whyItem4Title: "Imprima la cantidad exacta en A4 o A5",
    whyItem4Desc: "Elija hojas compactas A5 (6 etiquetas/página) o estándar A4 (12 etiquetas/página), de 1 a 5 páginas por pedido según el tamaño de su proyecto.",
    whyItem5Title: "Vuelva a imprimir etiquetas cuando sea necesario",
    whyItem5Desc: "Si una etiqueta se daña o se pierde, vuelva a descargar el PDF desbloqueado desde esta misma página o desde Menú → Pedidos → Descargar en la app.",
    examplesTitle: "Ejemplos Reales del Generador de Códigos QR para Almacenamiento",
    ex1Title: "Imprimir etiquetas para cajas de mudanza antes de empacar",
    ex1Desc: "Una familia que prepara una mudanza necesita etiquetas de inmediato. Abre el Estudio Interactivo en la web o la app QrSortable, genera una hoja A4 o A5 de QR con color y tag «Cocina» o «Dormitorio», imprime el PDF y registra artículos y fotos.",
    ex2Title: "Etiquetado de cajas de almacenamiento por habitación",
    ex2Desc: "Al empacar cocina, dormitorio, garaje y sótano, asignar un color QR por habitación permite identificar cada caja a simple vista y consultar su contenido escaneando sin abrir varias cajas.",
    ex3Title: "Organización de contenedores de plástico en un garaje",
    ex3Desc: "Un propietario almacena decoraciones navideñas, ropa de temporada, cables, herramientas y repuestos en contenedores de plástico. Las etiquetas QR generadas facilitan mantener un registro digital actualizado para cada contenedor.",
    ex4Title: "Organización de cajas de archivo de oficina",
    ex4Desc: "Un administrador de oficina organiza documentos archivados, carpetas, equipos de respaldo y suministros con etiquetas imprimibles QR o Code-128 vinculadas a registros claros de QrSortable.",
    ex5Title: "Reimpresión de una etiqueta dañada",
    ex5Desc: "Si una etiqueta se daña durante la mudanza, el usuario vuelve a esta página en su navegador para descargarla desde «Tus pedidos de PDF desbloqueados» (con líneas de corte si lo desea) o abre Menú → Pedidos → Descargar en la app.",
    ex6Title: "Suministros para aulas y talleres",
    ex6Desc: "Un profesor o taller organiza libros, materiales de arte, herramientas y piezas con etiquetas QR o de barras legibles en lugar de notas escritas a mano.",
    whoTitle: "¿Quién puede utilizar esta función?",
    who1Title: "Propietarios e Inquilinos",
    who1Desc: "Cree etiquetas imprimibles A4 o A5 desde la web o la app para armarios, garajes, sótanos, áticos y cajas de temporada.",
    who2Title: "Personas que se mudan",
    who2Desc: "Genere etiquetas QR con colores y tags de habitación antes de empacar y conecte cada caja con nombres de artículos, notas y fotos.",
    who3Title: "Administradores de Oficina",
    who3Desc: "Etiquete cajas de archivo, carpetas, gabinetes y equipos de respaldo con códigos de barras Code-128 o QR de colores.",
    who4Title: "Usuarios de Pequeñas Empresas",
    who4Desc: "Cree desde el navegador o móvil etiquetas para muestras, repuestos, cajas de inventario y estantes.",
    who5Title: "Maestros y Aulas",
    who5Desc: "Organice libros, materiales educativos, suministros de arte, herramientas y contenedores del aula con etiquetas QR imprimibles.",
    who6Title: "Talleres y Aficionados",
    who6Desc: "Etiquete cajones, cajas, contenedores de piezas, herramientas y colecciones con etiquetas QR o de barras.",
    vsTitle: "Etiquetas QR Imprimibles vs. Paquetes de Etiquetas Físicas Premium",
    vsDesc1: "Las etiquetas imprimibles son perfectas cuando desea empezar de inmediato desde el estudio web o la app con su propia impresora. Los paquetes físicos premium son ideales cuando busca etiquetas listas para usar de máxima resistencia.",
    vsDesc2: "Ambas opciones cumplen el mismo objetivo: conectar una etiqueta segura a un registro digital de QrSortable.",
    vsCol1Title: "Etiquetas QR y de Barras Imprimibles",
    vsCol1Bullet1: "Inicio inmediato desde navegador web o app móvil",
    vsCol1Bullet2: "Disponibles en formato PDF A4 (12/pág.) y A5 (6/pág.)",
    vsCol1Bullet3: "Colores Hex QR, tags opcionales y líneas de corte",
    vsCol1Bullet4: "Imprima en papel normal o hojas adhesivas A4/A5",
    vsCol1Bullet5: "Puede requerir protección ante humedad o roce intenso",
    vsCol1Bullet6: "Redescargable en la web (mismo dispositivo) o en la app",
    vsCol2Title: "Paquetes de Etiquetas Físicas Premium",
    vsCol2Bullet1: "Listas para usar sin necesidad de impresión en casa",
    vsCol2Bullet2: "Diseñadas para una mayor durabilidad",
    vsCol2Bullet3: "Mejores para almacenamiento a largo plazo y manipulación repetida",
    vsCol2Bullet4: "Útiles para garajes, sótanos, salas de almacenamiento y espacios de trabajo de gran actividad",
    vsCol2Bullet5: "Una buena opción cuando las etiquetas deben soportar un uso más frecuente",
    vsCol2Bullet6: "Fabricadas con materiales de alta calidad, resistentes al desgarro y al agua",
    bestUsesTitle: "Mejores Usos para el Generador de Códigos QR para Almacenamiento",
    bestUsesIntro: "Utilice el Generador de Códigos QR para Almacenamiento de QrSortable para:",
    bestUsesList: [
      "Cajas de almacenamiento",
      "Cajas de mudanza",
      "Contenedores de plástico",
      "Almacenamiento en garaje",
      "Almacenamiento en sótano",
      "Almacenamiento en ático",
      "Organización de armarios",
      "Archivos de oficina",
      "Cajas de documentos",
      "Suministros para el aula",
      "Cajones de taller",
      "Materiales para pasatiempos",
      "Piezas de repuesto",
      "Libros y registros",
      "Ropa de temporada",
      "Decoraciones navideñas",
      "Almacenamiento de pequeñas empresas",
      "Muestras de productos",
      "Estantes de almacenamiento",
      "Etiquetas temporales",
      "Etiquetas reimpresas",
      "Cajas de cocina",
      "Cajas de dormitorio",
      "Cajas de artículos frágiles",
      "Cajas de electrónica",
      "Cajas de donaciones",
      "Cajas de almacenamiento a largo plazo"
    ],
    tipsTitle: "Consejos para Imprimir y Aplicar Etiquetas QR de Almacenamiento",
    tipsIntro: "Para una impresión nítida, escaneo rápido y uso duradero:",
    tipsList: [
      "Imprima siempre los PDF al 100 % (Tamaño real) sin escalar para alinear la cuadrícula A4/A5.",
      "Active las líneas de corte sutiles si imprime en papel normal y desea recortarlas fácilmente.",
      "Pruebe primero en papel común antes de imprimir en hojas adhesivas A4 o A5.",
      "Coloque las etiquetas sobre superficies limpias, secas y planas.",
      "Evite esquinas, pliegues, costuras o zonas curvas donde el código pueda distorsionarse.",
      "Reduzca el brillo al escanear contenedores plásticos o etiquetas brillantes.",
      "Utilice buena iluminación al escanear.",
      "Mantenga el teléfono firme mientras escanea.",
      "Reemplace etiquetas dañadas reimprimiendo desde su pedido desbloqueado.",
      "Actualice el registro de la caja si se reemplaza una etiqueta."
    ],
    practicalWayTitle: "Una forma práctica de crear un inventario de almacenamiento digital",
    practicalWayDesc1: "El Generador de Códigos QR para Almacenamiento de QrSortable va más allá de crear imágenes. Generadas en la web o en la app, las etiquetas emplean códigos cifrados protegidos para QrSortable que conectan cada caja con un inventario buscable con artículos, notas y fotos.",
    practicalWayDesc2: "Esto lo convierte en una herramienta práctica cuando las cajas cambian de lugar, se codifican habitaciones por color o necesita reimprimir una etiqueta al instante.",
    workflowTitle: "Funciona con el flujo de trabajo de inventario de QrSortable",
    workflowDesc1: "Después de imprimir y aplicar una etiqueta QR o Code-128 generada, escanéela con la app QrSortable para crear o abrir el registro de caja y añadir ubicación, categoría, artículos, comentarios y fotos.",
    workflowDesc2: "Más tarde, busque en todo su inventario por nombre de artículo, comentario, tag, ubicación o categoría.",
    faqTitle: "Preguntas Frecuentes",
    faqItems: [
      {
        q: "¿Qué es un Generador de Códigos QR para Almacenamiento?",
        a: "Un Generador de Códigos QR para Almacenamiento crea hojas imprimibles con códigos QR o códigos de barras Code-128 cifrados y compatibles con QrSortable para cajas, mudanzas, contenedores, estantes y archivos—directamente desde el estudio web o la app móvil."
      },
      {
        q: "¿Puedo generar códigos desde la web y también desde la aplicación móvil?",
        a: "Sí. Puede diseñar, previsualizar, pagar y descargar sus PDF A4 o A5 directamente en el Estudio Interactivo de Etiquetas de esta página, o crearlos en la app QrSortable para iOS/Android desde Inicio → Generador."
      },
      {
        q: "¿Puedo imprimir las etiquetas yo mismo en formato A4 o A5?",
        a: "Sí. Elija A4 (12 códigos por página, cuadrícula 3 × 4) o A5 (6 códigos por página, cuadrícula 2 × 3), hasta 5 páginas por pedido. Imprima al 100 % (tamaño real) en papel adhesivo o papel normal con líneas de corte opcionales."
      },
      {
        q: "¿Puedo generar códigos de barras además de códigos QR en color?",
        a: "Sí. Tanto el estudio web como la app admiten códigos QR (con paleta o cualquier color Hex para clasificar por habitación/categoría) y códigos de barras Code-128 en negro puro (#000000) para un escaneo universal."
      },
      {
        q: "¿Las etiquetas generadas son seguras para QrSortable?",
        a: "Sí. La vista previa muestra solo un código de muestra no escaneable; tras el pago se desbloquean códigos cifrados únicos diseñados para proteger sus registros dentro de QrSortable."
      },
      {
        q: "¿Puedo utilizar etiquetas QR generadas para cajas de mudanza?",
        a: "Sí. Añada Tags opcionales (Cocina, Dormitorio, Frágil) y colores QR por habitación antes de empacar, y guarde la lista completa y fotos dentro de la app."
      },
      {
        q: "¿Puedo utilizar etiquetas QR generadas para almacenamiento a largo plazo?",
        a: "Sí. Las etiquetas imprimibles funcionan muy bien en armarios, áticos y cuartos de almacenamiento. Para garajes húmedos o uso rudo, nuestros paquetes físicos premium resistentes al agua ofrecen mayor durabilidad."
      },
      {
        q: "¿Puedo volver a descargar mi PDF generado más tarde?",
        a: "Sí. En la web sus pedidos quedan guardados en este navegador dentro de «Tus pedidos de PDF desbloqueados» (con opciones Descargar, Abrir / Imprimir y líneas de corte), y en la app desde Menú → Pedidos → Descargar."
      },
      {
        q: "¿Cuál es la diferencia entre las etiquetas impresas y los paquetes de etiquetas premium?",
        a: "Los PDF imprimibles le permiten empezar al momento en casa u oficina en formato A4 o A5. Los paquetes físicos premium vienen preimpresos en material resistente al agua y al desgarro."
      },
      {
        q: "¿Qué información puedo almacenar después de escanear una etiqueta generada?",
        a: "Puede guardar ubicación, categoría, nombres de artículos, comentarios y fotos dentro de QrSortable para convertir cada etiqueta en un registro digital buscable."
      },
      {
        q: "¿Cómo debo aplicar las etiquetas QR para un escaneo confiable?",
        a: "Imprima al 100 %, recorte con cuidado si usa papel normal y colóquelas sobre superficies limpias, secas y planas. Evite pliegues, esquinas, costuras y reflejos, manteniendo el teléfono firme con buena luz."
      },
      {
        q: "¿Puedo utilizar etiquetas generadas para archivos de oficina?",
        a: "Sí. Las etiquetas QR o Code-128 son ideales para cajas de documentos, carpetas de archivo, suministros de oficina y equipos de respaldo."
      },
      {
        q: "¿Puedo utilizar etiquetas generadas para aulas o talleres?",
        a: "Sí. Maestros y talleres pueden etiquetar por color y tag contenedores, libros, herramientas, cajones de piezas y material creativo."
      },
      {
        q: "¿Necesito escribir cada artículo en el exterior de la caja?",
        a: "No. Mantenga una etiqueta limpia con un breve Tag opcional y gestione toda la lista y fotos cómodamente dentro de QrSortable."
      }
    ],
    finalCtaTitle: "Genere Etiquetas QR Imprimibles y Comience a Organizar Hoy",
    finalCtaDesc1: "Use el Estudio Interactivo de Etiquetas en la web o la app QrSortable para crear archivos PDF cifrados A4 o A5 de QR y códigos de barras—imprima, escanee y encuentre cualquier artículo en segundos.",
    finalCtaDesc2: "Genere en web o app, imprima etiquetas, escanee cajas y organice con QrSortable."
  }
};

export const QrCodeGeneratorStorage: React.FC = () => {
  const { language, localizePath } = useTranslation();
  const location = useLocation();
  const { reviews } = useProductFeedback(DIGITAL_PDF_FEEDBACK_PRODUCT_NAME);
  const avgRating = reviews.length > 0 ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length : 0;
  const langKey = (['EN', 'DE', 'FR', 'ES'].includes(language) ? language : 'EN') as 'EN' | 'DE' | 'FR' | 'ES';
  const genT = GENERATOR_STUDIO_TRANSLATIONS[langKey];

  useEffect(() => {
    if (location.hash === '#reviews') {
      const el = document.getElementById('reviews');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    }
  }, [location.hash]);

  const tPage = (key: string): any => {
    return TRANSLATIONS_PAGE[langKey][key] || TRANSLATIONS_PAGE['EN'][key] || key;
  };

  const faqItems = tPage('faqItems') as Array<{q: string, a: string}>;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": tPage('home'),
        "item": "https://www.qrsortable.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": tPage('features'),
        "item": "https://www.qrsortable.com/#features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tPage('pageTitleBreadcrumb'),
        "item": "https://www.qrsortable.com/features/qr-code-generator-storage"
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QrSortable Label Studio",
    "url": "https://www.qrsortable.com/features/qr-code-generator-storage",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "ProductivityApplication",
    "description": tPage('seoDesc'),
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "2.00",
      "highPrice": "15.00",
      "priceCurrency": "EUR"
    }
  };

  const digitalShippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": { "@type": "MonetaryAmount", "value": "0.00", "currency": "EUR" },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" },
      "transitTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" }
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": DIGITAL_PDF_FEEDBACK_PRODUCT_NAME,
    "sku": "QRS-PDF-LABELS",
    "category": "Office Supplies > Labels & Tags > Printable Label Sheets",
    "description": tPage('seoDesc'),
    "image": "https://www.qrsortable.com/images/feature_codegenerated.png",
    "url": "https://www.qrsortable.com/features/qr-code-generator-storage",
    "brand": { "@type": "Brand", "name": "QrSortable" },
    ...(reviews.length > 0 ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": avgRating.toFixed(1),
        "reviewCount": reviews.length
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
          "shippingDetails": digitalShippingDetails
        },
        {
          "@type": "Offer",
          "name": "A4 PDF Label Sheet (12 labels/page)",
          "sku": "QRS-PDF-A4",
          "price": "3.00",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.qrsortable.com/features/qr-code-generator-storage?format=A4#generator-studio",
          "shippingDetails": digitalShippingDetails
        }
      ]
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": tPage('seoTitle'),
    "description": tPage('seoDesc'),
    "url": "https://www.qrsortable.com/features/qr-code-generator-storage",
    "inLanguage": language.toLowerCase(),
    "isPartOf": { "@type": "WebSite", "name": "QrSortable", "url": "https://www.qrsortable.com/" },
    "mainEntity": { "@type": "Product", "name": DIGITAL_PDF_FEEDBACK_PRODUCT_NAME },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#studio-hero-title", "#studio-summary", "#studio-specs", "#faq-section"]
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": tPage('howItWorksTitle'),
    "description": tPage('seoDesc'),
    "step": [
      { "@type": "HowToStep", "position": 1, "name": tPage('step1Title'), "text": tPage('step1Desc') },
      { "@type": "HowToStep", "position": 2, "name": tPage('step2Title'), "text": tPage('step2Desc') },
      { "@type": "HowToStep", "position": 3, "name": tPage('step3Title'), "text": tPage('step3Desc') },
      { "@type": "HowToStep", "position": 4, "name": tPage('step4Title'), "text": tPage('step4Desc') },
      { "@type": "HowToStep", "position": 5, "name": tPage('step5Title'), "text": tPage('step5Desc') }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
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
        <title>{tPage('seoTitle')}</title>
        <meta name="description" content={tPage('seoDesc')} />
        <meta name="keywords" content={tPage('seoKeywords')} />
        <link rel="canonical" href={`https://www.qrsortable.com/features/qr-code-generator-storage${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/features/qr-code-generator-storage" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/features/qr-code-generator-storage" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/features/qr-code-generator-storage?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/features/qr-code-generator-storage?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/features/qr-code-generator-storage?lang=es" />
        <link rel="alternate" type="text/markdown" title="AI & Markdown Version" href="https://www.qrsortable.com/features/qr-code-generator-storage.md" />
        <meta property="og:title" content={tPage('seoTitle')} />
        <meta property="og:description" content={tPage('seoDesc')} />
        <meta property="og:image" content="https://www.qrsortable.com/images/feature_codegenerated.png" />
        <meta property="og:site_name" content="QrSortable" />
        <meta property="og:locale" content={language === 'DE' ? 'de_DE' : language === 'FR' ? 'fr_FR' : language === 'ES' ? 'es_ES' : 'en_US'} />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="de_DE" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:url" content={`https://www.qrsortable.com/features/qr-code-generator-storage${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tPage('seoTitle')} />
        <meta name="twitter:description" content={tPage('seoDesc')} />
        <meta name="twitter:image" content="https://www.qrsortable.com/images/feature_codegenerated.png" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbsSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
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
              <ArrowLeft className="h-4 w-4 transition-transform group-hover/back:-translate-x-1" /> {tPage('backToHome')}
            </Link>

            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-8 font-bold" aria-label="Breadcrumb">
              <Link to={localizePath('/')} className="hover:text-[#FDB623] transition-colors">{tPage('home')}</Link>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <span className="text-gray-400">{tPage('features')}</span>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <span className="text-[#FDB623]">{tPage('pageTitleBreadcrumb')}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-4 animate-fadeIn">
                  <span className="bg-[#FDB623] text-black px-4 py-1.5 rounded-full text-sm font-black tracking-wider uppercase inline-block">
                    {tPage('badge')}
                  </span>
                  <a href="#reviews" className="inline-flex items-center hover:opacity-85 transition-opacity">
                    <StarRating rating={avgRating} showLabel count={reviews.length} size={20} dark />
                  </a>
                </div>
                <h1 id="studio-hero-title" className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-fadeIn">
                  {tPage('heroTitle')}
                </h1>
                <p id="studio-summary" className="text-xl text-gray-300 leading-relaxed font-bold mb-8 animate-fadeIn">
                  {tPage('heroSubtitle')}
                </p>
                <p className="text-base text-gray-400 mb-8 leading-relaxed animate-fadeIn">
                  {tPage('heroDescription')}
                </p>
                <div className="flex flex-wrap gap-4 animate-fadeIn">
                  <a 
                    href="#generator-studio"
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                  >
                    {genT.studioBadge} <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] hover:bg-gray-700 transition-all border border-gray-700 inline-flex items-center gap-2 text-center"
                  >
                    {tPage('ctaGetLabels')}
                  </Link>
                  <Link 
                    to={localizePath('/features/multilingual-inventory-app')} 
                    className="bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] hover:bg-gray-700 transition-all border border-gray-700 inline-block text-center"
                  >
                    {tPage('ctaExploreMultilingual')}
                  </Link>
                </div>
              </div>
              <div className="relative animate-fadeIn">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center p-8">
                  <QrCode className="h-40 w-40 text-[#FDB623] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Label Studio */}
        <QrCodeGeneratorStudio />

        {/* Customer Reviews & Feedback Section */}
        <section id="reviews" className="scroll-mt-24 bg-white">
          <FeedbackSection product={DIGITAL_PDF_FEEDBACK_PRODUCT} displayName={genT.promoTitle} compact />
        </section>

        {/* Informative Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fadeIn">
          <div className="prose prose-xl max-w-none text-gray-700">

            {/* Quick Specifications Block for Search & AI Engines */}
            <section id="studio-specs" className="mb-14 bg-white p-6 md:p-8 rounded-[2rem] border border-gray-200/80 shadow-md">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">{tPage('specsTitle')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="text-xs font-black uppercase tracking-wider text-gray-500 mb-1">{tPage('specsA4Label')}</div>
                  <div className="font-bold text-gray-900">{tPage('specsA4Value')}</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="text-xs font-black uppercase tracking-wider text-gray-500 mb-1">{tPage('specsA5Label')}</div>
                  <div className="font-bold text-gray-900">{tPage('specsA5Value')}</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="text-xs font-black uppercase tracking-wider text-gray-500 mb-1">{tPage('specsCodesLabel')}</div>
                  <div className="font-bold text-gray-900">{tPage('specsCodesValue')}</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="text-xs font-black uppercase tracking-wider text-gray-500 mb-1">{tPage('specsDeliveryLabel')}</div>
                  <div className="font-bold text-gray-900">{tPage('specsDeliveryValue')}</div>
                </div>
              </div>
            </section>
            
            {/* Section 1: What Is a QR Code Generator for Storage? */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('whatIsTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6 font-bold text-gray-800">
                {tPage('whatIsDesc1')}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('whatIsDesc2')}
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {tPage('whatIsDesc3')}
              </p>
            </section>

            {/* Section 2: How QrSortable's QR Code Generator Works */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="sec-how-works">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('howItWorksTitle')}</h2>
              
              {/* Image positioned right below the heading, showing full image */}
              <div className="mb-12 flex justify-center">
                <div className="relative max-w-4xl w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FDB623] to-[#FDB623]/30 rounded-[2.5rem] blur opacity-15"></div>
                  <img 
                    src="/images/feature_codegenerated.png" 
                    alt={tPage('howItWorksTitle')} 
                    className="relative rounded-[2.5rem] border-4 border-gray-900 shadow-2xl w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Steps positioned underneath the image in a vertical stack */}
              <div className="space-y-8">
                <div className="flex gap-6 items-start" id="step-1">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tPage('step1Title')}</h3>
                    <p className="text-lg text-gray-600">{tPage('step1Desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="step-2">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tPage('step2Title')}</h3>
                    <p className="text-lg text-gray-600">{tPage('step2Desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="step-3">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tPage('step3Title')}</h3>
                    <p className="text-lg text-gray-600">{tPage('step3Desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="step-4">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tPage('step4Title')}</h3>
                    <p className="text-lg text-gray-600">{tPage('step4Desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="step-5">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">5</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tPage('step5Title')}</h3>
                    <p className="text-lg text-gray-600">{tPage('step5Desc')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Why Use a QR Code Generator for Storage? */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('whyTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('whySubtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="why-use-benefits">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><Printer className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem1Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem1Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><Palette className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem2Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem2Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><Laptop className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem3Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem3Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><CheckCircle2 className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem4Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem4Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 md:col-span-2">
                  <div className="bg-yellow-100 p-2 rounded-xl text-yellow-600 shrink-0"><RefreshCw className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem5Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem5Desc')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Real-Life Examples of QR Code Generator for Storage */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('examplesTitle')}</h2>
              <div className="space-y-6" id="real-life-examples">
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex1Title')}</h3>
                  <p className="text-gray-700">{tPage('ex1Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex2Title')}</h3>
                  <p className="text-gray-700">{tPage('ex2Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex3Title')}</h3>
                  <p className="text-gray-700">{tPage('ex3Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex4Title')}</h3>
                  <p className="text-gray-700">{tPage('ex4Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex5Title')}</h3>
                  <p className="text-gray-700">{tPage('ex5Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex6Title')}</h3>
                  <p className="text-gray-700">{tPage('ex6Desc')}</p>
                </div>
              </div>
            </section>

            {/* Section 5: Who Can Use This Feature? */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('whoTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg" id="who-can-use">
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who1Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who1Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who2Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who2Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who3Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who3Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who4Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who4Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who5Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who5Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who6Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who6Desc')}</p>
                </div>
              </div>
            </section>

            {/* Section 6: Printable QR Labels vs. Premium Physical Label Packs */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="printable-vs-premium">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('vsTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('vsDesc1')}
              </p>
              <p className="text-lg leading-relaxed mb-8">
                {tPage('vsDesc2')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="bg-red-50/50 border border-red-100 p-6 rounded-3xl">
                  <h3 className="font-black text-red-950 text-xl mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" /> {tPage('vsCol1Title')}
                  </h3>
                  <ul className="space-y-3 text-red-900/80 text-sm font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span> {tPage('vsCol1Bullet1')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span> {tPage('vsCol1Bullet2')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span> {tPage('vsCol1Bullet3')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span> {tPage('vsCol1Bullet4')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span> {tPage('vsCol1Bullet5')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span> {tPage('vsCol1Bullet6')}
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50/50 border border-green-100 p-6 rounded-3xl">
                  <h3 className="font-black text-green-950 text-xl mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" /> {tPage('vsCol2Title')}
                  </h3>
                  <ul className="space-y-3 text-green-900/80 text-sm font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span> {tPage('vsCol2Bullet1')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span> {tPage('vsCol2Bullet2')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span> {tPage('vsCol2Bullet3')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span> {tPage('vsCol2Bullet4')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span> {tPage('vsCol2Bullet5')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span> {tPage('vsCol2Bullet6')}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Best Uses for QR Code Generator for Storage */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('bestUsesTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('bestUsesIntro')}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {(tPage('bestUsesList') as string[]).map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 text-center text-sm font-bold text-gray-800 hover:border-[#FDB623] transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Tips for Printing and Applying Storage QR Labels */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('tipsTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('tipsIntro')}
              </p>
              <div className="space-y-4">
                {(tPage('tipsList') as string[]).map((tip, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#FDB623] text-black w-6 h-6 rounded-full flex items-center justify-center font-black text-sm shrink-0 mt-0.5">{idx + 1}</div>
                    <p className="text-base text-gray-600 font-bold leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: A Practical Way to Build a Digital Storage Inventory */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('practicalWayTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('practicalWayDesc1')}
              </p>
              <p className="text-lg leading-relaxed">
                {tPage('practicalWayDesc2')}
              </p>
            </section>

            {/* Section 10: Works with the QrSortable Inventory Workflow */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('workflowTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('workflowDesc1')}
              </p>
              <p className="text-lg leading-relaxed">
                {tPage('workflowDesc2')}
              </p>
            </section>

            {/* Frequently Asked Questions */}
            <section id="faq-section" className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <HelpCircle className="text-[#FDB623] h-8 w-8 animate-bounce" /> {tPage('faqTitle')}
              </h2>
              <div className="space-y-6">
                {faqItems.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
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
                <h2 className="text-3xl md:text-4xl font-black mb-4">{tPage('finalCtaTitle')}</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-bold">
                  {tPage('finalCtaDesc1')}
                </p>
                <p className="text-sm text-gray-400 mb-8 max-w-xl mx-auto font-medium">
                  {tPage('finalCtaDesc2')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all inline-block animate-bounce"
                  >
                    {tPage('ctaGetLabels')}
                  </Link>
                  <Link 
                    to={localizePath('/features/multilingual-inventory-app')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] transition-all inline-block border border-gray-700"
                  >
                    {tPage('ctaExploreMultilingual')}
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
