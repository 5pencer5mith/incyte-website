"use client";

// Styles
import styles from "./button.module.css";

export default function Button({ buttonText, buttonDest }) {
  return (
    <div className={styles.button}>
      <a href={buttonDest}>{buttonText}</a>
    </div>
  );
};
