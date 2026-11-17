export interface ExpertEntry {
  name: string;
  role: string;
  industry: string;
  industryKey: 'Events' | 'Warehousing' | 'Fulfillment' | 'Healthcare' | 'Tech';
  quote: string;
  takeaway: string;
}

export interface BoxVisibilityArticleLocale {
  seoTitle: string;
  seoDesc: string;
  seoKeywords: string;
  categoryLabel: string;
  kicker: string;
  title: string;
  metaByline: string;
  metaDate: string;
  metaReadTime: string;
  lead: string;
  figCaption: string;
  figAriaLabel: string;
  svgBoxLabel: string;
  svgItem1: string;
  svgItem2: string;
  svgItem3: string;
  svgItem4: string;
  shareTitle: string;
  bookmarkTitle: string;
  toastCopied: string;
  toastBookmarked: string;
  toastRemoved: string;
  tocTitle: string;
  toc: {
    problem: string;
    experts: string;
    numbers: string;
    tryIt: string;
    calc: string;
    theme: string;
    faq: string;
  };
  problem: {
    heading: string;
    p1: string;
    p2BeforeTravel: string;
    p2Travel: string;
    p2Between: string;
    p2Searching: string;
    p2AfterSearching: string;
    p2LinkText: string;
    p3BeforeLink: string;
    p3LinkText: string;
    p3AfterLink: string;
    p4BeforeBold: string;
    p4Bold: string;
  };
  experts: {
    heading: string;
    intro: string;
    allFilter: string;
    industries: Record<'Events' | 'Warehousing' | 'Fulfillment' | 'Healthcare' | 'Tech', string>;
    items: ExpertEntry[];
  };
  numbers: {
    heading: string;
    intro: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    bar1Label: string;
    bar2Label: string;
    bar3Label: string;
    footnote: string;
  };
  tryIt: {
    heading: string;
    intro: string;
    noLabelsBtn: string;
    withLabelsBtn: string;
    newRoundBtn: string;
    goalBefore: string;
    goalItem: string;
    goalAfter: string;
    openedLabel: string;
    boxPrefix: string;
    msgDefaultNoLabels: string;
    msgDefaultWithLabels: string;
    msgLucky: string;
    msgFoundBefore: string;
    msgFoundAfter: string;
    items: string[];
  };
  calc: {
    heading: string;
    boxesLabel: string;
    minutesLabel: string;
    hourlyLabel: string;
    savingsLabel: string;
    preset25: string;
    preset50: string;
    preset77: string;
    hoursPerYearSuffix: string;
    approxPrefix: string;
    workingTimeSuffix: string;
    disclaimer: string;
  };
  theme: {
    heading: string;
    intro: string;
    bullets: string[];
    pAfterBeforeBold: string;
    pAfterBold: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  cta: {
    heading: string;
    body: string;
    boldLine: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  sources: {
    label: string;
    textBefore: string;
    link1Text: string;
    link2Text: string;
  };
}

export const BOX_VISIBILITY_ARTICLE_TRANSLATIONS: Record<string, BoxVisibilityArticleLocale> = {
  EN: {
    seoTitle: "Know What’s Inside Every Box Before Opening It: What 8 Experts Say",
    seoDesc: "Eight professionals from events, warehousing, fulfillment and healthcare share how box-level visibility cuts picking time by 25%, receiving time by 77% and removes costly guesswork.",
    seoKeywords: "inventory visibility, box labeling, QR code inventory, warehouse picking time, QR storage labels, box content tracker, QrSortable",
    categoryLabel: "Inventory Visibility",
    kicker: "Inventory visibility · Expert roundup",
    title: "Know What’s Inside Every Box Before Opening It: What 8 Experts Say",
    metaByline: "By the QrSortable team",
    metaDate: "Updated November 17, 2026",
    metaReadTime: "6 min read",
    lead: "Opening a box takes seconds. Searching, verifying, moving things around and fixing mistakes takes hours. We asked professionals across industries one question, and their answers were remarkably consistent.",
    figCaption: "One scan replaces three opened cartons.",
    figAriaLabel: "Illustration of a storage box with a QR label being scanned by a phone, revealing its contents",
    svgBoxLabel: "BOX 014",
    svgItem1: "✔ Type 2 cables ×6",
    svgItem2: "✔ Backup mic",
    svgItem3: "✔ Shelf B3",
    svgItem4: "✔ Photo + notes",
    shareTitle: "Share article",
    bookmarkTitle: "Save article",
    toastCopied: "Link copied to clipboard!",
    toastBookmarked: "Article saved to bookmarks!",
    toastRemoved: "Removed from bookmarks",
    tocTitle: "In this article",
    toc: {
      problem: "The hidden cost of unlabeled boxes",
      experts: "What the experts said",
      numbers: "The results in numbers",
      tryIt: "Try it: find the connector",
      calc: "Calculate your own savings",
      theme: "The common theme",
      faq: "FAQ"
    },
    problem: {
      heading: "The hidden cost of unlabeled boxes",
      p1: "Whether you run a warehouse, pack event gear, stock a medical practice or ship e-commerce orders, you have probably lived this: you know the item exists, you just don’t know which box it’s in.",
      p2BeforeTravel: "The delay is rarely the few seconds it takes to lift a lid. It’s the searching, the double-checking, the shuffling and the mistakes that follow. Research on warehouse order picking backs this up: one academic breakdown puts ",
      p2Travel: "travel at about 55%",
      p2Between: " and ",
      p2Searching: "searching at about 15%",
      p2AfterSearching: " of picking time, and picking itself can eat up to ",
      p2LinkText: "60% of warehouse labor",
      p3BeforeLink: "Retail shows the same pattern. The Auburn University RFID Lab has long put average retail inventory accuracy at ",
      p3LinkText: "around 65%",
      p3AfterLink: ". When records and reality drift apart, people compensate by checking, and checking costs time.",
      p4BeforeBold: "So we asked professionals a simple question: ",
      p4Bold: "how much time could you save if you knew exactly what was inside every box before opening it?"
    },
    experts: {
      heading: "What the experts said",
      intro: "Filter by industry to see how the same problem looks from different angles.",
      allFilter: "All",
      industries: {
        Events: "Events",
        Warehousing: "Warehousing",
        Fulfillment: "Fulfillment",
        Healthcare: "Healthcare",
        Tech: "Tech & startups"
      },
      items: [
        {
          name: "Callum Gracie",
          role: "DJ",
          industry: "Events",
          industryKey: "Events",
          quote: "Knowing what is inside every box could save a lot of setup time. The main delay comes from opening several cases, moving them twice and then finding that a cable, microphone or backup item is in another box.",
          takeaway: "Label each case with its contents and where it goes at the venue."
        },
        {
          name: "Girish Songirkar",
          role: "Delivery manager, enterprise software and supply chain systems",
          industry: "Warehousing",
          industryKey: "Warehousing",
          quote: "Efficiency is reached only when the digital twin is so precise that opening a box becomes a mere formality.",
          takeaway: "Trusted records turn a reactive facility into a predictive one."
        },
        {
          name: "Jake Wardle",
          role: "Founder, EV Cable Hub",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "We fixed it by labelling every bin and box with a clear code and contents, so the picker reads the shelf instead of digging through it.",
          takeaway: "Average pick time fell by about 25%, with fewer errors and returns. “Visibility is the cheapest efficiency you will ever buy.”"
        },
        {
          name: "Joe Spisak",
          role: "CEO, Fulfill.com",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "Receiving time dropped to 11 hours per week. Same volume, 77% less time.",
          takeaway: "A client that spent nearly 47 hours a week opening and verifying unmarked boxes fixed it with supplier labels."
        },
        {
          name: "Charles Liu",
          role: "Founder, Cubic Promote",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "Better box-level visibility would also reduce the risk of mixing similar orders, overlooking part of a shipment or opening cartons unnecessarily.",
          takeaway: "With custom products and fixed event dates, every saved minute counts."
        },
        {
          name: "Ydette Florendo",
          role: "A-S Medication Solutions",
          industry: "Healthcare",
          industryKey: "Healthcare",
          quote: "I’d put the savings at several hours per week for a mid-size practice, easy.",
          takeaway: "In healthcare, “knowing the contents before you open a box isn’t a luxury.” Less searching means more time for patients."
        },
        {
          name: "Kruno Sulić",
          role: "Founder, Cliprise",
          industry: "Tech & startups",
          industryKey: "Tech",
          quote: "A well-labeled or searchable box system could cut item-finding time by at least 50%.",
          takeaway: "Searchable beats stackable."
        },
        {
          name: "Runbo Li",
          role: "CEO, Magic Hour",
          industry: "Tech & startups",
          industryKey: "Tech",
          quote: "The boxes you haven’t opened are costing you more than the time it takes to open them. They’re costing you clarity.",
          takeaway: "He calls it “cognitive inventory cost.”"
        }
      ]
    },
    numbers: {
      heading: "The results in numbers",
      intro: "Three experts put hard figures on the change. Bars animate as you scroll.",
      stat1Val: "25%",
      stat1Label: "shorter average pick time",
      stat2Val: "77%",
      stat2Label: "less weekly receiving time",
      stat3Val: "50%+",
      stat3Label: "faster item finding",
      bar1Label: "EV Cable Hub",
      bar2Label: "Cliprise (min.)",
      bar3Label: "Fulfill.com client",
      footnote: "Time saved, as reported by each expert. Different measures, same direction. The Fulfill.com figure comes from 47 weekly hours of box verification falling to 11 once suppliers added clear external labels."
    },
    tryIt: {
      heading: "Try it: find the connector",
      intro: "Jake Wardle’s pickers used to open three cartons before finding the right part. See how it feels, then flip on labels.",
      noLabelsBtn: "No labels",
      withLabelsBtn: "With labels",
      newRoundBtn: "New round",
      goalBefore: "Goal: find the ",
      goalItem: "Type 2 connector",
      goalAfter: ".",
      openedLabel: "Boxes opened:",
      boxPrefix: "Box",
      msgDefaultNoLabels: "Click a box to open it.",
      msgDefaultWithLabels: "Labels make the right box obvious. Just read the shelf.",
      msgLucky: "Lucky! Can you repeat it?",
      msgFoundBefore: "Found it after ",
      msgFoundAfter: " boxes. With labels it takes one glance.",
      items: ["Type 2 connector", "Charger", "Adapter", "Tape", "Fuses", "Screws"]
    },
    calc: {
      heading: "Calculate your own savings",
      boxesLabel: "Boxes you search through per day",
      minutesLabel: "Minutes lost per search",
      hourlyLabel: "Hourly cost of your time (€)",
      savingsLabel: "Expected time saved",
      preset25: "25% (Jake)",
      preset50: "50% (Kruno)",
      preset77: "77% (Joe)",
      hoursPerYearSuffix: "hours a year",
      approxPrefix: "≈ €",
      workingTimeSuffix: "of working time",
      disclaimer: "Illustrative estimate based on 220 working days per year. Your numbers will vary."
    },
    theme: {
      heading: "The common theme across every industry",
      intro: "The experts work in completely different worlds, yet they named the same benefits:",
      bullets: [
        "Faster retrieval of items",
        "Less searching and guesswork",
        "Fewer mistakes and returns",
        "Better inventory accuracy",
        "Lower operational costs",
        "Higher productivity",
        "Less stress and decision fatigue"
      ],
      pAfterBeforeBold: "Runbo Li’s “cognitive inventory cost” explains why this matters beyond the clock. Every unidentified box is a small open question, and hundreds of open questions add up to friction. ",
      pAfterBold: "The faster you know what’s inside a box, the faster you can decide and get work done."
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How much time can box labeling save?",
          a: "Experts here reported a 25% cut in average pick time, a 77% drop in weekly receiving time (47 hours to 11), and at least 50% faster item finding with a searchable box system. Results depend on how disorganized things were to begin with."
        },
        {
          q: "Why does searching for items cost so much?",
          a: "In warehouse order picking, academic breakdowns put travel at roughly 55% and searching at about 15% of picking time. Removing guesswork shortens both."
        },
        {
          q: "What should a box label include?",
          a: "A short code, the contents, and where the box belongs. Callum Gracie labels cases with contents and venue destination; Jake Wardle uses a clear code plus contents on every bin and box. A QR code can add photos, notes and live inventory details without cluttering the label."
        },
        {
          q: "Why use QR codes instead of a handwritten list?",
          a: "A QR code points to details you can update at any time, including photos, notes and location, so the label never goes stale when the contents change."
        },
        {
          q: "How accurate is the average retailer’s inventory?",
          a: "The Auburn University RFID Lab has reported around 65%, which is why many teams re-verify instead of trusting the record."
        }
      ]
    },
    cta: {
      heading: "Bring visibility to every box",
      body: "That’s why we built QrSortable. Attach a QR code to a box, bin, equipment case or asset, and anyone can scan it to see contents, notes, photos, locations and inventory details.",
      boldLine: "Know what’s inside before you open the box.",
      primaryBtn: "Explore QrSortable Labels",
      secondaryBtn: "Get the App"
    },
    sources: {
      label: "Sources:",
      textBefore: "Expert responses submitted through a Connectively outreach request conducted by QrSortable; quotes used with attribution to the contributors and their organizations. Supporting research: ",
      link1Text: "order-picking time breakdown (arXiv)",
      link2Text: "retail inventory accuracy, citing the Auburn RFID Lab (Zebra)"
    }
  },
  DE: {
    seoTitle: "Wissen, was in jeder Kiste ist, bevor man sie öffnet: Was 8 Experten sagen",
    seoDesc: "Acht Fachleute aus Events, Lagerhaltung, Fulfillment und Gesundheitswesen zeigen, wie Kisten-Transparenz Kommissionierzeit um 25 % und Wareneingangszeit um 77 % senkt.",
    seoKeywords: "Bestandstransparenz, Kistenbeschriftung, QR-Code-Inventar, Kommissionierzeit, QR-Lageretiketten, QrSortable",
    categoryLabel: "Bestandstransparenz",
    kicker: "Bestandstransparenz · Expertenrunde",
    title: "Wissen, was in jeder Kiste ist, bevor man sie öffnet: Was 8 Experten sagen",
    metaByline: "Vom QrSortable-Team",
    metaDate: "Aktualisiert am 17. November 2026",
    metaReadTime: "6 Min. Lesezeit",
    lead: "Eine Kiste zu öffnen dauert Sekunden. Suchen, Prüfen, Umräumen und das Beheben von Fehlern kostet Stunden. Wir haben Fachleute aus verschiedenen Branchen eine Frage gestellt – ihre Antworten waren bemerkenswert einheitlich.",
    figCaption: "Ein Scan ersetzt drei geöffnete Kartons.",
    figAriaLabel: "Illustration einer Lagerkiste mit QR-Etikett, das per Smartphone gescannt wird und den Inhalt anzeigt",
    svgBoxLabel: "BOX 014",
    svgItem1: "✔ Typ-2-Kabel ×6",
    svgItem2: "✔ Ersatzmikrofon",
    svgItem3: "✔ Regal B3",
    svgItem4: "✔ Foto + Notizen",
    shareTitle: "Artikel teilen",
    bookmarkTitle: "Artikel speichern",
    toastCopied: "Link in die Zwischenablage kopiert!",
    toastBookmarked: "Artikel zu Lesezeichen hinzugefügt!",
    toastRemoved: "Aus Lesezeichen entfernt",
    tocTitle: "In diesem Artikel",
    toc: {
      problem: "Die versteckten Kosten unbeschrifteter Kisten",
      experts: "Was die Experten sagten",
      numbers: "Die Ergebnisse in Zahlen",
      tryIt: "Selbst testen: Stecker finden",
      calc: "Eigene Ersparnis berechnen",
      theme: "Der gemeinsame Nenner",
      faq: "Häufige Fragen"
    },
    problem: {
      heading: "Die versteckten Kosten unbeschrifteter Kisten",
      p1: "Ob Sie ein Lager leiten, Event-Equipment packen, eine Arztpraxis ausstatten oder E-Commerce-Bestellungen versenden – Sie kennen dieses Gefühl: Sie wissen, dass der Artikel existiert, aber nicht, in welcher Kiste er liegt.",
      p2BeforeTravel: "Die Verzögerung entsteht selten durch die paar Sekunden zum Öffnen des Deckels. Es sind das Suchen, Nachprüfen, Umstapeln und die Folgefehler. Studien zur Kommissionierung im Lager bestätigen das: Eine wissenschaftliche Aufschlüsselung beziffert ",
      p2Travel: "Laufwege auf etwa 55 %",
      p2Between: " und ",
      p2Searching: "Suchen auf etwa 15 %",
      p2AfterSearching: " der Kommissionierzeit – und die Kommissionierung selbst kann bis zu ",
      p2LinkText: "60 % der Lagerarbeit",
      p3BeforeLink: "Im Einzelhandel zeigt sich dasselbe Muster. Das Auburn University RFID Lab beziffert die durchschnittliche Bestandsgenauigkeit im Handel seit Langem auf ",
      p3LinkText: "rund 65 %",
      p3AfterLink: ". Wenn Systemdaten und Realität auseinanderdriften, gleichen Menschen das durch Nachsehen aus – und Nachsehen kostet Zeit.",
      p4BeforeBold: "Deshalb stellten wir Profis eine einfache Frage: ",
      p4Bold: "Wie viel Zeit könnten Sie sparen, wenn Sie vor dem Öffnen genau wüssten, was in jeder Kiste steckt?"
    },
    experts: {
      heading: "Was die Experten sagten",
      intro: "Nach Branche filtern, um dasselbe Problem aus verschiedenen Perspektiven zu sehen.",
      allFilter: "Alle",
      industries: {
        Events: "Events",
        Warehousing: "Lagerhaltung",
        Fulfillment: "Fulfillment",
        Healthcare: "Gesundheitswesen",
        Tech: "Tech & Startups"
      },
      items: [
        {
          name: "Callum Gracie",
          role: "DJ",
          industry: "Events",
          industryKey: "Events",
          quote: "Zu wissen, was in jeder Kiste ist, spart enorm viel Aufbauzeit. Die größte Verzögerung entsteht, wenn man mehrere Cases öffnet, sie zweimal bewegt und dann merkt, dass ein Kabel, Mikrofon oder Ersatzteil in einer anderen Kiste liegt.",
          takeaway: "Beschriften Sie jedes Case mit seinem Inhalt und dem Einsatzort am Veranstaltungsort."
        },
        {
          name: "Girish Songirkar",
          role: "Delivery Manager, Enterprise-Software & Supply-Chain-Systeme",
          industry: "Lagerhaltung",
          industryKey: "Warehousing",
          quote: "Effizienz wird erst dann erreicht, wenn der digitale Zwilling so präzise ist, dass das Öffnen einer Kiste zur reinen Formsache wird.",
          takeaway: "Verlässliche Bestandsdaten verwandeln ein reaktives Lager in ein vorausschauendes."
        },
        {
          name: "Jake Wardle",
          role: "Gründer, EV Cable Hub",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "Wir haben es gelöst, indem wir jeden Behälter und Karton klar mit Code und Inhalt beschriftet haben, sodass der Kommissionierer das Regal liest, statt darin zu wühlen.",
          takeaway: "Die durchschnittliche Pickzeit sank um rund 25 %, bei weniger Fehlern und Retouren. „Transparenz ist die günstigste Effizienz, die man je kaufen wird.“"
        },
        {
          name: "Joe Spisak",
          role: "CEO, Fulfill.com",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "Die Wareneingangszeit sank auf 11 Stunden pro Woche. Gleiches Volumen, 77 % weniger Zeit.",
          takeaway: "Ein Kunde, der fast 47 Stunden pro Woche mit dem Öffnen und Prüfen unmarkierter Kartons verbrachte, löste dies mit klaren Lieferanten-Etiketten."
        },
        {
          name: "Charles Liu",
          role: "Gründer, Cubic Promote",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "Bessere Transparenz auf Kistenebene verringert zudem das Risiko, ähnliche Aufträge zu verwechseln, Teillieferungen zu übersehen oder Kartons unnötig zu öffnen.",
          takeaway: "Bei Sonderanfertigungen und festen Event-Terminen zählt jede gesparte Minute."
        },
        {
          name: "Ydette Florendo",
          role: "A-S Medication Solutions",
          industry: "Gesundheitswesen",
          industryKey: "Healthcare",
          quote: "Für eine mittelgroße Praxis schätze ich die Ersparnis problemlos auf mehrere Stunden pro Woche.",
          takeaway: "Im Gesundheitswesen gilt: „Den Inhalt zu kennen, bevor man eine Box öffnet, ist kein Luxus.“ Weniger Suchen bedeutet mehr Zeit für Patienten."
        },
        {
          name: "Kruno Sulić",
          role: "Gründer, Cliprise",
          industry: "Tech & Startups",
          industryKey: "Tech",
          quote: "Ein gut beschriftetes oder durchsuchbares Kistensystem kann die Suchzeit um mindestens 50 % verkürzen.",
          takeaway: "Durchsuchbar schlägt stapelbar."
        },
        {
          name: "Runbo Li",
          role: "CEO, Magic Hour",
          industry: "Tech & Startups",
          industryKey: "Tech",
          quote: "Die Kisten, die Sie noch nicht geöffnet haben, kosten Sie mehr als nur die Zeit zum Öffnen. Sie kosten Sie Klarheit.",
          takeaway: "Er nennt das „kognitive Bestandskosten“."
        }
      ]
    },
    numbers: {
      heading: "Die Ergebnisse in Zahlen",
      intro: "Drei Experten bezifferten den Effekt konkret. Die Balken animieren beim Scrollen.",
      stat1Val: "25%",
      stat1Label: "kürzere Pickzeit im Schnitt",
      stat2Val: "77%",
      stat2Label: "weniger Wareneingangszeit/Woche",
      stat3Val: "50%+",
      stat3Label: "schnelleres Finden",
      bar1Label: "EV Cable Hub",
      bar2Label: "Cliprise (mind.)",
      bar3Label: "Fulfill.com-Kunde",
      footnote: "Gemeldete Zeitersparnis je Experte. Unterschiedliche Kennzahlen, gleiche Richtung. Der Wert von Fulfill.com stammt aus dem Rückgang von 47 auf 11 Wochenstunden nach Einführung klarer Außenetiketten."
    },
    tryIt: {
      heading: "Selbst testen: Finde den Stecker",
      intro: "Jake Wardles Kommissionierer mussten früher drei Kartons öffnen, um das richtige Teil zu finden. Probieren Sie es selbst aus und schalten Sie dann die Etiketten ein.",
      noLabelsBtn: "Ohne Etiketten",
      withLabelsBtn: "Mit Etiketten",
      newRoundBtn: "Neue Runde",
      goalBefore: "Ziel: Finde den ",
      goalItem: "Typ-2-Stecker",
      goalAfter: ".",
      openedLabel: "Geöffnete Kisten:",
      boxPrefix: "Kiste",
      msgDefaultNoLabels: "Klicken Sie auf eine Kiste, um sie zu öffnen.",
      msgDefaultWithLabels: "Etiketten machen die richtige Kiste sofort erkennbar.",
      msgLucky: "Glückstreffer! Klappt das beim nächsten Mal auch?",
      msgFoundBefore: "Nach ",
      msgFoundAfter: " Kisten gefunden. Mit Etiketten genügt ein Blick.",
      items: ["Typ-2-Stecker", "Ladegerät", "Adapter", "Klebeband", "Sicherungen", "Schrauben"]
    },
    calc: {
      heading: "Eigene Ersparnis berechnen",
      boxesLabel: "Durchsuchte Kisten pro Tag",
      minutesLabel: "Verlorene Minuten pro Suche",
      hourlyLabel: "Stundensatz Ihrer Zeit (€)",
      savingsLabel: "Erwartete Zeitersparnis",
      preset25: "25% (Jake)",
      preset50: "50% (Kruno)",
      preset77: "77% (Joe)",
      hoursPerYearSuffix: "Stunden pro Jahr",
      approxPrefix: "≈ €",
      workingTimeSuffix: "an Arbeitszeit",
      disclaimer: "Beispielrechnung auf Basis von 220 Arbeitstagen pro Jahr. Ihre tatsächlichen Werte können abweichen."
    },
    theme: {
      heading: "Der gemeinsame Nenner über alle Branchen hinweg",
      intro: "Die Experten arbeiten in völlig unterschiedlichen Branchen, nannten aber dieselben Vorteile:",
      bullets: [
        "Schnelleres Wiederfinden von Artikeln",
        "Weniger Suchen und Rätselraten",
        "Weniger Fehler und Retouren",
        "Höhere Bestandsgenauigkeit",
        "Geringere Betriebskosten",
        "Höhere Produktivität",
        "Weniger Stress und Entscheidungsmüdigkeit"
      ],
      pAfterBeforeBold: "Runbo Lis Begriff der „kognitiven Bestandskosten“ erklärt, warum dies über reine Minuten hinausgeht. Jede unbeschriftete Kiste ist eine offene Frage – und hunderte offene Fragen summieren sich zu Reibungsverlusten. ",
      pAfterBold: "Je schneller Sie wissen, was in einer Kiste ist, desto schneller können Sie entscheiden und arbeiten."
    },
    faq: {
      heading: "Häufig gestellte Fragen",
      items: [
        {
          q: "Wie viel Zeit lässt sich durch Kistenbeschriftung sparen?",
          a: "Die befragten Experten berichteten von 25 % kürzeren Pickzeiten, 77 % weniger wöchentlicher Wareneingangszeit (von 47 auf 11 Stunden) und mindestens 50 % schnellerem Auffinden von Artikeln durch ein durchsuchbares System."
        },
        {
          q: "Warum kostet das Suchen so viel Zeit?",
          a: "Bei der Kommissionierung entfallen laut wissenschaftlichen Studien rund 55 % der Zeit auf Wege und etwa 15 % auf das Suchen. Weniger Rätselraten verkürzt beides."
        },
        {
          q: "Was sollte auf einem Kistenetikett stehen?",
          a: "Ein kurzer Code, der Inhalt und der Ziel- bzw. Lagerort. Ein QR-Code ergänzt dies um Fotos, Notizen und Live-Bestandsdaten, ohne das Etikett zu überfrachten."
        },
        {
          q: "Warum QR-Codes statt einer handschriftlichen Liste?",
          a: "Ein QR-Code verweist auf digitale Informationen, die jederzeit aktualisiert werden können – inklusive Fotos, Notizen und Standort –, sodass das Etikett bei Inhaltsänderungen nie veraltet."
        },
        {
          q: "Wie genau ist der durchschnittliche Bestand im Einzelhandel?",
          a: "Das Auburn University RFID Lab gibt die durchschnittliche Bestandsgenauigkeit mit rund 65 % an – weshalb viele Teams lieber manuell nachprüfen."
        }
      ]
    },
    cta: {
      heading: "Mehr Transparenz für jede Kiste",
      body: "Genau dafür haben wir QrSortable entwickelt. Bringen Sie einen QR-Code an Kisten, Behältern, Transportcases oder Geräten an – jeder Scan zeigt sofort Inhalte, Notizen, Fotos und Lagerorte.",
      boldLine: "Wissen, was drin ist, bevor Sie die Kiste öffnen.",
      primaryBtn: "QrSortable-Etiketten entdecken",
      secondaryBtn: "App herunterladen"
    },
    sources: {
      label: "Quellen:",
      textBefore: "Expertenantworten aus einer Connectively-Befragung von QrSortable; Zitate mit Namens- und Organisationsnennung. Begleitende Studien: ",
      link1Text: "Aufschlüsselung der Kommissionierzeit (arXiv)",
      link2Text: "Bestandsgenauigkeit im Einzelhandel, Verweis auf Auburn RFID Lab (Zebra)"
    }
  },
  FR: {
    seoTitle: "Savoir ce qu'il y a dans chaque boîte avant de l'ouvrir : ce que disent 8 experts",
    seoDesc: "Huit professionnels de l'événementiel, de la logistique, du e-commerce et de la santé expliquent comment la visibilité par carton réduit de 25 % le temps de préparation et de 77 % la réception.",
    seoKeywords: "visibilité des stocks, étiquetage de cartons, inventaire QR code, préparation de commandes, étiquettes QR rangement, QrSortable",
    categoryLabel: "Visibilité des stocks",
    kicker: "Visibilité des stocks · Parole d'experts",
    title: "Savoir ce qu'il y a dans chaque boîte avant de l'ouvrir : ce que disent 8 experts",
    metaByline: "Par l'équipe QrSortable",
    metaDate: "Mis à jour le 17 novembre 2026",
    metaReadTime: "6 min de lecture",
    lead: "Ouvrir une boîte prend quelques secondes. Chercher, vérifier, déplacer des cartons et corriger des erreurs prend des heures. Nous avons posé une question simple à des professionnels de plusieurs secteurs, et leurs réponses sont étonnamment unanimes.",
    figCaption: "Un scan remplace trois cartons ouverts.",
    figAriaLabel: "Illustration d'une boîte de rangement avec une étiquette QR scannée par un téléphone révélant son contenu",
    svgBoxLabel: "BOÎTE 014",
    svgItem1: "✔ Câbles Type 2 ×6",
    svgItem2: "✔ Micro de secours",
    svgItem3: "✔ Étagère B3",
    svgItem4: "✔ Photo + notes",
    shareTitle: "Partager l'article",
    bookmarkTitle: "Enregistrer l'article",
    toastCopied: "Lien copié dans le presse-papiers !",
    toastBookmarked: "Article enregistré dans les favoris !",
    toastRemoved: "Retiré des favoris",
    tocTitle: "Dans cet article",
    toc: {
      problem: "Le coût caché des boîtes sans étiquette",
      experts: "Ce qu'ont dit les experts",
      numbers: "Les résultats en chiffres",
      tryIt: "À vous d'essayer : trouver le connecteur",
      calc: "Calculez vos propres économies",
      theme: "Le point commun entre secteurs",
      faq: "FAQ"
    },
    problem: {
      heading: "Le coût caché des boîtes sans étiquette",
      p1: "Que vous gériez un entrepôt, du matériel événementiel, un cabinet médical ou des expéditions e-commerce, vous avez déjà vécu cette situation : vous savez que l'objet existe, mais vous ne savez pas dans quelle boîte il se trouve.",
      p2BeforeTravel: "Le retard vient rarement des quelques secondes nécessaires pour soulever un couvercle. Il vient de la recherche, des vérifications, de la manutention et des erreurs qui s'ensuivent. Les recherches sur la préparation de commandes confirment ce constat : une étude académique estime ",
      p2Travel: "les déplacements à environ 55 %",
      p2Between: " et ",
      p2Searching: "la recherche à environ 15 %",
      p2AfterSearching: " du temps de picking, lequel peut représenter jusqu'à ",
      p2LinkText: "60 % du travail en entrepôt",
      p3BeforeLink: "Le commerce de détail montre la même tendance. Le laboratoire RFID de l'Université d'Auburn évalue depuis longtemps la précision moyenne des stocks à ",
      p3LinkText: "environ 65 %",
      p3AfterLink: ". Lorsque les registres s'écartent de la réalité, les équipes vérifient manuellement — et vérifier coûte du temps.",
      p4BeforeBold: "Nous avons donc posé une question simple aux professionnels : ",
      p4Bold: "combien de temps gagneriez-vous si vous saviez exactement ce que contient chaque boîte avant de l'ouvrir ?"
    },
    experts: {
      heading: "Ce qu'ont dit les experts",
      intro: "Filtrez par secteur pour découvrir comment le même problème se manifeste selon les métiers.",
      allFilter: "Tous",
      industries: {
        Events: "Événementiel",
        Warehousing: "Entrepôt",
        Fulfillment: "Logistique",
        Healthcare: "Santé",
        Tech: "Tech & startups"
      },
      items: [
        {
          name: "Callum Gracie",
          role: "DJ",
          industry: "Événementiel",
          industryKey: "Events",
          quote: "Savoir ce qu'il y a dans chaque caisse ferait gagner énormément de temps d'installation. Le principal retard vient de l'ouverture de plusieurs flight-cases, qu'on déplace deux fois avant de réaliser qu'un câble, un micro ou un secours est dans une autre caisse.",
          takeaway: "Étiquetez chaque caisse avec son contenu et son emplacement sur le lieu de l'événement."
        },
        {
          name: "Girish Songirkar",
          role: "Delivery Manager, logiciels d'entreprise et supply chain",
          industry: "Entrepôt",
          industryKey: "Warehousing",
          quote: "L'efficacité n'est atteinte que lorsque le jumeau numérique est si précis que l'ouverture d'un carton devient une simple formalité.",
          takeaway: "Des données fiables transforment un site réactif en un site prédictif."
        },
        {
          name: "Jake Wardle",
          role: "Fondateur, EV Cable Hub",
          industry: "Logistique",
          industryKey: "Fulfillment",
          quote: "Nous avons réglé le problème en étiquetant chaque bac et chaque carton avec un code clair et son contenu, afin que le préparateur lise le rayon au lieu de fouiller.",
          takeaway: "Le temps moyen de préparation a baissé d'environ 25 %, avec moins d'erreurs et de retours. « La visibilité est l'efficacité la moins chère que vous achèterez jamais. »"
        },
        {
          name: "Joe Spisak",
          role: "PDG, Fulfill.com",
          industry: "Logistique",
          industryKey: "Fulfillment",
          quote: "Le temps de réception est tombé à 11 heures par semaine. Même volume, 77 % de temps en moins.",
          takeaway: "Un client qui passait près de 47 heures par semaine à ouvrir et vérifier des cartons non marqués a résolu le problème grâce aux étiquettes fournisseurs."
        },
        {
          name: "Charles Liu",
          role: "Fondateur, Cubic Promote",
          industry: "Logistique",
          industryKey: "Fulfillment",
          quote: "Une meilleure visibilité au niveau des cartons réduirait aussi le risque de mélanger des commandes similaires, d'oublier une partie d'un envoi ou d'ouvrir des cartons inutilement.",
          takeaway: "Avec des produits personnalisés et des dates d'événements fixes, chaque minute compte."
        },
        {
          name: "Ydette Florendo",
          role: "A-S Medication Solutions",
          industry: "Santé",
          industryKey: "Healthcare",
          quote: "J'estimerais facilement le gain à plusieurs heures par semaine pour un cabinet de taille moyenne.",
          takeaway: "Dans la santé, « connaître le contenu avant d'ouvrir une boîte n'est pas un luxe. » Moins de recherche, c'est plus de temps pour les patients."
        },
        {
          name: "Kruno Sulić",
          role: "Fondateur, Cliprise",
          industry: "Tech & startups",
          industryKey: "Tech",
          quote: "Un système de boîtes bien étiqueté ou consultable par recherche peut réduire le temps de recherche d'au moins 50 %.",
          takeaway: "Chercher bat empiler."
        },
        {
          name: "Runbo Li",
          role: "PDG, Magic Hour",
          industry: "Tech & startups",
          industryKey: "Tech",
          quote: "Les boîtes que vous n'avez pas ouvertes vous coûtent plus que le temps de les ouvrir. Elles vous coûtent en clarté.",
          takeaway: "Il appelle cela le « coût cognitif de l'inventaire »."
        }
      ]
    },
    numbers: {
      heading: "Les résultats en chiffres",
      intro: "Trois experts ont chiffré l'amélioration. Les barres s'animent au défilement.",
      stat1Val: "25%",
      stat1Label: "de temps de picking en moins",
      stat2Val: "77%",
      stat2Label: "de temps de réception hebdo en moins",
      stat3Val: "50%+",
      stat3Label: "plus rapide pour trouver un objet",
      bar1Label: "EV Cable Hub",
      bar2Label: "Cliprise (min.)",
      bar3Label: "Client Fulfill.com",
      footnote: "Temps gagné selon chaque expert. Des mesures différentes, une même tendance. Le chiffre de Fulfill.com provient de 47 h hebdomadaires de vérification tombées à 11 h après ajout d'étiquettes externes claires."
    },
    tryIt: {
      heading: "À vous d'essayer : trouvez le connecteur",
      intro: "Les préparateurs de Jake Wardle ouvraient parfois trois cartons avant de trouver la bonne pièce. Essayez sans étiquettes, puis activez-les.",
      noLabelsBtn: "Sans étiquettes",
      withLabelsBtn: "Avec étiquettes",
      newRoundBtn: "Nouvelle manche",
      goalBefore: "Objectif : trouver le ",
      goalItem: "connecteur Type 2",
      goalAfter: ".",
      openedLabel: "Boîtes ouvertes :",
      boxPrefix: "Boîte",
      msgDefaultNoLabels: "Cliquez sur une boîte pour l'ouvrir.",
      msgDefaultWithLabels: "Les étiquettes rendent la bonne boîte évidente.",
      msgLucky: "Coup de chance ! Pourrez-vous recommencer ?",
      msgFoundBefore: "Trouvé après ",
      msgFoundAfter: " boîtes. Avec des étiquettes, un seul coup d'œil suffit.",
      items: ["Connecteur Type 2", "Chargeur", "Adaptateur", "Ruban adhésif", "Fusibles", "Vis"]
    },
    calc: {
      heading: "Calculez vos propres économies",
      boxesLabel: "Boîtes fouillées par jour",
      minutesLabel: "Minutes perdues par recherche",
      hourlyLabel: "Coût horaire de votre temps (€)",
      savingsLabel: "Gain de temps attendu",
      preset25: "25% (Jake)",
      preset50: "50% (Kruno)",
      preset77: "77% (Joe)",
      hoursPerYearSuffix: "heures par an",
      approxPrefix: "≈ €",
      workingTimeSuffix: "de temps de travail",
      disclaimer: "Estimation illustrative basée sur 220 jours ouvrés par an. Vos chiffres peuvent varier."
    },
    theme: {
      heading: "Le point commun entre tous les secteurs",
      intro: "Ces experts évoluent dans des univers très différents, mais citent tous les mêmes bénéfices :",
      bullets: [
        "Récupération plus rapide des objets",
        "Moins de recherches et d'hésitations",
        "Moins d'erreurs et de retours",
        "Meilleure précision des stocks",
        "Coûts opérationnels réduits",
        "Productivité accrue",
        "Moins de stress et de fatigue décisionnelle"
      ],
      pAfterBeforeBold: "Le « coût cognitif de l'inventaire » évoqué par Runbo Li explique pourquoi l'enjeu dépasse le chronomètre. Chaque boîte non identifiée est une question ouverte, et des centaines de questions ouvertes créent de la friction. ",
      pAfterBold: "Plus vite vous savez ce qu'il y a dans une boîte, plus vite vous décidez et avancez."
    },
    faq: {
      heading: "Questions fréquentes",
      items: [
        {
          q: "Combien de temps l'étiquetage des boîtes fait-il gagner ?",
          a: "Les experts interrogés ont constaté 25 % de temps de picking en moins, une baisse de 77 % du temps de réception hebdomadaire (de 47 h à 11 h) et un repérage au moins 50 % plus rapide grâce à un système consultable."
        },
        {
          q: "Pourquoi la recherche d'articles coûte-t-elle si cher ?",
          a: "En préparation de commandes, les études estiment les déplacements à environ 55 % et la recherche à 15 % du temps total. Supprimer les conjectures réduit les deux."
        },
        {
          q: "Que doit contenir une étiquette de boîte ?",
          a: "Un code court, le contenu et l'emplacement ou la destination. Un QR code permet d'y associer photos, notes et inventaire en direct sans surcharger l'étiquette."
        },
        {
          q: "Pourquoi utiliser des QR codes plutôt qu'une liste manuscrite ?",
          a: "Un QR code pointe vers des informations modifiables à tout moment — photos, notes, emplacement — pour que l'étiquette ne devienne jamais obsolète."
        },
        {
          q: "Quelle est la précision moyenne des stocks en magasin ?",
          a: "Le laboratoire RFID d'Auburn l'estime à environ 65 %, ce qui pousse de nombreuses équipes à revérifier manuellement."
        }
      ]
    },
    cta: {
      heading: "Apportez de la visibilité à chaque boîte",
      body: "C'est pour cela que nous avons créé QrSortable. Collez un QR code sur une boîte, un bac, une caisse de matériel ou un équipement, et chacun peut le scanner pour voir le contenu, les notes, les photos et l'emplacement.",
      boldLine: "Sachez ce qu'il y a dedans avant même d'ouvrir la boîte.",
      primaryBtn: "Découvrir les étiquettes QrSortable",
      secondaryBtn: "Télécharger l'app"
    },
    sources: {
      label: "Sources :",
      textBefore: "Réponses d'experts recueillies via une enquête Connectively menée par QrSortable ; citations reproduites avec attribution aux contributeurs et à leurs entreprises. Études citées : ",
      link1Text: "répartition du temps de picking (arXiv)",
      link2Text: "précision des stocks en retail, citant l'Auburn RFID Lab (Zebra)"
    }
  },
  ES: {
    seoTitle: "Saber qué hay dentro de cada caja antes de abrirla: lo que dicen 8 expertos",
    seoDesc: "Ocho profesionales de eventos, almacenes, fulfillment y salud explican cómo la visibilidad por caja reduce un 25 % el picking, un 77 % la recepción y elimina suposiciones.",
    seoKeywords: "visibilidad de inventario, etiquetado de cajas, inventario QR, tiempo de picking, etiquetas QR almacenamiento, QrSortable",
    categoryLabel: "Visibilidad de inventario",
    kicker: "Visibilidad de inventario · Opinión experta",
    title: "Saber qué hay dentro de cada caja antes de abrirla: lo que dicen 8 expertos",
    metaByline: "Por el equipo de QrSortable",
    metaDate: "Actualizado el 17 de noviembre de 2026",
    metaReadTime: "6 min de lectura",
    lead: "Abrir una caja toma segundos. Buscar, verificar, mover cosas y corregir errores toma horas. Hicimos una sola pregunta a profesionales de distintas industrias y sus respuestas coincidieron notablemente.",
    figCaption: "Un escaneo sustituye tres cajas abiertas.",
    figAriaLabel: "Ilustración de una caja de almacenamiento con etiqueta QR escaneada por un teléfono mostrando su contenido",
    svgBoxLabel: "CAJA 014",
    svgItem1: "✔ Cables Tipo 2 ×6",
    svgItem2: "✔ Micrófono repuesto",
    svgItem3: "✔ Estante B3",
    svgItem4: "✔ Foto + notas",
    shareTitle: "Compartir artículo",
    bookmarkTitle: "Guardar artículo",
    toastCopied: "¡Enlace copiado al portapapeles!",
    toastBookmarked: "¡Artículo guardado en marcadores!",
    toastRemoved: "Eliminado de marcadores",
    tocTitle: "En este artículo",
    toc: {
      problem: "El coste oculto de las cajas sin etiqueta",
      experts: "Lo que dijeron los expertos",
      numbers: "Los resultados en cifras",
      tryIt: "Pruébalo: encuentra el conector",
      calc: "Calcula tu propio ahorro",
      theme: "El patrón común",
      faq: "Preguntas frecuentes"
    },
    problem: {
      heading: "El coste oculto de las cajas sin etiqueta",
      p1: "Ya sea que gestiones un almacén, prepares equipo para eventos, abastezcas una clínica o envíes pedidos de e-commerce, seguro lo has vivido: sabes que el artículo existe, pero no en qué caja está.",
      p2BeforeTravel: "El retraso rara vez son los segundos que cuesta levantar una tapa. Son la búsqueda, la doble comprobación, el reordenamiento y los errores posteriores. Estudios sobre preparación de pedidos lo respaldan: un desglose académico sitúa ",
      p2Travel: "los desplazamientos en torno al 55 %",
      p2Between: " y ",
      p2Searching: "la búsqueda en torno al 15 %",
      p2AfterSearching: " del tiempo de picking, y el picking puede consumir hasta ",
      p2LinkText: "el 60 % del trabajo en almacén",
      p3BeforeLink: "El comercio minorista muestra el mismo patrón. El Auburn University RFID Lab sitúa la precisión media del inventario en ",
      p3LinkText: "alrededor del 65 %",
      p3AfterLink: ". Cuando los registros y la realidad se separan, la gente compensa comprobando, y comprobar cuesta tiempo.",
      p4BeforeBold: "Así que hicimos una pregunta sencilla a los profesionales: ",
      p4Bold: "¿cuánto tiempo podrías ahorrar si supieras exactamente qué hay dentro de cada caja antes de abrirla?"
    },
    experts: {
      heading: "Lo que dijeron los expertos",
      intro: "Filtra por sector para ver cómo se presenta el mismo problema desde distintos ángulos.",
      allFilter: "Todos",
      industries: {
        Events: "Eventos",
        Warehousing: "Almacén",
        Fulfillment: "Fulfillment",
        Healthcare: "Salud",
        Tech: "Tecnología"
      },
      items: [
        {
          name: "Callum Gracie",
          role: "DJ",
          industry: "Eventos",
          industryKey: "Events",
          quote: "Saber qué hay dentro de cada caja ahorraría muchísimo tiempo de montaje. El mayor retraso viene de abrir varias maletas, moverlas dos veces y descubrir que un cable, micrófono o repuesto está en otra caja.",
          takeaway: "Etiqueta cada caja con su contenido y su destino dentro del recinto."
        },
        {
          name: "Girish Songirkar",
          role: "Delivery Manager, software empresarial y cadena de suministro",
          industry: "Almacén",
          industryKey: "Warehousing",
          quote: "La eficiencia solo se alcanza cuando el gemelo digital es tan preciso que abrir una caja se convierte en una mera formalidad.",
          takeaway: "Los registros fiables convierten una instalación reactiva en una predictiva."
        },
        {
          name: "Jake Wardle",
          role: "Fundador, EV Cable Hub",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "Lo solucionamos etiquetando cada contenedor y caja con un código claro y su contenido, para que el operario lea la estantería en lugar de rebuscar en ella.",
          takeaway: "El tiempo medio de picking cayó alrededor de un 25 %, con menos errores y devoluciones. «La visibilidad es la eficiencia más barata que comprarás jamás.»"
        },
        {
          name: "Joe Spisak",
          role: "CEO, Fulfill.com",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "El tiempo de recepción bajó a 11 horas por semana. Mismo volumen, 77 % menos tiempo.",
          takeaway: "Un cliente que dedicaba casi 47 horas semanales a abrir y verificar cajas sin marcar lo resolvió con etiquetas externas de proveedor."
        },
        {
          name: "Charles Liu",
          role: "Fundador, Cubic Promote",
          industry: "Fulfillment",
          industryKey: "Fulfillment",
          quote: "Una mejor visibilidad por caja también reduciría el riesgo de mezclar pedidos similares, pasar por alto parte de un envío o abrir cartones innecesariamente.",
          takeaway: "Con productos personalizados y fechas fijas de eventos, cada minuto ahorrado cuenta."
        },
        {
          name: "Ydette Florendo",
          role: "A-S Medication Solutions",
          industry: "Salud",
          industryKey: "Healthcare",
          quote: "Calcularía el ahorro en varias horas por semana para una clínica mediana, sin duda.",
          takeaway: "En salud, «saber el contenido antes de abrir una caja no es un lujo.» Buscar menos significa más tiempo para los pacientes."
        },
        {
          name: "Kruno Sulić",
          role: "Fundador, Cliprise",
          industry: "Tecnología",
          industryKey: "Tech",
          quote: "Un sistema de cajas bien etiquetado o con búsqueda podría reducir el tiempo para encontrar artículos al menos en un 50 %.",
          takeaway: "Buscable vence a apilable."
        },
        {
          name: "Runbo Li",
          role: "CEO, Magic Hour",
          industry: "Tecnología",
          industryKey: "Tech",
          quote: "Las cajas que no has abierto te cuestan más que el tiempo que lleva abrirlas. Te cuestan claridad.",
          takeaway: "Él lo llama «coste cognitivo del inventario»."
        }
      ]
    },
    numbers: {
      heading: "Los resultados en cifras",
      intro: "Tres expertos pusieron cifras concretas al cambio. Las barras se animan al desplazarte.",
      stat1Val: "25%",
      stat1Label: "menos tiempo medio de picking",
      stat2Val: "77%",
      stat2Label: "menos tiempo semanal en recepción",
      stat3Val: "50%+",
      stat3Label: "más rápido al encontrar artículos",
      bar1Label: "EV Cable Hub",
      bar2Label: "Cliprise (mín.)",
      bar3Label: "Cliente de Fulfill.com",
      footnote: "Tiempo ahorrado reportado por cada experto. Métricas distintas, misma dirección. El dato de Fulfill.com proviene de pasar de 47 horas semanales de verificación a 11 tras añadir etiquetas externas claras."
    },
    tryIt: {
      heading: "Pruébalo: encuentra el conector",
      intro: "Los operarios de Jake Wardle solían abrir tres cajas antes de encontrar la pieza correcta. Comprueba cómo se siente y luego activa las etiquetas.",
      noLabelsBtn: "Sin etiquetas",
      withLabelsBtn: "Con etiquetas",
      newRoundBtn: "Nueva ronda",
      goalBefore: "Objetivo: encontrar el ",
      goalItem: "conector Tipo 2",
      goalAfter: ".",
      openedLabel: "Cajas abiertas:",
      boxPrefix: "Caja",
      msgDefaultNoLabels: "Haz clic en una caja para abrirla.",
      msgDefaultWithLabels: "Las etiquetas hacen obvia la caja correcta.",
      msgLucky: "¡Suerte! ¿Puedes repetirlo?",
      msgFoundBefore: "Encontrado tras ",
      msgFoundAfter: " cajas. Con etiquetas basta un vistazo.",
      items: ["Conector Tipo 2", "Cargador", "Adaptador", "Cinta", "Fusibles", "Tornillos"]
    },
    calc: {
      heading: "Calcula tu propio ahorro",
      boxesLabel: "Cajas en las que buscas al día",
      minutesLabel: "Minutos perdidos por búsqueda",
      hourlyLabel: "Coste por hora de tu tiempo (€)",
      savingsLabel: "Ahorro de tiempo esperado",
      preset25: "25% (Jake)",
      preset50: "50% (Kruno)",
      preset77: "77% (Joe)",
      hoursPerYearSuffix: "horas al año",
      approxPrefix: "≈ €",
      workingTimeSuffix: "de tiempo de trabajo",
      disclaimer: "Estimación ilustrativa basada en 220 días laborables al año. Tus cifras pueden variar."
    },
    theme: {
      heading: "El patrón común en todas las industrias",
      intro: "Los expertos trabajan en mundos completamente distintos, pero mencionaron los mismos beneficios:",
      bullets: [
        "Recuperación más rápida de artículos",
        "Menos búsquedas y suposiciones",
        "Menos errores y devoluciones",
        "Mayor precisión del inventario",
        "Menores costes operativos",
        "Mayor productividad",
        "Menos estrés y fatiga de decisión"
      ],
      pAfterBeforeBold: "El «coste cognitivo del inventario» de Runbo Li explica por qué importa más allá del reloj. Cada caja sin identificar es una pregunta abierta, y cientos de preguntas abiertas generan fricción. ",
      pAfterBold: "Cuanto antes sepas qué hay dentro de una caja, antes decides y avanzas."
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuánto tiempo puede ahorrar el etiquetado de cajas?",
          a: "Los expertos reportaron un 25 % menos en tiempo medio de picking, un 77 % menos en recepción semanal (de 47 horas a 11) y al menos un 50 % más de rapidez al encontrar artículos."
        },
        {
          q: "¿Por qué buscar artículos cuesta tanto?",
          a: "En preparación de pedidos, los estudios estiman los desplazamientos en un 55 % y la búsqueda en un 15 % del tiempo. Eliminar las conjeturas acorta ambos."
        },
        {
          q: "¿Qué debe incluir la etiqueta de una caja?",
          a: "Un código corto, el contenido y su ubicación o destino. Un código QR permite añadir fotos, notas e inventario en vivo sin saturar la etiqueta."
        },
        {
          q: "¿Por qué usar códigos QR en vez de una lista escrita a mano?",
          a: "Un código QR enlaza a datos que puedes actualizar en cualquier momento, con fotos, notas y ubicación, para que la etiqueta nunca quede obsoleta."
        },
        {
          q: "¿Qué tan preciso es el inventario promedio de un comercio?",
          a: "El Auburn University RFID Lab ha reportado alrededor de un 65 %, razón por la cual muchos equipos vuelven a verificar manualmente."
        }
      ]
    },
    cta: {
      heading: "Da visibilidad a cada caja",
      body: "Por eso creamos QrSortable. Coloca un código QR en una caja, contenedor, maleta de equipo o activo, y cualquiera podrá escanearlo para ver contenido, notas, fotos y ubicaciones.",
      boldLine: "Sabe qué hay dentro antes de abrir la caja.",
      primaryBtn: "Explorar etiquetas QrSortable",
      secondaryBtn: "Descargar la app"
    },
    sources: {
      label: "Fuentes:",
      textBefore: "Respuestas de expertos enviadas mediante una solicitud en Connectively realizada por QrSortable; citas usadas con atribución a los colaboradores y sus organizaciones. Investigación de apoyo: ",
      link1Text: "desglose del tiempo de picking (arXiv)",
      link2Text: "precisión de inventario minorista, citando al Auburn RFID Lab (Zebra)"
    }
  }
};
