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
  }

  // ──────────────────────────────────────────
  // 'product-id': {
  //   id: 'product-id',
  //   category: 'natural kitchen gift decor',
  //   images: ['img1.jpg', 'img2.jpg'],
  //   badge: '🆕 New',
  //   cat: '🌿 Natural Olive Wood',
  //   rating: 4.8,
  //   reviewCount: 0,
  //   name: { ar: '...', en: '...', fr: '...', de: '...' },
  //   story: { ar: '...', en: '...', fr: '...', de: '...' },
  //   sizes: [{ label: 'Standard', price: 35 }],
  //   hashtags: ['#Handmade', '#OliveWood'],
  //   defaultReviews: []
  // }
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
