"use client";
import { useFont } from "@/hooks/useFont";
import styles from "./FontSelector.module.scss";

export default function FontSelector() {
  const { font, changeFont } = useFont();

  return (
    <div className={styles.fonts}>
      <p className={styles.title}>FONT</p>
      <div className={styles.fontsContainer}>
        <button
          className={styles.button}
          style={{
            fontFamily: "var(--font-kumbh-sans)",
            backgroundColor: font === "kumbh" ? "var(--background)" : "",
            color: font === "kumbh" ? "var(--foreground)" : "",
          }}
          onClick={() => changeFont("kumbh")}
        >
          Aa
        </button>
        <button
          className={styles.button}
          style={{
            fontFamily: "var(--font-roboto-slab)",
            backgroundColor: font === "robotoSlab" ? "var(--background)" : "",
            color: font === "robotoSlab" ? "var(--foreground)" : "",
          }}
          onClick={() => changeFont("robotoSlab")}
        >
          Aa
        </button>
        <button
          className={styles.button}
          style={{
            fontFamily: "var(--font-space-mono)",
            backgroundColor: font === "spaceMono" ? "var(--background)" : "",
            color: font === "spaceMono" ? "var(--foreground)" : "",
          }}
          onClick={() => changeFont("spaceMono")}
        >
          Aa
        </button>
      </div>
    </div>
  );
}
