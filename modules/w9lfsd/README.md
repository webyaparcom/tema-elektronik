# tema-elektronik · w9lfsd — Login

## Nedir

tema-elektronik sitesinin matrix modülü. `Login` şablonu (div kökü,
sınıf `modulex`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (17 KB) |
| `index.jpeg` | Önizleme görseli (14 KB) |
| `index.json` | Veri + tema token'ları (5 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `color` | `#ff671d` |
| `bgcolor` | `#101010` |
| `nextUrl` | `sepet` |
| `loginTitle` | `{'tr': 'Giriş Yap', 'en': 'Login'}` |
| `registerTitle` | `{'tr': 'Üye Ol', 'en': 'Register'}` |
| `emailPlaceholder` | `{'tr': 'Mail Adresiniz', 'en': 'Your Email'}` |
| `userPlaceholder` | `{'tr': 'Kullanıcı adı', 'en': 'Username'}` |
| `surnamePlaceholder` | `{'tr': 'Soyad', 'en': 'Surname'}` |

- `name`: `Login`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **color**, **bgcolor**, **nextUrl**, **loginTitle**, **registerTitle**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/w9lfsd/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Login",
  "desing": {
    "color": "#ff671d",
    "bgcolor": "#101010",
    "nextUrl": "sepet",
    "loginTitle": {
      "tr": "Giriş Yap",
      "en": "Login"
    },
    "registerTitle": {
      "tr": "Üye Ol",
      "en": "Register"
    },
    "emailPlaceholder": {
      "tr": "Mail Adresiniz",
      "en": "Your Email"
    },
    "userPlaceholder": {
      "tr": "Kullanıcı adı",
      "en": "Username"
    },
    "surnamePlaceholder": {
      "tr": "Soyad",
      "en": "Surname"
    },
    "passwordPlaceholder": {
      "tr": "Şifre",
      "en": "Password"
    },
    "passwordConfirmPlaceholder": {
      "tr": "Şifre Tekrar",
      "en": "Confirm Password"
    },
    "namePla
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
