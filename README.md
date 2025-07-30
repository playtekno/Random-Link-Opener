
# Random Link Opener

Proyek ini adalah sebuah script sederhana yang membuka tautan acak setiap kali pengguna mengklik di mana saja di halaman dengan link yang terbuka secara random
Script dibuat tadinya untuk bermain direct link Adsterra atau Monetag yang mana direct link tersebut isinya random bisa jadi link judika, link download ata sexy chat

## Fitur

- Membuka tautan acak dari daftar setiap kali pengguna mengklik di halaman.
- Tautan dibuka di tab baru.
- Desain responsif dan sederhana.

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript

## Cocok Untuk

Skrip ini cocok untuk berbagai jenis proyek, termasuk:

- **Direct link Adsterra/Monetag**: Mengarahkan pengguna ke berbagai produk atau layanan meraka.
- **Game Sederhana**: Menyediakan tautan ke berbagai level atau tantangan.
- **Webinar atau Acara**: Mengarahkan pengguna ke tautan pendaftaran atau informasi lebih lanjut.
- **Situs Portofolio**: Menampilkan berbagai proyek atau karya yang ingin ditonjolkan.

## Cara Menggunakan

1. **Copy** script dibawah ini
 
   ``` javascript
   <script>
    const links = [
        'https://example.com/link1',
        'https://example.com/link2',
        'https://example.com/link3',
        'https://example.com/link4',
        'https://example.com/link5'
    ];

    document.addEventListener('click', function(event) {
        // Mencegah link default jika diklik di tombol
        if (event.target.id === 'randlink') {
            event.preventDefault();
        }

        // Memilih link acak
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex];

        // Membuka link baru
        window.open(randomLink, '_blank');
    });</script> 
```
```
2. Paste script ke project anda

## Daftar Tautan

Anda dapat menyesuaikan tautan yang akan dibuka dengan mengedit array `links` di dalam file `index.html`. Cukup tambahkan atau ganti tautan sesuai kebutuhan Anda.

```
const links = [
    'https://example.com/link1',
    'https://example.com/link2',
    'https://example.com/link3',
    'https://example.com/link4',
    'https://example.com/link5'
];

```

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Penulis

- [Hendy Black] - Pengembang

## Donasi

Jika merasa script ini berguna, silakan support donasi seikhlasnya di [Link Berikut](https://lynk.id/hendygital/s/e8n3rm42rj39).
```

### Penjelasan Tambahan:
- **Cocok Untuk**: Menambahkan bagian ini memberikan konteks lebih lanjut tentang jenis proyek yang dapat memanfaatkan skrip ini. Ini membantu pengguna memahami aplikasi potensial dari kode yang telah Anda buat.

Anda bisa menyesuaikan lebih lanjut bagian ini sesuai dengan ide spesifik yang Anda miliki.
