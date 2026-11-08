# tema-elektronik · p42lcy — Adreslerim

## Nedir

tema-elektronik sitesinin matrix modülü. `Adreslerim` şablonu (div kökü,
sınıf `modulex`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (21 KB) |
| `index.jpeg` | Önizleme görseli (6 KB) |
| `index.json` | Veri + tema token'ları (6 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `color` | `#333333` |
| `bgcolor` | `#ffffff` |
| `bordercolor` | `#e0e0e0` |
| `primarycolor` | `#007bff` |
| `successcolor` | `#28a745` |
| `moduleTitle` | `{'tr': 'Adreslerim', 'en': 'My Addresses'}` |
| `addButton` | `{'tr': 'Yeni Adres Ekle', 'en': 'Add New Address'}` |
| `defaultBadge` | `{'tr': 'Varsayılan', 'en': 'Default'}` |

- `name`: `Adreslerim`
- Diğer anahtarlar: `description`, `version`, `icon`, `category`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **color**, **bgcolor**, **bordercolor**, **primarycolor**, **successcolor**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/p42lcy/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Adreslerim",
  "desing": {
    "color": "#333333",
    "bgcolor": "#ffffff",
    "bordercolor": "#e0e0e0",
    "primarycolor": "#007bff",
    "successcolor": "#28a745",
    "moduleTitle": {
      "tr": "Adreslerim",
      "en": "My Addresses"
    },
    "addButton": {
      "tr": "Yeni Adres Ekle",
      "en": "Add New Address"
    },
    "defaultBadge": {
      "tr": "Varsayılan",
      "en": "Default"
    },
    "addressType": {
      "tr": "Ev",
      "en": "Home"
    },
    "editButton": {
      "tr": "Düzenle",
      "en": "Edit"
    },
    "deleteButton": {
      "tr": "Sil",
      "en": "Delete"
    },
    "setDefaultButton": {
      "tr": "Varsayılan Yap",
      "en": "S
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
