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
    "url": "https://www.mccannicalroofing.com",
    "telephone": "+1-512-238-3000",
    "email": "Info@McCannicalRoofing.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13785 Research Blvd Suite 125",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78750",
      "addressCountry": "US"
    },
    "openingHours": ["Mo-Fr 07:00-19:00", "Sa 07:00-14:00"],
    "areaServed": [
      "Austin",
      "Cedar Park",
      "Round Rock",
      "Georgetown",
      "Leander",
      "Pflugerville",
      "Lakeway",
      "Liberty Hill",
      "Lago Vista",
      "Brushy Creek"
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
