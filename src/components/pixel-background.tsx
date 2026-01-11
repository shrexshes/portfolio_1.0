"use client";

import React, { useEffect, useRef } from "react";

const PixelBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number; y: number; life: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const GAP = 0; // Gap between pixels
        const SIZE = 40; // Pixel size
        const SPEED = 0.05; // Fade speed

        const getThemeColors = () => {
            const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return {
                pixelColor: isDark ? "255, 255, 255" : "0, 0, 0",
                gridColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
            };
        };

        const drawGrid = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            const { pixelColor, gridColor } = getThemeColors();

            // Draw base grid (subtle)
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;

            for (let x = 0; x < canvas.width; x += SIZE + GAP) {
                for (let y = 0; y < canvas.height; y += SIZE + GAP) {
                    ctx.strokeRect(x, y, SIZE, SIZE);
                }
            }

            // Draw active particles (pixels)
            particles.forEach((p, index) => {
                const gridX = Math.floor(p.x / (SIZE + GAP)) * (SIZE + GAP);
                const gridY = Math.floor(p.y / (SIZE + GAP)) * (SIZE + GAP);

                ctx.fillStyle = `rgba(${pixelColor}, ${p.life})`;

                ctx.fillRect(gridX, gridY, SIZE, SIZE);
                p.life -= SPEED;

                if (p.life <= 0) {
                    particles.splice(index, 1);
                }
            });
        };

        const animate = () => {
            drawGrid();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Add a new particle at mouse position
            // We can add multiple for a trail effect or scatter
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (Math.random() > 0.5) {
                particles.push({
                    x: x,
                    y: y,
                    life: 1.0,
                });
            }
        };

        animate();
        // Use canvas specific event for better coordinate handling relative to canvas
        // But since it's full screen fixed/absolute, window is fine.
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
};

export default PixelBackground;
