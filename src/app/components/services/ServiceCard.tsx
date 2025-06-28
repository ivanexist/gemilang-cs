"use client";

import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { Service } from "@/generated/prisma";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={`/services/${service.url}`}>
      <div className="bg-white border border-white hover:border-blue-500 hover:shadow-xl lg:m-2 py-4 px-2 relative z-10 group sm:mx-4 w-96 h-[18rem] mb-4 transition duration-300">
        <div className="py-2 sm:px-4 lg:px-8 relative group my-4">
          <div className="sm:flex sm:justify-center sm:items-center my-2">
            <ReactSVG
              className="w-28 h-28 text-center text-blue-500 transition-colors duration-300"
              src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/${service.icon}`}
            />
          </div>
          <h3 className="mt-12 text-xl font-bold text-malachite-600 text-center  font-PlayfairDisplay uppercase">
            {service.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
