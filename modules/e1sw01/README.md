# tema-elektronik · e1sw01 — Sepet Widget

## Nedir

tema-elektronik sitesinin matrix modülü. `Sepet Widget` şablonu (div kökü,
sınıf `modulex-cartw`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (29 KB) |
| `index.jpeg` | Önizleme görseli (9 KB) |
| `index.json` | Veri + tema token'ları (2 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `fabbg` | `#DE6D26` |
| `fabcolor` | `#ffffff` |
| `badgebg` | `#e53935` |
| `badgecolor` | `#ffffff` |
| `drawerbg` | `#ffffff` |
| `drawercolor` | `#1e293b` |
| `bordercolor` | `#e2e8f0` |
| `pricecolor` | `#DE6D26` |

- `name`: `Sepet Widget`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **fabbg**, **fabcolor**, **badgebg**, **badgecolor**, **drawerbg**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-cartw`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/e1sw01/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Sepet Widget",
  "desing": {
    "fabbg": "#DE6D26",
    "fabcolor": "#ffffff",
    "badgebg": "#e53935",
    "badgecolor": "#ffffff",
    "drawerbg": "#ffffff",
    "drawercolor": "#1e293b",
    "bordercolor": "#e2e8f0",
    "pricecolor": "#DE6D26",
    "removecolor": "#e53935",
    "toastbg": "#1e293b",
    "toastcolor": "#ffffff",
    "currency": "₺",
    "cartUrl": "sepet",
    "cartTitle": {
      "tr": "Sepetim",
      "en": "My Cart"
    },
    "closeText": {
      "tr": "Kapat",
      "en": "Close"
    },
    "emptyText": {
      "tr": "Sepetiniz boş.",
      "en": "Your cart is empty."
    },
    "totalText": {
      "tr": "Toplam",
      "en": "Total"
    },
    "goCar
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
