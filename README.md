<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=Pemrograman%20Berbasis%20Framework&fontSize=32&fontColor=ffffff&fontAlignY=40&desc=Semester%206%20%E2%80%94%20Next.js%20Practicum%20Repository&descAlignY=62&descSize=16" width="100%"/>

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

<br/>

> 📖 Kumpulan praktikum mata kuliah **Pemrograman Berbasis Framework** Semester 6.  
> Setiap folder praktikum merupakan proyek **Next.js** yang berdiri sendiri.

<br/>

![GitHub repo size](https://img.shields.io/github/repo-size/username/repo?style=flat-square&color=302b63&label=Repo%20Size)
![Praktikum](https://img.shields.io/badge/Praktikum-7%20Selesai-brightgreen?style=flat-square)
![Framework](https://img.shields.io/badge/Framework-Next.js-black?style=flat-square&logo=next.js)

</div>

<br/>

---

## 📚 Daftar Praktikum

<div align="center">

| # | Proyek | Topik | Konsep Utama | Status |
|:---:|--------|-------|:------------:|:---:|
| `01` | [📁 my-app](./Praktikum-01/my-app/) | Pengenalan Next.js | Pages, Routing dasar, API Route | ✅ |
| `02` | [📁 next-routing](./Praktikum-02/next-routing/) | Routing Next.js | Dynamic Route, Nested Route, Layout | ✅ |
| `03` | [📁 next-routing](./Praktikum-03/next-routing/) | Advanced Routing | Catch-all, Optional Catch-all, Auth | ✅ |
| `04` | [📁 next-routing](./Praktikum-04/next-routing/) | Styling & Views Pattern | Tailwind CSS, Sass, CSS Modules, Views | ✅ |
| `05` | [📁 next-routing](./Praktikum-05/next-routing/) | Custom Error Page | Custom 404, Sass, CSS Modules, Views | ✅ |
| `06` | [📁 next-routing](./Praktikum-06/next-routing/) | Firebase & Fetch API | Firebase Firestore, REST API, Fetch | ✅ |
| `07` | [📁 next-routing](./Praktikum-07/next-routing/) | SWR Data Fetching | SWR, Firebase Firestore, Fetcher | ✅ |

</div>

<br/>

---

## 🗂️ Detail Praktikum

<details>
<summary>
  <b>&nbsp;📦 Praktikum 01 &nbsp;—&nbsp; Pengenalan Next.js</b>
</summary>
<br/>
<blockquote>Proyek dasar Next.js yang di-bootstrap menggunakan <code>create-next-app</code>. Berisi halaman utama dan halaman <code>about</code> sederhana beserta contoh API route.</blockquote>

**🗺️ Struktur Halaman**

```
📂 my-app/src/pages
 ├── 📄 index.tsx       →  /             Halaman utama
 ├── 📄 about.js        →  /about        Halaman about
 └── 📂 api
     └── 📄 hello.ts    →  /api/hello    Contoh API route
```

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-01/my-app
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000](http://localhost:3000)** di browser.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 02 &nbsp;—&nbsp; Routing di Next.js</b>
</summary>
<br/>
<blockquote>Proyek yang membahas sistem routing Next.js menggunakan <strong>Pages Router</strong>, mencakup dynamic routes, nested routes, dan penggunaan komponen layout.</blockquote>

**🗺️ Struktur Halaman**

```
📂 next-routing/src/pages
 ├── 📄 index.tsx            →  /                  Halaman utama
 ├── 📄 about.tsx            →  /about             Halaman about
 ├── 📂 blog
 │   └── 📄 [slug].tsx       →  /blog/:slug        Dynamic route blog
 ├── 📂 produk
 │   ├── 📄 index.tsx        →  /produk            Daftar produk
 │   └── 📄 [id].tsx         →  /produk/:id        Detail produk
 ├── 📂 profile
 │   ├── 📄 index.tsx        →  /profile           Halaman profil
 │   └── 📄 edit.tsx         →  /profile/edit      Edit profil
 ├── 📂 user
 │   ├── 📄 index.tsx        →  /user              Halaman user
 │   └── 📂 password
 │       └── 📄 index.tsx    →  /user/password     Ubah password
 ├── 📂 setting
 │   └── 📄 app.tsx          →  /setting/app       Pengaturan
 └── 📂 api
     └── 📄 hello.ts         →  /api/hello         API route
```

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-02/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000](http://localhost:3000)** di browser.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 03 &nbsp;—&nbsp; Advanced Routing di Next.js</b>
</summary>
<br/>
<blockquote>Proyek lanjutan routing Next.js (Pages Router) yang mencakup <strong>dynamic routes</strong>, <strong>catch-all routes</strong>, <strong>optional catch-all routes</strong>, nested routes, dan halaman autentikasi.</blockquote>

**🗺️ Struktur Halaman**

```
📂 next-routing/src/pages
 ├── 📄 index.tsx              →  /                    Halaman utama
 ├── 📄 about.tsx              →  /about               Halaman about
 ├── 📂 blog
 │   └── 📄 [slug].tsx         →  /blog/:slug          Dynamic route
 ├── 📂 produk
 │   ├── 📄 index.tsx          →  /produk              Daftar produk
 │   └── 📄 [id].tsx           →  /produk/:id          Detail produk
 ├── 📂 category
 │   └── 📄 [...slug].js       →  /category/*          Catch-all route
 ├── 📂 shop
 │   └── 📄 [[...slug]].js     →  /shop  /shop/*       Optional catch-all
 ├── 📂 auth
 │   ├── 📄 login.tsx          →  /auth/login          Halaman login
 │   └── 📄 register.tsx       →  /auth/register       Halaman register
 ├── 📂 profile
 │   ├── 📄 index.tsx          →  /profile             Halaman profil
 │   └── 📄 edit.tsx           →  /profile/edit        Edit profil
 ├── 📂 user
 │   ├── 📄 index.tsx          →  /user                Halaman user
 │   └── 📂 password
 │       └── 📄 index.tsx      →  /user/password       Ubah password
 ├── 📂 setting
 │   └── 📄 app.tsx            →  /setting/app         Pengaturan
 └── 📂 api
     └── 📄 hello.ts           →  /api/hello           API route
```

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-03/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000](http://localhost:3000)** di browser.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 04 &nbsp;—&nbsp; Styling &amp; Views Pattern</b>
</summary>
<br/>
<blockquote>Proyek yang membahas berbagai metode <strong>styling</strong> di Next.js — Tailwind CSS, Sass, dan CSS Modules — serta penerapan pola <strong>Views</strong> untuk memisahkan logika halaman dengan komponen tampilan.</blockquote>

**🗺️ Struktur Halaman**

```
📂 next-routing/src/pages
 ├── 📄 index.tsx              →  /                    Halaman utama
 ├── 📄 about.tsx              →  /about               Halaman about
 ├── 📂 blog
 │   └── 📄 [slug].tsx         →  /blog/:slug          Dynamic route
 ├── 📂 produk
 │   ├── 📄 index.tsx          →  /produk              Daftar produk
 │   └── 📄 [id].tsx           →  /produk/:id          Detail produk
 ├── 📂 category
 │   └── 📄 [...slug].js       →  /category/*          Catch-all route
 ├── 📂 shop
 │   └── 📄 [[...slug]].js     →  /shop  /shop/*       Optional catch-all
 ├── 📂 auth
 │   ├── 📄 login.tsx          →  /auth/login          Halaman login
 │   └── 📄 register.tsx       →  /auth/register       Halaman register
 ├── 📂 views                  →  (View components layer)
 │   ├── 📂 auth
 │   │   ├── 📂 login           →  LoginView component
 │   │   └── 📂 register        →  RegisterView component
 │   └── 📂 produk
 │       ├── 📂 heroSection     →  Hero section component
 │       ├── 📂 mainSection     →  Main section component
 │       └── 📄 index.tsx       →  Produk view component
 ├── 📂 profile
 │   ├── 📄 index.tsx          →  /profile             Halaman profil
 │   └── 📄 edit.tsx           →  /profile/edit        Edit profil
 ├── 📂 user
 │   ├── 📄 index.tsx          →  /user                Halaman user
 │   └── 📂 password
 │       └── 📄 index.tsx      →  /user/password       Ubah password
 ├── 📂 setting
 │   └── 📄 app.tsx            →  /setting/app         Pengaturan
 └── 📂 api
     └── 📄 hello.ts           →  /api/hello           API route
```

**🎨 Styling yang Digunakan**

| File | Metode | Keterangan |
|------|:------:|-----------|
| `globals.css` | Global CSS | Style global aplikasi |
| `Home.module.css` | CSS Modules | Scoped style per komponen |
| `colors.scss` | Sass Variables | Variabel warna global |
| `login.module.scss` | Sass Modules | Scoped Sass style |
| Tailwind CSS | Utility-first | Class-based styling |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-04/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000](http://localhost:3000)** di browser.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 05 &nbsp;—&nbsp; Custom Error Page</b>
</summary>
<br/>
<blockquote>Proyek yang membahas pembuatan halaman error kustom di Next.js, khususnya <strong>Custom 404 Page</strong>, menggunakan CSS Modules dan Sass untuk styling.</blockquote>

**🗺️ Struktur Halaman**

```
📂 next-routing/src/pages
 ├── 📄 index.tsx              →  /                    Halaman utama
 ├── 📄 404.tsx                →  /404  (any not found) Custom 404 page
 ├── 📄 about.tsx              →  /about               Halaman about
 ├── 📂 blog
 │   └── 📄 [slug].tsx         →  /blog/:slug          Dynamic route
 ├── 📂 produk
 │   ├── 📄 index.tsx          →  /produk              Daftar produk
 │   └── 📄 [id].tsx           →  /produk/:id          Detail produk
 ├── 📂 category
 │   └── 📄 [...slug].js       →  /category/*          Catch-all route
 ├── 📂 shop
 │   └── 📄 [[...slug]].js     →  /shop  /shop/*       Optional catch-all
 ├── 📂 auth
 │   ├── 📄 login.tsx          →  /auth/login          Halaman login
 │   └── 📄 register.tsx       →  /auth/register       Halaman register
 ├── 📂 views                  →  (View components layer)
 │   ├── 📂 auth               →  Login & Register view
 │   └── 📂 produk             →  Produk view components
 ├── 📂 profile
 │   ├── 📄 index.tsx          →  /profile             Halaman profil
 │   └── 📄 edit.tsx           →  /profile/edit        Edit profil
 ├── 📂 user
 │   ├── 📄 index.tsx          →  /user                Halaman user
 │   └── 📂 password
 │       └── 📄 index.tsx      →  /user/password       Ubah password
 ├── 📂 setting
 │   └── 📄 app.tsx            →  /setting/app         Pengaturan
 └── 📂 api
     └── 📄 hello.ts           →  /api/hello           API route
```

**🎨 Styling yang Digunakan**

| File | Metode | Keterangan |
|------|:------:|-----------|
| `globals.css` | Global CSS | Style global aplikasi |
| `Home.module.css` | CSS Modules | Scoped style halaman utama |
| `404.module.css` | CSS Modules | Scoped style halaman 404 |
| `colors.scss` | Sass Variables | Variabel warna global |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-05/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000](http://localhost:3000)** di browser.  
> 🔴 Coba akses URL sembarang (misal `/halaman-tidak-ada`) untuk melihat Custom 404.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 06 &nbsp;—&nbsp; Firebase &amp; Fetch API</b>
</summary>
<br/>
<blockquote>Proyek yang membahas integrasi <strong>Firebase Firestore</strong> sebagai database dan penggunaan <strong>Fetch API</strong> untuk mengambil data melalui API route Next.js.</blockquote>

**🗺️ Struktur Halaman**

```
📂 next-routing/src/pages
 ├── 📄 index.tsx              →  /                    Halaman utama
 ├── 📄 404.tsx                →  (any not found)      Custom 404 page
 ├── 📂 produk
 │   ├── 📄 index.tsx          →  /produk              Daftar produk (fetch dari Firestore)
 │   └── 📄 [id].tsx           →  /produk/:id          Detail produk
 ├── 📂 auth
 │   ├── 📄 login.tsx          →  /auth/login          Halaman login
 │   └── 📄 register.tsx       →  /auth/register       Halaman register
 ├── 📂 api
 │   ├── 📄 hello.ts           →  /api/hello           API route contoh
 │   └── 📄 produk.ts          →  /api/produk          API route Firestore produk
 ├── 📂 utlis/db
 │   ├── 📄 firebase.ts        →  Inisialisasi Firebase App
 │   └── 📄 servicefirebase.ts →  Fungsi query Firestore
 ├── 📂 views
 │   ├── 📂 auth               →  Login & Register view
 │   └── 📂 produk             →  Produk view components
 └── ... (route lain sama dengan Praktikum-05)
```

**🔄 Alur Data**

```
Firebase Firestore
       ↓  retrieveProducts()
  servicefirebase.ts
       ↓  handler()
  /api/produk  (Next.js API Route)
       ↓  fetch("/api/produk")
  /produk  (Halaman)
```

**⚙️ Konfigurasi Firebase**

Buat file `.env.local` di root proyek:
```env
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-06/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000](http://localhost:3000)** di browser.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 07 &nbsp;—&nbsp; SWR Data Fetching</b>
</summary>
<br/>
<blockquote>Proyek yang membahas penggunaan library <strong>SWR</strong> (stale-while-revalidate) dari Vercel untuk data fetching yang efisien, menggantikan <code>useEffect</code> + <code>fetch</code> dengan pendekatan berbasis hook.</blockquote>

**🗺️ Struktur Halaman**

```
📂 next-routing/src/pages
 ├── 📄 index.tsx              →  /                    Halaman utama
 ├── 📄 404.tsx                →  (any not found)      Custom 404 page
 ├── 📂 produk
 │   ├── 📄 index.tsx          →  /produk              Daftar produk (via SWR)
 │   └── 📄 [id].tsx           →  /produk/:id          Detail produk
 ├── 📂 auth
 │   ├── 📄 login.tsx          →  /auth/login          Halaman login
 │   └── 📄 register.tsx       →  /auth/register       Halaman register
 ├── 📂 api
 │   ├── 📄 hello.ts           →  /api/hello           API route contoh
 │   └── 📄 produk.ts          →  /api/produk          API route Firestore produk
 ├── 📂 utils/db
 │   ├── 📄 firebase.ts        →  Inisialisasi Firebase App
 │   └── 📄 servicefirebase.ts →  Fungsi query Firestore
 ├── 📂 utils/swr
 │   └── 📄 fetcher.ts         →  Fungsi fetcher untuk SWR
 ├── 📂 views
 │   ├── 📂 auth               →  Login & Register view
 │   └── 📂 produk             →  Produk view components
 └── ... (route lain sama dengan Praktikum-06)
```

**🔄 Perbandingan: `fetch` vs `SWR`**

| | Praktikum 06 (`fetch`) | Praktikum 07 (`SWR`) |
|---|---|---|
| Kode | `useEffect` + `useState` | `useSWR(url, fetcher)` |
| Loading state | Manual `useState` | Otomatis `isLoading` |
| Error handling | Manual `catch` | Otomatis `error` |
| Re-fetch | Manual | Otomatis saat fokus/reconnect |
| Cache | Tidak ada | Built-in (stale-while-revalidate) |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-07/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000](http://localhost:3000)** di browser.

<br/>
</details>

<br/>

---

## 🛠️ Tech Stack

<div align="center">

|  | Teknologi | Versi | Peran |
|:---:|-----------|:-----:|-------|
| ⬛ | [Next.js](https://nextjs.org/) | `16` | React Framework — SSR, Routing, API |
| 🔵 | [React](https://react.dev/) | `19` | UI Component Library |
| 🔷 | [TypeScript](https://www.typescriptlang.org/) | `5` | Static Type Checking |
| 🟡 | [ESLint](https://eslint.org/) | `9` | Code Quality & Linting |
| 🩵 | [Tailwind CSS](https://tailwindcss.com/) | `3` | Utility-first CSS Framework |
| 🟣 | [Sass](https://sass-lang.com/) | `1` | CSS Preprocessor |
| 🧡 | [Firebase](https://firebase.google.com/) | `12` | Backend-as-a-Service (Firestore) |
| ⚪ | [SWR](https://swr.vercel.app/) | `2` | Data Fetching & Caching Hook |

</div>

<br/>

---

## ⚡ Quick Start

```bash
# Clone repository
git clone <url-repo>

# Masuk ke salah satu proyek
cd Praktikum-03/next-routing

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

**Perintah yang tersedia:**

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Jalankan development server di `localhost:3000` |
| `npm run build` | Build proyek untuk production |
| `npm start` | Jalankan production server |
| `npm run lint` | Cek kualitas kode dengan ESLint |

<br/>

---

## ⚙️ Prasyarat

Pastikan sudah terinstall sebelum menjalankan proyek:

- **[Node.js](https://nodejs.org/)** `v18` atau lebih baru
- **npm** &nbsp;/&nbsp; **yarn** &nbsp;/&nbsp; **pnpm**

<br/>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=100&section=footer" width="100%"/>

*📝 Dibuat untuk keperluan akademik — Mata Kuliah Pemrograman Berbasis Framework*

</div>
