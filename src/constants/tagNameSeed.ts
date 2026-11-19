type LangTuple = [string, string, string, string]; // [EN, DE, FR, ES]

const HOUSEHOLD: LangTuple[] = [
  ['Kitchen', 'Küche', 'Cuisine', 'Cocina'],
  ['Bedroom', 'Schlafzimmer', 'Chambre', 'Dormitorio'],
  ['Living room', 'Wohnzimmer', 'Salon', 'Salón'],
  ['Bathroom', 'Badezimmer', 'Salle de bain', 'Baño'],
  ["Children's room", 'Kinderzimmer', "Chambre d'enfant", 'Habitación infantil'],
  ['Garage', 'Garage', 'Garage', 'Garaje'],
  ['Basement', 'Keller', 'Cave', 'Sótano'],
  ['Attic', 'Dachboden', 'Grenier', 'Ático'],
  ['Office', 'Büro', 'Bureau', 'Oficina'],
  ['Pantry', 'Vorratskammer', 'Garde-manger', 'Despensa'],
  ['Garden', 'Garten', 'Jardin', 'Jardín'],
  ['Dining room', 'Esszimmer', 'Salle à manger', 'Comedor'],
  ['Hallway', 'Flur', 'Couloir', 'Pasillo'],
  ['Guest room', 'Gästezimmer', "Chambre d'amis", 'Habitación de invitados'],
  ['Nursery', 'Babyzimmer', 'Chambre de bébé', 'Habitación del bebé'],
  ['Playroom', 'Spielzimmer', 'Salle de jeux', 'Sala de juegos'],
  ['Laundry room', 'Waschküche', 'Buanderie', 'Lavadero'],
  ['Storage room', 'Abstellraum', 'Débarras', 'Trastero'],
  ['Utility room', 'Hauswirtschaftsraum', 'Arrière-cuisine', 'Cuarto de servicio'],
  ['Balcony', 'Balkon', 'Balcon', 'Balcón'],
  ['Terrace', 'Terrasse', 'Terrasse', 'Terraza'],
  ['Shed', 'Gartenhaus', 'Abri de jardin', 'Cobertizo'],
  ['Workshop', 'Werkstatt', 'Atelier', 'Taller'],
  ['Wardrobe', 'Kleiderschrank', 'Penderie', 'Armario'],
  ['Toilet', 'WC', 'Toilettes', 'Aseo'],
  ['Entrance', 'Eingang', 'Entrée', 'Entrada'],
  ['Under the stairs', 'Unter der Treppe', "Sous l'escalier", 'Bajo la escalera'],
  ['Boiler room', 'Heizungsraum', 'Chaufferie', 'Cuarto de calderas'],
  ['Carport', 'Carport', 'Abri voiture', 'Cochera'],
  ['Greenhouse', 'Gewächshaus', 'Serre', 'Invernadero'],
  ['Holiday home', 'Ferienhaus', 'Maison de vacances', 'Casa de vacaciones'],
  ['Hobby room', 'Hobbyraum', 'Salle de loisirs', 'Sala de aficiones'],
  ['Home office', 'Homeoffice', 'Bureau à domicile', 'Oficina en casa'],
  ['Master bedroom', 'Elternschlafzimmer', 'Chambre parentale', 'Dormitorio principal'],
  ['Suitcase', 'Koffer', 'Valise', 'Maleta'],
  ['Toolbox', 'Werkzeugkasten', 'Boîte à outils', 'Caja de herramientas'],
  ['Tools', 'Werkzeug', 'Outils', 'Herramientas'],
  ['Power tools', 'Elektrowerkzeug', 'Outils électriques', 'Herramientas eléctricas'],
  ['Hand tools', 'Handwerkzeug', 'Outils à main', 'Herramientas manuales'],
  ['Screws and nails', 'Schrauben und Nägel', 'Vis et clous', 'Tornillos y clavos'],
  ['Hardware', 'Eisenwaren', 'Quincaillerie', 'Ferretería'],
  ['Paint', 'Farben', 'Peinture', 'Pintura'],
  ['Wallpaper', 'Tapeten', 'Papier peint', 'Papel pintado'],
  ['Light bulbs', 'Glühbirnen', 'Ampoules', 'Bombillas'],
  ['Lamps', 'Lampen', 'Lampes', 'Lámparas'],
  ['Batteries', 'Batterien', 'Piles', 'Pilas'],
  ['Cables', 'Kabel', 'Câbles', 'Cables'],
  ['Extension cords', 'Verlängerungskabel', 'Rallonges', 'Alargadores'],
  ['Electronics', 'Elektronik', 'Électronique', 'Electrónica'],
  ['Computer accessories', 'Computerzubehör', 'Accessoires informatiques', 'Accesorios de informática'],
  ['Printer supplies', 'Druckerzubehör', "Fournitures d'imprimante", 'Suministros de impresora'],
  ['Old phones', 'Alte Handys', 'Anciens téléphones', 'Teléfonos antiguos'],
  ['Video games', 'Videospiele', 'Jeux vidéo', 'Videojuegos'],
  ['DVDs and CDs', 'DVDs und CDs', 'DVD et CD', 'DVD y CD'],
  ['Vinyl records', 'Schallplatten', 'Disques vinyles', 'Discos de vinilo'],
  ['Books', 'Bücher', 'Livres', 'Libros'],
  ['Magazines', 'Zeitschriften', 'Magazines', 'Revistas'],
  ['Toys', 'Spielzeug', 'Jouets', 'Juguetes'],
  ['Board games', 'Brettspiele', 'Jeux de société', 'Juegos de mesa'],
  ['Puzzles', 'Puzzles', 'Puzzles', 'Puzles'],
  ['Baby items', 'Babysachen', 'Affaires de bébé', 'Cosas de bebé'],
  ['Baby clothes', 'Babykleidung', 'Vêtements de bébé', 'Ropa de bebé'],
  ['Kids clothes', 'Kinderkleidung', "Vêtements d'enfant", 'Ropa infantil'],
  ['Clothes', 'Kleidung', 'Vêtements', 'Ropa'],
  ['Winter clothes', 'Winterkleidung', "Vêtements d'hiver", 'Ropa de invierno'],
  ['Summer clothes', 'Sommerkleidung', "Vêtements d'été", 'Ropa de verano'],
  ['Shoes', 'Schuhe', 'Chaussures', 'Zapatos'],
  ['Jackets', 'Jacken', 'Vestes', 'Chaquetas'],
  ['Hats and scarves', 'Mützen und Schals', 'Bonnets et écharpes', 'Gorros y bufandas'],
  ['Handbags', 'Handtaschen', 'Sacs à main', 'Bolsos'],
  ['Jewelry', 'Schmuck', 'Bijoux', 'Joyas'],
  ['Cosmetics', 'Kosmetik', 'Cosmétiques', 'Cosméticos'],
  ['Bedding', 'Bettwäsche', 'Linge de lit', 'Ropa de cama'],
  ['Towels', 'Handtücher', 'Serviettes', 'Toallas'],
  ['Blankets', 'Decken', 'Couvertures', 'Mantas'],
  ['Pillows', 'Kopfkissen', 'Oreillers', 'Almohadas'],
  ['Curtains', 'Vorhänge', 'Rideaux', 'Cortinas'],
  ['Rugs', 'Teppiche', 'Tapis', 'Alfombras'],
  ['Table linen', 'Tischwäsche', 'Linge de table', 'Mantelería'],
  ['Cutlery', 'Besteck', 'Couverts', 'Cubiertos'],
  ['Plates and bowls', 'Teller und Schüsseln', 'Assiettes et bols', 'Platos y cuencos'],
  ['Glasses and cups', 'Gläser und Tassen', 'Verres et tasses', 'Vasos y tazas'],
  ['Pots and pans', 'Töpfe und Pfannen', 'Casseroles et poêles', 'Ollas y sartenes'],
  ['Baking supplies', 'Backzubehör', 'Matériel de pâtisserie', 'Utensilios de repostería'],
  ['Small appliances', 'Kleingeräte', 'Petits appareils', 'Pequeños electrodomésticos'],
  ['Spices', 'Gewürze', 'Épices', 'Especias'],
  ['Canned food', 'Konserven', 'Conserves', 'Conservas'],
  ['Dry food', 'Trockenvorräte', 'Produits secs', 'Alimentos secos'],
  ['Drinks', 'Getränke', 'Boissons', 'Bebidas'],
  ['Decorations', 'Dekoration', 'Décoration', 'Decoración'],
  ['Candles', 'Kerzen', 'Bougies', 'Velas'],
  ['Vases', 'Vasen', 'Vases', 'Jarrones'],
  ['Picture frames', 'Bilderrahmen', 'Cadres photo', 'Marcos de fotos'],
  ['Photos and memories', 'Fotos und Erinnerungen', 'Photos et souvenirs', 'Fotos y recuerdos'],
  ['Souvenirs', 'Souvenirs', 'Souvenirs', 'Souvenirs'],
  ['Documents', 'Dokumente', 'Documents', 'Documentos'],
  ['Important documents', 'Wichtige Dokumente', 'Documents importants', 'Documentos importantes'],
  ['Receipts', 'Belege', 'Reçus', 'Recibos'],
  ['Warranties', 'Garantien', 'Garanties', 'Garantías'],
  ['Manuals', 'Bedienungsanleitungen', "Notices d'utilisation", 'Manuales'],
  ['Spare keys', 'Ersatzschlüssel', 'Clés de rechange', 'Llaves de repuesto'],
  ['Emergency kit', 'Notfallset', "Kit d'urgence", 'Kit de emergencia'],
  ['First aid', 'Erste Hilfe', 'Premiers secours', 'Primeros auxilios'],
  ['Medicine', 'Medikamente', 'Médicaments', 'Medicamentos'],
  ['Cleaning supplies', 'Putzmittel', "Produits d'entretien", 'Productos de limpieza'],
  ['Stationery', 'Schreibwaren', 'Papeterie', 'Papelería'],
  ['School supplies', 'Schulsachen', 'Fournitures scolaires', 'Material escolar'],
  ['Craft supplies', 'Bastelmaterial', 'Matériel de bricolage créatif', 'Material de manualidades'],
  ['Sewing supplies', 'Nähzubehör', 'Fournitures de couture', 'Material de costura'],
  ['Art supplies', 'Künstlerbedarf', "Matériel d'art", 'Material de arte'],
  ['Musical instruments', 'Musikinstrumente', 'Instruments de musique', 'Instrumentos musicales'],
  ['Christmas', 'Weihnachten', 'Noël', 'Navidad'],
  ['Christmas lights', 'Weihnachtsbeleuchtung', 'Illuminations de Noël', 'Luces de Navidad'],
  ['Easter', 'Ostern', 'Pâques', 'Pascua'],
  ['Halloween', 'Halloween', 'Halloween', 'Halloween'],
  ['Party supplies', 'Partybedarf', 'Articles de fête', 'Artículos de fiesta'],
  ['Gift wrap', 'Geschenkpapier', 'Papier cadeau', 'Papel de regalo'],
  ['Gifts', 'Geschenke', 'Cadeaux', 'Regalos'],
  ['Garden tools', 'Gartengeräte', 'Outils de jardin', 'Herramientas de jardín'],
  ['Garden furniture', 'Gartenmöbel', 'Meubles de jardin', 'Muebles de jardín'],
  ['Flower pots', 'Blumentöpfe', 'Pots de fleurs', 'Macetas'],
  ['Seeds and fertilizer', 'Samen und Dünger', 'Graines et engrais', 'Semillas y fertilizante'],
  ['Barbecue', 'Grill', 'Barbecue', 'Barbacoa'],
  ['Pool toys', 'Poolspielzeug', 'Jouets de piscine', 'Juguetes de piscina'],
  ['Camping', 'Camping', 'Camping', 'Camping'],
  ['Sports', 'Sport', 'Sport', 'Deporte'],
  ['Ski gear', 'Skiausrüstung', 'Équipement de ski', 'Equipo de esquí'],
  ['Hiking gear', 'Wanderausrüstung', 'Équipement de randonnée', 'Equipo de senderismo'],
  ['Fishing gear', 'Angelausrüstung', 'Matériel de pêche', 'Equipo de pesca'],
  ['Bike gear', 'Fahrradzubehör', 'Accessoires de vélo', 'Accesorios de bicicleta'],
  ['Car accessories', 'Autozubehör', 'Accessoires auto', 'Accesorios de coche'],
  ['Pets', 'Haustiere', 'Animaux', 'Mascotas'],
  ['Recycling', 'Recycling', 'Recyclage', 'Reciclaje'],
  ['Seasonal items', 'Saisonartikel', 'Articles de saison', 'Artículos de temporada'],
];

const MOVING: LangTuple[] = [
  ['Fragile', 'Zerbrechlich', 'Fragile', 'Frágil'],
  ['Open first', 'Zuerst öffnen', 'À ouvrir en premier', 'Abrir primero'],
  ['Heavy', 'Schwer', 'Lourd', 'Pesado'],
  ['This side up', 'Diese Seite oben', 'Ce côté en haut', 'Este lado arriba'],
  ['Essentials', 'Das Wichtigste', "L'essentiel", 'Lo esencial'],
  ['Unpack later', 'Später auspacken', 'À déballer plus tard', 'Desembalar después'],
  ['Valuables', 'Wertsachen', 'Objets de valeur', 'Objetos de valor'],
  ['Glassware', 'Glaswaren', 'Verrerie', 'Cristalería'],
  ['Dishes', 'Geschirr', 'Vaisselle', 'Vajilla'],
  ['Wardrobe box', 'Kleiderbox', 'Carton penderie', 'Caja armario'],
  ['Cables and chargers', 'Kabel und Ladegeräte', 'Câbles et chargeurs', 'Cables y cargadores'],
  ['Do not stack', 'Nicht stapeln', 'Ne pas empiler', 'No apilar'],
  ['Keep dry', 'Trocken halten', 'Garder au sec', 'Mantener seco'],
  ['Storage', 'Lagerung', 'Stockage', 'Almacenamiento'],
  ['Donate', 'Spenden', 'À donner', 'Donar'],
  ['Sell', 'Verkaufen', 'À vendre', 'Vender'],
  ['New home', 'Neues Zuhause', 'Nouvelle maison', 'Casa nueva'],
  ['Pet supplies', 'Haustierbedarf', 'Articles pour animaux', 'Artículos para mascotas'],
  ['Toiletries', 'Hygieneartikel', "Produits d'hygiène", 'Artículos de higiene'],
  ['Handle with care', 'Vorsicht', 'Manipuler avec précaution', 'Manejar con cuidado'],
  ['First night box', 'Erste-Nacht-Box', 'Carton de première nuit', 'Caja de la primera noche'],
  ['Last box', 'Letzte Kiste', 'Dernier carton', 'Última caja'],
  ['Do not open', 'Nicht öffnen', 'Ne pas ouvrir', 'No abrir'],
  ['Load first', 'Zuerst einladen', 'Charger en premier', 'Cargar primero'],
  ['Load last', 'Zuletzt einladen', 'Charger en dernier', 'Cargar al final'],
  ['Unload first', 'Zuerst ausladen', 'Décharger en premier', 'Descargar primero'],
  ['Keep upright', 'Aufrecht lagern', 'Garder à la verticale', 'Mantener vertical'],
  ['To kitchen', 'In die Küche', 'Pour la cuisine', 'A la cocina'],
  ['To bedroom', 'Ins Schlafzimmer', 'Pour la chambre', 'Al dormitorio'],
  ['To living room', 'Ins Wohnzimmer', 'Pour le salon', 'Al salón'],
  ['To bathroom', 'Ins Badezimmer', 'Pour la salle de bain', 'Al baño'],
  ["To children's room", 'Ins Kinderzimmer', "Pour la chambre d'enfant", 'A la habitación infantil'],
  ['To office', 'Ins Büro', 'Pour le bureau', 'A la oficina'],
  ['To garage', 'In die Garage', 'Pour le garage', 'Al garaje'],
  ['To basement', 'In den Keller', 'Pour la cave', 'Al sótano'],
  ['To attic', 'Auf den Dachboden', 'Pour le grenier', 'Al ático'],
  ['Kitchen essentials', 'Küchenbedarf', 'Essentiels de cuisine', 'Básicos de cocina'],
  ['Bathroom essentials', 'Badezimmerbedarf', 'Essentiels de salle de bain', 'Básicos de baño'],
  ['Pictures and mirrors', 'Bilder und Spiegel', 'Tableaux et miroirs', 'Cuadros y espejos'],
  ['Coats', 'Mäntel', 'Manteaux', 'Abrigos'],
  ['Plants', 'Pflanzen', 'Plantes', 'Plantas'],
  ['TV and accessories', 'Fernseher und Zubehör', 'Télévision et accessoires', 'Televisor y accesorios'],
  ['Paperwork', 'Papierkram', 'Paperasse', 'Papeleo'],
  ['Keys', 'Schlüssel', 'Clés', 'Llaves'],
  ['Furniture parts', 'Möbelteile', 'Pièces de meubles', 'Piezas de muebles'],
  ['Screws and bolts', 'Schrauben und Bolzen', 'Vis et boulons', 'Tornillos y pernos'],
  ['Bed parts', 'Bettteile', 'Pièces de lit', 'Piezas de cama'],
  ['Temporary storage', 'Zwischenlager', 'Stockage temporaire', 'Almacenamiento temporal'],
  ['Long-term storage', 'Langzeitlagerung', 'Stockage longue durée', 'Almacenamiento prolongado'],
  ['Garage sale', 'Flohmarkt', 'Vide-grenier', 'Venta de garaje'],
  ['Recycle', 'Zum Recycling', 'À recycler', 'Para reciclar'],
  ['Throw away', 'Wegwerfen', 'À jeter', 'Tirar'],
  ['Needs repair', 'Reparaturbedürftig', 'À réparer', 'Necesita reparación'],
  ['Moving documents', 'Umzugsunterlagen', 'Documents de déménagement', 'Documentos de la mudanza'],
];

const BUSINESS: LangTuple[] = [
  ['Inventory', 'Inventar', 'Inventaire', 'Inventario'],
  ['Products', 'Produkte', 'Produits', 'Productos'],
  ['Shipping', 'Versand', 'Expédition', 'Envíos'],
  ['Packaging', 'Verpackung', 'Emballage', 'Embalaje'],
  ['Orders', 'Bestellungen', 'Commandes', 'Pedidos'],
  ['Returns', 'Rücksendungen', 'Retours', 'Devoluciones'],
  ['Office supplies', 'Büromaterial', 'Fournitures de bureau', 'Material de oficina'],
  ['Invoices', 'Rechnungen', 'Factures', 'Facturas'],
  ['Samples', 'Muster', 'Échantillons', 'Muestras'],
  ['Raw materials', 'Rohmaterial', 'Matières premières', 'Materias primas'],
  ['Stock', 'Lagerbestand', 'Stock', 'Existencias'],
  ['Customer orders', 'Kundenaufträge', 'Commandes clients', 'Pedidos de clientes'],
  ['Equipment', 'Ausrüstung', 'Équipement', 'Equipamiento'],
  ['Marketing materials', 'Werbematerial', 'Supports marketing', 'Material de marketing'],
  ['Accounting', 'Buchhaltung', 'Comptabilité', 'Contabilidad'],
  ['Archive', 'Archiv', 'Archives', 'Archivo'],
  ['Ready to ship', 'Versandbereit', 'Prêt à expédier', 'Listo para enviar'],
  ['Low stock', 'Niedriger Bestand', 'Stock faible', 'Pocas existencias'],
  ['Spare parts', 'Ersatzteile', 'Pièces de rechange', 'Repuestos'],
  ['Market stall', 'Marktstand', 'Stand de marché', 'Puesto de mercado'],
  ['Warehouse', 'Lagerhalle', 'Entrepôt', 'Almacén'],
  ['Stockroom', 'Lagerraum', 'Réserve', 'Depósito'],
  ['Shop floor', 'Verkaufsfläche', 'Surface de vente', 'Zona de venta'],
  ['Showroom', 'Showroom', "Salle d'exposition", 'Sala de exposición'],
  ['Display items', 'Ausstellungsstücke', "Articles d'exposition", 'Artículos de exposición'],
  ['Counter', 'Theke', 'Comptoir', 'Mostrador'],
  ['Cash register', 'Kasse', 'Caisse', 'Caja registradora'],
  ['Packing station', 'Packstation', "Poste d'emballage", 'Estación de embalaje'],
  ['Back office', 'Verwaltungsbüro', 'Bureau administratif', 'Oficina administrativa'],
  ['Packing materials', 'Verpackungsmaterial', "Matériel d'emballage", 'Material de embalaje'],
  ['Boxes and bags', 'Kartons und Beutel', 'Cartons et sachets', 'Cajas y bolsas'],
  ['Bubble wrap', 'Luftpolsterfolie', 'Film à bulles', 'Plástico de burbujas'],
  ['Packaging tape', 'Paketband', "Ruban d'emballage", 'Cinta de embalaje'],
  ['Shipping labels', 'Versandetiketten', "Étiquettes d'expédition", 'Etiquetas de envío'],
  ['Labels', 'Etiketten', 'Étiquettes', 'Etiquetas'],
  ['Delivery notes', 'Lieferscheine', 'Bons de livraison', 'Albaranes'],
  ['Purchase orders', 'Einkaufsbestellungen', 'Bons de commande', 'Órdenes de compra'],
  ['Pending orders', 'Offene Bestellungen', 'Commandes en attente', 'Pedidos pendientes'],
  ['Completed orders', 'Erledigte Bestellungen', 'Commandes terminées', 'Pedidos completados'],
  ['Pre-orders', 'Vorbestellungen', 'Précommandes', 'Preventas'],
  ['Customer returns', 'Kundenretouren', 'Retours clients', 'Devoluciones de clientes'],
  ['Damaged goods', 'Beschädigte Ware', 'Marchandises endommagées', 'Mercancía dañada'],
  ['Sale items', 'Sonderangebote', 'Articles en promotion', 'Artículos en oferta'],
  ['New arrivals', 'Neuheiten', 'Nouveautés', 'Novedades'],
  ['Best sellers', 'Bestseller', 'Meilleures ventes', 'Más vendidos'],
  ['Seasonal stock', 'Saisonware', 'Stock saisonnier', 'Existencias de temporada'],
  ['Clothing stock', 'Kleiderbestand', 'Stock de vêtements', 'Existencias de ropa'],
  ['Handmade goods', 'Handgemachte Produkte', 'Produits faits main', 'Productos hechos a mano'],
  ['Parts and components', 'Teile und Komponenten', 'Pièces et composants', 'Piezas y componentes'],
  ['Prototypes', 'Prototypen', 'Prototypes', 'Prototipos'],
  ['Ingredients', 'Zutaten', 'Ingrédients', 'Ingredientes'],
  ['Cafe supplies', 'Cafébedarf', 'Fournitures de café', 'Suministros de cafetería'],
  ['Kitchen equipment', 'Küchenausrüstung', 'Équipement de cuisine', 'Equipo de cocina'],
  ['Salon supplies', 'Salonbedarf', 'Fournitures de salon', 'Suministros de salón'],
  ['Beauty products', 'Schönheitsprodukte', 'Produits de beauté', 'Productos de belleza'],
  ['Medical supplies', 'Medizinischer Bedarf', 'Fournitures médicales', 'Suministros médicos'],
  ['Customer files', 'Kundenakten', 'Dossiers clients', 'Expedientes de clientes'],
  ['Contracts', 'Verträge', 'Contrats', 'Contratos'],
  ['Quotes', 'Angebote', 'Devis', 'Presupuestos'],
  ['Supplier documents', 'Lieferantenunterlagen', 'Documents fournisseurs', 'Documentos de proveedores'],
  ['Tax documents', 'Steuerunterlagen', 'Documents fiscaux', 'Documentos fiscales'],
  ['Payroll', 'Lohnabrechnung', 'Paie', 'Nóminas'],
  ['HR files', 'Personalakten', 'Dossiers du personnel', 'Expedientes de personal'],
  ['Licenses and permits', 'Lizenzen und Genehmigungen', 'Licences et permis', 'Licencias y permisos'],
  ['Insurance', 'Versicherung', 'Assurance', 'Seguros'],
  ['Promotional items', 'Werbeartikel', 'Articles promotionnels', 'Artículos promocionales'],
  ['Flyers', 'Flyer', 'Flyers', 'Folletos'],
  ['Business cards', 'Visitenkarten', 'Cartes de visite', 'Tarjetas de visita'],
  ['Banners', 'Banner', 'Banderoles', 'Pancartas'],
  ['Event supplies', 'Eventbedarf', "Matériel d'événement", 'Material para eventos'],
  ['Trade show materials', 'Messematerial', 'Matériel de salon', 'Material de feria'],
  ['IT equipment', 'IT-Geräte', 'Matériel informatique', 'Equipos informáticos'],
  ['Printers', 'Drucker', 'Imprimantes', 'Impresoras'],
  ['Cables and adapters', 'Kabel und Adapter', 'Câbles et adaptateurs', 'Cables y adaptadores'],
  ['Office furniture', 'Büromöbel', 'Mobilier de bureau', 'Muebles de oficina'],
  ['Uniforms', 'Uniformen', 'Uniformes', 'Uniformes'],
  ['Workwear', 'Arbeitskleidung', 'Vêtements de travail', 'Ropa de trabajo'],
  ['Safety equipment', 'Sicherheitsausrüstung', 'Équipement de sécurité', 'Equipo de seguridad'],
];

const MAX_RESULTS = 6;

function normalizeText(value?: string | null): string {
  if (!value) return '';
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
}

interface Term {
  display: LangTuple;
  aliases: string[];
}

const TERMS: Term[] = (() => {
  const groups = [HOUSEHOLD, MOVING, BUSINESS];
  const list: Term[] = [];
  const seen = new Set<string>();
  const max = Math.max(...groups.map((g) => g.length));

  for (let i = 0; i < max; i++) {
    for (const g of groups) {
      if (i >= g.length) continue;
      const d = g[i];
      const key = normalizeText(d[0]);
      if (seen.has(key)) continue;
      seen.add(key);
      list.push({
        display: d,
        aliases: Array.from(new Set(d.map(normalizeText))),
      });
    }
  }
  return list;
})();

function matchScore(q: string, aliases: string[]): number {
  let best = 0;
  for (const a of aliases) {
    if (a === q) return -1;
    if (a.startsWith(q)) best = Math.max(best, 4);
    else if (a.includes(' ' + q)) best = Math.max(best, 2.5);
    else if (a.includes(q)) best = Math.max(best, 1);
  }
  return best;
}

function getLangIndex(languageCode?: string): number {
  const code = (languageCode || 'en').slice(0, 2).toLowerCase();
  if (code === 'de') return 1;
  if (code === 'fr') return 2;
  if (code === 'es') return 3;
  return 0;
}

/**
 * Suggests up to 6 localized tag name chips matching across Household, Moving, and Small Business
 * terms in all 4 languages, returned in the active site language.
 */
export function suggestTagNames(typed: string, languageCode: string): string[] {
  const q = normalizeText(typed);
  const langIdx = getLangIndex(languageCode);

  const hits: { score: number; order: number; text: string }[] = [];
  for (let i = 0; i < TERMS.length; i++) {
    const t = TERMS[i];
    let score = 0;
    if (q.length > 0) {
      score = matchScore(q, t.aliases);
      if (score <= 0) continue;
    }
    hits.push({
      score,
      order: i,
      text: t.display[langIdx] ?? t.display[0],
    });
  }

  hits.sort((a, b) => b.score - a.score || a.order - b.order);
  return hits.slice(0, MAX_RESULTS).map((h) => h.text);
}
