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
/* G3: statik demo — desing.uyelik === false ise üye giriş / hesap / çıkış öğeleri çizilmez (API yok, üyelik sayfaları kapalı). */
if (json.desing && json.desing.uyelik === false) {
  html = html.replace(/<a [^>]*data-mx-uye-goster[\s\S]*?<\/a>/g, "").replace(/<button [^>]*data-mx-uye-goster[\s\S]*?<\/button>/g, "");
}
