import React, { useState, useRef, useEffect } from "react";

import styles from "./Navbar.module.css";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import useMediaQuery from "../../utils/useMediaQuery";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const [showMobileNav, setShowMobileNav] = useState(false);
  const hamburger = useRef();
  const mobileMenu = useRef();

  const handleHamburgerClick = () => {
    if (showMobileNav) {
      hamburger.current.childNodes.forEach((node) => {
        node.style.backgroundColor = "#6c63ff";
        node.style.position = "relative";
        node.style.right = "0";
      });
      hamburger.current.childNodes[0].style.transform = "rotate(0deg)";
      hamburger.current.childNodes[1].style.display = "block";
      hamburger.current.childNodes[2].style.transform = "rotate(0deg)";
      mobileMenu.current.style.right = "-100vw";
      setShowMobileNav(false);
    } else {
      hamburger.current.childNodes.forEach((node) => {
        node.style.backgroundColor = "white";
        node.style.position = "absolute";
        node.style.right = "20px";
      });
      hamburger.current.childNodes[0].style.transform = "rotate(45deg)";
      hamburger.current.childNodes[1].style.display = "none";
      hamburger.current.childNodes[2].style.transform = "rotate(-45deg)";
      mobileMenu.current.style.right = "0vw";
      setShowMobileNav(true);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Logo className={styles.logo} />
          <h1 className={styles.title}>Certblocks</h1>
        </div>
        {isMobile ? (
          <div
            className={styles.hamburger}
            onClick={handleHamburgerClick}
            ref={hamburger}
          >
            <div />
            <div />
            <div />
          </div>
        ) : (
          <div className={styles.links}>
            <h2>Issue Certificates</h2>
            <h2>Verify Certificate</h2>
            <h2>Find your Certificate</h2>
          </div>
        )}
      </div>
      <div className={styles.mobileLinks} ref={mobileMenu}>
        <h2>Issue Certificates</h2>
        <h2>Verify Certificate</h2>
        <h2>Find your Certificate</h2>
      </div>
    </>
  );
};

export default Navbar;
