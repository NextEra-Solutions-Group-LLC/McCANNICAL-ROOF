import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Preloader from "./components/Preloader";
import NeighborhoodButton from "./components/NeighborhoodButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mccannicalroofing.com"),
  title: {
    default: "Roofing Company in Austin & Cedar Park, TX | McCannical Roofing",
    template: "%s | McCannical Roofing",
  },
  description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, storm damage repair, and replacements.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Roofing Company in Austin & Cedar Park, TX | McCannical Roofing",
    description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, storm damage repair, and replacements.",
    url: "https://www.mccannicalroofing.com/",
    siteName: "McCannical Roofing",
    images: [
      {
        url: "/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "McCannical Roofing & Exteriors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Company in Austin & Cedar Park, TX | McCannical Roofing",
    description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, storm damage repair, and replacements.",
    images: ["/og-img.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // RoofingContractor Structured Data (JSON-LD) for Local SEO & AI Answer Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "McCannical Roofing & Exteriors",
    "url": "https://www.mccannicalroofing.com",
    "telephone": "+1-512-000-0000", // আপনার সঠিক ফোন নম্বরটি এখানে দিন
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "areaServed": [
      "Austin",
      "Cedar Park",
      "Round Rock",
      "Georgetown",
      "Leander"
    ],
    "sameAs": [
      "https://www.facebook.com/mccannicalroofing",
      "https://www.instagram.com/mccannicalroofing",
      "https://www.youtube.com/@mccannicalroofing"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#101317] text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <NeighborhoodButton />
      </body>
    </html>
  );
}
