import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#65C142] selection:text-black pt-32 sm:pt-36 lg:pt-40 pb-20 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#65C142]/10 blur-[140px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#65C142] animate-pulse" />
                            <span className="text-xs font-semibold tracking-wider uppercase text-white/80">About Our Company</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                            Raising the Standard in <br className="hidden sm:block" />
                            <span className="text-[#65C142]">Roofing &amp; Exteriors</span>
                        </h1>

                        <p className="text-white/70 text-lg leading-relaxed font-normal max-w-2xl">
                            We bring uncompromising craftsmanship, premium materials, and elite reliability to every project. Whether it is storm restoration, total roof replacement, or exterior upgrades, our commitment to excellence stands above the rest.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link 
                                href="/contact" 
                                className="px-8 py-4 rounded-xl bg-[#65C142] text-black font-bold tracking-wide hover:bg-[#57a738] transition-all duration-300 shadow-lg shadow-[#65C142]/20"
                            >
                                Get a Free Estimate
                            </Link>
                            <Link 
                                href="/services" 
                                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                            >
                                Our Services
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                            <div className="h-[380px] w-full relative rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center border border-white/5">
                                <span className="text-white/40 font-medium text-sm">Roofing &amp; Exterior Showcase</span>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-black text-white">100%</p>
                                    <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">Satisfaction Guaranteed</p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-[#65C142] text-black flex items-center justify-center font-bold text-xl shadow-lg">
                                    ✓
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Secondary Section / Mission */}
                <div className="mt-24 border-t border-white/10 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white mb-6">
                                Built on Trust, Quality, <br />
                                <span className="text-[#65C142]">and Durability</span>
                            </h2>
                            <p className="text-white/70 leading-relaxed mb-6">
                                Our team consists of certified professionals dedicated to providing structural integrity and visual appeal. We understand that your property is a massive investment, which is why we treat every roof and exterior upgrade with absolute precision.
                            </p>
                            <ul className="space-y-3 text-white/80 font-medium">
                                <li className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-[#65C142]/20 text-[#65C142] flex items-center justify-center text-xs font-bold">✓</span>
                                    Licensed and Insured Experts
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-[#65C142]/20 text-[#65C142] flex items-center justify-center text-xs font-bold">✓</span>
                                    Top-Tier Warranties on Materials &amp; Labor
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-[#65C142]/20 text-[#65C142] flex items-center justify-center text-xs font-bold">✓</span>
                                    Transparent Pricing with No Hidden Fees
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-xl relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#65C142]/10 blur-3xl pointer-events-none rounded-full" />
                            <h3 className="text-xl font-bold text-white mb-4">Ready to Transform Your Property?</h3>
                            <p className="text-white/60 text-sm mb-6 leading-relaxed">
                                Contact our team today for a comprehensive inspection and consultation tailored specifically to your needs.
                            </p>
                            <Link 
                                href="/contact" 
                                className="block w-full py-4 text-center rounded-xl bg-white text-black font-bold tracking-wide hover:bg-[#65C142] transition-all duration-300 shadow-md"
                            >
                                Schedule Inspection
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
