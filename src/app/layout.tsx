import type { Metadata } from "next";
import { Geist, Inter_Tight  } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header";
import localFont from "next/font/local";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/custom-cursor";

const jet_mono = localFont({
  src: "../../public/fonts/jetbrains-mono.ttf",
  variable: "--font-jet-mono",
});

const relio = localFont({
  src: "../../public/fonts/relio.ttf",
  variable: "--font-relio",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const inter =  Inter_Tight ({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ayush Shrestha",
  description: "Portfolio of - Ayush Shrestha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jet_mono.variable} ${inter.variable} antialiased`}
      >
        <CustomCursor/>
        <Preloader />
        <Header />
        {children}
      </body>
    </html>
  );
}
