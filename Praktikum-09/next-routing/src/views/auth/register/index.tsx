import Link from 'next/link';
import styles from './register.module.css';

const TampilanRegister = () => {
    return (
        <div className={styles.register}>
            <h1>Halaman Register</h1>
            <div className={styles.form}>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Konfirmasi Password" />
                <button type="submit">Register</button>
            </div>
            <Link href="/auth/login">Sudah punya akun? Login</Link>
        </div>
    );
};

export default TampilanRegister;
