/* ================= Icons ================= */
const ICONS = {
  youtube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>',
  netflix:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3v18M18 3v18M6 3l12 18"/></svg>',
  google:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></svg>',
  apps:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',
  other:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>'
};
const CATS = { youtube:'يوتيوب', netflix:'نتفلكس', google:'إيميلات جوجل', instagram:'انستقرام', other:'أخرى' };
const STAR_SVG = '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

const DISCOUNT_RATE = 0.30;

const PRODUCTS = [
  { id:'yt-1',  cat:'youtube', title:'يوتيوب بريميوم — شهر',         desc:'بدون إعلانات، تشغيل في الخلفية، وتحميل ، تفعيل على حسابك وباوفر سعر.', price:3,  tag:'الأكثر طلبًا', image:'images/youtube.jpg', features:['الاشتراك رسمي', 'ضمان 20 لـ 25 يوم', 'الاشتراك يعمل بجميع مزايا يوتيوب برميوم', 'التسليم فوري بعد إتمام الطلب مباشرة'] },
  { id:'yt-3',  cat:'youtube', title:'يوتيوب بريميوم — 3 شهور',      desc:'وفّر أكثر مع باقة الثلاثة شهور ، تفعيل علي حسابك الشخصي', price:8,  tag:'توفير', image:'images/youtube.jpg', features:['الاشتراك رسمي', 'ضمان 20 لـ 25 يوم', 'الاشتراك يعمل بجميع مزايا يوتيوب برميوم', 'التسليم فوري بعد إتمام الطلب مباشرة'] },
  { id:'yt-12', cat:'youtube', title:'يوتيوب بريميوم — غير مفعل',    desc:'أفضل قيمة ونفس المميزات بسعر ارخص ، ايميل + فيزا.', price:7, tag:'باقة', image:'images/youtube.jpg', features:['ايميل رسمي + فيزا تفعيل ', 'ضمان 10 لـ 15 يوم', 'بعد التفعيل بيكون في 5 دعوات يوتيوب', 'التسليم فوري بعد إتمام الطلب مباشرة'] },
  { id:'nf-1',  cat:'netflix', title:'بروفايل نتفلكس — شهر',         desc:'بروفايل مشترك ، اعلي باقه 4K ، ', price:4,  tag:'شائع', image:'images/netflix.jpg', features:['الاشتراك رسمي ، اعلي باقه', 'الاشتراك يعمل على جميع الأجهزة', 'ضمان 20 لـ 25 يوم', 'التسليم فوري بعد إتمام الطلب مباشرة'] },
  { id:'gm-1',  cat:'google',  title:'إيميل جوجل — حساب جديد',       desc:'حساب جوجل نظيف وجاهز للاستخدام مباشرة.', price:3,  tag:'شائع', image:'images/gmail.jpg', features:['متاح به تجربه مجانيه', 'ضمان 10 لـ 15 يوم', 'التسليم فوري بعد إتمام الطلب مباشرة'] },
  { id:'gm-5',  cat:'google',  title:'إيميلات جوجل — 10 حسابات',      desc:'حسابات جوجل نظيفه وجاهزه للاستخدام مباشرة ، وبسعر مميز.', price:30,  tag:'الأكثر طلبًا', image:'images/gmail.jpg', features:['متاح بهم تجربه مجانيه', 'ضمان 10 لـ 15 يوم', 'التسليم فوري بعد إتمام الطلب مباشرة'] },
  { id:'ap-1',  cat:'instagram',    title:'قريبا',                   desc:'قريبا', price:22,  tag:'', image:'https://placehold.co/600x600/f4efe8/3a111a?text=Soon', features:['قريبا'] },
  { id:'ot-1',  cat:'other',   title:'خدمة رقمية حسب الطلب',         desc:'عايز حاجة معينة؟ اطلبها وفريقنا يجهزها لك.', price:35,  tag:'', image:'https://placehold.co/600x600/f4efe8/3a111a?text=Soon', features:['تنفيذ حسب طلبك', 'جودة عالية', 'دعم مستمر'] }
];

PRODUCTS.forEach(p => {
  p.oldPrice = Math.round(p.price / (1 - DISCOUNT_RATE));
});

/* ================= State ================= */
let cart = [];
let activeCat = 'all';
let couponApplied = false;
const COUPON = 'RAZ10';
const DISCOUNT = 0.10;

/* ================= Telegram Config ================= */
const TG_BOT_TOKEN = '8865297993:AAGDi9rGxNHkWvOjUSWjNQZ59WvIk4fRky0';
const TG_CHAT_ID = '8718861520';

/* ================= JSONBin Config (للتقييمات) ================= */
const JSONBIN_ID = '6b07e095ab3a7b614481ed8a';
const JSONBIN_KEY = '$2a$10$0hceB/Cc/PFQxTRk0bzcme6ZCFBPL4.3NFHhU2VdxBPLaeimyDjvG';
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_ID}`;

async function getReviewsFromBin() {
  try {
    const res = await fetch(JSONBIN_URL + '/latest', {
      headers: { 'X-Access-Key': JSONBIN_KEY }
    });
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    return data.record || {};
  } catch (e) {
    console.error('Error fetching reviews:', e);
    return {};
  }
}

async function saveReviewsToBin(data) {
  try {
    const res = await fetch(JSONBIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': JSONBIN_KEY
      },
      body: JSON.stringify(data)
    });
    return res.ok;
  } catch (e) {
    console.error('Error saving reviews:', e);
    return false;
  }
}

/* ================= GitHub Config (للطلبات فقط) ================= */
const GITHUB_USERNAME = 'rrvmiii';
const GITHUB_REPO = 'razin';
const GITHUB_TOKEN = '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';

async function getGitHubFile(filename) {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${filename}?t=${Date.now()}`, {
      headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
    });
    if (!res.ok) throw new Error('File not found');
    const data = await res.json();
    const contentString = decodeURIComponent(escape(atob(data.content.replace(/\s/g, ''))));
    const content = JSON.parse(contentString);
    return { content, sha: data.sha };
  } catch (e) {
    return { content: {}, sha: null };
  }
}

async function saveGitHubFile(filename, data, sha) {
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
  const body = { message: `Update ${filename}`, content };
  if (sha) body.sha = sha;

  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${filename}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error('Failed to save');
    const result = await res.json();
    return result.content.sha; 
  } catch (e) {
    console.error('Error saving file:', e);
    return null;
  }
}

/* ================= Helpers ================= */
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const fmt = n => n.toLocaleString('en-US',{minimumFractionDigits:0, maximumFractionDigits:2}) + ' ر.س';

function escapeHtml(str){
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ================= Reviews Persistence (JSONBin) ================= */
let productReviews = {};

async function loadReviews() {
  productReviews = await getReviewsFromBin();
  if (!productReviews || typeof productReviews !== 'object') {
      productReviews = {};
  }
}

async function submitReview(productId) {
  const name = $('#revName').value.trim();
  const text = $('#revText').value.trim();
  const rating = document.querySelector('input[name="rating"]:checked');

  if (!name) return toast('يرجى كتابة الاسم');
  if (!rating) return toast('يرجى اختيار عدد النجوم');
  if (!text) return toast('يرجى كتابة تعليق');

  const dateStr = new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });

  if (!productReviews[productId]) productReviews[productId] = [];

  productReviews[productId].unshift({
    name: name,
    text: text,
    rating: parseInt(rating.value),
    date: dateStr
  });

  toast('جاري حفظ التقييم...');
  const success = await saveReviewsToBin(productReviews);
  
  if (success) {
    toast('تم إضافة تقييمك بنجاح!');
    showProduct(productId);
  } else {
    toast('حدث خطأ أثناء حفظ التقييم.');
  }
}

/* ================= Router ================= */
function showHome() {
  $('#homePage').classList.remove('hidden');
  $('#productPage').classList.add('hidden');
  $('#checkoutPage').classList.add('hidden');
  window.scrollTo(0, 0);
  document.title = "رَزين — خدمات رقمية فورية";
  window.location.hash = '';
}

function showProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;

  $('#homePage').classList.add('hidden');
  $('#productPage').classList.remove('hidden');
  $('#checkoutPage').classList.add('hidden');
  window.scrollTo(0, 0);
  document.title = p.title + " - رَزين";
  window.location.hash = 'product-' + id;

  const featHtml = (p.features || []).map(f => `
    <div class="pd-feat-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      ${escapeHtml(f)}
    </div>
  `).join('');

  let html = `
    <div class="pd-breadcrumb" onclick="showHome()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
      العودة للمتجر
    </div>

    <div class="pd-grid">
      <div class="pd-image-wrap">
        ${p.tag ? `<span class="card-tag">${escapeHtml(p.tag)}</span>` : ''}
        <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy">
      </div>

      <div class="pd-info">
        <h1 class="pd-title">${escapeHtml(p.title)}</h1>

        <div class="pd-price">
          ${fmt(p.price)}
          <span class="pd-price-old">${fmt(p.oldPrice)}</span>
          <small>/ ${p.cat === 'youtube' || p.cat === 'netflix' ? 'حسب المدة' : 'للباقة'}</small>
        </div>

        <p class="pd-desc">${escapeHtml(p.desc)}</p>

        <div class="pd-features">
          ${featHtml}
        </div>

        <div class="pd-actions">
          <div class="qty-input">
            <button onclick="updatePdQty(-1)">−</button>
            <input type="text" id="pdQty" value="1" readonly>
            <button onclick="updatePdQty(1)">+</button>
          </div>
          <button class="pd-add-btn" onclick="addToCartFromPd('${p.id}')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  `;

  let reviews = productReviews[id] || [];
  let avg = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : "0.0";

  let reviewsHtml = `
    <div class="rev-section">
      <div class="rev-summary">
        <div class="rev-score">${avg}</div>
        <div class="rev-stars-static" style="opacity: ${avg > 0 ? 1 : .3}">
          ${[1,2,3,4,5].map(i => `<span style="color: ${i <= Math.round(avg) ? 'var(--gold)' : 'var(--line)'}">${STAR_SVG}</span>`).join('')}
        </div>
        <div class="rev-count">${reviews.length} تقييمات</div>
      </div>

      <div>
        <div class="rev-form">
          <h4>أضف تقييمك</h4>
          <div class="star-rating" dir="ltr">
            <input type="radio" id="st5" name="rating" value="5"><label for="st5">${STAR_SVG}</label>
            <input type="radio" id="st4" name="rating" value="4"><label for="st4">${STAR_SVG}</label>
            <input type="radio" id="st3" name="rating" value="3"><label for="st3">${STAR_SVG}</label>
            <input type="radio" id="st2" name="rating" value="2"><label for="st2">${STAR_SVG}</label>
            <input type="radio" id="st1" name="rating" value="1"><label for="st1">${STAR_SVG}</label>
          </div>
          <input type="text" id="revName" placeholder="اسمك (مطلوب)">
          <textarea id="revText" placeholder="رأيك في الخدمة..."></textarea>
          <button class="rev-submit" onclick="submitReview('${p.id}')">إرسال التقييم</button>
        </div>

        <div class="rev-list" id="revList">
          ${reviews.length ? reviews.map(r => `
            <div class="rev-item">
              <div class="rev-item-head">
                <span class="rev-item-name">${escapeHtml(r.name)}</span>
                <span class="rev-item-date">${escapeHtml(r.date)}</span>
              </div>
              <div class="rev-item-stars">
                ${[1,2,3,4,5].map(i => `<span style="color: ${i <= r.rating ? 'var(--gold)' : 'var(--line)'}">${STAR_SVG}</span>`).join('')}
              </div>
              <div class="rev-item-text">${escapeHtml(r.text)}</div>
            </div>
          `).join('') : '<div style="color:var(--text-soft); text-align:center; padding: 20px;">لا توجد تقييمات بعد. كن أول من يقيّم!</div>'}
        </div>
      </div>
    </div>
  `;

  html += reviewsHtml;
  $('#productDetails').innerHTML = html;
}

function updatePdQty(delta) {
  let input = $('#pdQty');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
}

function addToCartFromPd(id) {
  const qty = parseInt($('#pdQty').value);
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const existing = cart.find(x => x.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({...p, qty: qty});
  }

  updateCart();
  toast(`تمت إضافة ${qty} من «${p.title}» للسلة`);
  openDrawer();
}

/* ================= Home Products Render ================= */
function renderProducts(){
  const grid = $('#productGrid');
  let list = PRODUCTS.filter(p => activeCat === 'all' || p.cat === activeCat);

  if (!list.length){
    grid.innerHTML = `<div class="empty">لا توجد نتائج مطابقة. جرّب قسم آخر.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <article class="card" onclick="showProduct('${p.id}')">
      <div class="card-media">
        ${p.tag ? `<span class="card-tag">${escapeHtml(p.tag)}</span>` : ''}
        <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="fallback-icon" style="display:none; width:60px; height:60px; color:var(--text-soft); opacity:.3;">${ICONS[p.cat]}</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(p.title)}</h3>
        <p class="card-desc">${escapeHtml(p.desc)}</p>
        <div class="card-foot">
          <div class="price-wrap">
            <span class="price-old">${fmt(p.oldPrice)}</span>
            <span class="price-new">${fmt(p.price)}</span>
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart('${p.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            أضف
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

/* ================= Cart ================= */
function addToCart(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if (!p) return;
  const line = cart.find(x=>x.id===id);
  if (line) line.qty++;
  else cart.push({...p, qty:1});
  updateCart();
  toast(`تمت إضافة «${p.title}» للسلة`);
}
function changeQty(id, delta){
  const line = cart.find(x=>x.id===id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter(x=>x.id!==id);
  updateCart();
}
function removeItem(id){ cart = cart.filter(x=>x.id!==id); updateCart(); }

function updateCart(){
  const count = cart.reduce((s,x)=>s+x.qty,0);
  const badge = $('#cartCount');
  badge.textContent = count;
  badge.hidden = count === 0;
  $('#drawerCount').textContent = `(${count})`;

  const body = $('#cartItems');
  if (!cart.length){
    body.innerHTML = `<div class="cart-empty">السلة فاضية…<br>اختار خدمة وابدأ.</div>`;
  } else {
    body.innerHTML = cart.map(x=>`
      <div class="cart-item">
        <div class="ci-media">
          <img src="${x.image}" alt="${escapeHtml(x.title)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <div class="fallback-icon" style="display:none; width:24px; height:24px;">${ICONS[x.cat]}</div>
        </div>
        <div class="ci-info">
          <b>${escapeHtml(x.title)}</b>
          <span>${fmt(x.price)}</span>
        </div>
        <div class="qty">
          <button data-act="dec" data-id="${x.id}" aria-label="تقليل">−</button>
          <span>${x.qty}</span>
          <button data-act="inc" data-id="${x.id}" aria-label="زيادة">+</button>
        </div>
        <button class="ci-remove" data-act="rm" data-id="${x.id}" aria-label="حذف">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>
        </button>
      </div>
    `).join('');
  }

  const subtotal = cart.reduce((s,x)=>s+x.price*x.qty,0);
  const discount = couponApplied ? subtotal * DISCOUNT : 0;
  const grand = subtotal - discount;
  $('#subtotal').textContent = fmt(subtotal);
  $('#discountRow').hidden = !couponApplied;
  $('#discountVal').textContent = '-' + fmt(discount);
  $('#grandTotal').textContent = fmt(grand);
  $('#checkoutBtn').disabled = cart.length === 0;

  if (!cart.length && couponApplied){
    couponApplied = false;
    $('#couponMsg').textContent = '';
    $('#couponInput').value = '';
  }
}

/* ================= Coupon ================= */
$('#applyCoupon').addEventListener('click', ()=>{
  const val = $('#couponInput').value.trim().toUpperCase();
  const msg = $('#couponMsg');
  if (!cart.length){ msg.textContent='أضف خدمة للسلة أولاً.'; msg.className='coupon-msg err'; return; }
  if (val === COUPON){
    couponApplied = true;
    msg.textContent = 'تم تطبيق كود RAZ10 — خصم 10%.';
    msg.className = 'coupon-msg ok';
    updateCart();
  } else {
    couponApplied = false;
    msg.textContent = 'الكود غير صحيح. جرّب RAZ10.';
    msg.className = 'coupon-msg err';
    updateCart();
  }
});

/* ================= Drawer ================= */
function openDrawer(){
  $('#drawer').classList.add('open');
  $('#overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer(){
  $('#drawer').classList.remove('open');
  $('#overlay').classList.remove('open');
  document.body.style.overflow = '';
}
$('#cartBtn').addEventListener('click', openDrawer);
$('#closeDrawer').addEventListener('click', closeDrawer);
$('#overlay').addEventListener('click', closeDrawer);

/* ================= Toast ================= */
let toastTimer;
function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2400);
}

/* ================= Theme ================= */
const htmlEl = document.documentElement;
const themeIcon = $('#themeIcon');
const sunPath = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
const moonPath = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';

function setTheme(mode){
  htmlEl.setAttribute('data-theme', mode);
  themeIcon.innerHTML = mode === 'dark' ? moonPath : sunPath;
  try { localStorage.setItem('theme', mode); } catch(e){}
}

$('#themeBtn').addEventListener('click', ()=>{
  setTheme(htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

(function initTheme(){
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch(e){}
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
})();

/* ================= Checkout ================= */
function openCheckout(){
  if (!cart.length) return;
  $('#checkoutPage').classList.remove('hidden');
  $('#homePage').classList.add('hidden');
  $('#productPage').classList.add('hidden');
  closeDrawer();
  renderCheckoutSummary();
  window.scrollTo(0,0);
  window.location.hash = 'checkout';
}

function closeCheckout(){
  $('#checkoutPage').classList.add('hidden');
  $('#homePage').classList.remove('hidden');
}

function renderCheckoutSummary(){
  const subtotal = cart.reduce((s,x)=>s+x.price*x.qty,0);
  const discount = couponApplied ? subtotal * DISCOUNT : 0;
  const grand = subtotal - discount;

  const lines = cart.map(x => `
    <div class="co-line">
      <span>${escapeHtml(x.title)} × ${x.qty}</span>
      <span>${fmt(x.price * x.qty)}</span>
    </div>
  `).join('');

  $('#checkoutSummary').innerHTML = `
    <h3>ملخص الطلب</h3>
    ${lines}
    <div class="co-line"><span>المجموع الفرعي</span><span>${fmt(subtotal)}</span></div>
    ${couponApplied ? `<div class="co-line" style="color:#2b7a4b;font-weight:700"><span>خصم</span><span>-${fmt(discount)}</span></div>` : ''}
    <div class="co-line total"><span>الإجمالي</span><span>${fmt(grand)}</span></div>
  `;
}

async function submitCheckout(e){
  e.preventDefault();

  const name = $('#coName').value.trim();
  const contact = $('#coContact').value.trim();
  const pay = document.querySelector('input[name="pay"]:checked');

  if (!name) return toast('يرجى كتابة الاسم');
  if (!contact) return toast('يرجى كتابة الإيميل أو رقم الواتساب');
  if (!pay) return toast('يرجى اختيار طريقة الدفع');

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  submitBtn.textContent = 'جاري إرسال الطلب...';
  submitBtn.disabled = true;

  const subtotal = cart.reduce((s,x)=>s+x.price*x.qty,0);
  const discount = couponApplied ? subtotal * DISCOUNT : 0;
  const grand = subtotal - discount;

  let orderDetails = cart.map(x => `- ${x.title} (عدد: ${x.qty}) = ${fmt(x.price * x.qty)}`).join('\n');
  if (couponApplied) {
    orderDetails += `\n\n(تم تطبيق كود خصم بقيمة ${fmt(discount)})`;
  }

  const messageText = `
🛒 *طلب جديد من رَزين!*

👤 *الاسم:* ${name}
📞 *التواصل:* ${contact}
💳 *طريقة الدفع:* ${pay.value}

📦 *الطلب:*
${orderDetails}

💰 *الإجمالي المطلوب:* ${fmt(grand)}
  `.trim();

  try {
    // إرسال رسالة تليجرام
    const response = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: messageText,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error('Telegram API Error');
    }

    // حفظ الطلب في orders.json (على جيت هاب)
    const orderData = {
      name, contact, payMethod: pay.value, 
      items: cart.map(x => ({ title: x.title, qty: x.qty, price: x.price })),
      total: grand, date: new Date().toISOString()
    };
    
    const ordersFile = await getGitHubFile('orders.json');
    const allOrders = ordersFile.content || {};
    allOrders['ORD-' + Date.now()] = orderData;
    
    toast('جاري حفظ الطلب...');
    await saveGitHubFile('orders.json', allOrders, ordersFile.sha);

    toast('تم استلام طلبك بنجاح — هنرجع لك بتأكيد قريب ♥');

    cart = [];
    couponApplied = false;
    $('#couponInput').value = '';
    $('#couponMsg').textContent = '';
    updateCart();

    closeCheckout();
    $('#checkoutForm').reset();

  } catch (error) {
    console.error('خطأ في إرسال الطلب:', error);
    toast('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا.');
  } finally {
    submitBtn.textContent = originalBtnText;
    submitBtn.disabled = false;
  }
}

/* ================= Events ================= */
$('#cartItems').addEventListener('click', e=>{
  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const {act, id} = btn.dataset;
  if (act === 'inc') changeQty(id, 1);
  if (act === 'dec') changeQty(id, -1);
  if (act === 'rm')  removeItem(id);
});
$('#chips').addEventListener('click', e=>{
  const chip = e.target.closest('.chip');
  if (!chip) return;
  $$('.chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  activeCat = chip.dataset.cat;
  renderProducts();
});
$('#checkoutBtn').addEventListener('click', openCheckout);
document.addEventListener('keydown', e=>{ if (e.key === 'Escape') closeDrawer(); });

/* ================= Init ================= */
renderProducts();
updateCart();
loadReviews(); // تحميل التقييمات من JSONBin عند فتح الموقع

/* ================= Hash Router ================= */
window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', handleRouting);

function handleRouting() {
  const hash = window.location.hash;
  if (hash.startsWith('#product-')) {
    const id = hash.replace('#product-', '');
    showProduct(id);
  } else if (hash === '#checkout') {
    if(cart.length > 0) openCheckout();
    else showHome();
  } else {
    showHome();
  }
}
