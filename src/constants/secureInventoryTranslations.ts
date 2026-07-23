export interface SecureInventoryTranslations {
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
  ctaStartWithoutAccount: string;
  backToHome: string;
  
  sec1Heading: string;
  sec1P1: string;
  sec1P2: string;
  sec1P3: string;
  
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
  sec3Subtitle: string;
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
  sec6Body1: string;
  sec6Body2: string;
  sec6HandwrittenTitle: string;
  sec6HandwrittenPoints: string[];
  sec6QrSortableTitle: string;
  sec6QrSortablePoints: string[];
  
  sec7Heading: string;
  sec7Intro: string;
  sec7Items: string[];
  
  sec8Heading: string;
  sec8Subtitle: string;
  sec8Tips: string[];
  
  sec9Heading: string;
  sec9Body1: string;
  sec9Body2: string;
  
  sec10Heading: string;
  sec10Body1: string;
  sec10Body2: string;
  
  faqHeading: string;
  faqItems: { q: string; a: string }[];
  
  finalCtaHeading: string;
  finalCtaBody: string;
  finalCtaSubtext: string;
}

export const SECURE_INVENTORY_TRANSLATIONS: Record<string, SecureInventoryTranslations> = {
  EN: {
    seoTitle: "Secure Inventory Tracking App | Private QR Code Storage Records",
    seoDesc: "Track storage boxes, documents, valuables, and moving inventory with QrSortable. Keep item details in a digital inventory and share access only with trusted users.",
    breadcrumbHome: "Home",
    breadcrumbFeatures: "Features",
    breadcrumbCurrent: "Secure Inventory Tracking",
    badge: "Privacy First",
    heading: "Secure Inventory Tracking for Boxes, Valuables, and Private Storage",
    subheading: "QrSortable helps you organize sensitive storage information without writing every item on the outside of a box. Scan QR code labels, manage digital box records, add photos and remarks, and share inventory access only with trusted users.",
    supportingText: "Your storage inventory may include personal documents, electronics, tools, collectibles, and household valuables. QrSortable gives you a practical way to keep those details organized in a digital inventory instead of exposing them on handwritten labels.",
    ctaGetLabels: "Get Smart Labels Now",
    ctaStartWithoutAccount: "Start Without Account",
    backToHome: "Back to Home",
    
    sec1Heading: "What Is Secure Inventory Tracking?",
    sec1P1: "Secure Inventory Tracking is a privacy-aware way to organize physical items with digital records. Instead of writing detailed item lists on the outside of storage boxes, QrSortable lets you connect a QR code or barcode label to a digital box record.",
    sec1P2: "Each box record can include location, category, item names, remarks, and photos. This helps you find stored items while keeping sensitive details inside your inventory workflow rather than printed across the box.",
    sec1P3: "Secure inventory tracking is useful for household valuables, personal documents, electronics, tools, business supplies, office archives, moving boxes, hobby collections, and long-term storage.",
    
    sec2Heading: "How QrSortable Helps Protect Inventory Details",
    sec2Step1Title: "Use a Simple QR Code Label",
    sec2Step1Body: "Attach a QrSortable label to the outside of the box. Instead of writing every valuable or private item on the box, use the QR code to connect the container to its digital inventory record.",
    sec2Step2Title: "Store Details Inside the App",
    sec2Step2Body: "Add item names, remarks, photos, category, and location inside QrSortable. This keeps your external label cleaner and reduces the need to expose item details on the physical box.",
    sec2Step3Title: "Search Without Opening Boxes",
    sec2Step3Body: "Use QrSortable search to find items by name, remark, location, or category. This is useful when you need to locate something without opening multiple containers or revealing box contents to others nearby.",
    sec2Step4Title: "Share Only with Trusted Users",
    sec2Step4Body: "If you use Premium Multi-User Sharing, share your MultiuserID only with people you trust. Anyone with the correct MultiuserID may be able to sync your inventory, so it should not be shared publicly.",
    sec2Step5Title: "Keep Labels and Records Updated",
    sec2Step5Body: "If a label is damaged or replaced, update the related box record. Use clear naming, helpful remarks, and photos where needed, but avoid storing unnecessary sensitive information.",
    
    sec3Heading: "Why Use Secure Inventory Tracking?",
    sec3Subtitle: "Why privacy-focused users choose QrSortable for their inventory lists:",
    sec3Benefit1Title: "Avoid Exposing Valuable Item Lists",
    sec3Benefit1Body: "A handwritten label such as “laptop, camera, jewelry, tax documents” may reveal too much. With QrSortable, the outside of the box can stay simple while item details remain in the digital inventory.",
    sec3Benefit2Title: "Organize Personal Documents More Carefully",
    sec3Benefit2Body: "Document boxes often contain financial, legal, medical, school, or household records. Secure inventory tracking helps you identify the box without writing sensitive details directly on the outside.",
    sec3Benefit3Title: "Helpful for Moving and Temporary Storage",
    sec3Benefit3Body: "During a move, boxes may be handled by helpers, movers, storage facilities, or other people. QR code storage labels help you organize contents while avoiding overly detailed public labels. Check out our [Moving Box Organizer](/features/moving-box-organizer) to simplify your next relocation.",
    sec3Benefit4Title: "Better for Collectors and Valuable Items",
    sec3Benefit4Body: "Collectors may want photos, notes, and item lists for books, tools, electronics, hobby items, or collectibles. QrSortable helps keep those records searchable without making the full list visible on the box.",
    sec3Benefit5Title: "Responsible Shared Access",
    sec3Benefit5Body: "Shared inventory can be useful for families and teams, but access should be shared carefully. Learn how to manage this securely on our [Shared Inventory Management](/features/shared-inventory-management) page, or get an overview of our [QR Code Inventory Preview](/features/qr-code-inventory-preview) features.",
    
    sec4Heading: "Real-Life Examples of Secure Inventory Tracking",
    sec4Ex1Title: "Family Document Storage",
    sec4Ex1Body: "A family stores tax records, school documents, warranty papers, and household files in archive boxes. Instead of writing detailed document names on every box, the family uses QR code labels and keeps the detailed information inside QrSortable.",
    sec4Ex2Title: "Valuable Electronics During a Move",
    sec4Ex2Body: "A person moving house packs laptops, camera equipment, cables, tablets, and accessories into moving boxes. QrSortable helps create a searchable inventory without listing valuable electronics clearly on the outside of each box.",
    sec4Ex3Title: "Collector Storage Boxes",
    sec4Ex3Body: "A collector organizes books, trading cards, games, tools, or hobby supplies in labeled containers. The QR label identifies the box, while photos and item remarks stay in the digital inventory for easier searching and better privacy.",
    sec4Ex4Title: "Small Office Archive Boxes",
    sec4Ex4Body: "A small office stores contracts, invoices, employee documents, and archived records in storage boxes. QrSortable helps organize the boxes by location and category while keeping sensitive document details out of handwritten labels.",
    sec4Ex5Title: "Shared Household Storage",
    sec4Ex5Body: "A household shares access to storage rooms, closets, garage bins, and basement boxes. With shared inventory, trusted users can find items, but the MultiuserID should only be shared with people who should access the inventory.",
    sec4Ex6Title: "Garage Tools and Equipment",
    sec4Ex6Body: "A homeowner stores tools, spare parts, equipment, and accessories in garage bins. QrSortable helps track where items are stored without writing a complete list of valuable tools on the outside of the container.",
    
    sec5Heading: "Who Relies on Secure Inventory Tracking?",
    sec5Card1Title: "Security-Minded Families",
    sec5Card1Body: "Keep household storage organized while avoiding overly detailed labels on boxes that contain private documents, electronics, or valuables.",
    sec5Card2Title: "Collectors and Hobby Users",
    sec5Card2Body: "Catalog stored items with photos, notes, and locations while keeping the outside of storage boxes simple and less revealing.",
    sec5Card3Title: "People Moving House",
    sec5Card3Body: "Track moving boxes that contain electronics, documents, tools, or personal items without writing sensitive details directly on the box.",
    sec5Card4Title: "Small Offices",
    sec5Card4Body: "Organize archive boxes, office supplies, product samples, records, and spare equipment with clearer digital records.",
    sec5Card5Title: "Homeowners and Renters",
    sec5Card5Body: "Manage garages, basements, attics, closets, storage rooms, and plastic bins with privacy-aware QR code inventory records.",
    sec5Card6Title: "Shared Inventory Users",
    sec5Card6Body: "Share inventory access only with trusted family members, roommates, or team members who should view and update the same records.",
    
    sec6Heading: "Secure Inventory Tracking vs. Handwritten Box Labels",
    sec6Body1: "Handwritten labels are useful, but they can reveal too much. If a box contains documents, electronics, collectibles, or business records, writing every detail on the outside may not be ideal.",
    sec6Body2: "QrSortable helps keep the physical label simple while storing item details in a digital inventory. You can still use practical box names, but the full item list, photos, remarks, and location details stay inside your inventory workflow.",
    sec6HandwrittenTitle: "Handwritten Box Labels",
    sec6HandwrittenPoints: [
      "Easy to create",
      "Useful for basic room names",
      "Visible to anyone who sees the box",
      "Limited space for details",
      "Can reveal sensitive item names",
      "Hard to update when contents change",
      "Usually no photos or searchable records"
    ],
    sec6QrSortableTitle: "QrSortable Secure Inventory Tracking",
    sec6QrSortablePoints: [
      "Connects a QR or barcode label to a digital record",
      "Keeps detailed item lists inside the app workflow",
      "Supports item names, remarks, photos, locations, and categories",
      "Helps reduce exposed information on physical boxes",
      "Supports search across inventory records",
      "Works with moving boxes, storage bins, archives, and valuables",
      "Shared access should be limited to trusted users"
    ],
    
    sec7Heading: "Best Uses for Secure Inventory Tracking",
    sec7Intro: "Use QrSortable’s Secure Inventory Tracking for:",
    sec7Items: [
      "Personal documents", "Tax records", "Warranty papers", "Legal folders",
      "Financial archives", "Electronics", "Cameras and accessories", "Tools and spare parts",
      "Collectibles", "Books and hobby items", "Office archive boxes", "Small business records",
      "Product samples", "Moving boxes", "Storage rooms", "Garage bins",
      "Basement storage", "Attic boxes", "Closet organization", "Long-term storage",
      "Shared household inventory"
    ],
    
    sec8Heading: "Privacy Tips for Better Inventory Management",
    sec8Subtitle: "For safer and more privacy-aware inventory tracking:",
    sec8Tips: [
      "Avoid writing valuable item names on the outside of boxes.",
      "Use simple box names when privacy matters.",
      "Add photos only when they are useful.",
      "Avoid storing unnecessary sensitive personal information in remarks.",
      "Use clear but careful locations such as “Storage Room Shelf A” instead of overly detailed private notes.",
      "Share your MultiuserID only with people you trust.",
      "Do not post inventory links, QR codes, or MultiuserID publicly.",
      "Replace damaged labels and update the related box record.",
      "Keep the app updated.",
      "Review shared access when storage responsibilities change."
    ],
    
    sec9Heading: "Designed for Real Privacy Concerns",
    sec9Body1: "A storage inventory can include more than ordinary household items. It may include documents, electronics, tools, business supplies, collectibles, receipts, serial numbers, or photos.",
    sec9Body2: "QrSortable helps users organize these records in a more thoughtful way. Instead of exposing full contents on the physical label, users can scan a QR code and manage details inside a digital inventory.",
    
    sec10Heading: "Works with QrSortable’s Inventory Workflow",
    sec10Body1: "QrSortable links physical QR code and barcode labels to digital box records. After scanning a label, users can save box location and category, then add items with names, remarks, and photos.",
    sec10Body2: "Users can search across item names, remarks, box locations, and categories later. If Premium [Shared Inventory Management](/features/shared-inventory-management) is used, inventory access should be shared only with trusted people through the MultiuserID. You can also print custom codes with our [QR Code Generator for Storage](/features/qr-code-generator-storage).",
    
    faqHeading: "Frequently Asked Questions",
    faqItems: [
      {
        q: "What is Secure Inventory Tracking?",
        a: "Secure Inventory Tracking is a privacy-aware way to organize physical items with digital records. QrSortable connects QR code or barcode labels to box records so users can manage item names, remarks, photos, locations, and categories without writing every detail on the outside of the box."
      },
      {
        q: "Is my inventory visible to everyone who sees the box?",
        a: "A QR code label helps keep the outside of the box simple, but users should still manage sharing carefully. Do not share inventory access, QR codes, or MultiuserID publicly if the inventory contains private information."
      },
      {
        q: "Can anyone with my MultiuserID access my shared inventory?",
        a: "Anyone with the correct MultiuserID may be able to sync the inventory. QrSortable’s user manual recommends sharing the MultiuserID only with people you trust."
      },
      {
        q: "Should I write valuable item names on the outside of a box?",
        a: "If privacy matters, avoid writing detailed valuable item names on the outside of a box. Use a simple label and keep detailed item names, remarks, and photos inside QrSortable."
      },
      {
        q: "Can I use QrSortable for important documents?",
        a: "Yes. QrSortable can help organize document boxes by location, category, and remarks. Avoid adding unnecessary sensitive information to remarks if the information is not needed for finding the box later."
      },
      {
        q: "Can I use Secure Inventory Tracking when moving?",
        a: "Yes. During a move, secure inventory tracking can help you organize boxes with electronics, documents, tools, and personal items without writing every sensitive detail on the physical box."
      },
      {
        q: "Can collectors use QrSortable for valuable items?",
        a: "Yes. Collectors can use QrSortable to organize boxes with item names, remarks, photos, and storage locations. This can help keep records searchable while keeping physical labels simple."
      },
      {
        q: "Can small businesses use Secure Inventory Tracking?",
        a: "Yes. Small businesses can use QrSortable for office archives, product samples, equipment, documents, and storage boxes. Access should be shared only with trusted team members."
      },
      {
        q: "Does QrSortable search across private inventory records?",
        a: "QrSortable search works across item names, remarks, box locations, and categories. Use clear names and careful remarks so items are easy to find without adding unnecessary sensitive details."
      },
      {
        q: "What should I do if a QR label is damaged?",
        a: "Replace the damaged label and update the related box record if needed. For better scanning, apply labels to clean, dry, flat surfaces and avoid folds, corners, glare, and damaged areas."
      },
      {
        q: "What information should I avoid adding to inventory remarks?",
        a: "Avoid adding unnecessary sensitive information such as full account numbers, passwords, private identification numbers, or confidential details that are not needed for storage organization."
      },
      {
        q: "How can I reduce privacy risks when sharing inventory?",
        a: "Share inventory access only with trusted people, keep your MultiuserID private, avoid public sharing of QR codes or inventory access details, and review what item names, remarks, and photos you store."
      }
    ],
    
    finalCtaHeading: "Track Your Storage with More Privacy and Control",
    finalCtaBody: "QrSortable helps you organize boxes, valuables, documents, and storage records with QR code labels and digital inventory records. Keep physical labels simple, manage item details inside the app workflow, and share access only with trusted users.",
    finalCtaSubtext: "Scan labels, organize records, and keep sensitive storage details out of plain sight."
  },
  DE: {
    seoTitle: "Sichere Inventarverfolgung App | Private QR-Code-Lagerbestände",
    seoDesc: "Verfolgen Sie Lagerkartons, Dokumente, Wertsachen und Umzugsinventar mit QrSortable. Halten Sie Artikeldetails in einem digitalen Inventar und teilen Sie den Zugriff nur mit vertrauenswürdigen Benutzern.",
    breadcrumbHome: "Startseite",
    breadcrumbFeatures: "Funktionen",
    breadcrumbCurrent: "Sichere Inventarverfolgung",
    badge: "Datenschutz Zuerst",
    heading: "Sichere Inventarverfolgung für Kartons, Wertsachen und private Lagerung",
    subheading: "QrSortable hilft Ihnen, sensible Lagerinformationen zu organisieren, ohne jeden Artikel auf die Außenseite eines Kartons schreiben zu müssen. Scannen Sie QR-Code-Etiketten, verwalten Sie digitale Kartoneinträge, fügen Sie Fotos sowie Bemerkungen hinzu und teilen Sie den Inventarzugriff nur mit vertrauenswürdigen Personen.",
    supportingText: "Ihr Lagerinventar kann persönliche Dokumente, Elektronik, Werkzeuge, Sammlerstücke und Haushaltswertsachen umfassen. QrSortable bietet Ihnen eine praktische Möglichkeit, diese Details in einem digitalen Inventar zu organisieren, anstatt sie auf handgeschriebenen Etiketten preiszugeben.",
    ctaGetLabels: "Smarte Etiketten jetzt sichern",
    ctaStartWithoutAccount: "Ohne Konto starten",
    backToHome: "Zurück zur Startseite",
    
    sec1Heading: "Was ist sichere Inventarverfolgung?",
    sec1P1: "Sichere Inventarverfolgung ist eine datenschutzbewusste Methode, um physische Gegenstände mit digitalen Datensätzen zu organisieren. Anstatt detaillierte Artikellisten auf die Außenseite von Lagerkartons zu schreiben, ermöglicht QrSortable Ihnen, ein QR-Code- oder Barcode-Etikett mit einem digitalen Kartoneintrag zu verknüpfen.",
    sec1P2: "Jeder Kartoneintrag kann Standort, Kategorie, Artikelnamen, Bemerkungen und Fotos enthalten. Dies hilft Ihnen, gelagerte Artikel zu finden, während sensible Details in Ihrem Inventar-Workflow bleiben, anstatt auf dem Karton aufgedruckt zu sein.",
    sec1P3: "Die sichere Inventarverfolgung ist nützlich für Haushaltswertsachen, persönliche Dokumente, Elektronik, Werkzeuge, Geschäftsmaterialien, Büroarchive, Umzugskartons, Hobbysammlungen und Langzeitlagerung.",
    
    sec2Heading: "Wie QrSortable hilft, Inventardetails zu schützen",
    sec2Step1Title: "Verwenden Sie ein einfaches QR-Code-Etikett",
    sec2Step1Body: "Bringen Sie ein QrSortable-Etikett auf der Außenseite des Kartons an. Anstatt jeden wertvollen oder privaten Gegenstand auf den Karton zu schreiben, verwenden Sie den QR-Code, um den Behälter mit seinem digitalen Inventareintrag zu verknüpfen.",
    sec2Step2Title: "Details in der App speichern",
    sec2Step2Body: "Fügen Sie Artikelnamen, Bemerkungen, Fotos, Kategorie und Standort in QrSortable hinzu. Dies hält Ihr äußeres Etikett übersichtlicher und verringert die Notwendigkeit, Artikeldetails auf dem physischen Karton preiszugeben.",
    sec2Step3Title: "Suchen ohne Kartons zu öffnen",
    sec2Step3Body: "Verwenden Sie die QrSortable-Suche, um Artikel nach Name, Bemerkung, Standort oder Kategorie zu finden. Dies ist nützlich, wenn Sie etwas finden müssen, ohne mehrere Behälter zu öffnen oder den Inhalt des Kartons für andere in der Nähe sichtbar zu machen.",
    sec2Step4Title: "Nur mit vertrauenswürdigen Benutzern teilen",
    sec2Step4Body: "Wenn Sie das Premium-Multi-User-Sharing nutzen, teilen Sie Ihre MultiuserID nur mit Personen, denen Sie vertrauen. Jeder mit der korrekten MultiuserID kann Ihr Inventar synchronisieren, daher sollte sie nicht öffentlich geteilt werden.",
    sec2Step5Title: "Etiketten und Datensätze aktuell halten",
    sec2Step5Body: "Wenn ein Etikett beschädigt oder ersetzt wird, aktualisieren Sie den entsprechenden Kartoneintrag. Verwenden Sie eine klare Benennung, hilfreiche Bemerkungen und Fotos, wo nötig, aber vermeiden Sie die Speicherung unnötiger sensibler Informationen.",
    
    sec3Heading: "Warum die sichere Inventarverfolgung nutzen?",
    sec3Subtitle: "Warum datenschutzbewusste Benutzer QrSortable für ihre Inventarlisten wählen:",
    sec3Benefit1Title: "Vermeiden Sie das Offenlegen von wertvollen Artikellisten",
    sec3Benefit1Body: "Eine handgeschriebene Beschriftung wie „Laptop, Kamera, Schmuck, Steuerunterlagen“ kann zu viel verraten. Mit QrSortable kann die Außenseite des Kartons schlicht bleiben, während die Artikeldetails im digitalen Inventar verbleiben.",
    sec3Benefit2Title: "Persönliche Dokumente sorgfältiger organisieren",
    sec3Benefit2Body: "Dokumentenkartons enthalten oft Finanz-, Rechts-, Medizin-, Schul- oder Haushaltsunterlagen. Die sichere Inventarverfolgung hilft Ihnen, den Karton zu identifizieren, ohne sensible Details direkt auf die Außenseite schreiben zu müssen.",
    sec3Benefit3Title: "Hilfreich für Umzug und temporäre Lagerung",
    sec3Benefit3Body: "Während eines Umzugs können Kartons von Helfern, Umzugsunternehmen, Lagerhäusern oder anderen Personen gehandhabt werden. QR-Code-Lageretiketten helfen Ihnen, Inhalte zu organisieren, während Sie allzu detaillierte öffentliche Etiketten vermeiden. Entdecken Sie unseren [Umzugskarton-Organisator](/features/moving-box-organizer), um Ihren nächsten Umzug zu vereinfachen.",
    sec3Benefit4Title: "Besser für Sammler und wertvolle Gegenstände",
    sec3Benefit4Body: "Sammler möchten oft Fotos, Notizen und Artikellisten für Bücher, Werkzeuge, Elektronik, Hobbygegenstände oder Sammlerstücke. QrSortable hilft, diese Aufzeichnungen durchsuchbar zu machen, ohne die gesamte Liste auf dem Karton sichtbar zu machen.",
    sec3Benefit5Title: "Verantwortungsvoller gemeinsamer Zugriff",
    sec3Benefit5Body: "Ein gemeinsames Inventar kann für Familien und Teams nützlich sein, aber der Zugriff sollte vorsichtig geteilt werden. Erfahren Sie auf unserer Seite für [Gemeinsame Inventarverwaltung](/features/shared-inventory-management), wie Sie dies sicher verwalten, oder verschaffen Sie sich einen Überblick über unsere [QR-Code-Inventarvorschau](/features/qr-code-inventory-preview).",
    
    sec4Heading: "Praxisbeispiele für sichere Inventarverfolgung",
    sec4Ex1Title: "Dokumentenlagerung für Familien",
    sec4Ex1Body: "Eine Familie lagert Steuerunterlagen, Schulkopien, Garantiescheine und Haushaltsakten in Archivkartons. Anstatt detaillierte Dokumentennamen auf jeden Karton zu schreiben, verwendet die Familie QR-Code-Etiketten und speichert die detaillierten Informationen in QrSortable.",
    sec4Ex2Title: "Wertvolle Elektronik während eines Umzugs",
    sec4Ex2Body: "Eine Person, die umzieht, packt Laptops, Kameraausrüstung, Kabel, Tablets und Zubehör in Umzugskartons. QrSortable hilft, ein durchsuchbares Inventar zu erstellen, ohne wertvolle Elektronik deutlich auf der Außenseite jedes Kartons aufzulisten.",
    sec4Ex3Title: "Lagerkartons für Sammler",
    sec4Ex3Body: "Ein Sammler organisiert Bücher, Sammelkarten, Spiele, Werkzeuge oder Hobbybedarf in beschrifteten Behältern. Das QR-Etikett identifiziert den Karton, während Fotos und Artikelbemerkungen für eine einfachere Suche und besseren Datenschutz im digitalen Inventar verbleiben.",
    sec4Ex4Title: "Archivkartons für kleine Büros",
    sec4Ex4Body: "Ein kleines Büro lagert Verträge, Rechnungen, Mitarbeiterdokumente und archivierte Aufzeichnungen in Lagerkartons. QrSortable hilft, die Kartons nach Standort und Kategorie zu organisieren, während sensible Dokumentendetails von handgeschriebenen Etiketten ferngehalten werden.",
    sec4Ex5Title: "Gemeinsamer Haushaltslagerraum",
    sec4Ex5Body: "Ein Haushalt teilt sich den Zugriff auf Lagerräume, Schränke, Garagenbehälter und Kellerkartons. Mit dem gemeinsamen Inventar können vertrauenswürdige Benutzer Artikel finden, aber die MultiuserID sollte nur mit Personen geteilt werden, die Zugriff auf das Inventar haben sollten.",
    sec4Ex6Title: "Garagenwerkzeuge und Ausrüstung",
    sec4Ex6Body: "Ein Hausbesitzer lagert Werkzeuge, Ersatzteile, Ausrüstung und Zubehör in Garagenbehältern. QrSortable hilft dabei, den Aufbewahrungsort von Artikeln zu verfolgen, ohne eine vollständige Liste wertvoller Werkzeuge auf die Außenseite des Behälters schreiben zu müssen.",
    
    sec5Heading: "Wer verlässt sich auf die sichere Inventarverfolgung?",
    sec5Card1Title: "Sicherheitsbewusste Familien",
    sec5Card1Body: "Halten Sie die Haushaltslagerung organisiert und vermeiden Sie allzu detaillierte Beschriftungen auf Kartons, die private Dokumente, Elektronik oder Wertsachen enthalten.",
    sec5Card2Title: "Sammler und Hobby-Nutzer",
    sec5Card2Body: "Katalogisieren Sie gelagerte Artikel mit Fotos, Notizen und Standorten, während Sie die Außenseite von Lagerkartons schlicht und weniger aufschlussreich halten.",
    sec5Card3Title: "Menschen beim Umzug",
    sec5Card3Body: "Verfolgen Sie Umzugskartons, die Elektronik, Dokumente, Werkzeuge oder persönliche Gegenstände enthalten, ohne sensible Details direkt auf den Karton zu schreiben.",
    sec5Card4Title: "Kleine Büros",
    sec5Card4Body: "Organisieren Sie Archivkartons, Bürobedarf, Produktmuster, Aufzeichnungen und Ersatzgeräte mit übersichtlicheren digitalen Aufzeichnungen.",
    sec5Card5Title: "Hauseigentümer und Mieter",
    sec5Card5Body: "Verwalten Sie Garagen, Keller, Dachböden, Schränke, Lagerräume und Kunststoffboxen mit datenschutzbewussten QR-Code-Inventareinträgen.",
    sec5Card6Title: "Gemeinsame Inventar-Nutzer",
    sec5Card6Body: "Teilen Sie den Inventarzugriff nur mit vertrauenswürdigen Familienmitgliedern, Mitbewohnern oder Teammitgliedern, die dieselben Datensätze anzeigen und aktualisieren sollten.",
    
    sec6Heading: "Sichere Inventarverfolgung vs. handgeschriebene Kartonetiketten",
    sec6Body1: "Handgeschriebene Etiketten sind nützlich, können aber zu viel verraten. Wenn ein Karton Dokumente, Elektronik, Sammlerstücke oder Geschäftsunterlagen enthält, ist es möglicherweise nicht ideal, jedes Detail auf die Außenseite zu schreiben.",
    sec6Body2: "QrSortable hilft, das physische Etikett schlicht zu halten, während Artikeldetails in einem digitalen Inventar gespeichert werden. Sie können weiterhin praktische Kartonnamen verwenden, aber die vollständige Artikelliste, Fotos, Bemerkungen und Standortdetails verbleiben in Ihrem Inventar-Workflow.",
    sec6HandwrittenTitle: "Handgeschriebene Kartonetiketten",
    sec6HandwrittenPoints: [
      "Einfach zu erstellen",
      "Nützlich für grundlegende Raumbezeichnungen",
      "Sichtbar für jeden, der den Karton sieht",
      "Begrenzter Platz für Details",
      "Kann sensible Artikelnamen offenlegen",
      "Schwer zu aktualisieren, wenn sich der Inhalt ändert",
      "Normalerweise keine Fotos oder durchsuchbaren Aufzeichnungen"
    ],
    sec6QrSortableTitle: "QrSortable Sichere Inventarverfolgung",
    sec6QrSortablePoints: [
      "Verknüpft ein QR- oder Barcode-Etikett mit einem digitalen Eintrag",
      "Hält detaillierte Artikellisten im App-Workflow",
      "Unterstützt Artikelnamen, Bemerkungen, Fotos, Standorte und Kategorien",
      "Hilft, offengelegte Informationen auf physischen Kartons zu reduzieren",
      "Unterstützt die Suche in Inventardatensätzen",
      "Funktioniert mit Umzugskartons, Lagerboxen, Archiven und Wertsachen",
      "Gemeinsamer Zugriff sollte auf vertrauenswürdige Benutzer beschränkt sein"
    ],
    
    sec7Heading: "Beste Einsatzmöglichkeiten für sichere Inventarverfolgung",
    sec7Intro: "Nutzen Sie die sichere Inventarverfolgung von QrSortable für:",
    sec7Items: [
      "Persönliche Dokumente", "Steuerunterlagen", "Garantiescheine", "Gerichtsakten",
      "Finanzarchive", "Elektronik", "Kameras und Zubehör", "Werkzeuge und Ersatzteile",
      "Sammlerstücke", "Bücher und Hobbyartikel", "Büroarchivkartons", "Kleinbetriebliche Aufzeichnungen",
      "Produktmuster", "Umzugskartons", "Lagerräume", "Garagenboxen",
      "Kellerlagerung", "Dachbodenkartons", "Schrankorganisation", "Langzeitlagerung",
      "Gemeinsames Haushaltsinventar"
    ],
    
    sec8Heading: "Datenschutz-Tipps für eine bessere Inventarverwaltung",
    sec8Subtitle: "Für eine sicherere und datenschutzbewusstere Inventarverfolgung:",
    sec8Tips: [
      "Vermeiden Sie es, Namen wertvoller Artikel auf die Außenseite von Kartons zu schreiben.",
      "Verwenden Sie einfache Kartonnamen, wenn Datenschutz wichtig ist.",
      "Fügen Sie Fotos nur hinzu, wenn sie nützlich sind.",
      "Vermeiden Sie es, unnötige sensible persönliche Informationen in den Bemerkungen zu speichern.",
      "Verwenden Sie klare, aber vorsichtige Standorte wie „Lagerraum Regal A“ anstelle von allzu detaillierten privaten Notizen.",
      "Teilen Sie Ihre MultiuserID nur mit Personen, denen Sie vertrauen.",
      "Veröffentlichen Sie keine Inventar-Links, QR-Codes oder Ihre MultiuserID.",
      "Ersetzen Sie beschädigte Etiketten und aktualisieren Sie den zugehörigen Kartoneintrag.",
      "Halten Sie die App auf dem neuesten Stand.",
      "Überprüfen Sie den gemeinsamen Zugriff, wenn sich die Lagerverantwortlichkeiten ändern."
    ],
    
    sec9Heading: "Entwickelt für echte Datenschutzbedenken",
    sec9Body1: "Ein Lagerinventar kann mehr als nur gewöhnliche Haushaltsgegenstände umfassen. Es kann Dokumente, Elektronik, Werkzeuge, Geschäftsmaterialien, Sammlerstücke, Quittungen, Seriennummern oder Fotos enthalten.",
    sec9Body2: "QrSortable hilft Benutzern, diese Aufzeichnungen durchdachter zu organisieren. Anstatt den vollständigen Inhalt auf dem physischen Etikett preiszugeben, können Benutzer einen QR-Code scannen und die Details in einem digitalen Inventar verwalten.",
    
    sec10Heading: "Funktioniert mit dem Inventar-Workflow von QrSortable",
    sec10Body1: "QrSortable verknüpft physische QR-Code- und Barcode-Etiketten mit digitalen Kartoneinträgen. Nach dem Scannen eines Etiketts können Benutzer den Standort und die Kategorie des Kartons speichern und anschließend Artikel mit Namen, Bemerkungen und Fotos hinzufügen.",
    sec10Body2: "Benutzer können später nach Artikelnamen, Bemerkungen, Kartonstandorten und Kategorien suchen. Wenn die Premium-[Gemeinsame Inventarverwaltung](/features/shared-inventory-management) genutzt wird, sollte der Inventarzugriff nur mit vertrauenswürdigen Personen über die MultiuserID geteilt werden. Sie können auch benutzerdefinierte Codes mit unserem [QR-Code-Generator für die Lagerung](/features/qr-code-generator-storage) drucken.",
    
    faqHeading: "Häufig gestellte Fragen",
    faqItems: [
      {
        q: "Was ist sichere Inventarverfolgung?",
        a: "Sichere Inventarverfolgung ist eine datenschutzbewusste Methode, um physische Gegenstände mit digitalen Datensätzen zu organisieren. QrSortable verknüpft QR-Code- oder Barcode-Etiketten mit Kartoneinträgen, sodass Benutzer Artikelnamen, Bemerkungen, Fotos, Standorte und Kategorien verwalten können, ohne jedes Detail auf die Außenseite des Kartons zu schreiben."
      },
      {
        q: "Ist mein Inventar für jeden sichtbar, der den Karton sieht?",
        a: "Ein QR-Code-Etikett hilft dabei, die Außenseite des Kartons schlicht zu halten, aber Benutzer sollten die Freigabe dennoch sorgfältig verwalten. Teilen Sie den Inventarzugriff, QR-Codes oder Ihre MultiuserID nicht öffentlich, wenn das Inventar private Informationen enthält."
      },
      {
        q: "Kann jeder mit meiner MultiuserID auf mein freigegebenes Inventar zugreifen?",
        a: "Jeder mit der korrekten MultiuserID kann das Inventar synchronisieren. Das Benutzerhandbuch von QrSortable empfiehlt, die MultiuserID nur mit Personen zu teilen, denen Sie vertrauen."
      },
      {
        q: "Sollte ich die Namen wertvoller Artikel auf die Außenseite eines Kartons schreiben?",
        a: "Wenn Datenschutz wichtig ist, vermeiden Sie es, detaillierte Namen wertvoller Artikel auf die Außenseite eines Kartons zu schreiben. Verwenden Sie ein einfaches Etikett und bewahren Sie detaillierte Artikelnamen, Bemerkungen und Fotos in QrSortable auf."
      },
      {
        q: "Kann ich QrSortable für wichtige Dokumente verwenden?",
        a: "Ja. QrSortable kann dabei helfen, Dokumentenkartons nach Standort, Kategorie und Bemerkungen zu organisieren. Vermeiden Sie es, unnötige sensible Informationen in den Bemerkungen zu speichern, wenn diese nicht für das spätere Auffinden des Kartons erforderlich sind."
      },
      {
        q: "Kann ich die sichere Inventarverfolgung beim Umzug nutzen?",
        a: "Ja. Während eines Umzugs kann Ihnen die sichere Inventarverfolgung helfen, Kartons mit Elektronik, Dokumenten, Werkzeuge und persönlichen Gegenständen zu organisieren, ohne jedes sensible Detail auf den physischen Karton schreiben zu müssen."
      },
      {
        q: "Können Sammler QrSortable für wertvolle Gegenstände nutzen?",
        a: "Ja. Sammler können QrSortable nutzen, um Kartons mit Artikelnamen, Bemerkungen, Fotos und Lagerorten zu organisieren. Dies hilft, die Einträge durchsuchbar zu halten, während die physischen Etiketten schlicht bleiben."
      },
      {
        q: "Können kleine Unternehmen die sichere Inventarverfolgung nutzen?",
        a: "Ja. Kleine Unternehmen können QrSortable für Büroarchive, Produktmuster, Ausrüstung, Dokumente und Lagerkartons nutzen. Der Zugriff sollte nur mit vertrauenswürdigen Teammitgliedern geteilt werden."
      },
      {
        q: "Durchsucht QrSortable auch private Inventareinträge?",
        a: "Die QrSortable-Suche funktioniert über Artikelnamen, Bemerkungen, Kartonstandorte und Kategorien. Verwenden Sie klare Namen und sorgfältige Bemerkungen, damit Artikel leicht zu finden sind, ohne unnötige sensible Details hinzuzufügen."
      },
      {
        q: "Was soll ich tun, wenn ein QR-Etikett beschädigt ist?",
        a: "Ersetzen Sie das beschädigte Etikett und aktualisieren Sie bei Bedarf den zugehörigen Kartoneintrag. Für eine bessere Scanbarkeit bringen Sie Etiketten auf sauberen, trockenen, ebenen Flächen an und vermeiden Sie Falten, Ecken, Blendung und beschädigte Stellen."
      },
      {
        q: "Welche Informationen sollte ich in den Inventarbemerkungen vermeiden?",
        a: "Vermeiden Sie es, unnötige sensible Informationen wie vollständige Kontonummern, Passwörter, private Identifikationsnummern oder vertrauliche Details hinzuzufügen, die nicht für die Lagerorganisation benötigt werden."
      },
      {
        q: "Wie kann ich Datenschutzrisiken bei der Freigabe von Inventar verringern?",
        a: "Teilen Sie den Inventarzugriff nur mit vertrauenswürdigen Personen, halten Sie Ihre MultiuserID privat, vermeiden Sie die öffentliche Freigabe von QR-Codes oder Inventarzugangsdetails und überprüfen Sie, welche Artikelnamen, Bemerkungen und Fotos Sie speichern."
      }
    ],
    
    finalCtaHeading: "Verfolgen Sie Ihre Lagerbestände mit mehr Datenschutz und Kontrolle",
    finalCtaBody: "QrSortable hilft Ihnen, Kartons, Wertsachen, Dokumente und Lagerbestände mit QR-Code-Etiketten und digitalen Inventareinträgen zu organisieren. Halten Sie physische Etiketten schlicht, verwalten Sie Artikeldetails innerhalb des App-Workflows und teilen Sie den Zugriff nur mit vertrauenswürdigen Personen.",
    finalCtaSubtext: "Scannen Sie Etiketten, organisieren Sie Datensätze und halten Sie sensible Lagerdetails aus dem Sichtfeld."
  },
  FR: {
    seoTitle: "App de suivi des stocks sécurisé | Enregistrements de stockage QR code privés",
    seoDesc: "Suivez les cartons de stockage, documents, objets de valeur et inventaires de déménagement avec QrSortable. Gardez les détails des articles dans un inventaire numérique et partagez l'accès uniquement avec des utilisateurs de confiance.",
    breadcrumbHome: "Accueil",
    breadcrumbFeatures: "Fonctionnalités",
    breadcrumbCurrent: "Suivi d'inventaire sécurisé",
    badge: "Priorité Confidentialité",
    heading: "Suivi d'inventaire sécurisé pour cartons, objets de valeur et stockage privé",
    subheading: "QrSortable vous aide à organiser les informations de stockage sensibles sans avoir à écrire chaque article à l'extérieur d'un carton. Scannez des étiquettes QR code, gérez des fiches de carton numériques, ajoutez des photos et des remarques, et partagez l'accès à l'inventaire uniquement avec des utilisateurs de confiance.",
    supportingText: "Votre inventaire de stockage peut inclure des documents personnels, de l'électronique, des outils, des objets de collection et des objets de valeur ménagers. QrSortable vous offre un moyen pratique de garder ces détails organisés dans un inventaire numérique au lieu de les exposer sur des étiquettes manuscrites.",
    ctaGetLabels: "Obtenir des étiquettes intelligentes",
    ctaStartWithoutAccount: "Démarrer sans compte",
    backToHome: "Retour à l'accueil",
    
    sec1Heading: "Qu'est-ce que le suivi d'inventaire sécurisé ?",
    sec1P1: "Le suivi d'inventaire sécurisé est un moyen soucieux de la confidentialité d'organiser des objets physiques avec des enregistrements numériques. Au lieu d'écrire des listes d'articles détaillées à l'extérieur des cartons de stockage, QrSortable vous permet de connecter une étiquette QR code ou code-barres à une fiche de carton numérique.",
    sec1P2: "Chaque fiche de carton peut inclure l'emplacement, la catégorie, les noms d'articles, les remarques et les photos. Cela vous aide à trouver les articles stockés tout en gardant les détails sensibles à l'intérieur de votre flux de travail d'inventaire plutôt qu'imprimés sur le carton.",
    sec1P3: "Le suivi d'inventaire sécurisé est utile pour les objets de valeur ménagers, les documents personnels, l'électronique, les outils, les fournitures professionnelles, les archives de bureau, les cartons de déménagement, les collections de loisirs et le stockage à long terme.",
    
    sec2Heading: "Comment QrSortable aide à protéger les détails de l'inventaire",
    sec2Step1Title: "Utilisez une étiquette QR code simple",
    sec2Step1Body: "Collez une étiquette QrSortable à l'extérieur du carton. Au lieu d'écrire chaque objet de valeur ou privé sur le carton, utilisez le QR code pour connecter le conteneur à sa fiche d'inventaire numérique.",
    sec2Step2Title: "Enregistrez les détails dans l'application",
    sec2Step2Body: "Ajoutez des noms d'articles, des remarques, des photos, la catégorie et l'emplacement dans QrSortable. Cela garde votre étiquette externe plus propre et réduit le besoin d'exposer les détails des articles sur le carton physique.",
    sec2Step3Title: "Recherchez sans ouvrir les cartons",
    sec2Step3Body: "Utilisez la recherche QrSortable pour trouver des articles par nom, remarque, emplacement ou catégorie. C'est utile lorsque vous devez localiser quelque chose sans ouvrir plusieurs conteneurs ni révéler le contenu du carton à d'autres personnes à proximité.",
    sec2Step4Title: "Partagez uniquement avec des utilisateurs de confiance",
    sec2Step4Body: "Si vous utilisez le partage multi-utilisateurs Premium, partagez votre MultiuserID uniquement avec des personnes de confiance. Toute personne disposant du MultiuserID correct peut synchroniser votre inventaire, il ne doit donc pas être partagé publiquement.",
    sec2Step5Title: "Gardez les étiquettes et les fiches à jour",
    sec2Step5Body: "Si une étiquette est endommagée ou remplacée, mettez à jour la fiche de carton associée. Utilisez des noms clairs, des remarques utiles et des photos si nécessaire, mais évitez de stocker des informations sensibles inutiles.",
    
    sec3Heading: "Pourquoi utiliser le suivi d'inventaire sécurisé ?",
    sec3Subtitle: "Pourquoi les utilisateurs soucieux de la confidentialité choisissent QrSortable pour leurs listes d'inventaire :",
    sec3Benefit1Title: "Évitez d'exposer des listes d'objets de valeur",
    sec3Benefit1Body: "Une étiquette manuscrite telle que « ordinateur portable, appareil photo, bijoux, documents fiscaux » peut en révéler trop. Avec QrSortable, l'extérieur du carton reste simple tandis que les détails des articles restent dans l'inventaire numérique.",
    sec3Benefit2Title: "Organisez les documents personnels plus soigneusement",
    sec3Benefit2Body: "Les cartons de documents contiennent souvent des dossiers financiers, juridiques, médicaux, scolaires ou ménagers. Le suivi d'inventaire sécurisé vous aide à identifier le carton sans écrire de détails sensibles directement à l'extérieur.",
    sec3Benefit3Title: "Utile pour le déménagement et le stockage temporaire",
    sec3Benefit3Body: "Lors d'un déménagement, les cartons peuvent être manipulés par des aides, des déménageurs, des garde-meubles ou d'autres personnes. Les étiquettes de stockage QR code vous aident à organiser le contenu tout en évitant les étiquettes publiques trop détaillées. Découvrez notre [Organisateur de cartons de déménagement](/features/moving-box-organizer) pour simplifier votre prochain déménagement.",
    sec3Benefit4Title: "Idéal pour les collectionneurs et les objets de valeur",
    sec3Benefit4Body: "Les collectionneurs peuvent souhaiter des photos, des notes et des listes d'articles pour des livres, des outils, de l'électronique, des articles de loisir ou de collection. QrSortable aide à garder ces enregistrements consultables sans rendre la liste complète visible sur le carton.",
    sec3Benefit5Title: "Accès partagé responsable",
    sec3Benefit5Body: "Un inventaire partagé peut être utile pour les familles et les équipes, mais l'accès doit être partagé avec précaution. Apprenez à gérer cela de manière sécurisée sur notre page [Gestion d'inventaire partagé](/features/shared-inventory-management), ou découvrez un aperçu de nos fonctionnalités d'[Aperçu d'inventaire par QR code](/features/qr-code-inventory-preview).",
    
    sec4Heading: "Exemples réels de suivi d'inventaire sécurisé",
    sec4Ex1Title: "Stockage de documents familiaux",
    sec4Ex1Body: "Une famille stocke des dossiers fiscaux, des documents scolaires, des papiers de garantie et des fichiers ménagers dans des cartons d'archives. Au lieu d'écrire des noms de documents détaillés sur chaque carton, la famille utilise des étiquettes QR code et garde les informations détaillées dans QrSortable.",
    sec4Ex2Title: "Électronique de valeur lors d'un déménagement",
    sec4Ex2Body: "Une personne qui déménage emballe des ordinateurs portables, du matériel photo, des câbles, des tablettes et des accessoires dans des cartons de déménagement. QrSortable aide à créer un inventaire consultable sans lister clairement l'électronique de valeur à l'extérieur de chaque carton.",
    sec4Ex3Title: "Cartons de stockage pour collectionneurs",
    sec4Ex3Body: "Un collectionneur organise des livres, des cartes à collectionner, des jeux, des outils ou des fournitures de loisir dans des conteneurs étiquetés. L'étiquette QR identifie le carton, tandis que les photos et les remarques sur les articles restent dans l'inventaire numérique pour une recherche plus facile et une meilleure confidentialité.",
    sec4Ex4Title: "Cartons d'archives pour petits bureaux",
    sec4Ex4Body: "Un petit bureau stocke des contrats, des factures, des documents d'employés et des dossiers archivés dans des cartons de stockage. QrSortable aide à organiser les cartons par emplacement et catégorie tout en gardant les détails des documents sensibles hors des étiquettes manuscrites.",
    sec4Ex5Title: "Stockage domestique partagé",
    sec4Ex5Body: "Un foyer partage l'accès aux débarras, placards, bacs de garage et cartons de sous-sol. Avec l'inventaire partagé, les utilisateurs de confiance peuvent trouver les articles, mais le MultiuserID ne doit être partagé qu'avec les personnes qui doivent accéder à l'inventaire.",
    sec4Ex6Title: "Outils et équipements de garage",
    sec4Ex6Body: "Un propriétaire stocke des outils, des pièces de rechange, des équipements et des accessoires dans des bacs de garage. QrSortable aide à suivre l'endroit où les objets sont stockés sans écrire une liste complète d'outils de valeur à l'extérieur du conteneur.",
    
    sec5Heading: "Qui compte sur le suivi d'inventaire sécurisé ?",
    sec5Card1Title: "Familles soucieuses de sécurité",
    sec5Card1Body: "Gardez le stockage domestique organisé tout en évitant les étiquettes trop détaillées sur les cartons contenant des documents privés, de l'électronique ou des objets de valeur.",
    sec5Card2Title: "Collectionneurs et amateurs",
    sec5Card2Body: "Cataloguez les articles stockés avec des photos, des notes et des emplacements tout en gardant l'extérieur des cartons de stockage simple et moins révélateur.",
    sec5Card3Title: "Personnes qui déménagent",
    sec5Card3Body: "Suivez les cartons de déménagement contenant de l'électronique, des documents, des outils ou des effets personnels sans écrire de détails sensibles directement sur le carton.",
    sec5Card4Title: "Petits bureaux",
    sec5Card4Body: "Organisez les cartons d'archives, les fournitures de bureau, les échantillons de produits, les dossiers et les équipements de rechange avec des enregistrements numériques plus clairs.",
    sec5Card5Title: "Propriétaires et locataires",
    sec5Card5Body: "Gérez les garages, sous-sols, greniers, placards, débarras et bacs en plastique avec des enregistrements d'inventaire QR code soucieux de la confidentialité.",
    sec5Card6Title: "Utilisateurs d'inventaire partagé",
    sec5Card6Body: "Partagez l'accès à l'inventaire uniquement avec des membres de la famille, des colocataires ou des membres de l'équipe de confiance qui doivent consulter et mettre à jour les mêmes fiches.",
    
    sec6Heading: "Suivi d'inventaire sécurisé vs Étiquettes de carton manuscrites",
    sec6Body1: "Les étiquettes manuscrites sont utiles, mais elles peuvent en révéler trop. Si un carton contient des documents, de l'électronique, des objets de collection ou des dossiers professionnels, écrire chaque détail à l'extérieur n'est peut-être pas idéal.",
    sec6Body2: "QrSortable aide à garder l'étiquette physique simple tout en stockant les détails des articles dans un inventaire numérique. Vous pouvez toujours utiliser des noms de carton pratiques, mais la liste complète des articles, les photos, les remarques et les détails de l'emplacement restent dans votre flux de travail d'inventaire.",
    sec6HandwrittenTitle: "Étiquettes de carton manuscrites",
    sec6HandwrittenPoints: [
      "Facile à créer",
      "Utile pour les noms de pièces de base",
      "Visible par quiconque voit le carton",
      "Espace limité pour les détails",
      "Peut révéler des noms d'articles sensibles",
      "Difficile à mettre à jour lorsque le contenu change",
      "Généralement pas de photos ni de fiches consultables"
    ],
    sec6QrSortableTitle: "Suivi d'inventaire sécurisé QrSortable",
    sec6QrSortablePoints: [
      "Connecte une étiquette QR ou code-barres à une fiche numérique",
      "Garde les listes d'articles détaillées dans le flux de travail de l'application",
      "Prend en charge les noms d'articles, remarques, photos, emplacements et catégories",
      "Aide à réduire les informations exposées sur les cartons physiques",
      "Prend en charge la recherche dans les fiches d'inventaire",
      "Fonctionne avec les cartons de déménagement, les bacs de stockage, les archives et les objets de valeur",
      "L'accès partagé doit être limité aux utilisateurs de confiance"
    ],
    
    sec7Heading: "Meilleures utilisations pour le suivi d'inventaire sécurisé",
    sec7Intro: "Utilisez le suivi d'inventaire sécurisé de QrSortable pour :",
    sec7Items: [
      "Documents personnels", "Dossiers fiscaux", "Papiers de garantie", "Dossiers juridiques",
      "Archives financières", "Électronique", "Appareils photo et accessoires", "Outils et pièces de rechange",
      "Objets de collection", "Livres et articles de loisir", "Cartons d'archives de bureau", "Dossiers de petites entreprises",
      "Échantillons de produits", "Cartons de déménagement", "Débarras", "Bacs de garage",
      "Stockage au sous-sol", "Cartons de grenier", "Organisation de placard", "Stockage à long terme",
      "Inventaire domestique partagé"
    ],
    
    sec8Heading: "Conseils de confidentialité pour une meilleure gestion des stocks",
    sec8Subtitle: "Pour un suivi d'inventaire plus sûr et plus respectueux de la confidentialité :",
    sec8Tips: [
      "Évitiez d'écrire les noms d'objets de valeur à l'extérieur des cartons.",
      "Utilisez des noms de carton simples lorsque la confidentialité est importante.",
      "Ajoutez des photos uniquement lorsqu'elles sont utiles.",
      "Évitez de stocker des informations personnelles sensibles inutiles dans les remarques.",
      "Utilisez des emplacements clairs mais prudents comme « Étagère de débarras A » au lieu de notes privées trop détaillées.",
      "Partagez votre MultiuserID uniquement avec des personnes de confiance.",
      "Ne publiez pas de liens d'inventaire, de QR codes ou de MultiuserID publiquement.",
      "Remplacez les étiquettes endommagées et mettez à jour la fiche de carton associée.",
      "Gardez l'application à jour.",
      "Examinez l'accès partagé lorsque les responsabilités de stockage changent."
    ],
    
    sec9Heading: "Conçu pour de réelles préoccupations de confidentialité",
    sec9Body1: "Un inventaire de stockage peut inclure plus que de simples articles ménagers ordinaires. Il peut inclure des documents, de l'électronique, des outils, des fournitures professionnelles, des objets de collection, des reçus, des numéros de série ou des photos.",
    sec9Body2: "QrSortable aide les utilisateurs à organiser ces enregistrements de manière plus réfléchie. Au lieu d'exposer tout le contenu sur l'étiquette physique, les utilisateurs peuvent scanner un QR code et gérer les détails dans un inventaire numérique.",
    
    sec10Heading: "Fonctionne avec le flux de travail d'inventaire de QrSortable",
    sec10Body1: "QrSortable associe des étiquettes QR code et code-barres physiques à des fiches de carton numériques. Après avoir scanné une étiquette, les utilisateurs peuvent enregistrer l'emplacement et la catégorie du carton, puis ajouter des articles avec des noms, des remarques et des photos.",
    sec10Body2: "Les utilisateurs peuvent effectuer des recherches ultérieures parmi les noms d'articles, les remarques, les emplacements des cartons et les catégories. Si la [Gestion d'inventaire partagé](/features/shared-inventory-management) Premium est utilisée, l'accès à l'inventaire ne doit être partagé qu'avec des personnes de confiance via le MultiuserID. Vous pouvez également imprimer des codes personnalisés avec notre [Générateur de QR codes pour le stockage](/features/qr-code-generator-storage).",
    
    faqHeading: "Foire aux questions",
    faqItems: [
      {
        q: "Qu'est-ce que le suivi d'inventaire sécurisé ?",
        a: "Le suivi d'inventaire sécurisé est un moyen soucieux de la confidentialité d'organiser des objets physiques avec des enregistrements numériques. QrSortable associe des étiquettes QR code ou code-barres à des fiches de carton afin que les utilisateurs puissent gérer les noms d'articles, les remarques, les photos, les emplacements et les catégories sans écrire chaque détail à l'extérieur du carton."
      },
      {
        q: "Mon inventaire est-il visible par quiconque voit le carton ?",
        a: "Une étiquette QR code aide à garder l'extérieur du carton simple, mais les utilisateurs doivent tout de même gérer le partage avec précaution. Ne partagez pas publiquement l'accès à l'inventaire, les QR codes ou votre MultiuserID si l'inventaire contient des informations privées."
      },
      {
        q: "N'importe qui disposant de mon MultiuserID peut-il accéder à mon inventaire partagé ?",
        a: "Toute personne disposant du MultiuserID correct peut synchroniser l'inventaire. Le manuel d'utilisation de QrSortable recommande de ne partager le MultiuserID qu'avec des personnes de confiance."
      },
      {
        q: "Dois-je écrire les noms des objets de valeur à l'extérieur d'un carton ?",
        a: "Si la confidentialité est importante, évitez d'écrire les noms détaillés des objets de valeur à l'extérieur d'un carton. Utilisez une étiquette simple et conservez les noms d'articles détaillés, les remarques et les photos dans QrSortable."
      },
      {
        q: "Puis-je utiliser QrSortable pour des documents importants ?",
        a: "Oui. QrSortable peut aider à organiser les cartons de documents par emplacement, catégorie et remarques. Évitez d'ajouter des informations sensibles inutiles aux remarques si ces informations ne sont pas nécessaires pour retrouver le carton plus tard."
      },
      {
        q: "Puis-je utiliser le suivi d'inventaire sécurisé lors d'un déménagement ?",
        a: "Oui. Lors d'un déménagement, le suivi d'inventaire sécurisé peut vous aider à organiser les cartons contenant de l'électronique, des documents, des outils et des effets personnels sans écrire chaque détail sensible sur le carton physique."
      },
      {
        q: "Les collectionneurs peuvent-ils utiliser QrSortable pour des objets de valeur ?",
        a: "Oui. Les collectionneurs peuvent utiliser QrSortable pour organiser les cartons avec des noms d'articles, des remarques, des photos et des emplacements de stockage. Cela permet de garder les fiches consultables tout en gardant les étiquettes physiques simples."
      },
      {
        q: "Les petites entreprises peuvent-elles utiliser le suivi d'inventaire sécurisé ?",
        a: "Oui. Les petites entreprises peuvent utiliser QrSortable pour les archives de bureau, les échantillons de produits, les équipements, les documents et les cartons de stockage. L'accès doit être partagé uniquement avec des membres de l'équipe de confiance."
      },
      {
        q: "QrSortable effectue-t-il des recherches dans les fiches d'inventaire privées ?",
        a: "La recherche QrSortable fonctionne sur les noms d'articles, les remarques, les emplacements des cartons et les catégories. Utilisez des noms clairs et des remarques soignées afin que les articles soient faciles à trouver sans ajouter de détails sensibles inutiles."
      },
      {
        q: "Que dois-je faire si une étiquette QR est endommagée ?",
        a: "Remplacez l'étiquette endommagée et mettez à jour la fiche de carton associée si nécessaire. Pour un meilleur balayage, appliquez les étiquettes sur des surfaces propres, sèches et planes, et évitez les plis, les coins, les reflets et les zones endommagées."
      },
      {
        q: "Quelles informations dois-je éviter d'ajouter aux remarques de l'inventaire ?",
        a: "Évitez d'ajouter des informations sensibles inutiles telles que des numéros de compte complets, des mots de passe, des numéros d'identification personnels ou des détails confidentiels qui ne sont pas nécessaires pour l'organisation du stockage."
      },
      {
        q: "Comment puis-je réduire les risques liés à la confidentialité lors du partage d'un inventaire ?",
        a: "Partagez l'accès à l'inventaire uniquement avec des personnes de confiance, gardez votre MultiuserID privé, évitez le partage public de QR codes ou de détails d'accès à l'inventaire, et examinez quels noms d'articles, remarques et photos vous stockez."
      }
    ],
    
    finalCtaHeading: "Suivez votre stockage avec plus de confidentialité et de contrôle",
    finalCtaBody: "QrSortable vous aide à organiser les cartons, les objets de valeur, les documents et les enregistrements de stockage avec des étiquettes QR code et des fiches d'inventaire numériques. Gardez les étiquettes physiques simples, gérez les détails des articles dans le flux de travail de l'application et partagez l'accès uniquement avec des utilisateurs de confiance.",
    finalCtaSubtext: "Scannez des étiquettes, organisez des fiches et gardez les détails de stockage sensibles hors de vue."
  },
  ES: {
    seoTitle: "App de seguimiento de inventario seguro | Registros de almacenamiento de códigos QR privados",
    seoDesc: "Realice el seguimiento de cajas de almacenamiento, documentos, objetos de valor e inventario de mudanzas con QrSortable. Mantenga los detalles de los artículos en un inventario digital y comparta el acceso solo con usuarios de confianza.",
    breadcrumbHome: "Inicio",
    breadcrumbFeatures: "Características",
    breadcrumbCurrent: "Seguimiento de inventario seguro",
    badge: "Privacidad Primero",
    heading: "Seguimiento de inventario seguro para cajas, objetos de valor y almacenamiento privado",
    subheading: "QrSortable le ayuda a organizar la información sensible de almacenamiento sin escribir cada artículo en el exterior de una caja. Escanee etiquetas de códigos QR, administre registros digitales de cajas, añada fotos y comentarios, y comparta el acceso al inventario solo con usuarios de confianza.",
    supportingText: "Su inventario de almacenamiento puede incluir documentos personales, dispositivos electrónicos, herramientas, artículos de colección y objetos de valor del hogar. QrSortable le ofrece una forma práctica de mantener esos detalles organizados en un inventario digital en lugar de exponerlos en etiquetas escritas a mano.",
    ctaGetLabels: "Obtenga etiquetas inteligentes ahora",
    ctaStartWithoutAccount: "Empezar sin cuenta",
    backToHome: "Volver al inicio",
    
    sec1Heading: "¿Qué es el seguimiento de inventario seguro?",
    sec1P1: "El seguimiento de inventario seguro es una forma respetuosa con la privacidad de organizar artículos físicos con registros digitales. En lugar de escribir listas detalladas de artículos en el exterior de las cajas de almacenamiento, QrSortable le permite conectar una etiqueta de código QR o código de barras a un registro digital de caja.",
    sec1P2: "Cada registro de caja puede incluir ubicación, categoría, nombres de artículos, comentarios y fotos. Esto le ayuda a encontrar artículos almacenados mientras mantiene los detalles sensibles dentro de su flujo de trabajo de inventario en lugar de impresos en la caja.",
    sec1P3: "El seguimiento de inventario seguro es útil para objetos de valor del hogar, documentos personales, dispositivos electrónicos, herramientas, suministros comerciales, archivos de oficina, cajas de mudanza, colecciones de pasatiempos y almacenamiento a largo plazo.",
    
    sec2Heading: "Cómo ayuda QrSortable a proteger los detalles del inventario",
    sec2Step1Title: "Use una etiqueta de código QR simple",
    sec2Step1Body: "Pegue una etiqueta QrSortable en el exterior de la caja. En lugar de escribir cada objeto de valor o privado en la caja, use el código QR para conectar el contenedor con su registro digital de inventario.",
    sec2Step2Title: "Guarde los detalles dentro de la aplicación",
    sec2Step2Body: "Añada nombres de artículos, comentarios, fotos, categoría y ubicación dentro de QrSortable. Esto mantiene su etiqueta externa más limpia y reduce la necesidad de exponer los detalles del artículo en la caja física.",
    sec2Step3Title: "Busque sin abrir las cajas",
    sec2Step3Body: "Use la búsqueda de QrSortable para encontrar artículos por nombre, comentario, ubicación o categoría. Esto es útil cuando necesita localizar algo sin abrir múltiples contenedores ni revelar el contenido de la caja a otras personas cercanas.",
    sec2Step4Title: "Comparta solo con usuarios de confianza",
    sec2Step4Body: "Si utiliza la función de uso compartido multiusuario Premium, comparta su MultiuserID solo con personas de su confianza. Cualquier persona con la MultiuserID correcta puede sincronizar su inventario, por lo que no debe compartirse públicamente.",
    sec2Step5Title: "Mantenga las etiquetas y los registros actualizados",
    sec2Step5Body: "Si una etiqueta se daña o se reemplaza, actualice el registro de caja correspondiente. Use nombres claros, comentarios útiles y fotos donde sea necesario, pero evite almacenar información sensible innecesaria.",
    
    sec3Heading: "¿Por qué utilizar el seguimiento de inventario seguro?",
    sec3Subtitle: "Por qué los usuarios centrados en la privacidad eligen QrSortable para sus listas de inventario:",
    sec3Benefit1Title: "Evite exponer listas de artículos de valor",
    sec3Benefit1Body: "Una etiqueta escrita a mano como \"computadora portátil, cámara, joyas, documentos fiscales\" puede revelar demasiado. Con QrSortable, el exterior de la caja puede permanecer simple mientras que los detalles del artículo permanecen en el inventario digital.",
    sec3Benefit2Title: "Organice documentos personales con mayor cuidado",
    sec3Benefit2Body: "Las cajas de documentos suelen contener registros financieros, legales, médicos, escolares o domésticos. El seguimiento de inventario seguro le ayuda a identificar la caja sin escribir detalles sensibles directamente en el exterior.",
    sec3Benefit3Title: "Útil para mudanzas y almacenamiento temporal",
    sec3Benefit3Body: "Durante una mudanza, las cajas pueden ser manipuladas por ayudantes, transportistas, instalaciones de almacenamiento u otras personas. Las etiquetas de almacenamiento con código QR le ayudan a organizar los contenidos mientras evita etiquetas públicas demasiado detalladas. Consulte nuestro [Organizador de cajas de mudanza](/features/moving-box-organizer) para simplificar su próxima mudanza.",
    sec3Benefit4Title: "Mejor para coleccionistas y artículos de valor",
    sec3Benefit4Body: "Es posible que los coleccionistas deseen fotos, notas y listas de artículos para libros, herramientas, dispositivos electrónicos, artículos de pasatiempo o coleccionables. QrSortable ayuda a mantener esos registros listos para buscar sin hacer que la lista completa sea visible en la caja.",
    sec3Benefit5Title: "Acceso compartido responsable",
    sec3Benefit5Body: "El inventario compartido puede ser útil para familias y equipos, pero el acceso debe compartirse con cuidado. Aprenda a administrar esto de manera segura en nuestra página de [Gestión de inventario compartido](/features/shared-inventory-management), o aprenda sobre nuestras funciones de [Vista previa de inventario con código QR](/features/qr-code-inventory-preview).",
    
    sec4Heading: "Ejemplos de la vida real de seguimiento de inventario seguro",
    sec4Ex1Title: "Almacenamiento de documentos familiares",
    sec4Ex1Body: "Una familia almacena registros fiscales, documentos escolares, papeles de garantía y archivos domésticos en cajas de archivo. En lugar de escribir nombres detallados de documentos en cada caja, la familia utiliza etiquetas de códigos QR y mantiene la información detallada dentro de QrSortable.",
    sec4Ex2Title: "Dispositivos electrónicos valiosos durante una mudanza",
    sec4Ex2Body: "Una persona que se muda empaqueta computadoras portátiles, equipos de cámara, cables, tabletas y accesorios en cajas de mudanza. QrSortable ayuda a crear un inventario en el que se pueden realizar búsquedas sin incluir claramente dispositivos electrónicos valiosos en el exterior de cada caja.",
    sec4Ex3Title: "Cajas de almacenamiento de coleccionistas",
    sec4Ex3Body: "Un coleccionista organiza libros, cartas coleccionables, juegos, herramientas o suministros de pasatiempo en contenedores etiquetados. La etiqueta QR identifica la caja, mientras que las fotos y los comentarios del artículo permanecen en el inventario digital para facilitar la búsqueda y una mejor privacidad.",
    sec4Ex4Title: "Cajas de archivo de oficinas pequeñas",
    sec4Ex4Body: "Una oficina pequeña almacena contratos, facturas, documentos de empleados y registros archivados en cajas de almacenamiento. QrSortable ayuda a organizar las cajas por ubicación y categoría mientras mantiene los detalles sensibles de los documentos fuera de las etiquetas escritas a mano.",
    sec4Ex5Title: "Almacenamiento doméstico compartido",
    sec4Ex5Body: "Un hogar comparte el acceso a salas de almacenamiento, armarios, contenedores de garaje y cajas de sótano. Con el inventario compartido, los usuarios de confianza pueden encontrar artículos, pero la MultiuserID solo debe compartirse con personas que deben acceder al inventario.",
    sec4Ex6Title: "Herramientas y equipos de garaje",
    sec4Ex6Body: "Un propietario almacena herramientas, repuestos, equipos y accesorios en contenedores de garaje. QrSortable ayuda a rastrear dónde se almacenan los artículos sin escribir una lista completa de herramientas valiosas en el exterior del contenedor.",
    
    sec5Heading: "¿Quién confía en el seguimiento de inventario seguro?",
    sec5Card1Title: "Familias conscientes de la seguridad",
    sec5Card1Body: "Mantenga organizado el almacenamiento doméstico mientras evita etiquetas demasiado detalladas en cajas que contienen documentos privados, dispositivos electrónicos u objetos de valor.",
    sec5Card2Title: "Coleccionistas y usuarios de pasatiempos",
    sec5Card2Body: "Catalogue los artículos almacenados con fotos, notas y ubicaciones mientras mantiene el exterior de las cajas de almacenamiento simple y menos revelador.",
    sec5Card3Title: "Personas que se mudan de casa",
    sec5Card3Body: "Realice el seguimiento de las cajas de mudanza que contienen dispositivos electrónicos, documentos, herramientas o artículos personales sin escribir detalles sensibles directamente en la caja.",
    sec5Card4Title: "Oficinas pequeñas",
    sec5Card4Body: "Organice cajas de archivo, suministros de oficina, muestras de productos, registros y equipos de repuesto con registros digitales más claros.",
    sec5Card5Title: "Propietarios e inquilinos",
    sec5Card5Body: "Administre garajes, sótanos, áticos, armarios, salas de almacenamiento y contenedores de plástico con registros de inventario de códigos QR respetuosos con la privacidad.",
    sec5Card6Title: "Usuarios de inventario compartido",
    sec5Card6Body: "Comparta el acceso al inventario solo con miembros de la familia, compañeros de cuarto o miembros del equipo de confianza que deben ver y actualizar los mismos registros.",
    
    sec6Heading: "Seguimiento de inventario seguro frente a etiquetas de cajas escritas a mano",
    sec6Body1: "Las etiquetas escritas a mano son útiles, pero pueden revelar demasiado. Si una caja contiene documentos, dispositivos electrónicos, artículos de colección o registros comerciales, escribir cada detalle en el exterior puede no ser lo ideal.",
    sec6Body2: "QrSortable ayuda a mantener la etiqueta física simple mientras almacena los detalles del artículo en un inventario digital. Aún puede usar nombres prácticos de cajas, pero la lista completa de artículos, fotos, comentarios y detalles de ubicación permanecen dentro de su flujo de trabajo de inventario.",
    sec6HandwrittenTitle: "Etiquetas de cajas escritas a mano",
    sec6HandwrittenPoints: [
      "Fácil de crear",
      "Útil para nombres de habitaciones básicos",
      "Visible para cualquiera que vea la caja",
      "Espacio limitado para detalles",
      "Puede revelar nombres de artículos sensibles",
      "Difícil de actualizar cuando cambian los contenidos",
      "Por lo general, sin fotos ni registros de búsqueda"
    ],
    sec6QrSortableTitle: "Seguimiento de inventario seguro de QrSortable",
    sec6QrSortablePoints: [
      "Conecta una etiqueta de código QR o de barras a un registro digital",
      "Mantiene listas detalladas de artículos dentro del flujo de trabajo de la aplicación",
      "Admite nombres de artículos, comentarios, fotos, ubicaciones y categorías",
      "Ayuda a reducir la información expuesta en cajas físicas",
      "Admite búsquedas en registros de inventario",
      "Funciona con cajas de mudanza, contenedores de almacenamiento, archivos y objetos de valor",
      "El acceso compartido debe limitarse a usuarios de confianza"
    ],
    
    sec7Heading: "Mejores usos para el seguimiento de inventario seguro",
    sec7Intro: "Use el seguimiento de inventario seguro de QrSortable para:",
    sec7Items: [
      "Documentos personales", "Registros fiscales", "Papeles de garantía", "Carpetas legales",
      "Archivos financieros", "Dispositivos electrónicos", "Cámaras y accesorios", "Herramientas y repuestos",
      "Artículos de colección", "Libros y artículos de pasatiempo", "Cajas de archivo de oficina", "Registros de pequeñas empresas",
      "Muestras de productos", "Cajas de mudanza", "Salas de almacenamiento", "Contenedores de garaje",
      "Almacenamiento en sótano", "Cajas de ático", "Organización de armarios", "Almacenamiento a largo plazo",
      "Inventario doméstico compartido"
    ],
    
    sec8Heading: "Consejos de privacidad para una mejor gestión del inventario",
    sec8Subtitle: "Para un seguimiento de inventario más seguro y respetuoso con la privacidad:",
    sec8Tips: [
      "Evite escribir nombres de artículos valiosos en el exterior de las cajas.",
      "Use nombres de cajas simples cuando la privacidad sea importante.",
      "Añada fotos solo cuando sean útiles.",
      "Evite almacenar información personal sensible innecesaria en los comentarios.",
      "Use ubicaciones claras pero cuidadosas como \"Estante de sala de almacenamiento A\" en lugar de notas privadas demasiado detalladas.",
      "Comparta su MultiuserID solo con personas de su confianza.",
      "No publique enlaces de inventario, códigos QR o la MultiuserID de forma pública.",
      "Reemplace las etiquetas dañadas y actualice el registro de caja correspondiente.",
      "Mantenga la aplicación actualizada.",
      "Revise el acceso compartido cuando cambien las responsabilidades de almacenamiento."
    ],
    
    sec9Heading: "Diseñado para preocupaciones reales de privacidad",
    sec9Body1: "Un inventario de almacenamiento puede incluir más que artículos domésticos ordinarios. Puede incluir documentos, dispositivos electrónicos, herramientas, suministros comerciales, artículos de colección, recibos, números de serie o fotos.",
    sec9Body2: "QrSortable ayuda a los usuarios a organizar estos registros de una manera más reflexiva. En lugar de exponer el contenido completo en la etiqueta física, los usuarios pueden escanear un código QR y administrar los detalles dentro de un inventario digital.",
    
    sec10Heading: "Funciona con el flujo de trabajo de inventario de QrSortable",
    sec10Body1: "QrSortable vincula etiquetas físicas de códigos QR y códigos de barras con registros digitales de cajas. Después de escanear una etiqueta, los usuarios pueden guardar la ubicación y categoría de la caja, luego añadir artículos con nombres, comentarios y fotos.",
    sec10Body2: "Los usuarios pueden buscar entre nombres de artículos, comentarios, ubicaciones de cajas y categorías más tarde. Si se utiliza la [Gestión de inventario compartido](/features/shared-inventory-management) Premium, el acceso al inventario debe compartirse solo con personas de confianza a través de la MultiuserID. También puede imprimir códigos personalizados con nuestro [Generador de códigos QR para almacenamiento](/features/qr-code-generator-storage).",
    
    faqHeading: "Preguntas frecuentes",
    faqItems: [
      {
        q: "¿Qué es el seguimiento de inventario seguro?",
        a: "El seguimiento de inventario seguro es una forma respetuosa con la privacidad de organizar artículos físicos con registros digitales. QrSortable conecta etiquetas de códigos QR o códigos de barras a registros de cajas para que los usuarios puedan administrar nombres de artículos, comentarios, fotos, ubicaciones y categorías sin escribir cada detalle en el exterior de la caja."
      },
      {
        q: "¿Mi inventario es visible para todos los que ven la caja?",
        a: "Una etiqueta de código QR ayuda a mantener el exterior de la caja simple, pero los usuarios aún deben administrar el uso compartido con cuidado. No comparta el acceso al inventario, los códigos QR o la MultiuserID de manera pública si el inventario contiene información privada."
      },
      {
        q: "¿Cualquiera que tenga mi MultiuserID puede acceder a mi inventario compartido?",
        a: "Cualquier persona con la MultiuserID correcta puede sincronizar el inventario. El manual de usuario de QrSortable recomienda compartir la MultiuserID solo con personas en las que confíe."
      },
      {
        q: "¿Debo escribir nombres de artículos valiosos en el exterior de una caja?",
        a: "Si la privacidad es importante, evite escribir nombres detallados de artículos valiosos en el exterior de una caja. Use una etiqueta simple y guarde los nombres detallados, comentarios y fotos de los artículos dentro de QrSortable."
      },
      {
        q: "¿Puedo usar QrSortable para documentos importantes?",
        a: "Sí. QrSortable puede ayudar a organizar las cajas de documentos por ubicación, categoría y comentarios. Evite agregar información confidencial innecesaria en los comentarios si la información no es necesaria para encontrar la caja más tarde."
      },
      {
        q: "¿Puedo usar el seguimiento de inventario seguro al mudarme?",
        a: "Sí. Durante una mudanza, el seguimiento de inventario seguro puede ayudarle a organizar cajas con dispositivos electrónicos, documentos, herramientas y artículos personales sin escribir cada detalle sensible en la caja física."
      },
      {
        q: "¿Pueden los coleccionistas usar QrSortable para artículos valiosos?",
        a: "Sí. Los coleccionistas pueden usar QrSortable para organizar cajas con nombres de artículos, comentarios, fotos y ubicaciones de almacenamiento. Esto puede ayudar a mantener los registros listos para buscar mientras mantiene las etiquetas físicas simples."
      },
      {
        q: "¿Pueden las pequeñas empresas utilizar el seguimiento de inventario seguro?",
        a: "Sí. Las pequeñas empresas pueden usar QrSortable para archivos de oficina, muestras de productos, equipos, documentos y cajas de almacenamiento. El acceso debe compartirse solo con miembros del equipo de confianza."
      },
      {
        q: "¿Busca QrSortable en registros de inventario privados?",
        a: "La búsqueda de QrSortable funciona en nombres de artículos, comentarios, ubicaciones de cajas y categorías. Use nombres claros y comentarios cuidadosos para que los artículos sean fáciles de encontrar sin agregar detalles sensibles innecesarios."
      },
      {
        q: "¿Qué debo hacer si una etiqueta QR se daña?",
        a: "Reemplace la etiqueta dañada y actualice el registro de caja correspondiente si es necesario. Para un mejor escaneo, aplique las etiquetas en superficies limpias, secas y planas, y evite pliegues, esquinas, reflejos y áreas dañadas."
      },
      {
        q: "¿Qué información debo evitar agregar a los comentarios de inventario?",
        a: "Evite agregar información confidencial innecesaria, como números de cuenta completos, contraseñas, números de identificación privados o detalles confidenciales que no sean necesarios para la organización del almacenamiento."
      },
      {
        q: "¿Cómo puedo reducir los riesgos de privacidad al compartir el inventario?",
        a: "Comparta el acceso al inventario solo con personas de confianza, mantenga su MultiuserID privada, evite compartir públicamente códigos QR o detalles de acceso al inventario, y revise qué nombres de artículos, comentarios y fotos almacena."
      }
    ],
    
    finalCtaHeading: "Realice el seguimiento de su almacenamiento con mayor privacidad y control",
    finalCtaBody: "QrSortable le ayuda a organizar cajas, objetos de valor, documentos y registros de almacenamiento con etiquetas de códigos QR y registros de inventario digitales. Mantenga las etiquetas físicas simples, administre los detalles del artículo dentro del flujo de trabajo de la aplicación y comparta el acceso solo con usuarios de confianza.",
    finalCtaSubtext: "Escanee etiquetas, organice registros y mantenga los detalles confidenciales de almacenamiento fuera de la vista."
  }
};
