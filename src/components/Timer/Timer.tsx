"use client";
import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";
import { useTimerStore } from "@/stores/useTimerSettings";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Timer() {
  const [play, setPlay] = useState<boolean>(false);
  const [elapsed, setElapsed] = useState(0);
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

  useEffect(() => {
    if (!play) return;

    const interval = setInterval(() => {
      setElapsed((prev) => {
        if (prev >= duration) {
          clearInterval(interval);
          return duration;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [play, duration]);

  useEffect(() => {
    setPlay(false);
    setElapsed(0);
  }, [currentMode]);

  const handleToggle = () => {
    setPlay((prev) => !prev);
  };

  const handleReset = () => {
    setElapsed(0);
    setPlay(false);
  };

  return (
    <div className={styles.timer}>
      <div className={styles.outerCircle} />
      <p className={styles.time}>
        {Math.floor((duration - elapsed) / 60)}:
        {((duration - elapsed) % 60).toString().padStart(2, "0")}
      </p>
      {elapsed === duration ? (
        <button className={styles.button} onClick={handleReset}>
          RESTART
        </button>
      ) : (
        <button className={styles.button} onClick={handleToggle}>
          {play ? "PAUSE" : "PLAY"}
        </button>
      )}
      <button
        className={`${styles.button} ${styles.reset}`}
        onClick={handleReset}
      >
        RESET
      </button>
      <CircularProgressbar
        value={(elapsed / duration) * 100}
        strokeWidth={4}
        className={styles.progress}
        styles={buildStyles({
          trailColor: "var(--background)",
          pathColor: "var(--primary-color)",
        })}
      />
    </div>
  );
}
