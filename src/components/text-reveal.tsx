"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

const TextReveal = ({ children, className = "", delay = 0, duration = 0.8 }: TextRevealProps) => {
    const el = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!el.current) return;

        gsap.fromTo(el.current,
            {
                y: 50,
                opacity: 0,
                filter: "blur(10px)"
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: duration,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el.current,
                    start: "top 85%", // Triggers when top of element hits 85% viewport height
                    toggleActions: "play none none reverse" // Reverses when scrolling back up
                }
            }
        );
    }, { scope: el });

    return (
        <div ref={el} className={className}>
            {children}
        </div>
    );
}

export default TextReveal;
