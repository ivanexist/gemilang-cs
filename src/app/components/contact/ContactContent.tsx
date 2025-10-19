"use client";

import React from "react";
import ContactSection from "./ContactSection";
import ContactFAQ from "./ContactFAQ";

const ContactContent: React.FC = () => (
  <div className="relative isolate bg-white">
    <ContactSection />
    <ContactFAQ />
  </div>
);

export default ContactContent;
