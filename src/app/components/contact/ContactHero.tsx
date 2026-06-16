"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumb from "../common/Breadcrumb";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative min-h-[450px] md:min-h-[550px] flex items-center overflow-hidden bg-masala-950">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pembangunan-Jalan/Proses-2-jalan.jpeg"
          alt="Contact Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-masala-950/70 to-blue-950/80" />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-header-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-28 text-left">
        {/* Breadcrumb Area */}
        <div className="mb-8 flex justify-start">
          <Breadcrumb theme="dark" />
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-malachite-400 rounded-full animate-pulse" />
            <span className="text-white/90 font-semibold text-sm tracking-widest uppercase">
              Konsultasi Gratis
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-PlayfairDisplay leading-tight drop-shadow-lg">
            Hubungi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-malachite-400">
              Kami
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100/90 font-openSans font-light leading-relaxed mb-10 max-w-2xl">
            Diskusikan kebutuhan proyek konstruksi Anda. Tim ahli kami siap mendengarkan, memberikan solusi, dan memberikan penawaran terbaik.
          </p>
          
          {/* Quick Actions Array */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-start gap-4"
          >
            <a
              href="https://wa.me/62318522710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-malachite-600 text-white font-semibold hover:bg-malachite-500 hover:shadow-lg hover:shadow-malachite-600/30 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
            <a
              href="mailto:gemilangciptasentosa@gmail.com"
              className="inline-flex items-center px-6 py-3.5 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Kirim Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
