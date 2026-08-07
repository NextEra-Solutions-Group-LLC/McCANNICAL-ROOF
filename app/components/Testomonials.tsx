"use client";

import { useMemo } from "react";
import { Star, Quote } from "lucide-react";

type Review = { name: string; text: string };

const reviews: Review[] = [
    {
        name: "Kelly Broussard",
        text: "Will and his crew were awesome too deal with start to finish on our project. They wer…",
    },
    {
        name: "Willy Farrell",
        text: "We had a great experience working with McCannical Roofing and the…",
    },
    {
        name: "kemper modlin",
        text: "Will and his crew do awesome work. They got things done quickly and left the…",
    },
    {
        name: "Maggie",
        text: "Will and his crew did a great job at our house. He met with the insurance adjuster…",
    },
    {
        name: "Gman",
        text: "Will took care of everything from start to finish, taking time to fully explain optio…",
    },
    {
        name: "Del Nichols",
        text: "Wills, crew was on the spot and did everything they were asked, and then…",
    },
    {
        name: "Teresa Neeve",
        text: "Will and his crew did a great job for us! They were in and out on the same day and…",
    },
    {
        name: "Nichelle Clarke",
        text: "The services provided for my repairs were top notch. Each job was done within a da…",
    },
    {
        name: "Teresa Pedersen",
        text: "Will and his team did a fantastic job on the repairs I needed to be done to get my hous…",
    },
    {
        name: "Eric Tello",
        text: "We've had our fair share of roof issues over the years, and Will has become our…",
    },
    {
        name: "Mary Phillips",
        text: "Will McCann from McCannical Roofing is my favorite 'go-to' guy for anything roof…",
    },
    {
        name: "Freddy Villatoro",
        text: "We had an outstanding experience with McCannical Roofing…",
    },
];

const AVATAR_COLORS = [
    "#65C142", // primary green
    "#3d7fb8", // blue
    "#d9622b", // rust
    "#2fa89a", // teal
    "#8a4fb8", // purple
    "#c73e5a", // red
    "#5b6b7a", // slate
    "#e8a33d", // amber
];

function colorFor(name: string) {
    const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
    return AVATAR_COLORS[idx];
}

function Card({ review }: { review: Review }) {
    const color = colorFor(review.name);
    const initial = review.name.trim().charAt(0).toUpperCase();

    return (
        <div className="mx-3 flex w-[300px] flex-shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#65C142]/40">
            <div>
                <div className="mb-3 flex items-center justify-between">
                    <div className="flex gap-0.5 text-[#e8a33d]">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={13} fill="#e8a33d" strokeWidth={0} />
                        ))}
                    </div>
                    <Quote size={18} className="text-white/10" strokeWidth={0} fill="currentColor" />
                </div>
                <p className="text-[13.5px] leading-relaxed text-gray-300">{review.text}</p>
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md"
                    style={{ backgroundColor: color }}
                >
                    {initial}
                </div>
                <span className="text-sm font-semibold text-white tracking-wide">{review.name}</span>
            </div>
        </div>
    );
}

function MarqueeRow({
    items,
    direction = "left",
    duration = 45,
}: {
    items: Review[];
    direction?: "left" | "right";
    duration?: number;
}) {
    const doubled = [...items, ...items];
    return (
        <div className="relative overflow-hidden py-3">
            <div
                className="flex w-max"
                style={{
                    animation: `${direction === "left" ? "scrollLeft" : "scrollRight"} ${duration}s linear infinite`,
                }}
            >
                {doubled.map((r, i) => (
                    <Card key={i} review={r} />
                ))}
            </div>
        </div>
    );
}

export default function Testimonials() {
    const half = Math.ceil(reviews.length / 2);
    const rowA = useMemo(() => reviews.slice(0, half), [half]);
    const rowB = useMemo(() => reviews.slice(half), [half]);

    return (
        <section className="relative overflow-hidden bg-[#101317] py-24">
            {/* Ambient background glows matching other sections */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#65C142]/5 rounded-full blur-[160px] pointer-events-none" />

            <style>{`
                @keyframes scrollLeft {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
            `}</style>

            <div className="mx-auto mb-16 max-w-2xl px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65C142]/10 border border-[#65C142]/30 text-[#65C142] text-xs font-extrabold uppercase tracking-[0.25em] mb-4">
                    Testimonials
                </div>
                <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    Our Trusted <span className="text-[#65C142]">Clients</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Real feedback from real homeowners and businesses across Central Texas.
                </p>
            </div>

            <div className="relative z-10">
                {/* Dark gradient fade edges matching #101317 background */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#101317] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#101317] to-transparent" />

                <MarqueeRow items={rowA} direction="left" duration={48} />
                <MarqueeRow items={rowB} direction="right" duration={54} />
            </div>
        </section>
    );
}