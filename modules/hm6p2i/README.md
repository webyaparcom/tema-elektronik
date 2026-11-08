# tema-elektronik · hm6p2i — Urun Detay

## Nedir

tema-elektronik sitesinin matrix modülü. `Urun Detay` şablonu (div kökü,
sınıf `modulexWrap`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (9 KB) |
| `index.html` | Modül şablonu (render hedefi) (14 KB) |
| `index.jpeg` | Önizleme görseli (71 KB) |
| `index.json` | Veri + tema token'ları (1 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `color` | `#333333` |
| `bgcolor` | `#ffffff` |
| `pricecolor` | `#e53935` |
| `oldpricecolor` | `#999999` |
| `primarycolor` | `#2196f3` |
| `bordercolor` | `#e0e0e0` |
| `starcolor` | `#ffc107` |
| `badgebg-sale` | `#ff9800` |

- `name`: `Urun Detay`
- `data`: 0 kayıt. Örnek: `{}`
- Diğer anahtarlar: `description`, `version`, `icon`, `category`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **color**, **bgcolor**, **pricecolor**, **oldpricecolor**, **primarycolor**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulexWrap`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/hm6p2i/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Urun Detay",
  "desing": {
    "color": "#333333",
    "bgcolor": "#ffffff",
    "pricecolor": "#e53935",
    "oldpricecolor": "#999999",
    "primarycolor": "#2196f3",
    "bordercolor": "#e0e0e0",
    "starcolor": "#ffc107",
    "badgebg-sale": "#ff9800",
    "title": {
      "tr": "Ürün Detayı",
      "en": "Product Detail"
    },
    "addToCart": {
      "tr": "Sepete Ekle",
      "en": "Add to Cart"
    },
    "description": {
      "tr": "Açıklama",
      "en": "Description"
    },
    "specifications": {
      "tr": "Özellikler",
      "en": "Specifications"
    },
    "reviews": {
      "tr": "Değerlendirmeler",
      "en": "Reviews"
    },
    "relatedProducts": {
     
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
