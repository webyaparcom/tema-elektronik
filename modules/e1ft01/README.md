# tema-elektronik · e1ft01 — E-ticaret Alt

## Nedir

tema-elektronik sitesinin matrix modülü. `E-ticaret Alt` şablonu (footer kökü,
sınıf `modulex-efoot`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (12 KB) |
| `index.html` | Modül şablonu (render hedefi) (11 KB) |
| `index.jpeg` | Önizleme görseli (14 KB) |
| `index.json` | Veri + tema token'ları (9 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `color` | `#111111` |
| `accent` | `#c9a962` |
| `bgcolor` | `#f5f5f5` |
| `footer_bg` | `#111111` |
| `footer_text` | `#ffffff` |
| `footer_main_bg` | `#f0f0f0` |
| `footer_link` | `#555555` |
| `trust_bg` | `#fafafa` |

- `name`: `E-ticaret Alt`
- `data`: 5 kayıt. Örnek: `{"trust": [{"id": "trust_secure", "icon": "verified_user", "title": {"tr": "Güvenli Alışveriş", "en": "Secure Shopping"}, "desc": {"tr": "2…`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **color**, **accent**, **bgcolor**, **footer_bg**, **footer_text**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-efoot`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/e1ft01/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "E-ticaret Alt",
  "desing": {
    "color": "#111111",
    "accent": "#c9a962",
    "bgcolor": "#f5f5f5",
    "footer_bg": "#111111",
    "footer_text": "#ffffff",
    "footer_main_bg": "#f0f0f0",
    "footer_link": "#555555",
    "trust_bg": "#fafafa",
    "trust_border": "#e5e5e5",
    "trust_hover_bg": "#f3f3f3",
    "trust_muted": "#777777",
    "features_bg": "#ffffff",
    "footer_aria": {
      "tr": "Site alt bilgisi",
      "en": "Site footer"
    },
    "payments_aria": {
      "tr": "Kabul edilen ödeme yöntemleri",
      "en": "Accepted payment methods"
    },
    "newsletter_title": {
      "tr": "Bülten Aboneliği",
      "en": "Newsletter"
    },
    "newsletter_desc
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
