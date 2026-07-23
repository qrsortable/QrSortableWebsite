export interface NoAccountNeededTranslations {
  seoTitle: string;
  seoDesc: string;
  breadcrumbHome: string;
  breadcrumbFeatures: string;
  breadcrumbCurrent: string;
  badge: string;
  heading: string;
  subheading: string;
  supportingText: string;
  ctaGetLabels: string;
  ctaSupportTeam: string;
  backToHome: string;
  
  sec1Heading: string;
  sec1Body: string;

  sec2Heading: string;
  sec2Step1Title: string;
  sec2Step1Body: string;
  sec2Step2Title: string;
  sec2Step2Body: string;
  sec2Step3Title: string;
  sec2Step3Body: string;
  sec2Step4Title: string;
  sec2Step4Body: string;
  sec2Step5Title: string;
  sec2Step5Body: string;

  sec3Heading: string;
  sec3Benefit1Title: string;
  sec3Benefit1Body: string;
  sec3Benefit2Title: string;
  sec3Benefit2Body: string;
  sec3Benefit3Title: string;
  sec3Benefit3Body: string;
  sec3Benefit4Title: string;
  sec3Benefit4Body: string;
  sec3Benefit5Title: string;
  sec3Benefit5Body: string;

  sec4Heading: string;
  sec4Ex1Title: string;
  sec4Ex1Body: string;
  sec4Ex2Title: string;
  sec4Ex2Body: string;
  sec4Ex3Title: string;
  sec4Ex3Body: string;
  sec4Ex4Title: string;
  sec4Ex4Body: string;
  sec4Ex5Title: string;
  sec4Ex5Body: string;
  sec4Ex6Title: string;
  sec4Ex6Body: string;

  sec5Heading: string;
  sec5Card1Title: string;
  sec5Card1Body: string;
  sec5Card2Title: string;
  sec5Card2Body: string;
  sec5Card3Title: string;
  sec5Card3Body: string;
  sec5Card4Title: string;
  sec5Card4Body: string;
  sec5Card5Title: string;
  sec5Card5Body: string;
  sec5Card6Title: string;
  sec5Card6Body: string;

  sec6Heading: string;
  sec6Body: string;
  sec6AccountTitle: string;
  sec6AccountPoints: string[];
  sec6NoAccountTitle: string;
  sec6NoAccountPoints: string[];

  sec7Heading: string;
  sec7Body: string;
  sec7Items: string[];

  sec8Heading: string;
  sec8Body: string;

  sec9Heading: string;
  sec9Body: string;

  sec10Heading: string;
  sec10Body: string;

  faqHeading: string;
  faqItems: { q: string; a: string }[];

  finalCtaHeading: string;
  finalCtaBody: string;
}

export const NO_ACCOUNT_NEEDED_TRANSLATIONS: Record<string, NoAccountNeededTranslations> = {
  EN: {
    seoTitle: "No Account Needed Inventory App | Start Organizing with QrSortable",
    seoDesc: "Use QrSortable without creating an account for regular inventory. Scan QR code labels, create boxes, add items, photos, remarks, and search your storage quickly.",
    breadcrumbHome: "Home",
    breadcrumbFeatures: "Features",
    breadcrumbCurrent: "No Account Needed",
    badge: "No Sign-Up Required",
    heading: "No Account Needed: Start Organizing Your Storage Right Away",
    subheading: "QrSortable lets you begin regular inventory use without creating an account first. Scan a QR code label, create a box record, add items, photos, and remarks, and start finding stored belongings faster.",
    supportingText: "No long sign-up process before your first box. QrSortable is designed for people who want to start organizing storage boxes, moving boxes, bins, and household items quickly.",
    ctaGetLabels: "Get Smart Labels Now",
    ctaSupportTeam: "Meet Support Team",
    backToHome: "Back to Home",
    
    sec1Heading: "What Does “No Account Needed” Mean?",
    sec1Body: "“No Account Needed” means you can start using QrSortable for regular inventory tasks without creating a login first. You can scan a QrSortable label, create a box record, add item names, remarks, and photos, and search your inventory from the app.\n\nThis is useful when you want to test the workflow, organize a few boxes, pack for a move, or label storage bins without spending time on account setup.\n\nPremium is required only for Multi-User Sharing. If you later want multiple devices or trusted users to access the same inventory, you can use the premium sharing workflow with a MultiuserID.",
    
    sec2Heading: "How QrSortable Works Without an Account",
    sec2Step1Title: "Start the App",
    sec2Step1Body: "Open QrSortable and begin with the regular inventory workflow. You do not need to create an account before starting your first storage project.",
    sec2Step2Title: "Scan a QrSortable Label",
    sec2Step2Body: "Scan a QrSortable QR code or barcode label attached to a box, bin, folder, or storage container.",
    sec2Step3Title: "Create a Box Record",
    sec2Step3Body: "Add the box location and category so you know where the container belongs and what type of items it holds.",
    sec2Step4Title: "Add Items, Remarks, and Photos",
    sec2Step4Body: "Add item names, helpful remarks, and photos so the box becomes easier to identify later. This is useful for clothing, documents, electronics, tools, books, decorations, and moving boxes.",
    sec2Step5Title: "Search When You Need Something",
    sec2Step5Body: "Use search to find items by name, remark, location, or category. This helps you locate stored belongings without opening every box.",

    sec3Heading: "Why Use a No Account Inventory App?",
    sec3Benefit1Title: "Start Faster",
    sec3Benefit1Body: "When you want to organize storage, you may not want to create a login first. QrSortable helps you begin with scanning, labeling, and adding items right away.",
    sec3Benefit2Title: "Useful for Quick Storage Projects",
    sec3Benefit2Body: "No-account use is helpful for small organizing tasks such as labeling closet boxes, garage bins, basement storage, school materials, hobby supplies, or seasonal items.",
    sec3Benefit3Title: "Good for Moving Day",
    sec3Benefit3Body: "Moving can be busy and time-sensitive. QrSortable lets you label boxes and create a basic inventory without slowing down the packing process with account setup. Check out our [Moving Box Organizer](/features/moving-box-organizer) to simplify your next relocation.",
    sec3Benefit4Title: "Try the Workflow First",
    sec3Benefit4Body: "Some users want to test an app before deciding whether they need premium features. QrSortable lets users begin regular inventory use first and consider Multi-User Sharing later if needed.",
    sec3Benefit5Title: "Keep Setup Simple",
    sec3Benefit5Body: "A simple start makes storage organization easier for homeowners, renters, students, families, and anyone who wants quick box tracking without extra steps. Learn more about [Secure Inventory Tracking](/features/secure-inventory-tracking) for your storage containers.",

    sec4Heading: "Real-Life Examples of No Account Needed Inventory",
    sec4Ex1Title: "Packing Moving Boxes Quickly",
    sec4Ex1Body: "A renter starts packing before moving day and wants a fast way to track what is inside each box. Instead of creating an account first, the renter opens QrSortable, scans labels, adds box locations, and records items while packing.",
    sec4Ex2Title: "Organizing Garage Bins",
    sec4Ex2Body: "A homeowner wants to organize tools, cables, spare parts, and seasonal items in garage bins. QrSortable allows the homeowner to begin with a few boxes and build a searchable inventory without a sign-up step.",
    sec4Ex3Title: "Student Storage Between Semesters",
    sec4Ex3Body: "A student stores books, clothes, electronics, and documents in boxes between semesters. With no-account regular inventory use, the student can scan labels and record box contents quickly before leaving.",
    sec4Ex4Title: "Closet and Basement Organization",
    sec4Ex4Body: "A family sorts holiday decorations, winter clothing, baby items, and household supplies into closet and basement boxes. QrSortable helps create simple box records without requiring every user to set up an account first.",
    sec4Ex5Title: "Trying QrSortable Before Sharing",
    sec4Ex5Body: "A user wants to organize personal storage first and decide later whether shared access is needed. The user starts with regular inventory use and can consider Premium Multi-User Sharing later if another trusted device needs access. Read our [Shared Inventory Management](/features/shared-inventory-management) guide.",
    sec4Ex6Title: "Small Hobby Storage",
    sec4Ex6Body: "A hobby user stores craft supplies, books, tools, collectibles, or accessories in labeled containers. QrSortable makes it easy to start tracking boxes without account setup before the collection grows.",

    sec5Heading: "Who Uses No Account Inventory?",
    sec5Card1Title: "Homeowners and Renters",
    sec5Card1Body: "Start organizing closets, garages, basements, attics, storage rooms, and household boxes without a long setup process.",
    sec5Card2Title: "People Who Are Moving",
    sec5Card2Body: "Create moving box records while packing and add item photos, remarks, and locations without creating an account first.",
    sec5Card3Title: "Students",
    sec5Card3Body: "Track books, clothes, documents, and electronics stored in boxes, dorm rooms, lockers, or temporary housing.",
    sec5Card4Title: "Families",
    sec5Card4Body: "Organize seasonal clothing, decorations, toys, kitchen items, and household storage with a simple inventory workflow.",
    sec5Card5Title: "Hobby Users and Collectors",
    sec5Card5Body: "Create searchable records for supplies, tools, books, collectibles, craft materials, and accessories.",
    sec5Card6Title: "First-Time Users",
    sec5Card6Body: "Try QrSortable’s regular inventory features before deciding whether premium sharing is needed.",

    sec6Heading: "No Account Needed vs. Account-Based Inventory Apps",
    sec6Body: "Some inventory apps require a login before users can do anything. That can be useful for account-based syncing, but it is not always necessary for a small home storage project or a quick moving box inventory.\n\nQrSortable keeps the first step simple. Users can begin regular inventory use without a login. If shared inventory across devices is needed later, Premium Multi-User Sharing is available through the MultiuserID workflow.",
    sec6AccountTitle: "Account-Based Inventory Apps",
    sec6AccountPoints: [
      "May require email and password before first use",
      "Can slow down quick organizing tasks",
      "Often focus on cloud sync from the start",
      "May feel unnecessary for small personal storage projects",
      "Can be useful when multi-device account access is required"
    ],
    sec6NoAccountTitle: "QrSortable No Account Needed",
    sec6NoAccountPoints: [
      "Lets users start regular inventory use without login",
      "Helps users scan labels and create box records quickly",
      "Supports item names, remarks, photos, locations, and categories",
      "Works well for personal storage, moving boxes, and small organization projects",
      "Premium is needed only for Multi-User Sharing",
      "Users can decide later if sharing is required"
    ],

    sec7Heading: "Best Uses for No Account Needed",
    sec7Body: "Use QrSortable’s No Account Needed workflow for:",
    sec7Items: [
      "Moving boxes", "First storage project", "Garage bins", "Basement boxes",
      "Attic storage", "Closet organization", "Seasonal clothing", "Holiday decorations",
      "Books and documents", "Kitchen storage", "Dorm room storage", "Student moves",
      "Hobby supplies", "Craft materials", "Tools and spare parts", "Plastic storage bins",
      "Temporary storage", "Personal inventory", "Testing QrSortable before premium sharing"
    ],

    sec8Heading: "When Do You Need Premium?",
    sec8Body: "Regular QrSortable inventory use does not require a login. Premium is needed when you want to use Multi-User Sharing.\n\nMulti-User Sharing lets trusted devices access the same inventory using a MultiuserID. Because anyone with the correct MultiuserID may be able to sync the inventory, users should share it only with people they trust.",

    sec9Heading: "Designed for Quick and Simple Storage Organization",
    sec9Body: "Many people start organizing because something needs to be found, packed, moved, or stored immediately. A required account setup can slow that moment down.\n\nQrSortable’s no-account regular use helps users move directly into the practical work: scan a label, create a box, add items, attach photos, and search later.",

    sec10Heading: "Works with QrSortable’s Full Inventory Workflow",
    sec10Body: "QrSortable links QR code or barcode labels to digital box records. After scanning a label, users can save location and category, then add item names, remarks, and photos.\n\nLater, users can search across item names, remarks, box locations, and categories. If sharing across devices becomes necessary, Premium Multi-User Sharing can be enabled separately.",

    faqHeading: "Frequently Asked Questions",
    faqItems: [
      {
        q: "Can I use QrSortable without creating an account?",
        a: "Yes. QrSortable can be used without login for regular inventory use. Premium is required only for Multi-User Sharing."
      },
      {
        q: "Do I need an account to scan QR code labels?",
        a: "No. You can start the regular workflow by scanning a QrSortable label and creating a box record without creating an account first."
      },
      {
        q: "Can I add items and photos without an account?",
        a: "Yes. For regular inventory use, you can add item names, remarks, and photos to your box records without login."
      },
      {
        q: "Can I search my inventory without account setup?",
        a: "Yes. QrSortable search works across item names, remarks, box locations, and categories in the regular inventory workflow."
      },
      {
        q: "When do I need Premium?",
        a: "Premium is needed for Multi-User Sharing. This feature allows trusted devices to access the same inventory using a MultiuserID."
      },
      {
        q: "Can I share inventory without Premium?",
        a: "Multi-User Sharing is a premium feature. If you want another trusted device to sync the same inventory, use the premium MultiuserID workflow."
      },
      {
        q: "Is No Account Needed useful for moving boxes?",
        a: "Yes. It is useful when you want to label moving boxes quickly, add item details during packing, and find items later without a long setup process."
      },
      {
        q: "Is No Account Needed useful for home storage?",
        a: "Yes. It works well for closets, garages, basements, attics, storage rooms, seasonal items, books, tools, documents, and plastic bins."
      },
      {
        q: "Can I try QrSortable first and use sharing later?",
        a: "Yes. You can begin regular inventory use without login and decide later whether Premium Multi-User Sharing is needed."
      },
      {
        q: "Does No Account Needed mean everything is automatically synced across devices?",
        a: "No. Multi-device sharing requires Premium Multi-User Sharing and the MultiuserID workflow. Regular no-account use is designed for starting simple inventory tasks quickly."
      },
      {
        q: "Is no-account use better for privacy?",
        a: "No-account use can reduce sign-up friction because users do not need to create login credentials before regular inventory use. Users should still manage inventory details and sharing carefully."
      },
      {
        q: "Can I use No Account Needed with QR code storage labels?",
        a: "Yes. QrSortable’s no-account regular workflow works with QrSortable QR code or barcode labels for boxes, bins, and storage containers."
      }
    ],

    finalCtaHeading: "Start Organizing Without Creating an Account",
    finalCtaBody: "QrSortable helps you scan labels, create box records, add item photos and remarks, and search your storage without requiring a login for regular inventory use. Start simple, then enable Premium Multi-User Sharing later if trusted devices need access."
  },
  DE: {
    seoTitle: "Inventar-App ohne Konto | Jetzt mit QrSortable organisieren",
    seoDesc: "Nutzen Sie QrSortable ohne Registrierung für Ihr reguläres Inventar. Scannen Sie QR-Code-Etiketten, erstellen Sie Boxen, fügen Sie Artikel, Fotos und Bemerkungen hinzu und durchsuchen Sie Ihr Lager schnell.",
    breadcrumbHome: "Startseite",
    breadcrumbFeatures: "Funktionen",
    breadcrumbCurrent: "Kein Konto erforderlich",
    badge: "Keine Registrierung erforderlich",
    heading: "Kein Konto erforderlich: Starten Sie sofort mit der Organisation Ihres Lagers",
    subheading: "Mit QrSortable können Sie Ihr reguläres Inventar verwalten, ohne vorher ein Benutzerkonto anlegen zu müssen. Scannen Sie ein QR-Code-Etikett, erstellen Sie eine Box, fügen Sie Gegenstände, Fotos und Bemerkungen hinzu und finden Sie gelagerte Sachen schneller.",
    supportingText: "Kein langwieriger Registrierungsprozess vor dem ersten Karton. QrSortable wurde für alle entwickelt, die Lagerboxen, Umzugskartons, Behälter und Haushaltsgegenstände schnell organisieren möchten.",
    ctaGetLabels: "Smarte Etiketten jetzt sichern",
    ctaSupportTeam: "Support-Team kennenlernen",
    backToHome: "Zurück zur Startseite",
    
    sec1Heading: "Was bedeutet „Kein Konto erforderlich“?",
    sec1Body: "„Kein Konto erforderlich“ bedeutet, dass Sie QrSortable für reguläre Inventaraufgaben nutzen können, ohne vorher Zugangsdaten festzulegen. Sie können ein QrSortable-Etikett scannen, eine Box erstellen, Artikelnamen, Bemerkungen und Fotos hinzufügen und Ihr Inventar direkt in der App durchsuchen.\n\nDas ist besonders praktisch, wenn Sie den Ablauf testen, ein paar Boxen organisieren, für einen Umzug packen oder Lagerbehälter kennzeichnen möchten, ohne Zeit für die Kontoeinrichtung zu verlieren.\n\nPremium ist nur für die Multi-User-Freigabe erforderlich. Wenn Sie später möchten, dass mehrere Geräte oder vertrauenswürdige Personen auf dasselbe Inventar zugreifen, können Sie den Premium-Sharing-Ablauf mit einer MultiuserID nutzen.",
    
    sec2Heading: "So funktioniert QrSortable ohne Benutzerkonto",
    sec2Step1Title: "App starten",
    sec2Step1Body: "Öffnen Sie QrSortable und beginnen Sie direkt mit dem regulären Inventarablauf. Sie müssen kein Konto erstellen, bevor Sie Ihr erstes Lagerprojekt starten.",
    sec2Step2Title: "QrSortable-Etikett scannen",
    sec2Step2Body: "Scannen Sie einen QrSortable-QR-Code oder Barcode auf einem Karton, einem Behälter, einem Ordner oder einem Lagercontainer.",
    sec2Step3Title: "Box-Eintrag erstellen",
    sec2Step3Body: "Tragen Sie den Lagerort und die Kategorie ein, damit Sie wissen, wohin der Behälter gehört und welche Art von Gegenständen er enthält.",
    sec2Step4Title: "Artikel, Bemerkungen und Fotos hinzufügen",
    sec2Step4Body: "Fügen Sie Artikelnamen, hilfreiche Bemerkungen und Fotos hinzu, um die Box später leichter identifizieren zu können. Ideal für Kleidung, Dokumente, Elektronik, Werkzeug, Bücher, Dekoration und Umzugskartons.",
    sec2Step5Title: "Suchen, wenn Sie etwas brauchen",
    sec2Step5Body: "Nutzen Sie die Suche, um Artikel nach Name, Bemerkung, Ort oder Kategorie zu finden. So lokalisieren Sie Ihre Sachen, ohne jeden Karton öffnen zu müssen.",

    sec3Heading: "Warum eine Inventar-App ohne Anmeldung nutzen?",
    sec3Benefit1Title: "Schnellerer Start",
    sec3Benefit1Body: "Wenn Sie mit dem Aufräumen oder Packen beginnen möchten, wollen Sie sich oft nicht erst registrieren. QrSortable hilft Ihnen, sofort mit dem Scannen, Etikettieren und Befüllen loszulegen.",
    sec3Benefit2Title: "Praktisch für kleine Projekte",
    sec3Benefit2Body: "Die kontolose Nutzung eignet sich perfekt für kleinere Aufgaben wie das Beschriften von Kleiderschrank-Boxen, Garagen-Behältern, Keller-Kisten, Schulmaterialien, Hobbybedarf oder Saisondeko.",
    sec3Benefit3Title: "Optimal für den Umzugstag",
    sec3Benefit3Body: "Ein Umzug ist oft stressig und zeitkritisch. Mit QrSortable können Sie Kisten beschriften und ein einfaches Inventar erstellen, ohne dass die Kontoeinrichtung den Packprozess bremst. Entdecken Sie unseren [Umzugskarton-Organisator](/features/moving-box-organizer), um Ihren nächsten Umzug zu erleichtern.",
    sec3Benefit4Title: "Den Ablauf unverbindlich testen",
    sec3Benefit4Body: "Viele Nutzer möchten eine App erst ausprobieren, bevor sie sich für Premium-Funktionen entscheiden. Mit QrSortable können Sie mit dem regulären Inventar starten und die Multi-User-Freigabe später bei Bedarf hinzubuchen.",
    sec3Benefit5Title: "Einfachheit bewahren",
    sec3Benefit5Body: "Ein unkomplizierter Start erleichtert die Organisation für Hausbesitzer, Mieter, Studenten und Familien, die eine schnelle Kartonverfolgung ohne unnötige Hürden wünschen. Erfahren Sie mehr über [Sichere Inventarverfolgung](/features/secure-inventory-tracking) für Ihre Lagerbehälter.",

    sec4Heading: "Praktische Beispiele für die Nutzung ohne Registrierung",
    sec4Ex1Title: "Umzugskartons schnell verpacken",
    sec4Ex1Body: "Ein Mieter packt vor dem Umzugstag seine Kisten und möchte den Inhalt schnell dokumentieren. Statt mühsam ein Konto anzulegen, öffnet er QrSortable, scannt die Etiketten, weist Orte zu und trägt die Artikel direkt beim Packen ein.",
    sec4Ex2Title: "Garagen-Behälter organisieren",
    sec4Ex2Body: "Ein Hausbesitzer möchte Werkzeuge, Kabel, Ersatzteile und saisonale Gegenstände in Garagen-Boxen sortieren. Mit QrSortable kann er sofort mit den ersten Kisten starten und ein durchsuchbares Verzeichnis anlegen.",
    sec4Ex3Title: "Studentenlager zwischen den Semestern",
    sec4Ex3Body: "Eine Studentin lagert Bücher, Kleidung, Elektronik und Unterlagen zwischen den Semestern in Kisten ein. Dank der Nutzung ohne Anmeldung kann sie die Etiketten schnell scannen und den Inhalt vor der Abreise festhalten.",
    sec4Ex4Title: "Schrank- und Kellerorganisation",
    sec4Ex4Body: "Eine Familie sortiert Weihnachtsdeko, Winterkleidung, Babysachen und Haushaltsvorräte in Kellerboxen. QrSortable hilft dabei, einfache Box-Einträge zu erstellen, ohne dass jedes Familienmitglied ein Konto benötigt.",
    sec4Ex5Title: "QrSortable testen vor dem Teilen",
    sec4Ex5Body: "Ein Nutzer möchte zunächst sein persönliches Lager organisieren und später entscheiden, ob er einen gemeinsamen Zugriff braucht. Er startet ohne Anmeldung und kann Premium-Multi-User-Freigabe später aktivieren. Lesen Sie unseren Leitfaden für [Gemeinsame Inventarverwaltung](/features/shared-inventory-management).",
    sec4Ex6Title: "Kleines Hobby-Lager",
    sec4Ex6Body: "Ein Sammler bewahrt Bastelbedarf, Bücher, Werkzeuge oder Zubehör in beschrifteten Boxen auf. QrSortable macht es leicht, Kisten ohne Kontoeinrichtung zu erfassen, bevor die Sammlung größer wird.",

    sec5Heading: "Wer nutzt das Inventar ohne Anmeldung?",
    sec5Card1Title: "Hausbesitzer und Mieter",
    sec5Card1Body: "Organisieren Sie Schränke, Garagen, Keller, Dachböden und Haushaltskisten ohne langwierige Registrierung.",
    sec5Card2Title: "Menschen beim Umzug",
    sec5Card2Body: "Erstellen Sie während des Packens Einträge für Umzugskartons und fügen Sie Artikelfotos, Notizen und Orte direkt hinzu.",
    sec5Card3Title: "Studenten",
    sec5Card3Body: "Verfolgen Sie Bücher, Kleidung, Unterlagen und Elektronik in Kisten, Wohnheimen, Schließfächern oder temporären Unterkünften.",
    sec5Card4Title: "Familien",
    sec5Card4Body: "Bringen Sie Ordnung in Saisonsachen, Dekoration, Spielzeug und Küchenutensilien mit einem unkomplizierten Ablauf.",
    sec5Card5Title: "Hobbyisten und Sammler",
    sec5Card5Body: "Erstellen Sie durchsuchbare Verzeichnisse für Bastelmaterialien, Werkzeuge, Bücher und Sammlerstücke.",
    sec5Card6Title: "Erstnutzer",
    sec5Card6Body: "Testen Sie die regulären Funktionen von QrSortable, bevor Sie sich für die Premium-Freigabe entscheiden.",

    sec6Heading: "Kontolose vs. kontobasierte Inventar-Apps",
    sec6Body: "Manche Apps verlangen zwingend eine Anmeldung, bevor man überhaupt starten kann. Das kann für die Cloud-Synchronisation nützlich sein, ist für ein kleines Heimlager-Projekt oder schnelles Packen von Umzugskartons aber oft unnötig.\n\nQrSortable hält den ersten Schritt so einfach wie möglich. Sie können ohne Anmeldung loslegen. Sollten Sie später ein geräteübergreifendes, geteiltes Inventar benötigen, steht Ihnen die Premium-Multi-User-Freigabe über den MultiuserID-Ablauf offen.",
    sec6AccountTitle: "Kontobasierte Inventar-Apps",
    sec6AccountPoints: [
      "Erfordern oft E-Mail und Passwort vor der ersten Nutzung",
      "Können schnelle Organisationsaufgaben verlangsamen",
      "Konzentrieren sich meist von Anfang an auf Cloud-Sync",
      "Wirken für kleine persönliche Lagerprojekte oft überdimensioniert",
      "Sind nützlich, wenn ein geräteübergreifender Kontozugriff zwingend ist"
    ],
    sec6NoAccountTitle: "QrSortable ohne Registrierung",
    sec6NoAccountPoints: [
      "Ermöglicht den Start des regulären Inventars ohne Anmeldung",
      "Hilft beim schnellen Scannen von Etiketten und Erstellen von Boxen",
      "Unterstützt Artikelnamen, Bemerkungen, Fotos, Orte und Kategorien",
      "Eignet sich hervorragend für Heimlager, Umzugskartons und kleine Projekte",
      "Premium wird nur für die Multi-User-Freigabe benötigt",
      "Nutzer können später flexibel entscheiden, ob sie teilen möchten"
    ],

    sec7Heading: "Beste Einsatzbereiche ohne Konto",
    sec7Body: "Nutzen Sie den anmeldungsfreien Ablauf von QrSortable für:",
    sec7Items: [
      "Umzugskartons", "Erste Lagerprojekte", "Garagen-Behälter", "Keller-Kisten",
      "Dachboden-Lagerung", "Schrankorganisation", "Saisonbekleidung", "Weihnachtsdekoration",
      "Bücher und Dokumente", "Küchenaufbewahrung", "Wohnheim-Boxen", "Studentenumzüge",
      "Hobbybedarf", "Bastelmaterialien", "Werkzeuge und Ersatzteile", "Plastikboxen",
      "Temporäre Lagerung", "Persönliches Inventar", "Unverbindliches Testen vor dem Teilen"
    ],

    sec8Heading: "Wann wird Premium benötigt?",
    sec8Body: "Die normale Nutzung des QrSortable-Inventars erfordert keine Anmeldung. Premium wird benötigt, wenn Sie die Multi-User-Freigabe nutzen möchten.\n\nDie Multi-User-Freigabe ermöglicht es vertrauenswürdigen Geräten, über eine MultiuserID auf dasselbe Inventar zuzugreifen. Da jeder mit der korrekten MultiuserID das Inventar synchronisieren kann, sollten Sie diese ID nur an vertrauenswürdige Personen weitergeben.",

    sec9Heading: "Entwickelt für schnelle und einfache Lagerorganisation",
    sec9Body: "Viele Menschen fangen mit dem Organisieren an, weil etwas sofort gefunden, gepackt, bewegt oder gelagert werden muss. Eine erzwungene Kontoeinrichtung bremst diesen Moment aus.\n\nDie kontolose Nutzung von QrSortable bringt Sie direkt zur praktischen Arbeit: Etikett scannen, Box anlegen, Gegenstände eintragen, Fotos anhängen und später einfach suchen.",

    sec10Heading: "Kompatibel mit dem gesamten QrSortable-Workflow",
    sec10Body: "QrSortable verknüpft physische QR-Code- oder Barcode-Etiketten mit digitalen Kartondaten. Nach dem Scannen können Sie Ort und Kategorie speichern sowie Artikel mit Namen, Notizen und Bildern hinzufügen.\n\nSpäter suchen Sie bequem nach Namen, Bemerkungen, Orten und Kategorien. Sollte ein gemeinsamer Zugriff nötig werden, lässt sich die Premium-Multi-User-Freigabe separat aktivieren.",

    faqHeading: "Häufig gestellte Fragen (FAQ)",
    faqItems: [
      {
        q: "Kann ich QrSortable ohne Erstellung eines Kontos nutzen?",
        a: "Ja. QrSortable kann ohne Anmeldung für das reguläre Inventar genutzt werden. Premium ist nur für die Multi-User-Freigabe erforderlich."
      },
      {
        q: "Benötige ich ein Konto, um QR-Code-Etiketten zu scannen?",
        a: "Nein. Sie können den regulären Ablauf starten, indem Sie ein QrSortable-Etikett scannen und einen Box-Eintrag erstellen, ganz ohne Registrierung."
      },
      {
        q: "Kann ich Artikel und Fotos ohne ein Konto hinzufügen?",
        a: "Ja. Für die reguläre Inventarnutzung können Sie Artikelnamen, Bemerkungen und Fotos zu Ihren Boxen hinzufügen, ohne sich anzumelden."
      },
      {
        q: "Kann ich mein Inventar ohne Kontoeinrichtung durchsuchen?",
        a: "Ja. Die QrSortable-Suche funktioniert über Artikelnamen, Bemerkungen, Lagerorte und Kategorien direkt im regulären Inventarablauf."
      },
      {
        q: "Wann benötige ich Premium?",
        a: "Premium wird für die Multi-User-Freigabe benötigt. Diese Funktion erlaubt es vertrauenswürdigen Geräten, über eine gemeinsame MultiuserID auf das Inventar zuzugreifen."
      },
      {
        q: "Kann ich das Inventar ohne Premium teilen?",
        a: "Die Multi-User-Freigabe ist eine Premium-Funktion. Wenn ein anderes vertrauenswürdiges Gerät dasselbe Inventar synchronisieren soll, nutzen Sie den Premium-MultiuserID-Ablauf."
      },
      {
        q: "Ist die Nutzung ohne Konto für Umzugskartons nützlich?",
        a: "Ja. Es ist ideal, wenn Sie Umzugskisten schnell beschriften, Gegenstände beim Packen eintragen und später ohne lange Einrichtung wiederfinden möchten."
      },
      {
        q: "Eignet sich die anmeldungsfreie Nutzung für das Heimlager?",
        a: "Ja. Sie funktioniert hervorragend für Schränke, Garagen, Keller, Dachböden, Saisonsachen, Bücher, Werkzeuge, Dokumente und Plastikboxen."
      },
      {
        q: "Kann ich QrSortable erst testen und das Teilen später aktivieren?",
        a: "Ja. Sie können mit dem regulären Inventar ohne Anmeldung starten und sich später entscheiden, ob Sie die Premium-Multi-User-Freigabe benötigen."
      },
      {
        q: "Bedeutet die Nutzung ohne Konto, dass alles automatisch auf allen Geräten synchronisiert wird?",
        a: "Nein. Die Synchronisation über mehrere Geräte hinweg erfordert die Premium-Multi-User-Freigabe und den MultiuserID-Ablauf. Die reguläre kontolose Nutzung ist für den schnellen Start persönlicher Inventarprojekte gedacht."
      },
      {
        q: "Ist die kontolose Nutzung vorteilhaft für den Datenschutz?",
        a: "Die Nutzung ohne Anmeldung vermeidet Registrierungshürden, da Sie vor der Nutzung des regulären Inventars keine Zugangsdaten angeben müssen. Dennoch sollten Sie Ihre Inventardaten und Freigaben stets sorgfältig verwalten."
      },
      {
        q: "Kann ich den kontolosen Ablauf mit QR-Code-Lageretiketten nutzen?",
        a: "Ja. Der anmeldungsfreie Standardablauf von QrSortable arbeitet perfekt mit den QrSortable-QR-Code- oder Barcode-Etiketten für Kartons, Kisten und Behälter zusammen."
      }
    ],

    finalCtaHeading: "Jetzt ohne Konto mit dem Organisieren starten",
    finalCtaBody: "QrSortable hilft Ihnen, Etiketten zu scannen, Box-Einträge zu erstellen, Artikelfotos und Bemerkungen hinzuzufügen und Ihr Lager zu durchsuchen – ganz ohne Registrierung für das normale Inventar. Starten Sie einfach und aktivieren Sie Premium später, falls Sie Ihr Inventar mit anderen Geräten teilen möchten."
  },
  FR: {
    seoTitle: "Application d'inventaire sans compte | Commencez à organiser avec QrSortable",
    seoDesc: "Utilisez QrSortable sans créer de compte pour votre inventaire régulier. Scannez des étiquettes QR code, créez des cartons, ajoutez des articles, photos, remarques et recherchez rapidement.",
    breadcrumbHome: "Accueil",
    breadcrumbFeatures: "Fonctionnalités",
    breadcrumbCurrent: "Sans compte requis",
    badge: "Sans inscription requise",
    heading: "Sans compte requis : commencez à organiser votre stockage immédiatement",
    subheading: "QrSortable vous permet de commencer à utiliser l'inventaire régulier sans créer de compte au préalable. Scannez une étiquette QR code, créez une fiche de carton, ajoutez des articles, des photos et des remarques, et commencez à retrouver vos affaires plus rapidement.",
    supportingText: "Pas de processus d'inscription fastidieux avant votre premier carton. QrSortable est conçu pour les personnes qui souhaitent organiser rapidement des cartons de stockage, de déménagement, des bacs et des articles ménagers.",
    ctaGetLabels: "Obtenir des étiquettes intelligentes",
    ctaSupportTeam: "Rencontrer l'équipe support",
    backToHome: "Retour à l'accueil",
    
    sec1Heading: "Que signifie « Sans compte requis » ?",
    sec1Body: "« Sans compte requis » signifie que vous pouvez commencer à utiliser QrSortable pour des tâches d'inventaire régulières sans avoir à vous connecter ou créer d'identifiants au préalable. Vous pouvez scanner une étiquette QrSortable, créer une fiche de carton, ajouter des noms d'articles, des remarques et des photos, et effectuer des recherches dans votre inventaire directement depuis l'application.\n\nC'est idéal lorsque vous souhaitez tester le fonctionnement, organiser quelques cartons, préparer un déménagement ou étiqueter des bacs de stockage sans perdre de temps à configurer un compte.\n\nL'abonnement Premium est requis uniquement pour le partage multi-utilisateur. Si vous souhaitez plus tard que plusieurs appareils ou personnes de confiance accèdent au même inventaire, vous pouvez utiliser le flux de partage premium avec un MultiuserID.",
    
    sec2Heading: "Comment fonctionne QrSortable sans compte",
    sec2Step1Title: "Lancez l'application",
    sec2Step1Body: "Ouvrez QrSortable et commencez directement avec le flux d'inventaire régulier. Vous n'avez pas besoin de créer de compte avant de lancer votre premier projet.",
    sec2Step2Title: "Scannez une étiquette QrSortable",
    sec2Step2Body: "Scannez un QR code ou un code-barres QrSortable collé sur un carton, un bac, un dossier ou un conteneur de stockage.",
    sec2Step3Title: "Créez une fiche de carton",
    sec2Step3Body: "Ajoutez l'emplacement et la catégorie du carton afin de savoir où il se trouve et quel type d'articles il contient.",
    sec2Step4Title: "Ajoutez des articles, des remarques et des photos",
    sec2Step4Body: "Ajoutez des noms d'articles, des remarques utiles et des photos pour identifier facilement le carton plus tard. Très pratique pour les vêtements, documents, appareils électroniques, outils, livres, décorations et cartons de déménagement.",
    sec2Step5Title: "Recherchez dès que vous avez besoin de quelque chose",
    sec2Step5Body: "Utilisez la recherche pour retrouver des articles par nom, remarque, emplacement ou catégorie. Cela vous évite d'ouvrir tous les cartons pour retrouver vos affaires.",

    sec3Heading: "Pourquoi utiliser une application d'inventaire sans inscription ?",
    sec3Benefit1Title: "Commencer plus vite",
    sec3Benefit1Body: "Lorsque vous voulez organiser vos rangements, vous n'avez pas envie de passer par une étape de création de compte. QrSortable vous aide à démarrer immédiatement le scan, l'étiquetage et l'ajout d'articles.",
    sec3Benefit2Title: "Idéal pour les projets rapides",
    sec3Benefit2Body: "L'utilisation sans compte est parfaite pour les petites tâches d'organisation : tri de vêtements, bacs de garage, cartons de cave, fournitures scolaires, loisirs créatifs ou décorations saisonnières.",
    sec3Benefit3Title: "Idéal pour les jours de déménagement",
    sec3Benefit3Body: "Un déménagement est souvent synonyme de stress et de manque de temps. QrSortable vous permet d'étiqueter vos cartons et de créer un inventaire de base sans ralentir le rythme de l'emballage. Découvrez notre [Organisateur de cartons de déménagement](/features/moving-box-organizer) pour simplifier votre déménagement.",
    sec3Benefit4Title: "Tester l'application librement",
    sec3Benefit4Body: "Certains utilisateurs aiment tester une application avant d'envisager des options payantes. QrSortable vous permet d'utiliser d'abord l'inventaire régulier et de choisir le partage multi-utilisateur plus tard si le besoin s'en fait sentir.",
    sec3Benefit5Title: "Garder une configuration simple",
    sec3Benefit5Body: "Un démarrage simple facilite grandement la vie des propriétaires, locataires, étudiants et familles qui souhaitent un suivi rapide des cartons sans étapes superflues. En savoir plus sur le [Suivi d'inventaire sécurisé](/features/secure-inventory-tracking) pour vos conteneurs.",

    sec4Heading: "Exemples concrets d'utilisation sans compte",
    sec4Ex1Title: "Emballer rapidement des cartons de déménagement",
    sec4Ex1Body: "Un locataire commence à emballer ses affaires avant le déménagement et veut un moyen rapide de suivre le contenu de chaque carton. Sans créer de compte, il ouvre QrSortable, scanne les étiquettes et enregistre les articles au fur et à mesure.",
    sec4Ex2Title: "Organiser les bacs du garage",
    sec4Ex2Body: "Un propriétaire souhaite organiser les outils, câbles, pièces de rechange et articles saisonniers dans son garage. QrSortable lui permet de commencer directement avec les premiers bacs et de créer un inventaire consultable.",
    sec4Ex3Title: "Stockage étudiant entre deux semestres",
    sec4Ex3Body: "Un étudiant stocke ses livres, vêtements, appareils électroniques et cours dans des cartons entre deux semestres. Sans compte, il scanne rapidement ses cartons et liste le contenu avant de partir.",
    sec4Ex4Title: "Rangement des placards et de la cave",
    sec4Ex4Body: "Une famille trie les décorations de Noël, vêtements d'hiver, affaires de bébé et fournitures ménagères dans des cartons de cave. QrSortable permet de créer des fiches simples sans imposer de compte à chaque membre du foyer.",
    sec4Ex5Title: "Essayer QrSortable avant de partager",
    sec4Ex5Body: "Un utilisateur souhaite d'abord organiser son stockage personnel et décider plus tard s'il a besoin d'un accès partagé. Il commence avec l'inventaire normal et pourra passer au partage multi-utilisateur premium plus tard. Consultez notre guide sur la [Gestion d'inventaire partagé](/features/shared-inventory-management).",
    sec4Ex6Title: "Petit stockage de loisirs",
    sec4Ex6Body: "Un passionné de loisirs créatifs stocke son matériel, ses livres, outils ou collections dans des bacs étiquetés. QrSortable permet de démarrer le suivi sans configuration de compte préalable.",

    sec5Heading: "Qui utilise l'inventaire sans compte ?",
    sec5Card1Title: "Propriétaires et locataires",
    sec5Card1Body: "Commencez à organiser vos placards, garages, caves, greniers et cartons sans passer par une longue phase de configuration.",
    sec5Card2Title: "Personnes qui déménagent",
    sec5Card2Body: "Créez des fiches de cartons pendant que vous emballez et ajoutez facilement des photos d'articles, des remarques et des emplacements.",
    sec5Card3Title: "Étudiants",
    sec5Card3Body: "Suivez vos livres, vêtements, documents et appareils stockés dans des cartons, chambres universitaires, casiers ou logements temporaires.",
    sec5Card4Title: "Familles",
    sec5Card4Body: "Organisez les vêtements saisonniers, les jouets, la vaisselle et le stockage général de la maison avec un flux d'inventaire très simple.",
    sec5Card5Title: "Passionnés et collectionneurs",
    sec5Card5Body: "Créez des registres faciles à fouiller pour vos fournitures, outils, livres, collections et accessoires de création.",
    sec5Card6Title: "Nouveaux utilisateurs",
    sec5Card6Body: "Testez les fonctionnalités d'inventaire de base de QrSortable avant de décider si le partage premium est nécessaire.",

    sec6Heading: "Inventaire sans compte vs. applications d'inventaire avec compte obligatoire",
    sec6Body: "Certaines applications imposent une connexion obligatoire avant de pouvoir faire quoi que ce soit. Cela peut être utile pour la synchronisation, mais c'est souvent superflu pour un petit projet de rangement maison ou un inventaire rapide de déménagement.\n\nQrSortable simplifie les choses. Vous commencez à répertorier vos affaires sans connexion. Si vous avez besoin de partager l'inventaire plus tard, le partage Premium multi-utilisateur est disponible via le système de MultiuserID.",
    sec6AccountTitle: "Applications d'inventaire avec compte",
    sec6AccountPoints: [
      "Peuvent exiger un e-mail et un mot de passe dès le premier lancement",
      "Peuvent ralentir les tâches d'organisation urgentes",
      "Se focalisent souvent sur la synchro cloud dès le début",
      "Peuvent sembler trop complexes pour de petits projets de stockage personnel",
      "Sont utiles lorsque l'accès multi-appareil est indispensable dès le départ"
    ],
    sec6NoAccountTitle: "QrSortable sans compte requis",
    sec6NoAccountPoints: [
      "Permet de démarrer l'inventaire régulier sans aucune connexion",
      "Aide à scanner les étiquettes et créer des cartons en quelques secondes",
      "Prend en charge les noms d'articles, remarques, photos, emplacements et catégories",
      "Parfait pour le stockage personnel, les cartons de déménagement et les bacs",
      "L'abonnement Premium est nécessaire uniquement pour le partage multi-utilisateur",
      "L'utilisateur peut décider à tout moment s'il souhaite activer le partage"
    ],

    sec7Heading: "Meilleures utilisations sans compte",
    sec7Body: "Utilisez le flux sans compte de QrSortable pour :",
    sec7Items: [
      "Cartons de déménagement", "Premier projet de rangement", "Bacs de garage", "Cartons de cave",
      "Stockage de grenier", "Rangement de placard", "Vêtements saisonniers", "Décorations de fête",
      "Livres et documents", "Ustensiles de cuisine", "Stockage de chambre d'étudiant", "Déménagements étudiants",
      "Fournitures de loisirs", "Matériel de création", "Outils et pièces de rechange", "Bacs de rangement en plastique",
      "Stockage temporaire", "Inventaire personnel", "Tester QrSortable avant le partage premium"
    ],

    sec8Heading: "Quand avez-vous besoin du Premium ?",
    sec8Body: "L'utilisation régulière de l'inventaire QrSortable ne nécessite pas de connexion. Le Premium est requis lorsque vous souhaitez activer le partage multi-utilisateur.\n\nLe partage multi-utilisateur permet à des appareils de confiance d'accéder au même inventaire à l'aide d'un MultiuserID. Comme toute personne disposant du bon MultiuserID peut synchroniser l'inventaire, veillez à ne le partager qu'avec des personnes de confiance.",

    sec9Heading: "Conçu pour une organisation de stockage rapide et simple",
    sec9Body: "On commence souvent à ranger parce qu'il faut trouver, emballer ou stocker quelque chose en urgence. Devoir créer un compte peut freiner cet élan.\n\nL'utilisation sans compte de QrSortable vous amène directement au cœur de la tâche : scannez une étiquette, créez un carton, ajoutez des articles, associez des photos et cherchez plus tard.",

    sec10Heading: "Intégré au flux d'inventaire complet de QrSortable",
    sec10Body: "QrSortable relie les étiquettes QR code ou codes-barres physiques à des fiches de cartons numériques. Après avoir scanné une étiquette, vous enregistrez l'emplacement et la catégorie, puis ajoutez des articles avec noms, notes et photos.\n\nPlus tard, vous effectuez des recherches par nom, remarque, emplacement ou catégorie. Si le partage d'appareils devient nécessaire, le partage Premium multi-utilisateur peut être activé séparément.",

    faqHeading: "Foire Aux Questions (FAQ)",
    faqItems: [
      {
        q: "Puis-je utiliser QrSortable sans créer de compte ?",
        a: "Oui. QrSortable peut être utilisé sans connexion pour l'inventaire de base. L'abonnement Premium est requis uniquement pour le partage multi-utilisateur."
      },
      {
        q: "Ai-je besoin d'un compte pour scanner des étiquettes QR code ?",
        a: "No. Vous pouvez démarrer le flux classique en scannant une étiquette QrSortable et en créant une fiche de carton sans avoir à créer de compte."
      },
      {
        q: "Puis-je ajouter des articles et des photos sans compte ?",
        a: "Oui. Pour l'inventaire régulier, vous pouvez ajouter des noms d'articles, des remarques et des photos à vos fiches de cartons sans vous connecter."
      },
      {
        q: "Puis-je effectuer des recherches dans mon inventaire sans compte ?",
        a: "Oui. La recherche QrSortable fonctionne sur les noms d'articles, remarques, emplacements et catégories dans le flux d'inventaire régulier."
      },
      {
        q: "Quand ai-je besoin du Premium ?",
        a: "Le Premium est nécessaire pour le partage multi-utilisateur. Cette fonctionnalité permet à des appareils autorisés d'accéder au même inventaire à l'aide d'un MultiuserID."
      },
      {
        q: "Puis-je partager mon inventaire sans Premium ?",
        a: "Le partage multi-utilisateur est une fonctionnalité premium. Si vous souhaitez qu'un autre appareil synchronise le même inventaire, utilisez le système de MultiuserID premium."
      },
      {
        q: "L'utilisation sans compte est-elle utile pour les cartons de déménagement ?",
        a: "Oui. C'est idéal pour étiqueter rapidement des cartons de déménagement, lister les articles pendant l'emballage et les retrouver plus tard sans configuration complexe."
      },
      {
        q: "L'utilisation sans compte est-elle adaptée pour le stockage à domicile ?",
        a: "Oui. Cela fonctionne parfaitement pour les placards, garages, caves, greniers, articles saisonniers, livres, outils, documents et bacs en plastique."
      },
      {
        q: "Puis-je essayer QrSortable d'abord et utiliser le partage plus tard ?",
        a: "Oui. Vous pouvez commencer à gérer votre inventaire sans connexion et décider plus tard si vous avez besoin du partage Premium multi-utilisateur."
      },
      {
        q: "L'utilisation sans compte signifie-t-elle que tout est automatiquement synchronisé sur tous mes appareils ?",
        a: "Non. Le partage multi-appareil nécessite l'activation du partage Premium multi-utilisateur et l'utilisation du MultiuserID. L'utilisation classique sans compte est conçue pour démarrer rapidement des tâches personnelles."
      },
      {
        q: "L'utilisation sans compte est-elle meilleure pour la vie privée ?",
        a: "L'absence de compte réduit les frictions initiales puisque vous ne fournissez aucune coordonnée avant de commencer votre inventaire. Les utilisateurs doivent tout de même gérer leurs données et partages avec prudence."
      },
      {
        q: "Puis-je utiliser le flux sans compte avec des étiquettes de stockage QR code ?",
        a: "Oui. Le flux normal sans compte de QrSortable fonctionne avec les QR codes ou codes-barres QrSortable destinés aux cartons, bacs et conteneurs."
      }
    ],

    finalCtaHeading: "Commencez à organiser sans créer de compte",
    finalCtaBody: "QrSortable vous aide à scanner des étiquettes, créer des fiches de cartons, ajouter des photos et remarques, et faire des recherches – le tout sans connexion pour l'inventaire classique. Commencez simplement, puis activez le partage Premium si d'autres appareils ont besoin d'accéder aux données."
  },
  ES: {
    seoTitle: "Sin necesidad de cuenta | Comienza a organizar con QrSortable",
    seoDesc: "Use QrSortable sin crear una cuenta para su inventario regular. Escanee etiquetas de códigos QR, cree cajas, añada artículos, fotos, comentarios y busque rápidamente.",
    breadcrumbHome: "Inicio",
    breadcrumbFeatures: "Funcionalidades",
    breadcrumbCurrent: "Sin cuenta requerida",
    badge: "Sin registro obligatorio",
    heading: "Sin necesidad de cuenta: comience a organizar su almacenamiento de inmediato",
    subheading: "QrSortable le permite comenzar a usar el inventario regular sin crear una cuenta primero. Escanee una etiqueta de código QR, cree un registro de caja, añada artículos, fotos y comentarios, y empiece a encontrar sus pertenencias más rápido.",
    supportingText: "Sin largos procesos de registro antes de su primera caja. QrSortable está diseñado para personas que desean organizar rápidamente cajas de almacenamiento, cajas de mudanza, contenedores y artículos del hogar.",
    ctaGetLabels: "Obtenga etiquetas inteligentes ahora",
    ctaSupportTeam: "Conocer al equipo de soporte",
    backToHome: "Volver al inicio",
    
    sec1Heading: "¿Qué significa «Sin necesidad de cuenta»?",
    sec1Body: "«Sin necesidad de cuenta» significa que puede empezar a utilizar QrSortable para tareas de inventario regulares sin necesidad de crear una cuenta de usuario o iniciar sesión primero. Puede escanear una etiqueta de QrSortable, crear un registro de caja, añadir nombres de artículos, comentarios y fotos, y buscar en su inventario directamente desde la aplicación.\n\nEsto es muy útil cuando desea probar el flujo de trabajo, organizar unas pocas cajas, empacar para una mudanza o etiquetar contenedores de almacenamiento sin perder tiempo configurando un perfil.\n\nPremium se requiere únicamente para el uso compartido multiusuario. Si más adelante desea que varios dispositivos o personas de confianza accedan al mismo inventario, puede utilizar el flujo de trabajo compartido premium con un MultiuserID.",
    
    sec2Heading: "Cómo funciona QrSortable sin una cuenta",
    sec2Step1Title: "Inicie la aplicación",
    sec2Step1Body: "Abra QrSortable y comience con el flujo de trabajo de inventario regular. No necesita crear una cuenta antes de comenzar su primer proyecto de almacenamiento.",
    sec2Step2Title: "Escanee una etiqueta QrSortable",
    sec2Step2Body: "Escanee un código QR o código de barras de QrSortable pegado a una caja, contenedor, carpeta o caja de almacenamiento.",
    sec2Step3Title: "Cree un registro de caja",
    sec2Step3Body: "Añada la ubicación y la categoría de la caja para que sepa a dónde pertenece el contenedor y qué tipo de artículos contiene.",
    sec2Step4Title: "Añada artículos, comentarios y fotos",
    sec2Step4Body: "Añada nombres de artículos, comentarios de utilidad y fotos para que la caja sea más fácil de identificar después. Es ideal para ropa, documentos, electrónica, herramientas, libros, adornos y cajas de mudanza.",
    sec2Step5Title: "Busque cuando necesite algo",
    sec2Step5Body: "Utilice el buscador para encontrar artículos por nombre, comentario, ubicación o categoría. Esto le ayuda a localizar sus pertenencias guardadas sin necesidad de abrir cada caja.",

    sec3Heading: "¿Por qué utilizar una aplicación de inventario sin registro?",
    sec3Benefit1Title: "Empiece más rápido",
    sec3Benefit1Body: "Cuando desea comenzar a ordenar, lo último que quiere es tener que registrarse. QrSortable le ayuda a empezar a escanear, etiquetar y añadir artículos de inmediato.",
    sec3Benefit2Title: "Práctico para tareas rápidas",
    sec3Benefit2Body: "El uso sin cuenta es ideal para tareas pequeñas como etiquetar cajas de armario, estantes de garaje, almacenamiento en el sótano, materiales de estudio, colecciones o adornos de temporada.",
    sec3Benefit3Title: "Ideal para el día de la mudanza",
    sec3Benefit3Body: "Las mudanzas suelen ser caóticas y urgentes. QrSortable le permite etiquetar cajas y crear un inventario básico sin ralentizar el proceso de empaque con registros de cuenta. Descubra nuestro [Organizador de cajas de mudanza](/features/moving-box-organizer) para simplificar su traslado.",
    sec3Benefit4Title: "Pruebe el flujo de trabajo primero",
    sec3Benefit4Body: "Muchos usuarios prefieren probar una aplicación antes de decidir si necesitan funciones premium. QrSortable le permite comenzar con el inventario habitual primero y considerar el uso compartido multiusuario después si lo requiere.",
    sec3Benefit5Title: "Mantenga la configuración simple",
    sec3Benefit5Body: "Un inicio simple facilita la organización del almacenamiento para propietarios, inquilinos, estudiantes, familias y cualquiera que busque un seguimiento rápido de sus cajas sin pasos adicionales. Conozca más sobre el [Seguimiento de inventario seguro](/features/secure-inventory-tracking) para sus contenedores.",

    sec4Heading: "Ejemplos reales de uso sin necesidad de cuenta",
    sec4Ex1Title: "Empacar cajas de mudanza rápidamente",
    sec4Ex1Body: "Un inquilino comienza a empacar antes del día de la mudanza y desea un método rápido para saber qué hay dentro de cada caja. Sin registrarse primero, abre QrSortable, escanea etiquetas, añade ubicaciones y registra artículos mientras empaca.",
    sec4Ex2Title: "Organización de cajas del garaje",
    sec4Ex2Body: "Un propietario desea ordenar herramientas, cables, repuestos y artículos de temporada en cajas de garaje. QrSortable le permite comenzar directamente con unas pocas cajas y crear un catálogo en el que puede realizar búsquedas.",
    sec4Ex3Title: "Almacenamiento de estudiantes entre semestres",
    sec4Ex3Body: "Un estudiante guarda libros, ropa, electrónica y documentos en cajas entre semestres. Con el uso sin cuenta para inventario regular, el estudiante puede escanear etiquetas y registrar el contenido rápidamente antes de partir.",
    sec4Ex4Title: "Organización de armarios y sótanos",
    sec4Ex4Body: "Una familia clasifica adornos navideños, ropa de invierno, artículos de bebé y suministros del hogar en cajas de armario y sótano. QrSortable ayuda a crear registros sencillos de cajas sin necesidad de que todos los usuarios tengan una cuenta activa.",
    sec4Ex5Title: "Probar QrSortable antes de compartir",
    sec4Ex5Body: "Un usuario desea organizar el almacenamiento personal primero y decidir más tarde si necesita acceso compartido. El usuario empieza con el inventario habitual y puede considerar el uso compartido multiusuario premium más adelante si otro dispositivo de confianza requiere acceso. Lea nuestra guía de [Gestión de inventario compartido](/features/shared-inventory-management).",
    sec4Ex6Title: "Pequeño almacenamiento de pasatiempos",
    sec4Ex6Body: "Un aficionado guarda materiales de manualidades, libros, herramientas o accesorios en contenedores etiquetados. QrSortable facilita empezar a registrar cajas sin necesidad de configurar una cuenta previa.",

    sec5Heading: "¿Quién utiliza el inventario sin cuenta?",
    sec5Card1Title: "Propietarios e inquilinos",
    sec5Card1Body: "Empiece a organizar armarios, garajes, sótanos, desvanes, cuartos de almacenamiento y cajas de casa sin un largo proceso de configuración.",
    sec5Card2Title: "Personas en proceso de mudanza",
    sec5Card2Body: "Cree registros de cajas de mudanza mientras empaca y añada fotos de artículos, comentarios y ubicaciones de forma sencilla.",
    sec5Card3Title: "Estudiantes",
    sec5Card3Body: "Siga libros, ropa, documentos y electrónica guardados en cajas, dormitorios de estudiantes, taquillas o alojamientos temporales.",
    sec5Card4Title: "Familias",
    sec5Card4Body: "Organice ropa de temporada, adornos, juguetes, utensilios de cocina y almacenamiento doméstico con un flujo de trabajo de inventario muy sencillo.",
    sec5Card5Title: "Aficionados y coleccionistas",
    sec5Card5Body: "Cree registros fáciles de buscar para suministros, herramientas, libros, artículos de colección, manualidades y accesorios.",
    sec5Card6Title: "Usuarios nuevos",
    sec5Card6Body: "Pruebe las funciones regulares de inventario de QrSortable antes de decidir si necesita el acceso compartido premium.",

    sec6Heading: "Sin necesidad de cuenta frente a aplicaciones con registro obligatorio",
    sec6Body: "Algunas aplicaciones de inventario requieren registrarse obligatoriamente antes de poder hacer cualquier cosa. Eso puede ser útil para la sincronización en la nube, pero no siempre es necesario para un proyecto pequeño de almacenamiento doméstico o un inventario rápido de cajas de mudanza.\n\nQrSortable mantiene el primer paso muy simple. Los usuarios pueden comenzar con el inventario normal sin iniciar sesión. Si más adelante se necesita un inventario compartido entre dispositivos, el uso compartido Premium multiusuario está disponible mediante el flujo de MultiuserID.",
    sec6AccountTitle: "Aplicaciones con cuenta obligatoria",
    sec6AccountPoints: [
      "Pueden exigir correo electrónico y contraseña antes del primer uso",
      "Pueden ralentizar las tareas rápidas de organización",
      "Suelen centrarse en la sincronización en la nube desde el inicio",
      "Pueden resultar excesivas para proyectos pequeños de almacenamiento personal",
      "Son útiles si el acceso de varios dispositivos mediante cuenta es obligatorio desde el inicio"
    ],
    sec6NoAccountTitle: "QrSortable sin necesidad de cuenta",
    sec6NoAccountPoints: [
      "Permite a los usuarios iniciar el inventario regular sin iniciar sesión",
      "Ayuda a los usuarios a escanear etiquetas y crear registros de cajas rápidamente",
      "Admite nombres de artículos, comentarios, fotos, ubicaciones y categorías",
      "Funciona muy bien para almacenamiento personal, cajas de mudanza y proyectos pequeños",
      "Premium se necesita únicamente para el uso compartido multiusuario",
      "Los usuarios pueden decidir más adelante si el uso compartido es necesario"
    ],

    sec7Heading: "Mejores usos para inventario sin cuenta",
    sec7Body: "Use el flujo de trabajo sin cuenta de QrSortable para:",
    sec7Items: [
      "Cajas de mudanza", "Primer proyecto de almacenamiento", "Cajas del garaje", "Cajas del sótano",
      "Almacenamiento en desván", "Organización de armarios", "Ropa de temporada", "Adornos navideños",
      "Libros y documentos", "Almacenamiento de cocina", "Almacenamiento en dormitorios de estudiantes", "Mudanzas estudiantiles",
      "Suministros de pasatiempos", "Materiales de manualidades", "Herramientas y repuestos", "Contenedores de plástico",
      "Almacenamiento temporal", "Inventario personal", "Probar QrSortable antes del uso compartido premium"
    ],

    sec8Heading: "¿Cuándo se necesita el servicio Premium?",
    sec8Body: "El uso regular de QrSortable no requiere registro. El servicio Premium es necesario cuando se desea utilizar el uso compartido multiusuario.\n\nEl uso compartido multiusuario permite que dispositivos autorizados accedan al mismo inventario mediante un MultiuserID. Dado que cualquiera con el MultiuserID correcto puede sincronizar el inventario, los usuarios deben compartirlo únicamente con personas de su total confianza.",

    sec9Heading: "Diseñado para una organización de almacenamiento rápida y simple",
    sec9Body: "Muchas personas comienzan a organizar porque necesitan encontrar, empacar, trasladar o almacenar algo de inmediato. Un registro de cuenta obligatorio puede retrasar ese momento.\n\nEl uso regular sin cuenta de QrSortable ayuda a los usuarios a pasar directamente al trabajo práctico: escanear una etiqueta, crear una caja, añadir artículos, adjuntar fotos y buscar más tarde.",

    sec10Heading: "Funciona con el flujo de trabajo completo de QrSortable",
    sec10Body: "QrSortable vincula etiquetas de códigos QR o códigos de barras físicos con registros digitales de cajas. Tras escanear una etiqueta, los usuarios pueden guardar la ubicación y categoría, y luego añadir nombres de artículos, comentarios y fotos.\n\nPosteriormente, los usuarios pueden buscar entre nombres de artículos, comentarios, ubicaciones de cajas y categorías. Si el uso compartido entre dispositivos resulta necesario, el uso compartido Premium de multiusuario se puede activar por separado.",

    faqHeading: "Preguntas frecuentes",
    faqItems: [
      {
        q: "¿Puedo utilizar QrSortable sin crear una cuenta?",
        a: "Sí. QrSortable se puede usar sin registrarse para el inventario regular. Premium se requiere únicamente para el uso compartido multiusuario."
      },
      {
        q: "¿Necesito una cuenta para escanear etiquetas de códigos QR?",
        a: "No. Puede iniciar el flujo de trabajo regular escaneando una etiqueta de QrSortable y creando un registro de caja sin necesidad de registrarse primero."
      },
      {
        q: "¿Puedo añadir artículos y fotos sin una cuenta?",
        a: "Sí. Para el uso de inventario regular, puede añadir nombres de artículos, comentarios y fotos a sus registros de cajas sin iniciar sesión."
      },
      {
        q: "¿Puedo buscar en mi inventario sin haber configurado una cuenta?",
        a: "Sí. La búsqueda de QrSortable funciona para nombres de artículos, comentarios, ubicaciones de cajas y categorías en el flujo de trabajo de inventario regular."
      },
      {
        q: "¿Cuándo necesito el servicio Premium?",
        a: "El servicio Premium es necesario para el uso compartido multiusuario. Esta función permite que dispositivos de confianza accedan al mismo inventario utilizando un MultiuserID."
      },
      {
        q: "¿Puedo compartir mi inventario sin el servicio Premium?",
        a: "El uso compartido multiusuario es una función premium. Si desea que otro dispositivo de confianza sincronice el mismo inventario, utilice el flujo de trabajo de MultiuserID premium."
      },
      {
        q: "¿Es útil la opción sin cuenta para cajas de mudanza?",
        a: "Sí. Es de gran utilidad cuando desea etiquetar cajas de mudanza rápidamente, añadir detalles de artículos mientras empaca y buscar artículos más tarde sin un largo proceso de configuración."
      },
      {
        q: "¿Es útil la opción sin cuenta para el almacenamiento doméstico?",
        a: "Sí. Funciona excelente para armarios, garajes, sótanos, desvanes, cuartos de almacenamiento, artículos de temporada, libros, herramientas, documentos y contenedores de plástico."
      },
      {
        q: "¿Puedo probar QrSortable primero y activar el uso compartido más tarde?",
        a: "Sí. Puede iniciar el inventario regular sin iniciar sesión y decidir más adelante si necesita el acceso compartido Premium de multiusuario."
      },
      {
        q: "¿La opción de uso sin cuenta implica que todo se sincroniza automáticamente entre dispositivos?",
        a: "No. El intercambio entre varios dispositivos requiere el uso compartido Premium de multiusuario y el flujo de trabajo del MultiuserID. El uso regular sin cuenta está diseñado para iniciar de forma rápida tareas sencillas de inventario."
      },
      {
        q: "¿El uso sin cuenta es mejor para la privacidad?",
        a: "El uso sin cuenta reduce las fricciones iniciales de registro, ya que no requiere que los usuarios proporcionen credenciales antes de usar el inventario regular. Los usuarios de igual forma deben gestionar la información de su inventario y accesos compartidos con cuidado."
      },
      {
        q: "¿Puedo utilizar la opción sin cuenta con etiquetas de almacenamiento de códigos QR?",
        a: "Sí. El flujo de trabajo regular sin cuenta de QrSortable funciona de forma óptima con etiquetas de códigos QR o de barras de QrSortable para cajas, contenedores y almacenes."
      }
    ],

    finalCtaHeading: "Comience a organizar sin necesidad de crear una cuenta",
    finalCtaBody: "QrSortable le ayuda a escanear etiquetas, crear registros de cajas, añadir fotos de artículos, comentarios y realizar búsquedas de su almacenamiento sin necesidad de iniciar sesión para el inventario habitual. Empiece de forma sencilla y añada el servicio Premium de multiusuario más tarde si otros dispositivos necesitan acceder."
  }
};
