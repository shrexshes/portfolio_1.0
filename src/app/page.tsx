import HomePage from "@/components/home";
import Preloader from "@/components/Preloader";
import { Metadata } from "next";

// This is where the SEO magic happens
export const metadata: Metadata = {
  title: "Ayush Shrestha - Devfolio | Full Stack Developer",
  description: "Full Stack Developer crafting robust applications for homosapiens who refuse to stop evolving. Available for freelance work.",
  keywords: ["Full Stack Developer", "Software Engineer", "Web Development", "Freelance Developer"],
  openGraph: {
    title: "Ayush Shrestha - Devfolio",
    description: "Full Stack Developer crafting robust applications.",
    url: "https://ayush-devfolio-theta.vercel.app/",
    siteName: "Your Name",
    images: [
      {
        url: "/images/blackhole.webp", // Path to your preview image
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logic Meets Obsession",
    description: "Full Stack Developer crafting robust applications.",
    images: ["/images/blackhole.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      <Preloader />
      <HomePage />
    </main>
  );
}