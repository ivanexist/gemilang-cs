"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface ImageItem {
  src: string;
  title: string;
  description?: string;
  category?: string;
}

const images: ImageItem[] = [
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pembangunan-Jalan/Proses-1.jpg",
    title: "Pembangunan Jalan Terminal Teluk Lamong",
    description: "Mempermudah akses pelabuhan dan logistik.",
    category: "Sipil Bangunan",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Gedung-Barak-Kowal-Lantamal-VI/Gedung-1.jpeg",
    title: "Gedung Barak Kowal Lantamal VI",
    category: "Sipil Bangunan",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pipa-Pelindo-Energi-Logistik/Side-1.jpg",
    title: "Perbaikan Pipa Bahan Bakar",
    category: "Instalasi Perpipaan",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Posal-Gili-Air/Side-1.jpg",
    title: "Pembangunan Gedung Pos Angkatan Laut",
    category: "Sipil Bangunan",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Rumneg-T45-Lantamal-V/Proses.jpeg",
    title: "Pembangunan Rumah Negara T45 Wonosari",
    category: "Sipil Bangunan",
  },
];

const GridItem: React.FC<ImageItem & { index: number }> = ({ src, title, description, category, index }) => {
  const isLarge = index % 5 === 0;
  const colSpanClass = isLarge ? "md:col-span-2" : "";
  const rowSpanClass = isLarge ? "md:row-span-2" : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer border border-white/10 ${colSpanClass} ${rowSpanClass}`}
    >
      {/* Base Image */}
      <Image
        src={`${src}?w=1080&auto=format`}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Default Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
      
      {/* Hover Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category Badge */}
      {category && (
        <div className="absolute top-5 left-5 z-10 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold rounded-full tracking-wider shadow-lg">
            {category}
          </span>
        </div>
      )}

      {/* Content Area */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg font-PlayfairDisplay leading-tight">
            {title}
          </h4>
          
          {/* Animated Description & Line */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 overflow-hidden">
            <div className="min-h-0">
              <div className="w-10 h-0.5 bg-blue-400 my-4" />
              {description && (
                <p className="text-blue-50 text-sm md:text-base font-light font-openSans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute top-5 right-5 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </motion.div>
  );
};

export default function FeaturedProjects() {
  return (
    <section className="relative py-24 bg-masala-950 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1610164989165-0c4701bc4ce2?q=80&w=2073&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-blue-900/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400 mr-2" />
            <span className="text-white/90 text-sm font-semibold tracking-wider uppercase font-openSans">
              Karya Terbaik Kami
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-PlayfairDisplay">
            Portofolio <span className="text-blue-400">Proyek Unggulan</span>
          </h2>
          <p className="text-gray-300 text-lg font-openSans font-light max-w-2xl mx-auto leading-relaxed">
            Mewujudkan dedikasi kami terhadap kualitas dan inovasi melalui hasil konstruksi yang kokoh, estetis, dan fungsional.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {images.map((img, index) => (
            <GridItem key={index} {...img} index={index} />
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/proyek"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            Lihat Semua Portofolio
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
