# tema-elektronik · 1og2rj — Favorilerim

## Nedir

tema-elektronik sitesinin matrix modülü. `Favorilerim` şablonu (div kökü,
sınıf `modulex`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (10 KB) |
| `index.jpeg` | Önizleme görseli (3 KB) |
| `index.json` | Veri + tema token'ları (4 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `color` | `#333333` |
| `bgcolor` | `#ffffff` |
| `bordercolor` | `#e0e0e0` |
| `favoritecolor` | `#dc3545` |
| `primarycolor` | `#007bff` |
| `moduleTitle` | `{'tr': 'Favorilerim', 'en': 'My Favorites'}` |
| `addToCart` | `{'tr': 'Sepete Ekle', 'en': 'Add to Cart'}` |
| `removeFromFavorites` | `{'tr': 'Favorilerden Çıkar', 'en': 'Remove from Favorites'}` |

- `name`: `Favorilerim`
- Diğer anahtarlar: `description`, `version`, `icon`, `category`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **color**, **bgcolor**, **bordercolor**, **favoritecolor**, **primarycolor**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/1og2rj/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Favorilerim",
  "desing": {
    "color": "#333333",
    "bgcolor": "#ffffff",
    "bordercolor": "#e0e0e0",
    "favoritecolor": "#dc3545",
    "primarycolor": "#007bff",
    "moduleTitle": {
      "tr": "Favorilerim",
      "en": "My Favorites"
    },
    "addToCart": {
      "tr": "Sepete Ekle",
      "en": "Add to Cart"
    },
    "removeFromFavorites": {
      "tr": "Favorilerden Çıkar",
      "en": "Remove from Favorites"
    },
    "noFavorites": {
      "tr": "Henüz favori ürününüz bulunmuyor",
      "en": "No favorite products yet"
    },
    "favoriUrunleriniziGormekIcin": {
      "tr": "Favori ürünlerinizi görmek için giriş yapmanız gerekiyor.",
      "en": "Favori uru
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
