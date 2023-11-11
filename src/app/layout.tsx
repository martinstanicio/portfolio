import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
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
      <body
        className={cn(
          fontSans.variable,
          "flex min-h-screen justify-between gap-12",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <main>{children}</main>
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
