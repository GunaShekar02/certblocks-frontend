import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../Components/Button/Button";

import styles from "./Find.module.css";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import { fetchCertificate } from "../../services/certificates.service";

const Find = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [roll, setRoll] = useState("");
  const history = useHistory();

  const handleFetch = async () => {
    try {
      setIsLoading(true);
      const { certificate } = await fetchCertificate(roll);
      setIsLoading(false);
      history.push("/display", { certificate });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Find your Certificate</h2>
      <div className={styles.loginContainer}>
        <Logo className={styles.logo} />
        <input
          type="text"
          placeholder="Enter Roll Number"
          className={styles.input}
          value={roll}
          onChange={({ target: { value } }) => setRoll(value)}
        />
        <Button title="Find" onClick={handleFetch} loading={isLoading} />
      </div>
    </div>
  );
};

export default Find;
