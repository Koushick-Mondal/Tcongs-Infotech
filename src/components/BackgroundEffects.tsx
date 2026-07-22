"use client";

import styles from "./BackgroundEffects.module.css";

export default function BackgroundEffects() {
  return (
    <div className={styles.fixedBg}>
      <div className={styles.gridPattern} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
    </div>
  );
}
