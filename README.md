# 🌾 JAVANESIA — Media Pembelajaran Interaktif Bahasa Jawa (Materi Parikan)

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.0-06B6D4?logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-339933?logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-Educational-green)

**Javanesia** adalah platform media pembelajaran web interaktif yang dirancang khusus untuk mendukung proses belajar sastra Jawa, khususnya materi **Parikan** bagi siswa-siswi SMP Kelas 8 (usia 13–14 tahun). Aplikasi ini mengintegrasikan unsur kebudayaan Jawa yang membumi dengan teknologi modern, animasi interaktif, audio gamelan yang menenangkan, serta game edukasi.

---

## 📌 Latar Belakang & Tujuan

Materi Parikan dalam bahasa Jawa sering kali dipersepsikan kaku atau kurang menarik bagi generasi muda. **Javanesia** hadir untuk menjembatani sastra tradisional Jawa dengan antarmuka digital modern yang menyenangkan (*gamified learning*). 

**Tujuan Utama:**
- **Meningkatkan minat dan pemahaman** siswa SMP terhadap karya sastra Jawa (Parikan).
- **Menyediakan sarana belajar mandiri** dan terstruktur yang dilengkapi penjelasan visual, contoh audio, video pembelajaran, serta evaluasi interaktif.
- **Menyajikan pengalaman belajar yang beretika budaya**, tenang, dan ramah pengguna.

---

## 🌟 Fitur-Fitur Utama

1. 🚀 **SplashScreen & Interactive Opening**
   - Layar pembuka beranimasi dengan nuansa estetika budaya Jawa untuk menyambut siswa sebelum masuk ke ruang belajar.
2. 👤 **Sistem Identitas Siswa (Login Sederhana)**
   - Siswa dapat menginputkan **Nama**, **Kelas**, dan **Nomor Absen**. Data tersimpan secara lokal (*localStorage*) untuk personalisasi skor game dan evaluasi.
3. 🗺️ **Alur Belajar (Learning Path)**
   - Panduan tahap demi tahap mulai dari pemahaman konsep parikan, menonton video, latihan game, hingga evaluasi akhir.
4. 📚 **Modul Materi Parikan Interaktif**
   - Pembahasan komprehensif mengenai **Parikan 2 Gatra** dan **Parikan 4 Gatra**.
   - Penjelasan struktur (*sampiran* & *isi*), ciri-ciri, aturan purwakanthi, contoh nyata, serta latihan interaktif per materi.
5. 🎬 **Video Pembelajaran Integratif**
   - Pemutaran video edukasi parikan untuk memperjelas materi secara visual dan pendengaran.
6. 🎮 **Game Parikan Interaktif**
   - Permainan menyusun kalimat parikan, tebak rima, kuis cepat, serta integrasi tautan dunia virtual (*ZEP Metaverse Game*).
7. 📝 **Modul Evaluasi & Penilaian Otomatis**
   - Kuis pemahaman akhir dengan timer, acak soal, serta rekapitulasi nilai dan umpan balik langsung.
8. 🎵 **Background Music & Sound Effects**
   - Musik gamelan khas Jawa yang menenangkan (*ambient relaxation music*) dilengkapi panel kontrol audio (play/pause & mute).
9. 📱 **Desain Responsif & Etnik Modern**
   - Menggunakan palet warna alam Jawa (Hijau Daun Jati, Krem Kertas Kuno, Coklat Kayu Jati) yang ramah mata tanpa kelelahan visual.

---

## 🎨 Sistem Desain & Filosofi Visual

Javanesia menggunakan sistem desain khusus yang menonjolkan **"Ketenangan Filosofi Jawa dalam Ruang Belajar Modern"**:

- **Palet Warna Utama:**
  - `Daun Jati` (`#597A52`) : Warna aksen utama tombol dan navigasi aktif.
  - `Kertas Kuno` (`#FDFCF0`) : Warna latar belakang utama agar mata tidak cepat lelah saat belajar.
  - `Kayu Jati` (`#332B25`) : Warna teks utama untuk keterbacaan yang tinggi.
- **Tipografi:**
  - **Display / Judul:** *Lora* (Font serif elegan yang mencerminkan kebudayaan & sastra).
  - **Body / Konten:** *Inter* (Font sans-serif bersih dan mudah dibaca oleh remaja).
- **Prinsip Anti-Slop:**
  - Bebas dari template AI generik atau warna neon yang tajam.
  - Penggunaan bayangan (*shadow*) dan animasi secara terukur untuk menjaga konsentrasi belajar.

---

## 🛠️ Teknologi yang Digunakan

- **Core Framework:** [React 19](https://react.dev/) (`react`, `react-dom`)
- **Build Tool & Bundler:** [Vite 7](https://vitejs.dev/)
- **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Language:** JavaScript (ES Modules) & TypeScript Config
- **Automation / Testing:** Playwright Core (Dev dependency)

---

## 📁 Struktur Direktori Proyek

```
pembelajaranJawa/
├── public/                # Aset statis (gambar profil, audio gamelan, ikon)
├── src/
│   ├── components/        # Komponen UI reusable (NavBar, HomeBar, BackgroundMusic, InfoModal, dll.)
│   ├── data/              # Dataset materi, kuis evaluasi, game, menu, & profil pengembang
│   ├── hooks/             # Custom React Hooks (misal: useStudentName)
│   ├── pages/             # Halaman aplikasi (HomePage, MateriDetailPage, GamePage, EvaluasiPage, dll.)
│   ├── utils/             # Fungsi pembantu (helper utilities)
│   ├── App.jsx            # Pengatur alur utama & routing state aplikasi
│   ├── main.jsx           # Entry point React
│   └── styles.css         # Custom CSS & integrasi Tailwind
├── DESIGN.md              # Panduan Design System aplikasi
├── PRODUCT.md             # Dokumen spesifikasi produk & target pengguna
├── package.json           # Dependensi & script proyek
├── vite.config.js         # Konfigurasi Vite & Tailwind plugin
└── README.md              # Dokumentasi proyek ini
```

---

## 🚀 Panduan Memulai (Getting Started)

### Prasyarat Sistem
Pastikan perangkat Anda telah terinstal:
- **Node.js**: Versi `>= 18.0.0`
- **npm** (terinstal bawaan dari Node.js)

### Langkah Instalasi & Pengoperasian

1. **Buka Terminal & Navigasi ke Folder Proyek**
   ```bash
   cd d:/Jokian/pembelajaranJawa
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Mode Pengembangan (Development)**
   ```bash
   npm run dev
   ```
   Buka browser pada alamat yang tertera (biasanya `http://127.0.0.1:5173` atau `http://localhost:5173`).

4. **Build untuk Produksi (Production Build)**
   ```bash
   npm run build
   ```
   Hasil build siap rilis akan secara otomatis tersimpan di folder `dist/`.

5. **Pratinjau Hasil Build (Preview Production)**
   ```bash
   npm run preview
   ```

---

## 👩‍💻 Tim Pengembang & Pembimbing Akademis

Aplikasi media pembelajaran ini dikembangkan sebagai bagian dari penelitian akademis Pendidikan Bahasa dan Sastra Jawa:

- **Mahasiswa Pengembang Media:**
  - **Nashwa Namiralya Faza** (NIM: 23020114009)
  - *S1 Pendidikan Bahasa dan Sastra Jawa — Universitas Negeri Surabaya (UNESA)*
- **Dosen Pembimbing:**
  - **Dr. Octo Dendy Andriyanto, S.Pd., M.Pd.** (NIP/NIDN: 198907262015041002 / 0026078901)
  - *Spesialisasi: Pembelajaran Bahasa & Sastra Jawa*
- **Tim Developer Web:**
  - **Misbahul Munir** (Pengembang Tampilan Utama, Halaman Materi, Video, & Game Interaktif)
  - **Misbahul Musthofah** (Pengatur Pengalaman Pengguna, Integrasi Konten, Audio, & Alur Navigasi)

---

## 📄 Lisensi & Hak Cipta

© 2026 **Javanesia — S1 Pendidikan Bahasa dan Sastra Jawa, Universitas Negeri Surabaya**.  
Dikembangkan khusus untuk kepentingan pendidikan dan media pembelajaran sastra Jawa.
