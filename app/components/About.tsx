"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote, Camera, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sections = [
    {
        label: "Our Core Mission",
        title: "Raising the Standard in",
        titleAccent: "Roofing & Exteriors",
        desc: "At McCannical Roofing & Exteriors, our mission is simple: raise the standard for how roofing and exterior work is done. As founder Will McCann puts it, \"It's always been my mission to upgrade every property and change how people see roofers. An honest referral means everything.\" That mindset drives every decision we make. Quality isn't a slogan here—it's the expectation. From the first inspection to the final walkthrough, we focus on doing the job right and standing behind our work with a lifetime workmanship warranty.",
        quote: "It's always been my mission to upgrade every property and change how people see roofers. An honest referral means everything.",
        author: "Will McCann, Founder",
        image: "https://i.ibb.co/xvGHSgF/Worker.jpg",
        reverse: false,
    },
    {
        label: "Modern Innovation",
        title: "Smart Tools, Honest Process,",
        titleAccent: "Local Trust",
        desc: "We believe better results come from smarter tools and straightforward communication. Our drone inspections allow us to assess roofs quickly and accurately, catching issues early and ensuring nothing is missed. When insurance is involved, we handle the process from start to finish, delivering dependable solutions—and real peace of mind—for homeowners and businesses alike.",
        image: "https://i.ibb.co/5WcQ4CSq/image.png",
        reverse: true,
    },
];

export default function About() {
    return (
        <section className="relative w-full overflow-hidden font-['Segoe_UI',system-ui,-apple-system,sans-serif]">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url('https://i.ibb.co/BKP9RdCS/image.png')",
                }}
            />
            <div className="absolute inset-0 bg-[#F7F7F5]/85 backdrop-blur-[2px]" />

            <div className="relative py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
                    {sections.map((s) => (
                        <div
                            key={s.title}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${s.reverse ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            {/* Blob Image */}
                            <motion.div
                                initial={{ opacity: 0, x: s.reverse ? 40 : -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative flex justify-center"
                            >
                                <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-[#65C142]/20 rounded-full blur-3xl" />

                                <div
                                    className="relative w-72 h-72 sm:w-96 sm:h-96 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white/90"
                                    style={{
                                        borderRadius: s.reverse
                                            ? "55% 45% 62% 38% / 55% 45% 55% 45%"
                                            : "62% 38% 55% 45% / 45% 55% 45% 55%",
                                    }}
                                >
                                    <Image
                                        src={s.image}
                                        alt={s.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <motion.span
                                    className="absolute top-4 right-8 w-4 h-4 rounded-full bg-[#65C142] shadow-[0_0_15px_rgba(101,193,66,0.8)]"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>

                            {/* Text Content */}
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

                                <p className="text-gray-700 text-sm sm:text-base mt-5 leading-relaxed max-w-xl font-medium">
                                    {s.desc}
                                </p>

                                {s.quote && (
                                    <div className="mt-5 p-4 rounded-xl bg-white/70 border border-[#65C142]/40 shadow-sm relative">
                                        <Quote className="absolute top-2 right-2 text-[#65C142]/20 w-8 h-8 pointer-events-none" />
                                        <p className="text-gray-900 italic text-xs sm:text-sm font-semibold">
                                            &ldquo;{s.quote}&rdquo;
                                        </p>
                                        <p className="text-[#4c9530] text-xs font-bold mt-1">— {s.author}</p>
                                    </div>
                                )}

                                <div className="mt-8">
                                    <Link
                                        href="/about"
                                        className="relative group inline-flex items-center gap-2 bg-[#101317] text-white font-semibold px-7 py-3.5 rounded-md overflow-hidden transition-colors duration-300 hover:bg-[#65C142] shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                                    >
                                        <span className="relative">Read Our Full Story</span>
                                        <ArrowRight
                                            size={17}
                                            className="relative transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}