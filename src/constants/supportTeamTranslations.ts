export interface SupportTeamTranslations {
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
  ctaExplorePreview: string;
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

  sec3Heading: string;
  sec3Area1Title: string;
  sec3Area1Body: string;
  sec3Area2Title: string;
  sec3Area2Body: string;
  sec3Area3Title: string;
  sec3Area3Body: string;
  sec3Area4Title: string;
  sec3Area4Body: string;
  sec3Area5Title: string;
  sec3Area5Body: string;
  sec3Area6Title: string;
  sec3Area6Body: string;

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
  sec6SearchTitle: string;
  sec6SearchPoints: string[];
  sec6SupportTitle: string;
  sec6SupportPoints: string[];

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

export const SUPPORT_TEAM_TRANSLATIONS: Record<string, SupportTeamTranslations> = {
  EN: {
    seoTitle: "Support Team | QrSortable Help for Labels and App Setup",
    seoDesc: "Need help with QrSortable? Contact the Support Team for QR code label setup, scanning help, PDF downloads, orders, Multi-User Sharing, Moving Mode, and troubleshooting.",
    breadcrumbHome: "Home",
    breadcrumbFeatures: "Features",
    breadcrumbCurrent: "Support Team",
    badge: "Support Team",
    heading: "Support Team: Help for Labels, Boxes, and App Setup",
    subheading: "Need help setting up QrSortable, scanning labels, downloading QR code PDFs, adding photos, or using Multi-User Sharing? The QrSortable Support Team is here to guide you with clear, practical answers.",
    supportingText: "Storage organization should feel simple. If something is unclear, send us the details and we will help you understand the next step.",
    ctaGetLabels: "Get Smart Labels Now",
    ctaExplorePreview: "Explore Inventory Preview",
    backToHome: "Back to Home",
    
    sec1Heading: "What Is the QrSortable Support Team?",
    sec1Body: "The QrSortable Support Team helps users with practical questions about QR code labels, box setup, item photos, search, generated PDFs, orders, Multi-User Sharing, Moving Mode, and troubleshooting.\n\nQrSortable is designed to help users scan storage labels, create digital box records, add item names and remarks, attach photos, and search across stored belongings. If you are setting up your first box, preparing for a move, organizing long-term storage, or managing shared inventory, support can help you understand the workflow.\n\nFor support, contact:\nqrsortable@gmail.com",
    
    sec2Heading: "How QrSortable Support Works",
    sec2Step1Title: "Send a Clear Support Email",
    sec2Step1Body: "Email qrsortable@gmail.com with a short description of the issue or question. Include helpful details such as your device type, app version if known, screenshots if available, and what you were trying to do.",
    sec2Step2Title: "Share the Relevant Details",
    sec2Step2Body: "For scanning issues, mention the label type and lighting conditions. For PDF download issues, mention the order or download step. For Multi-User Sharing, include whether Premium is active and whether the MultiuserID was entered with hyphens.",
    sec2Step3Title: "Get Practical Guidance",
    sec2Step3Body: "The support response will focus on clear next steps, such as checking label placement, re-downloading from Orders, reviewing app permissions, restarting the app, or syncing again.",
    sec2Step4Title: "Continue the Conversation if Needed",
    sec2Step4Body: "If the first reply does not fully solve the issue, send a follow-up with updated details. Support works best when the issue, device, screenshot, and exact step are easy to understand.",

    sec3Heading: "What Can the Support Team Help With?",
    sec3Area1Title: "QR Code Scanning Help",
    sec3Area1Body: "Get help if a QR code does not scan. Common checks include cleaning the camera lens, improving lighting, reducing glare, holding the phone steady, and confirming that the label is a QrSortable label.",
    sec3Area2Title: "Generated PDF Downloads",
    sec3Area2Body: "Get help if you cannot download an A4 QR or barcode PDF. You can also check Menu → Orders → Download if the generated PDF is available in your order history.",
    sec3Area3Title: "Photo Upload Questions",
    sec3Area3Body: "Get help if item photos do not upload. Useful checks include app permissions for camera or photos, available device storage, and using smaller images when needed.",
    sec3Area4Title: "Multi-User Sharing Support",
    sec3Area4Body: "Get help with Premium Multi-User Sharing, MultiuserID entry, syncing, and shared inventory setup. Make sure the MultiuserID is entered correctly, including hyphens. Learn more about [Shared Inventory Management](/features/shared-inventory-management).",
    sec3Area5Title: "Moving Mode Guidance",
    sec3Area5Body: "Get help moving items between boxes. Moving Mode lets users open a source box, tap the move icon for an item, select the destination box, and confirm the move. Discover our [Moving Box Organizer](/features/moving-box-organizer).",
    sec3Area6Title: "Label Pack and Setup Questions",
    sec3Area6Body: "Ask questions about label packs, printable QR/barcode sheets, box naming, storage categories, and setup tips for your home, move, office, or storage room.",

    sec4Heading: "Real-Life Examples of Support",
    sec4Ex1Title: "QR Code Will Not Scan",
    sec4Ex1Body: "A user places a label on a curved plastic bin and the phone camera struggles to scan it. Support can suggest moving the label to a flatter surface, improving lighting, reducing glare, and holding the phone steady.",
    sec4Ex2Title: "Generated PDF Is Not Downloading",
    sec4Ex2Body: "A user generates an A4 QR code sheet but cannot find the file later. Support can guide the user to Menu → Orders → Download and suggest checking the internet connection or completed order status.",
    sec4Ex3Title: "Photos Are Not Uploading",
    sec4Ex3Body: "A user adds photos to an item but the upload does not complete. Support can suggest checking camera and photo permissions, available storage, image size, and trying again with fewer or smaller photos.",
    sec4Ex4Title: "Multi-User Sharing Does Not Sync",
    sec4Ex4Body: "A family wants to share the same inventory across devices, but the second device does not show updates. Support can suggest checking Premium status, tapping Refresh/Sync, entering the MultiuserID with hyphens, and restarting the app if needed.",
    sec4Ex5Title: "Moving Items Between Boxes",
    sec4Ex5Body: "A user packed a winter jacket in the wrong moving box. Support can explain how to open the source box, tap the move icon, choose the destination box, and confirm the move.",
    sec4Ex6Title: "Choosing Labels for a Storage Project",
    sec4Ex6Body: "A homeowner or small office user is unsure whether to use printable QR/barcode PDFs or physical label packs. Support can explain the difference and help the user choose the option that fits the project.",

    sec5Heading: "Who Uses QrSortable Support?",
    sec5Card1Title: "First-Time Users",
    sec5Card1Body: "Get help scanning your first label, creating a box record, adding items, and understanding the basic inventory workflow without an account. Check out our [No Account Needed](/features/no-account-needed) guide.",
    sec5Card2Title: "People Moving House",
    sec5Card2Body: "Ask for guidance on labeling moving boxes, organizing mixed boxes, using Moving Mode, and finding items after the move.",
    sec5Card3Title: "Homeowners and Renters",
    sec5Card3Body: "Get support for organizing garages, basements, attics, closets, storage rooms, and plastic bins.",
    sec5Card4Title: "Families Using Shared Inventory",
    sec5Card4Body: "Ask questions about Premium Multi-User Sharing, MultiuserID entry, syncing, and trusted device access.",
    sec5Card5Title: "Small Business Users",
    sec5Card5Body: "Get help organizing office supplies, document archives, product samples, equipment, and storage shelves.",
    sec5Card6Title: "Professional Organizers",
    sec5Card6Body: "Use support for practical questions about label setup, printable sheets, QR code workflows, and storage inventory structure.",

    sec6Heading: "QrSortable Support vs. Searching Alone",
    sec6Body: "Help articles and FAQs are useful, but some setup questions are specific. A user may need help with a particular phone, label placement, PDF download, shared inventory sync, or photo upload issue.\n\nQrSortable support is designed to help users understand the next step clearly. When contacting support, include the problem, the step where it happened, device details if relevant, and screenshots if available.",
    sec6SearchTitle: "Searching alone",
    sec6SearchPoints: [
      "Useful for general questions",
      "May not match your exact issue",
      "Can take longer during moving or setup",
      "May not explain QrSortable-specific workflows",
      "Can be confusing for first-time users"
    ],
    sec6SupportTitle: "QrSortable Support Team",
    sec6SupportPoints: [
      "Helps with QrSortable-specific questions",
      "Can guide scanning, PDF, photo, order, and syncing issues",
      "Supports setup for homes, moves, offices, and storage rooms",
      "Provides practical next steps",
      "Works best when users include clear details and screenshots"
    ],

    sec7Heading: "Best Reasons to Contact Support",
    sec7Body: "Contact QrSortable support for:",
    sec7Items: [
      "QR code scanning issues", "Barcode scanning questions", "Label placement guidance", "Damaged or difficult-to-scan labels",
      "A4 QR/barcode PDF download questions", "Orders and download history questions", "Physical label pack questions", "Photo upload issues",
      "App permission questions", "Box setup guidance", "Item search questions", "Multi-User Sharing setup",
      "MultiuserID sync issues", "Moving Mode questions", "Moving items between boxes", "Storage organization tips",
      "Small business inventory setup", "Office archive organization", "General troubleshooting"
    ],

    sec8Heading: "What to Include in a Support Email",
    sec8Body: "To help support understand the issue faster, include:\n\n- A short description of the problem\n- What you were trying to do\n- The device type, such as Android or iPhone\n- The app version if known\n- A screenshot if available\n- The label type, such as printed PDF label or physical label pack\n- The box code if relevant\n- The exact error message if one appears\n- Whether the issue happens every time or only sometimes\n- For Multi-User Sharing, whether Premium is active and whether the MultiuserID includes hyphens",

    sec9Heading: "Support Built Around Real Storage Problems",
    sec9Body: "Storage organization is practical work. Labels may be applied to difficult surfaces, boxes may be packed quickly, photos may fail to upload, and shared inventory may need another sync.\n\nQrSortable support focuses on real situations like moving, home storage, office archives, QR code labels, printable PDFs, and shared inventory. The goal is to help users keep organizing without getting stuck. Explore our [Secure Inventory Tracking](/features/secure-inventory-tracking) for peace of mind.",

    sec10Heading: "Works with the Full QrSortable Workflow",
    sec10Body: "QrSortable support can help users understand how the app workflow fits together: generate or order labels, scan a label, create a box record, add item names and remarks, attach photos, search inventory, move items between boxes, and share inventory with trusted users if Premium Multi-User Sharing is enabled.",

    faqHeading: "Frequently Asked Questions",
    faqItems: [
      {
        q: "How can I contact the QrSortable Support Team?",
        a: "You can contact QrSortable support by emailing qrsortable@gmail.com. Include a short description of your question, screenshots if available, and the step where you need help."
      },
      {
        q: "What should I include in a support email?",
        a: "Include what you were trying to do, what happened, your device type, screenshots if available, the label or box code if relevant, and any error message you see."
      },
      {
        q: "Can support help if my QR code will not scan?",
        a: "Yes. Support can guide you through scanning checks such as cleaning the camera lens, using better lighting, reducing glare, holding the phone steady, and confirming the label is a QrSortable label."
      },
      {
        q: "Can support help with generated PDF downloads?",
        a: "Yes. If you cannot download a generated A4 QR or barcode PDF, support can help you check the order/download steps. You can also try Menu → Orders → Download if the PDF is available there."
      },
      {
        q: "Can support help with photo upload problems?",
        a: "Yes. Support can suggest checking camera and photo permissions, available storage, and image size if item photos are not uploading correctly."
      },
      {
        q: "Can support help with Multi-User Sharing?",
        a: "Yes. Support can help with Premium Multi-User Sharing questions, including Refresh/Sync, MultiuserID entry, and troubleshooting when shared inventory does not appear."
      },
      {
        q: "Can support help me move an item between boxes?",
        a: "Yes. QrSortable’s Moving Mode lets users open a source box, tap the move icon for an item, select a destination box, and confirm the move."
      },
      {
        q: "Can support help me choose the right label option?",
        a: "Yes. Support can explain the difference between printable A4 QR/barcode PDFs and physical label packs so you can choose the option that fits your storage project."
      },
      {
        q: "Do I need an account to contact support?",
        a: "No. You can email support directly. QrSortable can be used without login for regular inventory use, while Premium is required only for Multi-User Sharing."
      },
      {
        q: "Can small businesses contact QrSortable support?",
        a: "Yes. Small business users can contact support for questions about storage labels, office archives, QR code inventory setup, printable PDFs, and shared inventory workflows."
      },
      {
        q: "What should I do before contacting support about syncing?",
        a: "Check whether Premium is active, tap Refresh/Sync, confirm that the MultiuserID is entered correctly with hyphens, and restart the app if updates do not appear."
      },
      {
        q: "Can support help with storage organization tips?",
        a: "Yes. Support can provide practical guidance on box naming, categories, item remarks, label placement, and organizing storage areas such as garages, closets, basements, and offices."
      }
    ],

    finalCtaHeading: "Need Help with QrSortable?",
    finalCtaBody: "Whether you are setting up your first box, printing QR code labels, scanning storage bins, downloading generated PDFs, adding photos, or syncing shared inventory, the QrSortable Support Team is here to help with practical guidance."
  },
  DE: {
    seoTitle: "Support-Team | QrSortable Hilfe für Etiketten und App-Einrichtung",
    seoDesc: "Hilfe für QrSortable benötigt? Kontaktieren Sie das Support-Team für Fragen zur Einrichtung von QR-Code-Etiketten, Scan-Hilfe, PDF-Downloads, Bestellungen, Multi-User-Freigabe, Umzugsmodus und Fehlerbehebung.",
    breadcrumbHome: "Startseite",
    breadcrumbFeatures: "Funktionen",
    breadcrumbCurrent: "Support-Team",
    badge: "Support-Team",
    heading: "Support-Team: Hilfe für Etiketten, Kartons und App-Einrichtung",
    subheading: "Benötigen Sie Hilfe beim Einrichten von QrSortable, beim Scannen von Etiketten, beim Herunterladen von QR-Code-PDFs, beim Hinzufügen von Fotos oder bei der Multi-User-Freigabe? Das QrSortable Support-Team ist da, um Sie mit klaren und praktischen Antworten zu unterstützen.",
    supportingText: "Die Lagerorganisation sollte einfach sein. Wenn etwas unklar ist, senden Sie uns die Details und wir helfen Ihnen bei den nächsten Schritten.",
    ctaGetLabels: "Smarte Etiketten jetzt sichern",
    ctaExplorePreview: "Inventar-Vorschau erkunden",
    backToHome: "Zurück zur Startseite",
    
    sec1Heading: "Was ist das QrSortable Support-Team?",
    sec1Body: "Das QrSortable Support-Team unterstützt Sie bei praktischen Fragen zu QR-Code-Etiketten, Kartoneinrichtung, Artikelfotos, Suche, generierten PDFs, Bestellungen, Multi-User-Freigabe, Umzugsmodus und Fehlerbehebung.\n\nQrSortable wurde entwickelt, um Ihnen beim Scannen von Lageretiketten, Erstellen digitaler Kartoneinträge, Hinzufügen von Artikelnamen und Bemerkungen sowie beim Anhängen von Fotos und der Suche nach gelagerten Sachen zu helfen. Egal, ob Sie Ihre erste Kiste einrichten, sich auf einen Umzug vorbereiten, ein langfristiges Lager organisieren oder das gemeinsame Inventar verwalten – der Support hilft Ihnen, den Ablauf zu verstehen.\n\nFür Support kontaktieren Sie:\nqrsortable@gmail.com",
    
    sec2Heading: "So funktioniert der QrSortable-Support",
    sec2Step1Title: "Senden Sie eine klare Support-E-Mail",
    sec2Step1Body: "Senden Sie eine E-Mail an qrsortable@gmail.com mit einer kurzen Beschreibung des Problems oder Ihrer Frage. Fügen Sie hilfreiche Details hinzu, wie Ihren Gerätetyp, die App-Version (falls bekannt), Screenshots (falls vorhanden) und was Sie gerade tun wollten.",
    sec2Step2Title: "Teilen Sie die relevanten Details",
    sec2Step2Body: "Geben Sie bei Scan-Problemen die Art des Etiketts und die Lichtverhältnisse an. Erwähnen Sie bei PDF-Download-Problemen die Bestellung oder den Download-Schritt. Fügen Sie für die Multi-User-Freigabe hinzu, ob Premium aktiv ist und ob die MultiuserID mit Bindestrichen eingegeben wurde.",
    sec2Step3Title: "Erhalten Sie praktische Unterstützung",
    sec2Step3Body: "Die Support-Antwort konzentriert sich auf klare nächste Schritte, wie das Überprüfen der Etikettenplatzierung, das erneute Herunterladen aus den Bestellungen, das Überprüfen der App-Berechtigungen, das Neustarten der App oder das erneute Synchronisieren.",
    sec2Step4Title: "Setzen Sie das Gespräch bei Bedarf fort",
    sec2Step4Body: "Wenn die erste Antwort das Problem nicht vollständig löst, senden Sie eine Follow-up-E-Mail mit aktualisierten Details. Der Support funktioniert am besten, wenn das Problem, das Gerät, der Screenshot und der genaue Schritt leicht verständlich sind.",

    sec3Heading: "Wobei kann das Support-Team helfen?",
    sec3Area1Title: "QR-Code-Scan-Hilfe",
    sec3Area1Body: "Erhalten Sie Hilfe, wenn ein QR-Code nicht scannt. Häufige Prüfungen umfassen das Reinigen der Kamera-Linse, das Verbessern der Lichtverhältnisse, das Reduzieren von Spiegelungen, das Ruhighalten des Telefons und das Bestätigen, dass es sich um ein QrSortable-Etikett handelt.",
    sec3Area2Title: "Generierte PDF-Downloads",
    sec3Area2Body: "Erhalten Sie Hilfe, wenn Sie ein A4 QR- oder Barcode-PDF nicht herunterladen können. Sie können auch unter Menü → Bestellungen → Download prüfen, ob das generierte PDF in Ihrem Bestellverlauf verfügbar ist.",
    sec3Area3Title: "Fragen zum Foto-Upload",
    sec3Area3Body: "Erhalten Sie Hilfe, wenn Artikelfotos nicht hochgeladen werden. Nützliche Prüfungen umfassen App-Berechtigungen für Kamera oder Fotos, verfügbaren Speicherplatz auf dem Gerät und die Verwendung kleinerer Bilder bei Bedarf.",
    sec3Area4Title: "Support für Multi-User-Freigabe",
    sec3Area4Body: "Erhalten Sie Hilfe bei der Premium Multi-User-Freigabe, der Eingabe der MultiuserID, der Synchronisierung und der Einrichtung des gemeinsamen Inventars. Stellen Sie sicher, dass die MultiuserID korrekt eingegeben wurde, einschließlich der Bindestriche. Erfahren Sie mehr über die [Gemeinsame Inventarverwaltung](/features/shared-inventory-management).",
    sec3Area5Title: "Anleitung für den Umzugsmodus",
    sec3Area5Body: "Erhalten Sie Hilfe beim Verschieben von Artikeln zwischen Boxen. Der Umzugsmodus ermöglicht es Benutzern, eine Quellbox zu öffnen, auf das Verschieben-Symbol für einen Artikel zu tippen, die Zielbox auszuwählen und das Verschieben zu bestätigen. Entdecken Sie unseren [Umzugskarton-Organisator](/features/moving-box-organizer).",
    sec3Area6Title: "Fragen zu Etikettenpaketen und Einrichtung",
    sec3Area6Body: "Stellen Sie Fragen zu Etikettenpaketen, druckbaren QR-/Barcode-Blättern, Box-Benennung, Lagerkategorien und Einrichtungstipps für Ihr Zuhause, Ihren Umzug, Ihr Büro oder Ihren Lagerraum.",

    sec4Heading: "Praktische Support-Beispiele",
    sec4Ex1Title: "QR-Code lässt sich nicht scannen",
    sec4Ex1Body: "Ein Benutzer klebt ein Etikett auf einen gekrümmten Plastikbehälter und die Telefonkamera hat Mühe, es zu scannen. Der Support kann vorschlagen, das Etikett auf eine flachere Oberfläche zu verschieben, die Beleuchtung zu verbessern, Blendung zu reduzieren und das Telefon ruhig zu halten.",
    sec4Ex2Title: "Generiertes PDF wird nicht heruntergeladen",
    sec4Ex2Body: "Ein Benutzer erstellt ein A4-QR-Code-Blatt, kann die Datei aber später nicht finden. Der Support kann den Benutzer zu Menü → Bestellungen → Download leiten und vorschlagen, die Internetverbindung oder den Status der abgeschlossenen Bestellung zu überprüfen.",
    sec4Ex3Title: "Fotos werden nicht hochgeladen",
    sec4Ex3Body: "Ein Benutzer fügt einem Artikel Fotos hinzu, aber der Upload wird nicht abgeschlossen. Der Support kann vorschlagen, die Kamera- und Fotoberechtigungen, den verfügbaren Speicherplatz und die Bildgröße zu überprüfen und es mit weniger oder kleineren Fotos erneut zu versuchen.",
    sec4Ex4Title: "Multi-User-Freigabe synchronisiert nicht",
    sec4Ex4Body: "Eine Familie möchte dasselbe Inventar auf mehreren Geräten teilen, aber das zweite Gerät zeigt keine Updates. Der Support kann vorschlagen, den Premium-Status zu überprüfen, auf Aktualisieren/Synchronisieren zu tippen, die MultiuserID mit Bindestrichen einzugeben und die App bei Bedarf neu zu starten.",
    sec4Ex5Title: "Artikel zwischen Boxen verschieben",
    sec4Ex5Body: "Ein Benutzer hat eine Winterjacke im falschen Umzugskarton verpackt. Der Support kann erklären, wie man die Quellbox öffnet, auf das Verschieben-Symbol tippt, die Zielbox auswählt und das Verschieben bestätigt.",
    sec4Ex6Title: "Auswahl der Etiketten für ein Lagerprojekt",
    sec4Ex6Body: "Ein Hausbesitzer oder Büronutzer ist sich unsicher, ob er druckbare QR-/Barcode-PDFs oder physische Etikettenpakete verwenden soll. Der Support kann den Unterschied erklären und dem Benutzer helfen, die Option zu wählen, die zum Projekt passt.",

    sec5Heading: "Wer nutzt den QrSortable-Support?",
    sec5Card1Title: "Erstnutzer",
    sec5Card1Body: "Erhalten Sie Hilfe beim Scannen Ihres ersten Etiketts, Erstellen eines Box-Eintrags, Hinzufügen von Artikeln und Verstehen des grundlegenden Inventarablaufs ohne ein Konto erstellen zu müssen. Lesen Sie dazu unseren Leitfaden [Kein Konto erforderlich](/features/no-account-needed).",
    sec5Card2Title: "Menschen beim Umzug",
    sec5Card2Body: "Fragen Sie nach einer Anleitung zum Beschriften von Umzugskartons, Organisieren gemischter Boxen, zur Nutzung des Umzugsmodus und zum Finden von Artikeln nach dem Umzug.",
    sec5Card3Title: "Hausbesitzer und Mieter",
    sec5Card3Body: "Erhalten Sie Unterstützung bei der Organisation von Garagen, Kellern, Dachböden, Schränken, Lagerräumen und Plastikboxen.",
    sec5Card4Title: "Familien mit gemeinsamem Inventar",
    sec5Card4Body: "Stellen Sie Fragen zur Premium Multi-User-Freigabe, der Eingabe der MultiuserID, der Synchronisierung und dem Zugriff über vertrauenswürdige Geräte.",
    sec5Card5Title: "Gewerbliche Nutzer",
    sec5Card5Body: "Erhalten Sie Hilfe bei der Organisation von Bürobedarf, Dokumentenarchiven, Produktmustern, Ausrüstung und Lagerregalen.",
    sec5Card6Title: "Professionelle Organizer",
    sec5Card6Body: "Nutzen Sie den Support für praktische Fragen zu Etiketteneinrichtung, druckbaren Blättern, QR-Code-Workflows und der Struktur des Lagerinventars.",

    sec6Heading: "QrSortable-Support vs. Eigenrecherche",
    sec6Body: "Hilfeartikel und FAQs sind nützlich, aber manche Einrichtungsfragen sind sehr speziell. Ein Benutzer benötigt möglicherweise Hilfe bei einem bestimmten Telefon, der Platzierung von Etiketten, dem PDF-Download, der Synchronisierung des geteilten Inventars oder dem Hochladen von Fotos.\n\nDer QrSortable-Support hilft Benutzern, den nächsten Schritt klar zu verstehen. Wenn Sie den Support kontaktieren, beschreiben Sie das Problem, den Schritt, bei dem es aufgetreten ist, die Gerätedetails, falls relevant, und fügen Sie Screenshots bei.",
    sec6SearchTitle: "Auf sich allein gestellt suchen",
    sec6SearchPoints: [
      "Nützlich für allgemeine Fragen",
      "Passt möglicherweise nicht genau zu Ihrem spezifischen Problem",
      "Kann beim Umzug oder der Einrichtung länger dauern",
      "Erklärt keine QrSortable-spezifischen Arbeitsabläufe",
      "Kann für Erstnutzer verwirrend sein"
    ],
    sec6SupportTitle: "QrSortable Support-Team",
    sec6SupportPoints: [
      "Hilft bei QrSortable-spezifischen Fragen",
      "Führt Sie durch Scan-, PDF-, Foto-, Bestell- und Synchronisationsprobleme",
      "Unterstützt die Einrichtung für Wohnungen, Umzüge, Büros und Lagerräume",
      "Bietet praktische nächste Schritte",
      "Funktioniert am besten, wenn Benutzer klare Details und Screenshots mitsenden"
    ],

    sec7Heading: "Beste Gründe, den Support zu kontaktieren",
    sec7Body: "Kontaktieren Sie den QrSortable-Support für:",
    sec7Items: [
      "QR-Code-Scanprobleme", "Fragen zum Barcode-Scannen", "Anleitung zur Etikettenplatzierung", "Beschädigte oder schwer lesbare Etiketten",
      "Fragen zum Download von A4 QR-/Barcode-PDFs", "Fragen zu Bestellungen und Download-Verlauf", "Fragen zu physischen Etikettenpaketen", "Probleme beim Hochladen von Fotos",
      "Fragen zu App-Berechtigungen", "Anleitung zur Boxeinrichtung", "Fragen zur Artikelsuche", "Einrichtung der Multi-User-Freigabe",
      "Synchronisationsprobleme mit der MultiuserID", "Fragen zum Umzugsmodus", "Verschieben von Artikeln zwischen Boxen", "Tipps zur Lagerorganisation",
      "Inventareinrichtung für kleine Unternehmen", "Büroarchiv-Organisation", "Allgemeine Fehlerbehebung"
    ],

    sec8Heading: "Was Sie in einer Support-E-Mail angeben sollten",
    sec8Body: "Um dem Support zu helfen, das Problem schneller zu verstehen, geben Sie bitte Folgendes an:\n\n- Eine kurze Beschreibung des Problems\n- Was Sie gerade tun wollten\n- Den Gerätetyp (z. B. Android oder iPhone)\n- Die App-Version (falls bekannt)\n- Einen Screenshot (falls vorhanden)\n- Die Etikettenart (z. B. gedrucktes PDF-Etikett oder physisches Etikettenpaket)\n- Den Box-Code (falls relevant)\n- Die genaue Fehlermeldung, falls eine erscheint\n- Ob das Problem jedes Mal oder nur manchmal auftritt\n- Für die Multi-User-Freigabe: ob Premium aktiv ist und ob die MultiuserID Bindestriche enthält",

    sec9Heading: "Support für echte Lagerprobleme entwickelt",
    sec9Body: "Lagerorganisation ist praktische Arbeit. Etiketten werden auf schwierigen Oberflächen angebracht, Kartons werden schnell gepackt, Fotos werden nicht hochgeladen oder das geteilte Inventar benötigt eine erneute Synchronisierung.\n\nDer QrSortable-Support konzentriert sich auf reale Situationen wie Umzüge, Haushaltslagerung, Büroarchive, QR-Code-Etiketten, druckbare PDFs und das gemeinsame Inventar. Unser Ziel ist es, Benutzern zu helfen, ihre Organisation ohne Unterbrechung fortzusetzen. Entdecken Sie auch unsere [Sichere Inventarverfolgung](/features/secure-inventory-tracking) für absolute Sicherheit.",

    sec10Heading: "Kompatibel mit dem gesamten QrSortable-Arbeitsablauf",
    sec10Body: "Der QrSortable-Support hilft Benutzern zu verstehen, wie alle Teile der App zusammenpassen: Etiketten erstellen oder bestellen, Etikett scannen, Karton anlegen, Artikelnamen und Bemerkungen hinzufügen, Fotos anhängen, Inventar durchsuchen, Artikel zwischen Boxen verschieben und das Inventar mit vertrauenswürdigen Benutzern teilen, wenn die Premium Multi-User-Freigabe aktiviert ist.",

    faqHeading: "Häufig gestellte Fragen (FAQ)",
    faqItems: [
      {
        q: "Wie kann ich das QrSortable Support-Team kontaktieren?",
        a: "Sie können den QrSortable-Support per E-Mail unter qrsortable@gmail.com erreichen. Beschreiben Sie kurz Ihre Frage und fügen Sie Screenshots sowie den Schritt hinzu, bei dem Sie Hilfe benötigen."
      },
      {
        q: "Was sollte ich in einer Support-E-Mail angeben?",
        a: "Geben Sie an, was Sie tun wollten, was passiert ist, Ihren Gerätetyp, Screenshots (falls vorhanden), das Etikett oder den Kartoncode (falls relevant) und eventuelle Fehlermeldungen."
      },
      {
        q: "Kann der Support helfen, wenn sich mein QR-Code nicht scannen lässt?",
        a: "Ja. Der Support kann Sie durch Scan-Überprüfungen führen, wie das Reinigen der Kamera-Linse, die Verbesserung der Beleuchtung, das Reduzieren von Blendungen und das Ruhighalten des Telefons."
      },
      {
        q: "Kann der Support bei generierten PDF-Downloads helfen?",
        a: "Ja. Wenn Sie ein generiertes A4 QR- oder Barcode-PDF nicht herunterladen können, hilft Ihnen der Support bei den Bestell- und Download-Schritten. Sie können auch unter Menü → Bestellungen → Download nachsehen."
      },
      {
        q: "Kann der Support bei Problemen mit dem Foto-Upload helfen?",
        a: "Ja. Der Support kann vorschlagen, die Berechtigungen für Kamera und Fotos, den verfügbaren Speicherplatz und die Bildgröße zu überprüfen, falls Artikelfotos nicht korrekt hochgeladen werden."
      },
      {
        q: "Kann der Support bei der Multi-User-Freigabe helfen?",
        a: "Ja. Der Support kann bei Fragen zur Premium Multi-User-Freigabe helfen, einschließlich Aktualisierung/Synchronisierung, Eingabe der MultiuserID und Fehlerbehebung bei nicht angezeigten Daten."
      },
      {
        q: "Kann der Support mir helfen, einen Artikel zwischen Boxen zu verschieben?",
        a: "Ja. Der QrSortable-Umzugsmodus ermöglicht es Benutzern, eine Quellbox zu öffnen, auf das Verschieben-Symbol für einen Artikel zu tippen, die Zielbox auszuwählen und das Verschieben zu bestätigen."
      },
      {
        q: "Kann der Support mir helfen, die richtige Etikettenoption auszuwählen?",
        a: "Ja. Der Support kann den Unterschied zwischen druckbaren A4-QR-/Barcode-PDFs und physischen Etikettenpaketen erklären, damit Sie die passende Option für Ihr Projekt finden."
      },
      {
        q: "Benötige ich ein Konto, um den Support zu kontaktieren?",
        a: "Nein. Sie können dem Support direkt eine E-Mail senden. QrSortable kann für das reguläre Inventar ohne Anmeldung genutzt werden, während Premium nur für das Teilen erforderlich ist."
      },
      {
        q: "Können kleine Unternehmen den QrSortable-Support kontaktieren?",
        a: "Ja. Gewerbliche Nutzer können sich bei Fragen zu Lageretiketten, Büroarchiven, QR-Code-Inventareinrichtung, druckbaren PDFs und geteilten Inventar-Workflows an uns wenden."
      },
      {
        q: "Was sollte ich vor dem Kontaktieren des Supports bezüglich der Synchronisierung tun?",
        a: "Prüfen Sie, ob Premium aktiv ist, tippen Sie auf Aktualisieren/Synchronisieren, bestätigen Sie die korrekte Eingabe der MultiuserID mit Bindestrichen und starten Sie die App neu."
      },
      {
        q: "Kann der Support mir Tipps zur Lagerorganisation geben?",
        a: "Ja. Der Support kann praktische Ratschläge zu Box-Benennung, Kategorien, Bemerkungen, Etikettenplatzierung und der Organisation von Garagen, Schränken, Kellern und Büros geben."
      }
    ],

    finalCtaHeading: "Benötigen Sie Hilfe bei QrSortable?",
    finalCtaBody: "Egal, ob Sie Ihren ersten Karton einrichten, QR-Code-Etiketten drucken, Lagerbehälter scannen, generierte PDFs herunterladen, Fotos hinzufügen oder das geteilte Inventar synchronisieren – das QrSortable Support-Team unterstützt Sie mit praktischen Ratschlägen."
  },
  FR: {
    seoTitle: "Équipe support | QrSortable Aide pour les étiquettes et l'application",
    seoDesc: "Besoin d'aide avec QrSortable ? Contactez l'équipe support pour la configuration des étiquettes QR code, l'aide au scan, les téléchargements PDF, les commandes, le partage multi-utilisateur, le mode déménagement et le dépannage.",
    breadcrumbHome: "Accueil",
    breadcrumbFeatures: "Fonctionnalités",
    breadcrumbCurrent: "Équipe support",
    badge: "Équipe support",
    heading: "Équipe support : Aide pour étiquettes, cartons et configuration",
    subheading: "Besoin d'aide pour configurer QrSortable, scanner des étiquettes, télécharger des PDF de codes QR, ajouter des photos ou utiliser le partage multi-utilisateur ? L'équipe support de QrSortable est là pour vous guider avec des réponses claires et pratiques.",
    supportingText: "L'organisation du stockage doit être simple. Si quelque chose n'est pas clair, envoyez-nous les détails et nous vous aiderons à comprendre la prochaine étape.",
    ctaGetLabels: "Obtenir des étiquettes intelligentes",
    ctaExplorePreview: "Découvrir l'aperçu de l'inventaire",
    backToHome: "Retour à l'accueil",
    
    sec1Heading: "Qu'est-ce que l'équipe support QrSortable ?",
    sec1Body: "L'équipe support QrSortable aide les utilisateurs à résoudre leurs questions pratiques concernant les étiquettes QR code, la configuration des cartons, les photos d'articles, la recherche, les PDF générés, les commandes, le partage multi-utilisateur, le mode déménagement et le dépannage.\n\nQrSortable est conçu pour aider les utilisateurs à scanner les étiquettes de stockage, à créer des fiches de carton numériques, à ajouter des noms d'articles et des remarques, à joindre des photos et à effectuer des recherches parmi les objets stockés. Que vous prépariez votre premier carton, organisiez un stockage à long terme ou gériez un inventaire partagé, l'assistance peut vous aider à comprendre le processus.\n\nPour toute assistance, contactez :\nqrsortable@gmail.com",
    
    sec2Heading: "Comment fonctionne l'assistance QrSortable",
    sec2Step1Title: "Envoyer un e-mail clair à l'assistance",
    sec2Step1Body: "Envoyez un e-mail à qrsortable@gmail.com avec une courte description du problème ou de la question. Indiquez des détails utiles tels que le type d'appareil, la version de l'application si vous la connaissez, des captures d'écran si disponibles et ce que vous essayiez de faire.",
    sec2Step2Title: "Partager les détails pertinents",
    sec2Step2Body: "Pour les problèmes de scan, mentionnez le type d'étiquette et les conditions de luminosité. Pour les problèmes de téléchargement de PDF, mentionnez l'étape de commande ou de téléchargement. Pour le partage multi-utilisateur, indiquez si l'abonnement Premium est actif et si le MultiuserID a été saisi avec des tirets.",
    sec2Step3Title: "Obtenir des conseils pratiques",
    sec2Step3Body: "La réponse de l'assistance se concentrera sur des étapes claires, telles que la vérification de l'emplacement de l'étiquette, le re-téléchargement depuis les Commandes, la vérification des autorisations de l'application, le redémarrage de l'application ou une nouvelle synchronisation.",
    sec2Step4Title: "Poursuivre la conversation si nécessaire",
    sec2Step4Body: "Si la première réponse ne résout pas entièrement le problème, envoyez un suivi avec des détails mis à jour. L'assistance fonctionne mieux lorsque le problème, l'appareil, la capture d'écran et l'étape exacte sont faciles à comprendre.",

    sec3Heading: "Comment l'équipe support peut-elle vous aider ?",
    sec3Area1Title: "Aide au scan de codes QR",
    sec3Area1Body: "Obtenez de l'aide si un code QR ne se scanne pas. Les vérifications courantes consistent à nettoyer l'objectif de la caméra, à améliorer la luminosité, à réduire les reflets, à stabiliser le téléphone et à confirmer que l'étiquette est bien une étiquette QrSortable.",
    sec3Area2Title: "Téléchargements de PDF générés",
    sec3Area2Body: "Obtenez de l'aide si vous ne parvenez pas à télécharger un PDF de code QR ou de code-barres A4. Vous pouvez également consulter le Menu → Commandes → Télécharger pour voir si le PDF généré est disponible dans l'historique de vos commandes.",
    sec3Area3Title: "Questions sur l'importation de photos",
    sec3Area3Body: "Obtenez de l'aide si les photos d'articles ne se chargent pas. Les vérifications utiles concernent les autorisations de l'application pour l'appareil photo ou les photos, le stockage disponible sur l'appareil et l'utilisation d'images plus petites si nécessaire.",
    sec3Area4Title: "Assistance pour le partage multi-utilisateur",
    sec3Area4Body: "Obtenez de l'aide concernant le partage multi-utilisateur Premium, la saisie du MultiuserID, la synchronisation et la configuration de l'inventaire partagé. Assurez-vous que le MultiuserID est correctement saisi, y compris les tirets. En savoir plus sur la [Gestion d'inventaire partagé](/features/shared-inventory-management).",
    sec3Area5Title: "Conseils pour le mode déménagement",
    sec3Area5Body: "Obtenez de l'aide pour déplacer des articles d'un carton à un autre. Le mode déménagement permet aux utilisateurs d'ouvrir un carton d'origine, d'appuyer sur l'icône de déplacement d'un article, de sélectionner le carton de destination et de confirmer l'action. Découvrez notre [Organisateur de cartons de déménagement](/features/moving-box-organizer).",
    sec3Area6Title: "Questions sur les packs d'étiquettes et la configuration",
    sec3Area6Body: "Posez vos questions sur les packs d'étiquettes, les feuilles de codes QR/codes-barres imprimables, la dénomination des cartons, les catégories de stockage et les conseils de configuration pour votre maison, déménagement, bureau ou pièce de stockage.",

    sec4Heading: "Exemples concrets d'assistance",
    sec4Ex1Title: "Le code QR ne scanne pas",
    sec4Ex1Body: "Un utilisateur place une étiquette sur un bac en plastique incurvé et la caméra du téléphone peine à la scanner. L'assistance peut suggérer de déplacer l'étiquette sur une surface plus plane, d'améliorer l'éclairage, de réduire les reflets et de tenir le téléphone immobile.",
    sec4Ex2Title: "Le PDF généré ne se télécharge pas",
    sec4Ex2Body: "Un utilisateur génère une feuille de codes QR A4 mais ne retrouve pas le fichier plus tard. L'assistance peut guider l'utilisateur vers Menu → Commandes → Télécharger et suggérer de vérifier la connexion Internet ou le statut de la commande.",
    sec4Ex3Title: "Les photos ne se chargent pas",
    sec4Ex3Body: "Un utilisateur ajoute des photos à un article mais le chargement ne se termine pas. L'assistance peut suggérer de vérifier les autorisations de l'appareil photo et des photos, le stockage disponible, la taille de l'image, et de réessayer avec moins de photos ou des photos plus petites.",
    sec4Ex4Title: "Le partage multi-utilisateur ne se synchronise pas",
    sec4Ex4Body: "Une famille souhaite partager le même inventaire sur plusieurs appareils, mais le second appareil n'affiche pas les mises à jour. L'assistance peut suggérer de vérifier le statut Premium, d'appuyer sur Rafraîchir/Synchroniser, de saisir le MultiuserID avec des tirets, et de redémarrer l'application si nécessaire.",
    sec4Ex5Title: "Déplacement d'articles entre les cartons",
    sec4Ex5Body: "Un utilisateur a emballé une veste d'hiver dans le mauvais carton de déménagement. L'assistance peut lui expliquer comment ouvrir le carton d'origine, appuyer sur l'icône de déplacement, choisir le carton de destination et confirmer le déplacement.",
    sec4Ex6Title: "Choisir des étiquettes pour un projet de stockage",
    sec4Ex6Body: "Un propriétaire ou un utilisateur de bureau ne sait pas s'il doit utiliser des PDF de codes QR/codes-barres imprimables ou des packs d'étiquettes physiques. L'assistance peut expliquer la différence et l'aider à choisir l'option la mieux adaptée.",

    sec5Heading: "Qui utilise l'assistance QrSortable ?",
    sec5Card1Title: "Nouveaux utilisateurs",
    sec5Card1Body: "Obtenez de l'aide pour scanner votre première étiquette, créer une fiche de carton, ajouter des articles et comprendre le fonctionnement de l'inventaire sans compte. Consultez notre guide [Aucun compte requis](/features/no-account-needed).",
    sec5Card2Title: "Personnes qui déménagent",
    sec5Card2Body: "Demandez des conseils pour étiqueter les cartons de déménagement, organiser les cartons mixtes, utiliser le mode déménagement et retrouver vos affaires après l'installation.",
    sec5Card3Title: "Propriétaires et locataires",
    sec5Card3Body: "Bénéficiez d'une assistance pour organiser les garages, caves, greniers, placards, espaces de stockage et bacs en plastique.",
    sec5Card4Title: "Familles gérant un inventaire partagé",
    sec5Card4Body: "Posez vos questions sur le partage multi-utilisateur Premium, la saisie du MultiuserID, la synchronisation et l'accès des appareils autorisés.",
    sec5Card5Title: "Professionnels",
    sec5Card5Body: "Obtenez de l'aide pour organiser les fournitures de bureau, les archives de documents, les échantillons de produits, le matériel et les étagères de stockage.",
    sec5Card6Title: "Organisateurs professionnels",
    sec5Card6Body: "Faites appel à l'assistance pour vos questions pratiques sur la pose d'étiquettes, les feuilles imprimables, les flux de codes QR et la structure de l'inventaire.",

    sec6Heading: "Assistance QrSortable vs Recherche en solo",
    sec6Body: "Les articles d'aide et les FAQ sont utiles, mais certaines questions de configuration sont très spécifiques. Un utilisateur peut avoir besoin d'aide pour un téléphone particulier, l'emplacement d'une étiquette, le téléchargement d'un PDF, la synchronisation d'un inventaire partagé ou un chargement de photo.\n\nL'assistance de QrSortable est conçue pour aider les utilisateurs à comprendre clairement l'étape suivante. Lorsque vous contactez l'assistance, indiquez le problème, l'étape où il s'est produit, les détails de l'appareil si nécessaire, et fournissez des captures d'écran.",
    sec6SearchTitle: "Recherche en solo",
    sec6SearchPoints: [
      "Utile pour les questions d'ordre général",
      "Peut ne pas correspondre exactement à votre problème",
      "Peut prendre plus de temps pendant un déménagement ou l'installation",
      "N'explique pas les processus spécifiques à QrSortable",
      "Peut être déroutant pour les nouveaux utilisateurs"
    ],
    sec6SupportTitle: "Équipe support QrSortable",
    sec6SupportPoints: [
      "Aide pour les questions spécifiques à QrSortable",
      "Vous guide en cas de problème de scan, de PDF, de photo, de commande et de synchronisation",
      "Prend en charge la configuration pour les maisons, déménagements, bureaux et entrepôts",
      "Propose des solutions et étapes pratiques",
      "Fonctionne au mieux lorsque les utilisateurs partagent des détails précis et des captures d'écran"
    ],

    sec7Heading: "Meilleures raisons de contacter l'assistance",
    sec7Body: "Contactez l'assistance QrSortable pour :",
    sec7Items: [
      "Problèmes de scan de codes QR", "Questions sur le scan de codes-barres", "Conseils de placement des étiquettes", "Étiquettes endommagées ou illisibles",
      "Questions sur le téléchargement de PDF A4", "Questions sur les commandes et l'historique", "Questions sur les packs d'étiquettes physiques", "Problèmes de chargement de photos",
      "Questions sur les autorisations de l'application", "Conseils pour configurer les cartons", "Questions sur la recherche d'articles", "Configuration du partage multi-utilisateur",
      "Problèmes de synchronisation du MultiuserID", "Questions sur le mode déménagement", "Déplacement d'articles d'un carton à un autre", "Astuces d'organisation de stockage",
      "Configuration de l'inventaire pour petites entreprises", "Organisation d'archives de bureau", "Dépannage général"
    ],

    sec8Heading: "Que doit contenir un e-mail d'assistance ?",
    sec8Body: "Pour aider l'équipe support à comprendre le problème plus rapidement, veuillez indiquer :\n\n- Une courte description du problème\n- Ce que vous essayiez de faire\n- Le type d'appareil (par exemple Android ou iPhone)\n- La version de l'application si vous la connaissez\n- Une capture d'écran si disponible\n- Le type d'étiquette (par exemple étiquette PDF imprimée ou pack d'étiquettes physiques)\n- Le code du carton si nécessaire\n- Le message d'erreur exact si l'un d'eux s'affiche\n- Si le problème survient systématiquement ou seulement de temps en temps\n- Pour le partage multi-utilisateur, si l'option Premium est active et si le MultiuserID comporte des tirets",

    sec9Heading: "Une assistance conçue pour les vrais problèmes de rangement",
    sec9Body: "L'organisation du stockage est une tâche concrète. Les étiquettes peuvent être collées sur des surfaces complexes, les cartons peuvent être emballés à la hâte, les photos peuvent ne pas se charger et l'inventaire partagé peut nécessiter une synchronisation.\n\nL'assistance QrSortable se concentre sur les situations réelles telles que le déménagement, le rangement de la maison, les archives de bureau, les étiquettes QR code, les PDF imprimables et l'inventaire partagé. Le but est d'aider les utilisateurs à continuer de ranger sans se retrouver bloqués. Découvrez aussi notre [Suivi d'inventaire sécurisé](/features/secure-inventory-tracking) pour un esprit tranquille.",

    sec10Heading: "Intégration au flux complet de QrSortable",
    sec10Body: "L'assistance QrSortable peut aider les utilisateurs à comprendre comment s'articulent toutes les étapes de l'application : générer ou commander des étiquettes, scanner une étiquette, créer une fiche de carton, ajouter des noms d'articles et des remarques, joindre des photos, rechercher dans l'inventaire, déplacer des articles entre cartons et partager l'inventaire si l'option Premium de partage multi-utilisateur est activée.",

    faqHeading: "Foire Aux Questions (FAQ)",
    faqItems: [
      {
        q: "Comment puis-je contacter l'équipe support de QrSortable ?",
        a: "Vous pouvez contacter l'assistance QrSortable par e-mail à qrsortable@gmail.com. Décrivez brièvement votre question, joignez des captures d'écran si disponibles et précisez l'étape où vous bloquez."
      },
      {
        q: "Que dois-je inclure dans un e-mail à l'assistance ?",
        a: "Indiquez ce que vous essayiez de faire, ce qui s'est produit, le type d'appareil, des captures d'écran si possibles, le code de l'étiquette ou du carton et tout message d'erreur."
      },
      {
        q: "L'assistance peut-elle m'aider si mon code QR ne se scanne pas ?",
        a: "Oui. L'assistance peut vous guider à travers des vérifications simples : nettoyage de la caméra, amélioration de l'éclairage, réduction des reflets, stabilisation du téléphone et vérification qu'il s'agit bien d'une étiquette QrSortable."
      },
      {
        q: "L'assistance aide-t-elle pour les téléchargements de PDF générés ?",
        a: "Oui. Si vous ne pouvez pas télécharger un PDF de code QR ou de code-barres A4, l'assistance vous aidera à vérifier les étapes. Vous pouvez aussi essayer Menu → Commandes → Télécharger si le PDF y est stocké."
      },
      {
        q: "L'assistance peut-elle m'aider en cas de problème de chargement de photos ?",
        a: "Oui. L'assistance peut vous conseiller de vérifier les autorisations d'accès à l'appareil photo, le stockage disponible ou la taille de l'image si les photos d'articles ne se chargent pas."
      },
      {
        q: "L'assistance aide-t-elle pour le partage multi-utilisateur ?",
        a: "Oui. L'assistance peut répondre à vos questions sur le partage multi-utilisateur Premium, la saisie du MultiuserID et la résolution des problèmes de synchronisation."
      },
      {
        q: "L'assistance peut-elle m'aider à déplacer un article d'un carton à un autre ?",
        a: "Oui. Le mode déménagement de QrSortable permet d'ouvrir un carton d'origine, d'appuyer sur l'icône de déplacement d'un article, de choisir le carton de destination et de confirmer."
      },
      {
        q: "L'assistance peut-elle m'aider à choisir le bon modèle d'étiquette ?",
        a: "Oui. L'assistance peut vous expliquer la différence entre les PDF de codes QR imprimables et les packs physiques pour trouver la solution adaptée à votre projet."
      },
      {
        q: "Faut-il avoir un compte pour contacter l'assistance ?",
        a: "Non. Vous pouvez envoyer un e-mail directement. QrSortable peut être utilisé sans connexion pour l'inventaire standard, tandis que le Premium est requis uniquement pour le partage."
      },
      {
        q: "Les petites entreprises peuvent-elles contacter l'assistance de QrSortable ?",
        a: "Oui. Les professionnels peuvent faire appel à nous pour leurs questions sur les étiquettes, les archives, la configuration de l'inventaire par codes QR, les PDF et les flux partagés."
      },
      {
        q: "Que dois-je faire avant de contacter l'assistance pour un problème de synchro ?",
        a: "Vérifiez que l'option Premium est active, appuyez sur Rafraîchir/Synchroniser, confirmez que le MultiuserID est correctement saisi avec les tirets et relancez l'application."
      },
      {
        q: "L'assistance donne-t-elle des conseils de rangement ?",
        a: "Oui. L'assistance peut vous donner des astuces pratiques sur le nom des cartons, les catégories, les remarques, l'emplacement des étiquettes et l'organisation des garages, placards, caves et bureaux."
      }
    ],

    finalCtaHeading: "Besoin d'aide avec QrSortable ?",
    finalCtaBody: "Que vous configuriez votre premier carton, imprimiez des étiquettes QR, scanniez des bacs, téléchargiez des PDF, ajoutiez des photos ou synchronisiez un inventaire partagé, l'équipe support QrSortable est là pour vous guider."
  },
  ES: {
    seoTitle: "Equipo de soporte | QrSortable Ayuda para Etiquetas y App",
    seoDesc: "¿Necesita ayuda con QrSortable? Contacte al equipo de soporte para configurar etiquetas de códigos QR, ayuda con el escaneo, descargas de PDF, pedidos, Multi-User Sharing, modo mudanza y resolución de problemas.",
    breadcrumbHome: "Inicio",
    breadcrumbFeatures: "Funcionalidades",
    breadcrumbCurrent: "Equipo de soporte",
    badge: "Equipo de soporte",
    heading: "Equipo de soporte: Ayuda para etiquetas, cajas y configuración",
    subheading: "¿Necesita ayuda para configurar QrSortable, escanear etiquetas, descargar PDF de códigos QR, añadir fotos o usar Multi-User Sharing? El equipo de soporte de QrSortable está aquí para guiarle con respuestas claras y prácticas.",
    supportingText: "La organización del almacenamiento debe ser sencilla. Si algo no está claro, envíenos los detalles y le ayudaremos a dar el siguiente paso.",
    ctaGetLabels: "Obtenga etiquetas inteligentes ahora",
    ctaExplorePreview: "Explorar la vista previa del inventario",
    backToHome: "Volver al inicio",
    
    sec1Heading: "¿Qué es el equipo de soporte de QrSortable?",
    sec1Body: "El equipo de soporte de QrSortable ayuda a los usuarios con preguntas prácticas sobre etiquetas de códigos QR, configuración de cajas, fotos de artículos, búsqueda, PDF generados, pedidos, Multi-User Sharing, modo mudanza y resolución de problemas.\n\nQrSortable está diseñado para ayudar a los usuarios a escanear etiquetas de almacenamiento, crear registros de cajas digitales, añadir nombres de artículos y comentarios, adjuntar fotos y buscar entre los objetos guardados. Tanto si está preparando su primera caja, organizando un trastero a largo plazo o gestionando un inventario compartido, el soporte puede ayudarle a entender el proceso.\n\nPara soporte, contacte con:\nqrsortable@gmail.com",
    
    sec2Heading: "Cómo funciona el soporte de QrSortable",
    sec2Step1Title: "Envíe un correo electrónico claro de soporte",
    sec2Step1Body: "Envíe un correo electrónico a qrsortable@gmail.com con una breve descripción del problema o pregunta. Incluya detalles útiles como el tipo de dispositivo, la versión de la aplicación si la conoce, capturas de pantalla si están disponibles y lo que estaba intentando hacer.",
    sec2Step2Title: "Comparta los detalles relevantes",
    sec2Step2Body: "Para problemas de escaneo, mencione el tipo de etiqueta y las condiciones de iluminación. Para problemas de descarga de PDF, mencione el pedido o el paso de descarga. Para Multi-User Sharing, indique si la versión Premium está activa y si el MultiuserID se introdujo con guiones.",
    sec2Step3Title: "Obtenga orientación práctica",
    sec2Step3Body: "La respuesta de soporte se centrará en los siguientes pasos claros, como comprobar la colocación de las etiquetas, volver a descargar desde Pedidos, revisar los permisos de la aplicación, reiniciar la aplicación o volver a sincronizar.",
    sec2Step4Title: "Continúe la conversación si es necesario",
    sec2Step4Body: "Si la primera respuesta no resuelve por completo el problema, envíe un correo de seguimiento con detalles actualizados. El soporte funciona mejor cuando el problema, el dispositivo, la captura de pantalla y el paso exacto son fáciles de entender.",

    sec3Heading: "¿En qué puede ayudarle el equipo de soporte?",
    sec3Area1Title: "Ayuda para el escaneo de códigos QR",
    sec3Area1Body: "Obtenga ayuda si un código QR no se escanea. Las comprobaciones habituales incluyen limpiar la lente de la cámara, mejorar la iluminación, reducir los reflejos, mantener el teléfono inmóvil y confirmar que la etiqueta es una etiqueta QrSortable.",
    sec3Area2Title: "Descargas de PDF generados",
    sec3Area2Body: "Obtenga ayuda si no puede descargar un PDF A4 de código QR o de código de barras. También puede consultar Menú → Pedidos → Descargar para ver si el PDF generado está disponible en su historial de pedidos.",
    sec3Area3Title: "Preguntas sobre la carga de fotos",
    sec3Area3Body: "Obtenga ayuda si las fotos de los artículos no se cargan. Las comprobaciones útiles incluyen los permisos de la aplicación para la cámara o las fotos, el almacenamiento disponible en el dispositivo y el uso de imágenes más pequeñas si es necesario.",
    sec3Area4Title: "Soporte para Multi-User Sharing",
    sec3Area4Body: "Obtenga ayuda con Premium Multi-User Sharing, la introducción de MultiuserID, la sincronización y la configuración de inventario compartido. Asegúrese de que el MultiuserID se introduzca correctamente, con los guiones incluidos. Obtenga más información sobre la [Gestión de inventario compartido](/features/shared-inventory-management).",
    sec3Area5Title: "Guía para el modo mudanza",
    sec3Area5Body: "Obtenga ayuda para mover artículos entre cajas. El modo mudanza permite a los usuarios abrir una caja de origen, pulsar el icono de mover un artículo, seleccionar la caja de destino y confirmar el movimiento. Descubra nuestro [Organizador de cajas de mudanza](/features/moving-box-organizer).",
    sec3Area6Title: "Preguntas sobre paquetes de etiquetas y configuración",
    sec3Area6Body: "Haga preguntas sobre paquetes de etiquetas, hojas imprimibles de códigos QR/códigos de barras, nomenclatura de cajas, categorías de almacenamiento y consejos de configuración para su hogar, mudanza, oficina o trastero.",

    sec4Heading: "Ejemplos reales de soporte",
    sec4Ex1Title: "El código QR no se escanea",
    sec4Ex1Body: "Un usuario coloca una etiqueta en un contenedor de plástico curvo y la cámara del teléfono tiene dificultades para escanearla. El soporte puede sugerir mover la etiqueta a una superficie más plana, mejorar la iluminación, reducir los reflejos y sostener el teléfono firmemente.",
    sec4Ex2Title: "El PDF generado no se descarga",
    sec4Ex2Body: "Un usuario genera una hoja de códigos QR A4 pero no encuentra el archivo más tarde. El soporte puede guiar al usuario a Menú → Pedidos → Descargar y sugerirle que compruebe la conexión a Internet o el estado del pedido.",
    sec4Ex3Title: "Las fotos no se cargan",
    sec4Ex3Body: "Un usuario añade fotos a un artículo pero la carga no se completa. El soporte puede sugerirle que compruebe los permisos de la cámara y las fotos, el almacenamiento disponible, el tamaño de la imagen y que vuelva a intentarlo con menos fotos o más pequeñas.",
    sec4Ex4Title: "Multi-User Sharing no se sincroniza",
    sec4Ex4Body: "Una familia quiere compartir el mismo inventario en varios dispositivos, pero el segundo dispositivo no muestra las actualizaciones. El soporte puede sugerir comprobar el estado Premium, pulsar Actualizar/Sincronizar, introducir el MultiuserID con guiones y reiniciar la aplicación si es necesario.",
    sec4Ex5Title: "Mover artículos entre cajas",
    sec4Ex5Body: "Un usuario guardó una chaqueta de invierno en la caja de mudanza equivocada. El soporte puede explicarle cómo abrir la caja de origen, pulsar el icono de mover, elegir la caja de destino y confirmar el movimiento.",
    sec4Ex6Title: "Elegir etiquetas para un proyecto de almacenamiento",
    sec4Ex6Body: "Un propietario de una vivienda o un usuario de una pequeña oficina no está seguro de si utilizar PDF imprimibles de códigos QR/códigos de barras o paquetes de etiquetas físicas. El soporte puede explicarle la diferencia y ayudarle a elegir la opción adecuada.",

    sec5Heading: "¿Quién utiliza el soporte de QrSortable?",
    sec5Card1Title: "Usuarios primerizos",
    sec5Card1Body: "Obtenga ayuda para escanear su primera etiqueta, crear un registro de caja, añadir artículos y entender el funcionamiento básico del inventario sin registrarse. Consulte nuestra guía [Sin necesidad de cuenta](/features/no-account-needed).",
    sec5Card2Title: "Personas en proceso de mudanza",
    sec5Card2Body: "Solicite orientación sobre el etiquetado de cajas de mudanza, la organización de cajas mixtas, el uso del modo mudanza y la búsqueda de artículos después de la mudanza.",
    sec5Card3Title: "Propietarios e inquilinos",
    sec5Card3Body: "Reciba asistencia para organizar garajes, sótanos, altillos, armarios, trasteros y cajas de plástico.",
    sec5Card4Title: "Familias que comparten inventario",
    sec5Card4Body: "Haga preguntas sobre Premium Multi-User Sharing, introducción del MultiuserID, sincronización y acceso de dispositivos autorizados.",
    sec5Card5Title: "Empresas y oficinas",
    sec5Card5Body: "Obtenga ayuda para organizar material de oficina, archivos de documentos, muestras de productos, equipos y estanterías de almacenamiento.",
    sec5Card6Title: "Organizadores profesionales",
    sec5Card6Body: "Utilice el soporte para dudas prácticas sobre colocación de etiquetas, hojas imprimibles, flujos de códigos QR y estructura de inventario.",

    sec6Heading: "Soporte de QrSortable vs. Buscar en solitario",
    sec6Body: "Los artículos de ayuda y las preguntas frecuentes son útiles, pero algunas dudas de configuración son muy concretas. Un usuario puede necesitar ayuda con un teléfono específico, la colocación de las etiquetas, la descarga de PDF, la sincronización o la carga de fotos.\n\nEl soporte de QrSortable está diseñado para ayudar a los usuarios a entender el siguiente paso con claridad. Al contactar con el soporte, describa el problema, el paso exacto en el que ocurrió, los detalles de su dispositivo y adjunte capturas de pantalla si es posible.",
    sec6SearchTitle: "Buscar en solitario",
    sec6SearchPoints: [
      "Útil para preguntas generales",
      "Puede que no responda exactamente a su problema concreto",
      "Puede llevar más tiempo durante una mudanza o configuración",
      "No explica los flujos de trabajo específicos de QrSortable",
      "Puede resultar confuso para usuarios primerizos"
    ],
    sec6SupportTitle: "Equipo de soporte de QrSortable",
    sec6SupportPoints: [
      "Ayuda con preguntas específicas de QrSortable",
      "Le guía en problemas de escaneo, PDF, fotos, pedidos y sincronización",
      "Soporte para hogares, mudanzas, oficinas y almacenes",
      "Proporciona pasos prácticos de resolución",
      "Funciona mejor cuando los usuarios aportan detalles claros y capturas de pantalla"
    ],

    sec7Heading: "Mejores razones para contactar con soporte",
    sec7Body: "Contacte con el soporte de QrSortable para:",
    sec7Items: [
      "Problemas de escaneo de códigos QR", "Dudas sobre el escaneo de códigos de barras", "Guía para la colocación de etiquetas", "Etiquetas dañadas o de difícil escaneo",
      "Preguntas sobre la descarga de PDF A4 de códigos QR/barras", "Preguntas sobre pedidos e historial de descargas", "Dudas sobre paquetes de etiquetas físicas", "Problemas con la carga de fotos",
      "Preguntas sobre permisos de la aplicación", "Guía para la configuración de cajas", "Preguntas sobre la búsqueda de artículos", "Configuración de Multi-User Sharing",
      "Problemas de sincronización con MultiuserID", "Dudas sobre el modo mudanza", "Mover artículos entre cajas", "Consejos de organización de almacenamiento",
      "Configuración de inventario para pequeñas empresas", "Organización de archivos de oficina", "Resolución de problemas generales"
    ],

    sec8Heading: "Qué incluir en un correo electrónico de soporte",
    sec8Body: "Para ayudar al equipo a entender el problema más rápidamente, incluya:\n\n- Una breve descripción del problema\n- Qué estaba intentando hacer\n- El tipo de dispositivo, como Android o iPhone\n- La versión de la aplicación si la conoce\n- Una captura de pantalla si está disponible\n- El tipo de etiqueta, como etiqueta PDF impresa o paquete físico\n- El código de la caja si es relevante\n- El mensaje de error exacto que aparece\n- Si el problema ocurre siempre o solo a veces\n- Para el inventario compartido, si el plan Premium está activo y si el MultiuserID incluye los guiones",

    sec9Heading: "Soporte diseñado en torno a problemas reales de almacenamiento",
    sec9Body: "La organización del almacenamiento es un trabajo práctico. Las etiquetas se colocan en superficies difíciles, las cajas se empacan rápido, las fotos fallan al cargarse o el inventario compartido necesita sincronizarse.\n\nEl soporte de QrSortable se centra en situaciones reales como mudanzas, trasteros domésticos, archivos de oficina, códigos QR, PDF imprimibles e inventario compartido. El objetivo es ayudar a los usuarios a seguir organizando sin detenerse. Descubra también nuestro [Seguimiento de inventario seguro](/features/secure-inventory-tracking) para su total tranquilidad.",

    sec10Heading: "Compatible con todo el flujo de trabajo de QrSortable",
    sec10Body: "El soporte de QrSortable puede ayudar a los usuarios a comprender cómo encaja todo el flujo de trabajo de la app: generar o pedir etiquetas, escanear una etiqueta, crear un registro de caja, añadir nombres y comentarios, subir fotos, buscar inventario, mover objetos entre cajas y compartir el inventario si el Premium Multi-User Sharing está activado.",

    faqHeading: "Preguntas Frecuentes (FAQ)",
    faqItems: [
      {
        q: "¿Cómo puedo contactar con el equipo de soporte de QrSortable?",
        a: "Puede contactar con el soporte de QrSortable enviando un correo electrónico a qrsortable@gmail.com. Incluya una breve descripción de su duda, capturas de pantalla si dispone de ellas y el paso exacto en el que necesita ayuda."
      },
      {
        q: "¿Qué debo incluir en un correo electrónico de soporte?",
        a: "Incluya qué estaba intentando hacer, qué ocurrió, su tipo de dispositivo, capturas de pantalla si dispone de ellas, el código de etiqueta o caja si es relevante y cualquier mensaje de error."
      },
      {
        q: "¿Puede el soporte ayudarme si mi código QR no se escanea?",
        a: "Sí. El soporte puede guiarle a través de comprobaciones como limpiar la lente de la cámara, usar mejor iluminación, reducir los reflejos, sostener el teléfono con firmeza y confirmar que la etiqueta es de QrSortable."
      },
      {
        q: "¿Puede el soporte ayudar con las descargas de PDF generados?",
        a: "Sí. Si no puede descargar un PDF A4 generado de código QR o código de barras, el soporte le guiará en los pasos. También puede probar en Menú → Pedidos → Descargar."
      },
      {
        q: "¿Puede el soporte ayudar con problemas al subir fotos?",
        a: "Sí. El soporte puede sugerirle comprobar los permisos de cámara y fotos, el almacenamiento disponible y el tamaño de la imagen si las fotos de los artículos no se cargan correctamente."
      },
      {
        q: "¿Puede el soporte ayudar con Multi-User Sharing?",
        a: "Sí. El soporte puede ayudarle con dudas sobre el servicio Premium Multi-User Sharing, incluyendo la sincronización, la introducción del MultiuserID y la resolución de incidencias de carga de datos."
      },
      {
        q: "¿Puede el soporte ayudarme a mover un artículo entre cajas?",
        a: "Sí. El modo mudanza de QrSortable permite abrir la caja de origen, pulsar el icono de mover en el artículo, seleccionar la caja de destino y confirmar."
      },
      {
        q: "¿Puede el soporte ayudarme a elegir la etiqueta adecuada?",
        a: "Sí. El soporte puede explicarle la diferencia entre PDF imprimibles A4 y paquetes de etiquetas físicas para que elija la opción idónea para su proyecto."
      },
      {
        q: "¿Necesito una cuenta para contactar con el soporte?",
        a: "No. Puede enviar un correo electrónico directamente. QrSortable se puede usar sin iniciar sesión para el inventario regular, y Premium solo es necesario para el acceso compartido."
      },
      {
        q: "¿Pueden las pequeñas empresas contactar con el soporte de QrSortable?",
        a: "Sí. Las empresas pueden contactar con soporte para dudas sobre etiquetas de almacenamiento, archivos de oficina, inventario mediante códigos QR, PDF imprimibles y flujos compartidos."
      },
      {
        q: "¿Qué debo hacer antes de contactar con el soporte sobre la sincronización?",
        a: "Compruebe si el plan Premium está activo, pulse Actualizar/Sincronizar, confirme que el MultiuserID está introducido correctamente con los guiones y reinicie la app."
      },
      {
        q: "¿Puede el soporte darme consejos de organización?",
        a: "Sí. El soporte puede ofrecer orientación práctica sobre nomenclatura de cajas, categorías, comentarios de artículos, colocación de etiquetas y organización de garajes, armarios, sótanos y oficinas."
      }
    ],

    finalCtaHeading: "¿Necesita ayuda con QrSortable?",
    finalCtaBody: "Tanto si está configurando su primera caja, imprimiendo etiquetas, escaneando contenedores, descargando PDF generados, cargando fotos o sincronizando el inventario, el equipo de soporte de QrSortable está aquí para guiarle."
  }
};
