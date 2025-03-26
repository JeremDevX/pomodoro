"use client";

import { useState } from "react";
import ColorSetting from "../ColorSetting/ColorSetting";
import DurationSet from "../DurationSet/DurationSet";
import FontSelector from "../FontSelector/FontSelector";
import styles from "./TimerConfig.module.scss";
import Image from "next/image";

export default function TimerConfig() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
      <button onClick={handleToggle} className={styles.settings}>
        <Image src="/icon-settings.svg" alt="settings" width={28} height={28} />
      </button>
      {toggle && (
        <div className={styles.config}>
          <div className={styles.header}>
            <h3 className={styles.title}>Settings</h3>
            <button className={styles.close} onClick={handleClose}>
              X
            </button>
          </div>
          <DurationSet />
          <FontSelector />
          <ColorSetting />
        </div>
      )}
    </>
  );
}
