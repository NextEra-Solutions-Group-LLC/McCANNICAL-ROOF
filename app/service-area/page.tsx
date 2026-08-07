"use client";

import { MapPin, ArrowUpRight } from "lucide-react";

const areas = [
    {
        city: "Austin",
        state: "TX",
        tag: "Home Base",
        desc: "As the capital city and our home base, we serve all areas of Austin — from downtown businesses to residential neighborhoods — with trusted, top-quality roofing and exterior solutions.",
        top: "45%",
        left: "28%",
    },
    {
        city: "Barton Creek",
        state: "TX",
        desc: "Luxury homes in Barton Creek deserve the best. Our high-end roofing and exterior upgrades enhance both protection and curb appeal.",
        top: "52%",
        left: "22%",
    },
    {
        city: "Brushy Creek",
        state: "TX",
        desc: "We help preserve the community feel in Brushy Creek with family-focused, dependable roofing and exterior services built to last.",
        top: "38%",
        left: "35%",
    },
    {
        city: "Cedar Park",
        state: "TX",
        desc: "From new builds to older homes, we provide Cedar Park with durable, energy-efficient roofing and exterior services tailored to your property's needs.",
        top: "30%",
        left: "42%",
    },
    {
        city: "Georgetown",
        state: "TX",
        desc: "We respect the historic character of Georgetown properties while integrating modern roofing systems that enhance efficiency, beauty, and longevity.",
        top: "25%",
        left: "50%",
    },
    {
        city: "Lago Vista",
        state: "TX",
        desc: "Waterfront homes in Lago Vista require specialized care. We offer weather-resistant, visually stunning solutions to protect and complement lakefront properties.",
        top: "60%",
        left: "45%",
    },
    {
        city: "Lakeway",
        state: "TX",
        desc: "We understand the style and weather demands of Lake Travis area homes. Our roofing and exterior services are designed to blend with Lakeway's scenic aesthetic and provide long-lasting protection.",
        top: "65%",
        left: "58%",
    },
    {
        city: "Leander",
        state: "TX",
        desc: "Supporting Leander's fast growth, we offer reliable roof repairs, installations, and exterior enhancements to keep properties secure and visually appealing.",
        top: "40%",
        left: "65%",
    },
    {
        city: "Liberty Hill",
        state: "TX",
        desc: "From rural estates to suburban homes, we offer Liberty Hill durable and stylish roofing and exterior solutions that stand up to Texas weather.",
        top: "32%",
        left: "75%",
    },
    {
        city: "Round Rock",
        state: "TX",
        desc: "Serving one of the area's fastest-growing cities, we bring commercial and residential roofing expertise to meet the evolving needs of Round Rock.",
        top: "55%",
        left: "80%",
    },
    {
        city: "Serenada",
        state: "TX",
        desc: "Our team delivers personalized service in Serenada, maintaining the charm and value of homes and small businesses in this peaceful community.",
        top: "72%",
        left: "72%",
    },
];

export default function AreasWeServe() {
    return (
        <section className="relative bg-black text-white overflow-hidden">
            {/* এখানে pt-32 এবং sm:pt-40 বাড়িয়ে দেওয়া হয়েছে যাতে কন্টেন্ট নিচে নেমে আসে */}
            <div className="mx-auto max-w-7xl pt-32 pb-20 px-6 sm:pt-40 sm:pb-28 sm:px-10 lg:px-14">
                {/* Header */}
                <div className="mb-12 max-w-xl text-center mx-auto">
                    <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#7cb83a]">
                        <span className="h-[2px] w-6 bg-[#7cb83a]" />
                        Where We Work
                        <span className="h-[2px] w-6 bg-[#7cb83a]" />
                    </div>
                    <h2 className="mb-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
                        Interactive Service Map &amp; Areas
                    </h2>
                    <p className="text-[15px] leading-relaxed text-white/70">
                        Click on any location pin on the map below or explore our service zones to book your roofing inspection directly.
                    </p>
                </div>

                {/* Map Container with Background Image */}
                <div
                    className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] rounded-2xl bg-[#1c1c1c] border border-white/10 overflow-hidden flex items-center justify-center p-4 shadow-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url('https://i.ibb.co/5XmGTXf7/image.png')` }}
                >
                    {/* Dark Overlay so the pins and animations pop out nicely */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]" />

                    {/* Map Pins Placed Interactively */}
                    {areas.map((area) => (
                        <a
                            key={area.city}
                            href="#contact"
                            style={{ top: area.top, left: area.left }}
                            className="absolute group -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 transition-transform duration-300 hover:scale-125"
                        >
                            <span className="absolute -inset-1 rounded-full bg-[#7cb83a] opacity-40 animate-ping" />
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#7cb83a] text-[#161616] shadow-[0_0_15px_rgba(124,184,58,0.6)]">
                                <MapPin size={20} strokeWidth={2.5} />
                            </div>
                            <div className="absolute top-11 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#161616] border border-[#7cb83a] text-white text-xs px-3 py-1 rounded-md shadow-xl whitespace-nowrap z-30">
                                <span className="font-bold text-[#7cb83a]">{area.city}</span> — Click to Book
                            </div>
                        </a>
                    ))}
                </div>

                {/* Area Cards Grid */}
                <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {areas.map((area) => (
                        <a
                            href="#contact"
                            key={area.city}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7cb83a]/60 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_-10px_rgba(124,184,58,0.2)]"
                        >
                            <div>
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#7cb83a]/12 transition-colors group-hover:bg-[#7cb83a] group-hover:text-[#161616]">
                                        <MapPin size={20} className="text-[#7cb83a] transition-colors group-hover:text-[#161616]" strokeWidth={2} />
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-[#7cb83a]/20">
                                        <ArrowUpRight
                                            size={16}
                                            className="text-white/40 transition-colors group-hover:text-[#7cb83a]"
                                        />
                                    </div>
                                </div>

                                <div className="mb-2 flex items-baseline gap-2">
                                    <h3 className="text-lg font-bold tracking-wide">{area.city}</h3>
                                    <span className="text-sm text-white/40">{area.state}</span>
                                    {area.tag && (
                                        <span className="ml-auto rounded-full bg-[#7cb83a]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#7cb83a]">
                                            {area.tag}
                                        </span>
                                    )}
                                </div>

                                <p className="text-[13.5px] leading-relaxed text-white/60 transition-colors group-hover:text-white/80">
                                    {area.desc}
                                </p>
                            </div>

                            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#7cb83a] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span>Book service in {area.city}</span>
                                <ArrowUpRight size={14} />
                            </div>
                        </a>
                    ))}

                    {/* CTA card */}
                    <div className="flex flex-col justify-center rounded-xl border border-dashed border-[#7cb83a]/40 bg-[#7cb83a]/[0.06] p-6 transition-all duration-300 hover:border-[#7cb83a] hover:bg-[#7cb83a]/[0.1]">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#7cb83a]">
                            <MapPin size={20} className="text-[#161616]" strokeWidth={2.5} />
                        </div>
                        <h3 className="mb-1.5 text-lg font-bold">Don&apos;t see your area?</h3>
                        <p className="mb-4 text-[13.5px] leading-relaxed text-white/60">
                            We&apos;re growing across Central Texas. Reach out — chances are we can still
                            help.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#7cb83a] hover:underline"
                        >
                            Contact us <ArrowUpRight size={15} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}