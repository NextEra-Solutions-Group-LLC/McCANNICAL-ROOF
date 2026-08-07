"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace each `logo` with your real logo image link (ibb.co etc.)
// Keep `name` as a fallback label.
const partners = [
    {
        name: "Attic Breeze",
        logo: "https://i.ibb.co/XfTCRbBk/image-removebg-preview-3.png",
    },
    {
        name: "Owens Corning — Preferred Contractor",
        logo: "https://i.ibb.co/nsBsbMbR/image.png",
    },
    {
        name: "ABC Supply Co. Inc.",
        logo: "https://i.ibb.co/fz2YZZ7W/image-removebg-preview-2.png",
    },
];

// Duplicate the list so the scroll loop is seamless
const marqueeItems = [...partners, ...partners, ...partners];

interface TrustedPartnersProps {
    bgImage?: string;
}

export default function TrustedPartners({ bgImage = "https://i.ibb.co/hJydNDNv/image.png" }: TrustedPartnersProps) {
    return (
        <section
            className="relative w-full bg-[#0B0D10] py-14 sm:py-16 overflow-hidden border-y border-white/5 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(11, 13, 16, 0.90), rgba(11, 13, 16, 0.94)), url(${bgImage})`
            }}
        >
            {/* ambient glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-40 bg-[#65C142]/10 rounded-full blur-[100px] pointer-events-none z-0"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-10"
                >
                    Trusted &amp; Certified By
                </motion.p>

                {/* Marquee track */}
                <div className="relative">
                    {/* fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B0D10] to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B0D10] to-transparent z-10" />

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex items-center gap-6 sm:gap-10 w-max"
                            animate={{ x: ["0%", "-33.333%"] }}
                            transition={{
                                duration: 22,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {marqueeItems.map((partner, i) => (
                                <div
                                    key={`${partner.name}-${i}`}
                                    className="group relative shrink-0 flex items-center justify-center h-24 w-52 sm:h-28 sm:w-64 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-[#65C142]/40 hover:bg-white/[0.07] transition-all duration-500"
                                >
                                    {/* subtle top glow line on hover */}
                                    <span className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 bg-[#65C142] group-hover:w-3/4 transition-all duration-500" />

                                    <div className="relative w-full h-full">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}