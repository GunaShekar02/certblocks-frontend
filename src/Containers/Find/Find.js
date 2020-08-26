import React from "react";

import Button from "../../Components/Button/Button";

import styles from "./Find.module.css";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Find = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Find your Certificate</h2>
      <div className={styles.loginContainer}>
        <Logo className={styles.logo} />
        <input
          type="text"
          placeholder="Enter Roll Number"
          className={styles.input}
        />
        <Button title="Find" />
      </div>
    </div>
  );
};

export default Find;
