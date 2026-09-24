"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageSquare, Phone, Check } from "lucide-react";

interface CtaProps {
    bgImage?: string;
}

export default function CtaNewsletter({ bgImage = "https://i.ibb.co/60zVZpSn/image.png" }: CtaProps) {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && agreed) {
            setSubmitted(true);

            setTimeout(() => {
                setSubmitted(false);
                setEmail("");
            }, 4000);
        }
    };

    return (
        <section
            className="relative w-full pt-20 pb-0 sm:pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat font-['Segoe_UI',system-ui,-apple-system,sans-serif]"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(10, 14, 18, 0.82), rgba(10, 14, 18, 0.92)), url(${bgImage})`
            }}
        >
            {/* Top / Center Subscription Area */}
            <div className="max-w-4xl mx-auto text-center relative z-10 pb-16 sm:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge / Sub-heading */}
                    <p className="text-xs sm:text-sm font-extrabold text-white/90 tracking-[0.25em] uppercase mb-4">
                        LATEST TIPS &amp; INSIGHTS
                    </p>

                    {/* Title with green highlighted word and underline */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-8">
                        Stay Updated With{" "}
                        <span className="relative inline-block text-[#65C142]">
                            Expert
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3 text-[#65C142]"
                                viewBox="0 0 100 20"
                                preserveAspectRatio="none"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2,14 C30,4 70,18 98,8"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>{" "}
                        Roofing Advice
                    </h2>

                    {/* Subscription Form / Success Message */}
                    {!submitted ? (
                        <div className="max-w-xl mx-auto">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row items-stretch rounded-xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl transition-all focus-within:border-[#65C142]"
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-transparent px-6 py-4 text-white placeholder-gray-400 text-base focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#65C142] hover:bg-[#54a635] active:scale-[0.99] text-white font-bold px-9 py-4 text-base tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2"
                                >
                                    Submit
                                </button>
                            </form>

                            {/* Terms Checkbox */}
                            <label className="inline-flex items-center gap-2.5 mt-4 text-xs sm:text-sm text-gray-300 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-600 bg-black/50 text-[#65C142] accent-[#65C142] focus:ring-0 cursor-pointer"
                                />
                                <span>
                                    By subscribing, you agree to our{" "}
                                    <a href="#" className="underline hover:text-white transition-colors">
                                        Terms &amp; Privacy Policy
                                    </a>.
                                </span>
                            </label>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 bg-[#65C142]/20 border border-[#65C142] backdrop-blur-md rounded-xl px-6 py-4 text-white font-medium text-sm sm:text-base shadow-lg"
                        >
                            <span className="w-7 h-7 rounded-full bg-[#65C142] text-white flex items-center justify-center flex-shrink-0">
                                <Check size={16} />
                            </span>
                            <span>Thank you! You have successfully subscribed to expert roofing advice.</span>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Bottom 4 Contact / Info Columns Bar */}
            <div className="relative z-10 -mx-4 sm:-mx-6 lg:-mx-8 border-t border-white/10 bg-black/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/15">
                        
                        {/* 1. Service Hours */}
                        <div className="flex items-center gap-4 lg:px-6 first:lg:pl-0">
                            <div className="w-14 h-14 rounded-full border-2 border-[#65C142] text-[#65C142] flex items-center justify-center flex-shrink-0 bg-[#65C142]/10 shadow-[0_0_15px_rgba(101,193,66,0.15)]">
                                <Clock size={26} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Service Hours</h4>
                                <p className="text-gray-300 text-xs sm:text-sm leading-snug">Mon-Fri: 7:00am-7:00pm</p>
                                <p className="text-gray-300 text-xs sm:text-sm leading-snug">Sat: 7:00am-2:00pm</p>
                                <p className="text-gray-300 text-xs sm:text-sm leading-snug">Sun: Closed</p>
                            </div>
                        </div>

                        {/* 2. Locate Us */}
                        <div className="flex items-center gap-4 lg:px-6">
                            <div className="w-14 h-14 rounded-full border-2 border-[#65C142] text-[#65C142] flex items-center justify-center flex-shrink-0 bg-[#65C142]/10 shadow-[0_0_15px_rgba(101,193,66,0.15)]">
                                <MapPin size={26} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Locate Us</h4>
                                <p className="text-gray-300 text-xs sm:text-sm leading-snug">13785 Research Blvd Suite 125,</p>
                                <p className="text-gray-300 text-xs sm:text-sm leading-snug">Austin, TX 78750</p>
                            </div>
                        </div>

                        {/* 3. Email Us */}
                        <div className="flex items-center gap-4 lg:px-6">
                            <div className="w-14 h-14 rounded-full border-2 border-[#65C142] text-[#65C142] flex items-center justify-center flex-shrink-0 bg-[#65C142]/10 shadow-[0_0_15px_rgba(101,193,66,0.15)]">
                                <MessageSquare size={26} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                                <a
                                    href="mailto:Info@McCannicalRoofing.Com"
                                    className="text-gray-300 text-xs sm:text-sm hover:text-[#65C142] transition-colors leading-snug block break-all"
                                >
                                    Info@McCannicalRoofing.Com
                                </a>
                            </div>
                        </div>

                        {/* 4. Call Us */}
                        <div className="flex items-center gap-4 lg:px-6 last:lg:pr-0">
                            <div className="w-14 h-14 rounded-full border-2 border-[#65C142] text-[#65C142] flex items-center justify-center flex-shrink-0 bg-[#65C142]/10 shadow-[0_0_15px_rgba(101,193,66,0.15)]">
                                <Phone size={26} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                                <a
                                    href="tel:5122383000"
                                    className="text-gray-300 text-xs sm:text-sm hover:text-[#65C142] transition-colors leading-snug block"
                                >
                                    (512) 238-3000
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}