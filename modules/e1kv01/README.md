# tema-elektronik · e1kv01 — Kategori Vitrin (Görselli Ürün Grupları)

## Nedir

tema-elektronik sitesinin matrix modülü. `Kategori Vitrin (Görselli Ürün Grupları)` şablonu (section kökü,
sınıf `kvSection`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (2 KB) |
| `index.html` | Modül şablonu (render hedefi) (3 KB) |
| `index.json` | Veri + tema token'ları (1 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `max` | `1200px` |
| `bgcolor` | `#FBF8F1` |
| `cardbg` | `#FFFFFF` |
| `color` | `#0E2347` |
| `accent` | `#B5831B` |
| `bordercolor` | `#E6DCC3` |
| `title` | `{'tr': 'Ürün Gruplarımız', 'en': 'Our Product Groups'}` |
| `subtitle` | `{'tr': 'Doğal ve organik ürün gruplarımızı keşfedin', 'en': 'Explore our natural and organic product groups'}` |

- `name`: `Kategori Vitrin (Görselli Ürün Grupları)`
- `data`: 2 kayıt. Örnek: `{"img": "", "name": {"tr": "Ürün Grubu 1", "en": "Product Group 1"}, "url": "urunler"}`
- Diğer anahtarlar: `category`, `description`, `version`, `icon`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **max**, **bgcolor**, **cardbg**, **color**, **accent**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`kvSection`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/e1kv01/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Kategori Vitrin (Görselli Ürün Grupları)",
  "desing": {
    "max": "1200px",
    "bgcolor": "#FBF8F1",
    "cardbg": "#FFFFFF",
    "color": "#0E2347",
    "accent": "#B5831B",
    "bordercolor": "#E6DCC3",
    "title": {
      "tr": "Ürün Gruplarımız",
      "en": "Our Product Groups"
    },
    "subtitle": {
      "tr": "Doğal ve organik ürün gruplarımızı keşfedin",
      "en": "Explore our natural and organic product groups"
    }
  },
  "data": [
    {
      "img": "",
      "name": {
        "tr": "Ürün Grubu 1",
        "en": "Product Group 1"
      },
      "url": "urunler"
    },
    {
      "img": "",
      "name": {
        "tr": "Ürün Grubu 2",
        "en": "Product
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
