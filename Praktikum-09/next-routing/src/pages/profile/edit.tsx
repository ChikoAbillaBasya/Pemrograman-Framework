import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function EditProfilePage() {
  return (
    <div>
      <h1>Edit Profile</h1>
      <form>
        <div>
          <label>Nama: </label>
          <input type="text" defaultValue="Chiko Abilla Basya" />
        </div>
        <div>
          <label>NIM: </label>
          <input type="text" defaultValue="2341720005" />
        </div>
        <div>
          <label>Program Studi: </label>
          <input type="text" defaultValue="D4 Teknik Informatika" />
        </div>
        <div>
          <label>Angkatan: </label>
          <input type="text" defaultValue="2023" />
        </div>
        <br />
        <button type="submit">Simpan</button>
      </form>
      <br />
      <Link href="/profile">Kembali ke Profile</Link>
    </div>
  );
}
