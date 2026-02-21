import React, { useRef, useEffect } from 'react';

const FirefliesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        const fireflies = [];
        const count = 100;

        for (let i = 0; i < count; i++) {
            fireflies.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                ang: Math.random() * 2 * Math.PI,
                v: Math.random() * 0.2 + 0.1,
                opacity: Math.random() * 0.5 + 0.2,
                size: Math.random() * 1.5 + 0.5,
                targetOpacity: Math.random() * 0.5 + 0.2,
                blinkSpeed: Math.random() * 0.01 + 0.005
            });
        }

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            fireflies.forEach(f => {
                // Movement
                f.x += Math.cos(f.ang) * f.v;
                f.y += Math.sin(f.ang) * f.v;
                f.ang += (Math.random() - 0.5) * 0.05;

                // Wrap around edges
                if (f.x < -10) f.x = canvas.width + 10;
                if (f.x > canvas.width + 10) f.x = -10;
                if (f.y < -10) f.y = canvas.height + 10;
                if (f.y > canvas.height + 10) f.y = -10;

                // Simple glow effect
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);

                // Pulsate opacity
                if (Math.abs(f.opacity - f.targetOpacity) < 0.01) {
                    f.targetOpacity = Math.random() * 0.6 + 0.1;
                }
                f.opacity += (f.targetOpacity - f.opacity) * f.blinkSpeed;

                const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 4);
                gradient.addColorStop(0, `rgba(255, 255, 180, ${f.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 100, ${f.opacity * 0.4})`);
                gradient.addColorStop(1, `rgba(255, 255, 100, 0)`);

                ctx.fillStyle = gradient;
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default FirefliesBackground;
