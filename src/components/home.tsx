"use client";

import React from 'react'
import HeroSection from './hero-section'
import AboutMe from './about-me';
import BannerHome from './banner-home';
import WorkExperience from './work-experience';
import MarqueeBanner from './new-banner';

const HomePage = () => {
  return (
    <div className='relative'>
      <HeroSection />
      <BannerHome />
      <AboutMe />
      <MarqueeBanner/>
      <WorkExperience />
    </div>
  )
}

export default HomePage