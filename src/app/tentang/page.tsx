import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";
import AboutVisionMission from "../components/about/AboutVisionMission";
import AboutClients from "../components/about/AboutClients";
import AboutCommitment from "../components/about/AboutCommitment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Pelajari lebih lanjut tentang PT Gemilang Cipta Sentosa, visi misi kami, dan klien-klien yang telah mempercayakan proyek konstruksinya kepada kami.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      <AboutHero />
      <AboutContent />
      <AboutVisionMission />
      <AboutClients />
      <AboutCommitment />
    </main>
  );
}
