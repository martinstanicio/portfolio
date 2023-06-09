import "normalize.css";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
