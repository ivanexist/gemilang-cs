import Breadcrumb from "../components/common/Breadcrumb";
import ContactContent from "../components/contact/ContactContent";

export default function ContactPage() {
  return (
    <div>
      <Breadcrumb />
      <div className="">
        <ContactContent />
      </div>
    </div>
  );
}
