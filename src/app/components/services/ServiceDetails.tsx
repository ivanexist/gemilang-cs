"use client";

import { Service } from "@/generated/prisma";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ReactSVG } from "react-svg";
import { getServices } from "@/app/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
// import RelatedProjectByService from "./RelatedProjectByService";

interface ServicesDetailsContentProps {
  service: Service;
  servicesList: Service[];
}

type ServiceDescription = {
  description_new: string[];
  description_key_benefit: string[];
  description_our_process: string[];
};

export default function ServiceDetails({
  service,
  servicesList,
}: ServicesDetailsContentProps) {
  const params = useParams();
  const currentSlug = params?.slug;
  // const [services, setServices] = useState<Service[]>([]);

  const serviceDescription = Array.isArray(service.description)
    ? (service.description as ServiceDescription[])
    : [];

  return (
    <section className="flex items-center bg-gray-100">
      <div className="justify-center flex-1 max-w-7xl sm:py-4 lg:py-0 lg:mb-12 mx-auto">
        <div className="grid sm:grid-cols-1 lg:grid-cols-7 sm:my-0 lg:my-2">
          <div className="col-span-5 ps-1">
            <div className="lg:flex sm:flex-col bg-gray-100">
              <div className="relative sm:h-80 md:h-[300px] lg:h-[570px] px-1 overflow-hidden">
                <Image
                  src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${service.image}`}
                  alt={service.name}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover object-center shadow-lg overflow-hidden"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-background border border-masala-200 rounded-lg mt-10 sm:mx-2 lg:mx-0">
                  <div className="p-8">
                    <div className=" sm:px-2 lg:px-0 lg:pr-4">
                      <h1 className="sm:mt-4 lg:mt-0 text-2xl mb-6 font-semibold text-blue-700 sm:text-center lg:text-left font-PlayfairDisplay w-fit">
                        {service.name}
                      </h1>
                      <p className="my-4 text-medium leading-8 text-masala-600 font-openSans">
                        {serviceDescription[0]?.description_new[0]}
                      </p>
                      <p className="my-4 text-medium leading-8 text-masala-600 font-openSans">
                        {serviceDescription[0].description_new[1]}
                      </p>
                    </div>

                    <div className="border-t border-masala-200 my-10"></div>

                    <h3 className="text-2xl font-bold text-blue-700 mb-8 ">
                      Keunggulan Utama
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                      {service.description[0]?.description_key_benefit.map(
                        (benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-start space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 border-l-4 border-l-emerald-500 border border-emerald-300 hover:border-emerald-400 shadow-md hover:shadow-lg dark:from-emerald-950 dark:to-emerald-900 dark:hover:from-emerald-900 dark:hover:to-emerald-800 dark:border-emerald-700 dark:hover:border-emerald-600"
                          >
                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md border border-white/30 dark:bg-emerald-600">
                              <svg
                                className="text-white w-3.5 h-3.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-[hsl(220,8.9%,46.1%)] font-medium leading-relaxed">
                              {benefit}
                            </span>
                          </motion.div>
                        )
                      )}
                    </div>

                    <div className="border-t border-masala-200 my-10"></div>

                    <h3 className="text-2xl font-bold text-blue-700 mb-8">
                      Proses Kami
                    </h3>
                    <div className="space-y-5">
                      {service.description[0]?.description_our_process.map(
                        (step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-start space-x-5 p-5 bg-gradient-to-r from-blue-50 to-sky-100 rounded-xl border-2 border-blue-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300 shadow-md hover:bg-gradient-to-r hover:from-blue-100 hover:to-sky-200 dark:from-blue-950 dark:to-sky-900 dark:border-blue-700 dark:hover:border-blue-600 dark:hover:from-blue-900 dark:hover:to-sky-800"
                          >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-xl border-2 border-white/50 ring-2 ring-blue-300 dark:from-blue-600 dark:to-sky-700 dark:ring-blue-700">
                              {index + 1}
                            </div>
                            <div className="flex-1 pt-1">
                              <span className="text-[hsl(220,8.9%,46.1%)] font-medium leading-relaxed text-base">
                                {step}
                              </span>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="flex flex-col items-start col-span-2 sm:mx-2 lg:mx-0 pb-4">
            <div className="ml-8 leading-6 bg-transparent border-2 shadow border-transparent">
              <ul className="divide-y divide-blue-300">
                {servicesList.map((service) => (
                  <Link href={`/services/${service.url}`} key={service.id}>
                    <li
                      className={`text-blue-600 transition-all duration-300 hover:text-white hover:bg-blue-700 hover:cursor-pointer hover:border-l-8 hover:border-l-malachite-600 border-b border-b-blue-300 ${
                        service.url === currentSlug
                          ? "text-white bg-blue-700 font-semibold border-l-8 border-l-malachite-600"
                          : ""
                      } hover:font-semibold py-6 px-8 text-base group`}
                    >
                      <div className="flex">
                        <ReactSVG
                          className={`w-8 h-8 group-hover:text-white text-blue-600 transition-colors duration-300 ${
                            service.url === currentSlug ? "text-white" : ""
                          }`}
                          src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/${service.icon}`}
                        />
                        <span className="ml-4 mt-1">{service.name}</span>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* Service Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-transparent border border-masala-200 rounded-lg shadow-sm mt-10 ml-8 w-full pr-12">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Informasi Layanan
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg
                        className="text-purple-500 dark:text-purple-400 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                      <div>
                        <p className="text-sm text-[hsl(220,8.9%,46.1%)]">
                          Timeline
                        </p>
                        <p className="font-medium text-gray-800">
                          Berbasis Proyek
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        className="text-purple-500 dark:text-purple-400 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
                      </svg>
                      <div>
                        <p className="text-sm text-[hsl(220,8.9%,46.1%)]">
                          Kualitas
                        </p>
                        <p className="font-medium text-gray-800">
                          Bersertifikat ISO
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        className="text-purple-500 dark:text-purple-400 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                      <div>
                        <p className="text-sm text-[hsl(220,8.9%,46.1%)]">
                          Tim
                        </p>
                        <p className="font-medium text-gray-800">
                          Profesional Ahli
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-transparent border border-masala-200 rounded-lg shadow-sm mt-10 ml-8 w-[85%]">
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Siap Memulai?
                  </h3>
                  <p className="mb-6 text-masala-600">
                    Hubungi kami untuk konsultasi gratis dan proposal proyek.
                  </p>
                  <Link href="/contact">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/80 h-10 px-4 py-2 w-full bg-blue-700 text-white">
                      <svg
                        className="mr-2 h-4 w-4 text-white font-semibold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      Get Free Quote
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <RelatedProjectByService service={service} /> */}
    </section>
  );
}
