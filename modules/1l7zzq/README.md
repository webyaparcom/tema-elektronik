# tema-elektronik · 1l7zzq — Üye Kayıt (Pro)

## Nedir

tema-elektronik sitesinin matrix modülü. `Üye Kayıt (Pro)` şablonu (section kökü,
sınıf `modulex-uyekayit`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (19 KB) |
| `index.json` | Veri + tema token'ları (4 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `maxWidth` | `560px` |
| `girisUrl` | `login` |
| `kayitUrl` | `kayit` |
| `hesabimUrl` | `hesabim` |
| `urunlerUrl` | `urunler` |
| `sozlesmeUrl` | `uyelik-sozlesmesi` |
| `kvkkUrl` | `gizlilik-politikasi` |
| `tabsLabel` | `{'tr': 'Giriş veya üyelik', 'en': 'Sign in or register'}` |

- `name`: `Üye Kayıt (Pro)`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **maxWidth**, **girisUrl**, **kayitUrl**, **hesabimUrl**, **urunlerUrl**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-uyekayit`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/1l7zzq/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Üye Kayıt (Pro)",
  "desing": {
    "maxWidth": "560px",
    "girisUrl": "login",
    "kayitUrl": "kayit",
    "hesabimUrl": "hesabim",
    "urunlerUrl": "urunler",
    "sozlesmeUrl": "uyelik-sozlesmesi",
    "kvkkUrl": "gizlilik-politikasi",
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
      "tr": "Yeni hesap oluşturun",
      "en": "Create a new account"
    },
    "altBaslik": {
      "tr": "Hızlı ödeme, sipariş takibi ve kayıtlı adresler için üye olun.",
      "en": "Regis
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
