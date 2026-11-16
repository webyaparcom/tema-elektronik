/* kategori-grid-tema3 — Resimli kategori grid.
   Oncelik: json.data → webmakerdata.category.data → page.json menu fallback. */

function k3Lang(val) {
  if (val == null) return "";
  if (typeof val === "object") {
    if (val[json.lang] != null) return val[json.lang];
    if (val.tr != null) return val.tr;
    var keys = Object.keys(val);
    return keys.length ? (val[keys[0]] || "") : "";
  }
  return String(val);
}

function k3PickImg(item) {
  if (!item) return "";
  if (item.img && String(item.img).indexOf("/") === 0) {
    return item.img;
  }
  if (item.img && item.id) {
    return "/page/" + item.id + "/" + item.img;
  }
  if (item.img) {
    return item.img.indexOf("/") === 0 ? item.img : "/img/" + item.img;
  }
  return "";
}

var items = [];
if (json.data && json.data.length > 0) {
  items = json.data;
} else {
  try {
    var catBucket = webmakerdata.category && webmakerdata.category.data;
    if (catBucket && catBucket.length > 0) {
      items = catBucket;
    } else {
      var pages = webmakerdata["page"].data || [];
      var pi;
      for (pi = 0; pi < pages.length && items.length < 8; pi++) {
        var pg = pages[pi];
        if (pg.status === "play" && pg.category && pg.category !== "") {
          items.push({
            name: pg.name,
            url: pg.pathnext || pg.path,
            img: pg.img || "",
            id: pg.id
          });
        }
      }
    }
  } catch (e) {}
}

var backhtml = "";
var ki;
for (ki = 0; ki < items.length; ki++) {
  var item = items[ki];
  var itemName = k3Lang(item.name);
  var itemUrl = item.url ? wxLangInternalHref(item.url) : wxLangInternalHref(item.path || "");
  var itemImg = k3PickImg(item);

  backhtml += '<a href="' + itemUrl + '" class="k3Card">';
  backhtml += '<div class="k3Img">';
  if (itemImg) {
    backhtml += '<img src="' + itemImg + '" alt="' + itemName + '" loading="lazy" />';
  } else {
    backhtml += '<div class="k3Placeholder"><span class="material-symbols-outlined">category</span></div>';
  }
  backhtml += '<div class="k3Overlay"><span class="k3Label">' + itemName + "</span></div>";
  backhtml += "</div></a>";
}

html = html.replace(/\{\{html\}\}/g, backhtml);
