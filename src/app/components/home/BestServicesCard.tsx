"use client";

import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";
// import { service } from "@/store/useStore";
// Debug: Log service data
interface Service {
  id: number;
  name: string;
  url: string;
  icon: string;
  // description: DescriptionItem[] | null;
}
type BestServiceCardProps = {
  service: Service;
  index: number;
};
const BestServiceCard: React.FC<BestServiceCardProps> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white border border-white hover:border-blue-500 hover:shadow-xl lg:m-2 py-4 px-2 relative z-10 group sm:mx-4 w-96 h-[18rem] mb-4 transition-colors duration-300"
    >
      <Link href={`/layanan/${service.url || ""}`}>
        <div className="py-2 sm:px-4 lg:px-8 relative group my-4">
          <div className="sm:flex sm:justify-center sm:items-center my-2">
            <ReactSVG
              className="w-28 h-28 text-center text-blue-500 transition-colors duration-300"
              src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/${service.icon}`}
            />
          </div>
          <h3 className="mt-12 text-xl font-bold text-malachite-600 text-center font-PlayfairDisplay uppercase">
            {service.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default BestServiceCard;
