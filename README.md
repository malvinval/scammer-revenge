# Panduan Instalasi dan Penggunaan

Bot ini dirancang untuk memberikan respons otomatis terhadap tautan mencurigakan yang terdapat dalam file `url.txt` dengan menggunakan API Telegram dan Node.js. Bot ini bertujuan untuk membebani server scammer dengan permintaan spam sebagai bentuk pembalasan.

## Persyaratan Sistem

- Node.js versi terbaru
- Akun Telegram dan token API bot Telegram

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menyiapkan bot:

1. **Kloning Repository**

   Pertama, kloning repository GitHub ini ke sistem lokal Anda menggunakan perintah berikut:

   ```
   git clone https://github.com/malvinval/scammer-revenge/
   ```

2. **Instalasi Dependensi**

   Setelah kloning selesai, navigasikan ke direktori proyek dan jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

   ```
   npm install
   ```

## Eksekusi

Untuk menjalankan bot, gunakan perintah berikut di terminal atau command prompt:

```
node app.js
```

Pastikan Anda berada di direktori yang sama dengan file `app.js` saat menjalankan perintah ini.

## Fitur

Bot ini dilengkapi dengan beberapa fitur utama, antara lain:

- **Counter Attack (Spam) via API Telegram**: Bot akan mengirimkan sejumlah besar permintaan ke API Telegram yang ditargetkan sebagai bentuk serangan balik terhadap scammer.
  
- **Pembuatan Daftar Target**: Anda dapat menentukan daftar API Telegram yang ingin dijadikan target dalam sebuah file `.txt`. Formatnya memungkinkan Anda untuk dengan mudah menambah atau menghapus target.
  
- **Pengiriman Permintaan Serentak**: Bot mampu mengirim permintaan ke beberapa API secara bersamaan, meningkatkan efektivitas serangan balik.

## Konfigurasi

Sebelum menjalankan bot, Anda perlu melakukan beberapa konfigurasi:

1. **Token API Telegram**: Dapatkan token API untuk bot Telegram Anda dan masukkan ke dalam file `url.txt`.

2. **Daftar URL Target**: Isi file `url.txt` dengan daftar URL API Telegram yang ingin Anda serang. Pastikan setiap URL berada di baris baru.
   ```
   https://api.telegram.org/XXXXXXXXXXX/sendMessage?parse_mode=markdown&chat_id=XXXXXX&text=
   ```
