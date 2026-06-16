"use client";

import CoreValuesCard from "./CoreValuesCard";
import { motion } from "framer-motion";

interface CoreValueItem {
  key: number;
  label: string;
  icon: string;
  description: string;
}

const CoreValuesItems: CoreValueItem[] = [
  { key: 1, label: "Glory", icon: "glory.svg", description: "Berusaha meraih hasil terbaik yang membanggakan bagi semua pihak." },
  { key: 2, label: "Excellent", icon: "excellence.svg", description: "Selalu memberikan hasil terbaik dengan standar kualitas yang tinggi." },
  { key: 3, label: "Modest", icon: "modest.svg", description: "Tetap rendah hati meski telah meraih berbagai pencapaian sukses." },
  { key: 4, label: "Innovative", icon: "innovative.svg", description: "Terbuka pada ide baru dan solusi mutakhir untuk efisiensi." },
  { key: 5, label: "Loyal", icon: "loyal.svg", description: "Setia pada nilai, etika, dan prinsip dalam segala tantangan." },
  { key: 6, label: "Accurate", icon: "accuracy.svg", description: "Menjaga presisi dan ketepatan demi hasil yang maksimal." },
  { key: 7, label: "Networking", icon: "networking.svg", description: "Membangun ekosistem kemitraan yang kuat dan saling mendukung." },
  { key: 8, label: "Growth", icon: "growth.svg", description: "Fokus pada perkembangan berkelanjutan dari seluruh aspek." },
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-gray-100">
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center text-[20vw] font-PlayfairDisplay font-bold text-gray-100/50 pointer-events-none z-0 whitespace-nowrap">
        VALUES
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
            <div className="w-2 h-2 rounded-full bg-malachite-500 mr-2" />
            <span className="text-blue-800 text-sm font-semibold tracking-wider uppercase font-openSans">
              Nilai Perusahaan
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-masala-900 mb-6 font-PlayfairDisplay">
            Fondasi <span className="text-blue-600">Kesuksesan Kami</span>
          </h2>
          <p className="text-masala-500 text-lg md:text-xl font-openSans font-light max-w-3xl mx-auto leading-relaxed">
            Prinsip-prinsip dasar yang menjadi pedoman dalam setiap keputusan yang kami ambil dan setiap proyek yang kami kerjakan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {CoreValuesItems.map((item, index) => (
            <CoreValuesCard
              key={item.key}
              coreValuesItems={item}
              coreValuesItemsId={item.key.toString()}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
