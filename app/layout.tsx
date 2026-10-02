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
    default: "McCannical Roofing | McCannical Roofing Company in Austin & Cedar Park, TX",
    template: "%s | McCannical Roofing",
  },
  description: "Looking for Macca (McCannical) Roofing in Austin & Cedar Park? We are your premier full-service contractor for roofing, gutters, storm damage repair, and replacements.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Macca Roofing | McCannical Roofing Company in Austin & Cedar Park, TX",
    description: "Looking for Macca (McCannical) Roofing in Austin & Cedar Park? We are your premier full-service contractor for roofing, gutters, storm damage repair, and replacements.",
    url: "https://www.mccannicalroofing.com/",
    siteName: "McCannical Roofing",
    images: [
      {
        url: "/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Macca & McCannical Roofing & Exteriors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macca Roofing | McCannical Roofing Company in Austin & Cedar Park, TX",
    description: "Looking for Macca (McCannical) Roofing in Austin & Cedar Park? We are your premier full-service contractor for roofing, gutters, storm damage repair, and replacements.",
    images: ["/og-img.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#101317] text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <NeighborhoodButton />
      </body>
    </html>
  );
}
