"use client"
import { useEffect, useState, useRef } from "react";

type PreloaderProps = {
    /** Optional: called once the preloader has fully finished. Not required — just drop <Preloader /> anywhere. */
    onComplete?: () => void;
    /** Optional: minimum time (ms) the preloader stays visible. Defaults to a good value out of the box. */
    minDuration?: number;
};

const LOGO_URL = "https://i.ibb.co/mVnWQGWh/image-removebg-preview-1.png";

// Zero-config: just drop <Preloader /> at the top of your layout. It manages
// its own progress, exit animation, unmount, and body-scroll lock — nothing
// else to wire up.
export default function Preloader({ onComplete, minDuration = 2200 }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [exiting, setExiting] = useState(false);
    const [mounted, setMounted] = useState(true);
    const startRef = useRef<number>(Date.now());

    // Lock page scroll while the preloader owns the screen
    useEffect(() => {
        if (!mounted) return;
        const prevOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = prevOverflow;
        };
    }, [mounted]);

    useEffect(() => {
        let raf: number;
        const tick = () => {
            const elapsed = Date.now() - startRef.current;
            // ease-out curve so it feels alive rather than linear
            const t = Math.min(elapsed / minDuration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const pct = Math.floor(eased * 100);
            setProgress(pct);

            if (t < 1) {
                raf = requestAnimationFrame(tick);
            } else {
                setTimeout(() => setExiting(true), 250);
            }
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [minDuration]);

    useEffect(() => {
        if (!exiting) return;
        const t = setTimeout(() => {
            setMounted(false);
            onComplete?.();
        }, 700);
        return () => clearTimeout(t);
    }, [exiting, onComplete]);

    if (!mounted) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#131313] transition-all duration-700 ease-[cubic-bezier(.65,0,.35,1)] ${exiting ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
            style={{
                clipPath: exiting ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
            }}
            aria-hidden={exiting}
        >
            <style>{`
        @keyframes pl-rotate { to { transform: rotate(360deg); } }
        @keyframes pl-rotate-rev { to { transform: rotate(-360deg); } }
        @keyframes pl-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.045); opacity: .92; }
        }
        @keyframes pl-sweep {
          0% { transform: translateX(-120%) skewX(-12deg); }
          100% { transform: translateX(220%) skewX(-12deg); }
        }
        @keyframes pl-rise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-grain-shift {
          0% { transform: translate(0,0); }
          100% { transform: translate(-40px,-40px); }
        }
      `}</style>

            {/* faint shingle texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 44px), repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 44px)",
                    animation: "pl-grain-shift 14s linear infinite",
                }}
            />

            {/* soft vignette glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(124,184,58,0.10), transparent 70%)",
                }}
            />

            {/* light sweep across the whole stage */}
            <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                    animation: "pl-sweep 2.6s ease-in-out infinite",
                }}
            />

            {/* emblem */}
            <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
                <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 200 200"
                    style={{ animation: "pl-rotate 9s linear infinite" }}
                >
                    <circle
                        cx="100"
                        cy="100"
                        r="92"
                        fill="none"
                        stroke="#7cb83a"
                        strokeOpacity="0.55"
                        strokeWidth="1.5"
                        strokeDasharray="2 10"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 200 200"
                    style={{ animation: "pl-rotate-rev 14s linear infinite" }}
                >
                    <circle
                        cx="100"
                        cy="100"
                        r="76"
                        fill="none"
                        stroke="#ffffff"
                        strokeOpacity="0.12"
                        strokeWidth="1"
                        strokeDasharray="1 14"
                        strokeLinecap="round"
                    />
                </svg>

                {/* progress ring */}
                <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="86" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                    <circle
                        cx="100"
                        cy="100"
                        r="86"
                        fill="none"
                        stroke="#7cb83a"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 86}
                        strokeDashoffset={2 * Math.PI * 86 * (1 - progress / 100)}
                        style={{ transition: "stroke-dashoffset 120ms linear" }}
                    />
                </svg>

                <img
                    src={LOGO_URL}
                    alt="McCannical Roofing logo"
                    className="relative h-20 w-20 object-contain sm:h-24 sm:w-24"
                    style={{ animation: "pl-pulse 2.4s ease-in-out infinite" }}
                    draggable={false}
                />
            </div>

            {/* wordmark */}
            <div
                className="mt-7 flex flex-col items-center gap-1.5 text-center"
                style={{ animation: "pl-rise 0.7s ease forwards" }}
            >
                <div className="text-2xl font-bold tracking-[0.06em] text-white sm:text-3xl">
                    Mc<span className="text-[#7cb83a]">CANNICAL</span>
                </div>
                <div className="text-[11px] font-semibold tracking-[0.42em] text-white/50 sm:text-xs">
                    ROOFING &amp; EXTERIORS
                </div>
            </div>

            {/* progress bar + percentage */}
            <div className="mt-9 flex w-56 flex-col items-center gap-2.5 sm:w-64">
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-[#5f9328] via-[#7cb83a] to-[#a6d96a]"
                        style={{ width: `${progress}%`, transition: "width 120ms linear" }}
                    />
                </div>
                <div className="flex w-full items-center justify-between text-[11px] tracking-wide text-white/40">
                    <span>Loading site</span>
                    <span className="font-mono tabular-nums text-[#7cb83a]">{progress}%</span>
                </div>
            </div>
        </div>
    );
}