import React from "react";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <a href="/" className={styles.logo}>
        BlogGPT
      </a>
      <span className={styles.tagline}>a blog of questionable quality</span>
    </header>
  );
}
