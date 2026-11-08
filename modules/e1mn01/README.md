# tema-elektronik · e1mn01 — Menü E-Ticaret

## Nedir

tema-elektronik sitesinin matrix modülü. `Menü E-Ticaret` şablonu (header kökü,
sınıf `modulex-header-wrapper`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (1 KB) |
| `index.html` | Modül şablonu (render hedefi) (12 KB) |
| `index.jpeg` | Önizleme görseli (19 KB) |
| `index.json` | Veri + tema token'ları (1 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `logo` | `logo.png` |
| `color` | `#1e3046` |
| `colorhover` | `#123763` |
| `height` | `50px` |
| `urlsepet` | `sepet` |
| `bgcolor` | `#1e3046` |
| `bgcolorhover` | `#123763` |
| `searchPlaceholder` | `{'tr': 'Ürün ara...', 'en': 'Search products...'}` |

- `name`: `Menü E-Ticaret`
- Diğer anahtarlar: `category`, `description`, `version`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **logo**, **color**, **colorhover**, **height**, **urlsepet**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-header-wrapper`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/e1mn01/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Menü E-Ticaret",
  "desing": {
    "logo": "logo.png",
    "color": "#1e3046",
    "colorhover": "#123763",
    "height": "50px",
    "urlsepet": "sepet",
    "bgcolor": "#1e3046",
    "bgcolorhover": "#123763",
    "searchPlaceholder": {
      "tr": "Ürün ara...",
      "en": "Search products..."
    },
    "searchAria": {
      "tr": "Ürün ara",
      "en": "Search products"
    },
    "searchBtn": {
      "tr": "Ara",
      "en": "Search"
    },
    "supportText": {
      "tr": "7/24 Destek",
      "en": "24/7 Support"
    },
    "supportPhone": "0850 888 88 88",
    "categoryText": {
      "tr": "Kategoriler",
      "en": "Categories"
    },
    "ariaToggle": {
      "tr": "
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
