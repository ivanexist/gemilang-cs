"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ClientLogo {
  src: string;
  alt: string;
}

const clients: ClientLogo[] = [
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/tni-al.jpg",
    alt: "TNI AL",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/pelindo_energi_log.jpg",
    alt: "Pelindo Energi Logistik",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/pt-terminal-teluk-lamong.jpg",
    alt: "PT Terminal Teluk Lamong",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/peti_kemas_logo.jpg",
    alt: "Terminal Peti Kemas Surabaya",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/lamong-energi-logo.jpg",
    alt: "PT Lamong Energi Indonesia",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/BMS.png",
    alt: "PT Berlian Manyar Sejahtera",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Disfaslanal.png",
    alt: "Disfaslanal",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Kodiklatal.jpg",
    alt: "KODIKLATAL",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Kodikmar.png",
    alt: "KODIKMAR",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Lantamal V.png",
    alt: "Lantamal V",
  },
];

export default function ClientLogoMarquee() {
  // Double the array for seamless infinite scroll
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3 font-PlayfairDisplay">
            Dipercaya Oleh
          </h2>
          <p className="text-masala-500 text-lg font-light max-w-2xl mx-auto font-openSans">
            Membangun kepercayaan dengan organisasi dan institusi terkemuka di Indonesia
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {doubledClients.map((client, index) => (
            <div
              key={`${client.alt}-${index}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center h-20 w-40 px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={160}
                height={60}
                className="object-contain h-14 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
