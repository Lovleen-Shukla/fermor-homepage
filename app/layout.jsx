import "./globals.css";
import { Fraunces, Inter } from "next/font/google";
import Nav from "../components/Nav";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Fermor — Understand, act and grow your money",
  description: "Finance made simpler, clearer and easier to use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body><Nav />{children}</body>
    </html>
  );
}
