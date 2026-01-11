"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, ChevronRight, Terminal } from "lucide-react";
import AsciiImage from "./ascii-image";

gsap.registerPlugin(ScrollTrigger);

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
        role: "Full Stack Developer",
        company: "LQ DIGITAL PVT LTD",
        period: "2025 - 2026",
        description: "Built scalable RESTful APIs and managed database optimizations. Collaborated with UX teams to deliver pixel-perfect responsive interfaces.",
        tech: ["Node.js", "PostgreSQL", "React", "AWS"]
    },
    
];

const WorkExperience = () => {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Title Animation
        tl.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Experience Items Animation
        tl.from(".experience-card", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.5");

        // Sidebar Animation
        tl.from(".work-sidebar", {
            x: -20,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }, 0.5);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-neutral-900/90 text-white overflow-hidden py-24 selection:bg-neutral-500/30">

            {/* --- Background Elements --- */}
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none"></div>

            {/* Radial Spotlight */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

            {/* --- Sidebar Decorations --- */}
            <div className="work-sidebar absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-start text-neutral-400 font-jet text-xs pointer-events-none z-30">
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
                <div className="writing-vertical-rl opacity-60 tracking-widest uppercase">
                    Career Log
                </div>
                <div className="flex flex-col gap-2 font-jet text-[10px] opacity-70">
                    <Terminal size={14} />
                    <span>LOG_V.2.0</span>
                </div>
                <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-neutral-100 opacity-30"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-neutral-100 opacity-30"></div>


            {/* --- Main Content --- */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-16">

                {/* Section Header */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-neutral-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
                        </span>
                        <span className="font-jet text-neutral-400 text-sm tracking-wider">CAREER_PATH</span>
                    </div>
                    <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold font-jet tracking-tighter">
                        Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Experience</span>
                    </h2>
                </div>

                {/* Experience Grid/List */}
                <div className="flex flex-col gap-8">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card group relative p-6 md:p-8 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-500">
                            {/* Hover Accent */}
                            <div className="absolute left-0 top-0 w-[1px] h-0 bg-white group-hover:h-full transition-all duration-500 ease-in-out"></div>

                            <div className="flex flex-col md:flex-row gap-6 md:justify-between md:items-start">
                                {/* Left: Role & Company */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="font-jet text-xs text-neutral-500">#{exp.id}</span>
                                        <h3 className="text-xl md:text-2xl font-bold font-jet text-white group-hover:text-neutral-200 transition-colors">
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-neutral-400 font-jet text-sm">
                                        <Briefcase size={14} />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>

                                {/* Right: Date */}
                                <div className="flex items-center gap-2 text-neutral-500 font-jet text-xs bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700/50">
                                    <Calendar size={12} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-6 text-neutral-400 font-jet text-sm leading-relaxed max-w-3xl border-l border-neutral-800 pl-4">
                                {exp.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {exp.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-[10px] font-jet uppercase tracking-wider text-neutral-400 border border-neutral-800 rounded-sm hover:border-neutral-600 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Arrow Decoration */}
                            <div className="absolute right-6 bottom-6 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-neutral-500">
                                <ChevronRight size={20} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WorkExperience;
