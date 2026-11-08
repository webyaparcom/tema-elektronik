# tema-elektronik · ocu8tl — Ödeme (Demo)

## Nedir

tema-elektronik sitesinin matrix modülü. `Ödeme (Demo)` şablonu (section kökü,
sınıf `modulex-od`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (4 KB) |
| `index.html` | Modül şablonu (render hedefi) (55 KB) |
| `index.json` | Veri + tema token'ları (16 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `max` | `1120px` |
| `bgcolor` | `var(--mx-site-bg, #ffffff)` |
| `textcolor` | `var(--mx-site-text, #1b1b1b)` |
| `surface` | `var(--mx-site-surface, #f6f6f4)` |
| `surface2` | `var(--mx-site-surface-2, #ececea)` |
| `accent` | `var(--mx-site-primary, #2563eb)` |
| `accentText` | `var(--mx-site-primary-contrast, #ffffff)` |
| `bordercolor` | `color-mix(in srgb, var(--mx-site-text, #1b1b1b) 18%, transparent)` |

- `name`: `Ödeme (Demo)`
- Diğer anahtarlar: `description`, `version`, `icon`, `category`, `tags`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **max**, **bgcolor**, **textcolor**, **surface**, **surface2**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-od`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/ocu8tl/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Ödeme (Demo)",
  "desing": {
    "max": "1120px",
    "bgcolor": "var(--mx-site-bg, #ffffff)",
    "textcolor": "var(--mx-site-text, #1b1b1b)",
    "surface": "var(--mx-site-surface, #f6f6f4)",
    "surface2": "var(--mx-site-surface-2, #ececea)",
    "accent": "var(--mx-site-primary, #2563eb)",
    "accentText": "var(--mx-site-primary-contrast, #ffffff)",
    "bordercolor": "color-mix(in srgb, var(--mx-site-text, #1b1b1b) 18%, transparent)",
    "mutedcolor": "color-mix(in srgb, var(--mx-site-text, #1b1b1b) 72%, var(--mx-site-bg, #fff))",
    "currency": "₺",
    "methods": [
      "kart",
      "havale",
      "kapida"
    ],
    "shipping": {
      "free_over": 500,
      "fee
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
