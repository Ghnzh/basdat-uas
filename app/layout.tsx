import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/organisms/Navbar";

export const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pjs.className} bg-[#212121] text-white absolute inset-0 -z-10 h-full w-full dark:bg-[linear-gradient(to_right,#2b2b2b_1px,transparent_1px),linear-gradient(to_bottom,#2b2b2b_1px,transparent_1px)] bg-[size:55px_55px]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}