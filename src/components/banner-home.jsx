import Image from 'next/image'
import React from 'react'
import FirefliesBackground from './fireflies-background'
import { Glasses } from 'lucide-react'

const BannerHome = () => {
  return (
    <div className='relative bg-black z-20 overflow-hidden'>
      <FirefliesBackground />
      <div className='max-w-6xl mx-auto px-5'>
        
        {/* Container: Stacked on mobile (flex-col), Row on desktop (md:flex-row) */}
        <div className='relative z-10 flex flex-col md:flex-row items-center justify-between py-8 md:py-5 border-t border-gray-700 gap-4 md:gap-0'>
          
          {/* Left Section - Order 2 on mobile to keep name at top */}
          <div className='flex-1 order-1 md:order-1'>
            <p className='font-inter text-xs md:text-sm text-gray-400 text-center md:text-left'>
              © Personal Profile <span className="inline">व्यक्तिगत परिचय</span>
            </p>
          </div>

          {/* Center Section - Order 1 on mobile (Prominent) */}
          <div className="relative z-10 shrink-0 order-2 md:order-2">
            <h1 className='text-4xl md:text-[4rem] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 font-bold font-host leading-tight text-center tracking-tighter'>
              ayush
            </h1>
          </div>

          {/* Right Section - Order 3 on mobile */}
          <div className='flex-1 flex justify-center md:justify-end order-3 md:order-3'>
            <p className='font-inter text-xs md:text-sm text-center md:text-right text-gray-400 max-w-[200px] md:max-w-none'>
              Visionary homosapien with myopia 
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BannerHome