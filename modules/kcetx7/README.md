# Teknik Özellik Tablosu (Sanayi) — `kcetx7` (tema-elektronik)

## Amaç
Ürün detay sayfasındaki özellik kartı: ürünün özellikleri (ör. garanti, kumaş, ayar, malzeme) iki sütunlu tablo olarak gösterilir. Kategori (products) gövdesindeki `eticaret-urun-detay` modülünden sonra çizilir — tema-gida'daki `urun-etiket` deseninin sektörden bağımsız karşılığı.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/teknik-tablo` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: products/akilli-bileklik.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/elektronik/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
