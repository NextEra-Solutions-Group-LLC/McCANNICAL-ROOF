import type { Metadata } from 'next';
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChose";
import TrustedPartners from "./components/Marque";
import Process from "./components/Process";
import Faq from "./components/Fqa";
import CtaNewsletter from "./components/Cta";
import Services from "./components/Services";
import Testimonials from "./components/Testomonials";
import FloatingActions from "./components/Floating";

export const metadata: Metadata = {
  title: "McCannical Roofing | Austin & Cedar Park, TX",
  description: "Looking for trusted McCannical Roofing contractors in Austin & Cedar Park, TX? We offer expert roof replacement, repair, and storm damage solutions.",
  alternates: {
    canonical: "https://www.mccannicalroofing.com",
  },
  openGraph: {
    title: "McCannical Roofing | Austin & Cedar Park, TX",
    description: "Looking for trusted McCannical Roofing contractors in Austin & Cedar Park, TX? We offer expert roof replacement, repair, and storm damage solutions.",
    url: "https://www.mccannicalroofing.com",
    siteName: "McCannical Roofing",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "McCannical Roofing & Exteriors",
    "alternateName": "Macca Roofing",
    "url": "https://www.mccannicalroofing.com",
    "telephone": "+1-512-238-3000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "areaServed": [
      "Austin",
      "Barton Creek",
      "Brushy Creek",
      "Cedar Park",
      "Georgetown",
      "Lago Vista",
      "Lakeway",
      "Leander",
      "Liberty Hill",
      "Round Rock",
      "Serenada"
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61564928592190",
      "https://www.instagram.com/mccannical_roofing",
      "https://www.youtube.com/@mccannicalroofing"
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Services />
      <TrustedPartners />
      <WhyChooseUs />
      <Process />
      <Faq />
      <Testimonials />
      <CtaNewsletter />
      <FloatingActions />
    </div>
  );
}
