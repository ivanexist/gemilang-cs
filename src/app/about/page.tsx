import AboutClients from "../components/about/AboutClients";
import AboutContent from "../components/about/AboutContent";
import Breadcrumb from "../components/common/Breadcrumb";

export default function AboutPage() {
  return (
    <div>
      <Breadcrumb />
      <AboutContent />
      <AboutClients />
    </div>
  );
}
