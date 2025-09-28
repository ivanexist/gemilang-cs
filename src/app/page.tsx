import HeroMain from "./components/home/hero/HeroMain";
import Features from "./components/home/Features";
import BestServices from "./components/home/BestServices";
import CoreValues from "./components/home/CoreValues";
import FeaturedProjects from "./components/home/FeaturedProjects";
import WhyChooseUs from "./components/home/WhyChooseUs";
// import { Contact } from "lucide-react";
import ContactSection from "./components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <main className="relative w-full">
        <HeroMain />
        <Features />
        <BestServices />
        <FeaturedProjects />
        <WhyChooseUs />
        <CoreValues />
        <ContactSection />
      </main>
    </>
  );
}
