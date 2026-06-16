"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kpt. Laut (T) Agus Wahyudi",
    role: "Kepala Bagian Fasilitas",
    company: "Lantamal V Surabaya",
    content: "PT Gemilang Cipta Sentosa telah menunjukkan profesionalisme tinggi dalam pengerjaan proyek pembangunan fasilitas Lantamal V. Kualitas pekerjaan dan ketepatan waktu yang konsisten menjadikan mereka mitra yang sangat dapat diandalkan.",
    initials: "AW",
  },
  {
    name: "Ir. Bambang Setiawan",
    role: "Manajer Proyek",
    company: "PT Terminal Teluk Lamong",
    content: "Kerjasama dalam proyek pembangunan jalan di kawasan Terminal Teluk Lamong berjalan sangat baik. Mereka sangat mengedepankan keselamatan kerja (HSE) dan standar mutu yang tinggi tanpa kompromi.",
    initials: "BS",
  },
  {
    name: "Kombes Drs. Hendra P.",
    role: "Direktur Operasional",
    company: "PT Pelindo Energi Logistik",
    content: "Kami sangat puas dengan hasil pekerjaan PT Gemilang Cipta Sentosa dalam instalasi perpipaan. Tim mereka sangat komunikatif, berpengalaman, dan responsif terhadap perubahan kebutuhan di lapangan.",
    initials: "HP",
  },
];

const StarRating = () => (
  <div className="flex space-x-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // Middle card active by default

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-40 w-96 h-96 bg-malachite-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 mb-6">
            <span className="text-blue-800 text-sm font-semibold tracking-wider uppercase font-openSans">
              Testimoni Klien
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-masala-900 mb-6 font-PlayfairDisplay">
            Kepercayaan yang <span className="text-blue-600">Terbukti</span>
          </h2>
          <p className="text-masala-500 text-lg font-light max-w-2xl mx-auto font-openSans">
            Bukan sekadar janji. Dengarkan langsung pengalaman dari mitra dan klien yang telah sukses bekerjasama dengan kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(1)}
              className={`relative p-8 md:p-10 rounded-3xl transition-all duration-500 cursor-pointer ${
                activeIndex === index
                  ? "bg-blue-900 text-white shadow-2xl shadow-blue-900/20 scale-[1.03] lg:z-10"
                  : "bg-white text-masala-800 border border-gray-100 shadow-sm hover:shadow-xl scale-100"
              }`}
            >
              <StarRating />

              <p className={`text-lg leading-relaxed mb-8 font-openSans font-light ${activeIndex === index ? "text-blue-50" : "text-masala-600"}`}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center mt-auto">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                  activeIndex === index ? "bg-white text-blue-900" : "bg-blue-50 text-blue-600"
                }`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className={`font-bold font-PlayfairDisplay ${activeIndex === index ? "text-white" : "text-masala-900"}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm font-openSans ${activeIndex === index ? "text-blue-200" : "text-masala-500"}`}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Large watermark quote */}
              <div className={`absolute top-4 right-8 text-8xl font-serif leading-none opacity-[0.03] select-none pointer-events-none ${
                activeIndex === index ? "text-white" : "text-masala-900"
              }`}>
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
