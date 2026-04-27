"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, ShieldCheck, Zap, Code2 } from "lucide-react";
import AsciiImage from "./ascii-image";
import TextReveal from "./text-reveal";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
    const container = useRef<HTMLDivElement>(null);
    const bgText = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });

        tl.to(bgText.current, { y: 250, ease: "none" }, 0);
    }, { scope: container });

    const principles = [
        { title: "Precision (शुद्धता)", desc: "No room for 'good enough'. Pixel-perfect and bug-free." },
        { title: "Performance (कार्यक्षमता)", desc: "Optimized for speed. Every millisecond matters." },
        { title: "Scalability (स्केलेबिलिटी)", desc: "Architecture that grows with the user base." },
    ];

    return (
        <section
            ref={container}
            className="relative z-20 min-h-screen w-full bg-red-600 flex flex-col overflow-hidden py-20"
        >

            <div className=" z-10 w-full max-w-6xl mx-auto px-5">
                {/* Header Section */}
                <div className="my-20">
                    <TextReveal>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-black font-host leading-[0.8]">
                            Ayush <br />
                            <span className="text-white">Shrestha</span>
                        </h1>
                    </TextReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Bio & Principles */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <TextReveal delay={0.2}>
                                <p className="font-inter text-lg md:text-2xl text-white leading-tight">
                                    I am a Full Stack Developer and AI Architect based in the digital ether.
                                    I specialize in turning complex problems into elegant, high-performance software.
                                </p>
                            </TextReveal>
                            <TextReveal delay={0.3}>
                                <p className="font-inter text-lg md:text-2xl text-black max-w-xl">
                                    Currently leading the AI & Product department at LangQuang,
                                    I bridge the gap between heavy-duty engineering and intuitive user experience.
                                    I don't just write code; I architect solutions that scale.
                                </p>
                            </TextReveal>
                        </div>

                        {/* Principles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-black/10">
                            {principles.map((p, i) => (
                                <div key={i} className="space-y-3">
                                    <h4 className="font-host font-bold text-white uppercase whitespace-pre-wrap md:max-w-[4rem] text-lg">{p.title}</h4>
                                    <p className="font-inter text-medium text-black leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Brutalist Metadata & Visual */}
                    <div className="lg:col-span-5 flex flex-col items-end justify-center ">

                        {/* Large Vertical Labels */}
                        <div className="flex flex-col gap-12 text-right">
                            <div className="space-y-1">
                                <p className="font-jet text-lg font-bold text-black uppercase">Location_Origin</p>
                                <h4 className="font-host text-3xl md:text-5xl font-bold text-white uppercase leading-none">Nepal</h4>
                            </div>

                            <div className="space-y-1">
                                <p className="font-jet text-lg font-bold text-black uppercase">Core_Specialization</p>
                                <h4 className="font-host text-3xl md:text-5xl font-bold text-black uppercase leading-none">AI & RAG</h4>
                            </div>

                            <div className="space-y-1">
                                <p className="font-jet text-lg font-bold text-black  uppercase">Current_Mode</p>
                                <h4 className="font-host text-3xl md:text-5xl font-bold text-white uppercase leading-none italic animate-pulse">Evolving</h4>
                            </div>
                        </div>

                        {/* Overlapping Ascii Element */}
                        <div className="absolute -bottom-40 lg:-right-0 pointer-events-none opacity-80 mix-blend-overlay">
                            <AsciiImage
                                src="/images/eye.jpg"
                                width={180}
                                className="text-white text-[1vw] lg:text-[0.5vw]"
                            />
                        </div>

                        {/* Decorative Line Trace */}
                        <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-black"></div>
                    </div>
                </div>

                {/* Footer Status */}
                <div className="mt-24 pt-8 border-t border-black/10 flex items-center justify-between text-[10px] font-jet text-black/60 uppercase">
                    <div className="flex items-center gap-4">
                        <span>PRM_TYPE: HUMAN_DEV</span>
                        <span>UID: 001-AS</span>
                    </div>
                    <Terminal size={14} />
                </div>
            </div>
        </section>
    );
};

export default AboutPage;