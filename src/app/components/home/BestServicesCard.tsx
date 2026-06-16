"use client";

import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

interface Service {
  id: number;
  name: string;
  url: string;
  icon: string;
}

type BestServiceCardProps = {
  service: Service;
  index: number;
};

const BestServiceCard: React.FC<BestServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="h-full"
    >
      <Link href={`/layanan/${service.url || ""}`} className="block h-full group">
        <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2">
          
          {/* Animated Background Gradient on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon Container */}
            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-500 border border-blue-100 group-hover:border-white/20">
              <ReactSVG
                className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-500 [&_svg]:fill-currentColor [&_svg]:w-10 [&_svg]:h-10"
                src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/${service.icon}`}
              />
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-masala-900 mb-4 font-PlayfairDisplay group-hover:text-white transition-colors duration-500">
                {service.name}
              </h3>
              <p className="text-masala-500 font-openSans font-light line-clamp-3 group-hover:text-white/80 transition-colors duration-500">
                Layanan profesional {service.name.toLowerCase()} dengan standar kualitas tinggi dan pengerjaan yang presisi untuk hasil yang maksimal.
              </p>
            </div>

            {/* Bottom Arrow */}
            <div className="mt-8 flex items-center justify-between">
              <div className="w-12 h-0.5 bg-blue-100 group-hover:bg-white/30 transition-colors duration-500" />
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-masala-400 group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BestServiceCard;
