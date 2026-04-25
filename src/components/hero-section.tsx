"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AsciiImage from "./ascii-image";
import { GithubIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import FirefliesBackground from "./fireflies-background";

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const bgText = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Triggers slightly earlier for a smoother feel
                end: "bottom 50%",
                toggleActions: "play none none reverse", // Plays on enter, reverses on leave
            },
            defaults: { 
                ease: "power2.out", 
                duration: 1.2 
            }
        });

        // Simplified animation focusing purely on Blur and Opacity
        tl.from(".hero-badge", {
            filter: "blur(10px)",
            opacity: 0,
        })
        .from(".hero-headline-1", {
            filter: "blur(25px)",
            opacity: 0,
        }, "-=0.8")
        .from(".hero-headline-2", {
            filter: "blur(25px)",
            opacity: 0,
        }, "-=1")
        .from(".hero-text", {
            filter: "blur(10px)",
            opacity: 0,
        }, "-=0.8")
        .from(".hero-buttons", {
            filter: "blur(10px)",
            opacity: 0,
            stagger: 0.2
        }, "-=0.8")
        .from(".hero-side-element", {
            filter: "blur(10px)",
            opacity: 0,
            stagger: 0.3
        }, 0.5);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-red-600 selection:bg-red-900/30">

            {/* --- Background Elements --- */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-500/10 rounded-full blur-[100px] z-0"></div> */}

            <AsciiImage src="/images/blackhole.webp" width={130} className="absolute text-[10px] animate-pulse bottom-0 left-1/2 h-[90%] transform -translate-x-1/2 -translate-y-0 opacity-40 text-black" />

            {/* --- Sidebar Decorations --- */}
            <div className="hero-side-element absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-start text-gray-900 font-jet text-xs pointer-events-none z-30">
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
                <div className="writing-vertical-rl opacity-60 tracking-widest uppercase ">
                    system online
                </div>
                <div className="flex flex-row gap-2 font-jet text-[10px] opacity-70">
                    <span>X: 24.09</span>
                    <span>Y: 82.11</span>
                </div>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            </div>

            <div className="hero-side-element absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-end text-gray-900 font-jet text-xs z-30">
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
                <div className="writing-vertical-rl animate-pulse tracking-widest uppercase opacity-60">
                    <GlobeIcon />
                </div>
                <div className="flex flex-row gap-2 font-jet text-[12px] opacity-60 items-center">
                    <span>{new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(/\//g, '.')} / </span>
                    <span className="tabular-nums">{new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-gray-900 opacity-50"></div>
            <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-gray-900 opacity-50"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-gray-900 opacity-50"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-gray-900 opacity-50"></div>

            {/* --- Main Content --- */}
            <div className="z-20 text-center px-4 max-w-6xl mt-20 mx-auto flex flex-col gap-5 items-center">
                <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-white/10 backdrop-blur-sm text-sm font-jet text-white mb-10">
                    {/* <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 "></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
                    </span> */}
                    available for freelance work
                </div>

                <h1 ref={bgText} className="font-bold flex items-center flex-col text-center font-host tracking-tighter leading-[0.8] md:leading-[1]">
                    <span className="hero-headline-1 text-[3rem] md:text-[6rem] uppercase text-black inline-block"> logic  meets</span>
                    <br />
                    <span className="hero-headline-2 uppercase text-[3rem] md:text-[6rem] bg-clip-text text-transparent flex items-center bg-gradient-to-b from-white via-gray-100 to-white ">
                      obsession.
                        
                    </span>  <br />
                </h1>
                
                {/* <span className="hero-headline-2 block font-inter font-medium text-lg md:text-xl">
                    for homosapiens who refuse to stop evolving.
                </span> */}

                <p className="hero-text text-medium md:text-lg lg:text-xl text-white font-inter max-w-2xl mt-6 mx-auto leading-relaxed">
                   For homosapiens who refuse to stop evolving.  Full Stack Developer crafting robust applications with a focus on{" "}
                    <span className="text-white decoration-gray-500 underline underline-offset-4">
                        performance
                    </span>{" "}
                    and{" "}
                    <span className="text-white decoration-gray-500 underline underline-offset-4">
                        aesthetics
                    </span>
                    .
                </p>

                <div className="hero-buttons flex flex-row items-center gap-4 mt-4">
                    <button className="group relative px-8 py-4 bg-white text-black font-jet font-bold text-sm tracking-wide overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            VIEW WORK
                        </span>
                        <div className="absolute inset-0 bg-gray-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
                    </button>

                    <button className="px-8 py-4 bg-black border border-gray-600 text-white font-jet text-sm hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                        <GithubIcon className="w-4 h-4" />
                        GITHUB
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;