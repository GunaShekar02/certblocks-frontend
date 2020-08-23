import React from "react";

import Button from "../../Components/Button/Button";

import styles from "./LandingPage.module.css";

import { ReactComponent as HeroImage } from "../../assets/images/hero.svg";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <HeroImage className={styles.heroImage} />
      </div>
      <div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Certblocks</h1>
          <p className={styles.subtitle}>Redefining Certificates.</p>
          <p className={styles.content}>
            Certblocks is your go-to destination for creating, issuing, sharing,
            validating and verifying certificates. Certificates are digitally
            signed using cryptography, stored on IPFS(Interplanetary File
            System) and record on Blockchain.
          </p>
          <Button title="Let's Go!" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
