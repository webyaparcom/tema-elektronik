# tema-elektronik · e1hz01 — E-ticaret Hızlı Erişim

## Nedir

tema-elektronik sitesinin matrix modülü. `E-ticaret Hızlı Erişim` şablonu (div kökü,
sınıf `modulex-quickroot`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (1 KB) |
| `index.html` | Modül şablonu (render hedefi) (1 KB) |
| `index.jpeg` | Önizleme görseli (9 KB) |
| `index.json` | Veri + tema token'ları (1 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `color` | `#1d3557` |
| `bgcolor` | `#f1f5f9` |
| `pillhover` | `#2196f3` |
| `border_radius` | `24px` |
| `max` | `1200px` |

- `name`: `E-ticaret Hızlı Erişim`
- `data`: 4 kayıt. Örnek: `{"id": "cart", "icon": "shopping_cart", "href": "/sepetim", "label": {"tr": "Sepetim", "en": "My cart"}}`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **color**, **bgcolor**, **pillhover**, **border_radius**, **max**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-quickroot`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/e1hz01/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "E-ticaret Hızlı Erişim",
  "desing": {
    "color": "#1d3557",
    "bgcolor": "#f1f5f9",
    "pillhover": "#2196f3",
    "border_radius": "24px",
    "max": "1200px"
  },
  "data": [
    {
      "id": "cart",
      "icon": "shopping_cart",
      "href": "/sepetim",
      "label": {
        "tr": "Sepetim",
        "en": "My cart"
      }
    },
    {
      "id": "orders",
      "icon": "receipt_long",
      "href": "/siparislerim",
      "label": {
        "tr": "Siparişlerim",
        "en": "My orders"
      }
    },
    {
      "id": "account",
      "icon": "person",
      "href": "/hesabim",
      "label": {
        "tr": "Hesabım",
        "en": "Account"
      }
    },
   
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
