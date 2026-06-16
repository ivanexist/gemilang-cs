"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Tim Kepemimpinan Berpengalaman",
    description: "Pengalaman lebih dari 10 tahun memberikan arahan strategis dan solusi efektif yang memastikan setiap proyek berjalan sukses.",
  },
  {
    title: "Inovasi & Teknologi Mutakhir",
    description: "Mengadopsi metode konstruksi terbaru untuk memastikan setiap proyek tidak hanya memenuhi standar hari ini, namun siap untuk masa depan.",
  },
  {
    title: "Manajemen Terintegrasi",
    description: "Dari perencanaan hingga serah terima, tahap proyek dijalankan secara terstruktur, transparan, dan tepat waktu.",
  },
  {
    title: "Penjaminan Kualitas (QA/QC)",
    description: "Standar ketat dan inspeksi rutin untuk memastikan hasil konstruksi selalu melampaui harapan dan durabilitas jangka panjang.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 border border-gray-100 z-10 w-4/5">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Profesional konstruksi di lapangan"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>

            {/* Overlapping Image */}
            <div className="absolute top-1/4 right-0 w-2/3 rounded-3xl overflow-hidden shadow-2xl shadow-masala-900/20 border-8 border-white z-20 translate-x-4">
              <Image
                src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/about-gcs.jpg"
                alt="Proyek konstruksi"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 left-10 bg-malachite-500 text-white p-6 rounded-2xl shadow-xl z-30 flex items-center gap-4 animate-float"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-bold font-PlayfairDisplay leading-none">100%</p>
                <p className="text-sm font-medium opacity-90">Keamanan & Kualitas</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase font-openSans">
                  Mengapa Memilih Kami?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-masala-900 mb-6 font-PlayfairDisplay leading-tight">
                Standar Keunggulan yang <br />
                <span className="text-blue-600">Menjadi Pembeda</span>
              </h2>
              <p className="text-masala-500 text-lg font-openSans font-light leading-relaxed">
                Kami tidak sekadar membangun struktur; kami membangun kepercayaan melalui dedikasi tanpa henti terhadap keunggulan di setiap tahap proyek.
              </p>
            </motion.div>

            {/* List */}
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <span className="font-bold font-PlayfairDisplay">0{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-masala-900 mb-2 font-PlayfairDisplay group-hover:text-blue-600 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-masala-600 font-openSans font-light leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
