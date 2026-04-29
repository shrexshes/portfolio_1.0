"use client";

import React, { useEffect, useState, useMemo } from "react";
import { imageToAscii } from "@/utils/ascii";

interface AsciiImageProps {
    src: string;
    width?: number;
    className?: string;
    chars?: string;
}

const AsciiImage: React.FC<AsciiImageProps> = ({
    src,
    width = 100,
    className = "",
    chars = " .:-=+*#%@"
}) => {
    const [ascii, setAscii] = useState<string>("");
    
    const cacheKey = useMemo(() => `ascii-cache-${src}-${width}-${chars}`, [src, width, chars]);

    useEffect(() => {
        let mounted = true;

        const cachedArt = sessionStorage.getItem(cacheKey);
        if (cachedArt) {
            setAscii(cachedArt);
            return;
        }

        imageToAscii(src, width, chars)
            .then((art) => {
                if (mounted) {
                    setAscii(art);
                    try {
                        sessionStorage.setItem(cacheKey, art);
                    } catch (e) {
                        console.warn("Storage full, skipping cache.");
                    }
                }
            })
            .catch((err) => {
                console.error("Failed to convert image to ASCII:", err);
            });

        return () => {
            mounted = false;
        };
    }, [src, width, chars, cacheKey]);

    if (!ascii) return <div className={className} style={{ width: `${width}ch` }} />;

    return (
        <pre
            className={`font-mono text-center leading-[0.6] whitespace-pre overflow-hidden select-none will-change-contents ${className}`}
            style={{ fontVariantLigatures: "none" }}
        >
            {ascii}
        </pre>
    );
};

export default React.memo(AsciiImage);