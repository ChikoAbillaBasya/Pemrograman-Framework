import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setIsLoading(true);
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const fullname = formData.get("Fullname") as string;
    const password = formData.get("Password") as string;
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullname, password }),
    });
    if (response.status === 200) {
      form.reset();
      setIsLoading(false);
      setError("");
      push("/auth/login");
    } else {
      setIsLoading(false);
      const errorData = await response.json();
      setError(errorData.name || "An error occurred");
    }
  };

  return (
    <div className={styles.register}>
      {error && <p className={styles.register__error}>{error}</p>}
      <h1 className={styles.register_title}>Halaman Register</h1>
      <div className={styles.register_form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register_form_item}>
            <label htmlFor="email" className={styles.register_form_item_label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={styles.register_form_item_input}
            />
          </div>

          <div className={styles.register_form_item}>
            <label
              htmlFor="Fullname"
              className={styles.register_form_item_label}
            >
              Fullname
            </label>
            <input
              type="text"
              id="Fullname"
              name="Fullname"
              placeholder="Fullname"
              className={styles.register_form_item_input}
            />
          </div>

          <div className={styles.register_form_item}>
            <label
              htmlFor="Password"
              className={styles.register_form_item_label}
            >
              Password
            </label>
            <input 
              type="password"
              id="Password"
              name="Password"
              placeholder="Password (min 6 characters)"
              className={styles.register_form_item_input}
            />
          </div>

          <button type="submit" className={styles.register_form_item_button} disabled={isLoading}>
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
        <p className={styles.register_form_item_text}>
          Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;
