import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ColorMode = "red" | "blue" | "violet";

type ColorState = {
  currentColor: ColorMode;
  setMode: (mode: ColorMode) => void;
};

export const useColorSettings = create<ColorState>()(
  persist(
    (set) => ({
      currentColor: "red",
      setMode: (mode) => set({ currentColor: mode }),
    }),
    { name: "color-settings" }
  )
);
