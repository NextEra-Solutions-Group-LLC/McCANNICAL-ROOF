"use client"
import { useEffect, useRef, useState } from "react";

type Project = {
    title: string;
    subtitle: string;
    src: string;
};

// Swap these `src` values for real project photos — kept as placeholders for now.
const projects: Project[] = [
    { title: "Residential Reroof", subtitle: "Cedar Park, TX", src: "https://i.ibb.co.com/qYKnkLSr/image.png" },
    { title: "Storm Damage Repair", subtitle: "Round Rock, TX", src: "https://i.ibb.co.com/QjdbMZS3/image.png" },
    { title: "Commercial Flat Roof", subtitle: "Austin, TX", src: "https://i.ibb.co.com/JFH5x44F/image.png" },
    { title: "Gutter Replacement", subtitle: "Leander, TX", src: "https://i.ibb.co.com/yFRsg8Ws/image.png" },
    { title: "Lakefront Home Roof", subtitle: "Lakeway, TX", src: "https://i.ibb.co.com/d0SqzjqG/image.png" },
    { title: "Custom Fencing", subtitle: "Liberty Hill, TX", src: "https://i.ibb.co.com/Lh6z244H/image.png" },
    { title: "Full Tear-Off & Reroof", subtitle: "Georgetown, TX", src: "https://i.ibb.co.com/zTwBWNC3/image.png" },
    { title: "Emergency Tarping", subtitle: "Brushy Creek, TX", src: "https://i.ibb.co.com/0RB9z683/image.png" },
    { title: "Luxury Home Exterior", subtitle: "Barton Creek, TX", src: "https://i.ibb.co.com/8L1XZqwD/image.png" },
    { title: "Insurance Claim Reroof", subtitle: "Serenada, TX", src: "https://i.ibb.co.com/4ZL3sbK0/image.png" },
];

export default function ProjectGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progressPx, setProgressPx] = useState(0);
    const [vh, setVh] = useState(0);

    useEffect(() => {
        const updateVh = () => setVh(window.innerHeight);
        updateVh();
        window.addEventListener("resize", updateVh);
        return () => window.removeEventListener("resize", updateVh);
    }, []);

    useEffect(() => {
        let raf: number;
        const loop = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const scrolled = -rect.top;
                const total = (projects.length - 1) * window.innerHeight;
                setProgressPx(Math.min(Math.max(scrolled, 0), total));
            }
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#161616]"
            style={{ height: `${projects.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* section heading, fades out as first card is still settled */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-[100] flex flex-col items-center pt-10 text-center">
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#7cb83a]">
                        <span className="h-[2px] w-6 bg-[#7cb83a]" />
                        Our Work
                        <span className="h-[2px] w-6 bg-[#7cb83a]" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                        Recent Projects
                    </h2>
                </div>

                {projects.map((project, i) => {
                    const vhSafe = vh || 1;
                    const local = i === 0 ? 1 : Math.min(Math.max((progressPx - (i - 1) * vhSafe) / vhSafe, 0), 1);
                    const translateY = (1 - local) * 100;
                    const scale = 0.94 + 0.06 * local;

                    return (
                        <div
                            key={project.title}
                            className="absolute inset-0"
                            style={{
                                zIndex: i + 1,
                                transform: `translateY(${translateY}%) scale(${scale})`,
                            }}
                        >
                            <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
                                <div className="relative h-full w-full max-w-6xl overflow-hidden rounded-2xl shadow-[0_40px_80px_-24px_rgba(0,0,0,0.6)] sm:h-[86vh]">
                                    <img
                                        src={project.src}
                                        alt={project.title}
                                        className="h-full w-full object-cover"
                                        draggable={false}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                    {/* index badge */}
                                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 font-serif text-sm font-bold text-white backdrop-blur-sm">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>

                                    {/* caption */}
                                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 sm:p-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-white sm:text-2xl">
                                                {project.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-white/70">{project.subtitle}</p>
                                        </div>
                                        <span className="hidden rounded-full bg-[#7cb83a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#161616] sm:inline-block">
                                            View Project
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}