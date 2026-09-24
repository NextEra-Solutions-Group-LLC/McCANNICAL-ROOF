"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Droplets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfessionalGuttersPage() {
    return (
        <section className="relative w-full bg-[#101317] text-white overflow-hidden font-['Segoe_UI',system-ui,-apple-system,sans-serif]">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Hero Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65C142]/15 border border-[#65C142]/40 text-[#65C142] text-xs font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md">
                            <Layers size={14} /> Exterior Protection Systems
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                            Professional <br />
                            <span className="text-[#65C142]">Gutter Solutions</span>
                        </h1>
                        <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed">
                            Protecting foundations, siding, and landscaping with high-performance gutter installations, repairs, and custom drainage systems.
                        </p>
                    </motion.div>
                </div>

                {/* Section 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 text-[#65C142] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                            <Droplets size={18} /> Water Damage Prevention
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                            Professional Gutter Installation, <br />
                            <span className="text-[#65C142]">Repairs &amp; Replacement</span>
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Properly installed gutters play a critical role in protecting your home or business from water damage. McCannical Roofing &amp; Exteriors installs high-quality gutter systems designed for performance and tailored to the look of your property.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Whether it&rsquo;s a new installation, targeted repair, or full replacement, our team ensures a secure, clean fit that directs water safely away from your foundation and landscaping. From leaks and cracks to clogged downspouts and sagging sections, we restore full functionality and extend the life of your gutter system.
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Seamless aluminum, copper, and custom gutter profiles</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Precision downspout positioning &amp; foundation protection</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Repair of leaks, sagging sections &amp; storm damage</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-6 relative flex justify-center"
                    >
                        <div className="absolute w-80 h-80 bg-[#65C142]/20 rounded-full blur-3xl" />
                        <div
                            className="relative w-full max-w-md h-80 sm:h-96 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-4 border-white/10"
                            style={{ borderRadius: "62% 38% 55% 45% / 45% 55% 45% 55%" }}
                        >
                            <Image
                                src="https://i.ibb.co/TMnkTXwV/image.png"
                                alt="Professional Gutter Systems"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#101317]/20" />
                        </div>
                    </motion.div>
                </div>

                {/* Section 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:[&>*:first-child]:order-2 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 text-[#65C142] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                            <ShieldCheck size={18} /> Custom Architectural Fit
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                            Custom Gutter Solutions That <br />
                            <span className="text-[#65C142]">Protect Your Property</span>
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            No two properties are the same, which is why we take a custom approach to every gutter system we install. We factor in roof design, rainfall patterns, and drainage needs to recommend solutions that perform in all weather conditions.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Using quality materials and proven installation methods, we deliver long-lasting results with a clean, professional finish. With McCannical Roofing &amp; Exteriors, you can expect honest assessments, dependable performance, and gutters that look as good as they work.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="relative group inline-flex items-center gap-2 bg-[#65C142] text-white font-semibold px-7 py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#52a034] shadow-[0_10px_25px_rgba(101,193,66,0.3)]"
                            >
                                <span className="relative">Request Free Gutter Estimate</span>
                                <ArrowRight size={17} className="relative transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-6 relative flex justify-center"
                    >
                        <div className="absolute w-80 h-80 bg-[#65C142]/20 rounded-full blur-3xl" />
                        <div
                            className="relative w-full max-w-md h-80 sm:h-96 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-4 border-white/10"
                            style={{ borderRadius: "55% 45% 62% 38% / 55% 45% 55% 45%" }}
                        >
                            <Image
                                src="https://i.ibb.co/5WcQ4CSq/image.png"
                                alt="Custom Gutter Installation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#101317]/20" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
