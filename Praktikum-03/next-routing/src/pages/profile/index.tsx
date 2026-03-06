import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile Mahasiswa</h1>
      <p>Nama: Chiko Abilla Basya</p>
      <p>NIM: 2341720005</p>
      <p>Program Studi: D4 Teknik Informatika</p>
      <p>Angkatan: 2023</p>
      <br />
      <Link href="/profile/edit">Edit Profile</Link>
    </div>
  );
}
