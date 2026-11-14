/* menu-eticaret-2 — ust arama + alt nav; dil fallback + kosulsuz {{html}} replace */

function et2Lang(val) {
  if (val == null) return "";
  if (typeof val === "object") {
    if (val[json.lang] != null) return val[json.lang];
    if (val.tr != null) return val.tr;
    var keys = Object.keys(val);
    return keys.length ? (val[keys[0]] || "") : "";
  }
  return String(val);
}

var pagesettingjson = webmakerdata.pagesetting.data.find(
  function(item) { return item.modulestatus && item.modulestatus.page; },
);
var modulexmenulistactive = true;
var backhtml = "";
if (pagesettingjson && webmakerdata[pagesettingjson.path] && Array.isArray(webmakerdata[pagesettingjson.path].data)) {
  for (var iterator of webmakerdata[pagesettingjson.path].data) {
    if (iterator.status == "play" && iterator.category == "") {
      var et2Name = et2Lang(iterator.name);
      if (!et2Name) continue;
      if (page.path == iterator.path) {
        backhtml += `<a class="modulex-menulistactive" href="${wxLangInternalHref(iterator.path)}">${et2Name}</a>`;
        modulexmenulistactive = false;
      } else {
        backhtml += `<a href="${wxLangInternalHref(iterator.pathnext || iterator.path)}">${et2Name}</a>`;
      }
    }
  }
}
if (modulexmenulistactive == true) {
  backhtml = `<a class="modulex-menulistactive" href="${wxLangInternalHref('')}">@home@ </a>` + backhtml;
} else {
  backhtml = `<a href="${wxLangInternalHref('')}">@home@ </a>` + backhtml;
}
html = html.replace(new RegExp("{{html}}", "g"), backhtml);

/* 14 Kas 2026 (hata #ff93d3fa): «Kategoriler» listesi — kaynak sitenin ürün kategorileri (category.json, status play),
   sonda «Tüm ürünler» (desing.tumUrunlerUrl, varsayılan "urunler"; o yolda yayında sayfa varsa). Liste boşsa düğme
   hiç çizilmez (ölü düğme bırakılmaz). Bulunulan kategori aria-current="page" alır. */
function et2Esc(s) {
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
var et2KatHtml = "";
var et2Kat = webmakerdata.category && Array.isArray(webmakerdata.category.data) ? webmakerdata.category.data : [];
for (var et2i = 0; et2i < et2Kat.length; et2i++) {
  var et2K = et2Kat[et2i];
  if (!et2K || (et2K.status && et2K.status !== "play") || !et2K.path) continue;
  var et2KAd = et2Lang(et2K.name);
  if (!et2KAd) continue;
  var et2KAkt = page && page.path == et2K.path ? ' aria-current="page"' : "";
  et2KatHtml += '<li><a href="' + wxLangInternalHref(et2K.pathnext || et2K.path) + '"' + et2KAkt + ">" + et2Esc(et2KAd) + "</a></li>";
}
var et2TumYol = (json.desing && json.desing.tumUrunlerUrl) || "urunler";
var et2TumSayfa = pagesettingjson && webmakerdata[pagesettingjson.path] && Array.isArray(webmakerdata[pagesettingjson.path].data)
  ? webmakerdata[pagesettingjson.path].data.find(function (p) { return p && p.path == et2TumYol && p.status == "play"; })
  : null;
if (et2KatHtml && et2TumSayfa) {
  var et2TumAd = et2Lang(json.desing && json.desing.tumUrunlerText) || et2Lang(et2TumSayfa.name);
  et2KatHtml += '<li class="modulex-kat-tum"><a href="' + wxLangInternalHref(et2TumYol) + '">' + et2Esc(et2TumAd) + "</a></li>";
}
if (et2KatHtml) {
  html = html.replace(new RegExp("{{kategorihtml}}", "g"), et2KatHtml);
} else {
  html = html.replace(/<div class="modulex-kat">[\s\S]*?\{\{kategorihtml\}\}[\s\S]*?<\/div>\s*<\/div>/, "").replace(new RegExp("{{kategorihtml}}", "g"), "");
}
/* G3: statik demo — desing.uyelik === false ise üye giriş / hesap / çıkış öğeleri çizilmez (API yok, üyelik sayfaları kapalı). */
if (json.desing && json.desing.uyelik === false) {
  html = html.replace(/<a [^>]*data-mx-uye-goster[\s\S]*?<\/a>/g, "").replace(/<button [^>]*data-mx-uye-goster[\s\S]*?<\/button>/g, "");
}
