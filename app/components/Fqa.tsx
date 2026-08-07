"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
    num: string;
    question: string;
    answer: string;
    tag?: string;
}

const faqData: FaqItem[] = [
    {
        num: "01",
        question: "How soon after a hail storm should I get my roof inspected?",
        answer: "As soon as possible. Many insurance policies have time limits for filing claims. We recommend getting a free inspection within 1–2 weeks after a significant storm.",
        tag: "Time-sensitive",
    },
    {
        num: "02",
        question: "Will filing a roof insurance claim increase my premiums?",
        answer: "In most cases in Texas, a single claim for hail or wind damage does not increase your rates. We can discuss the specifics for your policy during your free inspection.",
    },
    {
        num: "03",
        question: "How do I know if I have enough damage for insurance to cover a new roof?",
        answer: "Insurance companies usually go by percentage of damage. Our detailed drone inspection and report help show the true extent of the damage so you get a fair settlement.",
        tag: "Free drone report",
    },
    {
        num: "04",
        question: "Do you work directly with insurance companies?",
        answer: "Yes. We attend the adjuster meeting with you, provide all necessary documentation, and advocate for the best possible outcome.",
    },
    {
        num: "05",
        question: "How long does the entire process take?",
        answer: "From inspection to completed roof usually takes 4–8 weeks, depending on insurance approval times and weather. We move as fast as possible.",
    },
    {
        num: "06",
        question: "What if my insurance denies or under-pays the claim?",
        answer: "We have experience dealing with denied and lowballed claims. We will provide a second opinion and help you appeal if necessary.",
        tag: "We fight for you",
    },
    {
        num: "07",
        question: "Do you offer emergency tarping after a storm?",
        answer: "Yes. We provide emergency tarping and board-up services to prevent further water damage while the claim is being processed.",
        tag: "24/7 emergency",
    },
];

interface FaqProps {
    bgImage?: string;
}

export default function Faq({ bgImage = "https://i.ibb.co/hJZgRNtg/image.png" }: FaqProps) {
    // Open the first item by default
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Generate random styling for hail streaks on the client side
    const [hails, setHails] = useState<Array<{ id: number; left: string; height: string; duration: string; delay: string }>>([]);

    useEffect(() => {
        const hailList = Array.from({ length: 28 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}vw`,
            height: `${30 + Math.random() * 50}px`,
            duration: `${2 + Math.random() * 3}s`,
            delay: `${Math.random() * 4}s`,
        }));
        setHails(hailList);
    }, []);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="relative w-full bg-[#101317] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden font-['Segoe_UI',system-ui,-apple-system,sans-serif] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(16, 19, 23, 0.92), rgba(16, 19, 23, 0.95)), url(${bgImage})`
            }}
        >
            {/* Falling hail streaks animation */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {hails.map((h) => (
                    <span
                        key={h.id}
                        className="absolute top-[-10%] w-[2px] opacity-35"
                        style={{
                            left: h.left,
                            height: h.height,
                            background: "linear-gradient(180deg, transparent, #d7e4f0 60%, transparent)",
                            animation: `fall ${h.duration} linear infinite`,
                            animationDelay: h.delay,
                        }}
                    />
                ))}
            </div>

            <style jsx global>{`
                @keyframes fall {
                    to { transform: translateY(120vh); }
                }
            `}</style>

            <div className="max-w-[820px] mx-auto relative z-10">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center gap-[10px] text-[12px] tracking-[.22em] uppercase text-[#65C142] font-extrabold mb-4"
                >
                    <span className="w-[26px] h-[2px] bg-[#65C142] inline-block" />
                    Storm Damage FAQ
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-4 text-white"
                >
                    Answers before the <em className="not-italic text-[#65C142]">next storm</em> hits
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-base max-w-[520px] leading-relaxed mb-12"
                >
                    Straight talk on inspections, insurance claims, and how we get your roof fixed — click any question to expand.
                </motion.p>

                {/* FAQ Container with Glassmorphism */}
                <div className="flex flex-col gap-[2px] bg-white/10 rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)] border border-white/10 backdrop-blur-xl">
                    {faqData.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={item.num}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.25 + i * 0.08 }}
                                className="bg-[#181d26]/80 backdrop-blur-md"
                            >
                                <button
                                    onClick={() => toggleAccordion(i)}
                                    className="w-full text-left bg-transparent border-none text-white p-[22px_60px_22px_26px] text-base sm:text-[17px] font-semibold cursor-pointer relative flex items-center gap-4 font-inherit transition-colors duration-200 hover:bg-[#65C142]/10 focus-visible:outline-2 focus-visible:outline-[#65C142] focus-visible:outline-offset-[-2px]"
                                >
                                    {/* Number badge */}
                                    <span
                                        className={`shrink-0 font-bold text-xs w-[26px] h-[26px] rounded-full border flex items-center justify-center transition-all duration-250 ${isOpen
                                            ? "text-[#101317] bg-[#65C142] border-[#65C142]"
                                            : "text-[#65C142] border-white/20 bg-white/5"
                                            }`}
                                    >
                                        {item.num}
                                    </span>

                                    <span className="flex-1 tracking-wide">{item.question}</span>

                                    {/* Plus / Minus Icon */}
                                    <span className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] shrink-0">
                                        <span className="absolute bg-[#65C142] rounded-[2px] transition-transform duration-300 w-[16px] h-[2px] top-[7px] left-0" />
                                        <span
                                            className={`absolute bg-[#65C142] rounded-[2px] transition-transform duration-300 w-[2px] h-[16px] top-0 left-[7px] ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                                                }`}
                                        />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ maxHeight: 0, opacity: 0 }}
                                            animate={{ maxHeight: 300, opacity: 1 }}
                                            exit={{ maxHeight: 0, opacity: 0 }}
                                            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-[0_60px_24px_26px] text-gray-300 text-sm sm:text-[15px] leading-relaxed">
                                                <p className="m-0">
                                                    {item.answer}
                                                </p>
                                                {item.tag && (
                                                    <span className="inline-block mt-4 text-[11px] tracking-[.14em] uppercase text-[#65C142] border border-[#65C142]/40 bg-[#65C142]/10 px-[10px] py-[4px] rounded-full font-bold">
                                                        {item.tag}
                                                    </span>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer link */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-12 text-center text-gray-400 text-sm"
                >
                    Still have questions?{" "}
                    <a
                        href="#schedule"
                        className="text-[#65C142] no-underline font-semibold border-b border-[#65C142]/60 hover:opacity-80 transition-opacity"
                    >
                        Schedule your free inspection
                    </a>
                </motion.div>
            </div>
        </section>
    );
}