"use client";
import styles from "./TimerTabs.module.scss";
import { useTimerStore } from "@/stores/useTimerSettings";

export default function TimerTabs() {
  const { currentMode, setMode } = useTimerStore();

  return (
    <div className={styles.tabs}>
      <button
        className={styles.button}
        style={
          currentMode === "pomodoro"
            ? { backgroundColor: "var(--primary-color)" }
            : {}
        }
        onClick={() => setMode("pomodoro")}
      >
        pomodoro
      </button>
      <button
        className={styles.button}
        style={
          currentMode === "shortBreak"
            ? { backgroundColor: "var(--primary-color)" }
            : {}
        }
        onClick={() => setMode("shortBreak")}
      >
        short break
      </button>
      <button
        className={styles.button}
        style={
          currentMode === "longBreak"
            ? { backgroundColor: "var(--primary-color)" }
            : {}
        }
        onClick={() => setMode("longBreak")}
      >
        long break
      </button>
    </div>
  );
}
