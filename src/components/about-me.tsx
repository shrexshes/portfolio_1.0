"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AsciiImage from "./ascii-image";
import TextReveal from "./text-reveal";
import Image from "next/image";
import { Code, Hammer } from "lucide-react";
import FirefliesBackground from "./fireflies-background";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const container = useRef<HTMLDivElement>(null);
    const bgText = useRef<HTMLHeadingElement>(null);
    const imageAndShapes = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2, // Smooth scrubbing
            },
        });

        // Background Text Moves Slower (Parallax Depth)
        tl.to(bgText.current, {
            y: 300,
            ease: "none",
        }, 0);

        // Image/Shapes Move Faster (foreground effect)
        tl.to(imageAndShapes.current, {
            y: -150,
            ease: "none",
        }, 0);

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden py-24"
        >
            <FirefliesBackground />
            <AsciiImage src="/images/lady.jpg" width={80} className="absolute z-0 top-0 left-0 transform opacity-80" />

            {/* --- Background Parallax Layer --- */}
            <div className="absolute top-0 inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
                <h2
                    ref={bgText}
                    className="text-[20vw] font-bold text-white font-jet leading-none whitespace-nowrap select-none"
                    style={{ willChange: "transform" }}
                >
                    ABOUT ME
                </h2>
            </div>

            {/* --- Main Content Grid --- */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

                {/* Text Content */}
                <div className="space-y-8  flex flex-col items-end justify-end ">
                    <TextReveal>
                        <h3 className="text-4xl text-left w-[60%] md:text-5xl font-bold text-white font-inter">
                            Beyond the <span className="text-slate-300">Lines of Code</span>
                        </h3>
                    </TextReveal>

                    <div className="space-y-6 w-[50%] font-jet text-lg text-slate-400 leading-relaxed placeholder-opacity-80">
                        <TextReveal delay={0.2}>
                            <p>
                                I don't just write code; I craft digital experiences. My journey started with a curiosity for how things work, evolving into a passion for building robust, scalable, and beautiful applications.
                            </p>
                        </TextReveal>
                        <TextReveal delay={0.4}>
                            <p>
                                When I'm not debugging or optimizing performance, you can find me exploring new design trends or contributing to open source. I believe in the perfect blend of logic and creativity.
                            </p>
                        </TextReveal>
                    </div>

                    <div className="pt-4">
                        <TextReveal delay={0.6}>
                            <button className="px-6 py-3 border border-slate-700 text-white font-jet text-sm hover:bg-white hover:text-black transition-colors duration-300">
                                READ MORE
                            </button>
                        </TextReveal>
                    </div>
                </div>

                {/* Visual Content (Parallaxed) */}
                
            </div>
        </section>
    );
};

export default AboutMe;