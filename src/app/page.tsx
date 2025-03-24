import FontSelector from "@/components/FontSelector/FontSelector";
import Timer from "@/components/Timer/Timer";
import TimerTabs from "@/components/TimerTabs/TimerTabs";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>pomodoro</h1>
      <TimerTabs />
      <Timer />
      <FontSelector />
    </main>
  );
}
