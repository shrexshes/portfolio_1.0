"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
// import { ArrowRight, Github } from "lucide-react";
// import PixelBackground from './pixel-background' // Keeping your comment
import AsciiImage from "./ascii-image";
import { GlobeIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger)
const HeroSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const bgText = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 50%",
                end: "bottom 50%",
                scrub: 1,
            },

            defaults: { ease: "power4.out" }
        });

        tl.to(bgText.current, {
            y: 5,
            ease: "none"
        }, 0)
        tl.from(".hero-badge", {
            y: -20,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        })
            .from(".hero-headline-1", {
                y: 50,
                opacity: 0,
                duration: 1,
                skewY: 5,
            }, "-=0.6")
            .from(".hero-headline-2", {
                scale: 0.9,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1.2,
            }, "-=0.9")
            .from(".hero-text", {
                y: 30,
                opacity: 0,
                duration: 1,
            }, "-=0.8")
            .from(".hero-buttons", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1
            }, "-=0.8");

        // Sidebar animations
        tl.from(".hero-side-element", {
            x: (i) => i === 0 ? -20 : 20,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.2
        }, 0.5);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-900/90 text-white selection:bg-neutral-500/30">

            {/* --- Background Elements --- */}

            {/* 1. Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none"></div>

            {/* 2. Radial Spotlight (Behind Text) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-500/10 rounded-full blur-[100px] z-0"></div>

            {/* 3. ASCII Image (Positioned deep in background) */}
            {/* <div className="absolute inset-0 z-0 flex items-end justify-center opacity-40 pointer-events-none"> */}
            {/* Gradient Mask to fade ASCII at the top so text is readable */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-neutral-950/80 to-neutral-950 z-10" /> */}
            <AsciiImage src="/images/eye.jpg" width={180} className="absolute bottom-0 left-1/2 h-[90%] transform -translate-x-1/2 -translate-y-0 opacity-40" />

            {/* </div> */}

            {/* --- Sidebar Decorations --- */}

            {/* Left Sidebar - Coordinates/Tech Info */}
            <div className="hero-side-element absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-start text-neutral-400 font-jet text-xs pointer-events-none z-30">
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
                <div className="writing-vertical-rl   opacity-60 tracking-widest uppercase ">
                    system online
                </div>
                <div className="flex flex-row gap-2 font-jet text-[10px] opacity-70">
                    <span>X: 24.09</span>
                    <span>Y: 82.11</span>
                </div>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
            </div>

            {/* Right Sidebar - Social Indicators */}
            <div className="hero-side-element absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-end text-neutral-300 font-jet text-xs z-30">
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
                <div className="writing-vertical-rl animate-pulse tracking-widest uppercase opacity-60">
                    <GlobeIcon />
                </div>
                <div className="flex flex-row gap-2 font-jet text-[12px] opacity-60 items-center">
                    <span>{new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(/\//g, '.')} / </span>
                    <span className="tabular-nums">{new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-neutral-100 opacity-50"></div>
            <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-neutral-100 opacity-50"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-neutral-100 opacity-50"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-neutral-100 opacity-50"></div>


            {/* --- Main Content --- */}
            <div className="z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">

                {/* Status Badge */}
                <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-sm font-jet text-neutral-300 mb-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 "></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
                    </span>
                    available for freelance work
                </div>

                {/* Headline */}
                <h1 ref={bgText} className="text-5xl md:text-8xl font-bold font-jet tracking-tighter leading-[1]">
                    <span className="hero-headline-1  inline-block">Upgrading</span>
                    <br className="md:hidden" />
                    <span className="hero-headline-2 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 inline-block">
                        Digtal Future.
                    </span>
                </h1>

                {/* Sub-headline */}
                <p className="hero-text text-lg md:text-xl text-white font-jet max-w-2xl mx-auto leading-relaxed">
                    Full Stack Developer crafting robust applications with a focus on{" "}
                    <span className="text-white decoration-neutral-500 underline underline-offset-4">
                        performance
                    </span>{" "}
                    and{" "}
                    <span className="text-white decoration-neutral-500 underline underline-offset-4">
                        aesthetics
                    </span>
                    .
                </p>


                {/* Buttons */}
                <div className="hero-buttons flex flex-col sm:flex-row items-center gap-4 mt-4">

                    {/* Primary Button */}
                    <button className="group relative px-8 py-4 bg-white text-black font-jet font-bold text-sm tracking-wide overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            VIEW WORK
                            {/* <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
                        </span>
                        <div className="absolute inset-0 bg-neutral-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
                    </button>

                    {/* Secondary Button */}
                    <button className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-jet text-sm hover:bg-neutral-800 transition-all duration-300 flex items-center gap-2">
                        {/* <Github className="w-4 h-4" /> */}
                        GITHUB
                    </button>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;