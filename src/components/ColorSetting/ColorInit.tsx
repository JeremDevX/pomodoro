"use client";
import { useEffect } from "react";
import { useColorSettings } from "@/stores/useColorSettings";

export default function ColorInit() {
  const { currentColor } = useColorSettings();

  useEffect(() => {
    const body = document.body;
    body.classList.remove("color-red", "color-blue", "color-violet");
    body.classList.add(`color-${currentColor}`);
  }, [currentColor]);

  return null;
}
