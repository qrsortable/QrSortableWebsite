import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackgroundDots } from '../../components/BackgroundDots';
import { useTranslation } from '../../contexts/LanguageContext';
import { Eye, ChevronRight, Package, Search, Camera, ArrowRight, ArrowLeft, ShieldCheck, HelpCircle, Smartphone, QrCode, Check, X } from 'lucide-react';

const TRANSLATIONS_PAGE: Record<string, any> = {
  EN: {
    seoTitle: "QR Code Inventory Preview App | See What’s Inside Every Box",
    seoDesc: "Scan a QR code and preview what is inside your storage boxes, moving boxes, or bins. QrSortable shows item photos, names, remarks, and box details on your phone.",
    backToHome: "Back to Home",
    home: "Home",
    features: "Features",
    pageTitleBreadcrumb: "QR Code Inventory Preview",
    badge: "Visual Organization",
    heroTitle: "QR Code Inventory Preview: See What’s Inside Every Box Before You Open It",
    heroSubtitle: "Scan a QR code or select a box in QrSortable to instantly preview the items stored inside. View box details, item photos, item names, and remarks directly on your phone.",
    heroDescription: "No more opening every box just to find one item. QrSortable turns ordinary storage boxes into smart, searchable inventory records that are easy to check from your phone.",
    ctaGetLabels: "Get Smart Labels Now",
    ctaExploreMoving: "Explore Moving Mode",
    whatIsTitle: "What Is a QR Code Inventory Preview?",
    whatIsDesc1: "A QR Code Inventory Preview is a simple way to connect a physical storage box with a digital inventory record. Instead of opening several boxes to find one item, you can scan the QR code label or select the box in QrSortable and immediately see what is stored inside.",
    whatIsDesc2: "QrSortable helps you organize storage boxes, moving boxes, plastic bins, closets, garages, basements, attics, and storage rooms by showing a clear preview of each box. The preview can include the box code, storage location, item list, item photos, item names, and remarks.",
    whatIsDesc3: "This makes it easier to manage household storage, moving boxes, seasonal items, hobby supplies, office materials, and small business storage.",
    howItWorksTitle: "How QR Code Inventory Preview Works in QrSortable",
    step1Title: "View All Available Boxes",
    step1Desc: "Open QrSortable to see a list of your available boxes. Each box can display a unique box code, storage location, and date details, making it easier to identify the right container before opening it.",
    step2Title: "Open the Selected Box Details",
    step2Desc: "Tap a box from the list to open its details. The box details screen shows the selected box code, location, storage area, and all items stored inside. For example, a box called GYC468 can show items such as Winter jacket, Kitchen items, and Books.",
    step3Title: "Preview Each Item Inside the Box",
    step3Desc: "Tap any item from the box list to open the item details. The item page can show a photo, item name, and remarks, so you can confirm exactly what is inside before searching through the physical box.",
    whyTitle: "Why Use QR Code Inventory Preview?",
    whySubtitle: "Organizing your storage spaces with digital previews provides a reliable and visual way to manage boxes and bins.",
    whyItem1Title: "Find Items Without Opening Every Box",
    whyItem1Desc: "Handwritten labels often say only “Kitchen”, “Clothes”, or “Storage”. QrSortable gives you a clearer view by showing the actual items inside each box, including item photos and notes.",
    whyItem2Title: "Make Moving and Unpacking Easier",
    whyItem2Desc: "During a move, many boxes look the same. Moving box QR code labels help you check what is inside each box and decide where it should go before unpacking.",
    whyItem3Title: "Create a Visual Home Inventory",
    whyItem3Desc: "Photos make storage easier to understand. With QrSortable, you can keep a visual record of stored items such as jackets, books, kitchen items, decorations, tools, spare parts, office supplies, and hobby materials.",
    whyItem4Title: "Organize Storage Across Multiple Locations",
    whyItem4Desc: "Whether your items are in a closet, basement, attic, garage, storage room, or office shelf, QrSortable helps you connect boxes with locations and item details.",
    whyItem5Title: "Handle Mixed Boxes More Clearly",
    whyItem5Desc: "Not every box contains only one category of items. One box may include clothes, books, cables, kitchen items, or small accessories. With a QR code inventory preview, you can save a more accurate item list without writing everything on the outside of the box.",
    examplesTitle: "Real-Life Examples of QR Code Inventory Preview",
    ex1Title: "Finding a Winter Jacket in Storage",
    ex1Desc: "A user stores several seasonal clothing boxes in a storage room. Instead of opening every box to find winter clothes, the user opens QrSortable, selects the box GYC468, and sees that the box contains a Winter jacket, Kitchen items, and Books. By tapping Winter jacket, the user can view the item photo, item name, and remarks before opening the box.",
    ex2Title: "Moving Boxes with Mixed Items",
    ex2Desc: "During a move, not every box contains items from only one room. One box may include clothes, books, cables, or small kitchen items. With QrSortable, the user can scan the QR code label and preview the mixed contents instead of relying on a vague handwritten label like “Misc” or “Kitchen”.",
    ex3Title: "Organizing Plastic Bins in a Garage",
    ex3Desc: "A garage may contain several similar plastic bins for decorations, tools, spare parts, and seasonal items. QrSortable helps users scan or select a box and view the contents on a phone, including photos and remarks. This makes it easier to find the right bin without pulling down every container.",
    ex4Title: "Checking Box Contents Before Unpacking",
    ex4Desc: "After moving, users often need one specific item before they are ready to unpack everything. With QR Code Inventory Preview, the user can scan boxes and check item lists first, then open only the box that contains the needed item.",
    ex5Title: "Small Business Storage",
    ex5Desc: "A small business can use QrSortable to organize office supplies, archived documents, product samples, spare parts, or storage shelves. Each box can have a QR code label connected to item photos, item names, remarks, and storage location.",
    whoTitle: "Who Can Use This Feature?",
    who1Title: "Homeowners and Renters",
    who1Desc: "Organize storage bins, seasonal clothing, decorations, household items, closet boxes, and long-term storage with easy QR code previews.",
    who2Title: "People Who Are Moving",
    who2Desc: "Label moving boxes with QR codes so each box can be checked quickly during packing, transport, and unpacking.",
    who3Title: "Families",
    who3Desc: "Make it easier for everyone at home to find items without asking where every box is stored.",
    who4Title: "Small Business Users",
    who4Desc: "Track office supplies, archived documents, product samples, spare parts, and storage shelves with a simple digital inventory system.",
    who5Title: "Collectors and Hobby Users",
    who5Desc: "Keep books, craft supplies, tools, accessories, collectibles, and hobby materials organized with photos and item notes.",
    vsTitle: "QR Code Inventory Preview vs. Traditional Box Labels",
    vsDesc1: "Traditional labels are useful, but they have limits. A short handwritten label may not show every item inside a box, and it can become outdated when items are added or removed.",
    vsDesc2: "QrSortable combines physical QR code storage labels with a digital inventory preview. This means you can keep the outside of the box simple while storing detailed information inside the app, including item names, photos, locations, and remarks.",
    vsCol1Title: "Traditional Box Labels",
    vsCol1Bullet1: "Easy to write but limited in space",
    vsCol1Bullet2: "Useful for simple categories only",
    vsCol1Bullet3: "Hard to update when contents shift",
    vsCol1Bullet4: "Usually no visual photo cues",
    vsCol1Bullet5: "Less helpful for complex mixed boxes",
    vsCol2Title: "QrSortable QR Code Inventory Preview",
    vsCol2Bullet1: "Connects each box to a digital record",
    vsCol2Bullet2: "Shows comprehensive item names, photos, and remarks",
    vsCol2Bullet3: "Helps users preview contents before opening boxes",
    vsCol2Bullet4: "Works well for moving boxes, storage bins, and long-term storage",
    vsCol2Bullet5: "Extremely easy to update when box contents change",
    vsCol2Bullet6: "Helpful when several containers look identical",
    bestUsesTitle: "Best Uses for QR Code Inventory Preview",
    bestUsesIntro: "Use QrSortable’s QR Code Inventory Preview for:",
    bestUsesList: [
      "Storage room organization",
      "Garage storage bins",
      "Basement boxes",
      "Attic storage",
      "Closet organization",
      "Moving boxes",
      "Kitchen storage",
      "Seasonal clothing",
      "Holiday decorations",
      "Books and documents",
      "Hobby supplies",
      "Spare parts",
      "Office storage",
      "Small business inventory",
      "Long-term storage",
      "Plastic storage containers",
      "Boxes with mixed items",
      "Family storage management"
    ],
    smarterWayTitle: "A Smarter Way to Scan Boxes and See Contents",
    smarterWayDesc1: "QrSortable is designed for people who want a practical storage box inventory app without making organization complicated. You can create a box, add items, include photos, write simple remarks, and use the QR code label to connect the physical box with its digital preview.",
    smarterWayDesc2: "This helps when boxes are stacked, stored away, sealed with tape, or placed in locations where opening every container is inconvenient.",
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      {
        q: "What is a QR Code Inventory Preview?",
        a: "A QR Code Inventory Preview is a digital view of what is stored inside a physical box, bin, or container. In QrSortable, users can select or scan a box and view the box details, item list, item photos, item names, and remarks."
      },
      {
        q: "Can I see what is inside a box without opening it?",
        a: "Yes. QrSortable helps users preview box contents on a phone before opening the physical box. This is useful when several boxes look similar or are stored in a closet, garage, basement, attic, or storage room."
      },
      {
        q: "Are QR code labels useful for moving boxes?",
        a: "Yes, especially when boxes contain mixed items or when users need both photos and written lists. Moving box QR code labels help users check what is inside each box before unpacking."
      },
      {
        q: "Do I need to write every item on the outside of the box?",
        a: "No. With QrSortable, the outside of the box can stay simple with a QR code label, while the detailed item list, photos, location, and remarks stay inside the digital inventory."
      },
      {
        q: "Can I add photos to my box inventory?",
        a: "Yes. QrSortable supports item photos, so users can visually identify what is stored inside the box. This is helpful for clothing, books, kitchen items, decorations, spare parts, tools, and hobby supplies."
      },
      {
        q: "Is QR Code Inventory Preview useful for long-term storage?",
        a: "Yes. Long-term storage is one of the best use cases because users often forget what is inside boxes after several months. A QR code preview helps users check contents without opening every container."
      },
      {
        q: "Can I use QR code inventory for storage bins and plastic containers?",
        a: "Yes. QrSortable can be used for cardboard boxes, plastic storage bins, closet boxes, garage containers, office storage, and other storage organizers."
      },
      {
        q: "What information should I add to a box preview?",
        a: "Useful information includes the box code, storage location, item names, item photos, item remarks, and quantity if needed. This keeps the inventory clear without overcrowding the physical label."
      },
      {
        q: "Is a QR code inventory system better than a spreadsheet?",
        a: "A spreadsheet can work, but QrSortable connects the box directly to its inventory through a QR code. This makes it easier to scan a box and immediately see the related items, photos, and notes."
      },
      {
        q: "Can QR Code Inventory Preview help when boxes have mixed items?",
        a: "Yes. This is one of the strongest use cases. When one box contains mixed clothing, kitchen items, books, cables, or small accessories, a photo-based QR inventory makes it easier to remember exactly what is inside."
      },
      {
        q: "Can QrSortable help me organize items in multiple locations?",
        a: "Yes. You can use QrSortable to organize boxes across closets, garages, basements, attics, storage rooms, offices, and other storage locations."
      },
      {
        q: "Can family members or helpers understand what is inside a box?",
        a: "Yes. The box preview is designed to make stored items easier to understand. Item names, photos, and remarks can help family members, helpers, or movers identify box contents more clearly."
      }
    ],
    finalCtaTitle: "Start Organizing Your Boxes with QR Code Inventory Preview",
    finalCtaDesc1: "QrSortable helps you turn ordinary storage boxes into smart, searchable inventory records. Scan a QR code, preview the contents, and find what you need without opening every box.",
    finalCtaDesc2: "Make every box easier to identify, preview, and organize with QrSortable."
  },
  DE: {
    seoTitle: "QR-Code-Inventarvorschau App | Sehen, was in jedem Karton ist",
    seoDesc: "Scannen Sie einen QR-Code und sehen Sie eine Vorschau auf das, was sich in Ihren Lagerboxen, Umzugskartons oder Behältern befindet. QrSortable zeigt Artikelfotos, Namen, Anmerkungen und Boxdetails auf Ihrem Telefon.",
    backToHome: "Zurück zur Startseite",
    home: "Startseite",
    features: "Funktionen",
    pageTitleBreadcrumb: "QR-Code-Inventarvorschau",
    badge: "Visuelle Organisation",
    heroTitle: "QR-Code-Inventarvorschau: Sehen Sie, was in jeder Box ist, bevor Sie sie öffnen",
    heroSubtitle: "Scannen Sie einen QR-Code oder wählen Sie eine Box in QrSortable aus, um sofort eine Vorschau der darin gelagerten Artikel zu sehen. Zeigen Sie Kistendetails, Artikelfotos, Artikelnamen und Anmerkungen direkt auf Ihrem Telefon an.",
    heroDescription: "Kein mühsames Öffnen jeder Kiste mehr, nur um einen einzigen Gegenstand zu finden. QrSortable verwandelt gewöhnliche Lagerboxen in intelligente, durchsuchbare Inventareinträge, die Sie ganz einfach von Ihrem Telefon aus überprüfen können.",
    ctaGetLabels: "Jetzt intelligente Etiketten sichern",
    ctaExploreMoving: "Umzugsmodus erkunden",
    whatIsTitle: "Was ist eine QR-Code-Inventarvorschau?",
    whatIsDesc1: "Eine QR-Code-Inventarvorschau ist eine einfache Möglichkeit, eine physische Lagerbox mit einem digitalen Inventareintrag zu verknüpfen. Anstatt mehrere Kisten zu öffnen, um einen Artikel zu finden, können Sie das QR-Code-Etikett scannen oder die Box in QrSortable auswählen und sofort sehen, was sich darin befindet.",
    whatIsDesc2: "QrSortable hilft Ihnen beim Organisieren von Lagerboxen, Umzugskartons, Plastikbehältern, Schränken, Garagen, Kellern, Dachböden und Lagerräumen, indem es eine klare Vorschau jeder Box anzeigt. Die Vorschau kann den Box-Code, den Lagerort, die Artikelliste, Artikelfotos, Artikelnamen und Anmerkungen enthalten.",
    whatIsDesc3: "Dies erleichtert die Verwaltung von Haushaltslagerung, Umzugskartons, saisonalen Artikeln, Hobbymaterialien, Büromaterial und Kleingewerbelagerung.",
    howItWorksTitle: "Wie die QR-Code-Inventarvorschau in QrSortable funktioniert",
    step1Title: "Alle verfügbaren Boxen anzeigen",
    step1Desc: "Öffnen Sie QrSortable, um eine Liste Ihrer verfügbaren Boxen anzuzeigen. Jede Box kann einen eindeutigen Box-Code, Lagerort und Datumsdetails anzeigen, was es einfacher macht, den richtigen Behälter vor dem Öffnen zu identifizieren.",
    step2Title: "Ausgewählte Box-Details öffnen",
    step2Desc: "Tippen Sie auf eine Box in der Liste, um deren Details zu öffnen. Der Bildschirm mit den Box-Details zeigt den ausgewählten Box-Code, den Ort, den Lagerbereich und alle darin gelagerten Artikel. Beispielsweise kann eine Box mit dem Namen GYC468 Artikel wie Winterjacke, Küchenutensilien und Bücher anzeigen.",
    step3Title: "Vorschau jedes Artikels in der Box",
    step3Desc: "Tippen Sie auf einen beliebigen Artikel in der Box-Liste, um die Artikeldetails zu öffnen. Die Artikelseite kann ein Foto, den Artikelnamen und Anmerkungen anzeigen, sodass Sie genau bestätigen können, was sich darin befindet, bevor Sie die physische Kiste durchsuchen.",
    whyTitle: "Warum die QR-Code-Inventarvorschau nutzen?",
    whySubtitle: "Das Organisieren Ihrer Lagerräume mit digitalen Vorschauen bietet eine zuverlässige und visuelle Möglichkeit, Boxen und Behälter zu verwalten.",
    whyItem1Title: "Artikel finden, ohne jede Box zu öffnen",
    whyItem1Desc: "Handschriftliche Etiketten sagen oft nur „Küche“, „Kleidung“ oder „Lager“. QrSortable bietet Ihnen eine klarere Sicht, indem es die tatsächlichen Artikel in jeder Box anzeigt, einschließlich Artikelfotos und Notizen.",
    whyItem2Title: "Umziehen und Auspacken erleichtern",
    whyItem2Desc: "Während eines Umzugs sehen viele Kisten gleich aus. QR-Code-Umzugsetiketten helfen Ihnen zu überprüfen, was sich in jeder Box befindet, und zu entscheiden, wohin sie vor dem Auspacken gehen soll.",
    whyItem3Title: "Ein visuelles Haushaltsinventar erstellen",
    whyItem3Desc: "Fotos machen die Lagerung verständlicher. Mit QrSortable können Sie eine visuelle Aufzeichnung der gelagerten Artikel wie Jacken, Bücher, Küchenutensilien, Dekorationen, Werkzeuge, Ersatzteile, Büromaterial und Hobbymaterialien führen.",
    whyItem4Title: "Lagerung über mehrere Standorte hinweg organisieren",
    whyItem4Desc: "Egal, ob sich Ihre Artikel im Schrank, Keller, Dachboden, in der Garage, im Lagerraum oder im Büroregal befinden – QrSortable hilft Ihnen, Boxen mit Standorten und Artikeldetails zu verknüpfen.",
    whyItem5Title: "Mischboxen klarer handhaben",
    whyItem5Desc: "Nicht jede Box enthält nur eine Kategorie von Artikeln. Eine Box kann Kleidung, Bücher, Kabel, Küchenartikel oder kleine Accessoires enthalten. Mit einer QR-Code-Inventarvorschau können Sie eine genauere Artikelliste speichern, ohne alles auf die Außenseite der Box schreiben zu müssen.",
    examplesTitle: "Praxisbeispiele für die QR-Code-Inventarvorschau",
    ex1Title: "Eine Winterjacke im Lager finden",
    ex1Desc: "Ein Benutzer lagert mehrere Kisten mit saisonaler Kleidung in einem Lagerraum. Anstatt jede Box zu öffnen, um Winterkleidung zu finden, öffnet der Benutzer QrSortable, wählt die Box GYC468 aus und sieht, dass die Box eine Winterjacke, Küchenutensilien und Bücher enthält. Durch Tippen auf Winterjacke kann der Benutzer das Artikelfoto, den Artikelnamen und Anmerkungen ansehen, bevor er die Kiste öffnet.",
    ex2Title: "Umzugskartons mit gemischtem Inhalt",
    ex2Desc: "Bei einem Umzug enthält nicht jede Kiste nur Gegenstände aus einem einzigen Raum. Eine Box kann Kleidung, Bücher, Kabel oder kleine Küchenartikel enthalten. Mit QrSortable kann der Benutzer das QR-Code-Etikett scannen und eine Vorschau des gemischten Inhalts anzeigen, anstatt sich auf ein vages handschriftliches Etikett wie „Verschiedenes“ oder „Küche“ zu verlassen.",
    ex3Title: "Plastikbehälter in einer Garage organisieren",
    ex3Desc: "Eine Garage kann mehrere ähnliche Plastikbehälter für Dekorationen, Werkzeuge, Ersatzteile und saisonale Artikel enthalten. QrSortable hilft Benutzern, eine Box zu scannen oder auszuwählen und den Inhalt auf dem Telefon anzuzeigen, einschließlich Fotos und Anmerkungen. Dies erleichtert das Finden des richtigen Behälters, ohne dass jede Box heruntergenommen werden muss.",
    ex4Title: "Boxinhalte vor dem Auspacken prüfen",
    ex4Desc: "Nach dem Umzug benötigen Benutzer oft einen bestimmten Artikel, bevor sie bereit sind, alles auszupacken. Mit der QR-Code-Inventarvorschau können Benutzer Boxen scannen und zuerst Artikellisten prüfen und dann nur die Box öffnen, die den benötigten Artikel enthält.",
    ex5Title: "Lagerung für Kleinunternehmen",
    ex5Desc: "Ein kleines Unternehmen kann QrSortable verwenden, um Büromaterial, archivierte Dokumente, Produktmuster, Ersatzteile oder Lagerregale zu organisieren. Jede Box kann ein QR-Code-Etikett haben, das mit Artikelfotos, Artikelnamen, Anmerkungen und dem Lagerort verknüpft ist.",
    whoTitle: "Wer kann diese Funktion nutzen?",
    who1Title: "Hauseigentümer und Mieter",
    who1Desc: "Organisieren Sie Lagerbehälter, saisonale Kleidung, Dekorationen, Haushaltsgegenstände, Schrankboxen und Langzeitlagerung mit einfachen QR-Code-Vorschauen.",
    who2Title: "Menschen, die umziehen",
    who2Desc: "Beschriften Sie Umzugskartons mit QR-Codes, damit jede Kiste beim Packen, Transportieren und Auspacken schnell überprüft werden kann.",
    who3Title: "Familien",
    who3Desc: "Machen Sie es allen zu Hause einfacher, Gegenstände zu finden, ohne fragen zu müssen, wo jede Kiste gelagert ist.",
    who4Title: "Nutzer in Kleinunternehmen",
    who4Desc: "Verfolgen Sie Büromaterial, archivierte Dokumente, Produktmuster, Ersatzteile und Lagerregale mit einem einfachen digitalen Inventarsystem.",
    who5Title: "Sammler und Hobby-Nutzer",
    who5Desc: "Halten Sie Bücher, Bastelbedarf, Werkzeuge, Zubehör, Sammlerstücke und Hobbymaterialien mit Fotos und Artikelnotizen organisiert.",
    vsTitle: "QR-Code-Inventarvorschau vs. Traditionelle Kistenbeschriftung",
    vsDesc1: "Traditionelle Etiketten sind nützlich, haben aber Grenzen. Eine kurze handschriftliche Beschriftung zeigt möglicherweise nicht jeden Artikel in einer Kiste und kann veraltet sein, wenn Artikel hinzugefügt oder entfernt werden.",
    vsDesc2: "QrSortable kombiniert physische QR-Code-Lageretiketten mit einer digitalen Inventarvorschau. Das bedeutet, dass Sie die Außenseite der Box einfach halten können, während detaillierte Informationen in der App gespeichert werden, einschließlich Artikelnamen, Fotos, Standorten und Anmerkungen.",
    vsCol1Title: "Traditionelle Kistenbeschriftung",
    vsCol1Bullet1: "Einfach zu schreiben, aber begrenzt im Platz",
    vsCol1Bullet2: "Nur für einfache Kategorien nützlich",
    vsCol1Bullet3: "Schwer zu aktualisieren, wenn sich der Inhalt ändert",
    vsCol1Bullet4: "Normalerweise keine visuellen Fotohinweise",
    vsCol1Bullet5: "Weniger hilfreich bei komplexen gemischten Kisten",
    vsCol2Title: "QrSortable QR-Code-Inventarvorschau",
    vsCol2Bullet1: "Verbindet jede Box mit einem digitalen Eintrag",
    vsCol2Bullet2: "Zeigt umfassende Artikelnamen, Fotos und Anmerkungen",
    vsCol2Bullet3: "Hilft Benutzern, den Inhalt vor dem Öffnen der Kisten zu prüfen",
    vsCol2Bullet4: "Funktioniert hervorragend für Umzugskartons, Lagerboxen und Langzeitlagerung",
    vsCol2Bullet5: "Extrem einfach zu aktualisieren, wenn sich der Kisteninhalt ändert",
    vsCol2Bullet6: "Hilfreich, wenn mehrere Behälter identisch aussehen",
    bestUsesTitle: "Beste Anwendungen für die QR-Code-Inventarvorschau",
    bestUsesIntro: "Verwenden Sie die QR-Code-Inventarvorschau von QrSortable für:",
    bestUsesList: [
      "Lagerraum-Organisation",
      "Garagen-Lagerboxen",
      "Keller-Kisten",
      "Dachboden-Lagerung",
      "Schrank-Organisation",
      "Umzugskartons",
      "Küchen-Aufbewahrung",
      "Saisonale Kleidung",
      "Feiertags-Dekorationen",
      "Bücher und Dokumente",
      "Hobbybedarf",
      "Ersatzteile",
      "Bürolagerung",
      "Inventar für Kleinunternehmen",
      "Langzeitlagerung",
      "Plastik-Lagerbehälter",
      "Kisten mit gemischtem Inhalt",
      "Lagerverwaltung für Familien"
    ],
    smarterWayTitle: "Ein intelligenterer Weg, Boxen zu scannen und Inhalte zu sehen",
    smarterWayDesc1: "QrSortable ist für Menschen gedacht, die eine praktische App für das Lagerkisten-Inventar suchen, ohne die Organisation kompliziert zu machen. Sie können eine Box erstellen, Artikel hinzufügen, Fotos aufnehmen, einfache Anmerkungen schreiben und das QR-Code-Etikett verwenden, um die physische Box mit ihrer digitalen Vorschau zu verknüpfen.",
    smarterWayDesc2: "Dies hilft, wenn Boxen gestapelt, weggesperrt, mit Klebeband versiegelt oder an Orten platziert sind, an denen das Öffnen jedes Behälters unpraktisch ist.",
    faqTitle: "Häufig gestellte Fragen",
    faqItems: [
      {
        q: "Was ist eine QR-Code-Inventarvorschau?",
        a: "Eine QR-Code-Inventarvorschau ist eine digitale Ansicht dessen, was in einer physischen Kiste, Box oder einem Behälter gelagert ist. In QrSortable können Benutzer eine Box auswählen oder scannen und die Boxdetails, Artikelliste, Artikelfotos, Artikelnamen und Anmerkungen anzeigen."
      },
      {
        q: "Kann ich sehen, was sich in einer Box befindet, ohne sie zu öffnen?",
        a: "Ja. QrSortable hilft Benutzern, Kisteninhalte auf einem Telefon anzusehen, bevor sie die physische Kiste öffnen. Dies ist nützlich, wenn mehrere Boxen ähnlich aussehen oder in einem Schrank, einer Garage, einem Keller, auf dem Dachboden oder im Lagerraum aufbewahrt werden."
      },
      {
        q: "Sind QR-Code-Etiketten für Umzugskartons nützlich?",
        a: "Ja, besonders wenn Kisten gemischte Artikel enthalten oder wenn Benutzer sowohl Fotos als auch geschriebene Listen benötigen. QR-Code-Etiketten für Umzugskartons helfen Benutzern zu überprüfen, was sich in jeder Kiste befindet, bevor sie ausgepackt wird."
      },
      {
        q: "Muss ich jeden Artikel auf die Außenseite der Box schreiben?",
        a: "Nein. Mit QrSortable kann die Außenseite der Kiste einfach mit einem QR-Code-Etikett versehen bleiben, während die detaillierte Artikelliste, Fotos, der Ort und Anmerkungen im digitalen Inventar bleiben."
      },
      {
        q: "Kann ich Fotos zu meinem Kisteninventar hinzufügen?",
        a: "Ja. QrSortable unterstützt Artikelfotos, sodass Benutzer visuell identifizieren können, was in der Box gelagert ist. Dies ist hilfreich für Kleidung, Bücher, Küchenartikel, Dekorationen, Ersatzteile, Werkzeuge und Hobbymaterialien."
      },
      {
        q: "Ist die QR-Code-Inventarvorschau für die Langzeitlagerung nützlich?",
        a: "Ja. Langzeitlagerung ist einer der besten Anwendungsfälle, da Benutzer nach mehreren Monaten oft vergessen, was sich in den Kisten befindet. Eine QR-Code-Vorschau hilft Benutzern, Inhalte zu überprüfen, ohne jeden Behälter öffnen zu müssen."
      },
      {
        q: "Kann ich das QR-Code-Inventar für Aufbewahrungsboxen und Plastikbehälter nutzen?",
        a: "Ja. QrSortable kann für Kartons, Plastikboxen, Schrankboxen, Garagenbehälter, Bürolagerung und andere Lagerorganisatoren verwendet werden."
      },
      {
        q: "Welche Informationen sollte ich einer Box-Vorschau hinzufügen?",
        a: "Nützliche Informationen sind der Box-Code, der Lagerort, Artikelnamen, Artikelfotos, Artikelanmerkungen und bei Bedarf die Menge. Dadurch bleibt das Inventar übersichtlich, ohne das physische Etikett zu überladen."
      },
      {
        q: "Ist ein QR-Code-Inventarsystem besser als eine Tabelle?",
        a: "Eine Tabelle kann funktionieren, aber QrSortable verbindet die Box über einen QR-Code direkt mit ihrem Inventar. Dadurch ist es einfacher, eine Box zu scannen und sofort die zugehörigen Artikel, Fotos und Notizen zu sehen."
      },
      {
        q: "Kann die QR-Code-Inventarvorschau helfen, wenn Kisten gemischte Artikel enthalten?",
        a: "Ja. Dies ist einer der stärksten Anwendungsfälle. Wenn eine Box gemischte Kleidung, Küchenartikel, Bücher, Kabel oder kleine Accessoires enthält, macht es ein fotobasiertes QR-Inventar einfacher, sich genau zu erinnern, was sich darin befindet."
      },
      {
        q: "Kann QrSortable mir helfen, Artikel an mehreren Standorten zu organisieren?",
        a: "Ja. Sie können QrSortable verwenden, um Boxen über Schränke, Garagen, Keller, Dachböden, Lagerräume, Büros und andere Lagerorte hinweg zu organisieren."
      },
      {
        q: "Können Familienmitglieder oder Helfer verstehen, was sich in einer Box befindet?",
        a: "Ja. Die Box-Vorschau soll gelagerte Artikel verständlicher machen. Artikelnamen, Fotos und Anmerkungen können Familienmitgliedern, Helfern oder Umzugshelfern helfen, den Kisteninhalt klarer zu identifizieren."
      }
    ],
    finalCtaTitle: "Beginnen Sie mit der Organisation Ihrer Boxen mit der QR-Code-Inventarvorschau",
    finalCtaDesc1: "QrSortable hilft Ihnen, gewöhnliche Lagerboxen in intelligente, durchsuchbare Inventareinträge zu verwandeln. Scannen Sie einen QR-Code, sehen sich den Inhalt an und finden Sie, was Sie brauchen, ohne jede Box zu öffnen.",
    finalCtaDesc2: "Machen Sie jede Box mit QrSortable einfacher zu identifizieren, in der Vorschau anzuzeigen und zu organisieren."
  },
  FR: {
    seoTitle: "Aperçu de l'inventaire par code QR | Visualisez le contenu de chaque carton",
    seoDesc: "Scannez un code QR et prévisualisez ce qui se trouve dans vos cartons de stockage, de déménagement ou vos bacs. QrSortable affiche les photos des objets, les noms, les remarques et les détails des cartons sur votre téléphone.",
    backToHome: "Retour à l'accueil",
    home: "Accueil",
    features: "Fonctionnalités",
    pageTitleBreadcrumb: "Aperçu de l'inventaire par code QR",
    badge: "Organisation visuelle",
    heroTitle: "Aperçu de l'inventaire par code QR : voyez ce qu'il y a dans chaque carton avant de l'ouvrir",
    heroSubtitle: "Scannez un code QR ou sélectionnez un carton dans QrSortable pour prévisualiser instantanément les objets stockés à l'intérieur. Affichez les détails du carton, les photos des objets, leurs noms et les remarques directement sur votre téléphone.",
    heroDescription: "Plus besoin d'ouvrir tous vos cartons pour trouver un seul objet. QrSortable transforme vos cartons de stockage ordinaires en fiches d'inventaire intelligentes et consultables directement depuis votre téléphone.",
    ctaGetLabels: "Obtenir des étiquettes intelligentes",
    ctaExploreMoving: "Explorer le mode Déménagement",
    whatIsTitle: "Qu'est-ce qu'un aperçu d'inventaire par code QR ?",
    whatIsDesc1: "Un aperçu d'inventaire par code QR est un moyen simple de connecter un carton de stockage physique à une fiche d'inventaire numérique. Au lieu d'ouvrir plusieurs cartons pour trouver un objet, vous scannez l'étiquette QR ou sélectionnez le carton dans QrSortable pour voir immédiatement son contenu.",
    whatIsDesc2: "QrSortable vous aide à organiser vos cartons de stockage, de déménagement, vos bacs en plastique, vos placards, garages, caves, greniers et pièces de stockage en affichant un aperçu clair de chaque boîte. Cet aperçu peut inclure le code du carton, l'emplacement, la liste des objets, leurs photos, leurs noms et vos remarques.",
    whatIsDesc3: "Cela facilite grandement la gestion du stockage domestique, des cartons de déménagement, des affaires saisonnières, des articles de loisir, des fournitures de bureau et des stocks des petites entreprises.",
    howItWorksTitle: "Comment fonctionne l'aperçu de l'inventaire par code QR dans QrSortable",
    step1Title: "Afficher tous vos cartons disponibles",
    step1Desc: "Ouvrez QrSortable pour voir la liste de tous vos cartons. Chaque carton peut afficher un code unique, un emplacement de stockage et des détails de date, vous permettant de repérer le bon conteneur avant même de le toucher.",
    step2Title: "Ouvrir les détails du carton sélectionné",
    step2Desc: "Appuyez sur un carton dans la liste pour afficher ses détails. L'écran de détails affiche le code du carton sélectionné, son emplacement, sa zone de stockage et tous les objets qu'il contient. Par exemple, un carton nommé GYC468 peut contenir une veste d'hiver, des ustensiles de cuisine et des livres.",
    step3Title: "Prévisualiser chaque objet à l'intérieur",
    step3Desc: "Appuyez sur n'importe quel objet de la liste du carton pour ouvrir sa fiche. La page de l'objet affiche une photo, son nom et des remarques, vous permettant de confirmer exactement ce qui s'y trouve avant de fouiller physiquement.",
    whyTitle: "Pourquoi utiliser l'aperçu de l'inventaire par code QR ?",
    whySubtitle: "Organiser vos espaces de stockage avec des aperçus numériques offre un moyen visuel et fiable de gérer vos cartons et vos bacs.",
    whyItem1Title: "Trouver des objets sans ouvrir tous les cartons",
    whyItem1Desc: "Les étiquettes manuscrites se limitent souvent à « Cuisine », « Vêtements » ou « Rangement ». QrSortable offre une vue précise en affichant les objets réels à l'intérieur, avec photos et notes.",
    whyItem2Title: "Faciliter le déménagement et le déballage",
    whyItem2Desc: "Lors d'un déménagement, tous les cartons se ressemblent. Les étiquettes QR de déménagement vous permettent de vérifier le contenu de chaque carton et de décider de sa pièce de destination avant le déballage.",
    whyItem3Title: "Créer un inventaire de maison visuel",
    whyItem3Desc: "Les photos rendent le stockage beaucoup plus facile à comprendre. Avec QrSortable, gardez un enregistrement visuel des objets stockés : vestes, livres, ustensiles de cuisine, décorations, outils, pièces de rechange et matériel de loisirs.",
    whyItem4Title: "Organiser le stockage sur plusieurs sites",
    whyItem4Desc: "Que vos affaires soient dans un placard, à la cave, au grenier, dans un garage, un box ou une étagère de bureau, QrSortable connecte vos cartons à leurs emplacements et à leurs détails d'inventaire.",
    whyItem5Title: "Gérer plus clairement les cartons mixtes",
    whyItem5Desc: "Tous les cartons ne contiennent pas une seule catégorie d'objets. Un carton peut mélanger des vêtements, des livres, des câbles et des ustensiles. L'aperçu numérique vous évite d'avoir à tout noter fastidieusement sur l'extérieur du carton.",
    examplesTitle: "Exemples concrets d'utilisation de l'aperçu d'inventaire par code QR",
    ex1Title: "Trouver une veste d'hiver stockée",
    ex1Desc: "Un utilisateur stocke plusieurs cartons de vêtements saisonniers à la cave. Au lieu de les ouvrir tous pour trouver des habits d'hiver, il ouvre QrSortable, sélectionne le carton GYC468 et constate qu'il contient une veste d'hiver, des ustensiles de cuisine et des livres. En appuyant sur « Veste d'hiver », il peut voir la photo de l'objet, son nom et ses remarques avant même d'ouvrir le carton.",
    ex2Title: "Cartons de déménagement à contenu mixte",
    ex2Desc: "Lors d'un déménagement, de nombreux cartons contiennent des objets de différentes catégories. Un carton peut contenir des vêtements, des livres, des câbles ou de petits ustensiles. Avec QrSortable, l'utilisateur scanne le code QR et prévisualise le contenu au lieu de se fier à une mention vague comme « Divers ».",
    ex3Title: "Organiser des bacs en plastique dans un garage",
    ex3Desc: "Un garage contient souvent plusieurs bacs en plastique identiques contenant des décorations, des outils, des pièces ou des affaires de saison. QrSortable permet de scanner ou de sélectionner un bac et d'afficher le contenu sur le téléphone, y compris les photos et remarques, pour trouver le bon bac sans tous les déplacer.",
    ex4Title: "Vérifier le contenu des cartons avant de déballer",
    ex4Desc: "Après un déménagement, on a souvent besoin d'un objet spécifique avant d'être prêt à tout déballer. Grâce à l'aperçu par code QR, l'utilisateur scanne les cartons, consulte les listes d'objets et n'ouvre que le carton qui contient l'objet requis.",
    ex5Title: "Stockage pour petites entreprises",
    ex5Desc: "Une petite entreprise peut utiliser QrSortable pour organiser ses fournitures de bureau, ses documents archivés, ses échantillons de produits, ses pièces détachées ou ses étagères de stockage. Chaque carton est lié à des photos, des noms, des remarques et un emplacement de stockage.",
    whoTitle: "Qui peut utiliser cette fonctionnalité ?",
    who1Title: "Propriétaires et locataires",
    who1Desc: "Organisez vos bacs de rangement, vêtements saisonniers, décorations, objets ménagers et stockage à long terme avec des aperçus par code QR ultra-simples.",
    who2Title: "Personnes qui déménagent",
    who2Desc: "Étiquetez vos cartons de déménagement avec des codes QR pour pouvoir les vérifier rapidement pendant l'emballage, le transport et le déballage.",
    who3Title: "Familles",
    who3Desc: "Permettez à chacun à la maison de retrouver facilement ses affaires sans avoir à demander où est rangé chaque carton.",
    who4Title: "Professionnels et petites entreprises",
    who4Desc: "Suivez vos fournitures de bureau, documents archivés, échantillons de produits et pièces détachées grâce à un système d'inventaire numérique simple.",
    who5Title: "Collectionneurs et passionnés de loisirs",
    who5Desc: "Gardez vos livres, fournitures de loisirs créatifs, outils, accessoires et pièces de collection parfaitement organisés grâce à des photos et des notes.",
    vsTitle: "Aperçu de l'inventaire par code QR vs Étiquettes de carton traditionnelles",
    vsDesc1: "Les étiquettes traditionnelles sont utiles, mais limitées. Une courte étiquette manuscrite ne peut pas lister tous les objets et devient obsolète dès que le contenu change.",
    vsDesc2: "QrSortable associe des étiquettes de stockage physiques par code QR à un aperçu d'inventaire numérique. Vous pouvez ainsi garder l'extérieur de vos cartons propre et simple tout en stockant des informations détaillées dans l'application (noms, photos, emplacements et remarques).",
    vsCol1Title: "Étiquettes de carton traditionnelles",
    vsCol1Bullet1: "Faciles à écrire mais espace très limité",
    vsCol1Bullet2: "Utiles uniquement pour des catégories très simples",
    vsCol1Bullet3: "Difficiles à mettre à jour lorsque le contenu change",
    vsCol1Bullet4: "Aucun repère visuel ni photo",
    vsCol1Bullet5: "Peu pratiques pour les cartons mixtes complexes",
    vsCol2Title: "Aperçu d'inventaire QR QrSortable",
    vsCol2Bullet1: "Connecte chaque carton à une fiche numérique sécurisée",
    vsCol2Bullet2: "Affiche les noms des objets, des photos et des remarques complètes",
    vsCol2Bullet3: "Permet de voir le contenu avant d'ouvrir le carton",
    vsCol2Bullet4: "Parfait pour les cartons de déménagement, les bacs de stockage et le long terme",
    vsCol2Bullet5: "Extrêmement simple à mettre à jour en cas de changement de contenu",
    vsCol2Bullet6: "Indispensable lorsque plusieurs bacs ou cartons sont identiques",
    bestUsesTitle: "Meilleures utilisations de l'aperçu d'inventaire par code QR",
    bestUsesIntro: "Utilisez l'aperçu d'inventaire de QrSortable pour :",
    bestUsesList: [
      "Organisation de pièces de stockage",
      "Bacs de rangement de garage",
      "Cartons de cave",
      "Rangement de grenier",
      "Organisation de placards",
      "Cartons de déménagement",
      "Rangement de cuisine",
      "Vêtements saisonniers",
      "Décorations de fêtes",
      "Livres et documents",
      "Matériel de loisirs créatifs",
      "Pièces de rechange",
      "Stockage de bureau",
      "Inventaire de petite entreprise",
      "Stockage à long terme",
      "Conteneurs de rangement en plastique",
      "Cartons à contenu mixte",
      "Gestion du stockage familial"
    ],
    smarterWayTitle: "Une façon plus intelligente de scanner les cartons et de voir le contenu",
    smarterWayDesc1: "QrSortable est conçu pour les personnes qui recherchent une application d'inventaire de stockage pratique sans se compliquer la vie. Créez un carton, ajoutez des objets, prenez des photos, rédigez des remarques et utilisez l'étiquette QR pour lier le carton physique à sa fiche numérique.",
    smarterWayDesc2: "C'est la solution idéale lorsque les cartons sont empilés, rangés en hauteur, scellés avec du ruban adhésif ou placés dans des endroits d'accès difficile.",
    faqTitle: "Foire Aux Questions",
    faqItems: [
      {
        q: "Qu'est-ce qu'un aperçu d'inventaire par code QR ?",
        a: "Un aperçu d'inventaire par code QR est une vue numérique de ce qui est stocké à l'intérieur d'un carton, d'un bac ou d'un conteneur physique. Dans QrSortable, les utilisateurs scannent ou sélectionnent un carton pour voir ses détails, sa liste d'objets, ses photos, ses noms d'objets et ses remarques."
      },
      {
        q: "Puis-je voir ce qu'il y a dans un carton sans l'ouvrir ?",
        a: "Oui. QrSortable vous permet de prévisualiser le contenu d'un carton sur votre téléphone avant de l'ouvrir. C'est idéal lorsque plusieurs cartons se ressemblent ou sont stockés dans un placard, un garage, une cave ou un grenier."
      },
      {
        q: "Les étiquettes QR sont-elles utiles pour les cartons de déménagement ?",
        a: "Oui, particulièrement lorsque les cartons contiennent des objets mixtes ou lorsque vous souhaitez associer des photos aux descriptions textuelles. Les étiquettes QR de déménagement vous aident à vérifier le contenu de chaque boîte avant de déballer."
      },
      {
        q: "Dois-je lister chaque objet sur l'extérieur du carton ?",
        a: "No. Avec QrSortable, l'extérieur de votre carton reste simple et propre avec une seule étiquette QR, tandis que la liste détaillée d'objets, les photos, l'emplacement et vos notes restent enregistrés numériquement."
      },
      {
        q: "Puis-je ajouter des photos à l'inventaire de mes cartons ?",
        a: "Oui. QrSortable prend en charge les photos d'objets pour vous aider à identifier visuellement ce qui est stocké. C'est très utile pour les vêtements, les livres, la cuisine, la décoration, les outils ou le matériel de loisirs."
      },
      {
        q: "L'aperçu de l'inventaire par code QR est-il adapté au stockage à long terme ?",
        a: "Oui. Le stockage à long terme est l'un des meilleurs cas d'usage, car on a tendance à oublier le contenu exact des cartons après quelques mois. Un aperçu rapide par code QR vous évite d'ouvrir inutilement des cartons scellés depuis longtemps."
      },
      {
        q: "Puis-je utiliser l'inventaire par code QR pour des bacs en plastique ?",
        a: "Oui. QrSortable fonctionne parfaitement sur les cartons en carton, les bacs de rangement en plastique, les boîtes de placard, les conteneurs de garage, le stockage de bureau, etc."
      },
      {
        q: "Quelles informations puis-je ajouter à l'aperçu d'un carton ?",
        a: "Vous pouvez ajouter le code du carton, son emplacement de stockage, les noms des objets, leurs photos, des remarques et des quantités. Cela vous permet d'avoir un inventaire ultra-complet sans surcharger l'étiquette physique."
      },
      {
        q: "Un système d'inventaire par code QR est-il préférable à un tableau Excel ?",
        a: "Un tableau Excel peut fonctionner, mais QrSortable associe directement le carton physique à sa fiche numérique via un code QR. Vous n'avez qu'à scanner le carton pour voir instantanément ses objets, photos et remarques associés."
      },
      {
        q: "L'aperçu d'inventaire aide-t-il lorsque les cartons contiennent des objets mixtes ?",
        a: "Oui, c'est l'un de ses plus grands avantages. Lorsqu'un carton contient des objets de différentes natures (vêtements, livres, câbles, cuisine), l'inventaire numérique photo permet de savoir précisément ce qui s'y trouve en un clin d'œil."
      },
      {
        q: "Puis-je organiser des objets stockés dans différents endroits ?",
        a: "Oui. QrSortable vous permet d'organiser vos cartons dans plusieurs endroits différents : placards, garage, cave, grenier, bureau ou espace de stockage externe."
      },
      {
        q: "Les membres de ma famille ou mes déménageurs peuvent-ils comprendre ce qu'il y a dans un carton ?",
        a: "Oui. L'aperçu du carton est conçu pour être simple et compréhensible par tous. Les photos, noms d'objets et notes permettent à votre famille, vos proches ou vos déménageurs d'identifier le contenu d'un carton très clairement."
      }
    ],
    finalCtaTitle: "Commencez à organiser vos cartons avec l'aperçu d'inventaire par code QR",
    finalCtaDesc1: "QrSortable vous aide à transformer des cartons de stockage ordinaires en fiches d'inventaire intelligentes et consultables. Scannez un code QR, prévisualisez le contenu et trouvez ce dont vous avez besoin sans ouvrir tous les cartons.",
    finalCtaDesc2: "Simplifiez l'identification, la prévisualisation et l'organisation de chacun de vos cartons avec QrSortable."
  },
  ES: {
    seoTitle: "Vista previa de inventario por código QR | Ve el contenido de cada caja",
    seoDesc: "Escanea un código QR y obtén una vista previa de lo que hay dentro de tus cajas de almacenamiento, mudanza o contenedores. QrSortable muestra fotos de artículos, nombres, notas y detalles de las cajas en tu teléfono.",
    backToHome: "Volver al inicio",
    home: "Inicio",
    features: "Características",
    pageTitleBreadcrumb: "Vista previa de inventario por código QR",
    badge: "Organización visual",
    heroTitle: "Vista previa de inventario por código QR: ve lo que hay dentro de cada caja antes de abrirla",
    heroSubtitle: "Escanea un código QR o selecciona una caja en QrSortable para previsualizar al instante los artículos guardados en su interior. Visualiza detalles de la caja, fotos de los artículos, nombres y notas directamente en tu teléfono.",
    heroDescription: "Olvídate de tener que abrir cada caja solo para encontrar un objeto. QrSortable transforma tus cajas ordinarias en registros de inventario inteligentes y fáciles de buscar desde tu teléfono.",
    ctaGetLabels: "Obtener etiquetas inteligentes ahora",
    ctaExploreMoving: "Explorar el modo Mudanza",
    whatIsTitle: "¿Qué es una vista previa de inventario por código QR?",
    whatIsDesc1: "Una vista previa de inventario por código QR es una forma sencilla de conectar una caja de almacenamiento física con un registro de inventario digital. En lugar de abrir varias cajas para encontrar un artículo, puedes escanear la etiqueta de código QR o seleccionar la caja en QrSortable y ver inmediatamente qué hay dentro.",
    whatIsDesc2: "QrSortable te ayuda a organizar cajas de almacenamiento, cajas de mudanza, contenedores de plástico, armarios, garajes, sótanos, desvanes y trasteros mostrando una vista previa clara de cada caja. La vista previa puede incluir el código de la caja, la ubicación, la lista de artículos, fotos de los artículos, nombres y notas.",
    whatIsDesc3: "Esto facilita la gestión del almacenamiento doméstico, las cajas de mudanza, la ropa de temporada, los artículos de pasatiempos, los suministros de oficina y el inventario de pequeñas empresas.",
    howItWorksTitle: "Cómo funciona la vista previa de inventario por código QR en QrSortable",
    step1Title: "Ver todas tus cajas disponibles",
    step1Desc: "Abre QrSortable para ver una lista de tus cajas disponibles. Cada caja puede mostrar un código único, su ubicación y detalles de la fecha, lo que facilita identificar el contenedor correcto antes de tocarlo.",
    step2Title: "Abrir los detalles de la caja seleccionada",
    step2Desc: "Toca una caja de la lista para ver sus detalles. La pantalla de detalles muestra el código de la caja seleccionada, su ubicación, zona de almacenamiento y todos los artículos en su interior. Por ejemplo, una caja llamada GYC468 puede contener una chaqueta de invierno, utensilios de cocina y libros.",
    step3Title: "Previsualizar cada artículo dentro de la caja",
    step3Desc: "Toca cualquier artículo de la lista de la caja para abrir sus detalles. La página del artículo puede mostrar una foto, el nombre del artículo y notas, para que puedas confirmar exactamente lo que hay dentro antes de rebuscar en la caja física.",
    whyTitle: "¿Por qué utilizar la vista previa de inventario por código QR?",
    whySubtitle: "Organizar tus espacios de almacenamiento con vistas previas digitales ofrece una forma visual y confiable de gestionar tus cajas y contenedores.",
    whyItem1Title: "Encontrar artículos sin abrir cada caja",
    whyItem1Desc: "Las etiquetas escritas a mano suelen decir solo “Cocina”, “Ropa” o “Trastero”. QrSortable te da una vista más detallada al mostrar los artículos reales dentro de cada caja, incluyendo fotos y notas.",
    whyItem2Title: "Facilitar las mudanzas y el desembalaje",
    whyItem2Desc: "Durante una mudanza, muchas cajas se ven idénticas. Las etiquetas de código QR de mudanza te ayudan a comprobar qué hay dentro de cada caja y decidir a qué habitación va antes de desembalarla.",
    whyItem3Title: "Crear un inventario visual del hogar",
    whyItem3Desc: "Las fotos hacen que el almacenamiento sea mucho más fácil de comprender. Con QrSortable, puedes mantener un registro visual de los artículos almacenados como chaquetas, libros, utensilios de cocina, decoraciones, herramientas, repuestos y materiales de pasatiempos.",
    whyItem4Title: "Organizar el almacenamiento en varias ubicaciones",
    whyItem4Desc: "Ya sea que tus artículos estén en un armario, sótano, desván, garaje, trastero o estantería de oficina, QrSortable te ayuda a conectar tus cajas con sus ubicaciones y detalles de inventario.",
    whyItem5Title: "Gestionar cajas con artículos mixtos más claramente",
    whyItem5Desc: "No todas las cajas contienen una sola categoría de objetos. Una caja puede mezclar ropa, libros, cables o cocina. La vista previa digital te ahorra tener que escribir una lista interminable en el exterior de la caja.",
    examplesTitle: "Ejemplos reales de vista previa de inventario por código QR",
    ex1Title: "Encontrar una chaqueta de invierno guardada",
    ex1Desc: "Un usuario guarda varias cajas de ropa de temporada en un trastero. En lugar de abrirlas todas para buscar ropa de invierno, abre QrSortable, selecciona la caja GYC468 y ve que contiene una chaqueta de invierno, utensilios de cocina y libros. Al tocar en «Chaqueta de invierno», puede ver su foto, nombre y notas antes de abrir la caja física.",
    ex2Title: "Cajas de mudanza con artículos mixtos",
    ex2Desc: "Durante una mudanza, muchas cajas contienen objetos de varias habitaciones. Una caja puede mezclar ropa, libros, cables o utensilios. Con QrSortable, el usuario escanea el código QR y previsualiza el contenido mixto en lugar de depender de una etiqueta vaga escrita a mano como «Varios».",
    ex3Title: "Organizar contenedores de plástico en un garaje",
    ex3Desc: "Un garaje suele contener varios contenedores de plástico similares con decoraciones, herramientas, repuestos o cosas de temporada. QrSortable permite escanear o seleccionar un contenedor y mostrar el contenido en el teléfono (fotos y notas) para encontrar el correcto sin tener que moverlos todos.",
    ex4Title: "Comprobar el contenido de las cajas antes de desembalar",
    ex4Desc: "Después de mudarse, las personas a menudo necesitan un objeto específico antes de estar listas para desembalar todo. Con la vista previa por código QR, el usuario escanea las cajas, consulta las listas de artículos y solo abre la caja que contiene el objeto que necesita.",
    ex5Title: "Almacenamiento para pequeñas empresas",
    ex5Desc: "Una pequeña empresa puede usar QrSortable para organizar suministros de oficina, documentos archivados, muestras de productos, repuestos o estanterías de almacenamiento. Cada caja tiene una etiqueta de código QR vinculada a fotos de los artículos, nombres, notas y ubicación.",
    whoTitle: "¿Quién puede utilizar esta función?",
    who1Title: "Propietarios e inquilinos",
    who1Desc: "Organiza tus contenedores de almacenamiento, ropa de temporada, decoraciones, artículos del hogar y almacenamiento a largo plazo con vistas previas fáciles por código QR.",
    who2Title: "Personas que se están mudando",
    who2Desc: "Etiqueta tus cajas de mudanza con códigos QR para que cada una pueda comprobarse rápidamente durante el embalaje, transporte y desembalaje.",
    who3Title: "Familias",
    who3Desc: "Haz que sea más fácil para todos en casa encontrar sus cosas sin tener que preguntar dónde está guardada cada caja.",
    who4Title: "Usuarios de pequeñas empresas",
    who4Desc: "Realiza un seguimiento de los suministros de oficina, documentos archivados, muestras de productos y repuestos con un sistema de inventario digital sencillo.",
    who5Title: "Coleccionistas y aficionados",
    who5Desc: "Mantén tus libros, suministros de manualidades, herramientas, accesorios y objetos de colección perfectamente organizados con fotos y notas de cada artículo.",
    vsTitle: "Vista previa de inventario por QR vs Etiquetas de cajas tradicionales",
    vsDesc1: "Las etiquetas tradicionales son útiles, pero tienen límites. Una etiqueta escrita a mano no puede mostrar cada objeto detalladamente y se vuelve obsoleta cuando los objetos cambian.",
    vsDesc2: "QrSortable combina etiquetas de almacenamiento físicas de código QR con una vista previa de inventario digital. Esto te permite mantener el exterior de tus cajas limpio y sencillo mientras guardas información detallada en la aplicación (nombres, fotos, ubicaciones y notas).",
    vsCol1Title: "Etiquetas de cajas tradicionales",
    vsCol1Bullet1: "Fáciles de escribir pero con espacio muy limitado",
    vsCol1Bullet2: "Útiles solo para categorías muy sencillas",
    vsCol1Bullet3: "Difíciles de actualizar cuando el contenido cambia",
    vsCol1Bullet4: "Sin referencias visuales ni fotos",
    vsCol1Bullet5: "Poco prácticas para cajas mixtas complejas",
    vsCol2Title: "Vista previa de inventario QR de QrSortable",
    vsCol2Bullet1: "Conecta cada caja a una ficha digital segura",
    vsCol2Bullet2: "Muestra nombres detallados, fotos y notas completas",
    vsCol2Bullet3: "Permite ver el contenido antes de abrir la caja",
    vsCol2Bullet4: "Excelente para cajas de mudanza, contenedores y almacenamiento a largo plazo",
    vsCol2Bullet5: "Extremadamente fácil de actualizar cuando cambia el contenido",
    vsCol2Bullet6: "Muy útil cuando varios contenedores se ven exactamente iguales",
    bestUsesTitle: "Mejores usos de la vista previa de inventario por código QR",
    bestUsesIntro: "Usa la vista previa de inventario de QrSortable para:",
    bestUsesList: [
      "Organización de trasteros",
      "Contenedores de garaje",
      "Cajas de sótano",
      "Almacenamiento en el desván",
      "Organización de armarios",
      "Cajas de mudanza",
      "Almacenamiento de cocina",
      "Ropa de temporada",
      "Decoración navideña y de festividades",
      "Libros y documentos",
      "Materiales para pasatiempos",
      "Piezas de repuesto",
      "Almacenamiento de oficina",
      "Inventario de pequeñas empresas",
      "Almacenamiento a largo plazo",
      "Contenedores de almacenamiento de plástico",
      "Cajas con artículos mixtos",
      "Gestión del almacenamiento familiar"
    ],
    smarterWayTitle: "Una forma más inteligente de escanear cajas y ver su contenido",
    smarterWayDesc1: "QrSortable está diseñado para personas que buscan una aplicación práctica de inventario de cajas de almacenamiento sin complicarse la vida. Puedes crear una caja, añadir artículos, incluir fotos, escribir notas sencillas y usar la etiqueta de código QR para conectar la caja física con su vista previa digital.",
    smarterWayDesc2: "Esto es ideal cuando las cajas están apiladas, guardadas en trasteros, selladas con cinta adhesiva o colocadas en lugares donde abrirlas resulta inconveniente.",
    faqTitle: "Preguntas Frecuentes",
    faqItems: [
      {
        q: "¿Qué es una vista previa de inventario por código QR?",
        a: "Una vista previa de inventario por código QR es una vista digital de lo que hay guardado dentro de una caja, contenedor o recipiente físico. En QrSortable, los usuarios escanean o seleccionan una caja para ver sus detalles, lista de artículos, fotos, nombres de artículos y notas."
      },
      {
        q: "¿Puedo ver lo que hay dentro de una caja sin abrirla?",
        a: "Sí. QrSortable ayuda a los usuarios a previsualizar el contenido de las cajas en su teléfono antes de abrir la caja física. Esto es útil cuando varias cajas se ven similares o están guardadas en armarios, garajes, sótanos o desvanes."
      },
      {
        q: "¿Son útiles las etiquetas de código QR para las cajas de mudanza?",
        a: "Sí, especialmente cuando las cajas contienen artículos mixtos o cuando deseas asociar fotos con descripciones de de texto. Las etiquetas de mudanza por código QR te ayudan a comprobar el contenido de cada caja antes de desembalarla."
      },
      {
        q: "¿Tengo que detallar cada artículo en el exterior de la caja?",
        a: "No. Con QrSortable, el exterior de tu caja se mantiene limpio y simple con una sola etiqueta de código QR, mientras que la lista detallada de artículos, fotos, la ubicación y las notas permanecen registradas digitalmente."
      },
      {
        q: "¿Puedo añadir fotos al inventario de mis cajas?",
        a: "Sí. QrSortable admite fotos de artículos para ayudarte a identificar visualmente lo que está almacenado. Es de gran utilidad para ropa, libros, cocina, decoración, herramientas o materiales de pasatiempos."
      },
      {
        q: "¿Es útil la vista previa de inventario por código QR para el almacenamiento a largo plazo?",
        a: "Sí. El almacenamiento a largo plazo es uno de los mejores casos de uso, ya que se suele olvidar el contenido exacto de las cajas después de unos meses. Una vista previa rápida por código QR te evita tener que abrir innecesariamente cajas selladas desde hace tiempo."
      },
      {
        q: "¿Puedo usar el inventario de código QR para contenedores de plástico?",
        a: "Sí. QrSortable funciona a la perfección en cajas de cartón, contenedores de plástico, cajas de armario, cajas de garaje, almacenamiento de oficina, etc."
      },
      {
        q: "¿Qué información puedo añadir a la vista previa de una caja?",
        a: "Puedes añadir el código de la caja, su ubicación, los nombres de los artículos, fotos, notas y cantidades. Esto te permite tener un inventario completo sin sobrecargar la etiqueta física."
      },
      {
        q: "¿Es un sistema de inventario por código QR mejor que una hoja de cálculo?",
        a: "Una hoja de cálculo puede funcionar, pero QrSortable asocia directamente la caja física con su ficha digital a través de un código QR. Solo tienes que escanear la caja para ver al instante sus artículos, fotos y notas asociados."
      },
      {
        q: "¿La vista previa ayuda cuando las cajas contienen artículos mixtos?",
        a: "Sí, es una de sus mayores ventajas. Cuando una caja contiene artículos de distinta naturaleza (ropa, libros, cables, cocina), el inventario digital por fotos permite saber qué hay exactamente dentro de un vistazo."
      },
      {
        q: "¿Puedo organizar objetos almacenados en distintas ubicaciones?",
        a: "Sí. QrSortable te permite organizar tus cajas en varias ubicaciones diferentes: armarios, garaje, sótano, desván, oficina o almacén externo."
      },
      {
        q: "¿Pueden los miembros de mi familia o mis operarios de mudanza entender lo que hay en una caja?",
        a: "Sí. La vista previa de la caja está diseñada para ser sencilla y comprensible para todos. Las fotos, nombres de artículos y notas permiten a tu familia, seres queridos o operarios de mudanza identificar el contenido muy claramente."
      }
    ],
    finalCtaTitle: "Comienza a organizar tus cajas con la vista previa de inventario por código QR",
    finalCtaDesc1: "QrSortable te ayuda a transformar cajas de almacenamiento ordinarias en registros de inventario inteligentes y fáciles de buscar. Escanea un código QR, previsualiza el contenido y encuentra lo que necesitas sin abrir cada caja.",
    finalCtaDesc2: "Simplifica la identificación, la vista previa y la organización de cada una de tus cajas con QrSortable."
  }
};

export const QrCodeInventoryPreview: React.FC = () => {
  const { language, localizePath } = useTranslation();

  const tPage = (key: string): any => {
    const lang = (['EN', 'DE', 'FR', 'ES'].includes(language) ? language : 'EN') as 'EN' | 'DE' | 'FR' | 'ES';
    return TRANSLATIONS_PAGE[lang][key] || TRANSLATIONS_PAGE['EN'][key] || key;
  };

  const localizedFaqItems = tPage('faqItems') as Array<{ q: string; a: string }>;

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
        "item": "https://www.qrsortable.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tPage('pageTitleBreadcrumb'),
        "item": "https://www.qrsortable.com/features/qr-code-inventory-preview"
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
    "mainEntity": localizedFaqItems.map(item => ({
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
        <link rel="canonical" href={`https://www.qrsortable.com/features/qr-code-inventory-preview${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/features/qr-code-inventory-preview" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/features/qr-code-inventory-preview" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/features/qr-code-inventory-preview?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/features/qr-code-inventory-preview?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/features/qr-code-inventory-preview?lang=es" />
        <meta property="og:title" content={tPage('seoTitle')} />
        <meta property="og:description" content={tPage('seoDesc')} />
        <meta property="og:url" content={`https://www.qrsortable.com/features/qr-code-inventory-preview${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbsSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
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
                <span className="bg-[#FDB623] text-black px-4 py-1.5 rounded-full text-sm font-black tracking-wider uppercase inline-block mb-4">
                  {tPage('badge')}
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  {tPage('heroTitle')}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed font-bold mb-6">
                  {tPage('heroSubtitle')}
                </p>
                <p className="text-base text-gray-400 leading-relaxed font-medium mb-8">
                  {tPage('heroDescription')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all shadow-lg flex items-center gap-2 animate-pulse"
                  >
                    {tPage('ctaGetLabels')} <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    to={localizePath('/features/moving-box-organizer')} 
                    className="bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] hover:bg-gray-700 transition-all border border-gray-700 inline-block text-center"
                  >
                    {tPage('ctaExploreMoving')}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center p-8">
                  <Smartphone className="h-40 w-40 text-[#FDB623] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informative Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="prose prose-xl max-w-none text-gray-700">
            
            {/* Section 1 */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6" id="what-is-qr-preview">{tPage('whatIsTitle')}</h2>
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

            {/* Section 2 */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('howItWorksTitle')}</h2>
              
              {/* Image positioned right below the heading, showing full image */}
              <div className="mb-12 flex justify-center">
                <div className="relative max-w-4xl w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FDB623] to-[#FDB623]/30 rounded-[2.5rem] blur opacity-15"></div>
                  <img 
                    src="/images/feature_inventory_preview.png" 
                    alt="QR Code Inventory Preview workflow for storage boxes and item details" 
                    className="relative rounded-[2.5rem] border-4 border-gray-900 shadow-2xl w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Steps positioned underneath the image in a vertical stack matching the design layout */}
              <div className="space-y-8">
                <div className="flex gap-6 items-start" id="preview-step-1">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tPage('step1Title')}</h3>
                    <p className="text-lg text-gray-600">{tPage('step1Desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="preview-step-2">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tPage('step2Title')}</h3>
                    <p className="text-lg text-gray-600">{tPage('step2Desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start" id="preview-step-3">
                  <div className="bg-gray-900 text-[#FDB623] w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{tPage('step3Title')}</h3>
                    <p className="text-lg text-gray-600">{tPage('step3Desc')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('whyTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('whySubtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Search className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem1Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem1Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Package className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem2Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem2Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Eye className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem3Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem3Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Smartphone className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem4Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem4Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 md:col-span-2">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><ShieldCheck className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem5Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem5Desc')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('examplesTitle')}</h2>
              <div className="space-y-6">
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
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('whoTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
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
                <div className="bg-gray-100 p-6 rounded-3xl md:col-span-2">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who5Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who5Desc')}</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
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

            {/* Section 7 */}
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

            {/* Section 8 */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('smarterWayTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('smarterWayDesc1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-600 font-bold">
                {tPage('smarterWayDesc2')}
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <HelpCircle className="text-[#FDB623] h-8 w-8" /> {tPage('faqTitle')}
              </h2>
              <div className="space-y-6">
                {localizedFaqItems.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm animate-fadeIn">
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
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 font-bold">
                  {tPage('finalCtaDesc1')}
                </p>
                <p className="text-sm text-gray-400 max-w-lg mx-auto mb-8 font-medium">
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
                    to={localizePath('/features/moving-box-organizer')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] transition-all inline-block border border-gray-700"
                  >
                    {tPage('ctaExploreMoving')}
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

