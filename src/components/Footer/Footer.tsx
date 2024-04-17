import React from "react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.description}>
          this is a very large footer so the page extends well beyond the end of
          each blog post
        </p>
        <p className={styles.signup}>
          Want some human-generated content? Visit the{" "}
          <a href="https://newsletter.howd.dev" target="_blank">
            Hands-on Web Dev Newsletter site
          </a>
          !
        </p>
        <p>
          You can also{" "}
          <a
            href="https://handsonwebdev.substack.com/?r=3e5z8l&utm_campaign=toc"
            target="_blank"
          >
            sign up for email notifications
          </a>
        </p>
      </div>
    </footer>
  );
}
