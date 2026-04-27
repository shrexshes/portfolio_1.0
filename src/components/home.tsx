"use client";

import React from 'react'
import HeroSection from './hero-section'
import AboutMe from './about-me';
import BannerHome from './banner-home';
import WorkExperience from './work-experience';
import MarqueeBanner from './new-banner';
import ContactSection from './contact';

const HomePage = () => {
  return (
    <div className='relative'>
      <HeroSection />
      <BannerHome />
      <AboutMe />
      <MarqueeBanner />

      <WorkExperience />
      <div className='bg-black relative flex items-center justify-center py-10 z-20'>
        <span className="text-white text-xs md:text-[1.5rem] font-host uppercase font-bold">
          Great products don't build themselves , but I can help.
        </span>
      </div>
      <div className='bg-red-600 py-16 md:py-24 z-20 relative'>
      <ContactSection/>
      </div>
    </div>
  )
}

export default HomePage