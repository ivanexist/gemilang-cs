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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-masala-50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative"
    >
      {/* Premium Image Container */}
      <div className="relative h-64 w-full overflow-hidden flex-shrink-0 bg-wildsand-100">
        <Image
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          width={800}
          height={600}
          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${images[0]}`}
          loading="lazy"
          alt={project.name}
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-masala-950/80 via-masala-950/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <span className="inline-flex items-center px-3 py-1 bg-malachite-600 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase rounded-sm">
            {service?.name}
          </span>
        </div>

        {/* Hover View Project Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
            <span className="text-sm font-semibold tracking-wide">Eksplorasi</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Bottom Image Content (Title) */}
        <div className="absolute bottom-4 left-5 right-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white font-PlayfairDisplay leading-tight drop-shadow-md line-clamp-2">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-white relative z-10 group-hover:bg-tory-blue-50/10 transition-colors duration-500">
        
        {/* Minimalist Metadata */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-masala-400 mt-0.5 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <div>
              <p className="text-[10px] font-bold text-masala-400 uppercase tracking-widest leading-none mb-1">Klien</p>
              <p className="text-sm font-semibold text-masala-900 leading-none">{client?.name}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-malachite-500 mt-0.5 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div>
              <p className="text-[10px] font-bold text-masala-400 uppercase tracking-widest leading-none mb-1">Lokasi</p>
              <p className="text-sm font-semibold text-masala-900 leading-none">{project.location}</p>
            </div>
          </div>
        </div>

        {/* Minimalist CTA */}
        <Link href={`/proyek/${project.url}`} className="mt-auto inline-block group/btn">
          <div className="flex items-center justify-between w-full pt-4 border-t border-masala-50">
            <span className="text-[11px] font-bold text-masala-900 group-hover:text-tory-blue-600 transition-colors duration-300 uppercase tracking-widest">
              Lihat Detail
            </span>
            <div className="w-8 h-8 rounded-full border border-masala-200 group-hover:border-tory-blue-600 flex items-center justify-center group-hover:bg-tory-blue-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-masala-400 group-hover:text-white transition-colors duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default RelatedProjectCard;
