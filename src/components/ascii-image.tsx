"use client";

import React, { useEffect, useState } from "react";
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
    chars
}) => {
    const [ascii, setAscii] = useState<string>("");

    useEffect(() => {
        let mounted = true;

        // Default dotted characters if none provided
        // These characters give a nice dotted/stippled effect
        const density = chars || " .:-=+*#%@";

        imageToAscii(src, width, density)
            .then((art) => {
                if (mounted) setAscii(art);
            })
            .catch((err) => {
                console.error("Failed to convert image to ASCII:", err);
            });

        return () => {
            mounted = false;
        };
    }, [src, width, chars]);

    return (
        <pre
            className={`font-mono text-[10px] leading-[0.6] whitespace-pre overflow-hidden select-none ${className}`}
        >
            {ascii}
        </pre>
    );
};

export default AsciiImage;
