"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AsciiImage from "./ascii-image";
import { GithubIcon, GlobeIcon } from "lucide-react";

const HeroSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    const { contextSafe } = useGSAP({ scope: containerRef });

    // Define the animation function
    const startHeroAnim = contextSafe(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 1.2 }
        });

        tl.to(".hero-badge", { filter: "blur(0px)", opacity: 1 })
          .to(".hero-headline-1", { filter: "blur(0px)", opacity: 1 }, "-=0.8")
          .to(".hero-headline-2", { filter: "blur(0px)", opacity: 1 }, "-=1")
          .to(".hero-text", { filter: "blur(0px)", opacity: 1 }, "-=0.8")
          .to(".hero-buttons", { filter: "blur(0px)", opacity: 1, stagger: 0.2 }, "-=0.8")
          .to(".hero-side-element", { filter: "blur(0px)", opacity: 1, stagger: 0.2 }, 0.2);
    });

    useEffect(() => {
        // Listen for the preloader signal
        window.addEventListener("loaderFinished", startHeroAnim);
        return () => window.removeEventListener("loaderFinished", startHeroAnim);
    }, [startHeroAnim]);

    return (
        <section ref={containerRef} className="relative z-20 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-red-600 selection:bg-red-900/30">
            
            <AsciiImage 
                src="/images/blackhole.webp" 
                width={130} 
                className="absolute text-[10px] animate-pulse bottom-0 left-1/2 h-[90%] transform -translate-x-1/2 opacity-40 text-black pointer-events-none" 
            />

            {/* Side Elements - added opacity-0 blur-md */}
            <div className="hero-side-element opacity-0 blur-md absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-start text-gray-900 font-jet text-xs pointer-events-none z-30">
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
                <div className="writing-vertical-rl opacity-60 tracking-widest uppercase ">system online</div>
                <div className="flex flex-row gap-2 font-jet text-[10px] opacity-70">
                    <span>X: 24.09</span><span>Y: 82.11</span>
                </div>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            </div>

            <div className="hero-side-element opacity-0 blur-md absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-end text-gray-900 font-jet text-xs z-30">
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
                <div className="writing-vertical-rl animate-pulse tracking-widest uppercase opacity-60"><GlobeIcon /></div>
                <div className="flex flex-row gap-2 font-jet text-[12px] opacity-60 items-center tabular-nums">
                    {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })} / {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-gray-900 opacity-30"></div>
            <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-gray-900 opacity-30"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-gray-900 opacity-30"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-gray-900 opacity-30"></div>

            <div className="z-20 text-center px-4 max-w-6xl mt-20 mx-auto flex flex-col gap-5 items-center">
                {/* Initial opacity-0 blur-md on all content */}
                <div className="hero-badge uppercase opacity-0 blur-md inline-flex items-center gap-2 py-1 rounded-full bg-black px-5 backdrop-blur-sm text-sm font-host text-white mb-10">
                    available for freelance work
                </div>

                <h1 className="font-bold flex items-center flex-col text-center font-host tracking-tighter leading-[0.8] md:leading-[1]">
                    <span className="hero-headline-1 opacity-0 blur-xl text-[3rem] md:text-[6rem] uppercase text-black inline-block"> logic meets</span>
                    <span className="hero-headline-2 opacity-0 blur-xl uppercase text-[3rem] md:text-[6rem] bg-clip-text text-transparent flex items-center bg-gradient-to-b from-white via-gray-100 to-white ">
                        obsession .
                    </span>
                </h1>
                
                <p className="hero-text opacity-0 blur-md text-medium md:text-lg lg:text-xl text-white font-inter max-w-2xl mt-6 mx-auto leading-relaxed">
                   For homosapiens who refuse to stop evolving. Full Stack Developer crafting robust applications.
                </p>

                <div className="hero-buttons opacity-0 blur-md flex flex-row items-center gap-4 mt-4">
                    <button className="group relative px-8 py-4 bg-white text-black font-jet font-bold text-sm tracking-wide overflow-hidden transition-all">
                        <span className="relative z-10">VIEW WORK</span>
                        <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
                    </button>
                    <button className="px-8 py-4 bg-black border border-gray-600 text-white font-jet text-sm hover:bg-gray-900 transition-all flex items-center gap-2">
                        <GithubIcon className="w-4 h-4" /> GITHUB
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;