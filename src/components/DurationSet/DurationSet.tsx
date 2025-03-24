import styles from "./DurationSet.module.scss";
import { useTimerStore } from "@/stores/useTimerSettings";

export default function DurationSet() {
  const {
    setDurations,
    pomodoroDuration,
    shortBreakDuration,
    longBreakDuration,
  } = useTimerStore();

  return (
    <div className={styles.durations}>
      <p className={styles.title}>TIME (MINUTES)</p>
      <div className={styles.inputs}>
        <label htmlFor="pomodoro" className={styles.label}>
          pomodoro
          <input
            type="number"
            id="pomodoro"
            name="pomodoro"
            value={pomodoroDuration / 60}
            onChange={(e) =>
              setDurations({
                pomodoroDuration: parseInt(e.target.value) * 60,
              })
            }
          />
        </label>
        <label htmlFor="shortBreak" className={styles.label}>
          short break
          <input
            type="number"
            id="shortBreak"
            name="shortBreak"
            value={shortBreakDuration / 60}
            onChange={(e) =>
              setDurations({
                shortBreakDuration: parseInt(e.target.value) * 60,
              })
            }
          />
        </label>
        <label htmlFor="longBreak" className={styles.label}>
          long break
          <input
            type="number"
            id="longBreak"
            name="longBreak"
            value={longBreakDuration / 60}
            onChange={(e) =>
              setDurations({
                longBreakDuration: parseInt(e.target.value) * 60,
              })
            }
          />
        </label>
      </div>
    </div>
  );
}
