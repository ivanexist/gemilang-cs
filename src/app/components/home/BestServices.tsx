"use client";

import Link from "next/link";
import BestServiceCard from "./BestServicesCard";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

export default function BestServices() {
  const { services } = useStore();

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-2" />
              <span className="text-blue-800 text-sm font-semibold tracking-wider uppercase font-openSans">
                Layanan Keahlian
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-masala-900 font-PlayfairDisplay leading-tight">
              Solusi Konstruksi <br />
              <span className="text-blue-600">Terbaik & Terpercaya</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/layanan"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            >
              Lihat Semua Layanan
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <BestServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
