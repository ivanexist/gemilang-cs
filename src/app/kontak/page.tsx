import ContactContent from "../components/contact/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi PT Gemilang Cipta Sentosa untuk konsultasi dan penawaran proyek konstruksi Anda.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactContent />
    </main>
  );
}
