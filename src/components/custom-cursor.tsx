'use client'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // quickSetter is the secret sauce for performance
    // it returns a function that optimizedly updates the property
    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");

    // Use a slightly larger duration or 'quickTo' if you want a "trail" effect
    // But for a responsive feel, we just want optimized updates
    const moveCursor = (e: MouseEvent) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
    }

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 4,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgb(255, 255, 255)",
        duration: 0.3,
        ease: "power2.out"
      })
    }

    window.addEventListener("mousemove", moveCursor);

    // Target hoverables
    const hoverables = document.querySelectorAll('a, button, .cursor-pointer');
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      // Added will-change-transform for hardware acceleration
      style={{ willChange: "transform" }}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    />
  )
}

export default CustomCursor