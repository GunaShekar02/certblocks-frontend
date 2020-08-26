import React from "react";

import Button from "../../Components/Button/Button";

import styles from "./Issue.module.css";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Upload = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Issue Certificates</h2>
      <div className={styles.issueContainer}>
        <Logo className={styles.logo} />
        <label>
          {" "}
          Upload a csv file containing the student list
          <input type="file" className={styles.input} />
        </label>
        <Button title="Issue" />
      </div>
    </div>
  );
};

export default Upload;
