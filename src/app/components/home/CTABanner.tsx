"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-masala-950">
      {/* Background Image & Cinematic Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-malachite-950/80" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-malachite-400 mr-2 animate-pulse" />
            <span className="text-white/90 text-sm font-semibold tracking-wider uppercase font-openSans">
              Mulai Langkah Pertama
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-PlayfairDisplay leading-tight drop-shadow-lg">
            Wujudkan Proyek Konstruksi <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-malachite-300">
              Impian Anda Hari Ini
            </span>
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light font-openSans leading-relaxed">
            Dapatkan konsultasi gratis dengan tim ahli kami. Kami siap memberikan solusi terbaik, inovatif, dan efisien untuk setiap kebutuhan konstruksi Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/kontak">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center px-10 py-4 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                <span className="relative z-10 flex items-center">
                  Hubungi Kami Sekarang
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </motion.button>
            </Link>
            
            <Link href="/layanan">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                Jelajahi Layanan
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
