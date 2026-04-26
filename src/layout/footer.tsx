"use client";

import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, ArrowUpRight } from "lucide-react";
import AsciiImage from '@/components/ascii-image';

const ZenFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        /* 1. Added a min-height to ensure the footer has shape for the background to fill */
        <footer className="relative bg-black min-h-[60vh] py-24 px-5 md:px-20 overflow-hidden border-t border-white/10 flex items-center">
            
            {/* 2. FULL COVER ASCII IMAGE BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <AsciiImage
                    src="/images/earth.jpg"
                    /* Increasing width dramatically handles the "cover" aspect by generating more ASCII characters */
                    width={130} 
                    className="absolute min-w-full min-h-full -rotate-90 object-cover text-[1vw]
                sm:text-[1.2vw]
                lg:text-[0.5vw]  font-mono md:text-[5px] leading-none select-none opacity-50"
                />
            </div>

            {/* 4. Ensure content stays above the background */}
            <div className="max-w-6xl mx-auto z-20 relative w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

                    {/* LEFT: System Identity */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            {/* <div className="flex items-center gap-2 text-white font-jet text-sm uppercase">
                                <span className="w-2 h-2 bg-white animate-pulse rounded-full" />
                                System Connection: Active
                            </div> */}
                            <h2 className="text-7xl font-host font-bold text-white tracking-tighter uppercase leading-none">
                                Ayush<span className="text-red-600 ml-3">.</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-white font-inter text-lg max-w-[500px] leading-relaxed">
                                Crafting robust digital interfaces where high-performance logic meets aesthetic obsession.
                            </p>
                            <div className="flex gap-4">
                                {[
                                    { icon: <GithubIcon size={16} />, href: "#" },
                                    { icon: <TwitterIcon size={16} />, href: "#" },
                                    { icon: <LinkedinIcon size={16} />, href: "#" }
                                ].map((social, i) => (
                                    <a key={i} href={social.href} className="p-2 bg-red-600 rounded-full text-black hover:bg-white hover:text-black transition-all duration-300">
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Navigation & Meta */}
                    <div className="flex flex-col items-start md:items-end gap-12 w-full md:w-auto">
                        <nav className="grid grid-cols-2 md:flex gap-x-12 gap-y-4">
                            {['Work', 'About', 'Contact', 'Archive'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="group flex items-center gap-1 text-sm hover:underline uppercase text-white font-host font-bold hover:text-red-200 transition-colors duration-300"
                                >
                                    {item}
                                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            ))}
                        </nav>

                        <div className="flex flex-col items-start md:items-end gap-4 font-jet">
                            <div className="h-[1px] w-full md:w-40 bg-white/20" />
                            <div className="flex flex-col md:items-end gap-1">
                                <span className="text-white text-sm font-bold uppercase tracking-tighter">
                                    © {currentYear} Ayush Shrestha — All Rights Reserved
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ZenFooter;