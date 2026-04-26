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
            <div className="shutter-top relative w-full h-[50vh] bg-red-600 pointer-events-auto flex items-end justify-center overflow-hidden border-b border-white/5">
                {/* Top Right Spinner */}
                <div className="absolute top-10 right-10 flex items-center gap-3">
                    <span className="text-[10px] font-host text-white uppercase">establishing connection</span>
                    <div className="w-4 h-4 border-3 border-white border-t-white/20 rounded-full animate-spin"></div>
                </div>
                <div className="text-xs md:text-lg mb-10 font-host font-bold text-white uppercase  px-5">
                Ayush Shrestha's Portfolio © {new Date().getFullYear()} / Global

                </div>
            </div>

            {/* Bottom Shutter */}
            <div className="shutter-bottom relative w-full h-[50vh] bg-red-600 pointer-events-auto flex items-start justify-center overflow-hidden">
                {/* Bottom Left Info */}
                <div className="absolute bottom-10 left-10 flex flex-col gap-1">
                     <div className="text-[10px] font-host text-white uppercase ">Type: Portfolio_Core_v1</div>
                </div>
                
                {/* Bottom Right Copyright/Design */}
                <div className="absolute bottom-10 right-10 text-[10px] font-host text-white uppercase">
                    © {new Date().getFullYear()} / Global
                </div>
            </div>

            {/* Centered Content */}
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-2">
                
                <h1 className="text-2xl md:text-6xl font-bold text-white uppercase font-host tracking-tighter">
                    <span className="loader-text">
                        <span ref={percentageRef}>loading 0%</span>
                    </span>
                </h1>
            </div>
        </div>
    );
}