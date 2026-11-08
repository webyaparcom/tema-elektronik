# tema-elektronik · tkkv6r — Sepet Pro

## Nedir

tema-elektronik sitesinin matrix modülü. `Sepet Pro` şablonu (section kökü,
sınıf `modulex-sp`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (19 KB) |
| `index.json` | Veri + tema token'ları (3 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `max` | `1200px` |
| `bgcolor` | `transparent` |
| `currency` | `₺` |
| `kargoUcret` | `0` |
| `ucretsizKargoLimit` | `0` |
| `urunlerUrl` | `urunler` |
| `odemeUrl` | `odeme` |
| `title` | `{'tr': 'Sepetim', 'en': 'My Cart'}` |

- `name`: `Sepet Pro`
- `data`: 0 kayıt. Örnek: `[]`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **max**, **bgcolor**, **currency**, **kargoUcret**, **ucretsizKargoLimit**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-sp`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/tkkv6r/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Sepet Pro",
  "desing": {
    "max": "1200px",
    "bgcolor": "transparent",
    "currency": "₺",
    "kargoUcret": "0",
    "ucretsizKargoLimit": "0",
    "urunlerUrl": "urunler",
    "odemeUrl": "odeme",
    "title": {
      "tr": "Sepetim",
      "en": "My Cart"
    },
    "loadingText": {
      "tr": "Sepet yükleniyor",
      "en": "Loading cart"
    },
    "emptyTitle": {
      "tr": "Sepetiniz boş",
      "en": "Your cart is empty"
    },
    "emptyText": {
      "tr": "Beğendiğiniz ürünleri sepete ekleyin, siparişinizi birkaç adımda tamamlayın.",
      "en": "Add the products you like to your cart and complete your order in a few steps."
    },
    "shopText": {
      "tr
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
