# tema-elektronik · jrtdmm — Sipariş Tamamlandı

## Nedir

tema-elektronik sitesinin matrix modülü. `Sipariş Tamamlandı` şablonu (section kökü,
sınıf `modulex-st`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (21 KB) |
| `index.json` | Veri + tema token'ları (5 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `max` | `860px` |
| `bgcolor` | `transparent` |
| `currency` | `₺` |
| `urunlerUrl` | `urunler` |
| `siparislerimUrl` | `siparislerim` |
| `title` | `{'tr': 'Siparişiniz alındı!', 'en': 'Your order has been received!', 'ar': 'تم استلام طلبك!'}` |
| `text` | `{'tr': 'Teşekkür ederiz. Siparişinizin durumunu Siparişlerim sayfasından takip edebilirsiniz.', 'en': 'Thank you. You can track your order status on the My Orders page.', 'ar': 'شكرًا لك. يمكنك متابعة حالة طلبك من صفحة طلباتي.'}` |
| `loadingText` | `{'tr': 'Sipariş bilgileri yükleniyor', 'en': 'Loading order details', 'ar': 'جارٍ تحميل تفاصيل الطلب'}` |

- `name`: `Sipariş Tamamlandı`
- `data`: 0 kayıt. Örnek: `[]`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **max**, **bgcolor**, **currency**, **urunlerUrl**, **siparislerimUrl**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-st`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/jrtdmm/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Sipariş Tamamlandı",
  "desing": {
    "max": "860px",
    "bgcolor": "transparent",
    "currency": "₺",
    "urunlerUrl": "urunler",
    "siparislerimUrl": "siparislerim",
    "title": {
      "tr": "Siparişiniz alındı!",
      "en": "Your order has been received!",
      "ar": "تم استلام طلبك!"
    },
    "text": {
      "tr": "Teşekkür ederiz. Siparişinizin durumunu Siparişlerim sayfasından takip edebilirsiniz.",
      "en": "Thank you. You can track your order status on the My Orders page.",
      "ar": "شكرًا لك. يمكنك متابعة حالة طلبك من صفحة طلباتي."
    },
    "loadingText": {
      "tr": "Sipariş bilgileri yükleniyor",
      "en": "Loading order details",
      "ar": "
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
