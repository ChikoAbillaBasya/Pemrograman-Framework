<div align="center">

# 🚀 Pemrograman Berbasis Framework

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)

<p>Kumpulan praktikum mata kuliah <strong>Pemrograman Berbasis Framework</strong> Semester 6.<br/>Setiap folder praktikum merupakan proyek Next.js yang berdiri sendiri.</p>

</div>

---

## 📚 Daftar Praktikum

| # | Proyek | Topik | Status |
|:---:|--------|-------|:---:|
| 01 | [📁 my-app](./Praktikum-01/my-app/) | Pengenalan Next.js | ✅ Done |
| 02 | [📁 next-routing](./Praktikum-02/next-routing/) | Routing di Next.js | ✅ Done |

---

## 🗂️ Detail Praktikum

<details>
<summary><b>📦 Praktikum 01 — Pengenalan Next.js</b></summary>
<br/>

Proyek dasar Next.js yang di-bootstrap menggunakan `create-next-app`. Berisi halaman utama dan halaman `about` sederhana beserta contoh API route.

**🗺️ Struktur Halaman**
```
/           → Halaman utama  (index.tsx)
/about      → Halaman about  (about.js)
/api/hello  → Contoh API route
```

**▶️ Menjalankan Proyek**
```bash
cd Praktikum-01/my-app
npm install
npm run dev
```
> Buka [http://localhost:3000](http://localhost:3000) di browser.

</details>

<details>
<summary><b>📦 Praktikum 02 — Routing di Next.js</b></summary>
<br/>

Proyek yang membahas sistem routing Next.js menggunakan **Pages Router**, mencakup dynamic routes, nested routes, dan penggunaan komponen layout.

**🗺️ Struktur Halaman**
```
/                   → Halaman utama
/about              → Halaman about
/blog/[slug]        → Dynamic route blog
/produk             → Daftar produk
/produk/[id]        → Detail produk (dynamic route)
/profile            → Halaman profil
/profile/edit       → Edit profil
/user               → Halaman user
/user/password      → Ubah password (nested route)
/setting/app        → Pengaturan aplikasi
/api/hello          → Contoh API route
```

**▶️ Menjalankan Proyek**
```bash
cd Praktikum-02/next-routing
npm install
npm run dev
```
> Buka [http://localhost:3000](http://localhost:3000) di browser.

</details>

---

## 🛠️ Tech Stack

<div align="center">

| Teknologi | Versi | Keterangan |
|-----------|:-----:|------------|
| [Next.js](https://nextjs.org/) | 16 | React Framework |
| [React](https://react.dev/) | 19 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type Safety |
| [ESLint](https://eslint.org/) | 9 | Code Linting |

</div>

---

## ⚙️ Prasyarat

Pastikan sudah terinstall sebelum menjalankan proyek:

- **[Node.js](https://nodejs.org/)** v18 atau lebih baru
- **npm** / **yarn** / **pnpm**

---

<div align="center">

📝 Proyek ini dibuat untuk keperluan akademik.

</div>
