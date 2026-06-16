"use client";

import React from "react";
import ContactHero from "@/app/components/contact/ContactHero";
import TrustIndicators from "./TrustIndicators";
import ContactSection from "./ContactSection";
import ContactMap from "./ContactMap";
import ContactFAQ from "./ContactFAQ";

const ContactContent: React.FC = () => {
  return (
    <div className="relative bg-white flex flex-col">
      <ContactHero />
      <TrustIndicators />
      <ContactSection />
      <ContactMap />
      <ContactFAQ />
    </div>
  );
};

export default ContactContent;
