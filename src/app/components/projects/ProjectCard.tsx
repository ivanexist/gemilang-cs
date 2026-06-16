"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

interface ProjectCardProps {
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

type DescriptionItem = {
  overview: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { getClientById, getServiceById } = useStore();
  const client = getClientById(project.clientid);
  const service = getServiceById(project.serviceid);
  const images = project.images as string[];

  const projectDescription = Array.isArray(project.description)
    ? (project.description as DescriptionItem[])
    : [];

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative"
    >
      {/* Premium Image Container */}
      <div className="relative h-80 w-full overflow-hidden flex-shrink-0">
        <Image
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          width={800}
          height={600}
          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${images[0]}`}
          loading="lazy"
          alt={project.name}
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          {/* Service Category */}
          <Link href={`/layanan/${service?.url || ""}`} className="z-20">
            <span className="inline-flex items-center px-3 py-1.5 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded-sm hover:bg-blue-700 transition-colors">
              {service?.name ?? "Layanan"}
            </span>
          </Link>
          {/* Year */}
          <span className="inline-flex items-center px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded-sm border border-white/10">
            {project.yearcompleted.join(", ")}
          </span>
        </div>

        {/* Hover View Project Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-sm font-semibold tracking-wide">Lihat Detail</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Bottom Image Content (Client & Location) */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/70 font-semibold tracking-widest uppercase mb-1 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {project.location}
            </span>
            <span className="text-white font-medium text-sm drop-shadow-md line-clamp-1">
              {client?.name}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-white relative z-10 group-hover:bg-blue-50/30 transition-colors duration-500">
        <div className="flex flex-col">
          {/* Title */}
          <Link href={`/proyek/${project.url}`} scroll={true}>
            <h2 className="text-2xl font-bold text-gray-900 font-PlayfairDisplay group-hover:text-blue-700 transition-colors duration-300 mb-4 leading-tight">
              {project.name}
            </h2>
          </Link>

          {/* Overview */}
          <p className="text-gray-500 text-sm leading-relaxed font-openSans font-light line-clamp-3 mb-8">
            {projectDescription[0]?.overview}
          </p>
        </div>

        {/* Minimalist CTA */}
        <Link href={`/proyek/${project.url}`} className="mt-auto inline-block group/btn">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 uppercase tracking-widest">
            <span className="relative">
              Jelajahi Proyek
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover/btn:w-full"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
