'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

export default function HeroCanvasAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Configuration
    const frameCount = 40;
    const frameInterval = 1;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Smooth out the scroll value
    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const frameIndex = useTransform(
        smoothScrollProgress,
        [0, 1],
        [1, frameCount]
    );

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 1; i <= frameCount; i += frameInterval) {
                const img = new Image();
                // Updated to match ezgif-frame-001.jpg convention
                const frameName = i.toString().padStart(3, '0');
                img.src = `/frames/ezgif-frame-${frameName}.jpg`;
                promises.push(new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if some frames fail
                }));
                loadedImages[i] = img;
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        preloadImages();
    }, []);

    // Draw logic
    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const context = canvasRef.current.getContext('2d');
        if (!context) return;

        const render = (index: number) => {
            const imgIndex = Math.floor(index);
            const img = images[imgIndex] || images[1];

            if (img && img.complete) {
                const canvas = canvasRef.current!;
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio);
                const centerShiftX = (canvas.width - img.width * ratio) / 2;
                const centerShiftY = (canvas.height - img.height * ratio) / 2;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
                );
            }
        };

        const unsubscribe = frameIndex.on('change', (latest) => {
            render(latest);
        });

        // Initial render
        render(1);

        // Handle resize
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                render(frameIndex.get());
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [images, isLoaded, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-revjet-bg-primary">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full object-cover"
                />

                {/* Anti-gravity overlay text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center z-10"
                    >
                        <h1 className="text-8xl md:text-9xl font-display font-bold text-white tracking-tighter text-glow">
                            RevJet
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl text-revjet-text-secondary font-medium tracking-wide uppercase">
                            Where revenue systems become frictionless engines
                        </p>
                    </motion.div>

                    {/* Subtle floating nodes (particles) simulation with Framer Motion */}
                    <div className="absolute inset-0 z-0">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-revjet-accent/50 rounded-full"
                                animate={{
                                    y: [-20, -100],
                                    opacity: [0, 0.8, 0],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                    ease: "linear",
                                }}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    bottom: `${Math.random() * 20}%`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
