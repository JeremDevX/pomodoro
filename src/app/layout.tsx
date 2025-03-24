import type { Metadata } from "next";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import "./globals.css";

const kumbh = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pomodoro Timer",
  description: "Created by JeremDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${kumbh.variable} ${robotoSlab.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
