"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, FileText, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
    {
        step: "01",
        icon: ClipboardCheck,
        title: "Free Inspection",
        desc: "We assess your roof's condition and identify any issues, no obligation, no pressure.",
    },
    {
        step: "02",
        icon: FileText,
        title: "Detailed Estimate",
        desc: "You get a clear, itemized quote so you know exactly what to expect before work begins.",
    },
    {
        step: "03",
        icon: HardHat,
        title: "Expert Installation",
        desc: "Our certified crew gets to work with premium materials and precision craftsmanship.",
    },
    {
        step: "04",
        icon: CheckCircle2,
        title: "Final Walkthrough",
        desc: "We inspect the finished job with you and back it with a reliable workmanship warranty.",
    },
];

export default function Process() {
    return (
        <section className="relative w-full bg-[#101317] py-24 sm:py-32 overflow-hidden">
            {/* Soft ambient glow accents matching theme */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-20 sm:mb-28"
                >
                    <p className="text-[#65C142] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
                        How It Works
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                        Our Streamlined <span className="text-[#65C142]">Working Process</span>
                    </h2>
                </motion.div>

                {/* Desktop S-Curve Alternating Timeline */}
                <div className="hidden lg:block relative pb-12">
                    {/* S-Curve SVG connecting path across 4 items */}
                    <svg
                        className="absolute top-1/2 left-0 w-full h-48 -translate-y-1/2 pointer-events-none z-0"
                        viewBox="0 0 1200 200"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M 100 100 C 250 10, 350 190, 500 100 C 650 10, 750 190, 900 100 C 1000 40, 1100 100, 1150 100"
                            stroke="#65C142"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            strokeOpacity="0.4"
                        />
                    </svg>

                    <div className="grid grid-cols-4 gap-8 relative z-10">
                        {steps.map((s, i) => {
                            // Even index items: Icon on top, Text on bottom
                            // Odd index items: Text on top, Icon on bottom
                            const isEven = i % 2 === 0;

                            return (
                                <motion.div
                                    key={s.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    {isEven ? (
                                        <>
                                            {/* Top: Icon Card */}
                                            <div className="mb-8 flex flex-col items-center">
                                                <div className="relative w-16 h-16 rounded-full bg-[#65C142] flex items-center justify-center shadow-[0_10px_25px_rgba(101,193,66,0.4)] border-4 border-[#101317] hover:scale-110 transition-transform duration-300">
                                                    <s.icon size={26} className="text-white" />
                                                </div>
                                                <span className="text-[#65C142] font-black text-xs tracking-widest mt-2 uppercase">
                                                    Step {s.step}
                                                </span>
                                            </div>

                                            {/* Bottom: Glass Text Card */}
                                            <div className="w-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:border-[#65C142]/40 transition-all duration-300">
                                                <h3 className="text-white font-bold text-base tracking-wide">
                                                    {s.title}
                                                </h3>
                                                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                                                    {s.desc}
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Top: Glass Text Card */}
                                            <div className="w-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:border-[#65C142]/40 transition-all duration-300 mb-8">
                                                <h3 className="text-white font-bold text-base tracking-wide">
                                                    {s.title}
                                                </h3>
                                                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                                                    {s.desc}
                                                </p>
                                            </div>

                                            {/* Bottom: Icon Card */}
                                            <div className="flex flex-col items-center">
                                                <div className="relative w-16 h-16 rounded-full bg-[#65C142] flex items-center justify-center shadow-[0_10px_25px_rgba(101,193,66,0.4)] border-4 border-[#101317] hover:scale-110 transition-transform duration-300">
                                                    <s.icon size={26} className="text-white" />
                                                </div>
                                                <span className="text-[#65C142] font-black text-xs tracking-widest mt-2 uppercase">
                                                    Step {s.step}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile & Tablet Responsive Stacked View */}
                <div className="lg:hidden space-y-6">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg"
                        >
                            <div className="shrink-0">
                                <div className="w-14 h-14 rounded-full bg-[#65C142] flex items-center justify-center shadow-md border-2 border-[#101317]">
                                    <s.icon size={22} className="text-white" />
                                </div>
                            </div>
                            <div>
                                <span className="text-[#65C142] font-black text-xs tracking-widest uppercase">
                                    Step {s.step}
                                </span>
                                <h3 className="text-white font-bold text-base mt-0.5">
                                    {s.title}
                                </h3>
                                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}