"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Project = {
    title: string;
    subtitle: string;
    src: string;
};

const projects: Project[] = [
    { title: "Residential Reroof", subtitle: "Cedar Park, TX", src: "https://i.ibb.co/3H4Lz57/image.png" },
    { title: "Storm Damage Repair", subtitle: "Round Rock, TX", src: "https://i.ibb.co/9mf2cgwV/image.png" },
    { title: "Commercial Flat Roof", subtitle: "Austin, TX", src: "https://i.ibb.co/7MhX73T/image.png" },
    { title: "Gutter Replacement", subtitle: "Leander, TX", src: "https://i.ibb.co/cKCrMpPP/image.png" },
    { title: "Lakefront Home Roof", subtitle: "Lakeway, TX", src: "https://i.ibb.co/qYrPmb6D/image.png" },
    { title: "Custom Fencing", subtitle: "Liberty Hill, TX", src: "https://i.ibb.co/DD9WYMSS/image.png" },
    { title: "Full Tear-Off & Reroof", subtitle: "Georgetown, TX", src: "https://i.ibb.co/sp9SbJTt/image.png" },
    { title: "Emergency Tarping", subtitle: "Brushy Creek, TX", src: "https://i.ibb.co/WNPNsmCg/image.png" },
    { title: "Luxury Home Exterior", subtitle: "Barton Creek, TX", src: "https://i.ibb.co/NgXRjz4c/image.png" },
    { title: "Insurance Claim Reroof", subtitle: "Serenada, TX", src: "https://i.ibb.co/0pcdX0FT/image.png" },
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
            ref= { containerRef }
    className = "relative bg-[#161616]"
    style = {{ height: `${projects.length * 100}vh` }
}
        >
    <div className="sticky top-0 h-screen w-full overflow-hidden" >
        {/* section heading */ }
        < div className = "pointer-events-none absolute inset-x-0 top-0 z-[100] flex flex-col items-center pt-10 text-center" >
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#7cb83a]" >
                <span className="h-[2px] w-6 bg-[#7cb83a]" />
                    Our Work
                        < span className = "h-[2px] w-6 bg-[#7cb83a]" />
                            </div>
                            < h2 className = "font-serif text-2xl font-bold text-white sm:text-3xl" >
                                Recent Projects
                                    </h2>
                                    </div>

{
    projects.map((project, i) => {
        const vhSafe = vh || 1;
        const local = i === 0 ? 1 : Math.min(Math.max((progressPx - (i - 1) * vhSafe) / vhSafe, 0), 1);
        const translateY = (1 - local) * 100;
        const scale = 0.94 + 0.06 * local;

        return (
            <div
                            key= { project.title }
        className = "absolute inset-0 will-change-transform"
        style = {{
            zIndex: i + 1,
                transform: `translateY(${translateY}%) scale(${scale})`,
                            }
    }
                        >
        <div className="flex h-full w-full items-center justify-center p-4 sm:p-8" >
    <div className="relative h-full w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] sm:h-[86vh]" >
    {/* Next.js Optimized High-Resolution Image */ }
    < Image
                                        src = { project.src }
                                        alt = { project.title }
                                        fill
                                        priority = { i === 0}
sizes = "(max-width: 1280px) 100vw, 1280px"
className = "object-cover object-center antialiased"
draggable = { false}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* index badge */ }
        < div className = "absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/40 font-serif text-sm font-bold text-white backdrop-blur-md shadow-lg" >
            { String(i + 1).padStart(2, "0")}
</div>

{/* caption */ }
<div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 sm:p-10" >
    <div>
    <h3 className="text-xl font-bold text-white sm:text-3xl tracking-wide drop-shadow-md" >
        { project.title }
        </h3>
        < p className = "mt-1.5 text-sm sm:text-base text-white/80 font-medium" > { project.subtitle } </p>
            </div>
            < span className = "hidden rounded-full bg-[#7cb83a] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#161616] sm:inline-block shadow-lg transition-transform hover:scale-105" >
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
