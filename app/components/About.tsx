"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const sections = [
    {
        label: "Roofing Experts In Austin",
        title: "More Than Roofers—",
        titleAccent: "We're Austin Locals",
        desc: "We know the weather, the architecture, and what Austin homes and businesses truly need. That insider knowledge drives smarter solutions and better outcomes every time.",
        image: "https://i.ibb.co/xvGHSgF/Worker.jpg",
        reverse: false,
    },
    {
        label: "Roofing Experts In Austin",
        title: "Full Service Roofing,",
        titleAccent: "Made Simple",
        desc: "From roof inspections and storm damage repairs to leak detection and insurance, we handle it all. Need a full replacement or upgrade? We've got you covered. Start with a free inspection - no pressure just expert advice.",
        image: "https://i.ibb.co/5WcQ4CSq/image.png",
        reverse: true,
    },
];

export default function About() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Sticky / parallax background */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url('https://i.ibb.co/BKP9RdCS/image.png')",
                }}
            />
            {/* Reduced white overlay opacity to make background and images pop cleanly */}
            <div className="absolute inset-0 bg-[#F7F7F5]/75 backdrop-blur-[1px]" />

            <div className="relative py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
                    {sections.map((s) => (
                        <div
                            key={s.title}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${s.reverse ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            {/* Blob image */}
                            <motion.div
                                initial={{ opacity: 0, x: s.reverse ? 40 : -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative flex justify-center"
                            >
                                {/* Ambient glow behind blob */}
                                <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-[#65C142]/20 rounded-full blur-3xl" />

                                <div
                                    className="relative w-72 h-72 sm:w-96 sm:h-96 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white/90"
                                    style={{
                                        borderRadius: "62% 38% 55% 45% / 45% 55% 45% 55%",
                                    }}
                                >
                                    <Image
                                        src={s.image}
                                        alt={s.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Small orbiting accent dot */}
                                <motion.span
                                    className="absolute top-4 right-8 w-4 h-4 rounded-full bg-[#65C142] shadow-[0_0_15px_rgba(101,193,66,0.8)]"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>

                            {/* Text */}
                            <motion.div
                                initial={{ opacity: 0, x: s.reverse ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                <p className="text-[#4c9530] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
                                    {s.label}
                                </p>
                                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#101317] leading-tight">
                                    {s.title}
                                    <br />
                                    <span className="text-[#55a735]">{s.titleAccent}</span>
                                </h2>
                                <p className="text-gray-700 text-sm sm:text-base mt-5 leading-relaxed max-w-lg font-medium">
                                    {s.desc}
                                </p>

                                <a
                                    href="#services"
                                    className="relative group inline-flex items-center gap-2 bg-[#101317] text-white font-semibold px-7 py-3.5 rounded-md mt-8 overflow-hidden transition-colors duration-300 hover:bg-[#65C142] shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                                >
                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                                    <span className="relative">Learn More</span>
                                    <ArrowRight
                                        size={17}
                                        className="relative transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}