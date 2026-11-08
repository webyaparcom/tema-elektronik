# tema-elektronik · ut5h88 — Siparişlerim (Pro)

## Nedir

tema-elektronik sitesinin matrix modülü. `Siparişlerim (Pro)` şablonu (section kökü,
sınıf `modulex-uyesip`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (25 KB) |
| `index.json` | Veri + tema token'ları (4 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `maxWidth` | `980px` |
| `girisUrl` | `login` |
| `urunlerUrl` | `urunler` |
| `currency` | `₺` |
| `baslik` | `{'tr': 'Siparişlerim', 'en': 'My Orders'}` |
| `altBaslik` | `{'tr': 'Siparişlerinizin durumunu ve detaylarını buradan takip edin.', 'en': 'Track the status and details of your orders here.'}` |
| `detayButon` | `{'tr': 'Detayı göster', 'en': 'Show details'}` |
| `sayfalamaLabel` | `{'tr': 'Sipariş sayfaları', 'en': 'Order pages'}` |

- `name`: `Siparişlerim (Pro)`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **maxWidth**, **girisUrl**, **urunlerUrl**, **currency**, **baslik**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-uyesip`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/ut5h88/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Siparişlerim (Pro)",
  "desing": {
    "maxWidth": "980px",
    "girisUrl": "login",
    "urunlerUrl": "urunler",
    "currency": "₺",
    "baslik": {
      "tr": "Siparişlerim",
      "en": "My Orders"
    },
    "altBaslik": {
      "tr": "Siparişlerinizin durumunu ve detaylarını buradan takip edin.",
      "en": "Track the status and details of your orders here."
    },
    "detayButon": {
      "tr": "Detayı göster",
      "en": "Show details"
    },
    "sayfalamaLabel": {
      "tr": "Sipariş sayfaları",
      "en": "Order pages"
    },
    "oncekiButon": {
      "tr": "Önceki",
      "en": "Previous"
    },
    "sonrakiButon": {
      "tr": "Sonraki",
      "en": "Next"
 
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
