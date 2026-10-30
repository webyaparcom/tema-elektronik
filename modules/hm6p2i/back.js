/* eticaret-urun-detay — sayfa (page) baglamindan gercek urun detayi uretir.
   Veri kaynagi: page/{id}/index.json alanlari (price, oldPrice, image, stock_status,
   badges, text, slider) + iliskili urunler icin webmakerdata.products. */

function mxDetLang(val, lang) {
  if (val == null) {
    return "";
  }
  if (typeof val === "object") {
    return val[lang] || val.tr || "";
  }
  return String(val);
}

function mxDetDesing(key) {
  var v = json.desing ? json.desing[key] : null;
  return mxDetLang(v, json.lang);
}

var mxDetCurrency = (json.desing && json.desing.currency) ? String(json.desing.currency) : "\u20BA";

function mxDetMoney(value) {
  var n = Number(value) || 0;
  return n.toFixed(2).replace(".", ",") + " " + mxDetCurrency;
}

var mxDetName = mxDetLang(page.name, json.lang);
var mxDetText = mxDetLang(page.text, json.lang);
var mxDetPrice = Number(page.price) || 0;
var mxDetOldPrice = Number(page.oldPrice) || 0;
var mxDetHasOld = mxDetOldPrice > mxDetPrice && mxDetPrice > 0;
var mxDetSoldOut = page.stock_status === "out_of_stock";

function mxDetIsPlaceholder(file) {
  if (file == null || file === undefined) {
    return true;
  }
  var f = String(file).replace(/^\s+|\s+$/g, "");
  return (
    f === "" ||
    f === "placeholder" ||
    f === "placeholder.webp" ||
    f === "1.webp" ||
    f === "-" ||
    f === "null" ||
    f === "undefined"
  );
}

/* Galeri kaynak sirasi: page.imgs (kok) > page.img > page.slider (/slider/) — Paket 372 */
function mxDetCollectGalleryItems(pg) {
  var items = [];
  var seenRoot = {};
  var seenSlider = {};
  var cover = pg.img ? String(pg.img).replace(/^\s+|\s+$/g, "") : "";
  var hasCover = !mxDetIsPlaceholder(cover);

  function mxDetPushRoot(file) {
    if (typeof file !== "string") {
      return;
    }
    var f = String(file).replace(/^\s+|\s+$/g, "");
    if (mxDetIsPlaceholder(f) || seenRoot[f]) {
      return;
    }
    seenRoot[f] = true;
    items.push({ src: "/page/" + pg.id + "/" + f, file: f });
  }

  function mxDetPushSliderEntry(gItem) {
    var gFile = gItem && gItem.img ? gItem.img : gItem;
    if (!gFile || typeof gFile !== "string") {
      return;
    }
    if (gFile.indexOf("/") === 0) {
      items.push({ src: gFile, file: gFile });
      return;
    }
    var f = String(gFile).replace(/^\s+|\s+$/g, "");
    if (mxDetIsPlaceholder(f) || seenSlider[f]) {
      return;
    }
    seenSlider[f] = true;
    items.push({ src: "/page/" + pg.id + "/slider/" + f, file: f });
  }

  if (Array.isArray(pg.imgs) && pg.imgs.length > 0) {
    if (hasCover) {
      mxDetPushRoot(cover);
    }
    var mxDetGi;
    for (mxDetGi = 0; mxDetGi < pg.imgs.length; mxDetGi++) {
      mxDetPushRoot(pg.imgs[mxDetGi]);
    }
    return items;
  }

  if (hasCover) {
    mxDetPushRoot(cover);
    return items;
  }

  if (Array.isArray(pg.slider) && pg.slider.length > 0) {
    var mxDetSi;
    for (mxDetSi = 0; mxDetSi < pg.slider.length; mxDetSi++) {
      mxDetPushSliderEntry(pg.slider[mxDetSi]);
    }
  }

  return items;
}

var mxDetGalleryItems = mxDetCollectGalleryItems(page);

/* Ana gorsel: mutlak image alani > galeri ilk > bos */
var mxDetImg = "";
if (page.image) {
  mxDetImg = String(page.image);
} else if (mxDetGalleryItems.length > 0) {
  mxDetImg = mxDetGalleryItems[0].src;
} else if (page.img) {
  mxDetImg = "/page/" + page.id + "/" + page.img;
}

/* Galeri thumb'lari */
var mxDetThumbs = "";
if (mxDetGalleryItems.length > 0) {
  for (var gi = 0; gi < mxDetGalleryItems.length; gi++) {
    var gSrc = mxDetGalleryItems[gi].src;
    mxDetThumbs +=
      '<img src="' +
      gSrc +
      '" alt="' +
      mxDetName +
      '" loading="lazy"' +
      " onclick=\"selectThumb('" +
      gSrc +
      "', this)\"" +
      (gi === 0 ? ' class="modulexThumbActive"' : "") +
      " />";
  }
}

/* Fiyat blogu */
var mxDetPriceHtml = "";
if (mxDetHasOld) {
  mxDetPriceHtml += '<span class="modulexOldPrice">' + mxDetMoney(mxDetOldPrice) + "</span>";
  var mxDetDiscount = Math.round(((mxDetOldPrice - mxDetPrice) / mxDetOldPrice) * 100);
  mxDetPriceHtml += '<span class="modulexDiscountBadge">%' + mxDetDiscount + " " + mxDetDesing("discount") + "</span>";
}
mxDetPriceHtml += '<span class="modulexPrice">' + mxDetMoney(mxDetPrice) + "</span>";

/* Stok durumu */
var mxDetStockClass = mxDetSoldOut ? "modulexOutOfStock" : "modulexInStock";
var mxDetStockIcon = mxDetSoldOut ? "cancel" : "check_circle";
var mxDetStockText = mxDetSoldOut ? mxDetDesing("outOfStock") : mxDetDesing("inStock");

/* Ozellikler: page.desc key/value; etiketler kategori dosyasinin desc tanimindan */
var mxDetSpecs = "";
var mxDetDescLabels = {};
var mxDetCatKey = page.categorypage || "products";
if (webmakerdata[mxDetCatKey] && Array.isArray(webmakerdata[mxDetCatKey].desc)) {
  for (var dl = 0; dl < webmakerdata[mxDetCatKey].desc.length; dl++) {
    var dRow = webmakerdata[mxDetCatKey].desc[dl];
    if (dRow && dRow.path) {
      mxDetDescLabels[dRow.path] = mxDetLang(dRow.name, json.lang) || dRow.path;
    }
  }
}
if (page.desc && typeof page.desc === "object") {
  var mxDetSpecRows = "";
  for (var dk in page.desc) {
    var dVal = page.desc[dk];
    if (dVal == null || dVal === "") {
      continue;
    }
    mxDetSpecRows +=
      "<tr><th>" + (mxDetDescLabels[dk] || dk) + "</th><td>" + mxDetLang(dVal, json.lang) + "</td></tr>";
  }
  if (mxDetSpecRows) {
    mxDetSpecs = '<table class="modulexSpecTable"><tbody>' + mxDetSpecRows + "</tbody></table>";
  }
}
if (!mxDetSpecs) {
  mxDetSpecs = '<p class="modulexEmptyNote">' + mxDetDesing("noSpecs") + "</p>";
}

/* Degerlendirmeler: veri kaynagi yok — bos durum metni */
var mxDetReviews = '<p class="modulexEmptyNote">' + mxDetDesing("noReviews") + "</p>";
var mxDetStars = "";
var mxDetReviewCount = 0;

/* Iliskili urunler: ayni kategori, kendisi haric */
var mxDetRelated = "";
var mxDetRelatedMax = (json.desing && Number(json.desing.relatedCount)) || 4;
if (webmakerdata.products && Array.isArray(webmakerdata.products.data)) {
  var mxDetAll = webmakerdata.products.data;
  var mxDetPicked = 0;
  for (var ri = 0; ri < mxDetAll.length && mxDetPicked < mxDetRelatedMax; ri++) {
    var rp = mxDetAll[ri];
    if (!rp || rp.id === page.id || rp.status !== "play") {
      continue;
    }
    if (page.category && rp.category && rp.category !== page.category) {
      continue;
    }
    var rpName = mxDetLang(rp.name, json.lang);
    var rpUrl = rp.url || wxLangInternalHref(rp.pathnext || rp.path || "");
    var rpImg = rp.image || "";
    mxDetRelated +=
      '<a class="modulexRelatedCard" href="' + rpUrl + '">' +
      (rpImg ? '<img src="' + rpImg + '" alt="' + rpName + '" loading="lazy" />' : "") +
      '<div class="modulexRelatedCardBody">' +
      "<h4>" + rpName + "</h4>" +
      (rp.price != null ? '<div class="modulexRelatedCardPrice"><span class="modulexPrice">' + mxDetMoney(rp.price) + "</span></div>" : "") +
      "</div>" +
      "</a>";
    mxDetPicked++;
  }
}
if (!mxDetRelated) {
  mxDetRelated = '<p class="modulexEmptyNote">' + mxDetDesing("noRelated") + "</p>";
}

/* Sepet butonu: data-mx-* nitelikleri sepet-widget koprusu icin */
var mxDetCartAttrs =
  ' data-mx-id="' + page.id + '"' +
  ' data-mx-name="' + mxDetName.replace(/"/g, "&quot;") + '"' +
  ' data-mx-price="' + mxDetPrice + '"' +
  ' data-mx-img="' + mxDetImg + '"' +
  ' data-mx-url="' + (page.url || "") + '"';

html = html.replace(/\{\{name\}\}/g, mxDetName);
/* E1: breadcrumb kategori ADI — page.category kategori kimligi (ya da eski projede path); category.json'dan
   cozulur. Ozellik etiketleri (mxDetDescLabels) kategori adi DEGILDIR. Cozulemeyen kimlik ham basilmaz. */
function mxDetEsc(v) {
  return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
var mxDetCatName = "";
var mxDetCatHref = "";
var mxDetCats = webmakerdata.category && Array.isArray(webmakerdata.category.data) ? webmakerdata.category.data : null;
if (page.category && mxDetCats) {
  for (var mci = 0; mci < mxDetCats.length; mci++) {
    var mxDetC = mxDetCats[mci];
    if (mxDetC && (String(mxDetC.id) === String(page.category) || String(mxDetC.path) === String(page.category))) {
      mxDetCatName = mxDetLang(mxDetC.name, json.lang) || String(mxDetC.path || "");
      mxDetCatHref = mxDetC.path ? wxLangInternalHref(mxDetC.path) : "";
      break;
    }
  }
} else if (page.category) {
  /* kategori listesi yok (eski proje): deger slug kabul edilir */
  mxDetCatName = String(page.category);
}
if (!mxDetCatName) {
  html = html.replace(/<a href="\{\{categoryHref\}\}">\{\{category\}\}<\/a>\s*<span class="material-symbols-outlined">chevron_right<\/span>\s*/, "");
}
html = html.replace(/\{\{categoryHref\}\}/g, mxDetEsc(mxDetCatHref || "#"));
html = html.replace(/\{\{category\}\}/g, mxDetEsc(mxDetCatName));
html = html.replace(/\{\{img\}\}/g, mxDetImg);
html = html.replace(/\{\{galleryThumbs\}\}/g, mxDetThumbs);
html = html.replace(/\{\{ratingStars\}\}/g, mxDetStars);
html = html.replace(/\{\{reviewCount\}\}/g, String(mxDetReviewCount));
html = html.replace(/\{\{priceHtml\}\}/g, mxDetPriceHtml);
html = html.replace(/\{\{stockClass\}\}/g, mxDetStockClass);
html = html.replace(/\{\{stockIcon\}\}/g, mxDetStockIcon);
html = html.replace(/\{\{stockText\}\}/g, mxDetStockText);
html = html.replace(/\{\{cartDisabled\}\}/g, (mxDetSoldOut ? "disabled" : "") + mxDetCartAttrs);
html = html.replace(/\{\{mxProductId\}\}/g, String(page.id));
html = html.replace(/\{\{description\}\}/g, mxDetText || '<p class="modulexEmptyNote">' + mxDetDesing("noDescription") + "</p>");
html = html.replace(/\{\{specifications\}\}/g, mxDetSpecs);
html = html.replace(/\{\{reviewsHtml\}\}/g, mxDetReviews);
html = html.replace(/\{\{relatedHtml\}\}/g, mxDetRelated);
