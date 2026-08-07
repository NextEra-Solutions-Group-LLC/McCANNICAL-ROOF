"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    HardHat,
    Layers,
    Users,
    ShieldCheck,
    Clock,
    Award,
    Home,
} from "lucide-react";

const features = [
    {
        number: "01",
        icon: HardHat,
        title: "Skilled And Certified Roofing Experts",
        color: "#4A7C3F",
        angle: -90, // top
    },
    {
        number: "02",
        icon: Layers,
        title: "Premium Materials",
        color: "#3B6E8F",
        angle: -30,
    },
    {
        number: "03",
        icon: Award,
        title: "Reliable Workmanship Backed Warranty",
        color: "#B08A2E",
        angle: 30,
    },
    {
        number: "04",
        icon: HardHat,
        title: "Safety-First Approach In Every Installation",
        color: "#8F3B3B",
        angle: 90, // bottom
    },
    {
        number: "05",
        icon: Clock,
        title: "On-Time Project Delivery, Every Time",
        color: "#5B4A8F",
        angle: 150,
    },
    {
        number: "06",
        icon: Users,
        title: "Trusted By Homeowners & Commercial Building Owners",
        color: "#3B8F72",
        angle: 210,
    },
];

// Convert polar (angle in degrees, radius in %) to x/y % coordinates around center (50,50)
function polar(angle: number, radius: number) {
    const rad = (angle * Math.PI) / 180;
    return {
        x: 50 + radius * Math.cos(rad),
        y: 50 + radius * Math.sin(rad),
    };
}

export default function WhyChooseUs() {
    const radius = 40;

    return (
        <section className="relative w-full py-20 sm:py-28 overflow-hidden">
            {/* Sticky / parallax background image */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/mV4PRhSd/image.png')",
                }}
            />
            {/* Dark overlay so content stays readable over the image */}
            <div className="absolute inset-0 bg-[#0B0D10]/90" />
            {/* subtle roof-shingle texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:24px_24px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <p className="text-gray-300 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
                        Quality Over Everything Makes{" "}
                        <span className="text-[#4A7C3F] underline decoration-[#4A7C3F] underline-offset-8">
                            McCannical
                        </span>{" "}
                        Roofing The Right Choice
                    </h2>
                </motion.div>

                {/* Desktop radial layout */}
                <div className="hidden lg:block relative w-full aspect-square max-w-[720px] mx-auto">
                    {/* SVG connecting lines */}
                    <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 w-full h-full"
                    >
                        {features.map((f) => {
                            const p = polar(f.angle, radius);
                            return (
                                <line
                                    key={f.number}
                                    x1={50}
                                    y1={50}
                                    x2={p.x}
                                    y2={p.y}
                                    stroke="rgba(255,255,255,0.15)"
                                    strokeWidth={0.4}
                                    strokeDasharray="1.5 1.5"
                                />
                            );
                        })}
                    </svg>

                    {/* Center hub */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                        {/* Pulsing glow rings */}
                        <motion.span
                            className="absolute w-24 h-24 rounded-full bg-[#4A7C3F]/40"
                            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.span
                            className="absolute w-24 h-24 rounded-full bg-[#4A7C3F]/30"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.6,
                            }}
                        />

                        {/* Core hub */}
                        <motion.div
                            className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl"
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.div
                                animate={{ rotate: [0, -8, 8, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Home size={36} className="text-[#101317]" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Feature nodes */}
                    {features.map((f, i) => {
                        const p = polar(f.angle, radius);
                        const isRight = f.angle > -90 && f.angle < 90;
                        return (
                            <motion.div
                                key={f.number}
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-3"
                                style={{
                                    left: `${p.x}%`,
                                    top: `${p.y}%`,
                                    flexDirection: isRight ? "row" : "row-reverse",
                                }}
                            >
                                {/* Text card */}
                                <div
                                    className={`w-40 bg-[#181C22] border border-white/10 rounded-lg px-3 py-3 shadow-lg ${isRight ? "text-left" : "text-right"
                                        }`}
                                >
                                    <p className="text-gray-200 text-xs font-medium leading-snug">
                                        {f.title}
                                    </p>
                                </div>

                                {/* Numbered icon badge */}
                                <div
                                    className="shrink-0 w-14 h-14 rounded-full flex flex-col items-center justify-center text-white shadow-lg"
                                    style={{ backgroundColor: f.color }}
                                >
                                    <f.icon size={18} />
                                    <span className="text-[10px] font-bold mt-0.5">
                                        {f.number}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile / tablet fallback: simple stacked list */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="flex items-center gap-4 bg-[#181C22] border border-white/10 rounded-lg p-4"
                        >
                            <div
                                className="shrink-0 w-12 h-12 rounded-full flex flex-col items-center justify-center text-white"
                                style={{ backgroundColor: f.color }}
                            >
                                <f.icon size={16} />
                                <span className="text-[9px] font-bold mt-0.5">
                                    {f.number}
                                </span>
                            </div>
                            <p className="text-gray-200 text-sm font-medium leading-snug">
                                {f.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}