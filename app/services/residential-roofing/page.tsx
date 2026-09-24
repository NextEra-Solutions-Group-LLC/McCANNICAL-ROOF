"use client";

import { motion } from "framer-motion";
import { Home, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResidentialRoofingPage() {
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
                            <Home size={14} /> Owens Corning Preferred Contractor
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                            Residential <br />
                            <span className="text-[#65C142]">Roofing Solutions</span>
                        </h1>
                        <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed">
                            Protecting Central Texas homes with durable, energy-efficient roofing systems, storm damage inspections, and complete insurance support.
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
                            <Award size={18} /> Premium Quality &amp; Advocacy
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                            Trusted Roofing, Inspections <br />
                            <span className="text-[#65C142]">&amp; Insurance Support</span>
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            As an Owens Corning Preferred Contractor, McCannical Roofing &amp; Exteriors meets high standards for quality, reliability, and professionalism. We install durable, energy-efficient roofing systems using proven Owens Corning materials—designed to perform and backed by strong manufacturer warranties.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            When storms hit, our team provides thorough storm damage and real estate roof inspections, helping homeowners, buyers, and sellers understand the condition of the roof and next steps with confidence. We also simplify the insurance process by documenting damage, working directly with your provider, and advocating for the coverage you deserve—so you&rsquo;re never navigating it alone.
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Owens Corning Preferred Contractor Certified</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Free storm damage &amp; real estate roof inspections</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={18} className="text-[#65C142] shrink-0" />
                                <span>Full insurance claim advocacy &amp; provider coordination</span>
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
                                src="https://i.ibb.co/rG8brnRr/image.png"
                                alt="Residential Roofing Solutions"
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
                            <ShieldCheck size={18} /> Long-Term Reliability
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                            Reliable Repairs &amp; Complete <br />
                            <span className="text-[#65C142]">Roof Replacements</span>
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            From small leaks to full roof replacements, we focus on doing the job right the first time. Our team uses advanced leak detection methods to quickly pinpoint issues and deliver long-lasting repairs that protect your home and extend the life of your roof.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            When repairs are no longer enough, we offer full roof replacements and upgrades using modern materials and proven installation techniques. Whether your roof is straightforward or complex, you can expect a smooth process, improved curb appeal, better efficiency, and dependable long-term protection.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="relative group inline-flex items-center gap-2 bg-[#65C142] text-white font-semibold px-7 py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#52a034] shadow-[0_10px_25px_rgba(101,193,66,0.3)]"
                            >
                                <span className="relative">Schedule Residential Roof Inspection</span>
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
                                alt="Reliable Roof Replacement"
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
