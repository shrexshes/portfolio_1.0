"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const percentageRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(true);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setShow(false);
                    document.body.style.overflow = "auto";
                },
            });

            document.body.style.overflow = "hidden";

            const counter = { value: 0 };

            tl.to(counter, {
                value: 100,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                    if (percentageRef.current) {
                        percentageRef.current.textContent = `loading ${Math.round(counter.value)}%`;
                    }
                },
            });

            tl.to(percentageRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
            });

            tl.to(".shutter-top", {
            yPercent: -100,
            duration: 1.5,
            ease: "power4.inOut",
            onStart: () => {
                window.dispatchEvent(new Event("loaderFinished"));
            }
        }, "-=0.2");

        tl.to(".shutter-bottom", {
            yPercent: 100,
            duration: 1.5,
            ease: "power4.inOut",
        }, "<");

            tl.to(containerRef.current, {
                display: "none",
                duration: 0
            });
        },
        { scope: containerRef }
    );

    if (!show) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col pointer-events-none"
        >
            {/* Top Shutter */}
            <div className="shutter-top relative w-full h-[50vh] bg-red-700 pointer-events-auto flex items-end justify-center overflow-hidden">
                {/* Optional visual noise or texture could go here */}
            </div>

            {/* Bottom Shutter */}
            <div className="shutter-bottom relative w-full h-[50vh] bg-red-700 pointer-events-auto flex items-start justify-center overflow-hidden">
            </div>

            {/* Centered Percentage - Absolute positioned to be strictly in middle */}
            <div className="absolute inset-0 z-50 flex items-center justify-center ">
                <h1
                    className="text-3xl font-bold text-white font-host tracking-tighter"
                >
                    <span className="loader-text">
                        <span ref={percentageRef}>loading 0%</span>
                    </span>
                </h1>
            </div>
        </div>
    );
}
