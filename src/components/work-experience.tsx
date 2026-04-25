"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, Terminal } from "lucide-react";
import AsciiImage from "./ascii-image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
    {
        id: "01",
        role: "AI TEAM LEAD",
        company: "LQ DIGITAL PVT LTD",
        period: "2026 - Present",
        description: "Spearheaded the migration of legacy architecture to Next.js, improving load times by 45%. Implemented a custom design system using Tailwind CSS.",
        tech: ["React", "Next.js", "TypeScript", "GSAP"]
    },
    {
        id: "02",
        role: "FULL STACK DEVELOPER",
        company: "LQ DIGITAL PVT LTD",
        period: "2025 - 2026",
        description: "Built scalable RESTful APIs and managed database optimizations. Collaborated with UX teams to deliver pixel-perfect responsive interfaces.",
        tech: ["Node.js", "PostgreSQL", "React", "AWS"]
    },
];

const WorkExperience = () => {
    const containerRef = useRef<HTMLElement>(null);
    const bgTextRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });

        tl.to(bgTextRef.current, { y: 150, ease: "none" }, 0);

        gsap.from(".experience-card", {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power4.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-red-600 text-white overflow-hidden py-32">
            
            {/* --- Background ASCII & Text --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 z-0">
                <h2 ref={bgTextRef} className="text-[25vw] font-host font-bold whitespace-nowrap select-none">
                    EXPERIENCE
                </h2>
            </div>
            
            <div className="absolute right-[-10%] top-1/4 opacity-10 pointer-events-none hidden lg:block">
                <AsciiImage src="/images/mac.png" width={80} className="text-white" />
            </div>

            {/* --- Content --- */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-24 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-12 bg-white/30" />
                        <span className="font-mono text-xs tracking-[0.4em] text-white/50 uppercase">History_Log</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-host font-bold tracking-tighter leading-none">
                        Work <br />
                        <span className="text-white/20 italic">Timeline.</span>
                    </h2>
                </div>

                {/* Experience List */}
                <div className="space-y-0 border-t border-white/10">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card group grid grid-cols-1 lg:grid-cols-12 py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4">
                            
                            {/* Period */}
                            <div className="lg:col-span-3 mb-4 lg:mb-0">
                                <div className="flex items-center gap-2 text-white/40 font-mono text-sm uppercase tracking-widest">
                                    <Calendar size={14} className="text-white/20" />
                                    {exp.period}
                                </div>
                            </div>

                            {/* Main Info */}
                            <div className="lg:col-span-6 space-y-4">
                                <h3 className="text-3xl md:text-4xl font-host font-bold group-hover:translate-x-2 transition-transform duration-500">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-2 text-white/60 font-inter text-lg">
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                </div>
                                <p className="text-white/40 font-inter leading-relaxed max-w-xl text-sm md:text-base">
                                    {exp.description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="lg:col-span-3 flex flex-wrap gap-2 content-start mt-6 lg:mt-0 lg:justify-end">
                                {exp.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/40 border border-white/10 rounded-full group-hover:border-white/30 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer status */}
                <div className="mt-20 flex items-center justify-between text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
                    <span>End_of_Log</span>
                    <Terminal size={14} />
                    <span>User: Ayush_Shrestha</span>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;