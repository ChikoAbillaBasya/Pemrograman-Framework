import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HalamanProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/auth/login");
  };

  return (
    <div>
      <h1>Halaman Profile</h1>
      <h2>Selamat Datang {session?.user?.fullname}</h2>
      <p>Email: {session?.user?.email}</p>
      <button onClick={handleLogout} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
};

export default HalamanProfile;
