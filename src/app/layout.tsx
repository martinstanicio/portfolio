import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Martín Stanicio | Web Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
