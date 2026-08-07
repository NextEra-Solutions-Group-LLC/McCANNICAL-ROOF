"use client";

import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const services = ["Residential Roofing", "Commercial Roofing", "Gutters", "Fencing"];

    return (
        <footer className="relative overflow-hidden bg-[#161616] text-white">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: `url('https://i.ibb.co/SXWcNcDt/image.png')` }}
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-[#161616]/80" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-10 lg:px-14">
                <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-6">
                    {/* Brand / Logo with Name side-by-side */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-3">

                            <div className="relative h-12 w-12 flex-shrink-0">
                                <Image
                                    src="https://i.ibb.co/mVnWQGWh/image-removebg-preview-1.png"
                                    alt="McCannical Roofing Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold tracking-wider text-white">MCCANNICAL</h2>
                                <p className="text-[10px] font-semibold tracking-widest text-[#7cb83a]">ROOFING &amp; EXTERIORS</p>
                            </div>
                        </div>

                        <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                            At McCannical Roofing &amp; Exteriors,{" "}
                            <span className="font-semibold text-white">Quality Over Everything</span> isn&apos;t
                            just our slogan, it drives everything we do!
                        </p>
                    </div>

                    {/* Services */}
                    <div className="lg:pt-1">
                        <h3 className="mb-5 text-xl font-bold">Services</h3>
                        <ul className="space-y-3.5">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="#"
                                        className="text-[15px] text-white/80 transition-colors hover:text-[#7cb83a]"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* divider */}
                <div className="mt-14 border-t border-white/10 pt-6">
                    {/* Social Media icons */}
                    <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <span className="text-sm font-medium text-white/80">Connect with us on social media :</span>
                        <div className="flex items-center gap-3">
                            {/* Facebook Link */}
                            <a
                                href="https://www.facebook.com/profile.php?id=61564928592190"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#7cb83a] hover:text-[#161616]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>

                            {/* Instagram Link */}
                            <a
                                href="https://www.instagram.com/mccannical_roofing"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#7cb83a] hover:text-[#161616]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>

                            {/* YouTube Link */}
                            <a
                                href="https://www.youtube.com/@mccannicalroofing"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#7cb83a] hover:text-[#161616]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Copyright bar */}
                    <div className="border-t border-white/10 pt-4 text-center sm:text-left">
                        <p className="text-sm text-white/60">
                            © {year} McCannical Roofing &amp; Exteriors. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to top button (Moved to left-6) */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="fixed bottom-6 left-6 z-30 flex h-11 w-11 items-center justify-center rounded-md border border-[#7cb83a]/60 bg-[#161616] text-[#7cb83a] shadow-lg transition-colors hover:bg-[#7cb83a] hover:text-[#161616]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </button>
        </footer>
    );
}