import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
// import styles from './login.module.css';
import styles from './login.module.scss';

const TampilanLogin = () => {
    const { push } = useRouter();
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
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Login gagal. Silakan cek email dan password.");
            } else {
                push("/");
            }
        } catch (err) {
            setError("Terjadi kesalahan saat login.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={styles.login}>
                <h1 className={styles.login_title}>Halaman Login</h1>
                <form onSubmit={handleLogin} className={styles.login_form}>
                    <div className={styles.login_form_item}>
                        <label htmlFor="email" className={styles.login_form_item_label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                            className={styles.login_form_item_input}
                        />
                    </div>

                    <div className={styles.login_form_item}>
                        <label htmlFor="password" className={styles.login_form_item_label}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                            className={styles.login_form_item_input}
                        />
                    </div>

                    {error && <p className={styles.login__error}>{error}</p>}

                    <button type="submit" disabled={loading} className={styles.login_form_item_button}>
                        {loading ? "Loading..." : "Login"}
                    </button>

                    <p className={styles.login_form_item_text}>
                        Belum punya akun? <Link href="/auth/register">Ke Halaman Register</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default TampilanLogin;
