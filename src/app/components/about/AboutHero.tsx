"use client";

import { motion } from "framer-motion";
import Breadcrumb from "../common/Breadcrumb";

const AboutHero = () => {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/about-gcs.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 left-10 w-48 h-48 bg-malachite-600/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Geometric accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
        <svg viewBox="0 0 200 400" fill="currentColor" className="h-full w-full text-white">
          <polygon points="200,0 200,400 0,400" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb theme="dark" />
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-malachite-500 mr-2 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium font-openSans">
              Tentang Perusahaan
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-PlayfairDisplay leading-tight">
            Membangun Masa Depan, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Mewujudkan Visi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-openSans font-light leading-relaxed">
            Berdiri sejak tahun 2014, PT Gemilang Cipta Sentosa telah menjadi mitra
            kepercayaan untuk solusi konstruksi inovatif dan berkelanjutan di
            seluruh Indonesia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
