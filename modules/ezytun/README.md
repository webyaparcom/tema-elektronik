# tema-elektronik · ezytun — Maps

## Nedir

tema-elektronik sitesinin matrix modülü. `Maps` şablonu (a kökü,
sınıf `modulex`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (0 KB) |
| `index.html` | Modül şablonu (render hedefi) (1 KB) |
| `index.jpeg` | Önizleme görseli (4 KB) |
| `index.json` | Veri + tema token'ları (0 KB) |
| `map.png` | Harita önizlemesi / referans görseli (40 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `height` | `200px` |
| `opacity` | `0.5` |
| `backgroundcolor` | `#ffffff` |
| `color` | `#1e3046` |
| `img` | `map.png` |
| `externalUrl` | `` |

- `name`: `Maps`
- Diğer anahtarlar: `category`, `description`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **height**, **opacity**, **backgroundcolor**, **color**, **img**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-elektronik sitesinde `web/matrix/modules/ezytun/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Maps",
  "desing": {
    "height": "200px",
    "opacity": "0.5",
    "backgroundcolor": "#ffffff",
    "color": "#1e3046",
    "img": "map.png",
    "externalUrl": ""
  },
  "data": null
}
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
