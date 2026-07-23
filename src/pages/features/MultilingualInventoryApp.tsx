import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackgroundDots } from '../../components/BackgroundDots';
import { useTranslation } from '../../contexts/LanguageContext';
import { Globe, ChevronRight, Languages, Smile, MapPin, Search, ArrowRight, ArrowLeft, UserCheck, HelpCircle, CheckCircle2, Check, X, ShieldAlert, Award, Star } from 'lucide-react';

const TRANSLATIONS_PAGE: Record<string, any> = {
  EN: {
    seoTitle: "Multilingual Inventory App | Organize Storage in Your Language",
    seoDesc: "Use QrSortable in English, German, French, or Spanish to organize boxes, storage bins, moving inventory, and shared household items with QR code labels.",
    backToHome: "Back to Home",
    home: "Home",
    features: "Features",
    pageTitleBreadcrumb: "Multilingual Inventory App",
    badge: "Multilingual Support",
    heroTitle: "Multilingual Inventory App: Organize Storage in Your Own Language",
    heroSubtitle: "QrSortable helps users organize boxes, bins, moving inventory, and shared storage with a multilingual app interface. Use supported languages such as English, German, French, and Spanish to make storage easier for families, movers, teams, and international users.",
    heroSupportingText: "Storage is easier when the app is clear to everyone. QrSortable helps users scan labels, add items, search boxes, and manage inventory using a language they understand.",
    ctaGetLabels: "Get Smart Labels Now",
    ctaExploreSecure: "Explore Secure Tracking",
    
    whatIsTitle: "What Is a Multilingual Inventory App?",
    whatIsDesc1: "A Multilingual Inventory App is an inventory system that supports more than one interface language. Instead of forcing every user to work in a single language, QrSortable helps users organize storage with supported app languages such as English, German, French, and Spanish.",
    whatIsDesc2: "QrSortable connects physical QR code labels to digital box records. Each record can include a box location, category, item names, remarks, and photos. With multilingual support, the app interface becomes easier to understand for international families, bilingual households, students abroad, small teams, and people moving between countries.",
    whatIsDesc3: "This is especially useful when more than one person helps with packing, storing, searching, or unpacking.",
    
    howItWorksTitle: "How QrSortable’s Multilingual Support Works",
    step1Title: "Choose Your Preferred Language",
    step1Desc: "On first launch, users can select a preferred language. QrSortable supports a multilingual interface in English, German, French, and Spanish.",
    step2Title: "Use Familiar Menus and Buttons",
    step2Desc: "The app interface helps users navigate key actions such as scanning labels, creating boxes, adding items, searching inventory, opening the menu, and managing storage records in a supported language.",
    step3Title: "Add Items, Remarks, and Photos",
    step3Desc: "Users can add item names, remarks, and photos to box records. Custom text such as item names and notes is saved in the language the user writes, while the app interface can remain available in supported languages.",
    step4Title: "Search Across Your Inventory",
    step4Desc: "QrSortable search works across item names, remarks, box locations, and categories. For best results in multilingual homes or teams, use clear and consistent naming for important items and box locations.",
    step5Title: "Use with Shared Inventory Features",
    step5Desc: "When used together with Premium Multi-User Sharing, trusted users can access a shared inventory across devices. This is helpful when family members or team members prefer different languages.",
    
    whyTitle: "Why Use a Multilingual Inventory App?",
    whySubtitle: "Storage is easier when the app is clear to everyone.",
    whyItem1Title: "Make Storage Easier for Everyone",
    whyItem1Desc: "In many homes, only one person understands where everything is stored. A multilingual inventory app helps more family members, roommates, or helpers use the system with less confusion.",
    whyItem2Title: "Helpful for International Moves",
    whyItem2Desc: "International moves often involve different languages, locations, movers, and temporary storage. QrSortable helps users keep box records clear while organizing items across homes, apartments, storage rooms, or moving boxes.",
    whyItem3Title: "Better for Bilingual and Multilingual Households",
    whyItem3Desc: "Families and roommates may prefer different languages. QrSortable’s multilingual interface helps more people take part in organizing boxes, adding items, scanning labels, and searching for stored belongings.",
    whyItem4Title: "Useful for Small Teams and Offices",
    whyItem4Desc: "Small teams can use QrSortable to organize documents, office supplies, archive boxes, product samples, or equipment. A multilingual interface can make daily inventory tasks easier for users who prefer different languages.",
    whyItem5Title: "Reduce Guesswork in Shared Storage",
    whyItem5Desc: "When menus, buttons, and actions are easier to understand, users are less likely to guess what to tap. This is important for shared closets, garages, basements, attics, storage rooms, and office storage areas.",
    
    examplesTitle: "Real-Life Examples of a Multilingual Inventory App",
    ex1Title: "International Family Moving Between Countries",
    ex1Desc: "A family moves from France to Germany and packs clothing, books, kitchen items, and documents into labeled boxes. One person prefers French, another prefers English, and local helpers may work more comfortably in German. QrSortable helps keep the box inventory easier to manage with a multilingual interface and clear QR code-based box records.",
    ex2Title: "Bilingual Household Storage",
    ex2Desc: "A bilingual household stores seasonal clothes, holiday decorations, school materials, and household items in a basement and closets. With QrSortable, family members can use the supported app language they prefer while checking box locations, item photos, and storage details.",
    ex3Title: "International Student Storage",
    ex3Desc: "A student studying abroad stores books, clothes, electronics, and documents in boxes during semester breaks. A multilingual inventory app helps the student manage storage more clearly when moving between apartments, dorm rooms, lockers, or temporary housing.",
    ex4Title: "Shared Apartment or Roommate Storage",
    ex4Desc: "Roommates share storage shelves, kitchen boxes, cleaning supplies, and seasonal items. A multilingual app interface can make it easier for each trusted user to understand the inventory workflow and locate stored items without relying on one person.",
    ex5Title: "Small Office with Multilingual Staff",
    ex5Desc: "A small office stores archived documents, supplies, spare equipment, and product samples. QrSortable helps team members organize boxes with QR code labels, item names, remarks, photos, locations, and supported app languages for clearer daily use.",
    ex6Title: "Moving Boxes with International Helpers",
    ex6Desc: "During a move, helpers may speak different languages. QR code labels and a multilingual app interface help users scan boxes, check contents, and understand basic storage actions more easily.",
    
    whoTitle: "Who Uses a Multilingual Organizer?",
    who1Title: "International Families",
    who1Desc: "Organize boxes, moving inventory, seasonal storage, and household items when family members prefer different languages.",
    who2Title: "Bilingual Households",
    who2Desc: "Make shared storage easier for people who use English, German, French, or Spanish in daily life.",
    who3Title: "People Moving Abroad",
    who3Desc: "Keep storage and moving boxes easier to manage during international relocation, temporary storage, and unpacking.",
    who4Title: "Students Abroad",
    who4Desc: "Track study materials, clothes, electronics, documents, and stored boxes across dorms, apartments, or lockers.",
    who5Title: "Small Teams and Offices",
    who5Desc: "Organize shared office supplies, archive boxes, product samples, tools, and storage shelves with clearer multilingual app navigation.",
    who6Title: "Roommates and Shared Storage Users",
    who6Desc: "Help multiple users understand box records, locations, and item details in shared closets, basements, garages, and storage rooms.",
    
    vsTitle: "Multilingual Inventory App vs. Single-Language Inventory Tools",
    vsDesc: "A single-language inventory app can work well when every user understands the same language. But shared storage is often more complex. Families, roommates, students, movers, and teams may prefer different languages while using the same storage workflow. QrSortable’s multilingual inventory app helps make key actions easier to understand by supporting multiple app interface languages. Users can scan labels, manage boxes, add items, view photos, and search inventory with clearer navigation.",
    vsCol1Title: "Single-Language Inventory Tools",
    vsCol1Bullet1: "May be harder for some users to understand",
    vsCol1Bullet2: "Can create confusion with buttons, menus, and actions",
    vsCol1Bullet3: "Less convenient for international households",
    vsCol1Bullet4: "Less practical for multilingual moving or shared storage",
    vsCol1Bullet5: "May rely on one person to manage the inventory",
    vsCol1Bullet6: "Lacks language flexibility for helpers",
    vsCol2Title: "QrSortable Multilingual Inventory App",
    vsCol2Bullet1: "Supports app interface languages such as English, German, French, and Spanish",
    vsCol2Bullet2: "Helps more users understand core storage actions",
    vsCol2Bullet3: "Works with QR code labels and digital box records",
    vsCol2Bullet4: "Supports item names, remarks, photos, locations, and categories",
    vsCol2Bullet5: "Useful for families, students, movers, roommates, and small teams",
    vsCol2Bullet6: "Can work together with shared inventory and moving box features",
    
    bestUsesTitle: "Best Uses for a Multilingual Inventory App",
    bestUsesIntro: "Use QrSortable’s Multilingual Inventory App for:",
    bestUsesList: [
      "International moving",
      "Family storage organization",
      "Bilingual household inventory",
      "Shared apartment storage",
      "Student storage abroad",
      "Moving boxes",
      "Storage rooms",
      "Garage storage",
      "Basement storage",
      "Attic storage",
      "Closet organization",
      "Plastic storage bins",
      "Holiday decorations",
      "Seasonal clothing",
      "Books and documents",
      "Kitchen boxes",
      "Office archives",
      "Small business storage",
      "Product samples",
      "Tools and spare parts",
      "Shared team storage",
      "Multilingual moving helpers"
    ],
    
    tipsTitle: "Tips for Multilingual Inventory Organization",
    tipsIntro: "For better results in multilingual homes or teams:",
    tipsList: [
      "Choose the preferred app language during setup.",
      "Use consistent box names such as “Garage—Tools” or “Bedroom—Winter”.",
      "Add item photos for important or valuable items.",
      "Use remarks for details such as fragile, serial number, keep dry, or item condition.",
      "If multiple languages are used in one household, keep item names simple and consistent.",
      "Add room names or categories that everyone understands.",
      "Use QR code labels so boxes can be scanned instead of guessed.",
      "Use search to find items by name, remark, location, or category.",
      "Use Multi-User Sharing only with trusted users if sharing inventory across devices."
    ],
    
    practicalTitle: "A Practical App for Global and Shared Storage",
    practicalDesc: "QrSortable is not only for one language or one person. It is designed for everyday storage situations where multiple people may need to scan boxes, add items, search for belongings, or update inventory. With a multilingual interface, QR code labels, item photos, remarks, search, and shared inventory options, QrSortable helps make storage more accessible for international families, students, roommates, and small teams.",
    
    workflowTitle: "Works with the QrSortable Inventory Workflow",
    workflowDesc: "QrSortable links physical QR code labels to digital box records. After scanning a label, users can save the box location and category, then add items with names, remarks, and photos. Later, users can search across box locations, categories, item names, and remarks. This workflow becomes easier when the app interface is available in a language the user understands.",
    
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      {
        q: "Which languages does QrSortable currently support?",
        a: "QrSortable supports a multilingual app interface in English, German, French, and Spanish. Users can choose a supported language to make the inventory workflow easier to understand."
      },
      {
        q: "What is a Multilingual Inventory App?",
        a: "A Multilingual Inventory App is an inventory app that supports more than one interface language. QrSortable helps users organize boxes, bins, moving inventory, and storage records with a multilingual interface."
      },
      {
        q: "Can I use QrSortable in my native language?",
        a: "If your preferred language is one of QrSortable’s supported languages, you can use the app interface in that language. Supported languages include English, German, French, and Spanish."
      },
      {
        q: "Will my item descriptions translate automatically?",
        a: "Custom text such as item names, remarks, and notes is saved in the language you type. The app interface can be shown in supported languages, but user-entered descriptions should not be assumed to translate automatically."
      },
      {
        q: "Can family members use QrSortable in different languages?",
        a: "QrSortable is useful for multilingual families because the app supports multiple interface languages. If shared inventory is enabled, trusted users can access the same inventory while using a supported language that fits their needs."
      },
      {
        q: "Is QrSortable useful for international moving?",
        a: "Yes. QrSortable can help during international moves by organizing moving boxes, storage locations, item photos, remarks, and categories in a clear QR code-based inventory system."
      },
      {
        q: "Does search work with different languages?",
        a: "QrSortable search works across typed item names, remarks, box locations, and categories. For best results, search using the words that were entered into the inventory records."
      },
      {
        q: "Can QR labels work for users who speak different languages?",
        a: "Yes. QR code labels connect physical boxes to digital inventory records. The app interface can help supported-language users navigate the inventory more clearly, while item names and remarks remain based on what users entered."
      },
      {
        q: "Is this useful for multilingual teams or offices?",
        a: "Yes. Small teams and offices can use QrSortable to organize archive boxes, supplies, equipment, product samples, and shared storage areas with a multilingual app interface."
      },
      {
        q: "Can I switch the app language later?",
        a: "QrSortable allows users to work with supported languages. If the app settings provide language selection, users can choose the language that best fits their needs."
      },
      {
        q: "How should I name boxes in a multilingual household?",
        a: "Use simple and consistent names. For example, combine location and category, such as “Garage—Tools”, “Bedroom—Winter”, or a version that all household members understand."
      },
      {
        q: "Does multilingual support replace item photos?",
        a: "No. Item photos are still useful because they help users identify stored belongings visually, especially when item names are written in another language."
      }
    ],
    
    finalCtaTitle: "Organize Storage in a Language That Works for You",
    finalCtaDesc1: "QrSortable’s Multilingual Inventory App helps international families, bilingual households, students, movers, and small teams organize boxes with QR code labels, item photos, remarks, locations, and supported app languages.",
    finalCtaDesc2: "Scan labels, add items, and manage storage with a multilingual QR code inventory app."
  },
  DE: {
    seoTitle: "Mehrsprachige Inventar-App | Lagerung in Ihrer Sprache organisieren",
    seoDesc: "Nutzen Sie QrSortable auf Deutsch, Englisch, Französisch oder Spanisch, um Kisten, Lagerbehälter, Umzugsinventar und gemeinsame Haushaltsgegenstände mit QR-Code-Etiketten zu organisieren.",
    backToHome: "Zurück zur Startseite",
    home: "Startseite",
    features: "Funktionen",
    pageTitleBreadcrumb: "Mehrsprachige Inventar-App",
    badge: "Mehrsprachige Unterstützung",
    heroTitle: "Mehrsprachige Inventar-App: Lagerung in Ihrer eigenen Sprache organisieren",
    heroSubtitle: "QrSortable hilft Benutzern, Kisten, Behälter, Umzugsinventar und gemeinsame Lagerbestände mit einer mehrsprachigen App-Oberfläche zu organisieren. Nutzen Sie unterstützte Sprachen wie Deutsch, Englisch, Französisch und Spanisch, um die Lagerung für Familien, Umzugshelfer, Teams und internationale Benutzer zu erleichtern.",
    heroSupportingText: "Die Lagerung ist einfacher, wenn die App für alle verständlich ist. QrSortable hilft Benutzern, Etiketten zu scannen, Artikel hinzuzufügen, Kisten zu durchsuchen und das Inventar in einer Sprache zu verwalten, die sie verstehen.",
    ctaGetLabels: "Smarte Etiketten holen",
    ctaExploreSecure: "Sichere Verfolgung entdecken",
    
    whatIsTitle: "Was ist eine mehrsprachige Inventar-App?",
    whatIsDesc1: "Eine mehrsprachige Inventar-App ist ein Inventarsystem, das mehr als eine Oberflächensprache unterstützt. Anstatt jeden Benutzer zu zwingen, in einer einzigen Sprache zu arbeiten, hilft QrSortable Benutzern, Lagerbestände in unterstützten App-Sprachen wie Deutsch, Englisch, Französisch und Spanisch zu organisieren.",
    whatIsDesc2: "QrSortable verbindet physische QR-Code-Etiketten mit digitalen Kisteneinträgen. Jeder Eintrag kann einen Kistenstandort, eine Kategorie, Artikelnamen, Anmerkungen und Fotos enthalten. Dank der mehrsprachigen Unterstützung wird die App-Oberfläche für internationale Familien, zweisprachige Haushalte, Studenten im Ausland, kleine Teams und Menschen, die zwischen Ländern umziehen, einfacher zu verstehen.",
    whatIsDesc3: "Dies ist besonders nützlich, wenn mehr als eine Person beim Packen, Lagern, Suchen oder Auspacken hilft.",
    
    howItWorksTitle: "So funktioniert die mehrsprachige Unterstützung von QrSortable",
    step1Title: "Wählen Sie Ihre bevorzugte Sprache",
    step1Desc: "Beim ersten Start können Benutzer eine bevorzugte Sprache auswählen. QrSortable unterstützt eine mehrsprachige Benutzeroberfläche auf Deutsch, Englisch, Französisch und Spanisch.",
    step2Title: "Nutzen Sie vertraute Menüs und Schaltflächen",
    step2Desc: "Die App-Oberfläche hilft Benutzern, wichtige Aktionen wie das Scannen von Etiketten, das Erstellen von Kisten, das Hinzufügen von Artikeln, das Durchsuchen des Inventars, das Öffnen des Menüs und das Verwalten von Lagereinträgen in einer unterstützten Sprache auszuführen.",
    step3Title: "Artikel, Anmerkungen und Fotos hinzufügen",
    step3Desc: "Benutzer können Artikelnamen, Anmerkungen und Fotos zu Kisteneinträgen hinzufügen. Benutzerdefinierter Text wie Artikelnamen und Notizen wird in der vom Benutzer geschriebenen Sprache gespeichert, während die App-Oberfläche in den unterstützten Sprachen verfügbar bleibt.",
    step4Title: "Durchsuchen Sie Ihr gesamtes Inventar",
    step4Desc: "Die QrSortable-Suche funktioniert über Artikelnamen, Anmerkungen, Kistenstandorte und Kategorien hinweg. Verwenden Sie für beste Ergebnisse in mehrsprachigen Haushalten oder Teams klare und konsistente Namen für wichtige Artikel und Kistenstandorte.",
    step5Title: "Verwendung mit gemeinsamen Inventarfunktionen",
    step5Desc: "In Kombination mit der Premium-Mehrbenutzerfreigabe können vertrauenswürdige Benutzer von verschiedenen Geräten aus auf ein gemeinsames Inventar zugreifen. Dies ist hilfreich, wenn Familienmitglieder oder Teammitglieder unterschiedliche Sprachen bevorzugen.",
    
    whyTitle: "Warum eine mehrsprachige Inventar-App verwenden?",
    whySubtitle: "Die Lagerung ist einfacher, wenn alle Beteiligten die App problemlos bedienen können.",
    whyItem1Title: "Lagerung für alle einfacher machen",
    whyItem1Desc: "In vielen Haushalten weiß nur eine Person, wo alles gelagert ist. Eine mehrsprachige Inventar-App hilft mehr Familienmitgliedern, Mitbewohnern oder Helfern, das System mit weniger Verwirrung zu nutzen.",
    whyItem2Title: "Hilfreich bei internationalen Umzügen",
    whyItem2Desc: "Internationale Umzüge umfassen oft verschiedene Sprachen, Standorte, Umzugsunternehmen und temporäre Lagerungen. QrSortable hilft Benutzern, Kisteneinträge übersichtlich zu halten, während sie Artikel über Häuser, Wohnungen, Lagerräume oder Umzugskisten hinweg organisieren.",
    whyItem3Title: "Besser für zweisprachige und mehrsprachige Haushalte",
    whyItem3Desc: "Familien und Mitbewohner bevorzugen oft unterschiedliche Sprachen. Die mehrsprachige Oberfläche von QrSortable hilft mehr Menschen, sich am Organisieren von Kisten, Hinzufügen von Artikeln, Scannen von Etiketten und Suchen nach gelagerten Besitztümern zu beteiligen.",
    whyItem4Title: "Nützlich für kleine Teams und Büros",
    whyItem4Desc: "Kleine Teams können QrSortable verwenden, um Dokumente, Büromaterialien, Archivboxen, Produktmuster oder Geräte zu organisieren. Eine mehrsprachige Benutzeroberfläche kann tägliche Inventaraufgaben für Benutzer erleichtern, die unterschiedliche Sprachen bevorzugen.",
    whyItem5Title: "Weniger Rätselraten bei gemeinsamer Lagerung",
    whyItem5Desc: "Wenn Menüs, Schaltflächen und Aktionen einfacher zu verstehen sind, ist es unwahrscheinlicher, dass Benutzer raten müssen, worauf sie tippen sollen. Dies ist wichtig für gemeinsame Schränke, Garagen, Keller, Dachböden, Lagerräume und Bürolagerbereiche.",
    
    examplesTitle: "Praxisbeispiele für eine mehrsprachige Inventar-App",
    ex1Title: "Internationale Familie zieht zwischen Ländern um",
    ex1Desc: "Eine Familie zieht von Frankreich nach Deutschland und packt Kleidung, Bücher, Küchenutensilien und Dokumente in beschriftete Kisten. Eine Person bevorzugt Französisch, eine andere Englisch, und lokale Helfer arbeiten möglicherweise bequemer auf Deutsch. QrSortable hilft dabei, das Kisteninventar mit einer mehrsprachigen Oberfläche und klaren, auf QR-Codes basierenden Kisteneinträgen einfacher zu verwalten.",
    ex2Title: "Lagerung in zweisprachigen Haushalten",
    ex2Desc: "Ein zweisprachiger Haushalt lagert saisonale Kleidung, Feiertagsdekorationen, Schulmaterialien und Haushaltsgegenstände im Keller und in Schränken. Mit QrSortable können Familienmitglieder die von ihnen bevorzugte App-Sprache verwenden, während sie Kistenstandorte, Artikelfotos und Lagerdetails überprüfen.",
    ex3Title: "Lagerung für internationale Studenten",
    ex3Desc: "Ein Student im Ausland lagert während der Semesterferien Bücher, Kleidung, Elektronik und Dokumente in Kisten. Eine mehrsprachige Inventar-App hilft dem Studenten, die Lagerung übersichtlicher zu verwalten, wenn er zwischen Wohnungen, Wohnheimzimmern, Schließfächern oder temporären Unterkünften wechselt.",
    ex4Title: "Gemeinsame Wohnung oder Lagerung für Mitbewohner",
    ex4Desc: "Mitbewohner teilen sich Lagerregale, Küchenboxen, Reinigungsmittel und saisonale Artikel. Eine mehrsprachige App-Oberfläche kann es jedem vertrauenswürdigen Benutzer erleichtern, den Inventar-Workflow zu verstehen und gelagerte Artikel zu finden, ohne sich auf eine einzige Person verlassen zu müssen.",
    ex5Title: "Kleines Büro mit mehrsprachigem Personal",
    ex5Desc: "Ein kleines Büro lagert archivierte Dokumente, Verbrauchsmaterialien, Ersatzgeräte und Produktmuster. QrSortable hilft Teammitgliedern, Kisten mit QR-Code-Etiketten, Artikelnamen, Anmerkungen, Fotos, Standorten und unterstützten App-Sprachen für eine klarere tägliche Nutzung zu organisieren.",
    ex6Title: "Umzugskisten mit internationalen Helfern",
    ex6Desc: "Während eines Umzugs sprechen Helfer möglicherweise verschiedene Sprachen. QR-Code-Etiketten und eine mehrsprachige App-Oberfläche helfen Benutzern, Kisten zu scannen, Inhalte zu überprüfen und grundlegende Lageraktionen einfacher zu verstehen.",
    
    whoTitle: "Wer nutzt einen mehrsprachigen Organizer?",
    who1Title: "Internationale Familien",
    who1Desc: "Organisieren Sie Kisten, Umzugsinventar, saisonale Lagerung und Haushaltsgegenstände, wenn Familienmitglieder unterschiedliche Sprachen bevorzugen.",
    who2Title: "Zweisprachige Haushalte",
    who2Desc: "Machen Sie die gemeinsame Lagerung einfacher für Menschen, die im täglichen Leben Deutsch, Englisch, Französisch oder Spanisch sprechen.",
    who3Title: "Menschen, die ins Ausland ziehen",
    who3Desc: "Halten Sie Lager- und Umzugskisten während internationaler Umzüge, temporärer Lagerung und des Auspackens einfacher zu verwalten.",
    who4Title: "Studenten im Ausland",
    who4Desc: "Verfolgen Sie Lernmaterialien, Kleidung, Elektronik, Dokumente und gelagerte Kisten in Wohnheimen, Wohnungen oder Schließfächern.",
    who5Title: "Kleine Teams und Büros",
    who5Desc: "Organisieren Sie gemeinsame Büromaterialien, Archivboxen, Produktmuster, Werkzeuge und Lagerregale mit einer klareren mehrsprachigen App-Navigation.",
    who6Title: "Mitbewohner und Benutzer gemeinsamer Lagerungen",
    who6Desc: "Helfen Sie mehreren Benutzern, Kisteneinträge, Standorte und Artikeldetails in gemeinsamen Schränken, Kellern, Garagen und Lagerräumen zu verstehen.",
    
    vsTitle: "Mehrsprachige Inventar-App vs. einsprachige Inventar-Tools",
    vsDesc: "Eine einsprachige Inventar-App kann gut funktionieren, wenn jeder Benutzer dieselbe Sprache versteht. Aber die gemeinsame Lagerung ist oft komplexer. Familien, Mitbewohner, Studenten, Umzugsunternehmen und Teams bevorzugen beim gleichen Lagerungs-Workflow oft unterschiedliche Sprachen. Die mehrsprachige Inventar-App von QrSortable hilft dabei, wichtige Aktionen verständlicher zu machen, indem sie mehrere App-Oberflächensprachen unterstützt. Benutzer können Etiketten scannen, Kisten verwalten, Artikel hinzufügen, Fotos anzeigen und das Inventar mit klarerer Navigation durchsuchen.",
    vsCol1Title: "Einsprachige Inventar-Tools",
    vsCol1Bullet1: "Für einige Benutzer möglicherweise schwerer zu verstehen",
    vsCol1Bullet2: "Kann Verwirrung bei Schaltflächen, Menüs und Aktionen stiften",
    vsCol1Bullet3: "Weniger praktisch für internationale Haushalte",
    vsCol1Bullet4: "Weniger praktikabel für mehrsprachige Umzüge oder gemeinsame Lagerung",
    vsCol1Bullet5: "Verlässt sich oft auf eine einzige Person zur Verwaltung des Inventars",
    vsCol1Bullet6: "Bietet keine flexible Sprachauswahl für Helfer",
    vsCol2Title: "QrSortable Mehrsprachige Inventar-App",
    vsCol2Bullet1: "Unterstützt App-Oberflächensprachen wie Deutsch, Englisch, Französisch und Spanisch",
    vsCol2Bullet2: "Hilft mehr Benutzern, grundlegende Lageraktionen zu verstehen",
    vsCol2Bullet3: "Funktioniert mit QR-Code-Etiketten und digitalen Kisteneinträgen",
    vsCol2Bullet4: "Unterstützt Artikelnamen, Anmerkungen, Fotos, Standorte und Kategorien",
    vsCol2Bullet5: "Nützlich für Familien, Studenten, Umzugsunternehmen, Mitbewohner und kleine Teams",
    vsCol2Bullet6: "Kann mit gemeinsamen Inventar- und Umzugskistenfunktionen kombiniert werden",
    
    bestUsesTitle: "Beste Einsatzmöglichkeiten für eine mehrsprachige Inventar-App",
    bestUsesIntro: "Nutzen Sie die mehrsprachige Inventar-App von QrSortable für:",
    bestUsesList: [
      "Internationaler Umzug",
      "Organisation der Heimlagerung",
      "Zweisprachiges Haushaltsinventar",
      "Gemeinsame Wohnungsaufbewahrung",
      "Studentische Lagerung im Ausland",
      "Umzugskisten",
      "Lagerräume",
      "Garagenlagerung",
      "Kellerlagerung",
      "Dachbodenlagerung",
      "Schrankorganisation",
      "Kunststoff-Lagerbehälter",
      "Feiertagsdekorationen",
      "Saisonale Kleidung",
      "Bücher und Dokumente",
      "Küchenboxen",
      "Büroarchive",
      "Lagerung für kleine Unternehmen",
      "Produktmuster",
      "Werkzeuge und Ersatzteile",
      "Gemeinsames Team-Lager",
      "Mehrsprachige Umzugshelfer"
    ],
    
    tipsTitle: "Tipps für die mehrsprachige Inventarorganisation",
    tipsIntro: "Für bessere Ergebnisse in mehrsprachigen Haushalten oder Teams:",
    tipsList: [
      "Wählen Sie bei der Einrichtung die bevorzugte App-Sprache.",
      "Verwenden Sie einheitliche Kistennamen wie „Garage—Werkzeuge“ oder „Schlafzimmer—Winter“.",
      "Fügen Sie Artikelfotos für wichtige oder wertvolle Gegenstände hinzu.",
      "Verwenden Sie Anmerkungen für Details wie zerbrechlich, Seriennummer, trocken lagern oder Artikelzustand.",
      "Wenn in einem Haushalt mehrere Sprachen gesprochen werden, halten Sie die Artikelnamen einfach und einheitlich.",
      "Fügen Sie Raumnamen oder Kategorien hinzu, die jeder versteht.",
      "Verwenden Sie QR-Code-Etiketten, damit Kisten gescannt statt erraten werden können.",
      "Nutzen Sie die Suche, um Artikel nach Name, Anmerkung, Standort oder Kategorie zu finden.",
      "Nutzen Sie die Mehrbenutzerfreigabe nur mit vertrauenswürdigen Personen, wenn Sie das Inventar geräteübergreifend teilen."
    ],
    
    practicalTitle: "Eine praktische App für globale und gemeinsame Lagerung",
    practicalDesc: "QrSortable ist nicht nur für eine Sprache oder eine Person gedacht. Sie ist für alltägliche Lagersituationen konzipiert, in denen mehrere Personen Kisten scannen, Artikel hinzufügen, nach Besitztümern suchen oder das Inventar aktualisieren müssen. Mit einer mehrsprachigen Benutzeroberfläche, QR-Code-Etiketten, Artikelfotos, Anmerkungen, Suche und Optionen für gemeinsames Inventar hilft QrSortable, die Lagerung für internationale Familien, Studenten, Mitbewohner und kleine Teams zugänglicher zu machen.",
    
    workflowTitle: "Funktioniert mit dem QrSortable-Inventar-Workflow",
    workflowDesc: "QrSortable verknüpft physische QR-Code-Etiketten mit digitalen Kisteneinträgen. Nach dem Scannen eines Etiketts können Benutzer den Standort und die Kategorie der Kiste speichern und dann Artikel mit Namen, Anmerkungen und Fotos hinzufügen. Später können Benutzer nach Kistenstandorten, Kategorien, Artikelnamen und Anmerkungen suchen. Dieser Workflow wird einfacher, wenn die App-Oberfläche in einer Sprache verfügbar ist, die der Benutzer versteht.",
    
    faqTitle: "Häufig gestellte Fragen",
    faqItems: [
      {
        q: "Welche Sprachen unterstützt QrSortable derzeit?",
        a: "QrSortable unterstützt eine mehrsprachige App-Oberfläche auf Deutsch, Englisch, Französisch und Spanisch. Benutzer können eine unterstützte Sprache wählen, um den Inventar-Workflow verständlicher zu machen."
      },
      {
        q: "Was ist eine mehrsprachige Inventar-App?",
        a: "Eine mehrsprachige Inventar-App ist eine Inventar-App, die mehr als eine Benutzeroberflächensprache unterstützt. QrSortable hilft Benutzern, Kisten, Behälter, Umzugsinventar und Lagerbestände mit einer mehrsprachigen Oberfläche zu organisieren."
      },
      {
        q: "Kann ich QrSortable in meiner Muttersprache verwenden?",
        a: "Wenn Ihre bevorzugte Sprache eine der von QrSortable unterstützten Sprachen ist, können Sie die App-Oberfläche in dieser Sprache verwenden. Zu den unterstützten Sprachen gehören Deutsch, Englisch, Französisch und Spanisch."
      },
      {
        q: "Werden meine Artikelbeschreibungen automatisch übersetzt?",
        a: "Benutzerdefinierter Text wie Artikelnamen, Anmerkungen und Notizen wird in der Sprache gespeichert, in der Sie ihn eingeben. Die App-Oberfläche kann in unterstützten Sprachen angezeigt werden, aber es sollte nicht davon ausgegangen werden, dass benutzerseitig eingegebene Beschreibungen automatisch übersetzt werden."
      },
      {
        q: "Können Familienmitglieder QrSortable in verschiedenen Sprachen verwenden?",
        a: "QrSortable ist für mehrsprachige Familien sehr nützlich, da die App mehrere Oberflächensprachen unterstützt. Wenn das gemeinsame Inventar aktiviert ist, können vertrauenswürdige Benutzer auf dasselbe Inventar zugreifen und dabei eine unterstützte Sprache verwenden, die ihren Bedürfnissen entspricht."
      },
      {
        q: "Ist QrSortable nützlich für internationale Umzüge?",
        a: "Ja. QrSortable kann bei internationalen Umzügen helfen, indem es Umzugskisten, Lagerorte, Artikelfotos, Anmerkungen und Kategorien in einem übersichtlichen, auf QR-Codes basierenden Inventarsystem organisiert."
      },
      {
        q: "Funktioniert die Suche mit verschiedenen Sprachen?",
        a: "Die QrSortable-Suche funktioniert über eingegebene Artikelnamen, Anmerkungen, Kistenstandorte und Kategorien hinweg. Suchen Sie für beste Ergebnisse mit den Worten, die in die Inventareinträge eingegeben wurden."
      },
      {
        q: "Können QR-Etiketten für Benutzer funktionieren, die verschiedene Sprachen sprechen?",
        a: "Ja. QR-Code-Etiketten verbinden physische Kisten mit digitalen Inventareinträgen. Die App-Oberfläche hilft Benutzern der unterstützten Sprachen, sich klarer im Inventar zurechtzufinden, während Artikelnamen und Anmerkungen auf den Eingaben der Benutzer basieren."
      },
      {
        q: "Ist dies für mehrsprachige Teams oder Büros nützlich?",
        a: "Ja. Kleine Teams und Büros können QrSortable verwenden, um Archivboxen, Verbrauchsmaterialien, Geräte, Produktmuster und gemeinsame Lagerbereiche mit einer mehrsprachigen App-Oberfläche zu organisieren."
      },
      {
        q: "Kann ich die App-Sprache später ändern?",
        a: "QrSortable ermöglicht es Benutzern, mit unterstützten Sprachen zu arbeiten. Wenn die App-Einstellungen eine Sprachauswahl bieten, können Benutzer die Sprache wählen, die am besten zu ihren Bedürfnissen passt."
      },
      {
        q: "Wie sollte ich Kisten in einem mehrsprachigen Haushalt benennen?",
        a: "Verwenden Sie einfache und einheitliche Namen. Kombinieren Sie beispielsweise Standort und Kategorie, wie „Garage—Werkzeuge“, „Schlafzimmer—Winter“, oder eine Variante, die alle Haushaltsmitglieder verstehen."
      },
      {
        q: "Ersetzt die mehrsprachige Unterstützung Artikelfotos?",
        a: "Nein. Artikelfotos sind weiterhin nützlich, da sie Benutzern helfen, gelagerte Besitztümer visuell zu identifizieren, insbesondere wenn Artikelnamen in einer anderen Sprache verfasst sind."
      }
    ],
    
    finalCtaTitle: "Lagerung in einer Sprache organisieren, die für Sie funktioniert",
    finalCtaDesc1: "Die mehrsprachige Inventar-App von QrSortable hilft internationalen Familien, zweisprachigen Haushalten, Studenten, Umziehenden und kleinen Teams, Kisten mit QR-Code-Etiketten, Artikelfotos, Anmerkungen, Standorten und unterstützten App-Sprachen zu organisieren.",
    finalCtaDesc2: "Scannen Sie Etiketten, fügen Sie Artikel hinzu und verwalten Sie die Lagerung mit einer mehrsprachigen QR-Code-Inventar-App."
  },
  FR: {
    seoTitle: "Application d'inventaire multilingue | Organisez votre stockage dans votre langue",
    seoDesc: "Utilisez QrSortable en français, anglais, allemand ou espagnol pour organiser vos cartons, bacs de rangement, inventaires de déménagement et objets ménagers partagés grâce aux étiquettes de code QR.",
    backToHome: "Retour à l'accueil",
    home: "Accueil",
    features: "Fonctionnalités",
    pageTitleBreadcrumb: "Application d'inventaire multilingue",
    badge: "Accessibilité globale",
    heroTitle: "Application d'inventaire multilingue : organisez votre stockage dans votre propre langue",
    heroSubtitle: "QrSortable aide les utilisateurs à organiser leurs cartons, bacs, inventaires de déménagement et stockages partagés grâce à une interface d'application multilingue. Utilisez des langues prises en charge telles que le français, l'anglais, l'allemand et l'espagnol pour faciliter le stockage pour les familles, les déménageurs, les équipes et les utilisateurs internationaux.",
    heroSupportingText: "Le stockage est plus facile lorsque l'application est claire pour tout le monde. QrSortable aide les utilisateurs à scanner des étiquettes, ajouter des articles, rechercher des cartons et gérer l'inventaire en utilisant une langue qu'ils comprennent.",
    ctaGetLabels: "Obtenir des étiquettes intelligentes",
    ctaExploreSecure: "Explorer le suivi sécurisé",
    
    whatIsTitle: "Qu'est-ce qu'une application d'inventaire multilingue ?",
    whatIsDesc1: "Une application d'inventaire multilingue est un système d'inventaire qui prend en charge plusieurs langues d'interface. Au lieu de forcer chaque utilisateur à travailler dans une seule langue, QrSortable aide les utilisateurs à organiser leur stockage avec des langues d'application prises en charge telles que le français, l'anglais, l'allemand et l'espagnol.",
    whatIsDesc2: "QrSortable connecte des étiquettes physiques de code QR à des fiches de cartons numériques. Chaque fiche peut inclure un emplacement de carton, une catégorie, des noms d'articles, des remarques et des photos. Grâce au support multilingue, l'interface de l'application devient plus facile à comprendre pour les familles internationales, les foyers bilingues, les étudiants à l'étranger, les petites équipes et les personnes qui déménagent d'un pays à l'autre.",
    whatIsDesc3: "C'est particulièrement utile lorsque plusieurs personnes participent à l'emballage, au stockage, à la recherche ou au déballage.",
    
    howItWorksTitle: "Comment fonctionne le support multilingue de QrSortable",
    step1Title: "Choisissez votre langue préférée",
    step1Desc: "Lors du premier lancement, les utilisateurs peuvent sélectionner leur langue préférée. QrSortable prend en charge une interface multilingue en français, anglais, allemand et espagnol.",
    step2Title: "Utilisez des menus et boutons familiers",
    step2Desc: "L'interface de l'application aide les utilisateurs à naviguer parmi les actions clés telles que scanner des étiquettes, créer des cartons, ajouter des articles, rechercher dans l'inventaire, ouvrir le menu et gérer les fiches de stockage dans une langue prise en charge.",
    step3Title: "Ajoutez des articles, des remarques et des photos",
    step3Desc: "Les utilisateurs peuvent ajouter des noms d'articles, des remarques et des photos aux fiches de cartons. Le texte personnalisé, tel que les noms d'articles et les notes, est enregistré dans la langue saisie par l'utilisateur, tandis que l'interface de l'application reste disponible dans les langues prises en charge.",
    step4Title: "Recherchez dans tout votre inventaire",
    step4Desc: "La recherche QrSortable fonctionne à travers les noms d'articles, les remarques, les emplacements de cartons et les catégories. Pour de meilleurs résultats dans les foyers ou équipes multilingues, utilisez des noms clairs et cohérents pour les articles importants et les emplacements de cartons.",
    step5Title: "Utilisez avec les fonctionnalités d'inventaire partagé",
    step5Desc: "Utilisé conjointement avec le partage multi-utilisateur Premium, les utilisateurs de confiance peuvent accéder à un inventaire partagé sur plusieurs appareils. C'est pratique lorsque les membres de la famille ou de l'équipe préfèrent des langues différentes.",
    
    whyTitle: "Pourquoi utiliser une application d'inventaire multilingue ?",
    whySubtitle: "L'organisation du stockage devient un jeu d'enfant lorsque l'application parle la langue de chaque utilisateur.",
    whyItem1Title: "Faciliter le stockage pour tout le monde",
    whyItem1Desc: "Dans de nombreux foyers, une seule personne sait où tout est stocké. Une application d'inventaire multilingue aide un plus grand nombre de membres de la famille, de colocataires ou d'aidants à utiliser le système avec moins de confusion.",
    whyItem2Title: "Utile pour les déménagements internationaux",
    whyItem2Desc: "Les déménagements internationaux impliquent souvent différentes langues, des lieux divers, des déménageurs et des stockages temporaires. QrSortable aide les utilisateurs à garder des fiches de cartons claires tout en organisant les objets à travers les maisons, appartements, garde-meubles ou cartons de déménagement.",
    whyItem3Title: "Idéal pour les foyers bilingues et multilingues",
    whyItem3Desc: "Les familles et colocataires peuvent préférer des langues différentes. L'interface multilingue de QrSortable aide plus de personnes à participer à l'organisation des cartons, à l'ajout d'articles, au scan d'étiquettes et à la recherche d'effets personnels stockés.",
    whyItem4Title: "Pratique pour les petites équipes et bureaux",
    whyItem4Desc: "Les petites équipes peuvent utiliser QrSortable pour organiser des documents, des fournitures de bureau, des cartons d'archives, des échantillons de produits ou du matériel. Une interface multilingue peut faciliter les tâches d'inventaire quotidiennes pour les utilisateurs qui préfèrent différentes langues.",
    whyItem5Title: "Réduire les suppositions dans le stockage partagé",
    whyItem5Desc: "Lorsque les menus, les boutons et les actions sont faciles à comprendre, les utilisateurs sont moins susceptibles de deviner sur quoi appuyer. C'est important pour les placards partagés, les garages, les sous-sols, les greniers, les pièces de stockage et les zones de stockage de bureau.",
    
    examplesTitle: "Exemples réels d'application d'inventaire multilingue",
    ex1Title: "Famille internationale déménageant d'un pays à un autre",
    ex1Desc: "Une famille déménage de France en Allemagne et emballe des vêtements, des livres, des articles de cuisine et des documents dans des cartons étiquetés. Une personne préfère le français, une autre l'anglais, et les assistants locaux peuvent travailler plus confortablement en allemand. QrSortable aide à garder l'inventaire des cartons plus facile à gérer grâce à une interface multilingue et des fiches de cartons claires basées sur des codes QR.",
    ex2Title: "Stockage dans un foyer bilingue",
    ex2Desc: "Un foyer bilingue stocke des vêtements de saison, des décorations de fête, du matériel scolaire et des articles ménagers dans un sous-sol et des placards. Avec QrSortable, les membres de la famille peuvent utiliser la langue d'application qu'ils préfèrent tout en vérifiant les emplacements des cartons, les photos d'articles et les détails de stockage.",
    ex3Title: "Stockage pour étudiant international",
    ex3Desc: "Un étudiant à l'étranger stocke des livres, des vêtements, des appareils électroniques et des documents dans des cartons pendant les vacances universitaires. Une application d'inventaire multilingue aide l'étudiant à gérer son stockage plus clairement lors de ses déplacements entre appartements, chambres universitaires, casiers ou logements temporaires.",
    ex4Title: "Colocation ou stockage partagé entre colocataires",
    ex4Desc: "Les colocataires partagent des étagères de stockage, des cartons de cuisine, des produits de nettoyage et des articles de saison. Une interface d'application multilingue peut faciliter la compréhension du flux de travail d'inventaire pour chaque utilisateur de confiance et lui permettre de localiser les objets stockés sans dépendre d'une seule personne.",
    ex5Title: "Petit bureau avec personnel multilingue",
    ex5Desc: "Un petit bureau stocke des documents archivés, des fournitures, du matériel de rechange et des échantillons de produits. QrSortable aide les membres de l'équipe à organiser les cartons avec des étiquettes de code QR, des noms d'articles, des remarques, des photos, des emplacements et des langues d'application prises en charge pour une utilisation quotidienne plus claire.",
    ex6Title: "Cartons de déménagement avec des aides internationaux",
    ex6Desc: "Lors d'un déménagement, les aides peuvent parler des langues différentes. Les étiquettes de code QR et une interface d'application multilingue aident les utilisateurs à scanner les cartons, à vérifier leur contenu et à comprendre plus facilement les actions de stockage de base.",
    
    whoTitle: "Qui utilise un organisateur multilingue ?",
    who1Title: "Familles internationales",
    who1Desc: "Organisez les cartons, l'inventaire de déménagement, le stockage saisonnier et les objets ménagers lorsque les membres de la famille préfèrent des langues différentes.",
    who2Title: "Foyers bilingues",
    who2Desc: "Facilitez le stockage partagé pour les personnes qui utilisent le français, l'anglais, l'allemand ou l'espagnol au quotidien.",
    who3Title: "Personnes s'installant à l'étranger",
    who3Desc: "Gardez la gestion des cartons de stockage et de déménagement plus simple lors des relocalisations internationales, du stockage temporaire et du déballage.",
    who4Title: "Étudiants à l'étranger",
    who4Desc: "Suivez le matériel d'étude, les vêtements, les appareils électroniques, les documents et les cartons stockés dans les dortoirs, appartements ou casiers.",
    who5Title: "Petites équipes et bureaux",
    who5Desc: "Organisez les fournitures de bureau partagées, les cartons d'archives, les échantillons de produits, les outils et les étagères de stockage avec une navigation d'application multilingue plus claire.",
    who6Title: "Colocataires et utilisateurs de stockage partagé",
    who6Desc: "Aidez plusieurs utilisateurs à comprendre les fiches de cartons, les emplacements et les détails des articles dans les placards, sous-sols, garages et pièces de stockage partagés.",
    
    vsTitle: "Application d'inventaire multilingue vs outils d'inventaire unilingues",
    vsDesc: "Une application d'inventaire unilingue peut bien fonctionner lorsque chaque utilisateur comprend la même langue. Mais le stockage partagé est souvent plus complexe. Les familles, les colocataires, les étudiants, les déménageurs et les équipes préfèrent souvent des langues différentes tout en utilisant le même flux d'organisation. L'application d'inventaire multilingue de QrSortable aide à rendre les actions clés plus faciles à comprendre en prenant en charge plusieurs langues d'interface. Les utilisateurs peuvent scanner des étiquettes, gérer des cartons, ajouter des articles, voir des photos et rechercher dans l'inventaire avec une navigation plus claire.",
    vsCol1Title: "Outils d'inventaire unilingues",
    vsCol1Bullet1: "Peuvent être plus difficiles à comprendre pour certains utilisateurs",
    vsCol1Bullet2: "Peuvent créer de la confusion avec les boutons, les menus et les actions",
    vsCol1Bullet3: "Moins pratiques pour les foyers internationaux",
    vsCol1Bullet4: "Moins adaptés aux déménagements multilingues ou au stockage partagé",
    vsCol1Bullet5: "Peuvent dépendre d'une seule personne pour gérer l'inventaire",
    vsCol1Bullet6: "Manquent de flexibilité linguistique pour les assistants ou prestataires",
    vsCol2Title: "Application d'inventaire multilingue QrSortable",
    vsCol2Bullet1: "Prend en charge des langues d'interface telles que le français, l'anglais, l'allemand et l'espagnol",
    vsCol2Bullet2: "Aide un plus grand nombre d'utilisateurs à comprendre les actions de stockage de base",
    vsCol2Bullet3: "Fonctionne avec des étiquettes de code QR et des fiches de cartons numériques",
    vsCol2Bullet4: "Prend en charge les noms d'articles, les remarques, les photos, les emplacements et les catégories",
    vsCol2Bullet5: "Utile pour les familles, les étudiants, les déménageurs, les colocataires et les petites équipes",
    vsCol2Bullet6: "Peut être combinée avec les fonctionnalités d'inventaire partagé et de cartons de déménagement",
    
    bestUsesTitle: "Meilleures utilisations pour une application d'inventaire multilingue",
    bestUsesIntro: "Utilisez l'application d'inventaire multilingue de QrSortable pour :",
    bestUsesList: [
      "Déménagement international",
      "Organisation du stockage familial",
      "Inventaire de foyer bilingue",
      "Stockage en appartement partagé",
      "Stockage étudiant à l'étranger",
      "Cartons de déménagement",
      "Pièces de stockage",
      "Stockage de garage",
      "Stockage de sous-sol",
      "Stockage de grenier",
      "Organisation de placard",
      "Bacs de stockage en plastique",
      "Décorations de fête",
      "Vêtements de saison",
      "Livres et documents",
      "Cartons de cuisine",
      "Archives de bureau",
      "Stockage de petites entreprises",
      "Échantillons de produits",
      "Outils et pièces de rechange",
      "Stockage d'équipe partagé",
      "Aides au déménagement multilingues"
    ],
    
    tipsTitle: "Conseils pour l'organisation d'inventaire multilingue",
    tipsIntro: "Pour de meilleurs résultats dans les foyers ou équipes multilingues :",
    tipsList: [
      "Choisissez la langue d'application préférée lors de la configuration.",
      "Utilisez des noms de cartons cohérents tels que « Garage—Outils » ou « Chambre—Hiver ».",
      "Ajoutez des photos pour les articles importants ou de valeur.",
      "Utilisez des remarques pour des détails tels que fragile, numéro de série, conserver au sec ou état de l'article.",
      "Si plusieurs langues sont utilisées dans un même foyer, gardez des noms d'articles simples et cohérents.",
      "Ajoutez des noms de pièces ou des catégories que tout le monde comprend.",
      "Utilisez des étiquettes de code QR pour que les cartons puissent être scannés plutôt que devinés.",
      "Utilisez la recherche pour trouver des articles par nom, remarque, emplacement ou catégorie.",
      "Utilisez le partage multi-utilisateur uniquement avec des personnes de confiance si vous partagez l'inventaire sur plusieurs appareils."
    ],
    
    practicalTitle: "Une application pratique pour le stockage global et partagé",
    practicalDesc: "QrSortable n'est pas réservé à une seule langue ou à une seule personne. Il est conçu pour les situations de stockage quotidiennes où plusieurs personnes peuvent avoir besoin de scanner des cartons, d'ajouter des articles, de rechercher des effets personnels ou de mettre à jour l'inventaire. Avec une interface multilingue, des étiquettes de code QR, des photos d'articles, des remarques, une recherche performante et des options d'inventaire partagé, QrSortable contribue à rendre le stockage plus accessible pour les familles internationales, les étudiants, les colocataires et les petites équipes.",
    
    workflowTitle: "Compatible avec le flux d'inventaire QrSortable",
    workflowDesc: "QrSortable lie des étiquettes physiques de code QR à des fiches de cartons numériques. Après avoir scanné une étiquette, les utilisateurs peuvent enregistrer l'emplacement et la catégorie du carton, puis ajouter des articles avec des noms, des remarques et des photos. Plus tard, les utilisateurs peuvent effectuer des recherches parmi les emplacements de cartons, les catégories, les noms d'articles et les remarques. Ce flux de travail devient plus facile lorsque l'interface de l'application est disponible dans une langue comprise par l'utilisateur.",
    
    faqTitle: "Foire aux questions",
    faqItems: [
      {
        q: "Quelles langues QrSortable prend-il actuellement en charge ?",
        a: "QrSortable prend en charge une interface d'application multilingue en français, anglais, allemand et espagnol. Les utilisateurs peuvent choisir une langue prise en charge pour rendre le flux de travail d'inventaire plus facile à comprendre."
      },
      {
        q: "Qu'est-ce qu'une application d'inventaire multilingue ?",
        a: "Une application d'inventaire multilingue est une application d'inventaire qui prend en charge plus d'une langue d'interface. QrSortable aide les utilisateurs à organiser leurs cartons, bacs, inventaires de déménagement et fiches de stockage avec une interface multilingue."
      },
      {
        q: "Puis-je utiliser QrSortable dans ma langue maternelle ?",
        a: "Si votre langue préférée fait partie des langues prises en charge par QrSortable, vous pouvez utiliser l'interface de l'application dans cette langue. Les langues prises en charge incluent le français, l'anglais, l'allemand et l'espagnol."
      },
      {
        q: "Mes descriptions d'articles seront-elles traduites automatiquement ?",
        a: "Le texte personnalisé tel que les noms d'articles, les remarques et les notes est enregistré dans la langue dans laquelle vous le saisissez. L'interface de l'application peut être affichée dans les langues prises en charge, mais il ne faut pas s'attendre à ce que les descriptions saisies par les utilisateurs soient traduites automatiquement."
      },
      {
        q: "Les membres de la famille peuvent-ils utiliser QrSortable dans différentes langues ?",
        a: "QrSortable est utile pour les familles multilingues car l'application prend en charge plusieurs langues d'interface. Si l'inventaire partagé est activé, les utilisateurs de confiance peuvent accéder au même inventaire tout en utilisant la langue prise en charge qui correspond à leurs besoins."
      },
      {
        q: "QrSortable est-il utile pour un déménagement international ?",
        a: "Oui. QrSortable peut vous aider lors de déménagements internationaux en organisant les cartons de déménagement, les emplacements de stockage, les photos d'articles, les remarques et les catégories dans un système d'inventaire clair basé sur des codes QR."
      },
      {
        q: "La recherche fonctionne-t-elle avec différentes langues ?",
        a: "La recherche QrSortable fonctionne à travers les noms d'articles, les remarques, les emplacements de cartons et les catégories saisis. Pour de meilleurs résultats, effectuez vos recherches en utilisant les mots qui ont été enregistrés dans les fiches d'inventaire."
      },
      {
        q: "Les étiquettes QR peuvent-elles fonctionner pour des utilisateurs parlant des langues différentes ?",
        a: "Oui. Les étiquettes de code QR connectent des cartons physiques à des fiches d'inventaire numériques. L'interface de l'application aide les utilisateurs parlant les langues prises en charge à naviguer plus clairement dans l'inventaire, tandis que les noms d'articles et les remarques restent basés sur ce que les utilisateurs ont saisi."
      },
      {
        q: "Est-ce utile pour les équipes ou bureaux multilingues ?",
        a: "Oui. Les petites équipes et les bureaux peuvent utiliser QrSortable pour organiser des cartons d'archives, des fournitures, du matériel, des échantillons de produits et des zones de stockage partagées avec une interface d'application multilingue."
      },
      {
        q: "Puis-je changer la langue de l'application plus tard ?",
        a: "QrSortable permet aux utilisateurs de travailler avec les langues prises en charge. Si les paramètres de l'application proposent une sélection de langue, les utilisateurs peuvent choisir la langue qui répond le mieux à leurs besoins."
      },
      {
        q: "Comment dois-je nommer les cartons dans un foyer multilingue ?",
        a: "Utilisez des noms simples et cohérents. Par exemple, combinez l'emplacement et la catégorie, comme « Garage—Outils », « Chambre—Hiver », ou une version comprise par tous les membres du foyer."
      },
      {
        q: "Le support multilingue remplace-t-il les photos d'articles ?",
        a: "No. Les photos d'articles restent très utiles car elles aident les utilisateurs à identifier visuellement les objets stockés, en particulier lorsque les noms d'articles sont rédigés dans une autre langue."
      }
    ],
    
    finalCtaTitle: "Organisez votre stockage dans la langue qui vous convient",
    finalCtaDesc1: "L'application d'inventaire multilingue de QrSortable aide les familles internationales, les foyers bilingues, les étudiants, les déménageurs et les petites équipes à organiser leurs cartons avec des étiquettes de code QR, des photos d'articles, des remarques, des emplacements et des langues d'application prises en charge.",
    finalCtaDesc2: "Scannez des étiquettes, ajoutez des articles et gérez votre stockage avec une application d'inventaire de code QR multilingue."
  },
  ES: {
    seoTitle: "Aplicación de inventario multilingüe | Organice el almacenamiento en su idioma",
    seoDesc: "Use QrSortable en español, inglés, alemán o francés para organizar cajas, contenedores de almacenamiento, inventario de mudanzas y artículos compartidos del hogar con etiquetas de código QR.",
    backToHome: "Volver al inicio",
    home: "Inicio",
    features: "Características",
    pageTitleBreadcrumb: "Aplicación de inventario multilingüe",
    badge: "Usabilidad global",
    heroTitle: "Aplicación de inventario multilingüe: organice el almacenamiento en su propio idioma",
    heroSubtitle: "QrSortable ayuda a los usuarios a organizar cajas, contenedores, inventario de mudanzas y almacenamiento compartido con una interfaz de aplicación multilingüe. Utilice idiomas compatibles como español, inglés, alemán y francés para facilitar el almacenamiento a familias, mudanzas, equipos y usuarios internacionales.",
    heroSupportingText: "El almacenamiento es más fácil cuando la aplicación es clara para todos. QrSortable ayuda a los usuarios a escanear etiquetas, agregar artículos, buscar cajas y administrar el inventario en un idioma que entienden.",
    ctaGetLabels: "Obtener etiquetas inteligentes",
    ctaExploreSecure: "Explorar el seguimiento seguro",
    
    whatIsTitle: "¿Qué es una aplicación de inventario multilingüe?",
    whatIsDesc1: "Una aplicación de inventario multilingüe es un sistema de inventario que admite más de un idioma de interfaz. En lugar de obligar a todos los usuarios a trabajar en un solo idioma, QrSortable ayuda a los usuarios a organizar el almacenamiento con los idiomas de aplicación admitidos, como español, inglés, alemán y francés.",
    whatIsDesc2: "QrSortable conecta etiquetas físicas de códigos QR con registros digitales de cajas. Cada registro puede incluir una ubicación de caja, categoría, nombres de artículos, comentarios y fotos. Con el soporte multilingüe, la interfaz de la aplicación se vuelve más fácil de entender para familias internacionales, hogares bilingües, estudiantes en el extranjero, pequeños equipos y personas que se mudan entre países.",
    whatIsDesc3: "Esto es especialmente útil cuando más de una persona ayuda con el embalaje, el almacenamiento, la búsqueda o el desembalaje.",
    
    howItWorksTitle: "Cómo funciona el soporte multilingüe de QrSortable",
    step1Title: "Elija su idioma preferido",
    step1Desc: "En el primer inicio, los usuarios pueden seleccionar un idioma preferido. QrSortable admite una interfaz multilingüe en español, inglés, alemán y francés.",
    step2Title: "Utilice menús y botones familiares",
    step2Desc: "La interfaz de la aplicación ayuda a los usuarios a navegar por acciones clave como escanear etiquetas, crear cajas, agregar artículos, buscar en el inventario, abrir el menú y administrar registros de almacenamiento en un idioma admitido.",
    step3Title: "Agregue artículos, comentarios y fotos",
    step3Desc: "Los usuarios pueden agregar nombres de artículos, comentarios y fotos a los registros de las cajas. El texto personalizado, como los nombres de los artículos y las notas, se guarda en el idioma que escribe el usuario, mientras que la interfaz de la aplicación puede seguir estando disponible en los idiomas compatibles.",
    step4Title: "Busque en todo su inventario",
    step4Desc: "La búsqueda de QrSortable funciona en nombres de artículos, comentarios, ubicaciones de cajas y categorías. Para obtener mejores resultados en hogares o equipos multilingües, use nombres claros y consistentes para los artículos importantes y las ubicaciones de las cajas.",
    step5Title: "Úselo con funciones de inventario compartido",
    step5Desc: "Cuando se usa junto con el Compartido multiusuario Premium, los usuarios de confianza pueden acceder a un inventario compartido a través de múltiples dispositivos. Esto es útil cuando los miembros de la familia o del equipo prefieren diferentes idiomas.",
    
    whyTitle: "¿Por qué usar una aplicación de inventario multilingüe?",
    whySubtitle: "La organización del almacenamiento es más sencilla cuando la aplicación habla el idioma de cada usuario.",
    whyItem1Title: "Facilitar el almacenamiento para todos",
    whyItem1Desc: "En muchos hogares, solo una persona sabe dónde está guardado todo. Una aplicación de inventario multilingüe ayuda a que más miembros de la familia, compañeros de piso o ayudantes utilicen el sistema con menos confusión.",
    whyItem2Title: "Útil para mudanzas internacionales",
    whyItem2Desc: "Las mudanzas internacionales suelen implicar diferentes idiomas, ubicaciones, empresas de mudanzas y almacenamiento temporal. QrSortable ayuda a los usuarios a mantener registros de cajas claros mientras organizan artículos en casas, apartamentos, trasteros o cajas de mudanza.",
    whyItem3Title: "Mejor para hogares bilingües y multilingües",
    whyItem3Desc: "Las familias y los compañeros de piso pueden preferir diferentes idiomas. La interfaz multilingüe de QrSortable ayuda a que más personas participen en la organización de cajas, la adición de artículos, el escaneo de etiquetas y la búsqueda de pertenencias almacenadas.",
    whyItem4Title: "Útil para pequeños equipos y oficinas",
    whyItem4Desc: "Los equipos pequeños pueden utilizar QrSortable para organizar documentos, material de oficina, cajas de archivo, muestras de productos o equipos. Una interfaz multilingüe puede facilitar las tareas diarias de inventario a los usuarios que prefieren diferentes idiomas.",
    whyItem5Title: "Reduzca las dudas en el almacenamiento compartido",
    whyItem5Desc: "Cuando los menús, botones y acciones son más fáciles de entender, los usuarios tienen menos probabilidades de adivinar qué tocar. Esto es importante para armarios compartidos, garajes, sótanos, desvanes, trasteros y áreas de almacenamiento de oficinas.",
    
    examplesTitle: "Ejemplos reales de una aplicación de inventario multilingüe",
    ex1Title: "Familia internacional que se muda entre países",
    ex1Desc: "Una familia se muda de Francia a Alemania y empaca ropa, libros, utensilios de cocina y documentos en cajas etiquetadas. Una persona prefiere el francés, otra el inglés, y los ayudantes locales pueden trabajar más cómodamente en alemán. QrSortable ayuda a que el inventario de cajas sea más fácil de administrar con una interfaz multilingüe y registros de cajas claros basados en códigos QR.",
    ex2Title: "Almacenamiento en hogares bilingües",
    ex2Desc: "Un hogar bilingüe almacena ropa de temporada, decoraciones navideñas, materiales escolares y artículos para el hogar en un sótano y armarios. Con QrSortable, los miembros de la familia pueden usar el idioma de la aplicación admitido que prefieran mientras verifican las ubicaciones de las cajas, las fotos de los artículos y los detalles del almacenamiento.",
    ex3Title: "Almacenamiento para estudiantes internacionales",
    ex3Desc: "Un estudiante que estudia en el extranjero almacena libros, ropa, productos electrónicos y documentos en cajas durante las vacaciones semestrales. Una aplicación de inventario multilingüe ayuda al estudiante a administrar el almacenamiento de manera más clara cuando se muda entre apartamentos, habitaciones de residencias, casilleros o viviendas temporales.",
    ex4Title: "Apartamento compartido o almacenamiento de compañeros de piso",
    ex4Desc: "Los compañeros de piso comparten estantes de almacenamiento, cajas de cocina, artículos de limpieza y artículos de temporada. Una interfaz de aplicación multilingüe puede facilitar que cada usuario de confianza comprenda el flujo de trabajo del inventario y localice los artículos almacenados sin depender de una sola persona.",
    ex5Title: "Pequeña oficina con personal multilingüe",
    ex5Desc: "Una pequeña oficina almacena documentos archivados, suministros, equipos de repuesto y muestras de productos. QrSortable ayuda a los miembros del equipo a organizar cajas con etiquetas de códigos QR, nombres de artículos, comentarios, fotos, ubicaciones e idiomas de aplicación compatibles para un uso diario más claro.",
    ex6Title: "Cajas de mudanza con ayudantes internacionales",
    ex6Desc: "Durante una mudanza, es posible que los ayudantes hablen diferentes idiomas. Las etiquetas de códigos QR y una interfaz de aplicación multilingüe ayudan a los usuarios a escanear cajas, verificar el contenido y comprender las acciones básicas de almacenamiento con mayor facilidad.",
    
    whoTitle: "¿Quién utiliza un organizador multilingüe?",
    who1Title: "Familias internacionales",
    who1Desc: "Organice cajas, inventario de mudanzas, almacenamiento de temporada y artículos para el hogar cuando los miembros de la familia prefieran diferentes idiomas.",
    who2Title: "Hogares bilingües",
    who2Desc: "Facilite el almacenamiento compartido para las personas que usan español, inglés, alemán o francés en su vida diaria.",
    who3Title: "Personas que se mudan al extranjero",
    who3Desc: "Mantenga el almacenamiento y las cajas de mudanza más fáciles de administrar durante la reubicación internacional, el almacenamiento temporal y el desempaque.",
    who4Title: "Estudiantes en el extranjero",
    who4Desc: "Realice un seguimiento de los materiales de estudio, la ropa, los productos electrónicos, los documentos y las cajas almacenadas en residencias, apartamentos o casilleros.",
    who5Title: "Pequeños equipos y oficinas",
    who5Desc: "Organice suministros de oficina compartidos, cajas de archivo, muestras de productos, herramientas y estantes de almacenamiento con una navegación de aplicación multilingüe más clara.",
    who6Title: "Compañeros de piso y usuarios de almacenamiento compartido",
    who6Desc: "Ayude a varios usuarios a comprender los registros de las cajas, las ubicaciones y los detalles de los artículos en armarios, sótanos, garajes y trasteros compartidos.",
    
    vsTitle: "Aplicación de inventario multilingüe frente a herramientas de inventario de un solo idioma",
    vsDesc: "Una aplicación de inventario de un solo idioma puede funcionar bien cuando todos los usuarios entienden el mismo idioma. Pero el almacenamiento compartido suele ser más complejo. Las familias, los compañeros de piso, los estudiantes, las empresas de mudanzas y los equipos a menudo prefieren diferentes idiomas mientras utilizan el mismo flujo de trabajo de almacenamiento. La aplicación de inventario multilingüe de QrSortable ayuda a que las acciones clave sean más fáciles de entender al admitir múltiples idiomas de interfaz de la aplicación. Los usuarios pueden escanear etiquetas, administrar cajas, agregar artículos, ver fotos y buscar en el inventario con una navegación más clara.",
    vsCol1Title: "Herramientas de un solo idioma",
    vsCol1Bullet1: "Pueden ser más difíciles de entender para algunos usuarios",
    vsCol1Bullet2: "Pueden crear confusión con los botones, menús y acciones",
    vsCol1Bullet3: "Menos conveniente para hogares internacionales",
    vsCol1Bullet4: "Menos práctico para mudanzas multilingües o almacenamiento compartido",
    vsCol1Bullet5: "Pueden depender de una sola persona para administrar el inventario",
    vsCol1Bullet6: "Carecen de flexibilidad de idioma para ayudantes",
    vsCol2Title: "Aplicación multilingüe QrSortable",
    vsCol2Bullet1: "Admite idiomas de interfaz de la aplicación como español, inglés, alemán y francés",
    vsCol2Bullet2: "Ayuda a más usuarios a comprender las acciones principales de almacenamiento",
    vsCol2Bullet3: "Funciona con etiquetas de códigos QR y registros digitales de cajas",
    vsCol2Bullet4: "Admite nombres de artículos, comentarios, fotos, ubicaciones y categorías",
    vsCol2Bullet5: "Útil para familias, estudiantes, mudanzas, compañeros de piso y equipos pequeños",
    vsCol2Bullet6: "Puede funcionar junto con las funciones de inventario compartido y cajas de mudanza",
    
    bestUsesTitle: "Mejores usos para una aplicación de inventario multilingüe",
    bestUsesIntro: "Utilice la aplicación de inventario de almacenamiento multilingüe de QrSortable para:",
    bestUsesList: [
      "Mudanza internacional",
      "Organización del almacenamiento familiar",
      "Inventario de hogar bilingüe",
      "Almacenamiento en apartamento compartido",
      "Almacenamiento de estudiantes en el extranjero",
      "Cajas de mudanza",
      "Trasteros y cuartos de almacenamiento",
      "Almacenamiento en garaje",
      "Almacenamiento en sótano",
      "Almacenamiento en desván o ático",
      "Organización de armarios",
      "Contenedores de plástico para almacenamiento",
      "Decoraciones navideñas y festivas",
      "Ropa de temporada",
      "Libros y documentos",
      "Cajas de cocina",
      "Archivos de oficina",
      "Almacenamiento para pequeñas empresas",
      "Muestras de productos",
      "Herramientas y repuestos",
      "Almacenamiento compartido del equipo",
      "Ayudantes de mudanza multilingües"
    ],
    
    tipsTitle: "Consejos para la organización del inventario multilingüe",
    tipsIntro: "Para obtener mejores resultados en hogares o equipos multilingües:",
    tipsList: [
      "Elija el idioma de la aplicación preferido durante la configuración.",
      "Use nombres de caja consistentes como «Garaje—Herramientas» o «Dormitorio—Invierno».",
      "Agregue fotos para artículos importantes o valiosos.",
      "Use comentarios para detalles como frágil, número de serie, mantener seco o estado del artículo.",
      "Si se usan varios idiomas en un hogar, mantenga los nombres de los artículos simples y consistentes.",
      "Agregue nombres de habitaciones o categorías que todos entiendan.",
      "Use etiquetas de códigos QR para que las cajas se puedan escanear en lugar de adivinar.",
      "Use la búsqueda para encontrar artículos por nombre, comentario, ubicación o categoría.",
      "Use el compartido multiusuario solo con usuarios de confianza si comparte el inventario entre dispositivos."
    ],
    
    practicalTitle: "Una aplicación práctica para el almacenamiento global y compartido",
    practicalDesc: "QrSortable no es solo para un idioma o una persona. Está diseñada para situaciones de almacenamiento cotidianas en las que varias personas pueden necesitar escanear cajas, agregar artículos, buscar pertenencias o actualizar el inventario. Con una interfaz multilingüe, etiquetas de códigos QR, fotos de artículos, comentarios, búsqueda y opciones de inventario compartido, QrSortable ayuda a que el almacenamiento sea más accesible para familias internacionales, estudiantes, compañeros de piso y equipos pequeños.",
    
    workflowTitle: "Funciona con el flujo de trabajo de inventario de QrSortable",
    workflowDesc: "QrSortable vincula etiquetas físicas de códigos QR con registros digitales de cajas. Después de escanear una etiqueta, los usuarios pueden guardar la ubicación y la categoría de la caja, y luego agregar artículos con nombres, comentarios y fotos. Más tarde, los usuarios pueden buscar en ubicaciones de cajas, categorías, nombres de artículos y comentarios. Este flujo de trabajo se vuelve más fácil cuando la interfaz de la aplicación está disponible en un idioma que el usuario entiende.",
    
    faqTitle: "Preguntas frecuentes",
    faqItems: [
      {
        q: "¿Qué idiomas admite QrSortable actualmente?",
        a: "QrSortable admite una interfaz de aplicación multilingüe en español, inglés, alemán y francés. Los usuarios pueden elegir un idioma compatible para que el flujo de trabajo del inventario sea más fácil de entender."
      },
      {
        q: "¿Qué es una aplicación de inventario multilingüe?",
        a: "Una aplicación de inventario multilingüe es una aplicación de inventario que admite más de un idioma de interfaz. QrSortable ayuda a los usuarios a organizar cajas, contenedores, inventario de mudanzas y registros de almacenamiento con una interfaz multilingüe."
      },
      {
        q: "¿Puedo usar QrSortable en mi idioma nativo?",
        a: "Si su idioma preferido es uno de los admitidos por QrSortable, puede utilizar la interfaz de la aplicación en ese idioma. Los idiomas compatibles incluyen español, inglés, alemán y francés."
      },
      {
        q: "¿Se traducirán automáticamente las descripciones de mis artículos?",
        a: "El texto personalizado, como los nombres de los artículos, los comentarios y las notas, se guarda en el idioma en el que lo escribe. La interfaz de la aplicación se puede mostrar en los idiomas compatibles, pero no se debe asumir que las descripciones ingresadas por los usuarios se traducirán automáticamente."
      },
      {
        q: "¿Pueden los miembros de la familia usar QrSortable en diferentes idiomas?",
        a: "QrSortable es útil para familias multilingües porque la aplicación admite varios idiomas de interfaz. Si el inventario compartido está habilitado, los usuarios de confianza pueden acceder al mismo inventario mientras utilizan un idioma compatible que se adapte a sus necesidades."
      },
      {
        q: "¿Es QrSortable útil para mudanzas internacionales?",
        a: "Sí. QrSortable puede ayudar durante las mudanzas internacionales al organizar cajas de mudanza, ubicaciones de almacenamiento, fotos de artículos, comentarios y categorías en un sistema de inventario claro basado en códigos QR."
      },
      {
        q: "¿Funciona la búsqueda con diferentes idiomas?",
        a: "La búsqueda de QrSortable funciona en nombres de artículos, comentarios, ubicaciones de cajas y categorías ingresados. Para obtener mejores resultados, busque utilizando las palabras que se registraron en los registros de inventario."
      },
      {
        q: "¿Pueden las etiquetas QR funcionar para usuarios que hablan diferentes idiomas?",
        a: "Sí. Las etiquetas de códigos QR conectan cajas físicas con registros de inventario digital. La interfaz de la aplicación ayuda a los usuarios de idiomas compatibles a navegar por el inventario con mayor claridad, mientras que los nombres de los artículos y los comentarios se basan en lo que ingresaron los usuarios."
      },
      {
        q: "¿Es útil para equipos u oficinas multilingües?",
        a: "Sí. Los equipos pequeños y las oficinas pueden utilizar QrSortable para organizar cajas de archivo, suministros, equipos, muestras de productos y áreas de almacenamiento compartidas con una interfaz de aplicación multilingüe."
      },
      {
        q: "¿Puedo cambiar el idioma de la aplicación más tarde?",
        a: "QrSortable permite a los usuarios trabajar con idiomas compatibles. Si la configuración de la aplicación proporciona selección de idioma, los usuarios pueden elegir el que mejor se adapte a sus necesidades."
      },
      {
        q: "¿Cómo debo nombrar las cajas en un hogar bilingüe o multilingüe?",
        a: "Use nombres simples y consistentes. Por ejemplo, combine la ubicación y la categoría, como «Garaje—Herramientas», «Dormitorio—Invierno» o una versión que todos los miembros del hogar entiendan."
      },
      {
        q: "¿El soporte multilingüe reemplaza las fotos de los artículos?",
        a: "No. Las fotos de los artículos siguen siendo útiles porque ayudan a los usuarios a identificar visualmente las pertenencias almacenadas, especialmente cuando los nombres de los artículos están escritos en otro idioma."
      }
    ],
    
    finalCtaTitle: "Organice el almacenamiento en un idioma que funcione para usted",
    finalCtaDesc1: "La aplicación de inventario multilingüe de QrSortable ayuda a familias internacionales, hogares bilingües, estudiantes, empresas de mudanzas y equipos pequeños a organizar cajas con etiquetas de códigos QR, fotos de artículos, comentarios, ubicaciones e idiomas de aplicación compatibles.",
    finalCtaDesc2: "Escanee etiquetas, adicione artículos y administre el almacenamiento con una aplicación de inventario de código QR multilingüe."
  }
};

export const MultilingualInventoryApp: React.FC = () => {
  const { language, localizePath } = useTranslation();

  const tPage = (key: string): any => {
    const lang = (['EN', 'DE', 'FR', 'ES'].includes(language) ? language : 'EN') as 'EN' | 'DE' | 'FR' | 'ES';
    return TRANSLATIONS_PAGE[lang][key] || TRANSLATIONS_PAGE['EN'][key] || key;
  };

  const faqItems = tPage('faqItems') as Array<{q: string, a: string}>;
  const bestUsesList = tPage('bestUsesList') as Array<string>;
  const tipsList = tPage('tipsList') as Array<string>;

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
        "item": "https://www.qrsortable.com/features/multilingual-inventory-app"
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
        <link rel="canonical" href={`https://www.qrsortable.com/features/multilingual-inventory-app${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
        <link rel="alternate" hrefLang="x-default" href="https://www.qrsortable.com/features/multilingual-inventory-app" />
        <link rel="alternate" hrefLang="en" href="https://www.qrsortable.com/features/multilingual-inventory-app" />
        <link rel="alternate" hrefLang="de" href="https://www.qrsortable.com/features/multilingual-inventory-app?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.qrsortable.com/features/multilingual-inventory-app?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.qrsortable.com/features/multilingual-inventory-app?lang=es" />
        <meta property="og:title" content={tPage('seoTitle')} />
        <meta property="og:description" content={tPage('seoDesc')} />
        <meta property="og:url" content={`https://www.qrsortable.com/features/multilingual-inventory-app${language !== 'EN' ? `?lang=${language.toLowerCase()}` : ''}`} />
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
              id="back-to-home-link"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover/back:-translate-x-1" /> {tPage('backToHome')}
            </Link>

            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-8 font-bold" aria-label="Breadcrumb" id="breadcrumb-navigation">
              <Link to={localizePath('/')} className="hover:text-[#FDB623] transition-colors">{tPage('home')}</Link>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <span className="text-gray-400">{tPage('features')}</span>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <span className="text-[#FDB623]">{tPage('pageTitleBreadcrumb')}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="hero-grid">
              <div>
                <span className="bg-[#FDB623] text-black px-4 py-1.5 rounded-full text-sm font-black tracking-wider uppercase inline-block mb-4" id="hero-badge">
                  {tPage('badge')}
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" id="hero-title">
                  {tPage('heroTitle')}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed font-bold mb-6" id="hero-subtitle">
                  {tPage('heroSubtitle')}
                </p>
                <p className="text-base text-gray-400 leading-relaxed font-medium mb-8" id="hero-supporting">
                  {tPage('heroSupportingText')}
                </p>
                <div className="flex flex-wrap gap-4" id="hero-ctas">
                  <Link 
                    to={localizePath('/#products')} 
                    className="bg-[#FDB623] text-black font-black text-lg px-8 py-4 rounded-[1.5rem] hover:scale-105 transition-all shadow-lg flex items-center gap-2 animate-pulse"
                    id="cta-get-labels-hero"
                  >
                    {tPage('ctaGetLabels')} <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    to={localizePath('/features/secure-inventory-tracking')} 
                    className="bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] hover:bg-gray-700 transition-all border border-gray-700 inline-block text-center"
                    id="cta-explore-secure-hero"
                  >
                    {tPage('ctaExploreSecure')}
                  </Link>
                </div>
              </div>
              <div className="relative" id="hero-graphic-container">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex flex-col items-center justify-center p-8 text-center relative">
                  <Globe className="h-28 w-28 text-[#FDB623] animate-pulse mb-4" />
                  <div className="flex gap-2 flex-wrap justify-center mt-2">
                    <span className="bg-gray-800 border border-gray-700 text-xs px-3 py-1.5 rounded-full font-mono text-gray-300">English</span>
                    <span className="bg-gray-800 border border-gray-700 text-xs px-3 py-1.5 rounded-full font-mono text-gray-300">Deutsch</span>
                    <span className="bg-gray-800 border border-gray-700 text-xs px-3 py-1.5 rounded-full font-mono text-gray-300">Français</span>
                    <span className="bg-gray-800 border border-gray-700 text-xs px-3 py-1.5 rounded-full font-mono text-gray-300">Español</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informative Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="main-content-container">
          <div className="prose prose-xl max-w-none text-gray-700">
            
            {/* Section 1: What is a Multilingual Inventory App? */}
            <section className="mb-16" id="section-what-is">
              <h2 className="text-4xl font-black text-gray-900 mb-6" id="what-is-multilingual-title">{tPage('whatIsTitle')}</h2>
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

            {/* Section 2: How QrSortable's Multilingual Support Works */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="section-how-it-works">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('howItWorksTitle')}</h2>
              
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

            {/* Section 3: Why Use a Multilingual Inventory App? */}
            <section className="mb-16" id="section-why-use">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('whyTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('whySubtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="why-cards-grid">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-card-1">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Smile className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem1Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem1Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-card-2">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem2Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem2Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-card-3">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Languages className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem3Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem3Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4" id="why-card-4">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><UserCheck className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem4Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem4Desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 md:col-span-2" id="why-card-5">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600 shrink-0"><Search className="h-6 w-6" /></div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">{tPage('whyItem5Title')}</strong>
                    <p className="text-gray-600 text-sm">{tPage('whyItem5Desc')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Real-Life Examples of a Multilingual Inventory App */}
            <section className="mb-16" id="section-examples">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('examplesTitle')}</h2>
              <div className="space-y-6" id="examples-list">
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-1">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex1Title')}</h3>
                  <p className="text-gray-700">{tPage('ex1Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-2">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex2Title')}</h3>
                  <p className="text-gray-700">{tPage('ex2Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-3">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex3Title')}</h3>
                  <p className="text-gray-700">{tPage('ex3Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-4">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex4Title')}</h3>
                  <p className="text-gray-700">{tPage('ex4Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-5">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex5Title')}</h3>
                  <p className="text-gray-700">{tPage('ex5Desc')}</p>
                </div>
                <div className="border-l-4 border-[#FDB623] pl-6 my-6 text-lg bg-gray-50 p-6 rounded-r-3xl" id="example-6">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{tPage('ex6Title')}</h3>
                  <p className="text-gray-700">{tPage('ex6Desc')}</p>
                </div>
              </div>
            </section>

            {/* Section 5: Who Uses a Multilingual Organizer? */}
            <section className="mb-16" id="section-who-uses">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('whoTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg" id="who-grid">
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-1">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who1Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who1Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-2">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who2Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who2Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-3">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who3Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who3Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-4">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who4Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who4Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-5">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who5Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who5Desc')}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-3xl" id="who-card-6">
                  <h3 className="font-black text-gray-900 mb-2">{tPage('who6Title')}</h3>
                  <p className="text-gray-600 text-base">{tPage('who6Desc')}</p>
                </div>
              </div>
            </section>

            {/* Section 6: Multilingual Inventory App vs. Single-Language Inventory Tools */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="section-comparison">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('vsTitle')}</h2>
              <p className="text-lg leading-relaxed mb-8">
                {tPage('vsDesc')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6" id="comparison-tables">
                <div className="bg-red-50/50 border border-red-100 p-6 rounded-3xl" id="comp-single-lang">
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

                <div className="bg-green-50/50 border border-green-100 p-6 rounded-3xl" id="comp-qrsortable-lang">
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

            {/* Section 7: Best Uses for a Multilingual Inventory App */}
            <section className="mb-16" id="section-best-uses">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('bestUsesTitle')}</h2>
              <p className="text-lg leading-relaxed mb-6">
                {tPage('bestUsesIntro')}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" id="best-uses-list">
                {bestUsesList.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 text-center text-sm font-bold text-gray-800 hover:border-[#FDB623] transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Tips for Multilingual Inventory Organization */}
            <section className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl" id="section-tips">
              <h2 className="text-4xl font-black text-gray-900 mb-4">{tPage('tipsTitle')}</h2>
              <p className="text-lg leading-relaxed mb-8 font-bold text-gray-600">{tPage('tipsIntro')}</p>
              <div className="space-y-4" id="tips-container">
                {tipsList.map((tip, index) => (
                  <div key={index} className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-b-0 last:pb-0">
                    <div className="bg-yellow-100 text-[#FDB623] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed font-semibold">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: A Practical App for Global and Shared Storage */}
            <section className="mb-16" id="section-practical">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('practicalTitle')}</h2>
              <p className="text-lg leading-relaxed">
                {tPage('practicalDesc')}
              </p>
            </section>

            {/* Section 10: Works with the QrSortable Inventory Workflow */}
            <section className="mb-16" id="section-workflow">
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tPage('workflowTitle')}</h2>
              <p className="text-lg leading-relaxed">
                {tPage('workflowDesc')}
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-16" id="faq-section">
              <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <HelpCircle className="text-[#FDB623] h-8 w-8" /> {tPage('faqTitle')}
              </h2>
              <div className="space-y-6" id="faq-list">
                {faqItems.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm animate-fadeIn" id={`faq-item-${idx}`}>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-abstract-dark text-white p-8 md:p-12 rounded-[3rem] text-center relative overflow-hidden" id="final-cta-card">
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
                    id="final-cta-get-labels"
                  >
                    {tPage('ctaGetLabels')}
                  </Link>
                  <Link 
                    to={localizePath('/features/secure-inventory-tracking')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-[1.5rem] transition-all inline-block border border-gray-700"
                    id="final-cta-next-feature"
                  >
                    {tPage('ctaExploreSecure')}
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
