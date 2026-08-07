"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        //form submitaion logic
    };

    return (
        <section id="/contact" className="relative w-full bg-[#101317] overflow-hidden">
            {/* Soft ambient glow accents matching VIP theme */}
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65C142]/10 border border-[#65C142]/30 text-[#65C142] text-xs font-extrabold uppercase tracking-[0.25em] mb-4">
                            <Sparkles size={14} /> Get In Touch
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                            Let's Discuss Your <br />
                            <span className="text-[#65C142]">Next Project</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
                            Ready to upgrade your property with Austin's trusted experts? Reach out for a free inspection or consultation.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] space-y-8">
                            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#65C142]/10 border border-[#65C142]/30 flex items-center justify-center flex-shrink-0 text-[#65C142] group-hover:bg-[#65C142] group-hover:text-white transition-all duration-300">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Our Office</p>
                                        <p className="text-white text-sm sm:text-base font-medium mt-1">13785 Research Blvd Suite 125, Austin, TX 78750</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#65C142]/10 border border-[#65C142]/30 flex items-center justify-center flex-shrink-0 text-[#65C142] group-hover:bg-[#65C142] group-hover:text-white transition-all duration-300">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone Number</p>
                                        <p className="text-white text-sm sm:text-base font-medium mt-1">+1 512-238-3000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#65C142]/10 border border-[#65C142]/30 flex items-center justify-center flex-shrink-0 text-[#65C142] group-hover:bg-[#65C142] group-hover:text-white transition-all duration-300">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email Address</p>
                                        <p className="text-white text-sm sm:text-base font-medium mt-1">
                                            info@mccannicalroofing.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#65C142]/10 border border-[#65C142]/30 flex items-center justify-center flex-shrink-0 text-[#65C142] group-hover:bg-[#65C142] group-hover:text-white transition-all duration-300">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Working Hours</p>
                                        <p className="text-white text-sm sm:text-base font-medium mt-1">Mon - Sat: 8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                            {submitted ? (
                                <div className="py-16 text-center space-y-4">
                                    <div className="w-16 h-16 bg-[#65C142] text-white rounded-full flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(101,193,66,0.6)]">
                                        <Send size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                                        Your request has been successfully submitted. Our team will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 px-6 py-2.5 bg-[#65C142] text-white font-semibold rounded-md text-sm hover:bg-[#52a034] transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                                Your Name <span className="text-[#65C142]">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#65C142] transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                                Phone Number <span className="text-[#65C142]">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="+1 (512) 000-0000"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#65C142] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                                Email Address <span className="text-[#65C142]">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#65C142] transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                                Service Required
                                            </label>
                                            <select className="w-full bg-[#161a20] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#65C142] transition-colors">
                                                <option value="residential">Residential Roofing</option>
                                                <option value="commercial">Commercial Roofing</option>
                                                <option value="gutters">Professional Gutters</option>
                                                <option value="fencing">Professional Fencing</option>
                                                <option value="inspection">Free Inspection</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                                            Your Message <span className="text-[#65C142]">*</span>
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="Tell us about your project details..."
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#65C142] transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="relative group w-full inline-flex items-center justify-center gap-2 bg-[#65C142] text-white font-semibold py-4 rounded-xl overflow-hidden transition-colors duration-300 hover:bg-[#52a034] shadow-[0_10px_25px_rgba(101,193,66,0.3)] cursor-pointer"
                                    >
                                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                                        <span className="relative flex items-center gap-2">
                                            Send Message <Send size={17} />
                                        </span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}