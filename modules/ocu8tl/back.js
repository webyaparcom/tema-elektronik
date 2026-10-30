/* odeme-demo — sunucu tarafi: metinleri dile cozup KACISLI basar, kullanilmayan odeme yontemi bloklarini siler,
   istemci betigi icin tek JSON blogu (config + metinler + cogul tablosu) yazar.
   Kart verisi sunucuda/istemcide hicbir yere yazilmaz; bu dosya yalniz sablon doldurur. */
var odEsc = function (v) {
  return String(v == null ? "" : v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};
var odDes = json.desing || {};
var odLang = json.lang || "tr";
var odSayi = function (v, varsayilan, alt, ust) {
  var n = Number(v);
  if (!isFinite(n)) {
    n = varsayilan;
  }
  return Math.min(ust, Math.max(alt, n));
};

/* 1) Metin anahtarlari (hepsi {tr,en,ar}); hem HTML'de {{anahtar}} hem istemci JSON'unda kullanilir */
var odTK = [
  "badgeText", "banner", "title", "stepsLabel", "step1", "step2", "step3", "loadingText", "storeError", "emptyTitle", "emptyText",
  "shopText", "step1Title", "nameLabel", "emailLabel", "phoneLabel", "cityLabel", "addressLabel", "namePh", "emailPh", "phonePh",
  "cityPh", "addressPh", "continueText", "errRequired", "errName", "errEmail", "errPhone", "errAddress", "errSummary", "editCartText",
  "step2Title", "methodLabel", "methodKart", "methodKartDesc", "methodHavale", "methodHavaleDesc", "methodKapida", "methodKapidaDesc",
  "havaleInfo", "kapidaInfo", "cardTitle", "cardNumLabel", "cardNameLabel", "cardNamePh", "expLabel", "expPh", "cvcLabel",
  "demoCardHint", "fillCardText", "errCardNum", "errCardLuhn", "errCardName", "errExp", "errExpPast", "errCvc", "backText", "payText",
  "threeTitle", "threeBank", "threeInfo", "threeAmount", "threeCard", "codeLabel", "verifyText", "cancelText", "failBtnText",
  "errCodeFormat", "errCode", "processingText", "successText", "successTitle", "failTitle", "failMessage", "tooManyText",
  "cancelledMessage", "retryText", "summaryTitle", "subtotalText", "shippingText", "freeText", "totalText", "freeShipNote", "qtyLabel"
];
var odT = {};
for (var odI = 0; odI < odTK.length; odI++) {
  odT[odTK[odI]] = wmPickLang(odDes[odTK[odI]], odLang);
}

/* 2) Odeme yontemleri: yalniz bilinen uc deger; hicbiri gecerli degilse hepsi */
var odBilinen = ["kart", "havale", "kapida"];
var odYontemler = [];
var odHam = Array.isArray(odDes.methods) ? odDes.methods : [];
for (var odM = 0; odM < odHam.length; odM++) {
  if (odBilinen.indexOf(odHam[odM]) !== -1 && odYontemler.indexOf(odHam[odM]) === -1) {
    odYontemler.push(odHam[odM]);
  }
}
if (!odYontemler.length) {
  odYontemler = odBilinen.slice();
}
for (var odB = 0; odB < odBilinen.length; odB++) {
  if (odYontemler.indexOf(odBilinen[odB]) === -1) {
    html = html.replace(new RegExp("<!--od:" + odBilinen[odB] + "-->[\\s\\S]*?<!--/od:" + odBilinen[odB] + "-->", "g"), "");
  }
}
html = html.replace(/<!--\/?od:[a-z]+-->/g, "");

/* 3) Config + cogul tablosu */
var odShip = odDes.shipping && typeof odDes.shipping === "object" ? odDes.shipping : {};
var odPl = {};
if (odDes.cartCount && typeof odDes.cartCount === "object") {
  odPl = odDes.cartCount[odLang] || odDes.cartCount.tr || odDes.cartCount.en || {};
}
var odHref = function (slug) {
  var s = String(slug == null ? "" : slug).trim();
  if (!s || /^javascript:/i.test(s)) {
    return "";
  }
  return wxLangInternalHref(s);
};
var odVeri = {
  lang: odLang,
  cur: String(odDes.currency == null ? "" : odDes.currency),
  methods: odYontemler,
  ship: { free_over: odSayi(odShip.free_over, 0, 0, 100000000), fee: odSayi(odShip.fee, 0, 0, 100000000) },
  /* 0..1; kullanici 0-100 yuzde girerse 1'den buyuk degerler yuzde sayilir */
  failRate: odSayi(Number(odDes.failRate) > 1 ? Number(odDes.failRate) / 100 : odDes.failRate, 0, 0, 1),
  showFail: odDes.showFailButton !== false && odDes.showFailButton !== "false",
  sms: String(odDes.smsCode || "123456").replace(/\D+/g, "").slice(0, 8) || "123456",
  card: String(odDes.testCard || "4242 4242 4242 4242"),
  wait: odSayi(odDes.redirectMs, 1400, 0, 15000),
  success: odHref(odDes.successHref),
  cart: odHref(odDes.cartHref),
  shop: odHref(odDes.shopHref),
  t: odT,
  plural: odPl
};
var odJson = JSON.stringify(odVeri).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");

/* 4) HTML dolgusu — fonksiyonsuz literal degistirme (metinde $& olabilir) */
for (var odK = 0; odK < odTK.length; odK++) {
  html = html.split("{{" + odTK[odK] + "}}").join(odEsc(odT[odTK[odK]]));
}
html = html.split("{{odIban}}").join(odEsc(String(odDes.demoIban || "")));
html = html.split("{{odShopHref}}").join(odEsc(odVeri.shop));
html = html.split("{{odCartHref}}").join(odEsc(odVeri.cart));
html = html.split("{{odVeri}}").join(odJson);
