"use client";

import { motion } from "framer-motion";
import {
    Home,
    Building2,
    Layers,
    Shield,
} from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: Home,
        title: "Residential Roofing",
        desc: "We install durable, energy-efficient roofing systems designed to protect your home with lasting strength and beauty.",
        image: "https://i.ibb.co/rG8brnRr/image.png",
    },
    {
        icon: Building2,
        title: "Commercial Roofing",
        desc: "McCannical Roofing & Exteriors provides detailed commercial roof inspections and robust solutions tailored for business properties.",
        image: "https://i.ibb.co/DDPRmMph/image.png",
    },
    {
        icon: Layers,
        title: "Professional Gutters",
        desc: "Properly installed gutters play a critical role in protecting your home or business from water damage and erosion.",
        image: "https://i.ibb.co/TMnkTXwV/image.png",
    },
    {
        icon: Shield,
        title: "Professional Fencing",
        desc: "McCannical Roofing & Exteriors provides fencing solutions designed to protect, define, and enhance your property boundaries.",
        image: "https://i.ibb.co/gbhfxC0t/image.png",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative w-full bg-[#101317] overflow-hidden">
            {/* Soft ambient glow accents matching VIP theme */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />


            <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-[#65C142] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
                            01. Our Services
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                            Our Exclusive Roofing
                            <br />
                            <span className="text-[#65C142]">&amp; Exterior Services</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-md"
                    >
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Delivering top-tier craftsmanship, premium materials, and unmatched reliability for every project we undertake.
                        </p>
                    </motion.div>
                </div>

                {/* Connecting dotted line (desktop only) */}
                <div className="hidden lg:block absolute left-0 right-0 top-[26rem] border-t-2 border-dashed border-[#65C142]/30 mx-24" />

                {/* Service cards with Full Glassmorphism Theme (clickable to #contact) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.a
                            key={service.title}
                            href="#contact"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative flex flex-col items-center text-center p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-[#65C142]/50 hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
                        >
                            {/* Arch image */}
                            <div className="relative w-full max-w-[170px] aspect-[3/4] rounded-t-full overflow-hidden border-2 border-[#65C142]/40 shadow-xl mt-2">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-[#101317]/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Icon badge overlapping arch */}
                            <div className="relative -mt-6 z-20 w-12 h-12 rounded-full bg-[#65C142] flex items-center justify-center shadow-[0_8px_20px_rgba(101,193,66,0.5)] border-4 border-[#12161b] group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={20} className="text-white" />
                            </div>

                            {/* Text container cleanly separated from icon shadow */}
                            <div className="relative z-10 mt-4">
                                <h3 className="text-white font-bold text-base tracking-wide group-hover:text-[#65C142] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Dot marker on the connecting line (desktop) */}
                            <span className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-6 w-3 h-3 rounded-full bg-[#65C142] shadow-[0_0_10px_#65C142] pointer-events-none" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}