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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative"
    >
      {/* Decorative Top Line Reveal */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-700 to-malachite-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20" />

      {/* Image Section */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden flex-shrink-0">
        <Image
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          width={800}
          height={600}
          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${images[0]}`}
          loading="lazy"
          alt={project.name}
        />

        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-malachite-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />

        {/* Service Badge & Year */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
          <Link href={`/layanan/${service?.url || ""}`}>
            <span className="inline-flex items-center px-4 py-1.5 bg-malachite-600 backdrop-blur-md border border-white/20 text-white text-xs font-semibold rounded-full tracking-widest uppercase shadow-lg hover:bg-white/20 transition-colors">
              {service?.name ?? "Layanan"}
            </span>
          </Link>
          <span className="inline-flex items-center px-3 py-1 bg-black/40 backdrop-blur-sm text-white/90 text-xs font-bold rounded-lg border border-white/10">
            {project.yearcompleted.join(", ")}
          </span>
        </div>

        {/* Floating Play/View Action */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-2xl opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        {/* Client Overlay Badge (Bottom Left of Image) */}
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center gap-3 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-white/70 font-bold uppercase tracking-wider mb-0.5">
              Klien
            </p>
            <p className="text-sm font-semibold text-white line-clamp-1 drop-shadow-md">
              {client?.name}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-white relative z-10">
        <div className="flex flex-col">
          {/* Location / Meta row */}
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-malachite-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span className="text-xs font-semibold text-malachite-600 tracking-wider uppercase">
              {project.location}
            </span>
          </div>

          {/* Title */}
          <Link href={`/proyek/${project.url}`} scroll={true}>
            <h2 className="text-2xl font-bold text-masala-900 font-PlayfairDisplay group-hover:text-blue-700 transition-colors duration-300 mb-4 leading-snug">
              {project.name}
            </h2>
          </Link>

          {/* Overview */}
          <p className="text-masala-500 text-sm leading-relaxed font-openSans font-light line-clamp-3 mb-8">
            {projectDescription[0]?.overview}
          </p>
        </div>

        {/* Custom CTA Button */}
        <Link href={`/proyek/${project.url}`} className="mt-auto">
          <div className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-500 cursor-pointer">
            <span className="text-sm font-bold text-blue-700 group-hover:text-white transition-colors duration-500">
              Jelajahi Proyek
            </span>
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
