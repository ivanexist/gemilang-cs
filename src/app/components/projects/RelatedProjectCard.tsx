"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

interface RelatedProjectCardProps {
  project: {
    id: number;
    clientid: number;
    serviceid: number;
    name: string;
    description: {
      summary: string;
      overview: string;
      paragraph_1: string;
      paragraph_2: string;
      paragraph_3: string;
    }[];
    location: string;
    yearcompleted: string[];
    url: string;
    images: string[];
  };
  index: number;
}

const RelatedProjectCard: React.FC<RelatedProjectCardProps> = ({
  project,
  index,
}) => {
  const { getClientById, getServiceById } = useStore();
  const client = getClientById(project.clientid);
  const service = getServiceById(project.serviceid);
  const images = project.images as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <Image
          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${images[0]}`}
          loading="lazy"
          alt={project.name}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />

        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="px-3 py-1.5 bg-malachite-600 backdrop-blur-md text-white text-xs font-semibold rounded-full tracking-wider border border-white/20">
            {service?.name}
          </span>
        </div>

        {/* Project Name overlapping image bottom */}
        <div className="absolute bottom-4 left-6 right-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white font-PlayfairDisplay leading-tight drop-shadow-lg">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 bg-white">
        {/* Metadata Details */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span className="text-masala-700 font-medium">{client?.name}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="text-masala-500">{project.location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/proyek/${project.url}`} className="mt-auto">
          <div className="w-full flex items-center justify-between px-5 py-3.5 bg-gray-50 text-blue-700 text-sm font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <span>Lihat Detail</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default RelatedProjectCard;
