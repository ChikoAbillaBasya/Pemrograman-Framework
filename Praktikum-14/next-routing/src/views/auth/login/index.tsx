import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
// import styles from './login.module.css';
import styles from './login.module.scss';

const TampilanLogin = () => {
    const { push } = useRouter();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                fullname,
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Login gagal. Silakan cek email dan password.");
            } else {
                push("/profile");
            }
        } catch (err) {
            setError("Terjadi kesalahan saat login.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.login}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="fullname">Full Name:</label>
                    <input
                        type="text"
                        id="fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                        placeholder="Masukkan nama lengkap"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Masukkan email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Masukkan password"
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
            <h1 style={{ color: "red", border: "1px solid red", borderRadius: "5px", padding: "5px" }}>
                Belum punya akun
            </h1>
            <Link href="/auth/register">ke Halaman Register</Link>
        </div>
    );
};

export default TampilanLogin;
