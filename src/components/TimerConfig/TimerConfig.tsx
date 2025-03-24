"use client";

import FontSelector from "../FontSelector/FontSelector";
import styles from "./TimerConfig.module.scss";

export default function TimerConfig() {
  return (
    <div className={styles.config}>
      <h3 className={styles.title}>Settings</h3>
      <div>TIME (MINUTES)</div>
      <FontSelector />
      <div>COLOR</div>
    </div>
  );
}
