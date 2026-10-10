"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Sparkles, Search, X } from "lucide-react";
import Link from "next/link";
import ServiceAreaMap, { AreaItem } from "@/app/components/ServiceAreaMap";

const areas: AreaItem[] = [
    {
        city: "Austin",
        state: "TX",
        tag: "Home Base",
        desc: "As the capital city and our home base, we serve all areas of Austin — from downtown businesses to residential neighborhoods — with trusted, top-quality roofing and exterior solutions.",
        lat: 30.2672,
        lng: -97.7431,
        zipCodes: "78701, 78704, 78745, 78759",
    },
    {
        city: "Barton Creek",
        state: "TX",
        desc: "Luxury homes in Barton Creek deserve the best. Our high-end roofing and exterior upgrades enhance both protection and curb appeal.",
        lat: 30.2988,
        lng: -97.8647,
        zipCodes: "78735, 78746",
    },
    {
        city: "Brushy Creek",
        state: "TX",
        desc: "We help preserve the community feel in Brushy Creek with family-focused, dependable roofing and exterior services built to last.",
        lat: 30.5058,
        lng: -97.7347,
        zipCodes: "78681",
    },
    {
        city: "Cedar Park",
        state: "TX",
        desc: "From new builds to older homes, we provide Cedar Park with durable, energy-efficient roofing and exterior services tailored to your property's needs.",
        lat: 30.5052,
        lng: -97.8203,
        zipCodes: "78613, 78630",
    },
    {
        city: "Georgetown",
        state: "TX",
        desc: "We respect the historic character of Georgetown properties while integrating modern roofing systems that enhance efficiency, beauty, and longevity.",
        lat: 30.6328,
        lng: -97.6778,
        zipCodes: "78626, 78628, 78633",
    },
    {
        city: "Lago Vista",
        state: "TX",
        desc: "Waterfront homes in Lago Vista require specialized care. We offer weather-resistant, visually stunning solutions to protect and complement lakefront properties.",
        lat: 30.4610,
        lng: -97.9892,
        zipCodes: "78645",
    },
    {
        city: "Lakeway",
        state: "TX",
        desc: "We understand the style and weather demands of Lake Travis area homes. Our roofing and exterior services are designed to blend with Lakeway's scenic aesthetic and provide long-lasting protection.",
        lat: 30.3644,
        lng: -97.9797,
        zipCodes: "78734, 78738",
    },
    {
        city: "Leander",
        state: "TX",
        desc: "Supporting Leander's fast growth, we offer reliable roof repairs, installations, and exterior enhancements to keep properties secure and visually appealing.",
        lat: 30.5788,
        lng: -97.8531,
        zipCodes: "78641, 78646",
    },
    {
        city: "Liberty Hill",
        state: "TX",
        desc: "From rural estates to suburban homes, we offer Liberty Hill durable and stylish roofing and exterior solutions that stand up to Texas weather.",
        lat: 30.6646,
        lng: -97.9228,
        zipCodes: "78642",
    },
    {
        city: "Round Rock",
        state: "TX",
        desc: "Serving one of the area's fastest-growing cities, we bring commercial and residential roofing expertise to meet the evolving needs of Round Rock.",
        lat: 30.5083,
        lng: -97.6789,
        zipCodes: "78664, 78665, 78681",
    },
    {
        city: "Serenada",
        state: "TX",
        desc: "Our team delivers personalized service in Serenada, maintaining the charm and value of homes and small businesses in this peaceful community.",
        lat: 30.6860,
        lng: -97.7011,
        zipCodes: "78628",
    },
];

export default function AreasWeServe() {
    const [selectedCity, setSelectedCity] = useState<string | null>("Austin");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAreas = useMemo(() => {
        return areas.filter(
            (a) =>
                a.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                a.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (a.zipCodes && a.zipCodes.includes(searchTerm))
        );
    }, [searchTerm]);

    const activeArea = useMemo(
        () => areas.find((a) => a.city === selectedCity) || null,
        [selectedCity]
    );

    return (
        <section className="relative w-full bg-[#101317] text-white overflow-hidden font-sans">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#65C142]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative pt-50 sm:pt-55 lg:pt-60 pb-20 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="max-w-3xl text-center mx-auto mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65C142]/15 border border-[#65C142]/40 text-[#65C142] text-xs font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md">
                            <Sparkles size={14} /> Where We Work
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                            Proudly{" "}
                            <span className="relative inline-block text-[#65C142]">
                                Serving
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
                            Central Texas Communities
                        </h1>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                            At McCannical Roofing &amp; Exteriors, we bring expert roofing and exterior services to homeowners and businesses across the Greater Austin area. Whether you need a repair, replacement, or full exterior upgrade, our local team is here to help.
                        </p>
                    </motion.div>
                </div>

                {/* City Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
                    <button
                        onClick={() => setSelectedCity(null)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${selectedCity === null
                            ? "bg-[#65C142] text-white border-[#65C142] shadow-[0_0_15px_rgba(101,193,66,0.3)]"
                            : "bg-white/[0.04] text-gray-300 border-white/10 hover:border-white/30"
                            }`}
                    >
                        All Cities ({areas.length})
                    </button>
                    {areas.map((a) => (
                        <button
                            key={a.city}
                            onClick={() => setSelectedCity(a.city)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${selectedCity === a.city
                                ? "bg-[#65C142] text-white border-[#65C142] shadow-[0_0_15px_rgba(101,193,66,0.3)]"
                                : "bg-white/[0.04] text-gray-300 border-white/10 hover:border-white/30"
                                }`}
                        >
                            {a.city}
                        </button>
                    ))}
                </div>

                {/* Interactive Service Area Map Container */}
                <div className="relative w-full rounded-3xl bg-[#12161d] border border-white/15 overflow-hidden p-6 sm:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2070&auto=format&fit=crop')`,
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101317]/90 via-[#101317]/80 to-[#101317]/95 backdrop-blur-[2px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                                <MapPin size={22} className="text-[#65C142]" />
                                Central Texas Coverage Map
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">
                                Explore our live Google Maps coverage. Click any marker to view area details.
                            </p>
                        </div>

                        <div className="relative w-full md:w-72">
                            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search city or zip code..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-black/40 border border-white/15 rounded-xl pl-10 pr-9 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#65C142] transition-colors"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Google Maps Interactive Container */}
                    <ServiceAreaMap
                        areas={areas}
                        filteredAreas={filteredAreas}
                        selectedCity={selectedCity}
                        onSelectCity={setSelectedCity}
                        activeArea={activeArea}
                    />
                </div>

                {/* Service Area Cards Grid */}
                <div className="mt-16 sm:mt-20">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Central Texas Locations</h3>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">
                                Explore all communities served by McCannical Roofing &amp; Exteriors.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredAreas.map((area) => (
                            <div
                                key={area.city}
                                onClick={() => setSelectedCity(area.city)}
                                className={`group cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${selectedCity === area.city
                                    ? "bg-white/[0.07] border-[#65C142] shadow-[0_10px_30px_rgba(101,193,66,0.2)]"
                                    : "bg-white/[0.03] border-white/10 hover:border-[#65C142]/50 hover:bg-white/[0.06]"
                                    }`}
                            >
                                <div>
                                    <div className="mb-4 flex items-start justify-between">
                                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#65C142]/15 text-[#65C142] transition-colors group-hover:bg-[#65C142] group-hover:text-white">
                                            <MapPin size={20} />
                                        </div>
                                        {area.tag && (
                                            <span className="rounded-full bg-[#65C142]/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#65C142]">
                                                {area.tag}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mb-2 flex items-baseline gap-2">
                                        <h3 className="text-xl font-bold text-white">{area.city}</h3>
                                        <span className="text-sm font-semibold text-gray-400">{area.state}</span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2">
                                        {area.desc}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-xs font-bold text-[#65C142] flex items-center gap-1 group-hover:underline">
                                        Book in {area.city} <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-col justify-between rounded-2xl border border-dashed border-[#65C142]/50 bg-[#65C142]/[0.08] p-6 transition-all duration-300 hover:border-[#65C142] hover:bg-[#65C142]/15">
                            <div>
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#65C142] text-white shadow-md">
                                    <MapPin size={20} />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">Don&apos;t see your area?</h3>
                                <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                                    We&apos;re constantly expanding across Central Texas. Reach out to our local team — chances are we can still serve your property!
                                </p>
                            </div>

                            <div className="mt-6 pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-[#65C142] text-white px-5 py-2.5 rounded-xl hover:bg-[#52a034] transition-colors shadow-md"
                                >
                                    Contact Us Today <ArrowUpRight size={15} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
