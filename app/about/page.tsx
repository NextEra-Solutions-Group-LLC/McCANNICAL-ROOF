"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Quote, Camera, Award, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <section className="relative w-full bg-[#101317] overflow-hidden text-white font-['Segoe_UI',system-ui,-apple-system,sans-serif]">
            {/* Ambient glow accents */}
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
                            <Sparkles size={14} /> About McCannical Roofing &amp; Exteriors
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                            Raising the Standard in <br className="hidden sm:block" />
                            <span className="text-[#65C142]">Roofing &amp; Exteriors</span>
                        </h1>
                        <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed">
                            Built on local trust, drone technology, and Will McCann&apos;s mission to upgrade every property with an honest, transparent approach.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content Grid */}
                <div className="space-y-24 sm:space-y-32">
                    
                    {/* SECTION 1: Raising the Standard in Roofing & Exteriors */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-6 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 text-[#65C142] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                                <Award size={18} /> Our Core Mission
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                                Raising the Standard in <br />
                                <span className="text-[#65C142]">Roofing &amp; Exteriors</span>
                            </h2>
                            <p className="text-gray-300 text-base leading-relaxed">
                                At McCannical Roofing &amp; Exteriors, our mission is simple: raise the standard for how roofing and exterior work is done. As founder Will McCann puts it, <span className="italic text-white font-medium">&ldquo;It&rsquo;s always been my mission to upgrade every property and change how people see roofers. An honest referral means everything.&rdquo;</span> That mindset drives every decision we make.
                            </p>
                            <p className="text-gray-300 text-base leading-relaxed">
                                Quality isn&rsquo;t a slogan here—it&rsquo;s the expectation. From the first inspection to the final walkthrough, we focus on doing the job right and standing behind our work with a <span className="text-[#65C142] font-bold">lifetime workmanship warranty</span>.
                            </p>

                            {/* Founder Quote Card */}
                            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-[#65C142]/30 backdrop-blur-xl relative overflow-hidden mt-6">
                                <Quote className="absolute top-3 right-3 text-[#65C142]/20 w-16 h-16 pointer-events-none" />
                                <p className="text-gray-200 italic text-sm sm:text-base relative z-10 leading-relaxed">
                                    &ldquo;It&rsquo;s always been my mission to upgrade every property and change how people see roofers. An honest referral means everything.&rdquo;
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#65C142] text-white flex items-center justify-center font-bold text-sm">
                                        WM
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Will McCann</h4>
                                        <p className="text-[#65C142] text-xs font-semibold">Founder, McCannical Roofing &amp; Exteriors</p>
                                    </div>
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
                                    src="https://i.ibb.co/xvGHSgF/Worker.jpg"
                                    alt="McCannical Roofing Team Member"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#101317]/20" />
                            </div>
                        </motion.div>
                    </div>

                    {/* SECTION 2: Smart Tools, Honest Process, Local Trust */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:[&>*:first-child]:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-6 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 text-[#65C142] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                                <Camera size={18} /> Modern Innovation
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                                Smart Tools, Honest Process, <br />
                                <span className="text-[#65C142]">Local Trust</span>
                            </h2>
                            <p className="text-gray-300 text-base leading-relaxed">
                                We believe better results come from smarter tools and straightforward communication. Our <span className="text-white font-semibold">drone inspections</span> allow us to assess roofs quickly and accurately, catching issues early and ensuring nothing is missed.
                            </p>
                            <p className="text-gray-300 text-base leading-relaxed">
                                When insurance is involved, we handle the process from start to finish, delivering dependable solutions—and real peace of mind—for homeowners and businesses alike.
                            </p>

                            {/* Feature highlights */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-[#65C142]/15 text-[#65C142] flex-shrink-0">
                                        <Camera size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Drone Inspections</h4>
                                        <p className="text-gray-400 text-xs mt-0.5">High-accuracy aerial scanning catching hidden damage early.</p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-[#65C142]/15 text-[#65C142] flex-shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Full Insurance Support</h4>
                                        <p className="text-gray-400 text-xs mt-0.5">Start-to-finish claim guidance for maximum coverage.</p>
                                    </div>
                                </div>
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
                                    alt="Smart Drone Roof Assessment"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#101317]/20" />
                            </div>
                        </motion.div>
                    </div>

                    {/* SECTION 3: More Than Roofers — We're Austin Locals */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-6 space-y-6"
                        >
                            <p className="text-[#65C142] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                                Roofing Experts In Austin
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                                More Than Roofers— <br />
                                <span className="text-[#65C142]">We&apos;re Austin Locals</span>
                            </h2>
                            <p className="text-gray-300 text-base leading-relaxed">
                                We know the weather, the architecture, and what Austin homes and businesses truly need. That insider knowledge drives smarter solutions and better outcomes every time.
                            </p>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3 text-sm text-gray-200">
                                    <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                    <span>Built for Central Texas storm weather &amp; heat resistance</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-200">
                                    <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                    <span>Fast response times across Austin, Round Rock &amp; surrounding areas</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-200">
                                    <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                    <span>Lifetime Workmanship Warranty on all major projects</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="relative group inline-flex items-center gap-2 bg-[#65C142] text-white font-semibold px-7 py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#52a034] shadow-[0_10px_25px_rgba(101,193,66,0.3)]"
                                >
                                    <span className="relative">Schedule Free Inspection</span>
                                    <ArrowRight size={17} className="relative transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
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
                                style={{ borderRadius: "45% 55% 38% 62% / 45% 55% 45% 55%" }}
                            >
                                <Image
                                    src="https://i.ibb.co/60zVZpSn/image.png"
                                    alt="Austin Local Roof Solutions"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#101317]/20" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}