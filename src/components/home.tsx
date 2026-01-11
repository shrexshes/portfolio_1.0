"use client";

import React from 'react'
import HeroSection from './hero-section'
import AboutMe from './about-me';
import WorkExperience from './work-experience';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <WorkExperience />
    </div>
  )
}

export default HomePage