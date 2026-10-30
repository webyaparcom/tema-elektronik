/* eticaret-urun-vitrin v2 (25 Eki 2026) — modern urun vitrini.
   Veri: webmakerdata.products.data (canli katalog) > json.data.products (demo).
   Kart: tam kart tiklanabilir (ad linki kartin uzerine yayilir), gorsel, rozet, ad, aciklama
   parcasi, fiyat (yoksa blok gizlenir), sepete ekle (kart linkini tetiklemez).
   Kategori cipleri (filtre) modulun icindedir: urunlerin category alanindan turetilir + "Tumu".
   Kopru sozlesmesi degismedi: data-mx-id / data-mx-name / data-mx-price / data-mx-img / data-mx-url
   kart kokunde ve butonda; data-category / data-stock / data-price kart kokunde. */
var backhtml = "";
var chipsHtml = "";
var products = [];
try {
  if (webmakerdata["products"] && webmakerdata["products"].data) {
    products = webmakerdata["products"].data;
  } else if (json.data && json.data.products) {
    products = json.data.products;
  }
} catch(e) { products = []; }

var vitrinDesing = json.desing || {};

function vitrinLang(val) {
  if (val == null) { return ""; }
  if (typeof val === "object") {
    if (val[json.lang] != null) { return String(val[json.lang]); }
    if (val.tr != null) { return String(val.tr); }
    var vk = Object.keys(val);
    return vk.length ? String(val[vk[0]] || "") : "";
  }
  return String(val);
}

function vitrinEsc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* Kategori satirinda fiyat/stok yoksa page/{id}/index.json detayindan zenginlestir
   (fiyat alanlari detay dosyasinda tutulur; satirda tekrarlanmayabilir).
   Koruma: detay dosyasinin path'i urunun path'inden farkliysa (ayni id'yi paylasan satirlar)
   zenginlestirme yapilmaz — baska urunun fiyati/gorseli karta sizmaz. */
function vitrinEnrich(p) {
  if (!p || !p.id || p.price != null) {
    return p;
  }
  try {
    var detailPath = "/public/data/proje/" + projePath + "/web/page/" + p.id + "/index.json";
    if (fsSync.existsSync(detailPath)) {
      var detail = JSON.parse(fsSync.readFileSync(detailPath, "utf8"));
      if (detail && detail.path && p.path && String(detail.path) !== String(p.path)) {
        return p;
      }
      var merged = {};
      var k;
      for (k in p) { merged[k] = p[k]; }
      var fields = ["price", "oldPrice", "image", "stock_status", "badges", "url", "description"];
      for (var fi = 0; fi < fields.length; fi++) {
        if (merged[fields[fi]] == null && detail[fields[fi]] != null) {
          merged[fields[fi]] = detail[fields[fi]];
        }
      }
      return merged;
    }
  } catch (enrichErr) {}
  return p;
}

/* 680 -> "680", 249.9 -> "249,90", 1250.5 -> "1.250,50" */
function vitrinMoney(value) {
  var n = Number(value) || 0;
  var parts = n.toFixed(2).split(".");
  var intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts[1] === "00" ? intPart : intPart + "," + parts[1];
}

/* Gorsel: image (mutlak) > img ("img/x.webp" -> "/img/x.webp"; "x.webp" -> "/page/<id>/x.webp") */
function vitrinImage(p) {
  if (p.image) { return String(p.image); }
  if (!p.img) { return ""; }
  var raw = String(p.img).trim();
  if (!raw) { return ""; }
  if (/^(https?:)?\/\//i.test(raw) || raw.charAt(0) === "/") { return raw; }
  if (raw.indexOf("/") > -1) { return "/" + raw; }
  return "/page/" + p.id + "/" + raw;
}

/* Aciklama parcasi: HTML etiketleri atilir, tek satira indirilir, kelime sinirinda kesilir */
var vitrinDescMax = parseInt(vitrinDesing.descLength, 10);
if (!isFinite(vitrinDescMax) || vitrinDescMax < 20) { vitrinDescMax = 120; }
function vitrinSnippet(val) {
  var s = vitrinLang(val).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
  if (s.length > vitrinDescMax) {
    s = s.slice(0, vitrinDescMax - 1).replace(/\s+\S*$/, "") + "…";
  }
  return s;
}

/* Kart linki: p.url (gorsel dosyasi degilse) > /<lang>/<pathnext|path>/ */
function vitrinUrl(p) {
  var u = p.url ? String(p.url).trim() : "";
  if (u && !/\.(webp|jpe?g|png|gif|svg|avif)(\?.*)?$/i.test(u)) {
    return u;
  }
  return wxLangInternalHref(p.pathnext || p.path || "");
}

/* Kategori etiketi: category.json'daki ad (path/id eslesir) > slug bas harfi buyuk */
function vitrinCatLabel(slug) {
  try {
    var cats = webmakerdata.category && webmakerdata.category.data;
    if (cats && cats.length) {
      for (var ci = 0; ci < cats.length; ci++) {
        if (cats[ci] && (cats[ci].path === slug || cats[ci].id === slug)) {
          var nm = vitrinLang(cats[ci].name);
          if (nm) { return nm; }
        }
      }
    }
  } catch (catErr) {}
  var s = String(slug);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* Opt-in arama/siralama icin kart ozellikleri: data-new (rozet) + data-date (zaman damgasi, varsa). Varsayilan gorunumu etkilemez. */
function vitrinRankAttrs(p, isNew) {
  var out = isNew ? ' data-new="1"' : "";
  var ts = Date.parse(p.createdAt || p.date || p.updatedAt || "");
  if (isFinite(ts)) { out += ' data-date="' + ts + '"'; }
  return out;
}
function vitrinTrue(v) { return v === true || String(v).toLowerCase() === "true"; }

var catOrder = [];
var catCount = {};
var visibleCount = 0;

for (var i = 0; i < products.length; i++) {
  var p = vitrinEnrich(products[i]);
  if (!p || p.status === "stop") { continue; }
  var pName = vitrinLang(p.name);
  var pCat = p.category ? String(p.category) : "";
  var badges = p.badges || [];
  var hasSale = badges.indexOf("sale") > -1;
  var hasNew = badges.indexOf("new") > -1;
  var isSoldOut = p.stock_status === "out_of_stock";
  var priceNum = Number(p.price);
  var hasPrice = isFinite(priceNum) && priceNum > 0;
  var oldPriceNum = Number(p.oldPrice);
  var hasOldPrice = hasPrice && isFinite(oldPriceNum) && oldPriceNum > priceNum;
  var pImg = vitrinImage(p);
  var pUrl = vitrinUrl(p);
  var pDesc = vitrinSnippet(p.description);
  var pNameAttr = vitrinEsc(pName);

  if (pCat) {
    if (!catCount[pCat]) { catCount[pCat] = 0; catOrder.push(pCat); }
    catCount[pCat]++;
  }
  visibleCount++;

  /* data-mx-*: sepet-widget koprusu urun bilgisini DOM'dan okur (kart koku + buton) */
  var mxAttrs = ' data-mx-id="' + vitrinEsc(p.id) + '"' +
    ' data-mx-name="' + pNameAttr + '"' +
    ' data-mx-price="' + (hasPrice ? priceNum : 0) + '"' +
    ' data-mx-img="' + vitrinEsc(pImg) + '"' +
    ' data-mx-url="' + vitrinEsc(pUrl) + '"';

  backhtml += '<div class="modulexCard' + (isSoldOut ? ' modulexCardSoldout' : '') + '"' +
    ' data-category="' + vitrinEsc(pCat) + '"' +
    ' data-stock="' + vitrinEsc(p.stock_status || "") + '"' +
    ' data-price="' + (hasPrice ? priceNum : 0) + '"' + vitrinRankAttrs(p, hasNew) + mxAttrs + '>';
  backhtml += '<div class="modulexCardImage">';
  if (pImg) {
    backhtml += '<img src="' + vitrinEsc(pImg) + '" alt="' + pNameAttr + '" loading="lazy" />';
  } else {
    backhtml += '<div class="modulexCardNoImage"><span class="material-symbols-outlined">restaurant</span></div>';
  }
  backhtml += '<div class="modulexBadges">';
  if (hasNew) { backhtml += '<span class="modulexBadge modulexBadgeNew">{{newText}}</span>'; }
  if (hasSale && hasOldPrice) { backhtml += '<span class="modulexBadge modulexBadgeSale">{{saleText}}</span>'; }
  backhtml += '</div>';
  if (isSoldOut) { backhtml += '<div class="modulexSoldout">{{soldOutText}}</div>'; }
  backhtml += '</div>';
  backhtml += '<div class="modulexCardInfo">';
  if (pCat) { backhtml += '<span class="modulexCardCat">' + vitrinEsc(vitrinCatLabel(pCat)) + '</span>'; }
  /* Ad linki ::after ile kartin tamamina yayilir — tam kart tiklanabilir */
  backhtml += '<a href="' + vitrinEsc(pUrl) + '" class="modulexCardName">' + vitrinEsc(pName) + '</a>';
  if (pDesc) { backhtml += '<p class="modulexCardDesc">' + vitrinEsc(pDesc) + '</p>'; }
  backhtml += '<div class="modulexCardBottom">';
  if (hasPrice) {
    backhtml += '<div class="modulexCardPrice">';
    if (hasOldPrice) { backhtml += '<span class="modulexOldPrice">' + vitrinMoney(oldPriceNum) + ' {{currency}}</span>'; }
    backhtml += '<span class="modulexPrice">' + vitrinMoney(priceNum) + ' {{currency}}</span>';
    backhtml += '</div>';
  }
  var disabledAttr = isSoldOut ? ' disabled aria-disabled="true"' : '';
  backhtml += '<button type="button" class="modulexAddCart" onclick="modulexAddCart(this, event)"' +
    disabledAttr + mxAttrs + ' aria-label="{{addToCart}}: ' + pNameAttr + '">';
  backhtml += '<span class="material-symbols-outlined" aria-hidden="true">add_shopping_cart</span>';
  backhtml += '<span>' + (isSoldOut ? '{{soldOutText}}' : '{{addToCart}}') + '</span>';
  backhtml += '</button>';
  backhtml += '</div>';
  backhtml += '</div></div>';
}

var vitrinEnh = vitrinTrue(vitrinDesing.search) || vitrinTrue(vitrinDesing.sort);
/* Kategori cipleri: showFilter false degilse ve en az 2 kategori varsa */
var showFilter = !(vitrinDesing.showFilter === false || String(vitrinDesing.showFilter).toLowerCase() === "false");
if (showFilter && catOrder.length > 1) {
  var chipClick = vitrinEnh ? "" : ' onclick="modulexFilter(this)"';
  chipsHtml += '<div class="modulexChips" role="group" aria-label="{{allText}}">';
  chipsHtml += '<button type="button" class="modulexChip modulexChipActive" data-cat="all" aria-pressed="true"' + chipClick + '>' +
    '{{allText}}<span class="modulexChipCount">' + visibleCount + '</span></button>';
  for (var ci2 = 0; ci2 < catOrder.length; ci2++) {
    var slug = catOrder[ci2];
    chipsHtml += '<button type="button" class="modulexChip" data-cat="' + vitrinEsc(slug) + '" aria-pressed="false"' + chipClick + '>' +
      vitrinEsc(vitrinCatLabel(slug)) + '<span class="modulexChipCount">' + catCount[slug] + '</span></button>';
  }
  chipsHtml += '</div>';
}

html = html.replace(/\{\{chips\}\}/g, function () { return chipsHtml; });
html = html.replace(/\{\{count\}\}/g, function () { return String(visibleCount); });
html = html.replace(/\{\{html\}\}/g, function () { return backhtml; });


/* ---- Opt-in arama + siralama (desing.search / desing.sort; varsayilan KAPALI → cikti degismez) ----
   Arac cubugu + bos durum yer tutucularini doldurur; suzme/siralama istemcide ham mx-filtre.js ile yapilir. */
var vtToolbar = "";
var vtEmpty = "";
var vtRoot = "";
if (vitrinEnh) {
  vtRoot = ' id="modulex-vt-{{id}}" data-vt-enh="1"';
  vtToolbar = '<div class="modulexTools">';
  if (vitrinTrue(vitrinDesing.search)) {
    vtToolbar += '<label class="modulexSearch"><span class="modulexVh">{{searchLabel}}</span>' +
      '<span class="material-symbols-outlined" aria-hidden="true">search</span>' +
      '<input type="search" data-vt-q placeholder="{{searchPlaceholder}}" autocomplete="off" /></label>';
  }
  if (vitrinTrue(vitrinDesing.sort)) {
    vtToolbar += '<label class="modulexSortBox"><span class="modulexSortLabel">{{sortLabel}}</span>' +
      '<select class="modulexSortSel" data-vt-sort>' +
      '<option value="">{{sortDefault}}</option><option value="priceAsc">{{sortPriceAsc}}</option>' +
      '<option value="priceDesc">{{sortPriceDesc}}</option><option value="new">{{sortNew}}</option></select></label>';
  }
  vtToolbar += "</div>";
  vtEmpty = '<div class="modulexEmpty" data-vt-empty role="status" hidden><p>{{noResult}}</p>' +
    '<button type="button" class="modulexChip" data-vt-reset>{{clearSearch}}</button></div>';
}
html = html.replace(/\{\{vtRoot\}\}/g, function () { return vtRoot; });
html = html.replace(/\{\{vtToolbar\}\}/g, function () { return vtToolbar; });
html = html.replace(/\{\{vtEmpty\}\}/g, function () { return vtEmpty; });
