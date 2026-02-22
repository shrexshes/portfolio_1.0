"use client";

import React from 'react'
import HeroSection from './hero-section'
import AboutMe from './about-me';
import BannerHome from './banner-home';
import WorkExperience from './work-experience';

const HomePage = () => {
  return (
    <div className='relative'>
      <HeroSection />
      
      <div className='sticky top-0 z-0'><BannerHome /></div>
      <AboutMe />
      <WorkExperience />
    </div>
  )
}

export default HomePage