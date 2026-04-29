import AboutPage from '@/components/about'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ayush Shrestha | Devfolio",
  description: "Learn more about the Full Stack Developer behind the code. Discover the philosophy of evolving through robust application development.",
  openGraph: {
    title: "About | Ayush Shrestha",
    description: "The intersection of logic and obsession in software engineering.",
    url: "https://ayush-devfolio-theta.vercel.app/about",
    images: [
      {
        url: "/images/about-preview.webp",
        width: 1200,
        height: 630,
        alt: "About Me - Full Stack Developer",
      },
    ],
  },
};

const page = () => {
  return (
    <main>
      <AboutPage />
    </main>
  )
}

export default page