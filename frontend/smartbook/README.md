# 🌿 SmartBook System

Frontend React untuk sistem manajemen buku digital yang mengimplementasikan **Factory**, **Proxy**, dan **Adapter Pattern** dari kode Java AOL.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka browser di `http://localhost:5173`

## Struktur Proyek

```
smartbook/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ActivityLog.jsx   # Log aktivitas sistem
│   │   ├── BookForm.jsx      # Form tambah buku + validasi
│   │   ├── BookItem.jsx      # Item buku (baca & hapus)
│   │   ├── BookList.jsx      # Daftar koleksi buku
│   │   ├── ErrorMsg.jsx      # Pesan error validasi
│   │   ├── Section.jsx       # Wrapper section card
│   │   ├── StatCard.jsx      # Kartu statistik
│   │   ├── Toast.jsx         # Notifikasi sementara
│   │   └── TypeCard.jsx      # Kartu pilihan tipe buku
│   ├── constants/
│   │   └── catalog.js        # Warna, CATALOG, konstanta limit
│   ├── utils/
│   │   ├── factory.js        # Factory Pattern → createBookViaFactory()
│   │   ├── proxy.js          # Proxy + Adapter Pattern → readViaProxy()
│   │   ├── validation.js     # Validasi input form
│   │   └── time.js           # Helper format waktu
│   ├── App.jsx               # State management utama
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point React
├── package.json
├── vite.config.js
└── README.md
```

## Design Patterns

| Pattern  | File              | Deskripsi |
|----------|-------------------|-----------|
| Factory  | `utils/factory.js` | `createBookViaFactory(type)` → simulasi `ComicFactory`, `NovelFactory`, `MagazineFactory` |
| Proxy    | `utils/proxy.js`   | `readViaProxy(book)` → cek akses, akses DB, delegasi ke `RealBook.read()` |
| Adapter  | `utils/proxy.js`   | `MagazineAdapter` diterapkan saat tipe `magazine` untuk menyesuaikan interface |

## Validasi

- Wajib pilih tipe buku sebelum membuat
- Maksimal **5 buku per tipe**
- Maksimal **15 buku total**
- Validasi saat membaca: buku harus ditemukan di state
