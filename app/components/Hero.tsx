"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// 3 Full Hero background images
const heroBgImages = [
    "https://i.ibb.co/BKP9RdCS/image.png",
    "https://i.ibb.co/BKP9RdCS/image.png", // Replace with your 2nd full-hero roof image URL
    "https://i.ibb.co/BmhD0BW/image.png", // Replace with your 3rd full-hero roof image URL
];

const ownerPhoto = "https://i.ibb.co/C3MzM0V1/image.png";

export default function Hero() {
    return (
        <section className="relative w-full bg-[#101317] overflow-hidden min-h-[95vh] flex items-center pt-40 sm:pt-44 lg:pt-36 pb-16">

            {/* Full Section Background Swiper */}
            <div className="absolute inset-0 z-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect={"fade"}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full"
                >
                    {heroBgImages.map((img, index) => (
                        <SwiperSlide key={index} className="relative w-full h-full">
                            <Image
                                src={img}
                                alt={`Austin Roofing Background ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Dark overlay to ensure text and elements stay completely legible */}
                <div className="absolute inset-0 bg-[#0b0e11]/85 backdrop-blur-[2px] z-10 pointer-events-none" />
            </div>

            {/* Ambient glow accents */}
            <motion.div
                className="absolute top-1/4 left-0 w-80 h-80 bg-[#65C142]/15 rounded-full blur-[120px] pointer-events-none z-10"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full blur-[130px] pointer-events-none z-10"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-14 lg:gap-8 py-20">
                {/* Left - Text content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-6 flex flex-col items-start text-left"
                >
                    <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-[#65C142]/15 border border-[#65C142]/30 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#65C142] animate-pulse" />
                        <span className="text-[#65C142] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                            Quality Over Everything
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                        Austin Roofing
                        <br />
                        <span className="relative inline-block text-white">
                            Experts
                            <motion.svg
                                viewBox="0 0 220 20"
                                className="absolute -bottom-3 left-0 w-full h-4 text-[#65C142]"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                            >
                                <motion.path
                                    d="M2 14 C 40 2, 80 18, 120 8 C 150 1, 180 16, 218 6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </motion.svg>
                        </span>
                    </h1>

                    <p className="text-gray-300 text-base sm:text-lg mt-8 max-w-lg leading-relaxed">
                        We provide expert exterior solutions to keep your property in
                        top condition. From roofing to gutters, fencing &amp; painting
                        our team ensures quality at every step!
                    </p>

                    <div className="flex items-center gap-3 mt-6">
                        <div className="w-10 h-10 rounded-full bg-[#1b2229] border border-white/10 flex items-center justify-center">
                            <ShieldCheck size={18} className="text-[#65C142]" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm leading-tight">
                                Will McCann
                            </p>
                            <p className="text-gray-400 text-xs">Owner &amp; Master Roofer</p>
                        </div>
                        <div className="ml-2 flex items-center gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={13} fill="currentColor" />
                            ))}
                        </div>
                    </div>

                    <a
                        href="#services"
                        className="relative group inline-flex items-center gap-2 bg-[#65C142] text-white font-semibold px-8 py-4 rounded-md mt-9 overflow-hidden transition-colors duration-300 hover:bg-[#52a034] shadow-[0_15px_35px_rgba(101,193,66,0.3)]"
                    >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                        <span className="relative">Explore Services</span>
                        <ArrowRight
                            size={18}
                            className="relative transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>

                {/* Right - Owner Portrait Composition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    className="lg:col-span-6 relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-md h-[460px] sm:h-[540px] lg:h-[600px] flex items-center justify-center">

                        {/* Small rotating quality badge */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                            className="absolute top-6 left-2 sm:-left-4 z-30 w-20 h-20 rounded-full bg-[#1b2229]/90 backdrop-blur-xl border border-[#65C142]/30 shadow-xl hidden sm:flex items-center justify-center"
                        >
                            <svg className="absolute w-full h-full p-1" viewBox="0 0 100 100">
                                <path
                                    id="miniCircle"
                                    d="M 12,50 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                                    fill="transparent"
                                />
                                <text className="text-[7px] uppercase font-black tracking-[0.2em] fill-[#65C142]">
                                    <textPath href="#miniCircle" startOffset="0%">
                                        • CERTIFIED • TRUSTED • LOCAL •
                                    </textPath>
                                </text>
                            </svg>
                            <ShieldCheck size={20} className="text-[#65C142]" />
                        </motion.div>

                        {/* Main portrait, glass-framed */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.55 }}
                            className="relative w-[85%] sm:w-[80%] h-[85%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-2 border-white/20 z-20"
                        >
                            <Image
                                src={ownerPhoto}
                                alt="Will McCann, Owner"
                                fill
                                priority
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Floating experience badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute bottom-10 left-2 sm:left-4 z-30 bg-[#65C142] rounded-2xl px-6 py-4 shadow-[0_15px_35px_rgba(101,193,66,0.4)] text-center"
                        >
                            <p className="text-2xl font-black text-white leading-none">
                                22+
                            </p>
                            <p className="text-white text-[9px] font-bold uppercase tracking-wider mt-1">
                                Years Exp.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}