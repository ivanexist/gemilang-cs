"use client";
import { UserCheck, Cog, ClipboardList, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: UserCheck,
    title: "Tim Kepemimpinan Berpengalaman",
    description:
      "Dengan pengalaman lebih dari 15 tahun, tim kepemimpinan kami mampu memberikan arahan strategis dan solusi efektif yang memastikan setiap proyek berjalan dengan sukses.",
  },
  {
    icon: Cog,
    title: "Inovasi Konstruksi Masa Depan",
    description:
      "Dengan mengadopsi teknologi dan metode terbaru, kami memastikan setiap proyek tidak hanya memenuhi kebutuhan hari ini, tetapi juga siap menghadapi tantangan masa depan.",
  },
  {
    icon: ClipboardList,
    title: "Manajemen Proyek Terintegrasi",
    description:
      "Dari perencanaan hingga serah terima, setiap tahap proyek dijalankan secara terstruktur, transparan, dan tepat waktu.",
  },
  {
    icon: Award,
    title: "Proses Penjaminan Kualitas",
    description:
      "Dengan standar ISO 9001 dan inspeksi rutin, kami memastikan hasil konstruksi selalu memenuhi bahkan melampaui harapan klien.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center sm:mb-10 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Mengapa Memilih PT Gemilang Cipta Sentosa?
          </h2>
          <p className="text-xl text-masala-600 max-w-3xl mx-auto">
            Inovasi dan standar keunggulan kami menjadi pembeda utama dalam
            dunia konstruksi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:order-2 lg:order-1 col-span-1"
          >
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <reason.icon
                    className="text-malachite-600 text-2xl"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-masala-800">{reason.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative sm:order-1 lg:order-2 col-span-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional construction team planning"
              className="rounded-xl shadow-lg w-full h-auto"
              width={800}
              height={600}
            />

            {/* Statistics Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-malachite-600 p-6 sm:rounded-tr-xl sm:rounded-es-xl  lg:rounded-xl shadow-lg sm:ml-6 lg:ml-0 sm:mb-6 lg:mb-0">
              <div className="grid grid-cols-2 gap-4 text-center text-white">
                <div>
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-sm text-secondary">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-secondary">Safety Record</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
