"use client";

import React from 'react'
import HeroSection from './hero-section'
import AboutMe from './about-me';
import BannerHome from './banner-home';
import WorkExperience from './work-experience';
import MarqueeBanner from './new-banner';
import ZenFooter from '@/layout/footer';

const HomePage = () => {
  return (
    <div className='relative'>
      <HeroSection />
      <BannerHome />
      <AboutMe />
      <MarqueeBanner/>

      <WorkExperience />
      <div className="sticky bottom-0 z-10 w-full h-[400px]"> 
      <ZenFooter/>
      </div>
    </div>
  )
}

export default HomePage