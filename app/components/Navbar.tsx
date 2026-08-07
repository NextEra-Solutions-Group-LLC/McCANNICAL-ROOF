"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Home, Info, Wrench, Map, Mail } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
    { label: "Services", href: "/services", icon: Wrench },
    { label: "Service Area", href: "/service-area", icon: Map },
    { label: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`z-50 w-full transition-all duration-500 ${scrolled
                ? "fixed top-0 left-0 bg-[#121212]/95 backdrop-blur-md shadow-2xl border-b border-white/10"
                : "absolute top-0 left-0 bg-transparent"
                }`}
        >
            {/* Top utility bar */}
            <AnimatePresence>
                {!scrolled && (
                    <motion.div
                        initial={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden bg-gradient-to-r from-[#55a735] via-[#65C142] to-[#55a735] text-white shadow-inner"
                    >
                        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 py-2.5 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-medium tracking-wide">
                            <div className="flex items-center gap-2 text-center sm:text-left drop-shadow-sm">
                                <MapPin size={16} className="shrink-0 text-white" />
                                <span>13785 Research Blvd Suite 125, Austin, TX 78750</span>
                            </div>
                            <div className="hidden md:block font-semibold tracking-wider uppercase text-[11px] bg-black/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                Quality Over Everything
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main navbar container */}
            <div className={`relative transition-all duration-500 ease-in-out ${scrolled ? "py-3" : "py-5 sm:py-6"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className={`relative flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-105 ${scrolled ? "w-12 h-12 sm:w-14 sm:h-14" : "w-16 h-16 sm:w-20 sm:h-20"}`}>
                            <Image
                                src="https://i.ibb.co/mVnWQGWh/image-removebg-preview-1.png"
                                alt="McCannical Roofing & Exteriors"
                                fill
                                className="object-contain drop-shadow-[0_10px_18px_rgba(101,193,66,0.4)]"
                                priority
                            />
                        </div>
                        <div className="flex flex-col leading-none justify-center">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                                McCANNICAL
                            </span>
                            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#65C142] font-extrabold mt-1.5 drop-shadow-sm">
                                Roofing &amp; Exteriors
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative text-white font-semibold text-base tracking-wide group py-1"
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#65C142] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-[#65C142] to-[#55a735] hover:from-[#57a837] hover:to-[#48912c] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(101,193,66,0.4)] hover:shadow-[0_0_35px_rgba(101,193,66,0.7)] text-sm uppercase tracking-wider transform hover:-translate-y-0.5 border border-white/20"
                        >
                            Get A Free Estimate
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative z-50 flex flex-col justify-center items-center w-14 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/20 transition-all duration-300 group"
                        aria-label="Toggle Menu"
                    >
                        {mobileOpen ? (
                            <X size={28} className="text-[#65C142]" />
                        ) : (
                            <div className="flex flex-col justify-between w-7 h-5">
                                <span className="w-full h-1 bg-[#65C142] rounded-full shadow-sm" />
                                <span className="w-full h-1 bg-[#65C142] rounded-full shadow-sm" />
                                <span className="w-full h-1 bg-[#65C142] rounded-full shadow-sm" />
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden absolute top-full left-0 w-full bg-[#121212]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-5">
                            {navLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-4 text-white hover:text-[#65C142] font-semibold py-3 border-b border-white/10 transition-colors text-lg group"
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#65C142] transition-colors">
                                            <IconComponent size={20} className="text-[#65C142]" />
                                        </div>
                                        {link.label}
                                    </Link>
                                );
                            })}

                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-center bg-gradient-to-r from-[#65C142] to-[#55a735] hover:from-[#57a837] hover:to-[#48912c] text-white font-bold py-4 rounded-xl transition-all uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(101,193,66,0.4)] border border-white/20"
                                >
                                    Get A Free Estimate
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}