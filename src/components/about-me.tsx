"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AsciiImage from "./ascii-image";
import TextReveal from "./text-reveal";
import Image from "next/image";
import { Code, Hammer } from "lucide-react";

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
            className="relative min-h-screen w-full bg-neutral-900/90 flex items-center justify-center overflow-hidden py-24"
        >
            <AsciiImage src="/images/sword.jpg" width={100} className="absolute z-0  bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 opacity-80" />

            {/* --- Background Parallax Layer --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
                <h2
                    ref={bgText}
                    className="text-[20vw] font-bold text-white font-jet leading-none whitespace-nowrap select-none"
                    style={{ willChange: "transform" }}
                >
                    ABOUT ME
                </h2>
            </div>

            {/* --- Main Content Grid --- */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8 order-2 md:order-1">
                    <TextReveal>
                        <h3 className="text-4xl md:text-5xl font-bold text-white font-jet">
                            Beyond the <span className="text-neutral-500">Lines of Code</span>
                        </h3>
                    </TextReveal>

                    <div className="space-y-6 font-jet text-lg text-neutral-400 leading-relaxed placeholder-opacity-80">
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
                            <button className="px-6 py-3 border border-neutral-700 text-white font-jet text-sm hover:bg-white hover:text-black transition-colors duration-300">
                                READ MORE
                            </button>
                        </TextReveal>
                    </div>
                </div>

                {/* Visual Content (Parallaxed) */}
                <div
                    ref={imageAndShapes}
                    className="relative order-1 md:order-2 flex justify-center md:justify-end"
                >
                    {/* Abstract Composition */}
                    <div className="relative w-full max-w-md backdroop-blur-md aspect-[5/5] bg-neutral-600/80 border border-neutral-800 overflow-hidden">
                        {/* Grid Decoration */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        {/* Floating box example */}
                        <div className="absolute top-0 -right-12 w-40 h-40 bg-white mix-blend-overlay opacity-90 blur-2xl rounded-full"></div>
                        <div className="absolute bottom-0 -left-12 w-40 h-40 bg-neutral-100 mix-blend-overlay opacity-90 blur-2xl rounded-full"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image src='/images/face.png' className="w-full" alt="Face" width={600} height={600} />
                        </div>
                    </div>

                    {/* Accent Overlay Box */}
                    <div className="absolute -bottom-6 -left-6 w-[50%] bg-radial from-neutral-700 to-neutral-500 py-5 border border-neutral-700 z-20 flex items-center justify-center ">
                        <h3 className="text-sm px-5 md:text-medium text-neutral-200 tracking-tighter font-jet">
                            I like to build <Hammer className="inline mx-1 mb-1 animate-bounce" size={16} /> stuffs that work. <Code className="inline mx-1 mb-1 animate-pulse" size={16} />
                        </h3>
                        {/* <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> */}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;