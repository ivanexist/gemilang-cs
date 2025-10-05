"use client";
import { useStore } from "@/store/useStore";
import ServiceCard from "./ServiceCard";
// import { getServices } from "@/app/lib/data";

export default function ServicesContent() {
  const { services } = useStore();

  return (
    <div className="flex flex-col pb-20 overflow-hidden bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-xl w-full mx-auto px-4 pb-8 mb-4 text-center">
        <h1 className="font-bold text-4xl py-4 text-blue-600">
          Layanan Konstruksi Kami
        </h1>
        <p className="text-lg text-gray-500 pt-2 pb-4">
          Solusi konstruksi komprehensif yang disesuaikan untuk memenuhi
          kebutuhan infrastruktur dan bangunan Anda
        </p>
      </div>
      {/* <div className="max-w-screen-xl w-full mx-auto px-4 pt-4 pb-8 bg-white bg-opacity-90 rounded-lg shadow-lg my-8">
        <h1 className="font-bold text-3xl pt-4 pb-8">
          Mengapa memilih layanan kami?
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3">
          <div>
            <h2 className="font-bold text-2xl pb-4">Teknologi Terdepan</h2>
            <p className="text-gray-600 text-lg">
              Menggunakan teknologi konstruksi modern dan peralatan canggil
              untuk hasil optimal
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl pb-4">Standar Internasional</h2>
            <p className="text-gray-600 text-lg">
              Semua layanan mengikuti standar kualitas dan keselamatan
              internasional.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl pb-4">Tim Berpengalaman</h2>
            <p className="text-gray-600 text-lg">
              Didukung oleh tim profesional dengan pengalaman lebih dari 25
              tahun.
            </p>
          </div>
        </div>
      </div> */}
      <div className="max-w-screen-xl w-full mx-auto grid sm:grid-cols-1 sm:place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            // serviceId={service.id}
          />
        ))}
      </div>
      <div className="max-w-screen-xl w-full mx-auto bg-blue-600 mt-16 rounded-lg text-white">
        <div className="p-8 flex flex-col">
          <h1 className="font-bold text-3xl py-4 text-center">Layanan Kami</h1>
          <p className="text-lg text-gray-100">
            Kami menyediakan berbagai layanan konstruksi berkualitas tinggi
            untuk memenuhi kebutuhan proyek Anda dengan standar profesional
            internasional.
          </p>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 border rounded-lg bg-white text-blue-600 font-semibold mt-4 mr-4 hover:bg-blue-600 hover:text-white hover:cursor-pointer transition duration-300">
              Konsultasi Gratis
            </button>
            <button className="px-4 py-2 border-2 rounded-lg bg-blue-600 text-white font-semibold mt-4 mr-4 hover:bg-white hover:text-blue-600 hover:cursor-pointer transition duration-300">
              Lihat Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
