"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveLeft, Terminal, Ghost } from "lucide-react";
import AsciiImage from "@/components/ascii-image"; // Adjust path as needed
import TextReveal from "@/components/text-reveal";   // Adjust path as needed


export default function NotFound() {

    return (
        <section
            className="relative z-20 min-h-screen w-full bg-red-600 flex flex-col items-center justify-center overflow-hidden selection:bg-black selection:text-white"
        >
            {/* Static Decor Corners */}
            <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-black opacity-30"></div>
            <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-black opacity-30"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-black opacity-30"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-black opacity-30"></div>

            {/* --- Main Content --- */}
            <div className="z-10 w-full max-w-6xl mx-auto px-5 flex flex-col items-center text-center">
                
                {/* Visual Glitch Element */}
                <div className="relative mb-10">
                    {/* <AsciiImage
                        src="/images/blackhole.webp" // Using your existing asset
                        width={100}
                        className="text-black opacity-40 text-[1.2vw] lg:text-[0.6vw] animate-pulse"
                    /> */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 font-jet text-xs uppercase tracking-tighter border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Error: 404_Lost_In_Space
                    </div>
                </div>

                <div className="space-y-4">
                    <TextReveal>
                        <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter text-black font-host leading-[0.8]">
                            Lost <br />
                            <span className="text-white">Reality</span>
                        </h1>
                    </TextReveal>
                </div>

                <div className="mt-8 max-w-md">
                    <TextReveal delay={0.2}>
                        <p className="font-inter text-lg md:text-xl text-white leading-tight">
                            The coordinate you are looking for does not exist in this sector. 
                            The system has reached a dead end.
                        </p>
                    </TextReveal>
                </div>

                <div className="mt-12">
                    <TextReveal delay={0.4}>
                        <Link 
                            href="/" 
                            className="group flex items-center gap-4 px-10 py-5 bg-black text-white font-jet text-sm font-bold hover:bg-white hover:text-black transition-all duration-500 border border-black"
                        >
                            <MoveLeft className="group-hover:-translate-x-2 transition-transform" size={18} />
                            RETURN TO SOURCE
                        </Link>
                    </TextReveal>
                </div>
            </div>

            {/* Footer Status Metadata */}
            <div className="absolute bottom-0 w-full max-w-6xl px-5 pb-8 flex items-center justify-between text-[10px] font-jet text-black uppercase opacity-60">
                <div className="flex items-center gap-6">
                    <span className="hidden md:block">Path: undefined_route</span>
                </div>
                <div className="flex items-center gap-2">
                    <Ghost size={14} />
                    <span>Ghost_In_The_Machine</span>
                </div>
            </div>
        </section>
    );
}