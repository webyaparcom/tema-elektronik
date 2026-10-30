/**
 * E-ticaret hizli erisim — json.data linklerinden {{html}} uretir.
 * Dil: json.lang (yoksa tr).
 */
var backhtml = "";
var lang = "tr";
try {
  if (json.lang) {
    lang = json.lang;
  }
} catch (e) {
  lang = "tr";
}

var items = [];
try {
  if (json.data && json.data.length) {
    items = json.data;
  }
} catch (e2) {
  items = [];
}

backhtml += '<nav class="modulex-quickwrap" aria-label="Hizli erisim">';
backhtml += '<div class="modulex-quickinner">';

for (var i = 0; i < items.length; i++) {
  var it = items[i];
  if (!it) {
    continue;
  }
  var href = it.href || "#";
  /* G3: iç bağlantı (/slug) dil önekiyle çözülür (çok dilli sitede ham «/sepetim» 404 oluyordu) */
  if (/^\/(?!\/)/.test(href)) { href = wxLangInternalHref(href.replace(/^\/+/, "").replace(/\/+$/, "")); }
  var icon = it.icon || "chevron_right";
  var lab = "";
  try {
    if (it.label && it.label[lang]) {
      lab = it.label[lang];
    } else if (it.label && it.label.tr) {
      lab = it.label.tr;
    } else {
      lab = it.id || "Link";
    }
  } catch (e3) {
    lab = it.id || "Link";
  }

  backhtml += '<a class="modulex-quickpill" href="' + href + '" title="' + lab + '">';
  backhtml += '<span class="material-symbols-outlined modulex-quickicon">' + icon + "</span>";
  backhtml += '<span class="modulex-quicklabel">' + lab + "</span>";
  backhtml += "</a>";
}

backhtml += "</div></nav>";

html = html.replace(new RegExp("\\{\\{html\\}\\}", "g"), backhtml);
