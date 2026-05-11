/* ===========================
   ARTISAN WOOD — APP.JS
   Full Smart System
   =========================== */

// ============================================================
// ① MULTILINGUAL SYSTEM
// ============================================================

const TRANSLATIONS = {
  ar: {
    dir: 'rtl',
    lang_label: 'اللغة:',
    nav_home: 'الرئيسية',
    nav_products: 'المنتجات',
    nav_about: 'عنّا',
    nav_reviews: 'آراء العملاء',
    nav_contact: 'تواصل',
    nav_order: 'اطلب الآن',
    hero_badge: '✦ صنع يدوي بعناية فائقة',
    hero_title1: 'فن الخشب',
    hero_title2: 'يولد من جديد',
    hero_sub: 'منتجات خشبية فاخرة تجمع بين الطبيعة والحداثة — كل قطعة قصة',
    hero_cta1: 'اكتشف المجموعة',
    hero_cta2: 'اطلب قطعة مخصصة',
    stat1: 'قطعة مُسلَّمة',
    stat2: 'دولة حول العالم',
    stat3: 'عمل يدوي',
    scroll_hint: 'مرر للاكتشاف',
    val1_title: 'خشب طبيعي 100%',
    val1_desc: 'نختار أجود أنواع الأخشاب المستدامة من مصادر موثوقة',
    val2_title: 'تخصيص كامل',
    val2_desc: 'اختر الشكل والحجم والنقش — كل قطعة تُصنع لك وحدك',
    val3_title: 'شحن عالمي',
    val3_desc: 'نوصل إلى أكثر من 18 دولة بتغليف آمن ومحترف',
    val4_title: 'ضمان الجودة',
    val4_desc: 'كل قطعة تمر بمراجعة دقيقة قبل الشحن',
    products_tag: 'المجموعة الكاملة',
    products_title: 'اكتشف منتجاتنا',
    products_sub: 'قطع فريدة تجمع بين الجمال والوظيفة',
    search_placeholder: 'ابحث عن منتج...',
    filter_all: 'الكل',
    filter_resin: 'مع ريزين',
    filter_natural: 'بدون ريزين',
    filter_kitchen: 'مطبخ',
    filter_decor: 'ديكور',
    filter_gift: 'هدايا',
    cat_resin: '🌊 خشب مع ريزين',
    cat_resin_sub: 'قطع فنية تجمع الخشب الطبيعي مع الريزين الشفاف بألوان مذهلة',
    cat_natural: '🌳 خشب طبيعي بدون ريزين',
    cat_natural_sub: 'جمال الخشب في أنقى صورة — دافئ، طبيعي، خالد',
    cat_tag_resin: 'ريزين',
    cat_tag_natural: 'طبيعي',
    badge_new: 'جديد',
    badge_best: 'الأكثر طلباً',
    quick_order: 'اطلب الآن',
    ocean_board: 'لوحة ريزين أوقيانوسية',
    ocean_desc: 'موجة من الألوان المائية المصبوبة في خشب الجوز',
    serving_tray: 'طبق تقديم ريزين',
    tray_desc: 'طبق تقديم فاخر بألوان الغروب المنعكسة في الريزين',
    photo_frame: 'إطار صورة ريزين',
    frame_desc: 'إطار صور فريد يجمع الخشب مع ريزين ملون مخصص',
    wall_clock: 'ساعة ريزين جدارية',
    clock_desc: 'ساعة جدارية فنية تجمع الوقت مع الجمال',
    cutting_board: 'لوح تقطيع خشبي',
    cutting_desc: 'لوح تقطيع من خشب الزيتون المعالج — جمال وعملية',
    wood_sign: 'لافتة خشبية منقوشة',
    sign_desc: 'لافتة بنقش مخصص — اسمك، عبارتك، أو رسالتك',
    wood_spoon: 'ملعقة خشبية يدوية',
    spoon_desc: 'منحوتة يدوياً من الخشب الصلب — هدية مطبخية مميزة',
    wood_tray: 'صينية تقديم خشبية',
    wood_tray_desc: 'صينية من خشب السنديان بمقابض طبيعية',
    no_results: 'لا توجد منتجات تطابق بحثك',
    about_tag: 'قصتنا',
    about_title: 'الخشب ليس مادة — هو فن',
    about_p1: 'بدأت رحلتنا من ورشة صغيرة، حيث كانت يدان حرفيتان تحوّلان قطعة خشب بسيطة إلى تحفة فنية. اليوم، نبيع في أكثر من 18 دولة لأن كل قطعة نصنعها تحمل روحاً خاصة.',
    about_p2: 'نؤمن بأن الجمال الحقيقي يسكن في الطبيعة. لذا نختار أخشاباً مستدامة، ونعالجها بيد الإنسان لا بالآلة، وندمجها أحياناً مع الريزين لتولد قطع لا تُنسى.',
    feat1: 'أخشاب مستدامة معتمدة',
    feat2: 'ألوان ريزين لا نهائية',
    feat3: 'نقش مخصص بالليزر',
    feat4: 'تغليف هدايا احترافي',
    about_cta: 'اطلب قطعتك',
    reviews_tag: 'آراء حقيقية',
    reviews_title: 'ماذا يقول عملاؤنا',
    payment_tag: 'دفع آمن',
    payment_title: 'طرق الدفع المتاحة',
    payment_sub: 'نقبل جميع طرق الدفع العالمية والمحلية',
    pay1: 'بطاقات بنكية',
    pay2: 'دفع آمن عالمياً',
    pay3: 'تحويل بنكي',
    pay3_sub: 'IBAN متاح عند الطلب',
    pay4: 'عند الاستلام',
    pay4_sub: 'للطلبات المحلية',
    pay5: 'محافظ رقمية',
    pay6: 'Western Union',
    pay6_sub: 'تحويل دولي',
    order_tag: 'طلب ذكي',
    order_title: 'اطلب قطعتك المخصصة',
    order_sub: 'أخبرنا عن طلبك وسنتواصل معك خلال 24 ساعة',
    step1_title: 'اختر المنتج',
    step2_title: 'التفاصيل والتخصيص',
    step3_title: 'معلومات التواصل',
    choice_ocean: 'لوحة ريزين أوقيانوسية',
    choice_tray_resin: 'طبق تقديم ريزين',
    choice_clock: 'ساعة ريزين جدارية',
    choice_frame: 'إطار صورة ريزين',
    choice_cutting: 'لوح تقطيع',
    choice_sign: 'لافتة منقوشة',
    choice_spoon: 'ملعقة خشبية',
    choice_custom: 'طلب مخصص',
    qty_label: 'الكمية',
    color_label: 'اللون / النمط المفضل',
    engraving_label: 'نص للنقش (اختياري)',
    engraving_ph: 'اسمك، عبارة، تاريخ...',
    notes_label: 'ملاحظات إضافية',
    notes_ph: 'أي تفاصيل خاصة تريدها...',
    name_label: 'الاسم الكامل *',
    name_ph: 'اسمك الكريم',
    country_label: 'الدولة',
    contact_label: 'واتساب أو إيميل *',
    send_via: 'أرسل الطلب عبر:',
    send_wa: 'واتساب',
    send_em: 'إيميل',
    step_next: 'التالي →',
    step_back: '← السابق',
    prog1: 'المنتج',
    prog2: 'التفاصيل',
    prog3: 'التواصل',
    summary_title: 'ملخص طلبك جاهز!',
    summary_note: 'سيتم توجيهك لإرسال الطلب عبر واتساب أو إيميل',
    new_order: 'طلب جديد',
    contact_tag: 'تواصل معنا',
    contact_title: 'نحن هنا لمساعدتك',
    chat_now: 'تحدث الآن',
    send_email_btn: 'أرسل بريداً',
    follow_us: 'تابعنا',
    hours_title: 'ساعات العمل',
    hours: 'السبت – الخميس: 9ص – 9م',
    online_now: '● متاح الآن',
    footer_tagline: 'حرفة تحكي قصصاً، خشب يعيش إلى الأبد',
    footer_rights: 'جميع الحقوق محفوظة.',
    footer_made: 'صُنع بيد الإنسان 🤲',
    chat_btn: 'مساعد ذكي',
    chat_title: 'مساعد NobleOliveWood',
    chat_status: '● متاح دائماً',
    chat_welcome: 'مرحباً! 👋 أنا مساعدك الذكي في NobleOliveWood. أخبرني ماذا تبحث عنه — هدية، ديكور، مطبخ — وسأقترح لك المثالي!',
    q_gift: '🎁 هدية',
    q_kitchen: '🍳 مطبخ',
    q_decor: '🏠 ديكور',
    q_price: '💰 الأسعار',
    chat_input_ph: 'اكتب سؤالك هنا...',
    toast_added: '✓ تمت إضافة المنتج للطلب!',
  },

  en: {
    dir: 'ltr',
    lang_label: 'Language:',
    nav_home: 'Home',
    nav_products: 'Products',
    nav_about: 'About',
    nav_reviews: 'Reviews',
    nav_contact: 'Contact',
    nav_order: 'Order Now',
    hero_badge: '✦ Handcrafted with Exceptional Care',
    hero_title1: 'The Art of Wood',
    hero_title2: 'Reborn',
    hero_sub: 'Luxury wooden products merging nature and modernity — every piece tells a story',
    hero_cta1: 'Explore Collection',
    hero_cta2: 'Order Custom Piece',
    stat1: 'Pieces Delivered',
    stat2: 'Countries Worldwide',
    stat3: 'Handmade',
    scroll_hint: 'Scroll to Discover',
    val1_title: '100% Natural Wood',
    val1_desc: 'We select the finest sustainable woods from trusted sources',
    val2_title: 'Full Customization',
    val2_desc: 'Choose shape, size, and engraving — every piece made just for you',
    val3_title: 'Worldwide Shipping',
    val3_desc: 'We deliver to 18+ countries with secure professional packaging',
    val4_title: 'Quality Guarantee',
    val4_desc: 'Every piece is carefully reviewed before shipping',
    products_tag: 'Full Collection',
    products_title: 'Discover Our Products',
    products_sub: 'Unique pieces combining beauty and function',
    search_placeholder: 'Search for a product...',
    filter_all: 'All',
    filter_resin: 'With Resin',
    filter_natural: 'Natural Wood',
    filter_kitchen: 'Kitchen',
    filter_decor: 'Decor',
    filter_gift: 'Gifts',
    cat_resin: '🌊 Wood with Resin',
    cat_resin_sub: 'Artistic pieces combining natural wood with transparent resin in stunning colors',
    cat_natural: '🌳 Natural Wood',
    cat_natural_sub: 'The beauty of wood in its purest form — warm, natural, timeless',
    cat_tag_resin: 'Resin',
    cat_tag_natural: 'Natural',
    badge_new: 'New',
    badge_best: 'Best Seller',
    quick_order: 'Order Now',
    ocean_board: 'Ocean Resin Board',
    ocean_desc: 'A wave of aquatic colors poured into walnut wood',
    serving_tray: 'Resin Serving Tray',
    tray_desc: 'Luxurious serving tray with sunset colors reflected in resin',
    photo_frame: 'Resin Photo Frame',
    frame_desc: 'Unique photo frame combining wood with custom colored resin',
    wall_clock: 'Resin Wall Clock',
    clock_desc: 'Artistic wall clock combining time with beauty',
    cutting_board: 'Wooden Cutting Board',
    cutting_desc: 'Cutting board from treated olive wood — beauty and function',
    wood_sign: 'Engraved Wood Sign',
    sign_desc: 'Sign with custom engraving — your name, phrase, or message',
    wood_spoon: 'Hand-carved Wooden Spoon',
    spoon_desc: 'Hand-carved from hardwood — a distinctive kitchen gift',
    wood_tray: 'Wooden Serving Board',
    wood_tray_desc: 'Oak wood tray with natural handles',
    no_results: 'No products match your search',
    about_tag: 'Our Story',
    about_title: 'Wood Is Not Material — It Is Art',
    about_p1: 'Our journey began in a small workshop, where two craftsman hands transformed a simple piece of wood into a masterpiece. Today, we sell in over 18 countries because every piece we make carries a special soul.',
    about_p2: 'We believe true beauty lives in nature. So we choose sustainable woods, treat them by human hand not machine, and sometimes combine them with resin to create unforgettable pieces.',
    feat1: 'Certified Sustainable Wood',
    feat2: 'Infinite Resin Colors',
    feat3: 'Custom Laser Engraving',
    feat4: 'Professional Gift Packaging',
    about_cta: 'Order Your Piece',
    reviews_tag: 'Real Reviews',
    reviews_title: 'What Our Customers Say',
    payment_tag: 'Secure Payment',
    payment_title: 'Available Payment Methods',
    payment_sub: 'We accept all global and local payment methods',
    pay1: 'Bank Cards',
    pay2: 'Secure Global Payment',
    pay3: 'Bank Transfer',
    pay3_sub: 'IBAN available on request',
    pay4: 'Cash on Delivery',
    pay4_sub: 'For local orders',
    pay5: 'Digital Wallets',
    pay6: 'Western Union',
    pay6_sub: 'International transfer',
    order_tag: 'Smart Order',
    order_title: 'Order Your Custom Piece',
    order_sub: 'Tell us about your order and we\'ll contact you within 24 hours',
    step1_title: 'Choose Product',
    step2_title: 'Details & Customization',
    step3_title: 'Contact Information',
    choice_ocean: 'Ocean Resin Board',
    choice_tray_resin: 'Resin Serving Tray',
    choice_clock: 'Resin Wall Clock',
    choice_frame: 'Resin Photo Frame',
    choice_cutting: 'Cutting Board',
    choice_sign: 'Engraved Sign',
    choice_spoon: 'Wooden Spoon',
    choice_custom: 'Custom Order',
    qty_label: 'Quantity',
    color_label: 'Preferred Color / Style',
    engraving_label: 'Engraving Text (optional)',
    engraving_ph: 'Your name, phrase, date...',
    notes_label: 'Additional Notes',
    notes_ph: 'Any special details you want...',
    name_label: 'Full Name *',
    name_ph: 'Your name',
    country_label: 'Country',
    contact_label: 'WhatsApp or Email *',
    send_via: 'Send order via:',
    send_wa: 'WhatsApp',
    send_em: 'Email',
    step_next: 'Next →',
    step_back: '← Back',
    prog1: 'Product',
    prog2: 'Details',
    prog3: 'Contact',
    summary_title: 'Your Order Summary is Ready!',
    summary_note: 'You will be directed to send the order via WhatsApp or Email',
    new_order: 'New Order',
    contact_tag: 'Contact Us',
    contact_title: 'We Are Here to Help',
    chat_now: 'Chat Now',
    send_email_btn: 'Send Email',
    follow_us: 'Follow Us',
    hours_title: 'Working Hours',
    hours: 'Sat – Thu: 9AM – 9PM',
    online_now: '● Available Now',
    footer_tagline: 'Craft that tells stories, wood that lives forever',
    footer_rights: 'All rights reserved.',
    footer_made: 'Made by human hands 🤲',
    chat_btn: 'AI Assistant',
    chat_title: 'NobleOliveWood Assistant',
    chat_status: '● Always Available',
    chat_welcome: 'Hello! 👋 I\'m your NobleOliveWood smart assistant. Tell me what you\'re looking for — gift, decor, kitchen — and I\'ll suggest the perfect piece!',
    q_gift: '🎁 Gift',
    q_kitchen: '🍳 Kitchen',
    q_decor: '🏠 Decor',
    q_price: '💰 Prices',
    chat_input_ph: 'Type your question here...',
    toast_added: '✓ Product added to order!',
  },

  fr: {
    dir: 'ltr',
    lang_label: 'Langue:',
    nav_home: 'Accueil',
    nav_products: 'Produits',
    nav_about: 'À Propos',
    nav_reviews: 'Avis',
    nav_contact: 'Contact',
    nav_order: 'Commander',
    hero_badge: '✦ Artisanat d\'Exception',
    hero_title1: 'L\'Art du Bois',
    hero_title2: 'Réinventé',
    hero_sub: 'Produits en bois de luxe alliant nature et modernité — chaque pièce raconte une histoire',
    hero_cta1: 'Explorer la Collection',
    hero_cta2: 'Commander sur Mesure',
    stat1: 'Pièces Livrées',
    stat2: 'Pays dans le Monde',
    stat3: 'Fait Main',
    scroll_hint: 'Défiler pour Découvrir',
    val1_title: 'Bois 100% Naturel',
    val1_desc: 'Nous sélectionnons les meilleurs bois durables de sources fiables',
    val2_title: 'Personnalisation Totale',
    val2_desc: 'Choisissez la forme, la taille et la gravure — chaque pièce créée pour vous',
    val3_title: 'Livraison Mondiale',
    val3_desc: 'Livraison dans 18+ pays avec emballage professionnel sécurisé',
    val4_title: 'Garantie Qualité',
    val4_desc: 'Chaque pièce est soigneusement vérifiée avant expédition',
    products_tag: 'Collection Complète',
    products_title: 'Découvrez Nos Produits',
    products_sub: 'Pièces uniques alliant beauté et fonctionnalité',
    search_placeholder: 'Rechercher un produit...',
    filter_all: 'Tout',
    filter_resin: 'Avec Résine',
    filter_natural: 'Bois Naturel',
    filter_kitchen: 'Cuisine',
    filter_decor: 'Décor',
    filter_gift: 'Cadeaux',
    cat_resin: '🌊 Bois avec Résine',
    cat_resin_sub: 'Pièces artistiques combinant bois naturel et résine transparente en couleurs époustouflantes',
    cat_natural: '🌳 Bois Naturel',
    cat_natural_sub: 'La beauté du bois dans sa forme la plus pure — chaleureux, naturel, intemporel',
    cat_tag_resin: 'Résine',
    cat_tag_natural: 'Naturel',
    badge_new: 'Nouveau',
    badge_best: 'Best Seller',
    quick_order: 'Commander',
    ocean_board: 'Plateau Résine Océan',
    ocean_desc: 'Une vague de couleurs aquatiques coulée dans du bois de noyer',
    serving_tray: 'Plateau de Service Résine',
    tray_desc: 'Plateau luxueux avec les couleurs du coucher de soleil en résine',
    photo_frame: 'Cadre Photo en Résine',
    frame_desc: 'Cadre unique combinant bois et résine colorée personnalisée',
    wall_clock: 'Horloge Murale Résine',
    clock_desc: 'Horloge murale artistique alliant le temps à la beauté',
    cutting_board: 'Planche à Découper',
    cutting_desc: 'Planche en bois d\'olivier traité — beauté et fonctionnalité',
    wood_sign: 'Panneau Bois Gravé',
    sign_desc: 'Panneau avec gravure personnalisée — votre nom, phrase ou message',
    wood_spoon: 'Cuillère en Bois Sculptée',
    spoon_desc: 'Sculptée à la main en bois dur — cadeau cuisine distinctif',
    wood_tray: 'Plateau de Service en Bois',
    wood_tray_desc: 'Plateau en chêne avec poignées naturelles',
    no_results: 'Aucun produit ne correspond à votre recherche',
    about_tag: 'Notre Histoire',
    about_title: 'Le Bois N\'est Pas Matière — C\'est Art',
    about_p1: 'Notre aventure a commencé dans un petit atelier où deux mains artisanales transformaient un simple morceau de bois en chef-d\'œuvre. Aujourd\'hui, nous vendons dans plus de 18 pays.',
    about_p2: 'Nous croyons que la vraie beauté réside dans la nature. Nous choisissons des bois durables, les travaillons à la main et les combinons parfois avec de la résine pour créer des pièces inoubliables.',
    feat1: 'Bois Durable Certifié',
    feat2: 'Couleurs de Résine Infinies',
    feat3: 'Gravure Laser Personnalisée',
    feat4: 'Emballage Cadeau Professionnel',
    about_cta: 'Commander Votre Pièce',
    reviews_tag: 'Avis Authentiques',
    reviews_title: 'Ce Que Disent Nos Clients',
    payment_tag: 'Paiement Sécurisé',
    payment_title: 'Méthodes de Paiement',
    payment_sub: 'Nous acceptons toutes les méthodes de paiement mondiales et locales',
    pay1: 'Cartes Bancaires',
    pay2: 'Paiement Sécurisé Mondial',
    pay3: 'Virement Bancaire',
    pay3_sub: 'IBAN disponible sur demande',
    pay4: 'Paiement à la Livraison',
    pay4_sub: 'Pour commandes locales',
    pay5: 'Portefeuilles Numériques',
    pay6: 'Western Union',
    pay6_sub: 'Transfert international',
    order_tag: 'Commande Intelligente',
    order_title: 'Commandez Votre Pièce Sur Mesure',
    order_sub: 'Dites-nous ce que vous souhaitez et nous vous contacterons dans les 24h',
    step1_title: 'Choisir le Produit',
    step2_title: 'Détails & Personnalisation',
    step3_title: 'Informations de Contact',
    choice_ocean: 'Plateau Résine Océan',
    choice_tray_resin: 'Plateau de Service Résine',
    choice_clock: 'Horloge Murale Résine',
    choice_frame: 'Cadre Photo Résine',
    choice_cutting: 'Planche à Découper',
    choice_sign: 'Panneau Gravé',
    choice_spoon: 'Cuillère en Bois',
    choice_custom: 'Commande Personnalisée',
    qty_label: 'Quantité',
    color_label: 'Couleur / Style Préféré',
    engraving_label: 'Texte à Graver (optionnel)',
    engraving_ph: 'Votre nom, phrase, date...',
    notes_label: 'Notes Supplémentaires',
    notes_ph: 'Tout détail spécial...',
    name_label: 'Nom Complet *',
    name_ph: 'Votre nom',
    country_label: 'Pays',
    contact_label: 'WhatsApp ou Email *',
    send_via: 'Envoyer la commande via:',
    send_wa: 'WhatsApp',
    send_em: 'Email',
    step_next: 'Suivant →',
    step_back: '← Retour',
    prog1: 'Produit',
    prog2: 'Détails',
    prog3: 'Contact',
    summary_title: 'Résumé de Votre Commande!',
    summary_note: 'Vous serez dirigé pour envoyer la commande via WhatsApp ou Email',
    new_order: 'Nouvelle Commande',
    contact_tag: 'Contactez-Nous',
    contact_title: 'Nous Sommes Là Pour Vous',
    chat_now: 'Discuter',
    send_email_btn: 'Envoyer Email',
    follow_us: 'Nous Suivre',
    hours_title: 'Heures d\'Ouverture',
    hours: 'Sam – Jeu: 9h – 21h',
    online_now: '● Disponible Maintenant',
    footer_tagline: 'L\'artisanat qui raconte des histoires, le bois qui dure éternellement',
    footer_rights: 'Tous droits réservés.',
    footer_made: 'Fait par des mains humaines 🤲',
    chat_btn: 'Assistant IA',
    chat_title: 'Assistant NobleOliveWood',
    chat_status: '● Toujours Disponible',
    chat_welcome: 'Bonjour! 👋 Je suis votre assistant NobleOliveWood. Dites-moi ce que vous cherchez — cadeau, déco, cuisine — et je vous suggère la pièce parfaite!',
    q_gift: '🎁 Cadeau',
    q_kitchen: '🍳 Cuisine',
    q_decor: '🏠 Décor',
    q_price: '💰 Prix',
    chat_input_ph: 'Écrivez votre question ici...',
    toast_added: '✓ Produit ajouté à la commande!',
  },

  de: {
    dir: 'ltr',
    lang_label: 'Sprache:',
    nav_home: 'Startseite',
    nav_products: 'Produkte',
    nav_about: 'Über Uns',
    nav_reviews: 'Bewertungen',
    nav_contact: 'Kontakt',
    nav_order: 'Jetzt Bestellen',
    hero_badge: '✦ Handgefertigte Ausnahmequalität',
    hero_title1: 'Die Kunst des Holzes',
    hero_title2: 'Neu geboren',
    hero_sub: 'Luxuriöse Holzprodukte verbinden Natur und Moderne — jedes Stück erzählt eine Geschichte',
    hero_cta1: 'Kollektion Entdecken',
    hero_cta2: 'Maßanfertigung Bestellen',
    stat1: 'Gelieferte Stücke',
    stat2: 'Länder Weltweit',
    stat3: 'Handgemacht',
    scroll_hint: 'Scrollen zum Entdecken',
    val1_title: '100% Naturholz',
    val1_desc: 'Wir wählen die feinsten nachhaltigen Hölzer aus vertrauenswürdigen Quellen',
    val2_title: 'Vollständige Personalisierung',
    val2_desc: 'Wählen Sie Form, Größe und Gravur — jedes Stück wird nur für Sie gemacht',
    val3_title: 'Weltweiter Versand',
    val3_desc: 'Lieferung in 18+ Länder mit sicherer professioneller Verpackung',
    val4_title: 'Qualitätsgarantie',
    val4_desc: 'Jedes Stück wird vor dem Versand sorgfältig geprüft',
    products_tag: 'Gesamte Kollektion',
    products_title: 'Entdecken Sie Unsere Produkte',
    products_sub: 'Einzigartige Stücke, die Schönheit und Funktion vereinen',
    search_placeholder: 'Produkt suchen...',
    filter_all: 'Alle',
    filter_resin: 'Mit Harz',
    filter_natural: 'Naturholz',
    filter_kitchen: 'Küche',
    filter_decor: 'Dekor',
    filter_gift: 'Geschenke',
    cat_resin: '🌊 Holz mit Harz',
    cat_resin_sub: 'Kunstvolle Stücke, die Naturholz mit transparentem Harz in atemberaubenden Farben verbinden',
    cat_natural: '🌳 Naturholz',
    cat_natural_sub: 'Die Schönheit des Holzes in seiner reinsten Form — warm, natürlich, zeitlos',
    cat_tag_resin: 'Harz',
    cat_tag_natural: 'Natur',
    badge_new: 'Neu',
    badge_best: 'Bestseller',
    quick_order: 'Bestellen',
    ocean_board: 'Ozean-Harz-Brett',
    ocean_desc: 'Eine Welle von Meeresfarben, gegossen in Walnussholz',
    serving_tray: 'Harz-Serviertablett',
    tray_desc: 'Luxuriöses Tablett mit Sonnenuntergangsfarben im Harz',
    photo_frame: 'Harz-Bilderrahmen',
    frame_desc: 'Einzigartiger Rahmen aus Holz und farbigem Harz',
    wall_clock: 'Harz-Wanduhr',
    clock_desc: 'Kunstvolle Wanduhr, die Zeit mit Schönheit verbindet',
    cutting_board: 'Holz-Schneidebrett',
    cutting_desc: 'Schneidebrett aus behandeltem Olivenholz — Schönheit und Funktion',
    wood_sign: 'Graviertes Holzschild',
    sign_desc: 'Schild mit individueller Gravur — Ihr Name, Spruch oder Botschaft',
    wood_spoon: 'Handgeschnitzter Holzlöffel',
    spoon_desc: 'Von Hand aus Hartholz geschnitzt — ein besonderes Küchengeschenk',
    wood_tray: 'Holz-Servierbrett',
    wood_tray_desc: 'Eichenholzbrett mit natürlichen Griffen',
    no_results: 'Keine Produkte gefunden',
    about_tag: 'Unsere Geschichte',
    about_title: 'Holz Ist Keine Materie — Es Ist Kunst',
    about_p1: 'Unsere Reise begann in einer kleinen Werkstatt, wo zwei handwerkliche Hände ein einfaches Stück Holz in ein Meisterwerk verwandelten. Heute verkaufen wir in über 18 Ländern.',
    about_p2: 'Wir glauben, dass echte Schönheit in der Natur wohnt. Wir wählen nachhaltige Hölzer, bearbeiten sie von Hand und kombinieren sie manchmal mit Harz zu unvergesslichen Stücken.',
    feat1: 'Zertifiziertes Nachhaltigholz',
    feat2: 'Unendliche Harzfarben',
    feat3: 'Individuelle Lasergravur',
    feat4: 'Professionelle Geschenkverpackung',
    about_cta: 'Ihr Stück Bestellen',
    reviews_tag: 'Echte Bewertungen',
    reviews_title: 'Was Unsere Kunden Sagen',
    payment_tag: 'Sichere Zahlung',
    payment_title: 'Verfügbare Zahlungsmethoden',
    payment_sub: 'Wir akzeptieren alle globalen und lokalen Zahlungsmethoden',
    pay1: 'Bankkarten',
    pay2: 'Sichere weltweite Zahlung',
    pay3: 'Banküberweisung',
    pay3_sub: 'IBAN auf Anfrage verfügbar',
    pay4: 'Nachnahme',
    pay4_sub: 'Für lokale Bestellungen',
    pay5: 'Digitale Geldbörsen',
    pay6: 'Western Union',
    pay6_sub: 'Internationaler Transfer',
    order_tag: 'Intelligente Bestellung',
    order_title: 'Bestellen Sie Ihr Maßstück',
    order_sub: 'Teilen Sie uns Ihre Bestellung mit und wir melden uns innerhalb von 24 Stunden',
    step1_title: 'Produkt Wählen',
    step2_title: 'Details & Personalisierung',
    step3_title: 'Kontaktinformationen',
    choice_ocean: 'Ozean-Harz-Brett',
    choice_tray_resin: 'Harz-Serviertablett',
    choice_clock: 'Harz-Wanduhr',
    choice_frame: 'Harz-Bilderrahmen',
    choice_cutting: 'Schneidebrett',
    choice_sign: 'Graviertes Schild',
    choice_spoon: 'Holzlöffel',
    choice_custom: 'Maßanfertigung',
    qty_label: 'Menge',
    color_label: 'Bevorzugte Farbe / Stil',
    engraving_label: 'Gravurtext (optional)',
    engraving_ph: 'Ihr Name, Spruch, Datum...',
    notes_label: 'Zusätzliche Hinweise',
    notes_ph: 'Besondere Details...',
    name_label: 'Vollständiger Name *',
    name_ph: 'Ihr Name',
    country_label: 'Land',
    contact_label: 'WhatsApp oder E-Mail *',
    send_via: 'Bestellung senden über:',
    send_wa: 'WhatsApp',
    send_em: 'E-Mail',
    step_next: 'Weiter →',
    step_back: '← Zurück',
    prog1: 'Produkt',
    prog2: 'Details',
    prog3: 'Kontakt',
    summary_title: 'Ihre Bestellzusammenfassung ist bereit!',
    summary_note: 'Sie werden zur Bestellung per WhatsApp oder E-Mail weitergeleitet',
    new_order: 'Neue Bestellung',
    contact_tag: 'Kontaktieren Sie Uns',
    contact_title: 'Wir Sind Für Sie Da',
    chat_now: 'Jetzt Chatten',
    send_email_btn: 'E-Mail Senden',
    follow_us: 'Folgen Sie Uns',
    hours_title: 'Öffnungszeiten',
    hours: 'Sa – Do: 9:00 – 21:00',
    online_now: '● Jetzt Verfügbar',
    footer_tagline: 'Handwerk das Geschichten erzählt, Holz das ewig lebt',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_made: 'Von Menschenhand gemacht 🤲',
    chat_btn: 'KI-Assistent',
    chat_title: 'NobleOliveWood Assistent',
    chat_status: '● Immer Verfügbar',
    chat_welcome: 'Hallo! 👋 Ich bin Ihr NobleOliveWood Assistent. Sagen Sie mir, was Sie suchen — Geschenk, Dekor, Küche — und ich empfehle das Perfekte!',
    q_gift: '🎁 Geschenk',
    q_kitchen: '🍳 Küche',
    q_decor: '🏠 Dekor',
    q_price: '💰 Preise',
    chat_input_ph: 'Schreiben Sie Ihre Frage hier...',
    toast_added: '✓ Produkt zur Bestellung hinzugefügt!',
  }
};

// ---- AI Chat Responses ----
const AI_RESPONSES = {
  ar: {
    gift: {
      keywords: ['هدية', 'هدايا', 'كهدية', 'gift'],
      response: '🎁 للهدايا أنصحك بـ:\n• **لوحة ريزين أوقيانوسية** — مذهلة كهدية ديكور\n• **إطار صورة ريزين** — شخصي وعاطفي\n• **لافتة خشبية منقوشة** — باسم المهدى إليه\n\nما هي مناسبة الهدية؟ سأحدد لك الأنسب! 🌟',
    },
    kitchen: {
      keywords: ['مطبخ', 'طبخ', 'أكل', 'طعام', 'kitchen', 'cooking'],
      response: '🍳 للمطبخ عندنا:\n• **لوح التقطيع** من زيتون — الأكثر طلباً\n• **طبق تقديم ريزين** — للضيوف\n• **ملعقة خشبية** — هدية مطبخية أنيقة\n\nهل تريد قطعة للاستخدام اليومي أم كهدية؟',
    },
    decor: {
      keywords: ['ديكور', 'منزل', 'بيت', 'غرفة', 'decor', 'home'],
      response: '🏠 للديكور إليك أفضل اختياراتنا:\n• **ساعة ريزين جدارية** — تحفة فنية + عملية\n• **لوحة ريزين أوقيانوسية** — لوحة جدارية فريدة\n• **صينية خشبية** — تُزيّن أي طاولة\n\nما هو لون غرفتك؟ سأقترح تنسيقاً مثالياً 🎨',
    },
    price: {
      keywords: ['سعر', 'أسعار', 'بكم', 'كم', 'تكلفة', 'price', 'cost', 'how much'],
      response: '💰 أسعارنا للجميع:\n• الملعقة الخشبية: من **15 USD**\n• اللافتة المنقوشة: من **20 USD**\n• لوح التقطيع: من **25 USD**\n• الطبق والإطار: من **35-60 USD**\n• الساعة الجدارية: من **80 USD**\n\nالشحن يُحدد حسب دولتك. تريد تفاصيل أكثر؟',
    },
    shipping: {
      keywords: ['شحن', 'توصيل', 'إرسال', 'تسليم', 'shipping', 'delivery'],
      response: '🚚 نشحن إلى أكثر من 18 دولة!\n\n• **تونس والمغرب والجزائر**: 3-5 أيام\n• **السعودية والإمارات ومصر**: 5-7 أيام\n• **أوروبا وأمريكا**: 7-14 يوم\n\nنستخدم تغليفاً آمناً ومحترفاً. هل تريد معرفة تكلفة الشحن لدولتك؟',
    },
    resin: {
      keywords: ['ريزين', 'resin', 'أيبوكسي'],
      response: '✨ منتجاتنا بالريزين مميزة جداً!\n\nالريزين هو مادة شفافة تُصبّ مع الخشب مع إضافة ألوان — النتيجة: قطع فنية لا تتكرر.\n\nلدينا:\n🌊 لوحة أوقيانوسية — بألوان البحر\n🌅 طبق تقديم — بألوان الغروب\n🕐 ساعة جدارية — تحفة فنية\n🖼️ إطار صورة — ذاكرة خالدة\n\nأي لون يعجبك أكثر؟',
    },
    custom: {
      keywords: ['مخصص', 'تخصيص', 'خاص', 'اسم', 'نقش', 'custom', 'personalized'],
      response: '✍️ نعم! نصنع قطعاً مخصصة بالكامل:\n\n• **نقش الاسم** أو أي نص تريده بالليزر\n• **اختيار لون الريزين** من أي لون\n• **الأبعاد** حسب طلبك\n• **التغليف** كهدية مميزة\n\nأرسل لنا فكرتك عبر زر الطلب وسنحولها لواقع! 🌟',
    },
    hello: {
      keywords: ['مرحبا', 'هلا', 'أهلا', 'السلام', 'hello', 'hi', 'bonjour', 'hallo'],
      response: 'أهلاً وسهلاً بك! 🌿\n\nأنا مساعدك في ArtisanWood. يمكنني مساعدتك في:\n• اختيار المنتج المناسب\n• معرفة الأسعار\n• الاستفسار عن الشحن\n• الطلب المخصص\n\nبماذا يمكنني خدمتك؟ 😊',
    },
  },
  en: {
    gift: {
      keywords: ['gift', 'present', 'birthday', 'wedding'],
      response: '🎁 For gifts, I recommend:\n• **Ocean Resin Board** — stunning decor gift\n• **Resin Photo Frame** — personal and emotional\n• **Engraved Wood Sign** — with the recipient\'s name\n\nWhat\'s the occasion? I\'ll find the perfect match! 🌟',
    },
    kitchen: {
      keywords: ['kitchen', 'cooking', 'food', 'chef'],
      response: '🍳 For kitchen we have:\n• **Cutting Board** — olive wood, our bestseller\n• **Resin Serving Tray** — perfect for guests\n• **Wooden Spoon** — elegant kitchen gift\n\nIs this for daily use or as a gift?',
    },
    decor: {
      keywords: ['decor', 'home', 'living room', 'decoration', 'wall'],
      response: '🏠 Best decor choices:\n• **Resin Wall Clock** — art piece + functional\n• **Ocean Resin Board** — unique wall art\n• **Wooden Serving Board** — beautifies any table\n\nWhat color is your room? I\'ll suggest perfect coordination 🎨',
    },
    price: {
      keywords: ['price', 'cost', 'how much', 'expensive', 'cheap', 'budget'],
      response: '💰 Our prices for everyone:\n• Wooden Spoon: from **$15**\n• Engraved Sign: from **$20**\n• Cutting Board: from **$25**\n• Tray & Frame: from **$35-60**\n• Wall Clock: from **$80**\n\nShipping is calculated by your country. Want more details?',
    },
    shipping: {
      keywords: ['shipping', 'delivery', 'ship', 'international'],
      response: '🚚 We ship to 18+ countries!\n\n• **North Africa**: 3-5 days\n• **Gulf Countries**: 5-7 days\n• **Europe & USA**: 7-14 days\n\nWe use secure professional packaging. Want to know shipping cost for your country?',
    },
    resin: {
      keywords: ['resin', 'epoxy', 'colored'],
      response: '✨ Our resin products are very special!\n\nResin is a transparent material poured with wood with added colors — the result: unique artistic pieces that never repeat.\n\nWe have:\n🌊 Ocean Board — sea colors\n🌅 Serving Tray — sunset colors\n🕐 Wall Clock — artistic masterpiece\n🖼️ Photo Frame — eternal memory\n\nWhich color attracts you most?',
    },
    custom: {
      keywords: ['custom', 'personalized', 'name', 'engraving', 'special'],
      response: '✍️ Yes! We make fully customized pieces:\n\n• **Name engraving** or any text via laser\n• **Choose resin color** — any color\n• **Custom dimensions** on request\n• **Gift packaging** included\n\nSend us your idea through the order button and we\'ll make it reality! 🌟',
    },
    hello: {
      keywords: ['hello', 'hi', 'hey', 'greetings'],
      response: 'Welcome! 🌿\n\nI\'m your ArtisanWood assistant. I can help you:\n• Choose the right product\n• Know pricing\n• Shipping inquiries\n• Custom orders\n\nHow can I help you? 😊',
    },
  },
  fr: {
    gift: {
      keywords: ['cadeau', 'anniversaire', 'mariage', 'gift'],
      response: '🎁 Pour les cadeaux, je recommande:\n• **Plateau Résine Océan** — magnifique cadeau déco\n• **Cadre Photo Résine** — personnel et émouvant\n• **Panneau Gravé** — avec le nom du destinataire\n\nQuelle est l\'occasion? Je trouverai le parfait! 🌟',
    },
    kitchen: {
      keywords: ['cuisine', 'cuisinier', 'kitchen'],
      response: '🍳 Pour la cuisine nous avons:\n• **Planche à Découper** — bois d\'olivier, notre bestseller\n• **Plateau Résine** — parfait pour les invités\n• **Cuillère Bois** — cadeau cuisine élégant\n\nEst-ce pour un usage quotidien ou comme cadeau?',
    },
    price: {
      keywords: ['prix', 'coût', 'combien', 'price'],
      response: '💰 Nos prix pour tous:\n• Cuillère Bois: à partir de **15$**\n• Panneau Gravé: à partir de **20$**\n• Planche à Découper: à partir de **25$**\n• Plateau & Cadre: à partir de **35-60$**\n• Horloge Murale: à partir de **80$**',
    },
    hello: {
      keywords: ['bonjour', 'salut', 'hello', 'bonsoir'],
      response: 'Bienvenue! 🌿\n\nJe suis votre assistant ArtisanWood. Je peux vous aider à:\n• Choisir le bon produit\n• Connaître les prix\n• Renseignements sur la livraison\n• Commandes personnalisées\n\nComment puis-je vous aider? 😊',
    },
  },
  de: {
    gift: {
      keywords: ['geschenk', 'gift', 'geburtstag', 'hochzeit'],
      response: '🎁 Für Geschenke empfehle ich:\n• **Ozean-Harz-Brett** — atemberaubendes Dekor-Geschenk\n• **Harz-Bilderrahmen** — persönlich und emotional\n• **Graviertes Schild** — mit dem Namen des Empfängers\n\nWelcher Anlass ist es? Ich finde das Perfekte! 🌟',
    },
    price: {
      keywords: ['preis', 'kosten', 'wie viel', 'price'],
      response: '💰 Unsere Preise:\n• Holzlöffel: ab **15$**\n• Graviertes Schild: ab **20$**\n• Schneidebrett: ab **25$**\n• Tablett & Rahmen: ab **35-60$**\n• Wanduhr: ab **80$**',
    },
    hello: {
      keywords: ['hallo', 'guten tag', 'hi', 'hello'],
      response: 'Willkommen! 🌿\n\nIch bin Ihr ArtisanWood-Assistent. Ich kann Ihnen helfen bei:\n• Produktauswahl\n• Preisanfragen\n• Versandinformationen\n• Maßanfertigungen\n\nWie kann ich Ihnen helfen? 😊',
    },
  }
};

// ============================================================
// APP STATE
// ============================================================
let currentLang = 'ar';
let currentStep = 1;
let orderData = {
  product: '',
  quantity: 1,
  color: '',
  engraving: '',
  notes: '',
  name: '',
  country: '',
  contact: ''
};

// ============================================================
// ② LANGUAGE SYSTEM
// ============================================================

function detectBrowserLanguage() {
  const browserLang = navigator.language.substring(0, 2).toLowerCase();
  const supported = ['ar', 'en', 'fr', 'de'];
  return supported.includes(browserLang) ? browserLang : 'ar';
}

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;

  // Update document direction and lang
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
    const key = el.getAttribute('data-placeholder-i18n');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update product names dynamically
  document.querySelectorAll('.product-card').forEach(card => {
    const nameKey = `data-name-${lang}`;
    const name = card.getAttribute(nameKey);
    const nameEl = card.querySelector('.product-name');
    if (name && nameEl) nameEl.textContent = name;
  });

  // Update product card names & descriptions by language
  document.querySelectorAll('.product-name[data-name-ar]').forEach(el => {
    const name = el.getAttribute(`data-name-${lang}`) || el.getAttribute('data-name-en');
    if (name) el.textContent = name;
  });

  document.querySelectorAll('.product-desc[data-desc-ar]').forEach(el => {
    const desc = el.getAttribute(`data-desc-${lang}`) || el.getAttribute('data-desc-en');
    if (desc) el.textContent = desc;
  });

  // Update product footer "from" text
  document.querySelectorAll('.product-footer .product-price').forEach(el => {
    const fromText = { ar: 'من', en: 'From', fr: 'À partir de', de: 'Ab' };
    const strong = el.querySelector('strong');
    if (strong) {
      el.innerHTML = `${fromText[lang] || 'من'} <strong>${strong.textContent}</strong>`;
    }
  });
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save preference
  localStorage.setItem('aw_lang', lang);

  // Update chat welcome if visible
  const chatMessages = document.getElementById('chat-messages');
  if (chatMessages && chatMessages.children.length === 1) {
    chatMessages.querySelector('.chat-msg').textContent = t.chat_welcome || '';
  }
}

// ============================================================
// ③ AI CHAT SYSTEM
// ============================================================

function getBotResponse(input) {
  const text = input.toLowerCase().trim();
  const responses = AI_RESPONSES[currentLang] || AI_RESPONSES['en'];

  // Check each category
  for (const [category, data] of Object.entries(responses)) {
    for (const keyword of data.keywords) {
      if (text.includes(keyword.toLowerCase())) {
        return data.response;
      }
    }
  }

  // Fallback responses
  const fallbacks = {
    ar: 'شكراً على سؤالك! 🤔\n\nللمزيد من المساعدة، يمكنك:\n• استخدام الأزرار السريعة أدناه\n• التواصل مباشرة عبر واتساب\n• أو اضغط على "اطلب الآن" لإرسال طلبك\n\nهل تريد أن أقترح لك منتجاً؟ أخبرني عن الاستخدام: هدية، مطبخ، أو ديكور 😊',
    en: 'Thank you for your question! 🤔\n\nFor more help:\n• Use the quick buttons below\n• Contact us directly via WhatsApp\n• Or click "Order Now" to place your order\n\nWant me to suggest a product? Tell me the use: gift, kitchen, or decor 😊',
    fr: 'Merci pour votre question! 🤔\n\nPour plus d\'aide:\n• Utilisez les boutons rapides ci-dessous\n• Contactez-nous via WhatsApp\n• Ou cliquez sur "Commander"\n\nVoulez-vous que je suggère un produit? Dites-moi l\'usage 😊',
    de: 'Danke für Ihre Frage! 🤔\n\nFür mehr Hilfe:\n• Nutzen Sie die Schnellschaltflächen\n• Kontaktieren Sie uns per WhatsApp\n• Oder klicken Sie auf "Bestellen"\n\nSoll ich ein Produkt empfehlen? Sagen Sie mir den Verwendungszweck 😊',
  };

  return fallbacks[currentLang] || fallbacks['en'];
}

function addChatMessage(text, sender) {
  const msgs = document.getElementById('chat-messages');
  const msg = document.createElement('div');
  msg.className = `chat-msg ${sender}`;
  
  // Convert markdown-style bold to actual formatting
  const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  msg.innerHTML = formatted;
  msgs.appendChild(msg);
  msgs.scrollTop = msgs.scrollHeight;
  return msg;
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  addChatMessage(text, 'user');
  input.value = '';

  // Typing indicator
  const typing = addChatMessage('', 'bot typing');
  
  setTimeout(() => {
    typing.remove();
    const response = getBotResponse(text);
    addChatMessage(response, 'bot');
  }, 800 + Math.random() * 600);
}

function sendQuick(type) {
  const quickTexts = {
    ar: { gift: 'هدية', kitchen: 'مطبخ', decor: 'ديكور', price: 'الأسعار' },
    en: { gift: 'gift', kitchen: 'kitchen', decor: 'decor', price: 'price' },
    fr: { gift: 'cadeau', kitchen: 'cuisine', decor: 'décor', price: 'prix' },
    de: { gift: 'geschenk', kitchen: 'küche', decor: 'dekor', price: 'preis' },
  };
  const texts = quickTexts[currentLang] || quickTexts['en'];
  const text = texts[type] || type;

  addChatMessage(text, 'user');
  
  const typing = addChatMessage('', 'bot typing');
  setTimeout(() => {
    typing.remove();
    const response = getBotResponse(text);
    addChatMessage(response, 'bot');
  }, 800);
}

// ============================================================
// ④ SMART ORDER SYSTEM
// ============================================================

function nextStep(current) {
  // Validate
  if (current === 1) {
    const selected = document.querySelector('input[name="product"]:checked');
    if (!selected) {
      showToast(currentLang === 'ar' ? 'الرجاء اختيار منتج أولاً' : 'Please select a product first');
      return;
    }
    orderData.product = selected.value;
  }
  if (current === 2) {
    orderData.quantity = parseInt(document.getElementById('qty-display').textContent) || 1;
    orderData.engraving = document.getElementById('engraving-text').value;
    orderData.notes = document.getElementById('order-notes').value;
  }

  document.querySelector(`.order-step[data-step="${current}"]`).classList.remove('active');
  document.querySelector(`.order-step[data-step="${current + 1}"]`).classList.add('active');
  currentStep = current + 1;
  updateProgress();
}

function prevStep(current) {
  document.querySelector(`.order-step[data-step="${current}"]`).classList.remove('active');
  document.querySelector(`.order-step[data-step="${current - 1}"]`).classList.add('active');
  currentStep = current - 1;
  updateProgress();
}

function updateProgress() {
  document.querySelectorAll('.progress-dot').forEach(dot => {
    const step = parseInt(dot.dataset.step);
    dot.classList.toggle('active', step === currentStep);
    dot.classList.toggle('done', step < currentStep);
  });
}

function changeQty(delta) {
  const display = document.getElementById('qty-display');
  let qty = parseInt(display.textContent) + delta;
  if (qty < 1) qty = 1;
  if (qty > 99) qty = 99;
  display.textContent = qty;
  orderData.quantity = qty;
}

function selectColor(btn) {
  document.querySelectorAll('.color-opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  orderData.color = btn.dataset.color;
}

const PRODUCT_LABELS = {
  'ocean-resin': { ar: 'لوحة ريزين أوقيانوسية', en: 'Ocean Resin Board', fr: 'Plateau Résine Océan', de: 'Ozean-Harz-Brett' },
  'resin-tray': { ar: 'طبق تقديم ريزين', en: 'Resin Serving Tray', fr: 'Plateau de Service Résine', de: 'Harz-Serviertablett' },
  'resin-clock': { ar: 'ساعة ريزين جدارية', en: 'Resin Wall Clock', fr: 'Horloge Murale Résine', de: 'Harz-Wanduhr' },
  'resin-frame': { ar: 'إطار صورة ريزين', en: 'Resin Photo Frame', fr: 'Cadre Photo Résine', de: 'Harz-Bilderrahmen' },
  'cutting-board': { ar: 'لوح تقطيع خشبي', en: 'Wooden Cutting Board', fr: 'Planche à Découper', de: 'Holz-Schneidebrett' },
  'wood-sign': { ar: 'لافتة خشبية منقوشة', en: 'Engraved Wood Sign', fr: 'Panneau Bois Gravé', de: 'Graviertes Holzschild' },
  'wood-spoon': { ar: 'ملعقة خشبية يدوية', en: 'Hand-carved Wooden Spoon', fr: 'Cuillère Bois Sculptée', de: 'Handgeschnitzter Holzlöffel' },
  'wood-tray': { ar: 'صينية تقديم خشبية', en: 'Wooden Serving Board', fr: 'Plateau de Service en Bois', de: 'Holz-Servierbrett' },
  'custom': { ar: 'طلب مخصص', en: 'Custom Order', fr: 'Commande Personnalisée', de: 'Maßanfertigung' },
};

const COLOR_LABELS = {
  ocean: { ar: '🌊 أزرق أوقياني', en: '🌊 Ocean Blue', fr: '🌊 Bleu Océan', de: '🌊 Ozeanblau' },
  sunset: { ar: '🌅 ألوان الغروب', en: '🌅 Sunset', fr: '🌅 Coucher de Soleil', de: '🌅 Sonnenuntergang' },
  forest: { ar: '🌿 أخضر الغابة', en: '🌿 Forest Green', fr: '🌿 Vert Forêt', de: '🌿 Waldgrün' },
  galaxy: { ar: '🌌 ألوان المجرة', en: '🌌 Galaxy', fr: '🌌 Galaxie', de: '🌌 Galaxie' },
  natural: { ar: '🪵 خشبي طبيعي', en: '🪵 Natural Wood', fr: '🪵 Bois Naturel', de: '🪵 Naturholz' },
  custom: { ar: '🎨 لون مخصص', en: '🎨 Custom Color', fr: '🎨 Couleur Personnalisée', de: '🎨 Benutzerdefinierte Farbe' },
};

function buildOrderMessage() {
  const productLabel = (PRODUCT_LABELS[orderData.product] || {})[currentLang] || orderData.product;
  const colorLabel = orderData.color ? ((COLOR_LABELS[orderData.color] || {})[currentLang] || orderData.color) : '';

  const labels = {
    ar: { product: 'المنتج', qty: 'الكمية', color: 'اللون', engraving: 'النقش', notes: 'ملاحظات', name: 'الاسم', country: 'الدولة', contact: 'التواصل' },
    en: { product: 'Product', qty: 'Quantity', color: 'Color', engraving: 'Engraving', notes: 'Notes', name: 'Name', country: 'Country', contact: 'Contact' },
    fr: { product: 'Produit', qty: 'Quantité', color: 'Couleur', engraving: 'Gravure', notes: 'Notes', name: 'Nom', country: 'Pays', contact: 'Contact' },
    de: { product: 'Produkt', qty: 'Menge', color: 'Farbe', engraving: 'Gravur', notes: 'Hinweise', name: 'Name', country: 'Land', contact: 'Kontakt' },
  };
  const l = labels[currentLang] || labels['en'];

  let msg = `🫒 NobleOliveWood Order\n\n`;
  msg += `${l.product}: ${productLabel}\n`;
  msg += `${l.qty}: ${orderData.quantity}\n`;
  if (colorLabel) msg += `${l.color}: ${colorLabel}\n`;
  if (orderData.engraving) msg += `${l.engraving}: ${orderData.engraving}\n`;
  if (orderData.notes) msg += `${l.notes}: ${orderData.notes}\n`;
  msg += `\n${l.name}: ${orderData.name}\n`;
  msg += `${l.country}: ${orderData.country}\n`;
  msg += `${l.contact}: ${orderData.contact}\n`;

  return msg;
}

function sendOrder(method) {
  orderData.name = document.getElementById('customer-name').value.trim();
  orderData.country = document.getElementById('customer-country').value;
  orderData.contact = document.getElementById('customer-contact').value.trim();

  if (!orderData.name || !orderData.contact) {
    showToast(currentLang === 'ar' ? 'الرجاء ملء الحقول المطلوبة' : 'Please fill required fields');
    return;
  }

  const message = buildOrderMessage();

  // Save to LocalStorage
  const orders = JSON.parse(localStorage.getItem('aw_orders') || '[]');
  orders.push({ ...orderData, timestamp: new Date().toISOString(), message });
  localStorage.setItem('aw_orders', JSON.stringify(orders));

  // Show summary
  document.querySelector('.order-step[data-step="3"]').classList.remove('active');
  const summary = document.getElementById('order-summary');
  summary.classList.remove('hidden');
  
  const summaryEl = document.getElementById('summary-content');
  summaryEl.innerHTML = message.replace(/\n/g, '<br>');

  // Send via method
  setTimeout(() => {
    if (method === 'whatsapp') {
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/21623068889?text=${encoded}`, '_blank');
    } else {
      const subject = encodeURIComponent('NobleOliveWood Order');
      const body = encodeURIComponent(message);
      window.location.href = `mailto:nobleolivewood@gmail.com?subject=${subject}&body=${body}`;
    }
  }, 500);
}

function resetOrder() {
  orderData = { product: '', quantity: 1, color: '', engraving: '', notes: '', name: '', country: '', contact: '' };
  currentStep = 1;

  document.getElementById('order-summary').classList.add('hidden');
  document.querySelectorAll('.order-step').forEach(s => s.classList.remove('active'));
  document.querySelector('.order-step[data-step="1"]').classList.add('active');
  document.querySelectorAll('input[name="product"]').forEach(r => r.checked = false);
  document.getElementById('qty-display').textContent = '1';
  document.getElementById('engraving-text').value = '';
  document.getElementById('order-notes').value = '';
  document.getElementById('customer-name').value = '';
  document.getElementById('customer-contact').value = '';
  document.querySelectorAll('.color-opt').forEach(b => b.classList.remove('selected'));
  updateProgress();
}

// Quick order from product card
function handleQuickOrder(productId) {
  document.querySelectorAll('input[name="product"]').forEach(r => {
    r.checked = r.value === productId;
  });
  orderData.product = productId;
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  showToast();
}

// ============================================================
// ⑤ PRODUCT FILTER & SEARCH
// ============================================================

function filterProducts() {
  const search = document.getElementById('search-input').value.toLowerCase();
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

  let visible = 0;
  document.querySelectorAll('.product-card').forEach(card => {
    const categories = card.dataset.category || '';
    const nameAr = (card.dataset.nameAr || '').toLowerCase();
    const nameEn = (card.dataset.nameEn || '').toLowerCase();
    const nameFr = (card.dataset.nameFr || '').toLowerCase();
    const nameDe = (card.dataset.nameDe || '').toLowerCase();

    const matchFilter = activeFilter === 'all' || categories.includes(activeFilter);
    const matchSearch = !search || nameAr.includes(search) || nameEn.includes(search) || nameFr.includes(search) || nameDe.includes(search);

    const show = matchFilter && matchSearch;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });

  document.getElementById('no-results').classList.toggle('hidden', visible > 0);
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================

function showToast(msg) {
  const toast = document.getElementById('cart-toast');
  const toastMsg = document.getElementById('toast-msg');
  if (msg) toastMsg.textContent = msg;
  else toastMsg.textContent = TRANSLATIONS[currentLang]?.toast_added || '✓ Added!';
  
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

// ============================================================
// NAVBAR & UI
// ============================================================

function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Scroll behavior
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = window.scrollY > 50 
      ? '0 4px 30px rgba(44,26,14,0.15)' 
      : '0 2px 20px rgba(44,26,14,0.06)';
  });
}

// ============================================================
// INTERSECTION OBSERVER ANIMATIONS
// ============================================================

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const animatables = document.querySelectorAll(
    '.value-card, .product-card, .testimonial-card, .payment-card, .contact-card'
  );

  animatables.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    observer.observe(el);
  });
}

// ============================================================
// TESTIMONIALS CAROUSEL (mobile)
// ============================================================

function initTestimonials() {
  const dots = document.getElementById('t-dots');
  const cards = document.querySelectorAll('.testimonial-card');
  const track = document.getElementById('testimonials-track');

  // Only carousel on mobile
  if (window.innerWidth > 900) {
    // Just show all
    cards.forEach(c => { c.style.opacity = '1'; c.style.display = 'block'; });
    return;
  }

  let current = 0;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `t-dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToTestimonial(i));
    dots.appendChild(dot);
  });

  function goToTestimonial(idx) {
    current = idx;
    cards.forEach((c, i) => {
      c.style.display = i === idx ? 'block' : 'none';
    });
    document.querySelectorAll('.t-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }

  goToTestimonial(0);

  document.getElementById('t-prev').addEventListener('click', () => {
    goToTestimonial((current - 1 + cards.length) % cards.length);
  });

  document.getElementById('t-next').addEventListener('click', () => {
    goToTestimonial((current + 1) % cards.length);
  });
}

// ============================================================
// CHAT WIDGET
// ============================================================

function initChat() {
  const toggle = document.getElementById('chat-toggle');
  const box = document.getElementById('chat-box');
  const close = document.getElementById('chat-close');

  toggle.addEventListener('click', () => {
    box.classList.toggle('hidden');
    if (!box.classList.contains('hidden')) {
      document.getElementById('chat-input').focus();
    }
  });

  close.addEventListener('click', () => box.classList.add('hidden'));
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Detect & apply language
  const savedLang = localStorage.getItem('aw_lang') || detectBrowserLanguage();
  applyLanguage(savedLang);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts();
    });
  });

  // Search
  document.getElementById('search-input').addEventListener('input', filterProducts);

  // Quick order buttons
  document.querySelectorAll('.quick-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleQuickOrder(btn.dataset.product);
    });
  });

  // Init components
  initNavbar();
  initChat();
  initTestimonials();
  
  // Delay animations for performance
  setTimeout(initAnimations, 300);

  // Smooth active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}` 
        ? 'var(--wood-dark)' 
        : '';
    });
  });
});
