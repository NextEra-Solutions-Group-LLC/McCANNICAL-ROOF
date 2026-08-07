
import Hero from "./components/Hero";
import About from "./components/About";

import WhyChooseUs from "./components/WhyChose";
import TrustedPartners from "./components/Marque";
import Process from "./components/Process";
import Faq from "./components/Fqa";
import CtaNewsletter from "./components/Cta";
import ServicesArea from "./service-area/page";
import Services from "./components/Services";
import Testimonials from "./components/Testomonials";
import ProjectGallery from "./components/Gallery";
import FloatingActions from "./components/Floating";


export default function Home() {
  return (
    <div>

      <Hero />
      <About />
      <Services />
      {/* <ServicesArea /> */}
      <TrustedPartners />
      <ProjectGallery />
      <WhyChooseUs />
      <Process />
      <Faq />
      <Testimonials />
      <CtaNewsletter />
      <FloatingActions />
    </div>
  );
}
