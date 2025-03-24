"use client";

import DurationSet from "../DurationSet/DurationSet";
import FontSelector from "../FontSelector/FontSelector";
import styles from "./TimerConfig.module.scss";

export default function TimerConfig() {
  return (
    <div className={styles.config}>
      <h3 className={styles.title}>Settings</h3>
      <DurationSet />
      <FontSelector />
      <div>COLOR</div>
    </div>
  );
}
