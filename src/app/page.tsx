import HeroMain from "./components/home/hero/HeroMain";
import Features from "./components/home/Features";
import BestServices from "./components/home/BestServices";
import CoreValues from "./components/home/CoreValues";
import FeaturedProjects from "./components/home/FeaturedProjects";

export default function Home() {
  return (
    <>
      <main className="relative w-full">
        <HeroMain />
        <Features />
        <BestServices />
        <FeaturedProjects />
        <CoreValues />
      </main>
    </>
  );
}
