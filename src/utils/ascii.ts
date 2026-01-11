export const imageToAscii = (
    imageUrl: string,
    width: number = 100,
    chars: string = " .:-=+*#%@"
): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // Allow loading images from other domains
        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) {
                reject("Could not get 2D context");
                return;
            }

            // Calculate height to maintain aspect ratio
            // Note: ASCII characters are usually about twice as tall as they are wide.
            // So we scale the height by 0.5 to make it look right.
            const aspectRatio = img.height / img.width;
            const height = Math.floor(width * aspectRatio * 1);

            canvas.width = width;
            canvas.height = height;

            // Draw image to small canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Get pixel data
            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;

            let asciiStr = "";

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                // const a = data[i + 3]; // Alpha - could use for transparency

                // Convert to grayscale/brightness
                const avg = (r + g + b) / 3;

                // Map byte (0-255) to char index
                const charIndex = Math.floor((avg / 255) * (chars.length - 1));

                asciiStr += chars[charIndex];

                // New line at end of row
                if (((i / 4) + 1) % width === 0) {
                    asciiStr += "\n";
                }
            }

            resolve(asciiStr);
        };

        img.onerror = (err) => {
            reject(err);
        };
    });
};
