"use client";

import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

interface DescriptionItem {
  description_overview: string;
}

interface Service {
  id: number;
  name: string;
  url: string;
  icon: string;
  description: DescriptionItem[] | null;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const serviceDescription = Array.isArray(service.description)
    ? (service.description as DescriptionItem[])
    : [];
    
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-500 ease-out flex flex-col w-full h-full border border-gray-100 hover:-translate-y-2"
    >
      {/* Expanding Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-700 to-malachite-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20" />

      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-110 opacity-50 pointer-events-none" />

      {/* Floating Number Badge */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-gray-100 flex items-center justify-center z-10 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-blue-600/30 transition-all duration-500">
        <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors duration-500 font-openSans">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-8 md:p-10 pb-6 flex-1 flex flex-col relative z-10">
        {/* Premium Icon Container */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center shadow-sm group-hover:from-blue-600 group-hover:to-blue-800 group-hover:border-blue-700 group-hover:shadow-xl group-hover:shadow-blue-600/30 transition-all duration-500 group-hover:-translate-y-1">
            <ReactSVG
              className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-500 [&_svg]:fill-currentColor [&_svg]:w-10 [&_svg]:h-10"
              src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/${service.icon}`}
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-masala-900 font-PlayfairDisplay mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-masala-500 text-[15px] leading-relaxed font-openSans font-light flex-1 mb-8 line-clamp-4">
          {serviceDescription[0]?.description_overview}
        </p>

        {/* Custom CTA Button */}
        <Link href={`/layanan/${service.url}`} className="mt-auto">
          <div className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-500 cursor-pointer">
            <span className="text-sm font-bold text-blue-700 group-hover:text-white transition-colors duration-500">
              Pelajari Layanan
            </span>
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
