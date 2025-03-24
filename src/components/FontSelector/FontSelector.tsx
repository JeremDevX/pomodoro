"use client";
import { useFont } from "@/hooks/useFont";

export default function FontSelector() {
  const { font, changeFont } = useFont();

  return (
    <select value={font} onChange={(e) => changeFont(e.target.value as any)}>
      <option value="kumbh">Kumbh Sans</option>
      <option value="robotoSlab">Roboto Slab</option>
      <option value="spaceMono">Space Mono</option>
    </select>
  );
}
