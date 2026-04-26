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
        role: "TEAM LEAD",
        company: "LANGQUANG",
        period: "2026 - Present",
        description: "Led the AI & Product department, managing a team of 4–5 developers while owning the full project lifecycle from client communication to delivery. Architected and shipped AI-integrated SaaS products,  designing RAG pipelines, LLM workflows, and agentic systems. Acted as the bridge between clients and engineering, translating requirements into scalable product decisions.",
        tech: [
            "Langchain",
            "LangGraph",
            "LangSmith",
            "RAG",
            "Pinecone",
            "ChromaDB",
            "OpenAI API",
            "Anthropic Claude",
            "Ollama",
            "Supabase pgvector",
            "FastAPI",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Docker",
            "Redis",
            "Weights & Biases",
            "Prompt Versioning",
        ]
    },
    {
        id: "02",
        role: "FULL STACK DEVELOPER",
        company: "LQ DIGITAL PVT LTD",
        period: "2025 - 2026",
        description: "Designed and developed websites and full-stack web applications for clients across industries. Built RESTful APIs and GraphQL, handled database design, and collaborated closely with designers to deliver responsive, pixel-perfect interfaces. Took projects from wireframe to deployment.",
        tech: [
            "React",
            "Next.js",
            "Django",
            "PostgreSQL",
            "TypeScript",
            "Docker",
            "GraphQL",
            "REST APIs",
        ]
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
        <section ref={containerRef} className="relative z-20 min-h-screen w-full bg-red-600  overflow-hidden py-20">

            {/* --- Background ASCII & Text --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 z-0">
                <h2 ref={bgTextRef} className="text-[17vw] text-white font-host font-bold whitespace-nowrap select-none">
                    EXPERIENCE
                </h2>
            </div>

            <div className="absolute -top-30 left-0 pointer-events-none  hidden lg:block">
                <AsciiImage src="/images/bw_hands.jpg" width={120} className="text-black/50 text-[10px]" />
            </div>

            {/* --- Content --- */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-24 space-y-4">
                    <h2 className="text-[3rem] md:text-[6rem] text-black uppercase font-host font-bold tracking-tighter leading-none">
                        Work <br />
                        <span className="text-white">Timeline .</span>
                    </h2>
                </div>

                {/* Experience List */}
                <div className="space-y-0 border-t border-white/10">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card group grid grid-cols-1 lg:grid-cols-12 py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4">

                            {/* Period */}
                            <div className="lg:col-span-3 mb-4 lg:mb-0">
                                <div className="flex items-center gap-2 text-white font-jet text-sm uppercase tracking-widest">
                                    <Calendar size={14} className="text-white" />
                                    {exp.period}
                                </div>
                            </div>

                            {/* Main Info */}
                            <div className="lg:col-span-6 space-y-4">
                                <h3 className="text-3xl md:text-4xl text-black font-host font-bold group-hover:translate-x-2 transition-transform duration-500">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-2 text-white font-bold font-inter text-lg">
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                </div>
                                <p className="text-white font-inter leading-relaxed max-w-xl text-sm md:text-base">
                                    {exp.description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="lg:col-span-3 flex flex-wrap gap-2 content-start mt-6 lg:mt-0 lg:justify-end">
                                {exp.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-[10px] font-jet uppercase tracking-widest text-white bg-red-500 border border-red-600 rounded-full ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer status */}
                <div className="mt-20 flex items-center justify-between text-[10px] font-jet text-white uppercase">
                    <span>End_of_Log</span>
                    <Terminal size={14} />
                    <span>User: Ayush_Shrestha</span>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;