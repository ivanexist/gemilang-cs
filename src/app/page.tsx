import HeroMain from "./components/home/hero/HeroMain";
import Features from "./components/home/Features";
import BestServices from "./components/home/BestServices";
import StatsCounter from "./components/home/StatsCounter";
import ClientLogoMarquee from "./components/home/ClientLogoMarquee";
import CoreValues from "./components/home/CoreValues";
import FeaturedProjects from "./components/home/FeaturedProjects";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import CTABanner from "./components/home/CTABanner";
import ContactSection from "./components/contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PT Gemilang Cipta Sentosa | Kontraktor Terbaik Jawa Timur",
  description: "PT Gemilang Cipta Sentosa adalah perusahaan jasa konstruksi terpercaya di Indonesia yang bergerak di bidang Sipil Bangunan, Pembangunan Jetty, dan Instalasi Perpipaan.",
};

export default function Home() {
  return (
    <main className="relative w-full bg-white overflow-hidden">
      {/* 1. Hero / Header Area */}
      <HeroMain />
      
      {/* 2. Overlapping Features (Trust Indicators) */}
      <Features />

      {/* 3. Why Choose Us (Value Proposition) */}
      <WhyChooseUs />

      {/* 4. Best Services (What We Do) */}
      <BestServices />

      {/* 5. Featured Projects (Portfolio) */}
      <FeaturedProjects />

      {/* 6. Statistics / Impact */}
      <StatsCounter />

      {/* 7. Client Logos Marquee */}
      <ClientLogoMarquee />

      {/* 8. Core Values */}
      <CoreValues />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Call To Action */}
      <CTABanner />

      {/* 11. Final Contact Hook */}
      <ContactSection />
    </main>
  );
}
