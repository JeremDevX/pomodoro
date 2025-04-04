import Timer from "@/components/Timer/Timer";
import TimerTabs from "@/components/TimerTabs/TimerTabs";
import styles from "./page.module.scss";
import TimerConfig from "@/components/TimerConfig/TimerConfig";
import ColorInit from "@/components/ColorSetting/ColorInit";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>pomodoro</h1>
      <ColorInit />
      <TimerTabs />
      <Timer />
      <TimerConfig />
    </main>
  );
}
