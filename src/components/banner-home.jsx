import Image from 'next/image'
import React from 'react'
import FirefliesBackground from './fireflies-background'
import { Glasses } from 'lucide-react'

const BannerHome = () => {
    return (
        <div className='relative  bg-black bg-gradient-to-t from-black via-gray-800/60 to-gray-950 z-0 overflow-hidden'>
            <FirefliesBackground />
            <div className='max-w-6xl mx-auto'>
                <div className="relative z-10">
                    <h2 className='text-[9rem] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 text-center justify-center font-bold flex items-center gap-2 font-inter'>
                        Ayush Shrestha
                    </h2>
                </div>

                <div className='relative z-10 flex items-center justify-between py-5 px-8 border-t border-gray-700'>
                    <p className='font-inter'>© Personal Profile व्यक्तिगत परिचय</p>
                    <p className='font-inter'>Visonary homosapien with myopia <Glasses className='inline mx-1 mb-1 animate-pulse' size={20} /></p>
                </div>
            </div>
        </div>
    )
}

export default BannerHome
