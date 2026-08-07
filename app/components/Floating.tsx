// components/FloatingActions.tsx
'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, CalendarDays, X, Send, User, Mail, MessageSquare } from 'lucide-react';

// ------------------------------------------------------------------
// Theme tokens & Contact constants (Matched with McCannical Roofing Theme: #65C142 & Dark #101317)
// ------------------------------------------------------------------
const PHONE_DISPLAY = "+1 (512) 238-3000";
const PHONE_TEL = "tel:+15122383000";
const EMAIL_CONTACT = "info@mccannicalroofing.com";

interface FormState {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    message: string;
}

const initialForm: FormState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
};

export default function FloatingActions() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState<FormState>(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Appointment request:", form);
        setSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setSubmitted(false);
            setForm(initialForm);
        }, 2000);
    };

    const handleDirectCall = () => {
        window.location.href = PHONE_TEL;
    };

    return (
        <>
            {/* ---------------- Floating action cluster ---------------- */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {/* Book Appointment Button */}
                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 rounded-xl px-5 py-3.5 text-white font-bold shadow-[0_0_25px_rgba(101,193,66,0.4)] backdrop-blur-md border border-white/20 bg-gradient-to-r from-[#65C142] to-[#55a735] transition-all hover:from-[#57a837] hover:to-[#48912c] uppercase tracking-wider text-sm"
                >
                    <CalendarDays className="h-5 w-5 shrink-0 text-white" />
                    <span className="hidden sm:inline whitespace-nowrap">
                        Book Appointment
                    </span>
                </motion.button>

                {/* Direct Call Button (Mobile Only) */}
                <motion.button
                    onClick={handleDirectCall}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_0_25px_rgba(101,193,66,0.4)] sm:hidden border border-white/20 bg-gradient-to-r from-[#65C142] to-[#55a735] backdrop-blur-md"
                    aria-label={`Call ${PHONE_DISPLAY}`}
                >
                    <span
                        className="absolute inset-0 rounded-full animate-ping opacity-40 bg-[#65C142]"
                    />
                    <Phone className="h-6 w-6 relative z-10 text-white" />
                </motion.button>
            </div>

            {/* ---------------- Modal ---------------- */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-[#101317]/80 backdrop-blur-md"
                            onClick={() => setIsModalOpen(false)}
                        />

                        {/* modal card with glass effect */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.96 }}
                            transition={{ type: "spring", damping: 24, stiffness: 260 }}
                            className="relative w-full max-w-lg rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden text-slate-100"
                        >
                            {/* header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#161a20]">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="h-6 w-6 text-[#65C142]" />
                                    <h2 className="text-lg font-bold text-white">Book an Appointment</h2>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-full bg-white/5 hover:bg-white/10"
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* body */}
                            <div className="p-6">
                                {submitted ? (
                                    <div className="flex flex-col items-center gap-3 py-10 text-center">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#65C142]/30 bg-[#65C142]/15 shadow-[0_0_20px_rgba(101,193,66,0.4)]">
                                            <Send className="h-6 w-6 text-[#65C142]" />
                                        </div>
                                        <p className="text-lg font-semibold text-white">
                                            Request sent!
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            We&apos;ll follow up within one business day. You can also email us at <span className="text-[#65C142]">{EMAIL_CONTACT}</span>.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                            <input
                                                required
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Full name"
                                                className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none focus:border-[#65C142] transition-colors"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                    className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none focus:border-[#65C142] transition-colors"
                                                />
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    placeholder="Phone number"
                                                    className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none focus:border-[#65C142] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* calendar / preferred date & time */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1.5 block text-xs font-bold text-slate-300 uppercase tracking-wider">
                                                    Preferred date
                                                </label>
                                                <input
                                                    required
                                                    type="date"
                                                    name="date"
                                                    value={form.date}
                                                    onChange={handleChange}
                                                    min={new Date().toISOString().split("T")[0]}
                                                    className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 px-3.5 text-sm text-white outline-none focus:border-[#65C142] transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1.5 block text-xs font-bold text-slate-300 uppercase tracking-wider">
                                                    Preferred time
                                                </label>
                                                <input
                                                    required
                                                    type="time"
                                                    name="time"
                                                    value={form.time}
                                                    onChange={handleChange}
                                                    className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 px-3.5 text-sm text-white outline-none focus:border-[#65C142] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your roof (optional)"
                                                rows={3}
                                                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none focus:border-[#65C142] transition-colors"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(101,193,66,0.4)] bg-gradient-to-r from-[#65C142] to-[#55a735] hover:from-[#57a837] hover:to-[#48912c] uppercase tracking-wider text-sm border border-white/20"
                                        >
                                            <Send className="h-4 w-4 text-white" />
                                            Request Appointment
                                        </button>

                                        {/* quick direct-call shortcut inside modal */}
                                        <button
                                            type="button"
                                            onClick={handleDirectCall}
                                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 py-3.5 text-sm font-medium text-slate-300 hover:bg-black/60 hover:text-white transition-colors"
                                        >
                                            <Phone className="h-4 w-4 text-[#65C142]" />
                                            Or call us now — {PHONE_DISPLAY}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}