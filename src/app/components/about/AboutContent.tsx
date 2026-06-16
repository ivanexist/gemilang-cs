"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutContent = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
            <span className="text-blue-600 text-sm font-medium font-openSans">Siapa Kami?</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-masala-900 mb-6 font-PlayfairDisplay leading-tight">
            Dedikasi Terhadap Kualitas <br className="hidden sm:block" />
            <span className="text-blue-600">Sejak 2014</span>
          </h2>

          <div className="space-y-6 text-masala-600 text-lg font-openSans font-light leading-relaxed">
            <p>
              <strong className="font-semibold text-masala-800">PT. Gemilang Cipta Sentosa</strong> adalah perusahaan
              yang bergerak dalam bidang konstruksi Sipil Bangunan, Jetty/Dermaga,
              dan Pemasangan Instalasi Perpipaan (Pipa Air, Pipa Gas, dan Pipa
              Hydrant).
            </p>
            <p>
              Kami telah sukses mengerjakan konstruksi di berbagai instansi pemerintah
              maupun swasta, baik pada pelanggan industri, komersil, dan rumah tangga.
              Tenaga kerja kami merupakan tenaga yang terampil dan sangat berpengalaman
              di bidang bangunan gedung, sipil, mekanikal, dan elektrikal.
            </p>
            <p>
              Layanan kami mencakup konstruksi bangunan hunian tunggal dan Koppel,
              bangunan industri, komersial, hotel, konstruksi jalan, rel kereta api,
              instalasi tenaga listrik, pemasangan gas, dan pekerjaan rekayasa lainnya.
            </p>
          </div>
        </motion.div>

        {/* Right: Images & Badges */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100">
            <Image
              src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/about-gcs.jpg"
              alt="Konstruksi PT Gemilang Cipta Sentosa"
              width={800}
              height={600}
              className="w-full h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            {/* Elegant dark gradient at the bottom of the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
          </div>

          {/* Premium Floating Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-8 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 z-20 flex items-center space-x-5 animate-float"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-blue-600 font-PlayfairDisplay">10+</span>
            </div>
            <div>
              <p className="text-sm text-masala-500 font-medium uppercase tracking-wider mb-1">
                Tahun Pengalaman
              </p>
              <p className="text-masala-900 font-bold font-PlayfairDisplay text-xl leading-tight">
                Membangun<br />Kepercayaan
              </p>
            </div>
          </motion.div>

          {/* Decorative Pattern */}
          <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10 z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutContent;
