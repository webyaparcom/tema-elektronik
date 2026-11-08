# tema-elektronik · e1uv01 — Urun Vitrin

## Nedir

tema-elektronik sitesinin matrix modülü. `Urun Vitrin` şablonu (div kökü,
sınıf `modulex`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (11 KB) |
| `index.html` | Modül şablonu (render hedefi) (14 KB) |
| `index.jpeg` | Önizleme görseli (30 KB) |
| `index.json` | Veri + tema token'ları (3 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `color` | `#333333` |
| `bgcolor` | `#ffffff` |
| `pricecolor` | `#e53935` |
| `oldpricecolor` | `#999999` |
| `badgecolor` | `#ffffff` |
| `badgebg-new` | `#4caf50` |
| `badgebg-sale` | `#ff9800` |
| `badgebg-soldout` | `#9e9e9e` |

- `name`: `Urun Vitrin`
- `data`: 1 kayıt. Örnek: `{"products": [{"id": "urun-001", "name": {"tr": "Antep Fistigi 500g", "en": "Pistachio 500g"}, "description": {"tr": "Gaziantep'in boz ic f…`
- Diğer anahtarlar: `description`, `version`, `icon`, `category`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **color**, **bgcolor**, **pricecolor**, **oldpricecolor**, **badgecolor**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/e1uv01/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Urun Vitrin",
  "desing": {
    "color": "#333333",
    "bgcolor": "#ffffff",
    "pricecolor": "#e53935",
    "oldpricecolor": "#999999",
    "badgecolor": "#ffffff",
    "badgebg-new": "#4caf50",
    "badgebg-sale": "#ff9800",
    "badgebg-soldout": "#9e9e9e",
    "buttonbg": "#2196f3",
    "buttoncolor": "#ffffff",
    "bordercolor": "#e0e0e0",
    "currency": "₺",
    "showFilter": true,
    "descLength": 120,
    "title": {
      "tr": "Urunler",
      "en": "Products"
    },
    "allText": {
      "tr": "Tümü",
      "en": "All"
    },
    "resultCount": {
      "tr": "ürün",
      "en": "products"
    },
    "addToCart": {
      "tr": "Sepete Ekle",
      "en": "Add to Ca
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
