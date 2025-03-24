import { useEffect, useState } from "react";

const FONT_MAP = {
  kumbh: "var(--font-kumbh-sans)",
  robotoSlab: "var(--font-roboto-slab)",
  spaceMono: "var(--font-space-mono)",
};

export const useFont = () => {
  const [font, setFont] = useState("kumbh");

  useEffect(() => {
    const stored = localStorage.getItem("font") || "kumbh";
    setFont(stored);
    document.body.style.fontFamily = FONT_MAP[stored as keyof typeof FONT_MAP];
  }, []);

  const changeFont = (newFont: keyof typeof FONT_MAP) => {
    localStorage.setItem("font", newFont);
    setFont(newFont);
    document.body.style.fontFamily = FONT_MAP[newFont];
  };

  return { font, changeFont };
};
