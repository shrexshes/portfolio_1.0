"use client";

import React, { useRef, useEffect, memo } from "react";
import AsciiImage from "./ascii-image";
import { GithubIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";

// 1. Added Alt text and role for the ASCII art so screen readers handle it correctly
const MemoizedAscii = memo(() => (
    <div role="img" aria-label="Decorative black hole ascii art background">
        <AsciiImage 
            src="/images/blackhole.webp" 
            width={130} 
            className="absolute text-[10px] animate-pulse bottom-0 left-1/2 h-[90%] transform -translate-x-1/2 opacity-40 text-black pointer-events-none" 
        />
    </div>
));
MemoizedAscii.displayName = "MemoizedAscii";

const HeroSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const startHeroAnim = () => {
            if (!containerRef.current) return;
            containerRef.current.style.setProperty('--hero-opacity', '1');
            containerRef.current.style.setProperty('--hero-blur', '0px');
        };

        window.addEventListener("loaderFinished", startHeroAnim);
        const fallback = setTimeout(startHeroAnim, 3000);

        return () => {
            window.removeEventListener("loaderFinished", startHeroAnim);
            clearTimeout(fallback);
        };
    }, []);

    const animClass = "transition-all duration-[1200ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] will-change-[filter,opacity]";

    return (
        <section 
            ref={containerRef} 
            className="relative z-20 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-red-600 selection:bg-red-900/30 [--hero-opacity:0] [--hero-blur:20px]"
            aria-labelledby="hero-heading"
        >
            <MemoizedAscii />

            {/* Side Elements - Marked as aria-hidden because they are decorative/system stats */}
            <div 
                aria-hidden="true"
                style={{ opacity: 'var(--hero-opacity)', filter: 'blur(var(--hero-blur))', transitionDelay: '200ms' }}
                className={`hero-side-element absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-start text-gray-900 font-jet text-xs pointer-events-none z-30 ${animClass}`}
            >
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
                <div className="writing-vertical-rl opacity-60 tracking-widest uppercase">system online</div>
                <div className="flex flex-row gap-2 font-jet text-[10px] opacity-70">
                    <span>X: 24.09</span><span>Y: 82.11</span>
                </div>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            </div>

            <div 
                aria-hidden="true"
                style={{ opacity: 'var(--hero-opacity)', filter: 'blur(var(--hero-blur))', transitionDelay: '400ms' }}
                className={`hero-side-element absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-end text-gray-900 font-jet text-xs z-30 ${animClass}`}
            >
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
                <div className="writing-vertical-rl animate-pulse tracking-widest uppercase opacity-60"><GlobeIcon aria-hidden="true" /></div>
                <time className="flex flex-row gap-2 font-jet text-[12px] opacity-60 items-center tabular-nums">
                    {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })} / {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </time>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            </div>

            {/* Static Decor */}
            <div aria-hidden="true" className="absolute top-8 left-8 w-4 h-4 border-l border-t border-gray-900 opacity-30"></div>
            <div aria-hidden="true" className="absolute top-8 right-8 w-4 h-4 border-r border-t border-gray-900 opacity-30"></div>
            <div aria-hidden="true" className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-gray-900 opacity-30"></div>
            <div aria-hidden="true" className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-gray-900 opacity-30"></div>

            <div className="z-20 text-center px-4 max-w-6xl mt:10 md:mt-20 mx-auto flex flex-col gap-5 items-center">
                <span 
                    style={{ opacity: 'var(--hero-opacity)', filter: 'blur(var(--hero-blur))' }}
                    className={`uppercase inline-flex items-center gap-2 py-1 rounded-full bg-black px-5 backdrop-blur-sm text-sm font-host text-white mb-10 ${animClass}`}
                >
                    available for freelance work
                </span>

                <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold uppercase tracking-tighter flex items-center flex-col text-center font-host leading-[1]">
                    <span 
                        style={{ opacity: 'var(--hero-opacity)', filter: 'blur(var(--hero-blur))', transitionDelay: '400ms' }}
                        className={`text-[3rem] md:text-[6rem] uppercase text-black inline-block ${animClass}`}
                    > logic meets</span>
                    <span 
                        style={{ opacity: 'var(--hero-opacity)', filter: 'blur(var(--hero-blur))', transitionDelay: '800ms' }}
                        className={`uppercase text-[3rem] md:text-[6rem] bg-clip-text text-transparent flex items-center bg-gradient-to-b from-white via-gray-100 to-white ${animClass}`}
                    >
                        obsession .
                    </span>
                </h1>
                
                <p 
                    style={{ opacity: 'var(--hero-opacity)', filter: 'blur(var(--hero-blur))', transitionDelay: '800ms' }}
                    className={`text-medium md:text-lg lg:text-xl text-white font-inter max-w-2xl mt-6 mx-auto leading-relaxed ${animClass}`}
                >
                   For homosapiens who refuse to stop evolving. Full Stack Developer crafting robust applications.
                </p>

                <nav 
                    aria-label="Hero actions"
                    style={{ opacity: 'var(--hero-opacity)', filter: 'blur(var(--hero-blur))', transitionDelay: '1200ms' }}
                    className={`flex flex-row items-center gap-4 mt-4 ${animClass}`}
                >
                    <button 
                        aria-label="View portfolio projects"
                        className="group relative px-8 py-4 bg-white text-black font-jet font-bold text-sm tracking-wide overflow-hidden transition-all"
                    >
                        <span className="relative z-10">VIEW WORK</span>
                        <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
                    </button>
                    <Link 
                        target='_blank' 
                        href="https://github.com/shrexshes" 
                        title="Follow shrexshes on GitHub"
                        aria-label="Visit GitHub Profile"
                        className="px-8 py-4 bg-black border border-gray-600 text-white font-jet text-sm hover:bg-gray-900 transition-all flex items-center gap-2"
                    >
                        <GithubIcon className="w-4 h-4" aria-hidden="true" /> GITHUB
                    </Link>
                </nav>
            </div>
        </section>
    );
};

export default HeroSection;