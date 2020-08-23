import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      className={`${styles.container} ${props.className} ${
        props.disabled ? styles.disabled : null
      }`}
    >
      {props.title}
    </div>
  );
};

export default Button;
