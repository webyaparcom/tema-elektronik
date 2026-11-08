# tema-elektronik · b3gkb0 — Üye Girişi (Pro)

## Nedir

tema-elektronik sitesinin matrix modülü. `Üye Girişi (Pro)` şablonu (section kökü,
sınıf `modulex-uyegiris`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (14 KB) |
| `index.json` | Veri + tema token'ları (3 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `maxWidth` | `460px` |
| `girisUrl` | `login` |
| `kayitUrl` | `kayit` |
| `hesabimUrl` | `hesabim` |
| `sifreUrl` | `sifre-sifirlama` |
| `urunlerUrl` | `urunler` |
| `tabsLabel` | `{'tr': 'Giriş veya üyelik', 'en': 'Sign in or register'}` |
| `tabGiris` | `{'tr': 'Giriş Yap', 'en': 'Sign In'}` |

- `name`: `Üye Girişi (Pro)`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **maxWidth**, **girisUrl**, **kayitUrl**, **hesabimUrl**, **sifreUrl**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-uyegiris`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/b3gkb0/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Üye Girişi (Pro)",
  "desing": {
    "maxWidth": "460px",
    "girisUrl": "login",
    "kayitUrl": "kayit",
    "hesabimUrl": "hesabim",
    "sifreUrl": "sifre-sifirlama",
    "urunlerUrl": "urunler",
    "tabsLabel": {
      "tr": "Giriş veya üyelik",
      "en": "Sign in or register"
    },
    "tabGiris": {
      "tr": "Giriş Yap",
      "en": "Sign In"
    },
    "tabKayit": {
      "tr": "Üye Ol",
      "en": "Register"
    },
    "baslik": {
      "tr": "Hesabınıza giriş yapın",
      "en": "Sign in to your account"
    },
    "altBaslik": {
      "tr": "Siparişlerinizi takip edin, adreslerinizi yönetin.",
      "en": "Track your orders and manage your addresses."
    },
 
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
