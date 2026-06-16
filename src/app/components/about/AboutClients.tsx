"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Client {
  src: string;
  alt: string;
}

const clients: Client[] = [
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
    alt: "Dinas Fasilitas Pangkalan TNI Angkatan Laut",
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

export default function AboutClients() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-600 mr-2" />
            <span className="text-masala-700 text-sm font-medium font-openSans uppercase tracking-wider">
              Mitra Kepercayaan Kami
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-masala-900 mb-4 font-PlayfairDisplay"
          >
            Telah Dipercaya Oleh
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-masala-500 font-openSans font-light max-w-2xl mx-auto"
          >
            Membangun kepercayaan dan kolaborasi sukses dengan organisasi
            serta institusi terkemuka di Indonesia.
          </motion.p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center h-36 group hover:shadow-lg hover:border-blue-100 transition-all duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  sizes="(max-width: 640px) 120px, 160px"
                  className="object-contain p-2"
                  priority={index < 5}
                />
              </div>
              {/* Tooltip for name (optional, but good for UX) */}
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-masala-600 bg-white px-3 py-1 rounded shadow-md pointer-events-none whitespace-nowrap z-10 hidden md:block">
                {client.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
