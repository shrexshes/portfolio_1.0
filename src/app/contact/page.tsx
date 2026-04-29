import ContactSection from '@/components/contact'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Full stack Developer",
  description: "Ready to start a project? Reach out for freelance inquiries, full stack development, or just to talk about evolving tech.",
  openGraph: {
    title: "Contact | Ayush Shrestha",
    description: "Available for freelance work. Let's build something robust.",
    url: "https://ayush-devfolio-theta.vercel.app/contact",
  },
};

const Contact = () => {
  return (
    <main className='bg-red-600 py-32 z-20 relative'>
      <ContactSection/>
    </main>
  )
}

export default Contact