"use client";

import { Service } from "@/generated/prisma";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ReactSVG } from "react-svg";
import { getServices } from "@/app/lib/data";
import Image from "next/image";

interface ServicesDetailsContentProps {
  service: Service;
  servicesList: Service[];
}

export default function ServiceDetails({
  service,
  servicesList,
}: ServicesDetailsContentProps) {
  const params = useParams();
  const currentSlug = params?.slug;
  // const [services, setServices] = useState<Service[]>([]);

  const serviceDescription = Array.isArray(service.description)
    ? (service.description as string[])
    : [];

  return (
    <section className="flex items-center bg-gray-100">
      <div className="justify-center flex-1 max-w-7xl sm:py-4 lg:py-0 lg:mb-12 mx-auto">
        <div className="grid sm:grid-cols-1 lg:grid-cols-7 sm:my-0 lg:my-2">
          <div className="col-span-5 ps-1">
            <div className="lg:flex sm:flex-col bg-gray-100">
              <div className="relative sm:h-80 md:h-[300px] lg:h-[500px] px-1 overflow-hidden">
                <Image
                  src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${service.image}`}
                  alt={service.name}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-center shadow-lg overflow-hidden"
                />
              </div>
              <div className="pt-8 sm:px-2 lg:px-0 lg:pr-4">
                <h1 className="sm:mt-4 lg:mt-0 text-2xl border-b-2 border-b-malachite-600 pb-4 mb-6 font-medium text-blue-600 sm:text-center lg:text-left font-PlayfairDisplay w-fit uppercase">
                  {service.name}
                </h1>
                <p className="my-4 text-lg leading-8 text-masala-800 font-openSans">
                  {serviceDescription[0].description_complete}
                </p>
              </div>
            </div>

            {/* Static Section */}
            <div className="py-4 sm:mx-2 md:mx-0">
              <h1 className="my-4 font-semibold text-blue-600 text-2xl sm:text-center lg:text-left font-PlayfairDisplay">
                Perencanaan dan Desain
              </h1>
              <p className="text-masala-800">
                <ul className="list-disc mx-4 font-openSans text-lg">
                  <li className="my-2">
                    Konsultasi mengenai desain struktural dan kebutuhan teknis
                    lainnya
                  </li>
                  <li className="my-2">
                    Saran tentang efisiensi biaya dan waktu pengerjaan
                  </li>
                  <li className="my-2">
                    Pemilihan material yang sesuai dengan anggaran dan tujuan
                    proyek
                  </li>
                </ul>
              </p>
            </div>
            <div className="py-4 sm:mx-2 md:mx-0">
              <h1 className="mb-4 font-semibold sm:text-center lg:text-left text-blue-600 text-2xl font-PlayfairDisplay">
                Manajemen Proyek
              </h1>
              <p className="text-masala-800">
                <ul className="list-disc mx-4 font-openSans text-lg">
                  <li className="my-2">
                    Penjadwalan proyek dan estimasi durasi pengerjaan
                  </li>
                  <li className="my-2">
                    Pengelolaan sumber daya manusia dan material di lapangan
                  </li>
                  <li className="my-2">
                    Strategi untuk mengatasi potensi hambatan yang bisa terjadi
                    selama pembangunan
                  </li>
                </ul>
              </p>
            </div>
            <div className="py-4 sm:mx-2 md:mx-0">
              <h1 className="mb-4 font-semibold sm:text-center lg:text-left text-blue-600 text-2xl font-PlayfairDisplay">
                Evaluasi Kelayakan
              </h1>
              <p className="text-masala-800">
                <ul className="list-disc mx-4 font-openSans text-lg">
                  <li className="my-2">
                    Kajian kelayakan proyek terkait dengan kondisi tanah, cuaca
                    dan aspek lingkungan
                  </li>
                </ul>
              </p>
            </div>
            <div className="py-4 sm:mx-2 md:mx-0">
              <h1 className="mb-4 font-semibold text-blue-600 text-2xl sm:text-center lg:text-left font-PlayfairDisplay">
                Biaya dan Anggaran
              </h1>
              <p className="text-masala-800">
                <ul className="list-disc mx-4 font-openSans text-lg">
                  <li className="my-2">
                    Diskusi mengenai estimasi biaya konstruksi dan bagaimana
                    cara mengelola anggaran proyek secara efektif
                  </li>
                  <li className="my-2">
                    Konsultasi tentang potensi penghematan biaya atau solusi
                    yang lebih efisien
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-start col-span-2 sm:mx-2 lg:mx-0 pb-4">
            <div className="ml-8 leading-6 bg-transparent border-2 shadow border-transparent">
              <ul className="divide-y divide-blue-300">
                {servicesList.map((service) => (
                  <Link href={`/services/${service.url}`} key={service.id}>
                    <li
                      className={`text-blue-500 hover:text-white hover:bg-blue-500 hover:cursor-pointer hover:border-l-8 hover:border-l-malachite-600 border-b border-b-blue-300 ${
                        service.url === currentSlug
                          ? "text-white bg-blue-500 font-semibold border-l-8 border-l-malachite-600"
                          : ""
                      } hover:font-semibold py-6 px-8 text-lg group`}
                    >
                      <div className="flex">
                        <ReactSVG
                          className={`w-8 h-8 group-hover:text-white text-blue-500 transition-colors duration-300 ${
                            service.url === currentSlug ? "text-white" : ""
                          }`}
                          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/${service.icon}`}
                        />
                        <span className="ml-4 mt-1">{service.name}</span>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
