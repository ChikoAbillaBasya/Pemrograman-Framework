import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <h1>Profil Mahasiswa</h1> <br />
      <p>Nama Mahasiswa : Chiko Abilla Basya</p>
      <p>NIM : 2341720005</p>
      <p>Program Studi : D4 Teknik Informatika</p>
      <hr />
      <Link href="/">← Kembali ke Halaman Utama</Link>
    </div>
  );
}
