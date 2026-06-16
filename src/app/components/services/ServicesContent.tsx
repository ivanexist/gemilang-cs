"use client";
import { useStore } from "@/store/useStore";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "../common/Breadcrumb";

export default function ServicesContent() {
  const { services } = useStore();

  const stats = [
    { value: "7", label: "Layanan Profesional", icon: "🏗️" },
    { value: "50+", label: "Proyek Selesai", icon: "✅" },
    { value: "10+", label: "Tahun Pengalaman", icon: "📅" },
    { value: "6+", label: "Klien Terpercaya", icon: "🤝" },
  ];

  return (
    <div className="flex flex-col pb-24 bg-slate-50 relative min-h-screen">
      {/* Premium Cinematic Header */}
      <div className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-masala-950 mb-8">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071"
            alt="Layanan Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-masala-950" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="service-header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-header-grid)" />
          </svg>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-left"
        >
          {/* Breadcrumb */}
          <div className="flex justify-start mb-6">
            <Breadcrumb theme="dark" />
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-malachite-400 animate-pulse" />
            Layanan Kami
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-PlayfairDisplay leading-tight drop-shadow-xl mb-6 max-w-3xl">
            Solusi Konstruksi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Terpadu</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-50/90 font-openSans font-light max-w-2xl leading-relaxed drop-shadow-md">
            Dari pembangunan gedung skala besar hingga infrastruktur jalan dan konstruksi baja kompleks. Kami siap mewujudkan visi proyek Anda dengan standar kualitas internasional.
          </p>
        </motion.div>
      </div>

      {/* Trust Stats Bar - Overlapping the Header */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-900/10 border border-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4">
                <span className="text-3xl mb-3 block opacity-80">{stat.icon}</span>
                <p className="text-3xl md:text-4xl font-bold text-masala-900 font-PlayfairDisplay mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-masala-500 font-openSans font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 place-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
