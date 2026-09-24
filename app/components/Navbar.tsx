"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Home, Info, Wrench, Map, Mail, Phone, ChevronDown, Building2, Layers, Shield } from "lucide-react";

const serviceSubLinks = [
    {
        label: "Residential Roofing",
        href: "/services/residential-roofing",
        icon: Home,
        desc: "Owens Corning Preferred Contractor",
    },
    {
        label: "Commercial Roofing",
        href: "/services/commercial-roofing",
        icon: Building2,
        desc: "Commercial systems & leak detection",
    },
    {
        label: "Professional Gutters",
        href: "/services/professional-gutters",
        icon: Layers,
        desc: "Custom gutters & foundation defense",
    },
    {
        label: "Professional Fencing",
        href: "/services/professional-fencing",
        icon: Shield,
        desc: "Privacy, security & custom fencing",
    },
];

const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
    { label: "Services", href: "/services", icon: Wrench, hasDropdown: true },
    { label: "Service Area", href: "/service-area", icon: Map },
    { label: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
                        <div className="max-w-7xl mx-auto py-2.5 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-medium tracking-wide">
                            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 text-center">
                                {/* Left: Address */}
                                <div className="flex items-center justify-center md:justify-start gap-2 drop-shadow-sm">
                                    <MapPin size={15} className="shrink-0 text-white" />
                                    <span>13785 Research Blvd Suite 125, Austin, TX 78750</span>
                                </div>

                                {/* Middle: Quality Over Everything */}
                                <div className="font-extrabold tracking-wider uppercase text-xs sm:text-sm text-center drop-shadow-sm py-0.5">
                                    Quality Over Everything
                                </div>

                                {/* Right: Phone Number */}
                                <a
                                    href="tel:5122383000"
                                    className="flex items-center justify-center md:justify-end gap-2 hover:opacity-90 transition-opacity font-bold drop-shadow-sm"
                                >
                                    <Phone size={15} className="shrink-0 text-white" />
                                    <span>(512) 238-3000</span>
                                </a>
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
                        {navLinks.map((link) => {
                            if (link.hasDropdown) {
                                return (
                                    <div
                                        key={link.label}
                                        className="relative py-1"
                                        onMouseEnter={() => setServicesDropdownOpen(true)}
                                        onMouseLeave={() => setServicesDropdownOpen(false)}
                                    >
                                        <Link
                                            href={link.href}
                                            className="relative text-white font-semibold text-base tracking-wide group flex items-center gap-1.5 hover:text-[#65C142] transition-colors"
                                        >
                                            {link.label}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180 text-[#65C142]" : ""}`}
                                            />
                                            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#65C142] transition-all duration-300 group-hover:w-full" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {servicesDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 w-80 pt-3 z-50"
                                                >
                                                    <div className="bg-[#12161f]/95 border border-white/15 backdrop-blur-2xl rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-1">
                                                        <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#65C142] border-b border-white/10 pb-2 mb-1 flex items-center justify-between">
                                                            <span>Services Overview</span>
                                                            <Link href="/services" className="hover:underline text-white">View All &rarr;</Link>
                                                        </div>

                                                        {serviceSubLinks.map((sub) => {
                                                            const SubIcon = sub.icon;
                                                            return (
                                                                <Link
                                                                    key={sub.label}
                                                                    href={sub.href}
                                                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.08] transition-all group"
                                                                >
                                                                    <div className="p-2 rounded-lg bg-[#65C142]/15 text-[#65C142] group-hover:bg-[#65C142] group-hover:text-white transition-colors shrink-0">
                                                                        <SubIcon size={18} />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-white font-bold text-sm group-hover:text-[#65C142] transition-colors">
                                                                            {sub.label}
                                                                        </p>
                                                                        <p className="text-gray-400 text-xs mt-0.5">
                                                                            {sub.desc}
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="relative text-white font-semibold text-base tracking-wide group py-1"
                                >
                                    {link.label}
                                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#65C142] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            );
                        })}
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
                        className="lg:hidden absolute top-full left-0 w-full bg-[#121212]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden max-h-[85vh] overflow-y-auto"
                    >
                        <div className="px-6 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => {
                                const IconComponent = link.icon;

                                if (link.hasDropdown) {
                                    return (
                                        <div key={link.label} className="border-b border-white/10 pb-3">
                                            <div className="flex items-center justify-between py-3">
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="flex items-center gap-4 text-white hover:text-[#65C142] font-semibold text-lg"
                                                >
                                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                                        <IconComponent size={20} className="text-[#65C142]" />
                                                    </div>
                                                    {link.label}
                                                </Link>
                                                <button
                                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                    className="p-2 text-gray-400 hover:text-white"
                                                >
                                                    <ChevronDown
                                                        size={20}
                                                        className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#65C142]" : ""}`}
                                                    />
                                                </button>
                                            </div>

                                            {mobileServicesOpen && (
                                                <div className="pl-12 flex flex-col gap-3 pt-2">
                                                    {serviceSubLinks.map((sub) => (
                                                        <Link
                                                            key={sub.label}
                                                            href={sub.href}
                                                            onClick={() => setMobileOpen(false)}
                                                            className="text-gray-300 hover:text-[#65C142] text-sm font-medium py-1.5 flex items-center justify-between border-l-2 border-[#65C142]/40 pl-3"
                                                        >
                                                            <span>{sub.label}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

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