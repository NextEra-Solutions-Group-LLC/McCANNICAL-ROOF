import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import NeighborhoodButton from "./components/NeighborhoodButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - McCannical Roofing",
  description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, painting, fencing, siding & windows",
  openGraph: {
    title: "Home - McCannical Roofing",
    description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, painting, fencing, siding & windows",
    url: "https://mccannicalroofing.com/",
    siteName: "McCannical Roofing",
    images: [
      {
        url: "https://i.ibb.co/mVnWQGWh/image-removebg-preview-1.png",
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
    title: "Home - McCannical Roofing",
    description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, painting, fencing, siding & windows",
    images: ["https://i.ibb.co/mVnWQGWh/image-removebg-preview-1.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#101317] text-white">
        <Preloader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <NeighborhoodButton />
      </body>
    </html>
  );
}