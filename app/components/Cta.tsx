"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CtaProps {
    bgImage?: string;
}

export default function CtaNewsletter({ bgImage = "https://i.ibb.co/60zVZpSn/image.png" }: CtaProps) {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);


            setTimeout(() => {
                setSubmitted(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <section
            className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat font-['Segoe_UI',system-ui,-apple-system,sans-serif]"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(10, 12, 15, 0.75), rgba(10, 12, 15, 0.85)), url(${bgImage})`
            }}
        >
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#65C142]/15 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-[#12161d]/50 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                    {/* Top Accent Line */}
                    <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#65C142] to-transparent" />

                    <div className="text-center max-w-2xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#65C142]/15 border border-[#65C142]/40 text-[#65C142] text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#65C142] animate-pulse" />
                            Expert Insights
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4 drop-shadow-md">
                            Stay Updated With <span className="text-[#65C142]">Expert Roofing</span> Advice
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed drop-shadow">
                            Get professional storm recovery tips, insurance claim secrets, and maintenance guides delivered straight to your inbox. No spam.
                        </p>

                        {/* Form / Success State */}
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email address..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-black/40 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#65C142] focus:ring-2 focus:ring-[#65C142]/30 backdrop-blur-md transition-all shadow-inner"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#65C142] text-[#101317] font-extrabold px-8 py-4 rounded-xl text-sm tracking-wider uppercase hover:bg-[#58ab38] active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(101,193,66,0.35)] cursor-pointer"
                                >
                                    Subscribe
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-[#65C142]/20 border border-[#65C142]/50 backdrop-blur-md rounded-xl p-4 text-[#65C142] font-semibold text-sm shadow-lg"
                            >
                                Thank you! You have successfully subscribed to expert roofing advice.
                            </motion.div>
                        )}

                        {/* Terms Note */}
                        <p className="text-xs text-gray-400 mt-4">
                            By subscribing, you agree to our Terms &amp; Privacy Policy. Unsubscribe at any time.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}