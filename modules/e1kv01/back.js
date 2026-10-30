/* kategori-vitrin — Görselli ürün grubu vitrini.
   Öncelik: json.data (elle verilmiş kartlar) → webmakerdata.category.data (site kategori listesi).
   Kart verisi: { img, name{dil}, url } ; img "/" ile başlıyorsa olduğu gibi, değilse "/img/<img>". */

function kvLang(val) {
  if (val == null) return "";
  if (typeof val === "object") {
    if (val[json.lang]) return val[json.lang];
    if (val.tr) return val.tr;
    var keys = Object.keys(val);
    return keys.length ? (val[keys[0]] || "") : "";
  }
  return String(val);
}

function kvEsc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function kvImg(item) {
  var v = item && item.img ? String(item.img) : "";
  if (!v) return "";
  return v.charAt(0) === "/" || /^https?:\/\//i.test(v) ? v : "/img/" + v;
}

var kvItems = [];
if (json.data && json.data.length > 0 && json.data[0] && json.data[0].name) {
  kvItems = json.data;
} else {
  try {
    var kvBucket = webmakerdata.category && webmakerdata.category.data;
    if (kvBucket && kvBucket.length > 0) {
      var kvi;
      for (kvi = 0; kvi < kvBucket.length; kvi++) {
        if (kvBucket[kvi].status && kvBucket[kvi].status !== "play") continue;
        kvItems.push({ img: kvBucket[kvi].img || "", name: kvBucket[kvi].name, url: kvBucket[kvi].path });
      }
    }
  } catch (e) {}
}

var kvHtml = "";
var kvk;
for (kvk = 0; kvk < kvItems.length; kvk++) {
  var kvItem = kvItems[kvk];
  var kvName = kvEsc(kvLang(kvItem.name));
  var kvUrl = wxLangInternalHref(kvItem.url || "");
  var kvSrc = kvImg(kvItem);
  kvHtml += '<a href="' + kvUrl + '" class="kvCard">';
  kvHtml += '<span class="kvImg">';
  if (kvSrc) {
    kvHtml += '<img src="' + kvEsc(kvSrc) + '" alt="' + kvName + '" loading="lazy" decoding="async" width="600" height="600" />';
  } else {
    kvHtml += '<span class="kvHolder"><img src="/img/icon.png" alt="" loading="lazy" decoding="async" /></span>';
  }
  kvHtml += '</span><span class="kvName">' + kvName + "</span></a>";
}

html = html.replace(/\{\{html\}\}/g, kvHtml);
