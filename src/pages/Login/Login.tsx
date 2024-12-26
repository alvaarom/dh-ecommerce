import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData.email.trim() === "" || userData.password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("userLogin", JSON.stringify(userData.email));
    navigate("/dashboard");
  };

  return (
    <div className={styles.containerLogin}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formControlLogin}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={userData.email}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={userData.password}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.formControlLogin}>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
