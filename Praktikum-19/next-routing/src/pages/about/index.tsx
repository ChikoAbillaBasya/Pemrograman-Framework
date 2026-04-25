import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <h1 data-testid="title">Ini Halaman About</h1> <br />
    </div>
  );
}
