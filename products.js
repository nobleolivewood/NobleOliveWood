// ============================================================
// NOBLE OLIVEWOOD — PRODUCTS SYSTEM
// Modal + Cart + Reviews
// ============================================================

// ① PRODUCTS DATABASE
// To add a new product: copy a block and fill in your details
const PRODUCTS = {
  'heart-board': {
    id: 'heart-board',
    category: 'natural kitchen gift decor',
    images: [
      'heart-board-1.jpg',
      'heart-board-2.jpg',
      'heart-board-3.jpg',
      'heart-board-4.jpg'
    ],
    badge: '⭐ Bestseller',
    cat: '🌿 Natural Olive Wood',
    rating: 4.9,
    reviewCount: 24,
    name: {
      ar: 'لوح تقطيم شكل قلب',
      en: 'Heart-Shaped Cutting Board',
      fr: 'Planche Cœur en Bois d\'Olivier',
      de: 'Herzförmiges Olivenholzbrett'
    },
    story: {
      ar: 'من غابات الزيتون التونسية العريقة، تُولد كل قطعة وحيدة في العالم. خطوط الخشب تحكي قصة شجرة عاشت قروناً — دفء طبيعي، جمال لا يُعاد، روح لا تُنسخ. هدية تدوم عمراً، وقطعة تُزيّن أي مطبخ بلمسة راقية.',
      en: 'From Tunisia\'s ancient olive groves, each piece is born one-of-a-kind. The wood grain tells the story of a tree that lived for centuries — natural warmth, unrepeatable beauty, a soul that cannot be copied. A gift that lasts a lifetime, a piece that elevates any kitchen.',
      fr: 'Des oliveraies ancestrales de Tunisie, chaque pièce naît unique au monde. Les veines du bois racontent l\'histoire d\'un arbre centenaire — chaleur naturelle, beauté irréplicable, âme incomparable. Un cadeau qui dure toute une vie.',
      de: 'Aus Tunesiens uralten Olivenhainen wird jedes Stück als Unikat geboren. Die Maserung erzählt die Geschichte eines jahrhundertealten Baumes — natürliche Wärme, unwiederholbare Schönheit, eine Seele die nicht kopiert werden kann.'
    },
    sizes: [
      { label: '25 cm', price: 42 },
      { label: '30 cm', price: 49 }
    ],
    hashtags: ['#Handmade', '#OliveWood', '#UniqueGrain', '#LuxuryKitchenDecor', '#GiftableItem'],
    defaultReviews: [
      {
        name: 'Sarah M.',
        country: '🇺🇸 USA',
        rating: 5,
        text: 'Absolutely stunning! The grain pattern is unlike anything I\'ve ever seen. Perfect gift for my sister\'s wedding. Fast shipping too!',
        date: '2025-03-14'
      },
      {
        name: 'Marie L.',
        country: '🇫🇷 France',
        rating: 5,
        text: 'Magnifique! Le bois est d\'une qualité exceptionnelle et la forme cœur est tellement romantique. Je l\'ai offert pour la Saint-Valentin et c\'était un succès total!',
        date: '2025-02-15'
      },
      {
        name: 'Emma K.',
        country: '🇩🇪 Germany',
        rating: 5,
        text: 'Wunderschönes Stück! Die Holzmaserung ist einzigartig und die Qualität ist hervorragend. Sehr schnelle Lieferung und tolle Verpackung.',
        date: '2025-01-20'
      },
      {
        name: 'نورة الزهراني',
        country: '🇸🇦 السعودية',
        rating: 5,
        text: 'قطعة رائعة جداً! اشتريتها هدية لصديقتي وأُعجبت بها كثيراً. الخشب عالي الجودة والشكل جميل جداً. شكراً Noble Olivewood!',
        date: '2025-04-02'
      },
      {
        name: 'Giulia R.',
        country: '🇮🇹 Italy',
        rating: 4,
        text: 'Beautiful piece! The wood is very high quality and the heart shape is perfect. Shipping took a bit longer than expected but worth the wait.',
        date: '2025-03-28'
      }
    ]
  },

  // ── PRODUCT 2: Natural Olive Wood Bowl ──
  'olive-bowl': {
    id: 'olive-bowl',
    category: 'natural kitchen decor gift',
    images: [
      'bowl-1.jpg',
      'bowl-2.jpg',
      'bowl-3.jpg',
      'bowl-4.jpg',
      'bowl-5.jpg',
      'bowl-6.jpg',
      'bowl-7.jpg',
      'bowl-8.jpg'
    ],
    badge: '🆕 New',
    cat: '🌿 Natural Olive Wood',
    rating: 4.8,
    reviewCount: 18,
    name: {
      ar: 'جفنة زيتون طبيعية',
      en: 'Natural Olive Wood Bowl',
      fr: 'Bol en Bois d\'Olivier Naturel',
      de: 'Natürliche Olivenholzschüssel'
    },
    story: {
      ar: 'لم تُصنع — بل وُلدت. كل جفنة تنبثق من جذع زيتون عريق، تحمل ذاكرة قرون من الشمس والريح والأرض التونسية. الحواف الطبيعية غير المنتظمة ليست عيباً — إنها التوقيع الذي لا يُزوَّر. تحفة فنية تعيش على طاولتك وتروي قصة لا تُقرأ في كتاب.',
      en: 'Not made — but born. Each bowl emerges from the trunk of an ancient olive tree, carrying centuries of Tunisian sun, wind, and earth. The raw, irregular natural edges are not flaws — they are the unforgeable signature of time. A living sculpture that tells a story no book can hold.',
      fr: 'Pas fabriqué — mais né. Chaque bol émerge du tronc d\'un olivier ancestral, portant des siècles de soleil, de vent et de terre tunisienne. Les bords naturels irréguliers ne sont pas des défauts — ce sont la signature infalsifiable du temps. Une sculpture vivante qui raconte une histoire.',
      de: 'Nicht hergestellt — sondern geboren. Jede Schüssel entsteht aus dem Stamm eines uralten Olivenbaums und trägt jahrhundertelange tunesische Sonne, Wind und Erde. Die rauen, unregelmäßigen Kanten sind keine Mängel — sie sind die unverfälschliche Signatur der Zeit.'
    },
    sizes: [
      { label: '8 cm',  price: 22 },
      { label: '10 cm', price: 26 },
      { label: '12 cm', price: 30 },
      { label: '14 cm', price: 36 },
      { label: '16 cm', price: 40 },
      { label: '18 cm', price: 46 }
    ],
    hashtags: [
      '#OrganicWoodenBowl',
      '#SculpturalCenterpiece',
      '#ArtisanHomePiece',
      '#LuxuryOliveWoodDecor',
      '#Handmade',
      '#OliveWood',
      '#UniqueGrain'
    ],
    defaultReviews: [
      {
        name: 'Clara B.',
        country: '🇫🇷 France',
        rating: 5,
        text: 'Cette pièce est absolument magnifique! Les veines du bois sont hypnotisantes. Je l\'utilise comme centre de table et tout le monde me demande d\'où elle vient. Un vrai chef-d\'œuvre artisanal!',
        date: '2025-04-10'
      },
      {
        name: 'James T.',
        country: '🇬🇧 United Kingdom',
        rating: 5,
        text: 'Stunning piece! The natural edges give it such a raw, organic beauty. It arrived perfectly packaged and looks even better in person. Worth every penny!',
        date: '2025-03-22'
      },
      {
        name: 'Lena W.',
        country: '🇩🇪 Germany',
        rating: 5,
        text: 'Absolut beeindruckend! Die natürliche Maserung des Holzes ist einzigartig. Ich habe die 25cm Version bestellt und sie ist perfekt als Obstschale auf meinem Esstisch.',
        date: '2025-02-18'
      },
      {
        name: 'سارة القحطاني',
        country: '🇸🇦 السعودية',
        rating: 5,
        text: 'قطعة فنية بكل معنى الكلمة! الجفنة وصلت بتغليف رائع وكانت أجمل مما توقعت. أهديتها لوالدتي وأُعجبت بها جداً. شكراً Noble Olivewood!',
        date: '2025-04-01'
      },
      {
        name: 'Sofia M.',
        country: '🇮🇹 Italy',
        rating: 4,
        text: 'Bellissimo pezzo! Il legno d\'ulivo ha una texture meravigliosa. Ho preso la versione da 30cm e la uso come ciotola decorativa. Qualità eccellente!',
        date: '2025-03-05'
      }
    ]
  },

  // ── PRODUCT 3: Noir Mosaic Olive Wood Board ──
  'mosaic-board': {
    id: 'mosaic-board',
    category: 'natural kitchen decor gift',
    images: [
      'mosaic-1.jpg',
      'mosaic-2.jpg',
      'mosaic-3.jpg',
      'mosaic-4.jpg',
      'mosaic-5.jpg',
      'mosaic-6.jpg'
    ],
    badge: '✦ Signature',
    cat: '🖤 Noir Olive Wood',
    rating: 5.0,
    reviewCount: 12,
    name: {
      ar: 'لوح موزاييك أسود — Noir Mosaic Board',
      en: 'Noir Mosaic Olive Wood Board',
      fr: 'Planche Mosaïque Noir en Bois d\'Olivier',
      de: 'Noir Mosaik Olivenholzbrett'
    },
    story: {
      ar: 'تأليف من التناقض والإيقاع والحرفية. هذا اللوح مصنوع بالكامل من خشب الزيتون الطبيعي — مجمّع قطعة قطعة بنمط هندسي جريء يجمع بين دفء الخشب الطبيعي وعمق الألوان الداكنة. لا راتنج. لا أسطح اصطناعية. فقط خشب زيتون صلب شُكّل بعناية حرفية استثنائية. قطعة واحدة من نوعها — مصممة للمطابخ الراقية والديكورات التي تقدّر المواد الأصيلة.\n\n• مصنوع يدوياً من خشب الزيتون الصلب\n• تفاصيل بخشب زيتون مصبوغ داكن\n• الحجم: 30 × 30 سم\n• الوزن التقريبي: 2 كغ\n• تشطيب آمن للطعام\n• حرفية لا تتكرر\n• شحن دولي متاح',
      en: 'An intricate composition of contrast, rhythm, and craftsmanship. Handcrafted entirely from natural olive wood — individually assembled in a striking geometric mosaic pattern combining warm organic grain with carefully dark-stained olive wood pieces. No resin. No artificial surfaces. Only solid olive wood shaped through exceptional artisan work.\n\n• Handmade from solid olive wood\n• Dark-stained olive wood detailing\n• Size: 30 × 30 cm\n• Approx. weight: 2 kg\n• Food-safe finish\n• One-of-a-kind craftsmanship\n• International shipping available',
      fr: 'Une composition complexe de contraste, de rythme et de savoir-faire. Entièrement fabriqué à la main en bois d\'olivier naturel — assemblé individuellement dans un motif mosaïque géométrique frappant. Pas de résine. Pas de surfaces artificielles.\n\n• Fait main en bois d\'olivier massif\n• Détails en bois d\'olivier teinté foncé\n• Taille: 30 × 30 cm • Poids: ~2 kg\n• Finition alimentaire • Pièce unique\n• Livraison internationale disponible',
      de: 'Eine komplexe Komposition aus Kontrast, Rhythmus und Handwerkskunst. Vollständig von Hand aus natürlichem Olivenholz gefertigt — einzeln in einem auffälligen geometrischen Mosaikmuster zusammengesetzt. Kein Harz. Keine künstlichen Oberflächen.\n\n• Handgefertigt aus massivem Olivenholz\n• Dunkel gebeizte Olivenholzdetails\n• Größe: 30 × 30 cm • Gewicht: ~2 kg\n• Lebensmittelsichere Oberfläche • Unikat\n• Internationaler Versand verfügbar'
    },
    sizes: [
      { label: '30 × 30 cm — ~2kg', price: 165 }
    ],
    hashtags: [
      '#OliveWood', '#OliveWoodBoard', '#CuttingBoard', '#ServingBoard',
      '#HandmadeWoodwork', '#Woodworking', '#LuxuryKitchen', '#KitchenDecor',
      '#ArtisanMade', '#WoodArt', '#WoodDesign', '#ModernKitchen',
      '#KitchenAccessories', '#HomeDecor', '#LuxuryDecor', '#Craftsmanship',
      '#NaturalWood', '#WoodenBoard', '#OliveWoodCraft', '#StatementPiece',
      '#EtsySeller', '#Handcrafted', '#InteriorStyling', '#FineCraftsmanship',
      '#MinimalLuxury'
    ],
    defaultReviews: [
      {
        name: 'Thomas H.',
        country: '🇩🇪 Germany',
        rating: 5,
        text: 'This board is an absolute masterpiece. The geometric mosaic pattern is breathtaking and the quality is outstanding. It\'s become the centrepiece of my kitchen. Worth every euro!',
        date: '2025-04-20'
      },
      {
        name: 'Isabelle D.',
        country: '🇫🇷 France',
        rating: 5,
        text: 'Une pièce d\'exception! Le motif mosaïque est absolument saisissant. Je l\'utilise comme planche de service lors de mes dîners et tous mes invités sont impressionnés. Un vrai chef-d\'œuvre.',
        date: '2025-03-15'
      },
      {
        name: 'Marco V.',
        country: '🇮🇹 Italy',
        rating: 5,
        text: 'Semplicemente straordinario! La qualità del legno d\'ulivo è eccezionale e il design a mosaico è unico. Perfetto come tagliere e come pezzo decorativo.',
        date: '2025-02-28'
      },
      {
        name: 'عبدالله المنصور',
        country: '🇸🇦 السعودية',
        rating: 5,
        text: 'قطعة فنية لا مثيل لها! النمط الهندسي مذهل والصنعة استثنائية. أهديتها لصديق في مناسبة خاصة وكانت الهدية الأجمل على الإطلاق.',
        date: '2025-04-05'
      },
      {
        name: 'Sophie W.',
        country: '🇬🇧 United Kingdom',
        rating: 5,
        text: 'Stunning piece of craftsmanship! The contrast between the natural and dark olive wood is mesmerising. Heavy, solid, and beautifully finished. A true statement piece.',
        date: '2025-03-30'
      }
    ]
  },

  // ── PRODUCT 4: Olive Crest Serving Board ──
  'crest-board': {
    id: 'crest-board',
    category: 'natural kitchen gift decor',
    images: [
      'crest-1.jpg',
      'crest-2.jpg',
      'crest-3.jpg',
      'crest-4.jpg',
      'crest-5.jpg'
    ],
    badge: '🆕 New',
    cat: '🌿 Natural Olive Wood',
    rating: 4.9,
    reviewCount: 16,
    name: {
      ar: 'لوح تقديم Olive Crest',
      en: 'Olive Crest Serving Board',
      fr: 'Planche de Service Olive Crest',
      de: 'Olive Crest Servierbrett'
    },
    story: {
      ar: 'مصنوع من خشب الزيتون الصلب الأصيل، يُبرز هذا اللوح الخطوط الطبيعية المتدفقة والأتون الذهبية الدافئة الفريدة في كل قطعة. شكله العضوي ومقبضه المنحني الناعم يخلقان توازناً مثالياً بين الأصالة الريفية والتصميم الحديث الراقي.\n\nمثالي لتقديم الجبن، الخبز، المعجنات، المقبلات، أو كقطعة ديكور أنيقة في مطبخك.\n\n✧ مصنوع يدوياً من خشب الزيتون الأصيل ✧ أنماط حبوب طبيعية فريدة ✧ سطح ناعم ومصقول يدوياً ✧ مقبض تقديم وظيفي ✧ تشطيب آمن للطعام ✧ متوفر بـ4 أحجام ✧ شحن دولي متاح',
      en: 'Crafted from solid olive wood, this serving board highlights the natural flowing grain and warm golden tones unique to every piece. Its organic silhouette and smooth curved handle create a balance between rustic authenticity and refined modern design.\n\nPerfect for serving cheese, bread, pastries, appetizers, or as an elegant kitchen display piece.\n\n✧ Handmade from authentic olive wood ✧ Naturally unique grain patterns ✧ Smooth hand-finished surface ✧ Functional serving handle ✧ Food-safe finish ✧ Available in 4 sizes ✧ International shipping available',
      fr: 'Fabriquée en bois d\'olivier massif, cette planche met en valeur le grain naturel fluide et les tons dorés chauds uniques à chaque pièce. Sa silhouette organique et sa poignée incurvée créent un équilibre entre authenticité rustique et design moderne raffiné.\n\nParfaite pour servir fromages, pain, viennoiseries, ou comme pièce décorative élégante.\n\n✧ Fait main en bois d\'olivier ✧ Grain naturel unique ✧ Surface lissée à la main ✧ Poignée fonctionnelle ✧ Finition alimentaire ✧ 4 tailles disponibles ✧ Livraison internationale',
      de: 'Aus massivem Olivenholz gefertigt, hebt dieses Servierbrett die natürliche Maserung und warmen Goldtöne hervor, die jedes Stück einzigartig machen. Seine organische Silhouette und der geschwungene Griff schaffen eine Balance zwischen rustikaler Authentizität und modernem Design.\n\nPerfekt für Käse, Brot, Gebäck, Vorspeisen oder als elegantes Küchendekorelement.\n\n✧ Handgefertigt aus echtem Olivenholz ✧ Einzigartiges Naturmaserung ✧ Handgeglättete Oberfläche ✧ Funktionaler Griff ✧ Lebensmittelsicher ✧ 4 Größen ✧ Internationaler Versand'
    },
    sizes: [
      { label: '25 cm', price: 42 },
      { label: '30 cm', price: 52 },
      { label: '35 cm', price: 75 },
      { label: '40 cm', price: 100 }
    ],
    hashtags: [
      '#OliveWood', '#ServingBoard', '#CheeseBoard', '#HandmadeKitchen',
      '#LuxuryKitchen', '#WoodenBoard', '#RusticLuxury', '#ArtisanCraft',
      '#OliveWoodBoard', '#KitchenDecor', '#CharcuterieBoard', '#NaturalWood',
      '#HandcraftedDecor', '#ModernRustic', '#EtsyHomeDecor'
    ],
    defaultReviews: [
      {
        name: 'Emma R.',
        country: '🇬🇧 United Kingdom',
        rating: 5,
        text: 'This board is absolutely beautiful! The grain pattern is stunning and the handle makes it so easy to use. I use it for cheese boards when entertaining and always get compliments. Truly one of a kind!',
        date: '2025-04-18'
      },
      {
        name: 'Pierre M.',
        country: '🇫🇷 France',
        rating: 5,
        text: 'Magnifique planche! Le bois d\'olivier est d\'une qualité exceptionnelle et la forme est très élégante. Je l\'utilise pour mes plateaux de fromages et tout le monde est impressionné. Livraison rapide et bien emballée.',
        date: '2025-03-25'
      },
      {
        name: 'Anna S.',
        country: '🇩🇪 Germany',
        rating: 5,
        text: 'Wunderschönes Brett! Die Holzmaserung ist einzigartig und die Qualität ist hervorragend. Perfekt als Servierbrett für Käse und Brot. Sehr schnelle Lieferung und tolle Verpackung. Absolut empfehlenswert!',
        date: '2025-02-10'
      },
      {
        name: 'منى الرشيدي',
        country: '🇸🇦 السعودية',
        rating: 5,
        text: 'لوح رائع جداً! الخشب طبيعي وجميل والشكل أنيق. استخدمته في تقديم الجبن والفواكه وكان محط إعجاب الجميع. التوصيل كان سريعاً والتغليف احترافي. أنصح به بشدة!',
        date: '2025-04-08'
      },
      {
        name: 'Lucas B.',
        country: '🇧🇪 Belgium',
        rating: 5,
        text: 'Superbe planche en bois d\'olivier! La qualité est vraiment exceptionnelle et le bois est magnifique. Je l\'ai offerte en cadeau et la personne était ravie. Un must-have pour tout amateur de cuisine!',
        date: '2025-03-12'
      }
    ]
  },

  // ── PRODUCT 5: Olive Wood & Black Epoxy Resin River Tray ──
  'resin-tray': {
    id: 'resin-tray',
    category: 'resin decor gift kitchen',
    images: [
      'resin-tray-1.jpg',
      'resin-tray-2.jpg',
      'resin-tray-3.jpg',
      'resin-tray-4.jpg',
      'resin-tray-5.jpg',
      'resin-tray-6.jpg',
      'resin-tray-7.jpg'
    ],
    badge: '✦ Luxury',
    cat: '🖤 Olive Wood × Black Epoxy',
    rating: 5.0,
    reviewCount: 20,
    name: {
      ar: 'صينية ريزين أسود ونهر زيتون — River Tray',
      en: 'Olive Wood & Black Epoxy Resin River Tray',
      fr: 'Plateau Rivière Bois d\'Olivier & Époxy Noir',
      de: 'Olivenholz & Schwarzes Epoxidharz River Tablett'
    },
    story: {
      ar: 'حيث يلتقي الخشب بالمعدن ويجري النهر بين الضفتين — تولد هذه الصينية الاستثنائية. خشب الزيتون الدافئ يتشابك مع ايبوكسي أسود لامع في نمط "نهري" حر، محاط بمقابض ذهبية أنيقة تضفي لمسة فندقية راقية.\n\nمثالية للتقديم على طاولة القهوة، خدمة الإفطار في السرير، تنظيم الحمام الفاخر، أو كتحفة ديكور تستحوذ على الأنظار.\n\n✧ خشب زيتون طبيعي أصيل ✧ ايبوكسي أسود لامع عالي الجودة ✧ مقابض ذهبية فاخرة ✧ نمط نهري فريد لا يتكرر ✧ مثالية للتقديم والديكور ✧ شحن دولي متاح',
      en: 'Where wood meets metal and a river flows between two shores — this exceptional tray is born. Warm olive wood intertwines with glossy black epoxy in a free "river" pattern, framed by elegant gold handles that give it a luxurious hotel-like feel.\n\nPerfect for serving on a coffee table, breakfast in bed, organizing a luxury bathroom, or as a statement décor piece.\n\n✧ Authentic natural olive wood ✧ High-quality glossy black epoxy ✧ Luxury gold handles ✧ Unique unrepeatable river pattern ✧ Perfect for serving & decor ✧ International shipping available',
      fr: 'Là où le bois rencontre le métal et où une rivière coule entre deux rives — ce plateau exceptionnel est né. Le bois d\'olivier chaud s\'entrelace avec de l\'époxy noir brillant dans un motif "rivière" libre, encadré de poignées dorées élégantes.\n\nParfait pour servir sur une table basse, le petit-déjeuner au lit, organiser une salle de bain de luxe, ou comme pièce décorative.\n\n✧ Bois d\'olivier naturel authentique ✧ Époxy noir brillant haute qualité ✧ Poignées dorées luxueuses ✧ Motif rivière unique ✧ Livraison internationale',
      de: 'Wo Holz auf Metall trifft und ein Fluss zwischen zwei Ufern fließt — dieses außergewöhnliche Tablett entsteht. Warmes Olivenholz verflechtet sich mit glänzendem schwarzem Epoxidharz in einem freien "Fluss"-Muster, gerahmt von eleganten Goldgriffen.\n\nPerfekt als Serviertablett auf dem Couchtisch, Frühstück im Bett, luxuriöses Badezimmer-Organizer oder als dekoratives Statement-Piece.\n\n✧ Echtes natürliches Olivenholz ✧ Hochwertiges glänzendes schwarzes Epoxidharz ✧ Luxuriöse Goldgriffe ✧ Einzigartiges Flussmuster ✧ Internationaler Versand'
    },
    sizes: [
      { label: '30 cm', price: 100 },
      { label: '40 cm', price: 140 },
      { label: '50 cm', price: 200 },
      { label: '60 cm', price: 250 }
    ],
    hashtags: [
      '#EpoxyArt', '#RiverTray', '#OliveWoodResin', '#LuxuryHomeDecor',
      '#GoldHandles', '#HandmadeLuxury', '#ResinRiver', '#ServingTray',
      '#ModernFarmhouse', '#HousewarmingGift', '#BlackEpoxy', '#ArtisanCrafted'
    ],
    defaultReviews: [
      {
        name: 'Victoria H.',
        country: '🇬🇧 United Kingdom',
        rating: 5,
        text: 'This tray is an absolute showstopper! The combination of olive wood and black epoxy with gold handles is stunning. I use it on my coffee table and everyone who visits asks where I got it. Truly one of a kind!',
        date: '2025-04-22'
      },
      {
        name: 'Amélie C.',
        country: '🇫🇷 France',
        rating: 5,
        text: 'Un plateau d\'une beauté exceptionnelle! Le mélange bois d\'olivier et époxy noir avec les poignées dorées est absolument magnifique. Je l\'utilise pour le service du champagne et c\'est un effet garanti!',
        date: '2025-03-18'
      },
      {
        name: 'Klaus B.',
        country: '🇩🇪 Germany',
        rating: 5,
        text: 'Absolut beeindruckendes Tablett! Die Kombination aus Olivenholz und schwarzem Epoxidharz mit den goldenen Griffen ist einmalig. Perfekt als Dekoration und zum Servieren. Sehr schnelle Lieferung!',
        date: '2025-02-25'
      },
      {
        name: 'ريم العمري',
        country: '🇸🇦 السعودية',
        rating: 5,
        text: 'صينية خيالية! الجمع بين خشب الزيتون والريزين الأسود مع المقابض الذهبية شيء لم أره من قبل. وضعتها على طاولة الصالون وأصبحت محط إعجاب كل الزوار. توصيل سريع وتغليف رائع!',
        date: '2025-04-12'
      },
      {
        name: 'Elena M.',
        country: '🇮🇹 Italy',
        rating: 5,
        text: 'Vassoio magnifico! La combinazione di legno d\'ulivo e resina epossidica nera con le maniglie dorate è semplicemente straordinaria. Lo uso nel mio bagno di lusso e sembra un pezzo da galleria d\'arte!',
        date: '2025-03-08'
      }
    ]
  },

  // ── PRODUCT 6: Olive Mosaic End Grain Cutting Board ──
  'olive-mosaic': {
    id: 'olive-mosaic',
    category: 'natural kitchen gift',
    images: [
      'olive-mosaic-1.jpg','olive-mosaic-2.jpg','olive-mosaic-3.jpg',
      'olive-mosaic-4.jpg','olive-mosaic-5.jpg','olive-mosaic-6.jpg',
      'olive-mosaic-7.jpg','olive-mosaic-8.jpg','olive-mosaic-9.jpg',
      'olive-mosaic-10.jpg','olive-mosaic-11.jpg','olive-mosaic-12.jpg',
      'olive-mosaic-13.jpg'
    ],
    badge: '🏆 Flagship',
    cat: '🌿 End Grain Olive Wood',
    rating: 5.0,
    reviewCount: 31,
    name: {
      ar: 'لوح Olive Mosaic — الموزاييك الذهبي',
      en: 'Olive Mosaic — End Grain Cutting Board',
      fr: 'Olive Mosaic — Planche à Découper Bout de Grain',
      de: 'Olive Mosaic — Hirnholz Schneidebrett'
    },
    story: {
      ar: 'تعرّف على Olive Mosaic — لوح التقطيع الرائد من خشب الزيتون التونسي عالي الجودة، المصنوع يدوياً.\n\nكل قطعة خشب تُقطع وتُرتّب وتُجمَّع بعناية لإنشاء نمط موزاييك مذهل — جميل من الخارج وصلب من الداخل. بناء "End Grain" يعني أن سكاكينك تبقى حادة أطول، والخدوش تُشفى بمرور الوقت، والسطح يكتسب طابعاً أعمق مع كل استخدام.\n\nمزوّد بأخدود لعصير الفواكه يُبقي مطبخك نظيفاً — قطعة جمالية وعملية في آنٍ واحد. قطعة تُورَث.\n\n✦ بناء End Grain — لطيف على السكاكين وذاتي الشفاء ✦ خشب زيتون تونسي 100% طبيعي ✦ أخدود للعصير للتقديم النظيف ✦ تشطيب آمن للطعام ✦ كل لوح فريد لا يتكرر',
      en: 'Meet Olive Mosaic — our flagship end grain cutting board, handcrafted from premium Tunisian olive wood.\n\nEvery piece of wood is carefully cut, arranged, and joined to create a stunning mosaic pattern that\'s not just beautiful — it\'s built to last a lifetime. The end grain construction means your knives stay sharper longer, cuts self-heal over time, and the surface only grows more character with every use.\n\nFinished with a juice groove that keeps your counters clean, this board is as functional as it is stunning. A piece you\'ll pass down.\n\n✦ End grain construction — knife-friendly & self-healing ✦ 100% natural Tunisian olive wood ✦ Juice groove border for clean serving ✦ Food-safe finish — ready to use from day one ✦ Each board is unique — no two are ever the same',
      fr: 'Découvrez Olive Mosaic — notre planche à découper bout de grain phare, artisanalement fabriquée en bois d\'olivier tunisien premium.\n\nChaque pièce de bois est soigneusement coupée, arrangée et assemblée pour créer un motif mosaïque époustouflant — beau et durable à vie. La construction bout de grain signifie que vos couteaux restent plus tranchants, les coupures se cicatrisent avec le temps, et la surface développe encore plus de caractère.\n\n✦ Construction bout de grain — douce pour les couteaux ✦ 100% bois d\'olivier tunisien naturel ✦ Rainure à jus pour un service propre ✦ Finition alimentaire ✦ Chaque planche est unique',
      de: 'Treffen Sie Olive Mosaic — unser Flaggschiff-Hirnholzschneidebrett aus premium tunesischem Olivenholz, handgefertigt.\n\nJedes Holzstück wird sorgfältig geschnitten, angeordnet und zusammengefügt, um ein atemberaubendes Mosaikmuster zu schaffen. Die Hirnholzkonstruktion bedeutet, dass Ihre Messer länger scharf bleiben und Schnitte sich mit der Zeit selbst heilen.\n\n✦ Hirnholzkonstruktion — messerfreundlich & selbstheilend ✦ 100% natürliches tunesisches Olivenholz ✦ Saftrille für sauberes Servieren ✦ Lebensmittelsichere Oberfläche ✦ Jedes Brett ist einzigartig'
    },
    sizes: [
      { label: '30 × 30 cm', price: 89 },
      { label: '30 × 40 cm', price: 119 },
      { label: '35 × 50 cm', price: 159 },
      { label: '60 × 40 cm', price: 199 }
    ],
    hashtags: [
      '#EndGrainCuttingBoard', '#OliveMosaic', '#OliveWoodBoard',
      '#CuttingBoardOfTheDay', '#KnifeBoard', '#EndGrainWood',
      '#TunisianOliveWood', '#HandcraftedBoard', '#WoodworkingCommunity',
      '#KitchenArt', '#LuxuryCutting', '#ChefBoard',
      '#NaturalWoodKitchen', '#ArtisanWoodwork', '#FoodSafeWood',
      '#MadeToLast', '#GiftForChef', '#HomeChefLife',
      '#WoodGrainBeauty', '#BuyHandmade'
    ],
    defaultReviews: [
      {
        name: 'James W.',
        country: '🇺🇸 USA',
        rating: 5,
        text: 'This is absolutely the most beautiful cutting board I\'ve ever owned. The end grain pattern is stunning and it performs even better than it looks. My knives glide across it effortlessly. Worth every penny!',
        date: '2025-04-25'
      },
      {
        name: 'Charlotte D.',
        country: '🇫🇷 France',
        rating: 5,
        text: 'Une planche extraordinaire! Le motif mosaïque est absolument magnifique et la qualité est irréprochable. Je l\'utilise tous les jours et elle est encore plus belle qu\'au premier jour. Un vrai investissement!',
        date: '2025-03-30'
      },
      {
        name: 'Hans M.',
        country: '🇩🇪 Germany',
        rating: 5,
        text: 'Absolut beeindruckendes Schneidebrett! Die Hirnholzkonstruktion ist perfekt für die Messerpflege und das Mosaikmuster ist einzigartig schön. Sehr schnelle Lieferung und perfekte Verpackung.',
        date: '2025-02-20'
      },
      {
        name: 'خالد العتيبي',
        country: '🇸🇦 السعودية',
        rating: 5,
        text: 'لوح تقطيع استثنائي! الجودة تفوق التوقعات والنمط الموزاييكي مذهل. استخدمته يومياً لأشهر ولا يزال كأنه جديد. هدية مثالية لمحبي الطبخ!',
        date: '2025-04-15'
      },
      {
        name: 'Sofia L.',
        country: '🇮🇹 Italy',
        rating: 5,
        text: 'Il tagliere più bello che abbia mai visto! La costruzione a grana finale è perfetta per i coltelli e il motivo a mosaico è semplicemente straordinario. Lo consiglio vivamente a tutti gli appassionati di cucina!',
        date: '2025-03-18'
      }
    ]
  },

  // ── PRODUCT 7: Rustic Olive Bread Board ──
  'bread-board': {
    id: 'bread-board',
    category: 'natural kitchen gift decor',
    images: [
      'bread-board-1.jpg',
      'bread-board-2.jpg',
      'bread-board-3.jpg',
      'bread-board-4.jpg',
      'bread-board-5.jpg',
      'bread-board-6.jpg'
    ],
    badge: '🍞 New',
    cat: '🌿 Natural Olive Wood',
    rating: 4.9,
    reviewCount: 22,
    name: {
      ar: 'لوح خبز زيتون ريفي — Rustic Bread Board',
      en: 'Rustic Olive Bread Board',
      fr: 'Planche à Pain Rustique en Bois d\'Olivier',
      de: 'Rustikales Olivenholz Brotbrett'
    },
    story: {
      ar: 'مصنوع للمتع البسيطة في المطبخ 🍞✨\n\nمصنوع يدوياً من خشب الزيتون الأصيل، هذا اللوح مصمم لدمج الوظيفية مع الجمال الطبيعي الخالد. الجزء العلوي المزلق القابل للإزالة يساعد على تجميع الفتات بشكل أنيق، مما يجعل كل لحظة تقديم أنظف وأكثر أناقة.\n\nقطعة عملية وجميلة لمحبي الخبز، موائد الإفطار، والديكور الريفي الراقي.\n\n✦ خشب زيتون طبيعي 100% ✦ غطاء علوي مزلق قابل للإزالة ✦ يحتجز الفتات بأناقة ✦ تشطيب آمن للطعام ✦ مثالي للإفطار والتقديم',
      en: 'Crafted for the simple pleasures of the kitchen 🍞✨\n\nHandmade from authentic olive wood, this bread cutting board is designed to combine functionality with timeless natural beauty. The removable slatted top helps collect crumbs neatly, making every serving moment cleaner and more elegant.\n\nA practical and beautiful piece for bread lovers, breakfast tables, and rustic kitchen décor.\n\n✦ 100% natural olive wood ✦ Removable slatted crumb-catching top ✦ Keeps your table clean & elegant ✦ Food-safe finish ✦ Perfect for breakfast & serving',
      fr: 'Conçu pour les plaisirs simples de la cuisine 🍞✨\n\nFabriqué à la main en bois d\'olivier authentique, cette planche à pain combine fonctionnalité et beauté naturelle intemporelle. Le dessus à lattes amovible collecte les miettes proprement, rendant chaque moment de service plus élégant.\n\nUne pièce pratique et belle pour les amateurs de pain, les tables de petit-déjeuner et la décoration de cuisine rustique.\n\n✦ Bois d\'olivier 100% naturel ✦ Dessus à lattes amovible ✦ Retient les miettes élégamment ✦ Finition alimentaire ✦ Parfait pour le petit-déjeuner',
      de: 'Gefertigt für die einfachen Freuden der Küche 🍞✨\n\nHandgefertigt aus echtem Olivenholz verbindet dieses Brotschneidebrett Funktionalität mit zeitloser natürlicher Schönheit. Der abnehmbare Lamellen-Aufsatz fängt Krümel ordentlich auf und macht jeden Serviermoment eleganter.\n\nEin praktisches und schönes Stück für Brotliebhaber, Frühstückstische und rustikales Küchendékor.\n\n✦ 100% natürliches Olivenholz ✦ Abnehmbarer Krümmel-Lamellen-Aufsatz ✦ Hält Ihren Tisch sauber ✦ Lebensmittelsichere Oberfläche ✦ Perfekt zum Frühstück'
    },
    sizes: [
      { label: 'Standard', price: 49 }
    ],
    hashtags: [
      '#olivewood', '#breadboard', '#cuttingboard', '#olivewoodcraft',
      '#kitchendecor', '#handmadehome', '#woodart', '#artisanmade',
      '#naturalwood', '#kitchenessentials', '#breadlover', '#rustickitchen',
      '#homedecor', '#madebyhand', '#woodworking', '#custommade',
      '#giftideas', '#aesthetickitchen',
      '#خشب_الزيتون', '#لوح_خبز', '#صناعة_يدوية', '#مطبخ_فاخر'
    ],
    defaultReviews: [
      {
        name: 'Laura M.',
        country: '🇬🇧 United Kingdom',
        rating: 5,
        text: 'This bread board is absolutely gorgeous! The slatted top is so clever for catching crumbs and the olive wood grain is beautiful. It looks stunning on my breakfast table every morning. Highly recommend!',
        date: '2025-04-28'
      },
      {
        name: 'Sophie B.',
        country: '🇫🇷 France',
        rating: 5,
        text: 'Magnifique planche à pain! Le dessus à lattes est très pratique pour les miettes et le bois d\'olivier est absolument splendide. Je l\'utilise tous les matins et elle embellit ma table de petit-déjeuner.',
        date: '2025-03-22'
      },
      {
        name: 'Lena K.',
        country: '🇩🇪 Germany',
        rating: 5,
        text: 'Wunderschönes Brotbrett! Das abnehmbare Latten-Oberteil ist sehr praktisch für Krümel und das Olivenholz ist einfach traumhaft. Perfektes Geschenk für Brotliebhaber!',
        date: '2025-02-14'
      },
      {
        name: 'هند الغامدي',
        country: '🇸🇦 السعودية',
        rating: 5,
        text: 'لوح خبز رائع! الجزء العلوي المزلق فكرة ذكية جداً لتجميع الفتات والخشب جميل ودافئ. يزيّن طاولة الإفطار ويجعل كل صباح أجمل. أنصح به بشدة!',
        date: '2025-04-10'
      },
      {
        name: 'Marco R.',
        country: '🇮🇹 Italy',
        rating: 5,
        text: 'Tagliere del pane bellissimo! Il piano a listelli è geniale per raccogliere le briciole e il legno d\'ulivo è meraviglioso. Lo uso ogni mattina e la mia colazione è diventata un momento speciale!',
        date: '2025-03-05'
      }
    ]
  }

  // ──────────────────────────────────────────
  // ADD NEW PRODUCT HERE
  // 'product-id': { ... }
};

// ============================================================
// ② STATE
// ============================================================
let currentProduct = null;
let selectedSize = 0;
let modalQty = 1;
let selectedRating = 0;
let cart = JSON.parse(localStorage.getItem('now_cart') || '[]');

// ============================================================
// ③ MODAL SYSTEM
// ============================================================

function openProduct(productId) {
  const p = PRODUCTS[productId];
  if (!p) return;
  currentProduct = p;
  selectedSize = 0;
  modalQty = 1;

  const lang = window.currentLang || 'ar';

  // Title & Story
  document.getElementById('modal-title').textContent = p.name[lang] || p.name['en'];
  document.getElementById('modal-story').textContent = p.story[lang] || p.story['en'];
  document.getElementById('modal-cat').textContent = p.cat;

  // Stars
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
  document.getElementById('modal-stars').textContent = '★★★★★'.slice(0, Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
  document.getElementById('modal-review-count').textContent = `(${getReviews(productId).length} تقييم)`;

  // Gallery
  const mainImg = document.getElementById('modal-main-img');
  mainImg.src = p.images[0];
  mainImg.alt = p.name['en'];

  const thumbsEl = document.getElementById('gallery-thumbs');
  thumbsEl.innerHTML = '';
  p.images.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.alt = `view ${i+1}`;
    thumb.className = i === 0 ? 'thumb active' : 'thumb';
    thumb.onclick = () => switchImage(img, thumb);
    thumbsEl.appendChild(thumb);
  });

  // Sizes
  const sizesEl = document.getElementById('size-options');
  sizesEl.innerHTML = '';
  p.sizes.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = i === 0 ? 'size-btn active' : 'size-btn';
    btn.textContent = `${s.label} — ${s.price}€`;
    btn.onclick = () => selectSize(i, btn);
    sizesEl.appendChild(btn);
  });

  // Hashtags
  const hashEl = document.getElementById('modal-hashtags');
  hashEl.innerHTML = p.hashtags.map(h => `<span class="hash-tag">${h}</span>`).join('');

  // Total
  updateModalTotal();

  // Reviews
  renderReviews(productId);

  // Show modal
  document.getElementById('product-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProduct() {
  document.getElementById('product-modal').classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('review-form').classList.add('hidden');
  selectedRating = 0;
}

function closeModalOutside(e) {
  if (e.target.id === 'product-modal') closeProduct();
}

function switchImage(src, thumb) {
  document.getElementById('modal-main-img').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function selectSize(index, btn) {
  selectedSize = index;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateModalTotal();
}

function changeModalQty(delta) {
  modalQty = Math.max(1, Math.min(99, modalQty + delta));
  document.getElementById('modal-qty').textContent = modalQty;
  updateModalTotal();
}

function updateModalTotal() {
  if (!currentProduct) return;
  const price = currentProduct.sizes[selectedSize].price;
  const total = price * modalQty;
  document.getElementById('modal-total-price').textContent = `${total}€`;
}

// ============================================================
// ④ CART SYSTEM
// ============================================================

function addToCart() {
  const p = currentProduct;
  const size = p.sizes[selectedSize];
  const lang = window.currentLang || 'ar';

  const item = {
    id: p.id,
    name: p.name[lang] || p.name['en'],
    size: size.label,
    price: size.price,
    qty: modalQty,
    img: p.images[0]
  };

  // Check if same item exists
  const existing = cart.find(c => c.id === item.id && c.size === item.size);
  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }

  saveCart();
  updateCartFab();
  showCartToast(item.name);
  closeProduct();
  openCart();
}

function orderNow() {
  const p = currentProduct;
  const size = p.sizes[selectedSize];
  const lang = window.currentLang || 'ar';
  const name = p.name[lang] || p.name['en'];

  const msg = `🫒 Noble Olivewood — New Order\n\n` +
    `Product: ${name}\n` +
    `Size: ${size.label}\n` +
    `Price: ${size.price}€\n` +
    `Quantity: ${modalQty}\n` +
    `Total: ${size.price * modalQty}€\n\n` +
    `Please confirm availability and shipping details.`;

  window.open(`https://wa.me/21623068889?text=${encodeURIComponent(msg)}`, '_blank');
}

function saveCart() {
  localStorage.setItem('now_cart', JSON.stringify(cart));
}

function updateCartFab() {
  const fab = document.getElementById('cart-fab');
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cart-count').textContent = count;
  fab.classList.toggle('hidden', count === 0);
}

function showCartToast(name) {
  const toast = document.getElementById('cart-toast');
  const msg = document.getElementById('toast-msg');
  msg.textContent = `✓ "${name}" أُضيف للسلة!`;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function openCart() {
  renderCart();
  document.getElementById('cart-sidebar').classList.remove('hidden');
  document.getElementById('cart-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-sidebar').classList.add('hidden');
  document.getElementById('cart-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function renderCart() {
  const el = document.getElementById('cart-items');
  if (cart.length === 0) {
    el.innerHTML = '<div class="cart-empty">🛒 السلة فارغة</div>';
    document.getElementById('cart-grand-total').textContent = '0€';
    return;
  }

  el.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">${item.size} — ${item.price}€</div>
        <div class="cart-item-qty-row">
          <button onclick="updateCartQty(${i}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${i}, 1)">+</button>
          <button class="cart-remove" onclick="removeCartItem(${i})">🗑️</button>
        </div>
      </div>
      <div class="cart-item-total">${item.price * item.qty}€</div>
    </div>
  `).join('');

  const grand = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cart-grand-total').textContent = `${grand}€`;
}

function updateCartQty(index, delta) {
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  saveCart();
  updateCartFab();
  renderCart();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartFab();
  renderCart();
}

function checkoutCart() {
  if (cart.length === 0) return;
  const grand = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  let msg = `🫒 Noble Olivewood — Cart Order\n\n`;
  cart.forEach(item => {
    msg += `• ${item.name} (${item.size}) × ${item.qty} = ${item.price * item.qty}€\n`;
  });
  msg += `\n💰 Total: ${grand}€\n\nPlease confirm my order and provide shipping details.`;
  window.open(`https://wa.me/21623068889?text=${encodeURIComponent(msg)}`, '_blank');
}

// ============================================================
// ⑤ REVIEWS SYSTEM (localStorage)
// ============================================================

function getReviews(productId) {
  const stored = JSON.parse(localStorage.getItem(`reviews_${productId}`) || '[]');
  const defaults = PRODUCTS[productId]?.defaultReviews || [];
  return [...defaults, ...stored];
}

function renderReviews(productId) {
  const reviews = getReviews(productId);
  const el = document.getElementById('reviews-list');
  document.getElementById('modal-review-count').textContent = `(${reviews.length} تقييم)`;

  if (reviews.length === 0) {
    el.innerHTML = '<div class="no-reviews">كن أول من يقيّم هذا المنتج! ⭐</div>';
    return;
  }

  // Average
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  el.innerHTML = `
    <div class="reviews-summary">
      <div class="avg-score">${avg}</div>
      <div class="avg-stars">${'★'.repeat(Math.round(avg))}${'☆'.repeat(5-Math.round(avg))}</div>
      <div class="avg-count">${reviews.length} تقييم</div>
    </div>
    <div class="reviews-scroll">
      ${reviews.map(r => `
        <div class="review-card">
          <div class="review-header">
            <div class="reviewer-avatar">${r.name.charAt(0).toUpperCase()}</div>
            <div class="reviewer-info">
              <strong>${r.name}</strong>
              <span>${r.country || ''}</span>
            </div>
            <div class="review-rating">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
          </div>
          <p class="review-body">${r.text}</p>
          <div class="review-date">${formatDate(r.date)}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function toggleReviewForm() {
  const form = document.getElementById('review-form');
  form.classList.toggle('hidden');
  if (!form.classList.contains('hidden')) {
    form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function setRating(rating) {
  selectedRating = rating;
  const stars = document.querySelectorAll('#star-picker span');
  stars.forEach((s, i) => {
    s.style.color = i < rating ? '#f59e0b' : '#ccc';
  });
}

function submitReview() {
  const name = document.getElementById('review-name').value.trim();
  const text = document.getElementById('review-text').value.trim();

  if (!name || !text || selectedRating === 0) {
    alert('الرجاء ملء الاسم، التعليق، واختيار التقييم ⭐');
    return;
  }

  const review = {
    name,
    country: '',
    rating: selectedRating,
    text,
    date: new Date().toISOString().split('T')[0]
  };

  const stored = JSON.parse(localStorage.getItem(`reviews_${currentProduct.id}`) || '[]');
  stored.push(review);
  localStorage.setItem(`reviews_${currentProduct.id}`, JSON.stringify(stored));

  // Reset form
  document.getElementById('review-name').value = '';
  document.getElementById('review-text').value = '';
  selectedRating = 0;
  setRating(0);
  document.getElementById('review-form').classList.add('hidden');

  // Re-render
  renderReviews(currentProduct.id);

  // Toast
  const toast = document.getElementById('cart-toast');
  document.getElementById('toast-msg').textContent = '✓ شكراً! تم نشر تقييمك';
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

// ============================================================
// ⑥ KEYBOARD NAVIGATION
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProduct();
    closeCart();
  }
});

// ============================================================
// ⑦ INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  updateCartFab();
});
