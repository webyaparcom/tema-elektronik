# tema-elektronik · 6p63ke — Hesabım (Pro)

## Nedir

tema-elektronik sitesinin matrix modülü. `Hesabım (Pro)` şablonu (section kökü,
sınıf `modulex-uyehesap`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (37 KB) |
| `index.json` | Veri + tema token'ları (5 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `maxWidth` | `1180px` |
| `girisUrl` | `login` |
| `siparislerimUrl` | `siparislerim` |
| `urunlerUrl` | `urunler` |
| `currency` | `₺` |
| `menuLabel` | `{'tr': 'Hesap menüsü', 'en': 'Account menu'}` |
| `menuBilgi` | `{'tr': 'Bilgilerim', 'en': 'My Details'}` |
| `menuAdres` | `{'tr': 'Adreslerim', 'en': 'My Addresses'}` |

- `name`: `Hesabım (Pro)`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **maxWidth**, **girisUrl**, **siparislerimUrl**, **urunlerUrl**, **currency**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-uyehesap`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/6p63ke/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Hesabım (Pro)",
  "desing": {
    "maxWidth": "1180px",
    "girisUrl": "login",
    "siparislerimUrl": "siparislerim",
    "urunlerUrl": "urunler",
    "currency": "₺",
    "menuLabel": {
      "tr": "Hesap menüsü",
      "en": "Account menu"
    },
    "menuBilgi": {
      "tr": "Bilgilerim",
      "en": "My Details"
    },
    "menuAdres": {
      "tr": "Adreslerim",
      "en": "My Addresses"
    },
    "menuSiparis": {
      "tr": "Siparişlerim",
      "en": "My Orders"
    },
    "menuSifre": {
      "tr": "Şifre",
      "en": "Password"
    },
    "menuCikis": {
      "tr": "Çıkış",
      "en": "Sign Out"
    },
    "bilgiBaslik": {
      "tr": "Kişisel bilgilerim",
     
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
