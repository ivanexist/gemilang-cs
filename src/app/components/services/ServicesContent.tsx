"use client";
import { useStore } from "@/store/useStore";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { motion } from "framer-motion";
// import { getServices } from "@/app/lib/data";

export default function ServicesContent() {
  const { services } = useStore();

  return (
    <div className="flex flex-col pb-20 overflow-hidden bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-xl w-full mx-auto px-4 pb-8 mb-4 text-center"
      >
        <h1 className="font-bold text-4xl py-4 text-blue-600">
          Layanan Konstruksi Kami
        </h1>
        <p className="text-lg text-gray-500 pt-2 pb-4">
          Solusi konstruksi komprehensif yang disesuaikan untuk memenuhi
          kebutuhan infrastruktur dan bangunan Anda
        </p>
      </motion.div>

      <div className="max-w-screen-xl w-full mx-auto grid sm:grid-cols-1 sm:place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            // serviceId={service.id}
          />
        ))}
      </div>
      <div className="max-w-screen-xl sm:mx-2 lg:mx-auto bg-blue-600 mt-16 rounded-lg text-white">
        <div className="p-8 flex flex-col">
          <h1 className="font-bold text-3xl py-4 text-center">Layanan Kami</h1>
          <p className="text-lg text-gray-100">
            Kami menyediakan berbagai layanan konstruksi berkualitas tinggi
            untuk memenuhi kebutuhan proyek Anda dengan standar profesional
            internasional.
          </p>
          <div className="flex justify-center mt-4">
            <Link
              className="px-4 py-2 border rounded-lg bg-white text-blue-600 font-semibold mt-4 mr-4 hover:bg-blue-600 hover:text-white hover:cursor-pointer transition duration-300"
              href={`/layanan`}
            >
              Konsultasi Gratis
            </Link>
            <Link
              className="px-4 py-2 border-2 rounded-lg bg-blue-600 text-white font-semibold mt-4 mr-4 hover:bg-white hover:text-blue-600 hover:cursor-pointer transition duration-300"
              href={`/proyek`}
            >
              Lihat Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
