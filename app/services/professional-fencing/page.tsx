"use client";

import { motion } from "framer-motion";
import { Shield, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfessionalFencingPage() {
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
                            <Shield size={14} /> Property Boundaries &amp; Security
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                            Professional <br />
                            <span className="text-[#65C142]">Fencing Solutions</span>
                        </h1>
                        <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed">
                            Protecting, defining, and enhancing your property with durable wood, metal, and composite fence installations and repairs.
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
                            <Layers size={18} /> Privacy &amp; Security
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                            Professional Fence Installation, <br />
                            <span className="text-[#65C142]">Repairs &amp; Replacement</span>
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            McCannical Roofing &amp; Exteriors provides fencing solutions designed to protect, define, and enhance your property. From new fence installations to fast, reliable repairs and full replacements, our team works with wood, metal, and composite materials to deliver the right balance of privacy, security, and curb appeal.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Every project starts with a clear assessment and is completed with precision, ensuring your fence looks great and performs for years to come.
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Cedar wood, iron metal, wrought &amp; composite fencing</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Fast repairs for storm damage, leaning posts &amp; broken gates</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Residential privacy &amp; commercial perimeter fencing</span>
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
                                src="https://i.ibb.co/gbhfxC0t/image.png"
                                alt="Professional Fencing Installation"
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
                            <ShieldCheck size={18} /> Built To Last
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                            Custom Fencing Solutions Built <br />
                            <span className="text-[#65C142]">for Your Property</span>
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Every property has different goals, and we take a custom approach to meet them. Whether you&rsquo;re looking to increase privacy, improve security, or refresh the look of your space, we help you select the right materials and design for long-lasting results.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            With honest communication, durable materials, and skilled installation, McCannical Roofing &amp; Exteriors delivers fencing solutions that add value and stand up to the elements.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="relative group inline-flex items-center gap-2 bg-[#65C142] text-[#101317] font-bold px-7 py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#52a034] hover:text-white shadow-[0_10px_25px_rgba(101,193,66,0.3)]"
                            >
                                <span className="relative">Get Free Fencing Estimate</span>
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
                                src="https://i.ibb.co/60zVZpSn/image.png"
                                alt="Custom Fencing Solutions"
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
