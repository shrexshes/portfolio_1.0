import type { Metadata } from "next";
import { Host_Grotesk, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/layout/header";
import CustomCursor from "@/components/custom-cursor";
import Preloader from "@/components/Preloader";

// Font Definitions
const jetMono = localFont({
  src: "../../public/fonts/jetbrains-mono.ttf",
  variable: "--font-jet-mono",
});

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ayush Shrestha",
  description: "Portfolio of Ayush Shrestha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${hostGrotesk.variable} 
          ${interTight.variable} 
          ${jetMono.variable} 
          antialiased
        `}
      >
        <CustomCursor />
        {/* <Preloader/> */}
        <Header />
        {children}
      </body>
    </html>
  );
}