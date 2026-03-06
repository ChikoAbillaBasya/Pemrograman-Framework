import { useRouter } from "next/router";
import { useEffect } from "react";

const Produk = () => {
    const { push } = useRouter();

    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLogin");
        push("/auth/login");
    };

    return (
        <div>
            <h1>Produk User Page</h1>
            <p>Selamat datang! Anda sudah login.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Produk;
