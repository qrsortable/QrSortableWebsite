export interface SharedInventoryTranslations {
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
  ctaExploreQR: string;
  backToHome: string;
  
  sec1Title: string;
  sec1P1: string;
  sec1P2: string;
  sec1P3: string;

  sec2Title: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;

  sec3Title: string;
  why1Title: string;
  why1Desc: string;
  why2Title: string;
  why2Desc: string;
  why3Title: string;
  why3Desc: string;
  why4Title: string;
  why4Desc: string;
  why5Title: string;
  why5Desc: string;

  sec4Title: string;
  ex1Title: string;
  ex1Text: string;
  ex2Title: string;
  ex2Text: string;
  ex3Title: string;
  ex3Text: string;
  ex4Title: string;
  ex4Text: string;
  ex5Title: string;
  ex5Text: string;

  sec5Title: string;
  who1Title: string;
  who1Desc: string;
  who2Title: string;
  who2Desc: string;
  who3Title: string;
  who3Desc: string;
  who4Title: string;
  who4Desc: string;
  who5Title: string;
  who5Desc: string;

  sec6Title: string;
  sec6P1: string;
  sec6P2: string;
  tradLabelsTitle: string;
  tradBullets: string[];
  qrSortableTitle: string;
  qrBullets: string[];

  sec7Title: string;
  sec7P1: string;
  useCases: string[];

  sec8Title: string;
  sec8P1: string;
  sec8P2: string;

  sec9Title: string;
  sec9P1: string;
  sec9P2: string;

  sec10Title: string;
  tips: string[];

  faqTitle: string;
  faqItems: { q: string; a: string }[];

  bottomTitle: string;
  bottomDesc: string;
  bottomSubtitle: string;
  internalLinkText?: string;
}

export const SHARED_INVENTORY_TRANSLATIONS: Record<string, SharedInventoryTranslations> = {
  EN: {
    seoTitle: "Shared Inventory Management App | Share Box Inventory Across Devices",
    seoDesc: "Share your QrSortable inventory with trusted family members or team members. Use MultiuserID sync to view and update shared boxes, items, photos, locations, and storage details across devices.",
    breadcrumbHome: "Home",
    breadcrumbFeatures: "Features",
    breadcrumbCurrent: "Shared Inventory Management",
    badge: "Premium Sharing",
    heading: "Shared Inventory Management for Families, Teams, and Shared Storage",
    subheading: "Keep everyone connected to the same box inventory. With QrSortable Premium Multi-User Sharing, trusted users can join the same inventory with a MultiuserID, sync across devices, and view or update shared boxes and items.",
    supportingText: "Storage is easier when everyone can find the same information. QrSortable helps families, roommates, movers, and small teams share one organized inventory instead of depending on one person’s phone or memory.",
    ctaGetLabels: "Get Smart Labels Now",
    ctaExploreQR: "Digitally Generate Code",
    backToHome: "Back to Home",
    
    sec1Title: "What Is Shared Inventory Management?",
    sec1P1: "Shared Inventory Management is a way for more than one trusted user to access the same digital inventory. In QrSortable, this is handled through the Premium Multi-User Sharing feature.",
    sec1P2: "Instead of keeping box details on only one device, QrSortable lets a primary device sync inventory data to the backend. Other devices can join the same shared inventory by entering the same MultiuserID. After syncing, connected devices can view and update the shared boxes and items.",
    sec1P3: "This is useful for homes, families, shared storage spaces, moving boxes, small offices, hobby collections, and storage rooms where more than one person needs access to the inventory.",

    sec2Title: "How Shared Inventory Management Works in QrSortable",
    step1Title: "Enable Multi-User Sharing",
    step1Desc: "Open QrSortable and go to Menu → Multiuser. If prompted, complete the premium subscription setup by entering the required details and finishing the payment process.",
    step2Title: "Create or Sync Inventory Data",
    step2Desc: "Scan and save at least one box so there is inventory data to share. Then use the Refresh/Sync button to upload the inventory from the primary device.",
    step3Title: "Join from Another Device",
    step3Desc: "Install QrSortable on another phone or tablet. Open Menu → Multiuser and enter the same MultiuserID. Make sure the MultiuserID is typed correctly, including hyphens.",
    step4Title: "Confirm and Start Sharing",
    step4Desc: "Confirm the sync prompt on the second device. After syncing, the connected device can access the shared inventory and help keep boxes, items, locations, remarks, and photos updated.",

    sec3Title: "Why Use Shared Inventory Management?",
    why1Title: "Everyone Can Find Stored Items",
    why1Desc: "In many homes, only one person remembers where things are stored. Shared Inventory Management helps trusted family members or roommates search the same inventory and find the right box without asking someone else every time.",
    why2Title: "Useful During Moving and Unpacking",
    why2Desc: "Moving often involves more than one person packing, carrying, storing, and unpacking boxes. With shared inventory access, users can check box contents, update items, and keep the moving inventory organized across devices.",
    why3Title: "Better for Shared Storage Spaces",
    why3Desc: "Garages, basements, attics, closets, and storage rooms are often used by more than one person. QrSortable helps make shared storage easier by keeping box details and item records available to trusted users.",
    why4Title: "Helpful for Small Teams",
    why4Desc: "Small teams can use QrSortable to manage shared office supplies, archived documents, equipment, product samples, spare parts, or storage boxes. When the inventory is shared, more than one team member can keep the records updated.",
    why5Title: "Reduce Duplicate Searching",
    why5Desc: "When users do not know where something is stored, they may open multiple boxes or ask the same question repeatedly. A shared inventory gives trusted users one place to check before searching physically.",

    sec4Title: "Real-Life Examples of Shared Inventory Management",
    ex1Title: "Family Storage Room",
    ex1Text: "A family stores seasonal clothes, holiday decorations, books, and kitchen items in a storage room. One person creates the QrSortable inventory and shares it using the MultiuserID. Other trusted family members can sync the same inventory and check which box contains the item they need.",
    ex2Title: "Moving House Together",
    ex2Text: "During a move, one person may pack kitchen items while another packs bedroom or storage items. With Shared Inventory Management, both users can access the same box records and keep the inventory updated while packing and unpacking.",
    ex3Title: "Shared Garage Organization",
    ex3Text: "A garage may contain tools, spare parts, seasonal items, hobby supplies, and storage bins. QrSortable helps trusted users view the same inventory so everyone can find items without opening every box.",
    ex4Title: "Roommates Sharing Storage",
    ex4Text: "Roommates may share a closet, basement, or storage area. With QrSortable, shared boxes can be documented with item names, locations, remarks, and photos so the storage space stays easier to manage.",
    ex5Title: "Small Office Inventory",
    ex5Text: "A small office can use QrSortable to track archived files, office supplies, product samples, and spare equipment. Multi-User Sharing helps more than one trusted person access and update the same inventory.",

    sec5Title: "Who Can Use This Feature?",
    who1Title: "Families",
    who1Desc: "Share storage information so family members can find seasonal items, decorations, tools, clothes, books, and household boxes.",
    who2Title: "Couples and Roommates",
    who2Desc: "Keep shared closets, garages, basements, attics, and storage rooms organized with one inventory available across devices.",
    who3Title: "People Moving House",
    who3Desc: "Let more than one person check and update the moving box inventory during packing, transport, temporary storage, and unpacking.",
    who4Title: "Small Business Users",
    who4Desc: "Manage shared office storage, documents, product samples, spare equipment, and supplies with a digital inventory that trusted users can sync.",
    who5Title: "Collectors and Hobby Users",
    who5Desc: "Share organized box records for books, craft supplies, collectibles, tools, accessories, and hobby materials.",

    sec6Title: "Shared Inventory Management vs. One-Person Inventory",
    sec6P1: "A one-person inventory works when only one person needs access. But storage often becomes a shared responsibility. Families, roommates, movers, and small teams may all need to know what is inside a box and where it is stored.",
    sec6P2: "QrSortable’s Shared Inventory Management helps trusted users access the same digital inventory from different devices. This makes it easier to keep box records useful when more than one person is adding, moving, searching, or checking items.",
    tradLabelsTitle: "One-Person Inventory",
    tradBullets: [
      "Stored on one device",
      "Only one person can easily check the records",
      "Others may need to ask where items are",
      "Harder during shared moving or packing",
      "Less practical for shared storage spaces"
    ],
    qrSortableTitle: "QrSortable Shared Inventory Management",
    qrBullets: [
      "Supports access from multiple devices",
      "Uses MultiuserID to join the shared inventory",
      "Helps trusted users view and update box records",
      "Useful for families, roommates, moving, and small teams",
      "Keeps shared storage information easier to access",
      "Works with QrSortable boxes, items, remarks, photos, and locations"
    ],

    sec7Title: "Best Uses for Shared Inventory Management",
    sec7P1: "Use QrSortable’s Shared Inventory Management for:",
    useCases: [
      "Family storage organization",
      "Shared household inventory",
      "Moving boxes",
      "Temporary storage during moving",
      "Garage storage",
      "Basement storage",
      "Attic storage",
      "Closet organization",
      "Storage rooms",
      "Plastic storage bins",
      "Seasonal clothing",
      "Holiday decorations",
      "Books and documents",
      "Tools and spare parts",
      "Hobby supplies",
      "Office supplies",
      "Small business storage",
      "Shared storage units",
      "Roommate storage spaces",
      "Boxes that more than one person needs to access"
    ],

    sec8Title: "Designed for Real Shared Storage Problems",
    sec8P1: "Shared storage can become confusing when only one person knows where everything is. Boxes get moved, items are added, and storage areas change over time.",
    sec8P2: "QrSortable’s Shared Inventory Management helps trusted users stay connected to the same inventory. With Multi-User Sharing, users can sync boxes, item names, remarks, photos, locations, and categories across devices.",

    sec9Title: "Privacy and Trust Matter",
    sec9P1: "Shared Inventory Management should only be used with people you trust. QrSortable uses a MultiuserID to connect devices to the shared inventory. Anyone with the correct MultiuserID may be able to sync the inventory, so users should not share it publicly or with people who should not access the storage records.",
    sec9P2: "For best results, keep the MultiuserID safe, enter it carefully with hyphens, and use Refresh/Sync when updates need to appear on connected devices.",

    sec10Title: "Tips for Better Shared Inventory Sync",
    tips: [
      "Scan and save at least one box before syncing.",
      "Use clear box names such as “Garage—Tools” or “Bedroom—Winter”.",
      "Add item photos for important or valuable items.",
      "Use remarks for details such as fragile, serial number, keep dry, or item condition.",
      "Enter the MultiuserID exactly, including hyphens.",
      "Tap Refresh/Sync after important updates.",
      "Restart QrSortable and sync again if updates do not appear.",
      "Share the MultiuserID only with trusted people."
    ],

    faqTitle: "Frequently Asked Questions",
    faqItems: [
      {
        q: "What is Shared Inventory Management in QrSortable?",
        a: "Shared Inventory Management is a premium QrSortable feature that lets multiple trusted devices access the same inventory. Users can join the shared inventory with a MultiuserID and sync box and item data across devices."
      },
      {
        q: "Can multiple people use the same QrSortable inventory?",
        a: "Yes. With Premium Multi-User Sharing, multiple devices can join the same inventory using the same MultiuserID. After syncing, connected devices can view and update the shared inventory."
      },
      {
        q: "How do I enable Multi-User Sharing?",
        a: "Open QrSortable and go to Menu → Multiuser. If prompted, complete the premium subscription setup. Then scan and save at least one box and tap Refresh/Sync to upload the inventory."
      },
      {
        q: "How does another device join the shared inventory?",
        a: "Install QrSortable on the second device, open Menu → Multiuser, enter the MultiuserID exactly as provided, including hyphens, and confirm the sync prompt."
      },
      {
        q: "Can shared users update boxes and items?",
        a: "Yes. After syncing, connected devices can view and update the shared inventory. This helps trusted users keep box contents, locations, remarks, and item information current."
      },
      {
        q: "Is Shared Inventory Management useful for families?",
        a: "Yes. Families can use Shared Inventory Management so more than one person can find storage boxes, check item details, and update inventory information."
      },
      {
        q: "Is Shared Inventory Management useful when moving house?",
        a: "Yes. Moving often involves several people packing and unpacking. A shared moving box inventory helps users check box contents and update records from more than one device."
      },
      {
        q: "Can I use this feature for small business storage?",
        a: "Yes. Small business users can share inventory for office supplies, archived documents, product samples, spare parts, and storage boxes with trusted team members."
      },
      {
        q: "What should I do if shared inventory does not sync?",
        a: "Check that the premium subscription is active, tap Refresh/Sync on the primary device, confirm that the MultiuserID was entered correctly with hyphens, and restart QrSortable on both devices if needed."
      },
      {
        q: "Is it safe to share my MultiuserID?",
        a: "Only share your MultiuserID with people you trust. Anyone with the correct MultiuserID may be able to sync your inventory, so it should not be shared publicly."
      },
      {
        q: "Do I need an account to use QrSortable?",
        a: "QrSortable can be used without login for regular inventory use. Premium is required only for Multi-User Sharing."
      },
      {
        q: "Can Shared Inventory Management work with item photos?",
        a: "Yes. QrSortable inventory records can include item names, remarks, and photos. Shared users can access the synced inventory information from connected devices."
      }
    ],

    bottomTitle: "Share Your Storage Inventory with Trusted People",
    bottomDesc: "QrSortable’s Shared Inventory Management helps families, roommates, movers, and small teams stay connected to the same box inventory. Sync your inventory, share it with trusted users through a MultiuserID, and keep storage information easier to find across devices.",
    bottomSubtitle: "Organize together with a shared QR code inventory system.",
    internalLinkText: "Looking for more organization tips? Try our [shared moving box inventory](/features/moving-box-organizer) organizer, explore [storage inventory sharing](/features/qr-code-inventory-preview), or check out our guide on [QR code inventory sharing](/features/qr-code-inventory-preview) to keep your home or workspace simple."
  },
  DE: {
    seoTitle: "Gemeinsame Inventarverwaltung App | Karton-Inventar teilen",
    seoDesc: "Teilen Sie Ihr QrSortable-Inventar mit vertrauenswürdigen Familienmitgliedern oder Teammitgliedern. Verwenden Sie den MultiuserID-Sync, um Kartons, Gegenstände, Fotos und Standorte auf allen Geräten zu synchronisieren.",
    breadcrumbHome: "Startseite",
    breadcrumbFeatures: "Funktionen",
    breadcrumbCurrent: "Gemeinsame Inventarverwaltung",
    badge: "Premium-Teilen",
    heading: "Gemeinsame Inventarverwaltung für Familien, Teams und geteilte Lagerplätze",
    subheading: "Halten Sie alle mit demselben Karton-Inventar in Verbindung. Mit dem QrSortable Premium Multi-User Sharing können vertrauenswürdige Benutzer mit einer MultiuserID demselben Inventar beitreten, Geräte synchronisieren und geteilte Kartons und Artikel anzeigen oder aktualisieren.",
    supportingText: "Lagerung ist einfacher, wenn jeder die gleichen Informationen finden kann. QrSortable hilft Familien, Mitbewohnern, Umzugshelfern und kleinen Teams, ein organisiertes Inventar zu teilen, anstatt sich auf das Telefon oder das Gedächtnis einer einzelnen Person zu verlassen.",
    ctaGetLabels: "Smarte Etiketten jetzt sichern",
    ctaExploreQR: "Code digital generieren",
    backToHome: "Zurück zur Startseite",

    sec1Title: "Was ist gemeinsame Inventarverwaltung?",
    sec1P1: "Die gemeinsame Inventarverwaltung ist eine Möglichkeit für mehrere vertrauenswürdige Benutzer, auf dasselbe digitale Inventar zuzugreifen. In QrSortable wird dies über die Premium-Multi-User-Sharing-Funktion abgewickelt.",
    sec1P2: "Anstatt Kartondetails nur auf einem Gerät zu speichern, ermöglicht QrSortable einem Hauptgerät, Inventardaten mit dem Backend zu synchronisieren. Andere Geräte können demselben gemeinsamen Inventar beitreten, indem sie dieselbe MultiuserID eingeben. Nach der Synchronisierung können verbundene Geräte die gemeinsam genutzten Kartons und Artikel anzeigen und aktualisieren.",
    sec1P3: "Dies ist nützlich für Haushalte, Familien, gemeinsam genutzte Lagerräume, Umzugskartons, kleine Büros, Hobbysammlungen und Lagerräume, in denen mehr als eine Person Zugriff auf das Inventar benötigt.",

    sec2Title: "So funktioniert die gemeinsame Inventarverwaltung in QrSortable",
    step1Title: "Multi-User Sharing aktivieren",
    step1Desc: "Öffnen Sie QrSortable und gehen Sie zu Menü → Multiuser. Wenn Sie dazu aufgefordert werden, schließen Sie die Einrichtung des Premium-Abonnements ab, indem Sie die erforderlichen Details eingeben und den Zahlungsvorgang abschließen.",
    step2Title: "Inventardaten erstellen oder synchronisieren",
    step2Desc: "Scannen und speichern Sie mindestens einen Karton, damit Inventardaten zum Teilen vorhanden sind. Verwenden Sie dann die Schaltfläche Aktualisieren/Synchronisieren, um das Inventar vom primären Gerät hochzuladen.",
    step3Title: "Von einem anderen Gerät beitreten",
    step3Desc: "Installieren Sie QrSortable auf einem anderen Telefon oder Tablet. Öffnen Sie Menü → Multiuser und geben Sie dieselbe MultiuserID ein. Stellen Sie sicher, dass die MultiuserID korrekt eingegeben wird, einschließlich der Bindestriche.",
    step4Title: "Bestätigen und Teilen starten",
    step4Desc: "Bestätigen Sie die Synchronisierungsaufforderung auf dem zweiten Gerät. Nach der Synchronisierung kann das verbundene Gerät auf das gemeinsame Inventar zugreifen und dabei helfen, Kartons, Artikel, Standorte, Bemerkungen und Fotos auf dem neuesten Stand zu halten.",

    sec3Title: "Warum gemeinsame Inventarverwaltung nutzen?",
    why1Title: "Jeder kann gelagerte Gegenstände finden",
    why1Desc: "In vielen Haushalten erinnert sich nur eine Person daran, wo Dinge gelagert sind. Die gemeinsame Inventarverwaltung hilft vertrauenswürdigen Familienmitgliedern oder Mitbewohnern, dasselbe Inventar zu durchsuchen und den richtigen Karton zu finden, ohne jedes Mal jemand anderen fragen zu müssen.",
    why2Title: "Nützlich beim Umzug und Auspacken",
    why2Desc: "Ein Umzug erfordert oft, dass mehr als eine Person Kartons packt, trägt, lagert und auspackt. Mit dem gemeinsamen Inventarzugriff können Benutzer den Kartoninhalt überprüfen, Artikel aktualisieren und das Umzugsinventar über verschiedene Geräte hinweg organisiert halten.",
    why3Title: "Besser für gemeinsam genutzte Lagerräume",
    why3Desc: "Garagen, Keller, Dachböden, Schränke und Lagerräume werden oft von mehr als einer Person genutzt. QrSortable erleichtert die gemeinsame Lagerung, indem es Kartondetails und Artikelaufzeichnungen für vertrauenswürdige Benutzer bereitstellt.",
    why4Title: "Hilfreich für kleine Teams",
    why4Desc: "Kleine Teams können QrSortable verwenden, um gemeinsamen Bürobedarf, archivierte Dokumente, Ausrüstung, Produktmuster, Ersatzteile oder Lagerkartons zu verwalten. Wenn das Inventar geteilt wird, können mehrere Teammitglieder die Aufzeichnungen auf dem neuesten Stand halten.",
    why5Title: "Doppelte Suche reduzieren",
    why5Desc: "Wenn Benutzer nicht wissen, wo etwas gelagert ist, öffnen sie möglicherweise mehrere Kartons oder stellen wiederholt dieselbe Frage. Ein gemeinsames Inventar bietet vertrauenswürdigen Benutzern einen zentralen Ort zum Überprüfen, bevor sie physisch suchen.",

    sec4Title: "Praxisbeispiele für die gemeinsame Inventarverwaltung",
    ex1Title: "Familienlagerraum",
    ex1Text: "Eine Familie lagert saisonale Kleidung, Feiertagsdekorationen, Bücher und Küchenutensilien in einem Lagerraum. Eine Person erstellt das QrSortable-Inventar und teilt es über die MultiuserID. Andere vertrauenswürdige Familienmitglieder können dasselbe Inventar synchronisieren und prüfen, welcher Karton den gesuchten Artikel enthält.",
    ex2Title: "Zusammen umziehen",
    ex2Text: "Während eines Umzugs packt eine Person vielleicht Küchenutensilien ein, während eine andere Schlafzimmer- oder Lagerartikel einpackt. Mit der gemeinsamen Inventarverwaltung können beide Benutzer auf dieselben Kartonaufzeichnungen zugreifen und das Inventar beim Packen und Auspacken auf dem neuesten Stand halten.",
    ex3Title: "Gemeinsame Garagenorganisation",
    ex3Text: "Eine Garage kann Werkzeuge, Ersatzteile, saisonale Artikel, Hobbybedarf und Lagerboxen enthalten. QrSortable hilft vertrauenswürdigen Benutzern, dasselbe Inventar anzuzeigen, sodass jeder Gegenstände finden kann, ohne jeden Karton öffnen zu müssen.",
    ex4Title: "Mitbewohner teilen sich Lagerraum",
    ex4Text: "Mitbewohner teilen sich möglicherweise einen Schrank, Keller oder Lagerbereich. Mit QrSortable können gemeinsame Kartons mit Artikelnamen, Standorten, Bemerkungen und Fotos dokumentiert werden, sodass der Lagerraum einfacher zu verwalten bleibt.",
    ex5Title: "Kleines Büroinventar",
    ex5Text: "Ein kleines Büro kann QrSortable verwenden, um archivierte Dateien, Bürobedarf, Produktmuster und Ersatzgeräte zu verfolgen. Das Multi-User-Sharing hilft mehreren vertrauenswürdigen Personen, auf dasselbe Inventar zuzugreifen und es zu aktualisieren.",

    sec5Title: "Wer kann diese Funktion nutzen?",
    who1Title: "Familien",
    who1Desc: "Teilen Sie Lagerinformationen, damit Familienmitglieder saisonale Artikel, Dekorationen, Werkzeuge, Kleidung, Bücher und Haushaltskartons leicht finden können.",
    who2Title: "Paare und Mitbewohner",
    who2Desc: "Halten Sie gemeinsame Schränke, Garagen, Keller, Dachböden und Lagerräume mit einem auf allen Geräten verfügbaren Inventar organisiert.",
    who3Title: "Menschen beim Umzug",
    who3Desc: "Lassen Sie mehr als eine Person das Umzugskarton-Inventar während des Packens, Transports, der temporären Lagerung und des Auspackens überprüfen und aktualisieren.",
    who4Title: "Kleine Unternehmen",
    who4Desc: "Verwalten Sie gemeinsame Bürolager, Dokumente, Produktmuster, Ersatzgeräte und Zubehör mit einem digitalen Inventar, das vertrauenswürdige Benutzer synchronisieren können.",
    who5Title: "Sammler und Hobby-User",
    who5Desc: "Teilen Sie organisierte Kartonaufzeichnungen für Bücher, Bastelbedarf, Sammlerstücke, Werkzeuge, Zubehör und Hobbymaterialien.",

    sec6Title: "Gemeinsame Inventarverwaltung vs. Einzelbenutzer-Inventar",
    sec6P1: "Ein Einzelbenutzer-Inventar funktioniert, wenn nur eine Person Zugriff benötigt. Aber die Lagerung wird oft zu einer gemeinsamen Verantwortung. Familien, Mitbewohner, Umzugshelfer und kleine Teams müssen möglicherweise alle wissen, was sich in einem Karton befindet und wo er gelagert ist.",
    sec6P2: "Die gemeinsame Inventarverwaltung von QrSortable hilft vertrauenswürdigen Benutzern, von verschiedenen Geräten aus auf dasselbe digitale Inventar zuzugreifen. Dies macht es einfacher, Kartonaufzeichnungen nützlich zu halten, wenn mehr als eine Person Artikel hinzufügt, verschiebt, sucht oder überprüft.",
    tradLabelsTitle: "Einzelbenutzer-Inventar",
    tradBullets: [
      "Auf einem Gerät gespeichert",
      "Nur eine Person kann die Aufzeichnungen leicht überprüfen",
      "Andere müssen fragen, wo sich Gegenstände befinden",
      "Schwieriger beim gemeinsamen Umzug oder Packen",
      "Weniger praktisch für gemeinsam genutzte Lagerräume"
    ],
    qrSortableTitle: "QrSortable Gemeinsame Inventarverwaltung",
    qrBullets: [
      "Unterstützt den Zugriff von mehreren Geräten",
      "Verwendet eine MultiuserID, um dem gemeinsamen Inventar beizutreten",
      "Hilft vertrauenswürdigen Benutzern, Kartonaufzeichnungen anzuzeigen und zu aktualisieren",
      "Nützlich für Familien, Mitbewohner, Umzugshelfer und kleine Teams",
      "Erleichtert den Zugriff auf Informationen zur gemeinsamen Lagerung",
      "Funktioniert mit QrSortable-Kartons, Artikeln, Bemerkungen, Fotos und Standorten"
    ],

    sec7Title: "Beste Verwendungszwecke für die gemeinsame Inventarverwaltung",
    sec7P1: "Nutzen Sie die gemeinsame Inventarverwaltung von QrSortable für:",
    useCases: [
      "Familienlagerorganisation",
      "Gemeinsames Haushaltsinventar",
      "Umzugskartons",
      "Temporäre Lagerung beim Umzug",
      "Garagenlagerung",
      "Kellerlagerung",
      "Dachbodenlagerung",
      "Schrankorganisation",
      "Lagerräume",
      "Kunststoff-Lagerboxen",
      "Saisonale Kleidung",
      "Feiertagsdekorationen",
      "Bücher und Dokumente",
      "Werkzeuge und Ersatzteile",
      "Hobbybedarf",
      "Bürobedarf",
      "Lagerung in kleinen Unternehmen",
      "Gemeinsame Lagereinheiten",
      "Mitbewohner-Lagerräume",
      "Kartons, auf die mehr als eine Person zugreifen muss"
    ],

    sec8Title: "Entwickelt für echte Probleme bei der gemeinsamen Lagerung",
    sec8P1: "Die gemeinsame Lagerung kann unübersichtlich werden, wenn nur eine Person weiß, wo sich alles befindet. Kartons werden verschoben, Artikel werden hinzugefügt und Lagerbereiche ändern sich im Laufe der Zeit.",
    sec8P2: "Die gemeinsame Inventarverwaltung von QrSortable hilft vertrauenswürdigen Benutzern, mit demselben Inventar in Verbindung zu bleiben. Mit dem Multi-User-Sharing können Benutzer Kartons, Artikelnamen, Bemerkungen, Fotos, Standorte und Kategorien auf allen Geräten synchronisieren.",

    sec9Title: "Datenschutz und Vertrauen sind wichtig",
    sec9P1: "Die gemeinsame Inventarverwaltung sollte nur mit Personen verwendet werden, denen Sie vertrauen. QrSortable verwendet eine MultiuserID, um Geräte mit dem gemeinsamen Inventar zu verbinden. Jeder mit der korrekten MultiuserID kann das Inventar synchronisieren. Daher sollten Benutzer diese nicht öffentlich teilen.",
    sec9P2: "Halten Sie die MultiuserID für beste Ergebnisse sicher, geben Sie sie sorgfältig mit Bindestrichen ein und verwenden Sie Aktualisieren/Synchronisieren, wenn Updates auf verbundenen Geräten erscheinen sollen.",

    sec10Title: "Tipps für eine bessere Synchronisierung des gemeinsamen Inventars",
    tips: [
      "Scannen und speichern Sie mindestens einen Karton vor dem Synchronisieren.",
      "Verwenden Sie klare Kartonnamen wie „Garage—Werkzeuge“ oder „Schlafzimmer—Winter“.",
      "Fügen Sie Artikelfotos für wichtige oder wertvolle Gegenstände hinzu.",
      "Verwenden Sie Bemerkungen für Details wie zerbrechlich, Seriennummer, trocken lagern oder Zustand.",
      "Geben Sie die MultiuserID genau ein, einschließlich der Bindestriche.",
      "Tippen Sie nach wichtigen Updates auf Aktualisieren/Synchronisieren.",
      "Starten Sie QrSortable neu und synchronisieren Sie erneut, wenn Updates nicht angezeigt werden.",
      "Teilen Sie die MultiuserID nur mit vertrauenswürdigen Personen."
    ],

    faqTitle: "Häufig gestellte Fragen (FAQ)",
    faqItems: [
      {
        q: "Was ist die gemeinsame Inventarverwaltung in QrSortable?",
        a: "Die gemeinsame Inventarverwaltung ist eine Premium-Funktion von QrSortable, mit der mehrere vertrauenswürdige Geräte auf dasselbe Inventar zugreifen können. Benutzer können dem gemeinsamen Inventar mit einer MultiuserID beitreten und Karton- und Artikeldaten auf allen Geräten synchronisieren."
      },
      {
        q: "Können mehrere Personen dasselbe QrSortable-Inventar verwenden?",
        a: "Ja. Mit dem Premium Multi-User Sharing können mehrere Geräte über dieselbe MultiuserID demselben Inventar beitreten. Nach der Synchronisierung können verbundene Geräte das gemeinsame Inventar anzeigen und aktualisieren."
      },
      {
        q: "Wie aktiviere ich das Multi-User-Sharing?",
        a: "Öffnen Sie QrSortable und gehen Sie zu Menü → Multiuser. Schließen Sie bei Aufforderung die Einrichtung des Premium-Abonnements ab. Scannen und speichern Sie dann mindestens einen Karton und tippen Sie auf Aktualisieren/Synchronisieren, um das Inventar hochzuladen."
      },
      {
        q: "Wie tritt ein anderes Gerät dem gemeinsamen Inventar bei?",
        a: "Installieren Sie QrSortable auf dem zweiten Gerät, öffnen Sie Menü → Multiuser, geben Sie die MultiuserID genau wie angegeben ein (einschließlich Bindestrichen) und bestätigen Sie die Synchronisierungsaufforderung."
      },
      {
        q: "Können gemeinsame Benutzer Kartons und Artikel aktualisieren?",
        a: "Ja. Nach der Synchronisierung können verbundene Geräte das gemeinsame Inventar anzeigen und aktualisieren. Dies hilft vertrauenswürdigen Benutzern, Kartoninhalte, Standorte, Bemerkungen und Artikelinformationen aktuell zu halten."
      },
      {
        q: "Ist die gemeinsame Inventarverwaltung für Familien nützlich?",
        a: "Ja. Familien können die gemeinsame Inventarverwaltung nutzen, damit mehr als eine Person Lagerkartons finden, Artikeldetails überprüfen und Inventarinformationen aktualisieren kann."
      },
      {
        q: "Ist die gemeinsame Inventarverwaltung beim Umzug nützlich?",
        a: "Ja. Ein Umzug erfordert oft, dass mehrere Personen packen und auspacken. Ein gemeinsames Umzugskarton-Inventar hilft Benutzern, den Kartoninhalt zu überprüfen und Aufzeichnungen von mehr als einem Gerät aus zu aktualisieren."
      },
      {
        q: "Kann ich diese Funktion für die Lagerung in kleinen Unternehmen nutzen?",
        a: "Ja. Kleinunternehmer können das Inventar für Bürobedarf, archivierte Dokumente, Produktmuster, Ersatzteile und Lagerkartons mit vertrauenswürdigen Teammitgliedern teilen."
      },
      {
        q: "Was soll ich tun, wenn das gemeinsame Inventar nicht synchronisiert wird?",
        a: "Überprüfen Sie, ob das Premium-Abonnement aktiv ist, tippen Sie auf dem Hauptgerät auf Aktualisieren/Synchronisieren, stellen Sie sicher, dass die MultiuserID korrekt mit Bindestrichen eingegeben wurde, und starten Sie QrSortable bei Bedarf auf beiden Geräten neu."
      },
      {
        q: "Ist es sicher, meine MultiuserID zu teilen?",
        a: "Teilen Sie Ihre MultiuserID nur mit Personen, denen Sie vertrauen. Jeder mit der korrekten MultiuserID kann Ihr Inventar synchronisieren, daher sollte sie nicht öffentlich geteilt werden."
      },
      {
        q: "Benötige ich ein Konto, um QrSortable zu nutzen?",
        a: "QrSortable kann für die normale Inventarnutzung ohne Anmeldung verwendet werden. Premium wird nur für das Multi-User Sharing benötigt."
      },
      {
        q: "Funktioniert die gemeinsame Inventarverwaltung mit Artikelfotos?",
        a: "Ja. QrSortable-Inventaraufzeichnungen können Artikelnamen, Bemerkungen und Fotos enthalten. Gemeinsame Benutzer können von verbundenen Geräten aus auf die synchronisierten Inventarinformationen zugreifen."
      }
    ],

    bottomTitle: "Teilen Sie Ihr Lagerinventar mit vertrauenswürdigen Personen",
    bottomDesc: "Die gemeinsame Inventarverwaltung von QrSortable hilft Familien, Mitbewohnern, Umzugshelfern und kleinen Teams, mit demselben Karton-Inventar in Verbindung zu bleiben. Synchronisieren Sie Ihr Inventar, teilen Sie es über eine MultiuserID und machen Sie Lagerinformationen auf allen Geräten leichter auffindbar.",
    bottomSubtitle: "Organisieren Sie gemeinsam mit einem geteilten QR-Code-Inventarsystem.",
    internalLinkText: "Suchen Sie nach weiteren Organisationstipps? Probieren Sie unseren Organizer für [geteilte Umzugskartons](/features/moving-box-organizer), entdecken Sie die [Freigabe von Lagerinventaren](/features/qr-code-inventory-preview) oder lesen Sie unseren Leitfaden zur [Freigabe von QR-Code-Inventaren](/features/qr-code-inventory-preview), um Ihr Zuhause oder Ihren Arbeitsplatz einfach zu verwalten."
  },
  FR: {
    seoTitle: "Application de gestion d'inventaire partagé | Partager l'inventaire de cartons",
    seoDesc: "Partagez votre inventaire QrSortable avec des membres de la famille ou de l'équipe de confiance. Utilisez la synchronisation MultiuserID pour afficher et mettre à jour vos cartons sur tous les appareils.",
    breadcrumbHome: "Accueil",
    breadcrumbFeatures: "Fonctionnalités",
    breadcrumbCurrent: "Gestion d'inventaire partagé",
    badge: "Partage Premium",
    heading: "Gestion d'inventaire partagé pour les familles, les équipes et le stockage partagé",
    subheading: "Gardez tout le monde connecté au même inventaire de cartons. Avec le partage multi-utilisateur Premium de QrSortable, les utilisateurs de confiance peuvent rejoindre le même inventaire avec un MultiuserID, se synchroniser entre les appareils et afficher ou mettre à jour les cartons et objets partagés.",
    supportingText: "Le stockage est plus facile lorsque tout le monde peut trouver les mêmes informations. QrSortable aide les familles, les colocataires, les déménageurs et les petites équipes à partager un inventaire organisé au lieu de dépendre du téléphone ou de la mémoire d'une seule personne.",
    ctaGetLabels: "Obtenir des étiquettes intelligentes",
    ctaExploreQR: "Générer un code numériquement",
    backToHome: "Retour à l'accueil",

    sec1Title: "Qu'est-ce que la gestion d'inventaire partagé ?",
    sec1P1: "La gestion d'inventaire partagé est un moyen pour plusieurs utilisateurs de confiance d'accéder au même inventaire numérique. Dans QrSortable, cela est géré via la fonctionnalité Premium de partage multi-utilisateur.",
    sec1P2: "Au lieu de conserver les détails des cartons sur un seul appareil, QrSortable permet à un appareil principal de synchroniser les données d'inventaire avec le serveur. D'autres appareils peuvent rejoindre le même inventaire partagé en saisissant le même MultiuserID. Après la synchronisation, les appareils connectés peuvent afficher et mettre à jour les cartons et objets partagés.",
    sec1P3: "C'est utile pour les maisons, les familles, les espaces de stockage partagés, les cartons de déménagement, les petits bureaux, les collections de loisirs et les pièces de stockage où plusieurs personnes ont besoin d'accéder à l'inventaire.",

    sec2Title: "Comment fonctionne la gestion d'inventaire partagé dans QrSortable",
    step1Title: "Activer le partage multi-utilisateur",
    step1Desc: "Ouvrez QrSortable et allez dans Menu → Multiuser. Si vous y êtes invité, complétez la configuration de l'abonnement premium en saisissant les détails requis et en finalisant le paiement.",
    step2Title: "Créer ou synchroniser les données d'inventaire",
    step2Desc: "Scannez et enregistrez au moins un carton pour avoir des données d'inventaire à partager. Utilisez ensuite le bouton Actualiser/Synchroniser pour télécharger l'inventaire depuis l'appareil principal.",
    step3Title: "Rejoindre depuis un autre appareil",
    step3Desc: "Installez QrSortable sur un autre téléphone ou tablette. Ouvrez Menu → Multiuser et saisissez le même MultiuserID. Assurez-vous que le MultiuserID est correctement saisi, y compris les tirets.",
    step4Title: "Confirmer et commencer le partage",
    step4Desc: "Confirmez l'invite de synchronisation sur le deuxième appareil. Après la synchronisation, l'appareil connecté peut accéder à l'inventaire partagé et aider à maintenir à jour les cartons, objets, emplacements, remarques et photos.",

    sec3Title: "Pourquoi utiliser la gestion d'inventaire partagé ?",
    why1Title: "Tout le monde peut trouver les objets stockés",
    why1Desc: "Dans de nombreux foyers, une seule personne se souvient de l'emplacement des objets. La gestion d'inventaire partagé aide les membres de la famille ou les colocataires de confiance à rechercher dans le même inventaire et à trouver le bon carton sans avoir à demander à quelqu'un d'autre à chaque fois.",
    why2Title: "Utile pendant le déménagement et le déballage",
    why2Desc: "Le déménagement implique souvent que plusieurs personnes emballent, transportent, stockent et déballent des cartons. Avec l'accès à l'inventaire partagé, les utilisateurs peuvent vérifier le contenu des cartons, mettre à jour les objets et garder l'inventaire de déménagement organisé sur plusieurs appareils.",
    why3Title: "Mieux pour les espaces de stockage partagés",
    why3Desc: "Les garages, sous-sols, greniers, placards et pièces de stockage sont souvent utilisés par plusieurs personnes. QrSortable facilite le stockage partagé en gardant les détails des cartons et les enregistrements d'objets disponibles pour les utilisateurs de confiance.",
    why4Title: "Utile pour les petites équipes",
    why4Desc: "Les petites équipes peuvent utiliser QrSortable pour gérer les fournitures de bureau partagées, les documents archivés, les équipements, les échantillons de produits, les pièces de rechange ou les cartons de stockage. Lorsque l'inventaire est partagé, plusieurs membres de l'équipe peuvent maintenir les enregistrements à jour.",
    why5Title: "Réduire les recherches en double",
    why5Desc: "Lorsque les utilisateurs ne savent pas où un objet est stocké, ils peuvent ouvrir plusieurs cartons ou poser la même question à plusieurs reprises. Un inventaire partagé offre aux utilisateurs de confiance un endroit unique à vérifier avant de chercher physiquement.",

    sec4Title: "Exemples concrets de gestion d'inventaire partagé",
    ex1Title: "Pièce de stockage familiale",
    ex1Text: "Une famille stocke des vêtements de saison, des décorations de fête, des livres et des articles de cuisine dans une pièce de stockage. Une personne crée l'inventaire QrSortable et le partage à l'aide du MultiuserID. D'autres membres de la famille de confiance peuvent synchroniser le même inventaire et vérifier quel carton contient l'objet dont ils ont besoin.",
    ex2Title: "Déménager ensemble",
    ex2Text: "Pendant un déménagement, une personne peut emballer les articles de cuisine tandis qu'une autre emballe les articles de chambre ou de stockage. Avec la gestion d'inventaire partagé, les deux utilisateurs peuvent accéder aux mêmes enregistrements de cartons et maintenir l'inventaire à jour pendant l'emballage et le déballage.",
    ex3Title: "Organisation de garage partagé",
    ex3Text: "Un garage peut contenir des outils, des pièces de rechange, des articles saisonniers, des fournitures de loisirs et des bacs de stockage. QrSortable aide les utilisateurs de confiance à voir le même inventaire afin que tout le monde puisse trouver des objets sans ouvrir chaque carton.",
    ex4Title: "Colocataires partageant un stockage",
    ex4Text: "Des colocataires peuvent partager un placard, un sous-sol ou une zone de stockage. Avec QrSortable, les cartons partagés peuvent être documentés avec des noms d'objets, des emplacements, des remarques et des photos afin que l'espace de stockage reste plus facile à gérer.",
    ex5Title: "Inventaire de petit bureau",
    ex5Text: "Un petit bureau peut utiliser QrSortable pour suivre les fichiers archivés, les fournitures de bureau, les échantillons de produits et les équipements de rechange. Le partage multi-utilisateur aide plusieurs personnes de confiance à accéder au même inventaire et à le mettre à jour.",

    sec5Title: "Qui peut utiliser cette fonctionnalité ?",
    who1Title: "Familles",
    who1Desc: "Partagez les informations de stockage afin que les membres de la famille puissent trouver les articles saisonniers, les décorations, les outils, les vêtements, les livres et les cartons ménagers.",
    who2Title: "Couples et colocataires",
    who2Desc: "Gardez les placards, garages, sous-sols, greniers et pièces de stockage partagés organisés avec un inventaire unique disponible sur tous les appareils.",
    who3Title: "Personnes en déménagement",
    who3Desc: "Permettez à plusieurs personnes de vérifier et de mettre à jour l'inventaire des cartons de déménagement pendant l'emballage, le transport, le stockage temporaire et le déballage.",
    who4Title: "Petites entreprises",
    who4Desc: "Gérez le stockage de bureau partagé, les documents, les échantillons de produits, les équipements de rechange et les fournitures avec un inventaire numérique que les utilisateurs de confiance peuvent synchroniser.",
    who5Title: "Collectionneurs et amateurs",
    who5Desc: "Partagez des enregistrements de cartons organisés pour les livres, les fournitures de loisirs créatifs, les objets de collection, les outils, les accessoires et le matériel de loisir.",

    sec6Title: "Gestion d'inventaire partagé vs Inventaire individuel",
    sec6P1: "Un inventaire individuel fonctionne lorsqu'une seule personne a besoin d'un accès. Mais le stockage devient souvent une responsabilité partagée. Les familles, les colocataires, les déménageurs et les petites équipes peuvent tous avoir besoin de savoir ce que contient un carton et où il est stocké.",
    sec6P2: "La gestion d'inventaire partagé de QrSortable aide les utilisateurs de confiance à accéder au même inventaire numérique depuis différents appareils. Cela facilite le maintien d'enregistrements de cartons utiles lorsque plusieurs personnes ajoutent, déplacent, recherchent ou vérifient des objets.",
    tradLabelsTitle: "Inventaire individuel",
    tradBullets: [
      "Stocké sur un seul appareil",
      "Une seule personne peut facilement vérifier les enregistrements",
      "Les autres doivent demander où se trouvent les objets",
      "Plus difficile lors d'un déménagement ou d'un emballage partagé",
      "Moins pratique pour les espaces de stockage partagés"
    ],
    qrSortableTitle: "Gestion d'inventaire partagé QrSortable",
    qrBullets: [
      "Prend en charge l'accès depuis plusieurs appareils",
      "Utilise un MultiuserID pour rejoindre l'inventaire partagé",
      "Aide les utilisateurs de confiance à voir et à mettre à jour les cartons",
      "Utile pour les familles, les colocataires, le déménagement et les petites équipes",
      "Rend les informations de stockage partagé plus faciles d'accès",
      "Fonctionne avec les cartons, objets, remarques, photos et emplacements QrSortable"
    ],

    sec7Title: "Meilleures utilisations pour la gestion d'inventaire partagé",
    sec7P1: "Utilisez la gestion d'inventaire partagé de QrSortable pour :",
    useCases: [
      "Organisation du stockage familial",
      "Inventaire domestique partagé",
      "Cartons de déménagement",
      "Stockage temporaire pendant le déménagement",
      "Stockage de garage",
      "Stockage de sous-sol",
      "Stockage de grenier",
      "Organisation de placard",
      "Pièces de stockage",
      "Bacs de stockage en plastique",
      "Vêtements de saison",
      "Décorations de fête",
      "Livres et documents",
      "Outils et pièces de rechange",
      "Fournitures de loisirs",
      "Fournitures de bureau",
      "Stockage de petite entreprise",
      "Unités de stockage partagées",
      "Espaces de stockage de colocataires",
      "Cartons auxquels plusieurs personnes ont besoin d'accéder"
    ],

    sec8Title: "Conçu pour les vrais problèmes de stockage partagé",
    sec8P1: "Le stockage partagé peut devenir déroutant lorsque seule une personne sait où tout se trouve. Les cartons sont déplacés, des objets sont ajoutés et les zones de stockage changent avec le temps.",
    sec8P2: "La gestion d'inventaire partagé de QrSortable aide les utilisateurs de confiance à rester connectés au même inventaire. Avec le partage multi-utilisateur, les utilisateurs peuvent synchroniser les cartons, les noms d'objets, les remarques, les photos, les emplacements et les catégories entre les appareils.",

    sec9Title: "La confidentialité et la confiance comptent",
    sec9P1: "La gestion d'inventaire partagé ne doit être utilisée qu'avec des personnes de confiance. QrSortable utilise un MultiuserID pour connecter les appareils à l'inventaire partagé. Toute personne disposant du MultiuserID correct peut synchroniser l'inventaire, les utilisateurs ne doivent donc pas le partager publiquement.",
    sec9P2: "Pour de meilleurs résultats, gardez le MultiuserID en sécurité, saisissez-le soigneusement avec les tirets et utilisez Actualiser/Synchroniser lorsque les mises à jour doivent apparaître sur les appareils connectés.",

    sec10Title: "Conseils pour une meilleure synchronisation de l'inventaire partagé",
    tips: [
      "Scannez et enregistrez au moins un carton avant la synchronisation.",
      "Utilisez des noms de cartons clairs comme « Garage—Outils » ou « Chambre—Hiver ».",
      "Ajoutez des photos pour les objets importants ou précieux.",
      "Utilisez des remarques pour les détails comme fragile, numéro de série, garder au sec ou état.",
      "Saisissez le MultiuserID exactement, y compris les tirets.",
      "Appuyez sur Actualiser/Synchroniser après des mises à jour importantes.",
      "Redémarrez QrSortable et synchronisez à nouveau si les mises à jour n'apparaissent pas.",
      "Partagez le MultiuserID uniquement avec des personnes de confiance."
    ],

    faqTitle: "Foire Aux Questions (FAQ)",
    faqItems: [
      {
        q: "Qu'est-ce que la gestion d'inventaire partagé dans QrSortable ?",
        a: "La gestion d'inventaire partagé est une fonctionnalité premium de QrSortable qui permet à plusieurs appareils de confiance d'accéder au même inventaire. Les utilisateurs peuvent rejoindre l'inventaire partagé avec un MultiuserID et synchroniser les données des cartons et des objets sur tous les appareils."
      },
      {
        q: "Plusieurs personnes peuvent-elles utiliser le même inventaire QrSortable ?",
        a: "Oui. Avec le partage multi-utilisateur Premium, plusieurs appareils peuvent rejoindre le même inventaire en utilisant le même MultiuserID. Après la synchronisation, les appareils connectés peuvent afficher et mettre à jour l'inventaire partagé."
      },
      {
        q: "Comment activer le partage multi-utilisateur ?",
        a: "Ouvrez QrSortable et allez dans Menu → Multiuser. Si vous y êtes invité, complétez la configuration de l'abonnement premium. Ensuite, scannez et enregistrez au moins un carton et appuyez sur Actualiser/Synchroniser pour télécharger l'inventaire."
      },
      {
        q: "Comment un autre appareil rejoint-il l'inventaire partagé ?",
        a: "Installez QrSortable sur le deuxième appareil, ouvrez Menu → Multiuser, saisissez le MultiuserID exactement tel qu'il est fourni, y compris les tirets, et confirmez l'invite de synchronisation."
      },
      {
        q: "Les utilisateurs partagés peuvent-ils mettre à jour les cartons et les objets ?",
        a: "Oui. Après la synchronisation, les appareils connectés peuvent afficher et mettre à jour l'inventaire partagé. Cela aide les utilisateurs de confiance à maintenir à jour le contenu des cartons, les emplacements, les remarques et les informations sur les objets."
      },
      {
        q: "La gestion d'inventaire partagé est-elle utile pour les familles ?",
        a: "Oui. Les familles peuvent utiliser la gestion d'inventaire partagé afin que plusieurs personnes puissent trouver les cartons de stockage, vérifier les détails des objets et mettre à jour les informations d'inventaire."
      },
      {
        q: "La gestion d'inventaire partagé est-elle utile lors d'un déménagement ?",
        a: "Oui. Un déménagement implique souvent plusieurs personnes qui emballent et déballent. Un inventaire de cartons de déménagement partagé aide les utilisateurs à vérifier le contenu des cartons et à mettre à jour les enregistrements à partir de plusieurs appareils."
      },
      {
        q: "Puis-je utiliser cette fonctionnalité pour le stockage de petite entreprise ?",
        a: "Oui. Les utilisateurs de petites entreprises peuvent partager l'inventaire des fournitures de bureau, des documents archivés, des échantillons de produits, des pièces de rechange et des cartons de stockage avec des membres de l'équipe de confiance."
      },
      {
        q: "Que dois-je faire si l'inventaire partagé ne se synchronise pas ?",
        a: "Vérifiez que l'abonnement premium est actif, appuyez sur Actualiser/Synchroniser sur l'appareil principal, confirmez que le MultiuserID a été saisi correctement avec les tirets, et redémarrez QrSortable sur les deux appareils si nécessaire."
      },
      {
        q: "Est-il sûr de partager mon MultiuserID ?",
        a: "Ne partagez votre MultiuserID qu'avec des personnes de confiance. Toute personne disposant du MultiuserID correct peut synchroniser votre inventaire, il ne doit donc pas être partagé publiquement."
      },
      {
        q: "Ai-je besoin d'un compte pour utiliser QrSortable ?",
        a: "QrSortable peut être utilisé sans compte pour une utilisation d'inventaire standard. Premium est requis uniquement pour le partage multi-utilisateur."
      },
      {
        q: "La gestion d'inventaire partagé fonctionne-t-elle avec les photos d'objets ?",
        a: "Oui. Les enregistrements d'inventaire QrSortable peuvent inclure des noms d'objets, des remarques et des photos. Les utilisateurs partagés peuvent accéder aux informations d'inventaire synchronisées depuis les appareils connectés."
      }
    ],

    bottomTitle: "Partagez votre inventaire de stockage avec des personnes de confiance",
    bottomDesc: "La gestion d'inventaire partagé de QrSortable aide les familles, colocataires, déménageurs et petites équipes à rester connectés au même inventaire de cartons. Synchronisez votre inventaire, partagez-le avec des utilisateurs de confiance via un MultiuserID et rendez les informations de stockage plus faciles à trouver sur tous les appareils.",
    bottomSubtitle: "Organisez-vous ensemble avec un système d'inventaire de codes QR partagé.",
    internalLinkText: "Vous cherchez d'autres conseils d'organisation ? Essayez notre organisateur d'[inventaire de cartons de déménagement partagé](/features/moving-box-organizer), explorez le [partage d'inventaire de stockage](/features/qr-code-inventory-preview), ou consultez notre guide sur le [partage d'inventaire par code QR](/features/qr-code-inventory-preview) pour simplifier votre maison ou votre espace de travail."
  },
  ES: {
    seoTitle: "Aplicación de gestión de inventario compartido | Compartir inventario de cajas",
    seoDesc: "Comparta su inventario de QrSortable con familiares o miembros de su equipo de confianza. Utilice la sincronización MultiuserID para ver y actualizar cajas y objetos compartidos en todos los dispositivos.",
    breadcrumbHome: "Inicio",
    breadcrumbFeatures: "Características",
    breadcrumbCurrent: "Gestión de inventario compartido",
    badge: "Uso Premium Compartido",
    heading: "Gestión de inventario compartido para familias, equipos y almacenamiento compartido",
    subheading: "Mantenga a todos conectados al mismo inventario de cajas. Con el uso compartido multiusuario Premium de QrSortable, los usuarios de confianza pueden unirse al mismo inventario con un MultiuserID, sincronizarse entre dispositivos y ver o actualizar cajas y artículos compartidos.",
    supportingText: "El almacenamiento es más fácil cuando todos pueden encontrar la misma información. QrSortable ayuda a familias, compañeros de cuarto, personas en proceso de mudanza y equipos pequeños a compartir un inventario organizado en lugar de depender del teléfono o la memoria de una sola persona.",
    ctaGetLabels: "Obtenga etiquetas inteligentes ahora",
    ctaExploreQR: "Generar código digitalmente",
    backToHome: "Volver al inicio",

    sec1Title: "¿Qué es la gestión de inventario compartido?",
    sec1P1: "La gestión de inventario compartido es una forma de que más de un usuario de confianza acceda al mismo inventario digital. En QrSortable, esto se maneja a través de la función Premium de uso compartido multiusuario.",
    sec1P2: "En lugar de mantener los detalles de las cajas en un solo dispositivo, QrSortable permite que un dispositivo principal sincronice los datos del inventario con el servidor. Otros dispositivos pueden unirse al mismo inventario compartido ingresando el mismo MultiuserID. Después de la sincronización, los dispositivos conectados pueden ver y actualizar las cajas y artículos compartidos.",
    sec1P3: "Esto es útil para hogares, familias, espacios de almacenamiento compartidos, cajas de mudanza, oficinas pequeñas, colecciones de pasatiempos y bodegas donde más de una persona necesita acceso al inventario.",

    sec2Title: "Cómo funciona la gestión de inventario compartido en QrSortable",
    step1Title: "Activar el uso compartido multiusuario",
    step1Desc: "Abra QrSortable y vaya a Menú → Multiuser. Si se le solicita, complete la configuración de la suscripción premium ingresando los detalles requeridos y finalizando el proceso de pago.",
    step2Title: "Crear o sincronizar datos de inventario",
    step2Desc: "Escanee y guarde al menos una caja para tener datos de inventario que compartir. Luego use el botón Actualizar/Sincronizar para cargar el inventario desde el dispositivo principal.",
    step3Title: "Unirse desde otro dispositivo",
    step3Desc: "Instale QrSortable en otro teléfono o tableta. Abra Menú → Multiuser e ingrese el mismo MultiuserID. Asegúrese de que el MultiuserID esté escrito correctamente, incluidos los guiones.",
    step4Title: "Confirmar y comenzar a compartir",
    step4Desc: "Confirme el mensaje de sincronización en el segundo dispositivo. Después de la sincronización, el dispositivo conectado puede acceder al inventario compartido y ayudar a mantener actualizados las cajas, artículos, ubicaciones, comentarios y fotos.",

    sec3Title: "¿Por qué utilizar la gestión de inventario compartido?",
    why1Title: "Todos pueden encontrar los objetos almacenados",
    why1Desc: "In muchos hogares, solo una persona recuerda dónde se guardan las cosas. La gestión de inventario compartido ayuda a los miembros de la familia o compañeros de cuarto de confianza a buscar en el mismo inventario y encontrar la caja correcta sin tener que preguntar a otra persona cada vez.",
    why2Title: "Útil durante la mudanza y el desempaque",
    why2Desc: "Una mudanza a menudo implica que más de una persona empaque, transporte, almacene y desempaque cajas. Con el acceso compartido al inventario, los usuarios pueden verificar el contenido de las cajas, actualizar artículos y mantener organizado el inventario de mudanza en todos los dispositivos.",
    why3Title: "Mejor para espacios de almacenamiento compartidos",
    why3Desc: "Los garajes, sótanos, áticos, armarios y bodegas suelen ser utilizados por más de una persona. QrSortable ayuda a facilitar el almacenamiento compartido al mantener los detalles de las cajas y los registros de los artículos disponibles para los usuarios de confianza.",
    why4Title: "Útil para equipos pequeños",
    why4Desc: "Los equipos pequeños pueden usar QrSortable para administrar suministros de oficina compartidos, documentos archivados, equipos, muestras de productos, piezas de repuesto o cajas de almacenamiento. Cuando se comparte el inventario, más de un miembro del equipo puede mantener los registros actualizados.",
    why5Title: "Reducir las búsquedas duplicadas",
    why5Desc: "Cuando los usuarios no saben dónde está guardado algo, pueden abrir varias cajas o hacer la misma pregunta repetidamente. Un inventario compartido ofrece a los usuarios de confianza un único lugar para verificar antes de buscar físicamente.",

    sec4Title: "Ejemplos reales de gestión de inventario compartido",
    ex1Title: "Bodega de almacenamiento familiar",
    ex1Text: "Una familia almacena ropa de temporada, decoraciones navideñas, libros y artículos de cocina en una bodega. Una persona crea el inventario de QrSortable y lo comparte usando el MultiuserID. Otros miembros de la familia de confianza pueden sincronizar el mismo inventario y verificar qué caja contiene el artículo que necesitan.",
    ex2Title: "Mudarse de casa juntos",
    ex2Text: "Durante una mudanza, una persona puede empacar artículos de cocina mientras otra empaca artículos de dormitorio o almacenamiento. Con la gestión de inventario compartido, ambos usuarios pueden acceder a los mismos registros de cajas y mantener el inventario actualizado mientras empacan y desempacan.",
    ex3Title: "Organización de garaje compartido",
    ex3Text: "Un garaje puede contener herramientas, piezas de repuesto, artículos de temporada, suministros para pasatiempos y contenedores de almacenamiento. QrSortable ayuda a los usuarios de confianza a ver el mismo inventario para que todos puedan encontrar artículos sin abrir cada caja.",
    ex4Title: "Compañeros de cuarto que comparten almacenamiento",
    ex4Text: "Los compañeros de cuarto pueden compartir un armario, sótano o área de almacenamiento. Con QrSortable, las cajas compartidas se pueden documentar con nombres de artículos, ubicaciones, observaciones y fotos para que el espacio de almacenamiento sea más fácil de administrar.",
    ex5Title: "Inventario de oficina pequeña",
    ex5Text: "Una oficina pequeña puede usar QrSortable para realizar un seguimiento de archivos archivados, suministros de oficina, muestras de productos y equipos de repuesto. El uso compartido multiusuario ayuda a que más de una persona de confianza acceda y actualice el mismo inventario.",

    sec5Title: "¿Quién puede utilizar esta función?",
    who1Title: "Familias",
    who1Desc: "Comparta información de almacenamiento para que los miembros de la familia puedan encontrar artículos de temporada, decoraciones, herramientas, ropa, libros y cajas del hogar.",
    who2Title: "Parejas y compañeros de cuarto",
    who2Desc: "Mantenga organizados los armarios, garajes, sótanos, áticos y bodegas compartidos con un solo inventario disponible en todos los dispositivos.",
    who3Title: "Personas en proceso de mudanza",
    who3Desc: "Permita que más de una persona verifique y actualice el inventario de las cajas de mudanza durante el empaque, transporte, almacenamiento temporal y desempaque.",
    who4Title: "Pequeñas empresas",
    who4Desc: "Administre el almacenamiento de oficina compartido, documentos, muestras de productos, equipos de repuesto y suministros con un inventario digital que los usuarios de confianza pueden sincronizar.",
    who5Title: "Coleccionistas y aficionados",
    who5Desc: "Comparta registros de cajas organizados para libros, suministros para manualidades, objetos de colección, herramientas, accesorios y materiales para pasatiempos.",

    sec6Title: "Gestión de inventario compartido frente a Inventario personal",
    sec6P1: "Un inventario personal funciona cuando solo una persona necesita acceso. Pero el almacenamiento a menudo se convierte en una responsabilidad compartida. Las familias, los compañeros de cuarto, los transportistas y los equipos pequeños pueden necesitar saber qué hay dentro de una caja y dónde está almacenada.",
    sec6P2: "La gestión de inventario compartido de QrSortable ayuda a los usuarios de confianza a acceder al mismo inventario digital desde diferentes dispositivos. Esto hace que sea más fácil mantener registros útiles de las cajas cuando más de una persona agrega, mueve, busca o verifica artículos.",
    tradLabelsTitle: "Inventario personal",
    tradBullets: [
      "Almacenado en un solo dispositivo",
      "Solo una persona puede verificar fácilmente los registros",
      "Otros pueden necesitar preguntar dónde están los artículos",
      "Más difícil durante el empaque o la mudanza compartida",
      "Menos práctico para espacios de almacenamiento compartidos"
    ],
    qrSortableTitle: "Gestión de inventario compartido QrSortable",
    qrBullets: [
      "Soporta acceso desde múltiples dispositivos",
      "Utiliza un MultiuserID para unirse al inventario compartido",
      "Ayuda a los usuarios de confianza a ver y actualizar registros de cajas",
      "Útil para familias, compañeros de cuarto, mudanzas y equipos pequeños",
      "Mantiene la información de almacenamiento compartido más accesible",
      "Funciona con cajas, artículos, observaciones, fotos y ubicaciones de QrSortable"
    ],

    sec7Title: "Mejores usos de la gestión de inventario compartido",
    sec7P1: "Utilice la gestión de inventario compartido de QrSortable para:",
    useCases: [
      "Organización del almacenamiento familiar",
      "Inventario compartido del hogar",
      "Cajas de mudanza",
      "Almacenamiento temporal durante mudanzas",
      "Almacenamiento en garaje",
      "Almacenamiento en sótano",
      "Almacenamiento en ático",
      "Organización de armarios",
      "Bodegas de almacenamiento",
      "Contenedores de plástico",
      "Ropa de temporada",
      "Decoraciones navideñas",
      "Libros y documentos",
      "Herramientas y piezas de repuesto",
      "Suministros para pasatiempos",
      "Suministros de oficina",
      "Almacenamiento de pequeñas empresas",
      "Unidades de almacenamiento compartidas",
      "Espacios de almacenamiento de compañeros de cuarto",
      "Cajas a las que más de una persona necesita acceder"
    ],

    sec8Title: "Diseñado para problemas reales de almacenamiento compartido",
    sec8P1: "El almacenamiento compartido puede resultar confuso cuando solo una persona sabe dónde está todo. Las cajas se mueven, se agregan artículos y las áreas de almacenamiento cambian con el tiempo.",
    sec8P2: "La gestión de inventario compartido de QrSortable ayuda a los usuarios de confianza a mantenerse conectados al mismo inventario. Con el uso compartido multiusuario, los usuarios pueden sincronizar cajas, nombres de artículos, observaciones, fotos, ubicaciones y categorías en todos los dispositivos.",

    sec9Title: "La privacidad y la confianza son importantes",
    sec9P1: "La gestión de inventario compartido solo debe usarse con personas en las que confíe. QrSortable utiliza un MultiuserID para conectar dispositivos al inventario compartido. Cualquier persona con el MultiuserID correcto puede sincronizar el inventario, por lo que los usuarios no deben compartirlo públicamente.",
    sec9P2: "Para obtener mejores resultados, mantenga seguro el MultiuserID, ingréselo con cuidado con guiones y use Actualizar/Sincronizar cuando las actualizaciones deban aparecer en los dispositivos conectados.",

    sec10Title: "Consejos para una mejor sincronización del inventario compartido",
    tips: [
      "Escanee y guarde al menos una caja antes de sincronizar.",
      "Use nombres de caja claros como “Garaje—Herramientas” o “Dormitorio—Invierno”.",
      "Agregue fotos para artículos importantes o valiosos.",
      "Use observaciones para detalles como frágil, número de serie, mantener seco o estado.",
      "Ingrese el MultiuserID exactamente, incluidos los guiones.",
      "Toque Actualizar/Sincronizar después de actualizaciones importantes.",
      "Reinicie QrSortable y vuelva a sincronizar si las actualizaciones no aparecen.",
      "Comparta el MultiuserID solo con personas de confianza."
    ],

    faqTitle: "Preguntas frecuentes",
    faqItems: [
      {
        q: "¿Qué es la gestión de inventario compartido en QrSortable?",
        a: "La gestión de inventario compartido es una función premium de QrSortable que permite que varios dispositivos de confianza accedan al mismo inventario. Los usuarios pueden unirse al inventario compartido con un MultiuserID y sincronizar datos de cajas y artículos entre dispositivos."
      },
      {
        q: "¿Pueden varias personas usar el mismo inventario de QrSortable?",
        a: "Sí. Con la función Premium de uso compartido multiusuario, varios dispositivos pueden unirse al mismo inventario utilizando el mismo MultiuserID. Después de la sincronización, los dispositivos conectados pueden ver y actualizar el inventario compartido."
      },
      {
        q: "¿Cómo activo el uso compartido multiusuario?",
        a: "Abra QrSortable y vaya a Menú → Multiuser. Si se le solicita, complete la configuración de la suscripción premium. Luego escanee y guarde al menos una caja y toque Actualizar/Sincronizar para cargar el inventario."
      },
      {
        q: "¿Cómo se une otro dispositivo al inventario compartido?",
        a: "Instale QrSortable en el segundo dispositivo, abra Menú → Multiuser, ingrese el MultiuserID exactamente como se le proporcionó, incluidos los guiones, y confirme el mensaje de sincronización."
      },
      {
        q: "¿Pueden los usuarios compartidos actualizar cajas y artículos?",
        a: "Sí. Después de la sincronización, los dispositivos conectados pueden ver y actualizar el inventario compartido. Esto ayuda a los usuarios de confianza a mantener actualizados el contenido de las cajas, ubicaciones, observaciones e información de los artículos."
      },
      {
        q: "¿Es útil la gestión de inventario compartido para las familias?",
        a: "Sí. Las familias pueden usar la gestión de inventario compartido para que más de una persona pueda encontrar cajas de almacenamiento, verificar detalles de artículos y actualizar la información del inventario."
      },
      {
        q: "¿Es útil la gestión de inventario compartido al mudarse de casa?",
        a: "Sí. Una mudanza a menudo implica que varias personas empaquen y desempaquen. Un inventario compartido de cajas de mudanza ayuda a los usuarios a verificar el contenido de las cajas y actualizar los registros desde más de un dispositivo."
      },
      {
        q: "¿Puedo usar esta función para el almacenamiento de una pequeña empresa?",
        a: "Sí. Los usuarios de pequeñas empresas pueden compartir el inventario de suministros de oficina, documentos archivados, muestras de productos, piezas de repuesto y cajas de almacenamiento con miembros de su equipo de confianza."
      },
      {
        q: "¿Qué debo hacer si el inventario compartido no se sincroniza?",
        a: "Verifique que la suscripción premium esté activa, toque Actualizar/Sincronizar en el dispositivo principal, confirme que el MultiuserID se ingresó correctamente con guiones y reinicie QrSortable en ambos dispositivos si es necesario."
      },
      {
        q: "¿Es seguro compartir mi MultiuserID?",
        a: "Solo comparta su MultiuserID con personas en las que confíe. Cualquier persona con el MultiuserID correcto puede sincronizar su inventario, por lo que no debe compartirse públicamente."
      },
      {
        q: "¿Necesito una cuenta para usar QrSortable?",
        a: "QrSortable se puede usar sin iniciar sesión para el uso normal del inventario. El acceso Premium solo se requiere para el uso compartido multiusuario."
      },
      {
        q: "¿Puede la gestión de inventario compartido funcionar con fotos de artículos?",
        a: "Sí. Los registros de inventario de QrSortable pueden incluir nombres de artículos, observaciones y fotos. Los usuarios compartidos pueden acceder a la información de inventario sincronizada desde los dispositivos conectados."
      }
    ],

    bottomTitle: "Comparta su inventario de almacenamiento con personas de confianza",
    bottomDesc: "La gestión de inventario compartido de QrSortable ayuda a familias, compañeros de cuarto, personas en proceso de mudanza y equipos pequeños a mantenerse conectados al mismo inventario de cajas. Sincronice su inventario, compártalo con usuarios de confianza a través de un MultiuserID y mantenga la información de almacenamiento fácil de encontrar en todos los dispositivos.",
    bottomSubtitle: "Organícese junto con un sistema de inventario de código QR compartido.",
    internalLinkText: "¿Busca más consejos de organización? Pruebe nuestro organizador de [inventario compartido de cajas de mudanza](/features/moving-box-organizer), explore el [uso compartido de inventario de almacenamiento](/features/qr-code-inventory-preview) o consulte nuestra guía sobre [uso compartido de inventario de código QR](/features/qr-code-inventory-preview) para simplificar su hogar o espacio de trabajo."
  }
};
