"use client";
import { useEffect } from "react";
import styles from "./ColorSetting.module.scss";
import { useColorSettings } from "@/stores/useColorSettings";

export default function ColorSetting() {
  const { currentColor, setMode } = useColorSettings();

  useEffect(() => {
    const body = document.body;
    body.classList.remove("color-red", "color-blue", "color-violet");
    body.classList.add(`color-${currentColor}`);
  }, [currentColor]);
  return (
    <div className={styles.colors}>
      <p className={styles.title}>COLOR</p>
      <div className={styles.colorsContainer}>
        <button
          className={`${styles.color} ${
            currentColor === "red" ? styles.active : ""
          }`}
          style={{ backgroundColor: "var(--red)" }}
          onClick={() => setMode("red")}
        ></button>
        <button
          className={`${styles.color} ${
            currentColor === "blue" ? styles.active : ""
          }`}
          style={{ backgroundColor: "var(--blue)" }}
          onClick={() => setMode("blue")}
        ></button>
        <button
          className={`${styles.color} ${
            currentColor === "violet" ? styles.active : ""
          }`}
          style={{ backgroundColor: "var(--violet)" }}
          onClick={() => setMode("violet")}
        ></button>
      </div>
    </div>
  );
}
