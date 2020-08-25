import React from "react";

import Button from "../../Components/Button/Button";

import styles from "./Login.module.css";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Login = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Authorize</h2>
      <div className={styles.loginContainer}>
        <Logo className={styles.logo} />
        <input
          type="password"
          placeholder="Enter API Key"
          className={styles.input}
        />
        <Button title="Login" />
      </div>
    </div>
  );
};

export default Login;
