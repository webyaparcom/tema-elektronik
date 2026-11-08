# tema-elektronik · odfsfb — Ödeme Pro

## Nedir

tema-elektronik sitesinin matrix modülü. `Ödeme Pro` şablonu (section kökü,
sınıf `modulex-op`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (45 KB) |
| `index.json` | Veri + tema token'ları (9 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `max` | `1200px` |
| `bgcolor` | `transparent` |
| `currency` | `₺` |
| `number` | `` |
| `kapidaAktif` | `1` |
| `havaleAktif` | `1` |
| `urunlerUrl` | `urunler` |
| `sepetUrl` | `sepetim` |

- `name`: `Ödeme Pro`
- `data`: 0 kayıt. Örnek: `[]`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **max**, **bgcolor**, **currency**, **number**, **kapidaAktif**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-op`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/odfsfb/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Ödeme Pro",
  "desing": {
    "max": "1200px",
    "bgcolor": "transparent",
    "currency": "₺",
    "number": "",
    "kapidaAktif": "1",
    "havaleAktif": "1",
    "urunlerUrl": "urunler",
    "sepetUrl": "sepetim",
    "tamamUrl": "siparis-onay",
    "girisUrl": "login",
    "sozlesmeUrl": "mesafeli-satis-sozlesmesi",
    "onBilgiUrl": "on-bilgilendirme-formu",
    "title": {
      "tr": "Ödeme",
      "en": "Checkout"
    },
    "loadingText": {
      "tr": "Ödeme sayfası yükleniyor",
      "en": "Loading checkout"
    },
    "emptyTitle": {
      "tr": "Sepetiniz boş",
      "en": "Your cart is empty"
    },
    "emptyText": {
      "tr": "Ödemeye geçmek için önce sepetin
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
