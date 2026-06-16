"use client";

import { motion } from "framer-motion";

const AboutVisionMission = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-malachite-100/50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-masala-900 mb-4 font-PlayfairDisplay"
          >
            Visi & Misi Perusahaan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-masala-500 font-openSans font-light max-w-2xl mx-auto"
          >
            Arah dan tujuan utama kami dalam memberikan layanan konstruksi
            terbaik untuk setiap klien.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-masala-900 mb-6 font-PlayfairDisplay">Visi Kami</h3>
            <p className="text-masala-600 text-lg leading-relaxed font-openSans font-light">
              Menjadi Perusahaan Konstruksi Terkemuka dan Professional di Jawa
              Timur pada tahun 2030, yang dikenal karena kualitas, inovasi, dan
              keandalan layanannya.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-malachite-900/5 transition-all duration-500"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-malachite-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="w-16 h-16 rounded-2xl bg-malachite-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-malachite-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.671zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-masala-900 mb-6 font-PlayfairDisplay">Misi Kami</h3>
            <ul className="space-y-4">
              {[
                "Menyediakan solusi jasa yang inovatif dengan melibatkan sumber daya terbaik dan relasi yang kuat.",
                "Meningkatkan nilai tambah bagi stakeholder secara berkelanjutan melalui pertumbuhan dan keuntungan perusahaan.",
                "Fokus pada kualitas layanan serta human capital yang unggul dan berakhlak.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-malachite-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-malachite-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-masala-600 leading-relaxed font-openSans font-light text-base flex-1">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
