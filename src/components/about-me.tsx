"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AsciiImage from "./ascii-image";
import TextReveal from "./text-reveal";
import { MoveRight } from "lucide-react";
import FirefliesBackground from "./fireflies-background";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const AboutMe = () => {
    const container = useRef<HTMLDivElement>(null);
    const bgText = useRef<HTMLHeadingElement>(null);
    const visualContent = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });

        // Parallax: Background text moves down
        tl.to(bgText.current, { y: 200, ease: "none" }, 0);

        // Parallax: Visual elements move up
        tl.to(visualContent.current, { y: -100, ease: "none" }, 0);

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative z-20 min-h-screen w-full bg-red-600 flex items-center overflow-hidden py-24"
        >
            <FirefliesBackground />

            {/* --- Background Parallax Layer --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <h2
                    ref={bgText}
                    className="text-[17vw] font-bold text-black/10 font-host leading-none whitespace-nowrap select-none"
                    style={{ willChange: "transform" }}
                >
                    ABOUT ME
                </h2>
            </div>

            {/* --- Main Content Layout --- */}
            <div className=" z-10 w-full max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 items-center">

                    <div ref={visualContent} className="relative w-full flex justify-center items-center py-10 lg:py-0">
                        <div className="w-full max-w-full overflow-hidden flex justify-center">
                            <AsciiImage
                                src="/images/mac.png"
                                width={120}
                                className="
                text-white 
                /* Responsive font-size specifically for this section */
                text-[1.5vw]     /* Mobile: Large enough to see */
                sm:text-[1.2vw]  /* Tablet */
                lg:text-[0.5vw]  /* Desktop: Small enough to look sharp */
                transition-all duration-300
            "
                            />
                        </div>

                        {/* Decorative Tag */}
                        <div className="absolute bottom-4 left-4 lg:-left-6 bg-white text-black px-3 py-1 md:px-4 md:py-2 font-jet text-[10px] md:text-xs">
                            Fetch Success | 200 OK
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-4">
                            <TextReveal>
                                <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white font-host leading-[1]">
                                  Built   <br />
                                    <span className="text-black">Different</span>
                                </h3>
                            </TextReveal>
                        </div>

                        <div className="space-y-6 max-w-xl">
                            <TextReveal delay={0.2}>
                                <p className="font-inter text-lg md:text-xl text-white leading-relaxed">
                                    I build software the way most people only talk about,  end to end, detail obsessed, no shortcuts. Frontend that feels alive, backends built to last, AI that solves real problems. Full stack isn't a title for me, it's just how my brain works.
                                </p>
                            </TextReveal>

                            <TextReveal delay={0.4}>
                                <p className="font-inter text-lg md:text-xl text-white leading-relaxed">
                                  Perfectionism isn't a flaw I'm working on. It's the reason the products I build are worth using.
                                </p>
                            </TextReveal>
                        </div>

                        {/* <div className="pt-6">
                            <TextReveal delay={0.6}>
                                <button className="group flex items-center gap-4 px-8 py-4 bg-white text-red-600 font-jet-mono text-sm font-bold hover:bg-black hover:text-white transition-all duration-500">
                                    Visit Linked in
                                    <MoveRight className="group-hover:translate-x-2 transition-transform" size={18} />
                                </button>
                            </TextReveal>
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;