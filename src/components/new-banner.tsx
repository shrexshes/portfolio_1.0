"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MarqueeBanner = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        // Total width of the content
        const w = marquee.scrollWidth;

        // Infinite scroll animation
        gsap.to(marquee, {
            x: `-${w / 2}`,
            duration: 30, // Adjust for speed
            ease: "none",
            repeat: -1,
        });
    }, { scope: marqueeRef });

    const items = [
        "WEB DEVELOPMENT", "API DESIGN", "AI AGENTS","APP DEVELOPMENT",
        "RAG PIPELINES", "UI/UX", "BACKEND SYSTEMS",
        "DATABASE DESIGN", "CONSULTING", "SYSTEM DESIGN"
    ];

    return (
        <div className="relative py-4 md:py-8 bg-black border-y border-white/20 overflow-hidden select-none">
            {/* The Track */}
            <div
                ref={marqueeRef}
                className="flex whitespace-nowrap items-center will-change-transform"
            >
                {/* We duplicate the list to ensure a seamless loop */}
                {[...items, ...items].map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-4xl md:text-[4rem] font-host font-black tracking-tighter text-white px-8">
                            {item}
                        </span>
                        {/* Decorative separator */}
                        <div className="h-2 w-2 md:h-3 md:w-3 bg-black rounded-full mx-4" />
                    </div>
                ))}
            </div>

            {/* Glassmorphism Overlays for the edges */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
    );
};

export default MarqueeBanner;