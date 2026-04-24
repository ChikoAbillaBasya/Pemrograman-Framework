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
![Praktikum](https://img.shields.io/badge/Praktikum-17%20Selesai-brightgreen?style=flat-square)
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
| `08` | [📁 next-routing](./Praktikum-08/next-routing/) | SSR & Skeleton UI | getServerSideProps, TypeScript Types, Skeleton | ✅ |
| `09` | [📁 next-routing](./Praktikum-09/next-routing/) | SSG & Project Structure | getStaticProps, Project Organization, Path Aliases | ✅ |
| `10` | [📁 next-routing](./Praktikum-10/next-routing/) | Dynamic API Route & Product Detail | Catch-all API, Detail Produk Dinamis, SSR | ✅ |
| `11` | [📁 next-routing](./Praktikum-11/next-routing/) | ISR & Revalidation | getStaticProps, Revalidate API, On-demand Revalidation | ✅ |
| `12` | [📁 next-routing](./Praktikum-12/next-routing/) | Middleware & Route Protection | Next.js Middleware, Matcher, Redirect Auth | ✅ |
| `13` | [📁 next-routing](./Praktikum-13/next-routing/) | NextAuth Integration | NextAuth.js, JWT Token, withAuth Middleware | ✅ |
| `14` | [📁 next-routing](./Praktikum-14/next-routing/) | Auth Registration & Password Hashing | API Register, Firebase Users, bcrypt Hashing | ✅ |
| `15` | [📁 next-routing](./Praktikum-15/next-routing/) | Role-Based Access Control (RBAC) | NextAuth JWT Role, Admin Guard, Protected Routes | ✅ |
| `16` | [📁 next-routing](./Praktikum-16/next-routing/) | OAuth Login & Multi-Role Protection | Google/GitHub OAuth, JWT Role Mapping, Client + Middleware Guard | ✅ |
| `17` | [📁 next-routing](./Praktikum-17/next-routing/) | AppShell Layout & Analytics Integration | Global Layout, Session Navbar, Next Script, Next Font | ✅ |

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

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 08 &nbsp;—&nbsp; SSR &amp; Skeleton UI</b>
</summary>
<br/>
<blockquote>Proyek yang membahas <strong>Server-Side Rendering (SSR)</strong> menggunakan <code>getServerSideProps</code>, TypeScript type definitions, dan implementasi <strong>Skeleton Loading UI</strong> sebagai placeholder saat data sedang dimuat.</blockquote>

**🗺️ Struktur Halaman**

```
📂 next-routing/src/pages
 ├── 📄 index.tsx              →  /                    Halaman utama
 ├── 📄 404.tsx                →  (any not found)      Custom 404 page
 ├── 📂 produk
 │   ├── 📄 index.tsx          →  /produk              Daftar produk (SWR + Skeleton)
 │   ├── 📄 server.tsx         →  /produk/server       Daftar produk (SSR)
 │   ├── 📄 [id].tsx           →  /produk/:id          Detail produk
 │   └── 📄 produk.module.scss →  Sass Modules styling
 ├── 📂 auth
 │   ├── 📄 login.tsx          →  /auth/login          Halaman login
 │   └── 📄 register.tsx       →  /auth/register       Halaman register
 ├── 📂 api
 │   ├── 📄 hello.ts           →  /api/hello           API route contoh
 │   └── 📄 produk.ts          →  /api/produk          API route Firestore produk
 ├── 📂 types
 │   └── 📄 Product.type.ts    →  TypeScript type ProductType
 ├── 📂 utils/db
 │   ├── 📄 firebase.ts        →  Inisialisasi Firebase App
 │   └── 📄 servicefirebase.ts →  Fungsi query Firestore
 ├── 📂 utils/swr
 │   └── 📄 fetcher.ts         →  Fungsi fetcher untuk SWR
 ├── 📂 views/produk
 │   └── 📄 index.tsx          →  Komponen produk + Skeleton UI
 └── ... (route lain sama dengan Praktikum-07)
```

**🔄 Perbandingan: CSR (SWR) vs SSR (`getServerSideProps`)**

| | `/produk` (SWR) | `/produk/server` (SSR) |
|---|---|---|
| Render | Client-side | Server-side |
| Data fetching | `useSWR` di browser | `getServerSideProps` di server |
| Loading state | Skeleton UI | Tidak ada (data sudah siap) |
| SEO | Kurang optimal | Optimal |
| Kecepatan awal | Lebih lambat | Lebih cepat |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-08/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000/produk](http://localhost:3000/produk)** — CSR dengan Skeleton UI  
> 🌐 Buka **[http://localhost:3000/produk/server](http://localhost:3000/produk/server)** — SSR dengan `getServerSideProps`

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 09 &nbsp;—&nbsp; SSG &amp; Project Structure</b>
</summary>
<br/>
<blockquote>Proyek yang membahas <strong>Static Site Generation (SSG)</strong> dengan <code>getStaticProps</code>, reorganisasi struktur proyek yang lebih baik, dan penggunaan path aliases untuk absolute imports.</blockquote>

**🗺️ Struktur Proyek (Diorganisir dengan Baik)**

```
📂 next-routing/src
 ├── 📂 pages
 │   ├── 📄 index.tsx           →  /
 │   ├── 📂 produk
 │   │   ├── 📄 index.tsx       →  /produk        (CSR + SWR)
 │   │   ├── 📄 server.tsx      →  /produk/server (SSR)
 │   │   ├── 📄 static.tsx      →  /produk/static (SSG)
 │   │   ┙── 📄 [id].tsx        →  /produk/:id
 │   ├── 📂 api
 │   │   ├── 📄 hello.ts        →  /api/hello
 │   │   └── 📄 produk.ts       →  /api/produk
 │   ├── 📄 _app.tsx
 │   └── 📄 _document.tsx
 ├── 📂 components
 │   └── 📂 layouts
 │       ├── 📄 Appshell/         →  Layout wrapper
 │       └── 📄 navbar/           →  Navigation component
 ├── 📂 views
 │   ├── 📂 auth              →  Auth view components
 │   └── 📂 produk            →  Produk view components
 ├── 📂 utils
 │   ├── 📂 db
 │   │   ├── 📄 firebase.ts
 │   │   └── 📄 servicefirebase.ts
 │   └── 📂 swr
 │       └── 📄 fetcher.ts
 ├── 📂 types
 │   └── 📄 Product.type.ts
 ├── 📂 styles
 │   ├── 📄 globals.css
 │   └── 📄 Home.module.css
 └── tsconfig.json          →  Config dengan path aliases (@/)
```

**🔄 Perbandingan: CSR vs SSR vs SSG**

| Aspek | `/produk` (CSR) | `/produk/server` (SSR) | `/produk/static` (SSG) |
|---|---|---|---|
| Rendering | Client-side | Server-side | Build time |
| Data fresh | Setiap kali akses | Setiap kali akses | Sekali saat build |
| Loading state | Skeleton UI | Tidak ada | Tidak ada |
| SEO | Kurang | Optimal | Optimal |
| Server cost | Rendah | Tinggi | Rendah |
| Kecepatan | Lambat (awal) | Cepat | Tercepat |

**🛠️ Fitur Utama**

1. **Project Structure Organization**
  - `types/` — TypeScript type definitions
  - `utils/` — Helper functions & Firebase services
  - `views/` — View components
  - `components/` — UI components (layouts, navbar)

2. **Path Aliases**
  ```tsx
  // Sebelum: relative paths
  import Navbar from "../components/layouts/navbar";
   
  // Sesudah: absolute paths dengan @/
  import Navbar from "@/components/layouts/navbar";
  ```

3. **AppShell Wrapper**
  - Komponen wrapper untuk konsistensi layout
  - Navbar & layout otomatis di semua halaman

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-09/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000/produk](http://localhost:3000/produk)** — CSR dengan SWR  
> 🌐 Buka **[http://localhost:3000/produk/server](http://localhost:3000/produk/server)** — SSR dengan `getServerSideProps`  
> 🌐 Buka **[http://localhost:3000/produk/static](http://localhost:3000/produk/static)** — SSG dengan `getStaticProps`

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 10 &nbsp;—&nbsp; Dynamic API Route &amp; Product Detail</b>
</summary>
<br/>
<blockquote>Proyek yang membahas penggunaan <strong>optional catch-all API route</strong> untuk melayani endpoint list dan detail produk dalam satu handler, serta implementasi halaman detail produk dinamis.</blockquote>

**🗺️ Struktur Proyek Utama**

```
📂 next-routing/src
 ├── 📂 pages
 │   ├── 📂 api
 │   │   ├── 📄 hello.ts              → /api/hello
 │   │   └── 📄 [[...produk]].ts      → /api/produk dan /api/produk/:id
 │   ├── 📂 produk
 │   │   ├── 📄 index.tsx             → /produk (CSR + SWR)
 │   │   ├── 📄 server.tsx            → /produk/server (SSR)
 │   │   ├── 📄 static.tsx            → /produk/static
 │   │   └── 📄 [produk].tsx          → /produk/:produk (detail dinamis)
 │   ├── 📄 404.tsx
 │   ├── 📄 _app.tsx
 │   └── 📄 _document.tsx
 ├── 📂 views
 │   ├── 📂 produk                    → Komponen list produk
 │   └── 📄 DetailProduct.tsx         → Komponen detail produk
 ├── 📂 utils
 │   ├── 📂 db
 │   │   ├── 📄 firebase.ts
 │   │   └── 📄 servicefirebase.ts    → retrieveProducts & retrieveDataByID
 │   └── 📂 swr
 │       └── 📄 fetcher.ts
 └── 📂 types
     └── 📄 Product.type.ts
```

**🔄 Alur Endpoint API `[[...produk]].ts`**

| Request | Hasil |
|---|---|
| `GET /api/produk` | Mengembalikan semua data produk |
| `GET /api/produk/{id}` | Mengembalikan satu produk berdasarkan ID |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-10/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000/produk](http://localhost:3000/produk)** untuk list produk.  
> 🌐 Klik salah satu item produk untuk menuju halaman detail dinamis `/produk/:id`.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 11 &nbsp;—&nbsp; ISR &amp; Revalidation</b>
</summary>
<br/>
<blockquote>Proyek yang membahas <strong>Incremental Static Regeneration (ISR)</strong> melalui <code>revalidate</code> di <code>getStaticProps</code> dan <strong>on-demand revalidation</strong> melalui API route khusus.</blockquote>

**🗺️ Struktur Halaman**

```
📂 next-routing/src
 ├── 📂 pages
 │   ├── 📂 api
 │   │   ├── 📄 hello.ts              → /api/hello
 │   │   ├── 📄 [[...produk]].ts      → /api/produk dan /api/produk/:id
 │   │   └── 📄 revalidate.ts         → /api/revalidate (on-demand revalidation)
 │   ├── 📂 produk
 │   │   ├── 📄 index.tsx             → /produk (CSR + SWR)
 │   │   ├── 📄 server.tsx            → /produk/server (SSR)
 │   │   ├── 📄 static.tsx            → /produk/static (ISR)
 │   │   └── 📄 [produk].tsx          → /produk/:produk (detail dinamis + ISR)
 │   ├── 📄 404.tsx
 │   ├── 📄 _app.tsx
 │   └── 📄 _document.tsx
 ├── 📂 views
 │   ├── 📂 DetailProduct             → Komponen detail produk
 │   └── 📂 produk                    → Komponen list produk
 ├── 📂 utils
 │   ├── 📂 db
 │   │   ├── 📄 firebase.ts
 │   │   └── 📄 servicefirebase.ts    → retrieveProducts & retrieveDataByID
 │   └── 📂 swr
 │       └── 📄 fetcher.ts
 └── 📂 types
     └── 📄 Product.type.ts
```

**🔄 Alur Revalidation**

| Fitur | Keterangan |
|---|---|
| `getStaticProps` | Mengambil data saat build dan dapat di-refresh secara berkala |
| `revalidate: 10` | Halaman static diperbarui setiap 10 detik |
| `/api/revalidate?data=produk&token=...` | Endpoint untuk memicu revalidation manual |
| `res.revalidate("/produk/static")` | Melakukan rebuild halaman static secara on-demand |

**⚙️ Konfigurasi Environment**

Buat file `.env.local` di root proyek:
```env
REVALIDATE_TOKEN=...
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-11/next-routing
npm install
npm run dev
```

> 🌐 Buka **[http://localhost:3000/produk/static](http://localhost:3000/produk/static)** untuk halaman ISR.  
> 🔁 Coba endpoint revalidation: `/api/revalidate?data=produk&token=REVALIDATE_TOKEN`

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 12 &nbsp;—&nbsp; Middleware &amp; Route Protection</b>
</summary>
<br/>
<blockquote>Proyek yang membahas <strong>Next.js Middleware</strong> untuk proteksi route dengan redirect ke halaman login ketika user belum terautentikasi.</blockquote>

**🗺️ Struktur Halaman Utama**

```
📂 next-routing/src
 ├── 📄 middleware.ts          → Proteksi route dengan redirect
 ├── 📂 pages
 │   ├── 📂 auth
 │   │   ├── 📄 login.tsx      → /auth/login
 │   │   └── 📄 register.tsx   → /auth/register
 │   ├── 📂 produk
 │   │   ├── 📄 index.tsx      → /produk (route terlindungi)
 │   │   ├── 📄 static.tsx     → /produk/static (ISR)
 │   │   ├── 📄 server.tsx     → /produk/server (SSR)
 │   │   └── 📄 [produk].tsx   → /produk/:produk
 │   ├── 📂 api
 │   │   ├── 📄 [[...produk]].ts
 │   │   └── 📄 revalidate.ts
 │   └── ...
 └── 📂 utils / views / types
```

**🔐 Alur Middleware**

| Bagian | Keterangan |
|---|---|
| `middleware.ts` | Menjalankan pengecekan auth sebelum request masuk ke halaman |
| `isLogin = false` | Simulasi kondisi user belum login |
| `NextResponse.redirect(...)` | Redirect ke `/auth/login` jika belum login |
| `matcher: ["/produk", "/about"]` | Middleware hanya aktif pada route tertentu |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-12/next-routing
npm install
npm run dev
```

> 🌐 Akses **[http://localhost:3000/produk](http://localhost:3000/produk)** atau **[http://localhost:3000/about](http://localhost:3000/about)** untuk melihat redirect middleware ke login.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 13 &nbsp;—&nbsp; NextAuth Integration</b>
</summary>
<br/>
<blockquote>Proyek yang mengintegrasikan <strong>NextAuth.js</strong> untuk sistem autentikasi yang lebih robust. Menggunakan JWT token verification melalui middleware HOF dan <code>getToken</code> dari nextAuth.</blockquote>

**🗺️ Struktur Aplikasi**

```
📂 next-routing/src
 ├── 📄 middleware.ts          → Middleware utama dengan matcher
 ├── 📂 middleware
 │   └── 📄 withAuth.ts        → Middleware HOF dengan JWT verification
 ├── 📂 pages
 │   ├── 📂 auth
 │   │   ├── 📄 login.tsx      → /auth/login
 │   │   └── 📄 register.tsx   → /auth/register
 │   ├── 📂 produk
 │   │   ├── 📄 index.tsx      → /produk (route terlindungi)
 │   │   ├── 📄 static.tsx     → /produk/static (ISR)
 │   │   ├── 📄 server.tsx     → /produk/server (SSR)
 │   │   └── 📄 [produk].tsx   → /produk/:produk
 │   ├── 📂 profile
 │   ├── 📂 api
 │   │   ├── 📄 [[...produk]].ts
 │   │   └── 📄 revalidate.ts
 │   └── ...
 └── 📂 utils / views / types / components
```

**🔐 NextAuth Architecture**

| Komponen | Fungsi |
|---|---|
| `withAuth(middleware, requireAuth)` | Higher-Order Function untuk wrap middleware dengan JWT verification |
| `getToken()` | Mengambil JWT token dari request (via NextAuth.js) |
| `NEXTAUTH_SECRET` | Environment variable untuk JWT signing |
| `requireAuth: string[]` | Array berisi pathname yang memerlukan autentikasi |
| `NextResponse.redirect(loginUrl)` | Redirect ke login jika token tidak valid/tidak ada |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-13/next-routing
npm install
npm run dev
```

> 🔑 Pastikan `NEXTAUTH_SECRET` dikonfigurasi di `.env.local` untuk JWT verification berfungsi dengan baik.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 14 &nbsp;—&nbsp; Auth Registration &amp; Password Hashing</b>
</summary>
<br/>
<blockquote>Proyek yang menambahkan alur registrasi user menggunakan API route, penyimpanan data user ke Firebase Firestore, serta pengamanan password dengan <strong>bcrypt hashing</strong>.</blockquote>

**🗺️ Struktur Aplikasi**

```
📂 next-routing/src
 ├── 📂 pages
 │   ├── 📂 auth
 │   │   ├── 📄 login.tsx            → /auth/login
 │   │   └── 📄 register.tsx         → /auth/register
 │   └── 📂 api
 │       ├── 📄 register.ts          → Endpoint registrasi user
 │       └── 📂 auth
 │           └── 📄 [...nextauth].ts → Konfigurasi NextAuth credentials
 ├── 📂 utils
 │   └── 📂 db
 │       ├── 📄 firebase.ts          → Inisialisasi Firebase app
 │       └── 📄 servicefirebase.ts   → Query user + bcrypt hash + addDoc
 ├── 📂 middleware
 │   └── 📄 withAuth.ts              → Validasi token JWT untuk route terlindungi
 └── 📄 middleware.ts                → Matcher route proteksi
```

**🔐 Alur Registrasi & Keamanan Password**

| Komponen | Fungsi |
|---|---|
| `pages/api/register.ts` | Validasi input email/password dan memanggil proses `signUp` |
| `signUp()` | Cek email duplikat di koleksi `users` sebelum menyimpan data |
| `bcrypt.hash(password, 10)` | Mengubah password plaintext menjadi hash sebelum disimpan |
| `addDoc(collection(db, "users"), userData)` | Menyimpan user baru ke Firestore |
| `pages/api/auth/[...nextauth].ts` | Menyediakan auth flow berbasis credentials dengan session JWT |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-14/next-routing
npm install
npm run dev
```

> 🔑 Konfigurasi `.env.local` untuk `NEXTAUTH_SECRET` dan kredensial Firebase sebelum menjalankan project.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 15 &nbsp;—&nbsp; Role-Based Access Control (RBAC)</b>
</summary>
<br/>
<blockquote>Proyek yang menambahkan <strong>otorisasi berbasis role</strong> pada autentikasi NextAuth. User dibedakan berdasarkan role (mis. admin/user), dan route tertentu dibatasi menggunakan middleware guard.</blockquote>

**🗺️ Struktur Aplikasi**

```
📂 next-routing/src
 ├── 📂 pages
 │   ├── 📂 admin
 │   │   └── 📄 index.tsx              → /admin (khusus admin)
 │   ├── 📂 auth
 │   │   └── 📄 login.tsx              → /auth/login
 │   └── 📂 api
 │       └── 📂 auth
 │           └── 📄 [...nextauth].ts   → Login credentials + inject role ke JWT/session
 ├── 📂 middleware
 │   └── 📄 withAuth.ts                → Guard auth + guard role admin
 ├── 📄 middleware.ts                  → Daftar matcher route yang diproteksi
 └── 📂 utils/db
     └── 📄 servicefirebase.ts         → Ambil user by email + validasi password hash
```

**🛡️ Alur Otorisasi Role**

| Komponen | Fungsi |
|---|---|
| `signIn(email)` | Mengambil data user dari Firestore termasuk `role` |
| `bcrypt.compare(...)` | Validasi password plaintext terhadap hash di database |
| `jwt` callback | Menyimpan `email`, `fullname`, dan `role` ke token |
| `session` callback | Menurunkan data role ke session client |
| `withAuth.ts` | Redirect ke login jika belum auth, dan blok akses `/admin` bila role bukan admin |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-15/next-routing
npm install
npm run dev
```

> 🔑 Pastikan data user di Firestore memiliki field `role` agar pembatasan akses admin berjalan sesuai aturan.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 16 &nbsp;—&nbsp; OAuth Login &amp; Multi-Role Protection</b>
</summary>
<br/>
<blockquote>Proyek yang memperluas autentikasi NextAuth dengan <strong>OAuth Provider</strong> (Google dan GitHub), sinkronisasi user OAuth ke Firestore, serta proteksi halaman berdasarkan role lewat middleware server dan guard di sisi client.</blockquote>

**🗺️ Struktur Aplikasi**

```
📂 next-routing/src
 ├── 📂 pages
 │   ├── 📂 auth
 │   │   └── 📄 login.tsx               → /auth/login
 │   ├── 📂 admin
 │   │   └── 📄 index.tsx               → /admin (khusus admin)
 │   ├── 📂 editor
 │   │   └── 📄 index.tsx               → /editor (editor/admin)
 │   └── 📂 api/auth
 │       └── 📄 [...nextauth].ts        → Credentials + Google + GitHub provider
 ├── 📂 middleware
 │   └── 📄 withAuth.ts                 → Redirect login + cek role untuk route sensitif
 ├── 📄 middleware.ts                   → Matcher route: /produk, /profile, /admin, /editor, /about
 └── 📂 utils
     ├── 📄 withAuth.ts                 → HOC guard role di client-side page
     └── 📂 db/servicefirebase.ts       → signIn, signUp, signInWithOAuth
```

**🔐 Alur OAuth & Otorisasi**

| Komponen | Fungsi |
|---|---|
| `GoogleProvider` & `GitHubProvider` | Login menggunakan akun Google/GitHub |
| `signInWithOAuth()` | Cek user OAuth di Firestore, update data jika ada, atau buat user baru |
| `jwt` callback | Menyimpan informasi user (`email`, `fullname`, `role`, `type`, `image`) ke token |
| `session` callback | Menyediakan data role/user ke sisi client melalui session |
| `middleware/withAuth.ts` + `utils/withAuth.ts` | Kombinasi guard server-side dan client-side untuk pembatasan akses berbasis role |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-16/next-routing
npm install
npm run dev
```

> 🔑 Pastikan `.env.local` memuat `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, dan `GITHUB_CLIENT_SECRET`.

<br/>
</details>

---

<details>
<summary>
  <b>&nbsp;📦 Praktikum 17 &nbsp;—&nbsp; AppShell Layout &amp; Analytics Integration</b>
</summary>
<br/>
<blockquote>Proyek yang memfokuskan pada <strong>arsitektur layout global</strong> menggunakan AppShell, integrasi script pihak ketiga (Google Analytics) lewat <code>next/script</code>, serta navbar dinamis berbasis status session NextAuth.</blockquote>

**🗺️ Struktur Aplikasi**

```
📂 next-routing/src
 ├── 📂 pages
 │   ├── 📄 _app.tsx                      → Root app: SessionProvider + AppShell + Script GA
 │   ├── 📂 auth
 │   │   ├── 📄 login.tsx                 → /auth/login
 │   │   └── 📄 register.tsx              → /auth/register
 │   ├── 📂 api/auth
 │   │   └── 📄 [...nextauth].ts          → Credentials + OAuth provider
 │   ├── 📂 admin
 │   │   └── 📄 index.tsx
 │   └── 📂 editor
 │       └── 📄 index.tsx
 ├── 📂 components/layouts
 │   ├── 📂 Appshell/index.tsx            → Wrapper layout + hide/show navbar per route
 │   └── 📂 navbar/index.tsx              → UI navbar + state login/signout + avatar
 ├── 📂 middleware
 │   └── 📄 withAuth.ts                   → Proteksi route berbasis auth/role
 └── 📂 utils
     └── 📄 withAuth.ts                   → Higher-order guard di sisi client
```

**🧩 Konsep Utama Praktikum**

| Komponen | Fungsi |
|---|---|
| `_app.tsx` | Menyatukan provider global (`SessionProvider`) dan layout (`AppShell`) |
| `next/script` | Inject script Google Analytics dengan strategi `afterInteractive` |
| `next/font/google` | Menerapkan font Roboto secara optimal tanpa import manual CSS font |
| `Appshell` | Menentukan route yang tidak menampilkan navbar (login/register/404) |
| `Navbar` | Menampilkan aksi berbeda berdasarkan session: sign-in untuk guest, profil + sign-out untuk user login |

**▶️ Menjalankan Proyek**

```bash
cd Praktikum-17/next-routing
npm install
npm run dev
```

> 🔑 Siapkan variabel auth/OAuth di `.env.local` dan sesuaikan `G-XXXXXXXXXX` di script analytics dengan Measurement ID milikmu.

<br/>
</details>

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
| 🟢 | [NextAuth.js](https://next-auth.js.org/) | `4` | Authentication, JWT Session, Credentials Provider |
| 🟤 | [bcrypt](https://www.npmjs.com/package/bcrypt) | `6` | Password Hashing untuk keamanan data user |

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
