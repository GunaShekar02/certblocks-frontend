import React from "react";

import Button from "../../Components/Button/Button";

import styles from "./Verify.module.css";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Verify = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Verify a Certificate</h2>
      <div className={styles.verifyContainer}>
        <Logo className={styles.logo} />
        <label>
          {" "}
          Upload a json file containing the certificate
          <input type="file" className={styles.input} />
        </label>
        <Button title="Verify" />
      </div>
    </div>
  );
};

export default Verify;
