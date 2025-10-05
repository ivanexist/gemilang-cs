"use client";

import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
// import { Service } from "@/generated/prisma";

interface ServiceCardProps {
  service: Service;
}

type DescriptionItem = {
  description_overview: string;
};

interface Service {
  id: number;
  name: string;
  url: string;
  icon: string;
  description: DescriptionItem[] | null;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const serviceDescription = Array.isArray(service.description)
    ? (service.description as DescriptionItem[])
    : [];
  return (
    <div className="bg-white border border-white hover:border-blue-500 hover:shadow-xl lg:m-2 py-4 px-2 relative z-10 group sm:mx-4 w-96 h-108 mb-4 transition duration-300 flex flex-col justify-between">
      <div className="py-2 sm:px-4 lg:px-8 relative group my-4">
        <div className="sm:flex my-2">
          <ReactSVG
            className="w-28 h-28 text-center text-blue-500 transition-colors duration-300"
            src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/${service.icon}`}
          />
        </div>
        <h1 className="mt-8 mb-4 text-xl font-bold text-malachite-600  font-PlayfairDisplay uppercase">
          {service.name}
        </h1>
        <p className="text-masala-800 text-base font-openSans">
          {serviceDescription[0].description_overview}
        </p>
      </div>
      <Link
        href={`/services/${service.url}`}
        className="sm:mx-4 lg:mx-8 mb-4 text-blue-600 font-semibold text-lg border-b-2 border-b-transparent"
      >
        <span className="pb-2 hover:border-b-2 hover:border-malachite-400 transition duration-300">
          Details
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard;
