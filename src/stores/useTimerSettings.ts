import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

type TimerState = {
  currentMode: TimerMode;
  pomodoroDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  setMode: (mode: TimerMode) => void;
  setDurations: (
    durations: Partial<Omit<TimerState, "setMode" | "setDurations">>
  ) => void;
};

export const useTimerStore = create<TimerState>()(
  persist(
    (set) => ({
      currentMode: "pomodoro",
      pomodoroDuration: 25 * 60,
      shortBreakDuration: 5 * 60,
      longBreakDuration: 15 * 60,
      setMode: (mode) => set({ currentMode: mode }),
      setDurations: (durations) => set((state) => ({ ...state, ...durations })),
    }),
    { name: "pomodoro-settings" }
  )
);
