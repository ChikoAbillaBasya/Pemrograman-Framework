import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { withAuth } from "@/utils/withAuth";

const HalamanEditor = () => {
  return (
    <div>
      <div className="editor">
        <h1>Halaman Editor</h1>
        <p>
          Selamat datang di halaman editor! Anda memiliki akses untuk mengeola
          dan mengedit konten aplikasi. Pastikan untuk menggunakan hak akses
          anda dengan bijak.
        </p>
      </div>
    </div>
  );
};

export default withAuth(HalamanEditor, { allowedRoles: ["editor", "admin"] });
