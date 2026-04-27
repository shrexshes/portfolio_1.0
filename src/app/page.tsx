"use client";

import HomePage from "@/components/home";
import Preloader from "@/components/Preloader";
export default function Home() {
  return (
    <div>
      <Preloader />
      <HomePage />
    </div>
  )
}
