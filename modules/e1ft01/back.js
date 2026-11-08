// E-ticaret Alt — Tema3 footer (Paket 617)
var backhtml = "";

function eaPick(obj) {
  if (!obj) {
    return "";
  }
  if (typeof obj === "object") {
    return obj[json.lang] || obj.tr || "";
  }
  return String(obj);
}

function eaReplaceAll(token, value) {
  html = html.replace(new RegExp(token, "g"), value || "");
}

function eaSocialSvg(iconType) {
  if (iconType === "facebook") {
    return '<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
  }
  if (iconType === "instagram") {
    return '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
  }
  if (iconType === "twitter" || iconType === "x") {
    return '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
  }
  if (iconType === "youtube") {
    return '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
  }
  if (iconType === "pinterest") {
    return '<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>';
  }
  if (iconType === "linkedin") {
    return '<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
  }
  return '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
}

function eaPaymentKey(raw) {
  var s = String(raw || "").toLowerCase().replace(/[\s_-]+/g, "");
  if (s === "americanexpress") {
    return "amex";
  }
  return s;
}

function eaPaymentLabel(key) {
  if (key === "visa") {
    return "Visa";
  }
  if (key === "mastercard") {
    return "Mastercard";
  }
  if (key === "discover") {
    return "Discover";
  }
  if (key === "stripe") {
    return "Stripe";
  }
  if (key === "amex") {
    return "American Express";
  }
  return key;
}

function eaPaymentSvg(key) {
  var cardBg = '<rect width="48" height="32" rx="4" fill="#ffffff"/>';
  if (key === "visa") {
    return (
      '<svg viewBox="0 0 48 32" aria-hidden="true" focusable="false">' +
      cardBg +
      '<path fill="#1434CB" d="M19.2 21.5h-2.9l1.8-11.2h2.9l-1.8 11.2zm11.8-10.9c-.6-.2-1.5-.4-2.6-.4-2.9 0-4.9 1.5-4.9 3.7 0 1.6 1.4 2.5 2.5 3 1.1.6 1.5.9 1.5 1.4 0 .8-.9 1.1-1.8 1.1-1.2 0-1.9-.3-2.8-.7l-.4-.2-.4 2.6c.8.3 2.1.6 3.5.6 3.1 0 5-1.5 5.1-3.9.1-1.3-.8-2.3-2.4-3-1-.5-1.7-.8-1.7-1.3 0-.5.5-.9 1.5-.9.8 0 1.5.2 2 .3l.3.1.4-2.5zm7.8-.3h-2.3c-.7 0-1.2.2-1.6 1l-4.4 10.3h3.1l.6-1.6h3.8l.4 1.6h2.7l-2.2-10.3zm-3.9 6.6c.3-.8 1.5-3.9 1.5-3.9s.4-.8.6-1.4l.3 1.3s.7 3.3.9 4h-3.3zM15.1 10.5l-3 10.5h-3.2l-1.8-8.7c-.2-.7-.4-1-1-1.3-.8-.4-2.2-.9-3.4-1.1l.1-.4h5.9c.8 0 1.4.5 1.6 1.3l1 5.3z"/></svg>'
    );
  }
  if (key === "mastercard") {
    return (
      '<svg viewBox="0 0 48 32" aria-hidden="true" focusable="false">' +
      cardBg +
      '<circle cx="19" cy="16" r="8" fill="#EB001B"/>' +
      '<circle cx="29" cy="16" r="8" fill="#F79E1B" fill-opacity="0.95"/>' +
      '<path d="M24 10.2a8 8 0 0 1 0 11.6 8 8 0 0 1 0-11.6z" fill="#FF5F00"/></svg>'
    );
  }
  if (key === "discover") {
    return (
      '<svg viewBox="0 0 48 32" aria-hidden="true" focusable="false">' +
      '<rect width="48" height="32" rx="4" fill="#FF6000"/>' +
      '<circle cx="38" cy="16" r="9" fill="#F9F9F9"/>' +
      '<path fill="#ffffff" d="M8 12.5h3.2c2 0 3.4 1.1 3.4 2.9 0 1.9-1.5 3.1-3.6 3.1H8V12.5zm2.8 4.8h.4c1 0 1.5-.5 1.5-1.2 0-.7-.5-1.1-1.5-1.1h-.4v2.3zm5.8-4.8h2.6v7.1h-2.6v-7.1zm4.2 0h2.4l1.8 4.8 1.8-4.8h2.4l-3 7.1h-2.4l-3-7.1zm11.2 0h2.6v7.1h-2.6v-7.1z"/></svg>'
    );
  }
  if (key === "stripe") {
    return (
      '<svg viewBox="0 0 48 32" aria-hidden="true" focusable="false">' +
      '<rect width="48" height="32" rx="4" fill="#635BFF"/>' +
      '<path fill="#ffffff" d="M22.1 13.4c0-.9-.7-1.2-1.9-1.2-1.5 0-3.4.5-4.9 1.3v-3.8c1.6-.6 3.3-.9 4.9-.9 4 0 6.6 2.1 6.6 5.6v8.6h-4.1v-1.1c-1 .8-2.3 1.3-3.7 1.3-2.3 0-3.8-1.2-3.8-3.3 0-2.5 2-3.9 5.3-3.9.4 0 .9 0 1.4.1v-.7zm-.3 2.5c-.3-.1-.7-.1-1-.1-1.6 0-2.5.6-2.5 1.6 0 .8.6 1.2 1.6 1.2 1 0 1.7-.5 1.9-1v-1.7z"/></svg>'
    );
  }
  if (key === "amex") {
    return (
      '<svg viewBox="0 0 48 32" aria-hidden="true" focusable="false">' +
      '<rect width="48" height="32" rx="4" fill="#006FCF"/>' +
      '<path fill="#ffffff" d="M6.5 12h2.3l.6 1.6.6-1.6h2.3v7.1H11v-4.3l-.9 2.4H9.4l-.9-2.4v4.3H6.5V12zm8.2 0h4.1c1.8 0 3 1 3 2.5 0 1.1-.6 1.9-1.6 2.3l2 2.3h-2.6l-1.7-2.1h-1v2.1h-2.2V12zm2.2 1.6v1.4h1.7c.6 0 1-.3 1-.7 0-.4-.4-.7-1-.7h-1.7zm7.1-1.6h2.2l1.3 3.1 1.3-3.1h2.2l-2.2 4.6 2.3 2.5h-2.5l-1.5-1.7-1.5 1.7h-2.5l2.3-2.5-2.2-4.6zm10.1 0h6.1v1.6h-3.9v1h3.6v1.5h-3.6v1h4v1.6h-6.2V12z"/></svg>'
    );
  }
  return "";
}

function eaLinksHtml(links) {
  var out = "";
  var i;
  if (!links || !links.length) {
    return out;
  }
  for (i = 0; i < links.length; i++) {
    var link = links[i];
    var linkName = eaPick(link.name);
    if (!linkName && link.name) {
      linkName = String(link.name);
    }
    /* G3: iç bağlantı (/slug) dil önekiyle çözülür — önceden «/hakkimizda» ham yazılıyor, çok dilli sitede 404 oluyordu */
    var linkUrl = link.url || "#";
    if (/^\/(?!\/)/.test(linkUrl)) {
      linkUrl = wxLangInternalHref(linkUrl.replace(/^\/+/, "").replace(/\/+$/, ""));
    }
    out += '<li><a href="' + linkUrl + '">' + linkName + "</a></li>";
  }
  return out;
}

function eaColumnBlock(col, isMobile) {
  var title = eaPick(col.title);
  var linksHtml = eaLinksHtml(col.links);
  var wrapClass = isMobile ? "modulex-efoot-accordion" : "modulex-efoot-col";
  if (isMobile) {
    return (
      '<details class="' +
      wrapClass +
      '">' +
      "<summary>" +
      title +
      ' <span class="material-icons">expand_more</span></summary>' +
      '<div class="modulex-efoot-accordion-body"><ul class="modulex-efoot-links">' +
      linksHtml +
      "</ul></div></details>"
    );
  }
  return (
    '<div class="' +
    wrapClass +
    '">' +
    '<h3 class="modulex-efoot-col-title">' +
    title +
    '</h3><ul class="modulex-efoot-links">' +
    linksHtml +
    "</ul></div>"
  );
}

try {
  var payload = json.data;
  if (Array.isArray(payload)) {
    payload = { trust: payload };
  }
  if (!payload) {
    payload = {};
  }

  var trustItems = payload.trust || [];
  var trustHtml = "";
  var t;
  for (t = 0; t < trustItems.length; t++) {
    var trust = trustItems[t];
    var tTitle = eaPick(trust.title);
    var tDesc = eaPick(trust.desc);
    var tIcon = trust.icon || "verified";
    trustHtml +=
      '<div class="modulex-efoot-trust-item">' +
      '<div class="modulex-efoot-trust-icon"><span class="material-icons">' +
      tIcon +
      "</span></div>" +
      '<div><p class="modulex-efoot-trust-title">' +
      tTitle +
      '</p><p class="modulex-efoot-trust-desc">' +
      tDesc +
      "</p></div></div>";
  }

  var features = payload.features || [];
  var featuresHtml = "";
  var f;
  for (f = 0; f < features.length; f++) {
    var feat = features[f];
    var fLabel = eaPick(feat.label);
    var fIcon = feat.icon || "check_circle";
    featuresHtml +=
      '<div class="modulex-efoot-feature"><span class="material-icons">' +
      fIcon +
      "</span><span>" +
      fLabel +
      "</span></div>";
  }
  if (featuresHtml) {
    featuresHtml = featuresHtml + featuresHtml;
  }

  var columns = payload.columns || [];
  var columnsHtml = "";
  var mobileColsHtml = "";
  var c;
  for (c = 0; c < columns.length; c++) {
    columnsHtml += eaColumnBlock(columns[c], false);
    mobileColsHtml += eaColumnBlock(columns[c], true);
  }
  columnsHtml =
    '<div class="modulex-efoot-mobile-cols">' + mobileColsHtml + "</div>" + columnsHtml;

  var socialItems = payload.social || [];
  var socialHtml = "";
  var s;
  for (s = 0; s < socialItems.length; s++) {
    var social = socialItems[s];
    var socialName = eaPick(social.name);
    socialHtml +=
      '<a href="' +
      (social.url || "#") +
      '" target="_blank" rel="noopener noreferrer" title="' +
      socialName +
      '">' +
      eaSocialSvg(social.icon || "link") +
      "</a>";
  }

  var payments = payload.payments || ["visa", "mastercard", "discover", "stripe", "amex"];
  var paymentsHtml = "";
  var p;
  for (p = 0; p < payments.length; p++) {
    var payKey = eaPaymentKey(payments[p]);
    var payLabel = eaPaymentLabel(payKey);
    var paySvg = eaPaymentSvg(payKey);
    if (paySvg) {
      paymentsHtml +=
        '<span class="modulex-efoot-pay" title="' + payLabel + '">' + paySvg + "</span>";
    } else {
      paymentsHtml +=
        '<span class="modulex-efoot-pay modulex-efoot-pay-text" title="' +
        payLabel +
        '">' +
        String(payments[p]) +
        "</span>";
    }
  }

  var copyright = eaPick(json.desing.copyright);
  if (!copyright) {
    copyright = eaPick(json.desing.web_name) + " © " + new Date().getFullYear();
  }

  eaReplaceAll("{{trust_html}}", trustHtml);
  eaReplaceAll("{{features_html}}", featuresHtml);
  eaReplaceAll("{{columns_html}}", columnsHtml);
  eaReplaceAll("{{social_html}}", socialHtml);
  eaReplaceAll("{{payments_html}}", paymentsHtml);
  eaReplaceAll("{{copyright}}", copyright);
  eaReplaceAll("{{footer-aria}}", eaPick(json.desing.footer_aria));
  eaReplaceAll("{{payments-aria}}", eaPick(json.desing.payments_aria));
  /* Bülten: gerçek uç (desing.newsletter_url) yoksa form basılmaz, sahte «abone olundu» yok (2 Kas 2026). Sıra: uç → firma e-postası → sitenin WhatsApp modülü → gizli. */
  var eaBultenUc = String(json.desing.newsletter_url || "").trim();
  var eaBultenBaglanti = "";
  if (!eaBultenUc) {
    var eaAyar = webmakerdata.setting || {};
    var eaEposta = String((eaAyar.firma && eaAyar.firma.eposta) || eaAyar.email || "").trim();
    var eaKonu = encodeURIComponent(eaPick(json.desing.newsletter_title) || "Bülten");
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eaEposta) && !/@example\.(com|org|net)$/i.test(eaEposta)) {
      eaBultenBaglanti = "mailto:" + eaEposta + "?subject=" + eaKonu;
    } else {
      var eaWa = ((webmakerdata.modules && webmakerdata.modules.data) || []).filter(function (m) {
        return m && /^whatsapp/.test(String(m.path || "")) && m.desing && m.desing.number;
      })[0];
      var eaNo = eaWa ? String(eaWa.desing.number).replace(/\D/g, "") : "";
      if (eaNo.length >= 10 && !/^90?5?3?2?0{6,}$/.test(eaNo)) eaBultenBaglanti = "https://wa.me/" + eaNo + "?text=" + eaKonu;
    }
  }
  if (!eaBultenUc) {
    html = html.replace(/<script>\s*function modulexEfootNewsletterSubmit[\s\S]*?<\/script>/, "");
    html = html.replace(/<form class="modulex-efoot-newsletter-form"[\s\S]*?<\/form>/, eaBultenBaglanti
      ? '<a class="modulex-efoot-newsletter-btn modulex-efoot-newsletter-baglanti" href="' + eaBultenBaglanti + '">{{newsletter-btn}}</a>'
      : "");
    if (!eaBultenBaglanti) {
      html = html.replace(/<h3 class="modulex-efoot-col-title">\{\{newsletter-title\}\}<\/h3>\s*<p class="modulex-efoot-newsletter-desc">\{\{newsletter-desc\}\}<\/p>/, "");
    }
  }
  eaReplaceAll("{{newsletter-url}}", eaBultenUc);
  eaReplaceAll("{{newsletter-error}}", eaPick(json.desing.newsletter_error));
  eaReplaceAll("{{newsletter-title}}", eaPick(json.desing.newsletter_title));
  eaReplaceAll("{{newsletter-desc}}", eaPick(json.desing.newsletter_desc));
  eaReplaceAll("{{newsletter-placeholder}}", eaPick(json.desing.newsletter_placeholder));
  eaReplaceAll("{{newsletter-btn}}", eaPick(json.desing.newsletter_btn));
  eaReplaceAll("{{newsletter-consent-prefix}}", eaPick(json.desing.newsletter_consent_prefix));
  eaReplaceAll("{{newsletter-consent-link}}", eaPick(json.desing.newsletter_consent_link));
  eaReplaceAll("{{newsletter-consent-suffix}}", eaPick(json.desing.newsletter_consent_suffix));
  var eaConsentUrl = json.desing.newsletter_consent_url || "/iade-ve-teslimat";
  if (/^\/(?!\/)/.test(eaConsentUrl)) { eaConsentUrl = wxLangInternalHref(eaConsentUrl.replace(/^\/+/, "").replace(/\/+$/, "")); } /* G3: dil öneki */
  eaReplaceAll("{{newsletter-consent-url}}", eaConsentUrl);
  eaReplaceAll("{{newsletter-consent-error}}", eaPick(json.desing.newsletter_consent_error));
  eaReplaceAll("{{newsletter-success}}", eaPick(json.desing.newsletter_success));
} catch (error) {
  console.error("eticaret-alt back.js:", error);
}
