"use client";
import { useState } from "react";
import styles from "./Timer.module.scss";
import { useTimerStore } from "@/stores/useTimerSettings";
export default function Timer() {
  const [play, setPlay] = useState<boolean>(false);
  const {
    currentMode,
    pomodoroDuration,
    shortBreakDuration,
    longBreakDuration,
  } = useTimerStore();

  const duration = {
    pomodoro: pomodoroDuration,
    shortBreak: shortBreakDuration,
    longBreak: longBreakDuration,
  }[currentMode];

  return (
    <div className={styles.timer}>
      <div className={styles.progress} />
      <p className={styles.time}>
        {Math.floor(duration / 60)}:
        {(duration % 60).toString().padStart(2, "0")}
      </p>
      <button className={styles.button}>{play ? "PAUSE" : "PLAY"}</button>
    </div>
  );
}
