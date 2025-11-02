"use client";

import Link from "next/link";
// import { Client, Project, Service } from "@/generated/prisma";
import Image from "next/image";
import { ReactSVG } from "react-svg";
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
  // maybe other fields later
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { getClientById, getServiceById } = useStore();
  const client = getClientById(project.clientid);
  const service = getServiceById(project.serviceid);
  // Safely handle images array
  const images = project.images as string[];

  const projectDescription = Array.isArray(project.description)
    ? (project.description as DescriptionItem[])
    : [];

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white overflow-hidden lg:my-0 lg:h-[324px] sm:h-full sm:w-full sm:mx-4 lg:mx-0 hover:border-blue-500 hover:shadow-xl border border-transparent transition-all duration-300"
    >
      <div className="h-full md:flex sm:flex-col md:flex-row">
        <Link href={`/proyek/${project.url}`} scroll={true}>
          <div className="group overflow-hidden">
            <Image
              className="sm:w-full md:w-72 sm:h-54 md:h-82 object-cover object-center hover:opacity-90 group-hover:scale-105 ease-in duration-200"
              width={1400}
              height={2400}
              src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${images[0]}`}
              loading="lazy"
              alt={project.name}
            />
          </div>
        </Link>

        <div className="px-6 py-4 flex-1 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex justify-between mb-4">
              <div className="bg-malachite-600 rounded-full py-2 px-4 text-xs text-white font-semibold">
                <Link href={`/layanan/${service?.url || ""}`}>
                  <p>{service?.name ?? "Unknown Service"}</p>
                </Link>
              </div>
              <div className="ml-4">
                <p className="flex text-blue-600">
                  <ReactSVG
                    className="text-center text-blue-500 transition-colors duration-300"
                    src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/date-gray.svg`}
                  />
                  <span className="text-sm font-semibold text-gray-800 p-1">
                    {project.yearcompleted.join(", ")}
                  </span>
                </p>
              </div>
            </div>
            <Link href={`/proyek/${project.url}`} scroll={true}>
              <h1 className="text-xl text-start font-bold text-blue-700 hover:text-blue-600">
                {project.name}
              </h1>
            </Link>
            <p className="py-4 text-gray-600">
              {projectDescription[0].overview}
            </p>
          </div>

          <div className="flex sm:flex-col md:flex-row sm:justify-between sm:items-start  text-gray-500 gap-4 pb-2">
            {/* Service */}
            <div className="flex items-center mt-4">
              {/* SVG Icon */}
              <div className="flex text-blue-600">
                <ReactSVG
                  src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/client-gray.svg`}
                />
                <span className="text-sm ml-1 text-gray-700 p-1">
                  {client?.name}
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center sm:mt-0 lg:mt-4 text-gray-500">
              <div className="flex">
                <ReactSVG
                  src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/location-gray.svg`}
                />
                <span className="text-sm ml-1 p-1 text-gray-700">
                  {project.location}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Link href={`/proyek/${project.url}`}>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input text-white h-9 rounded-md px-3 w-[96%] mx-2 sm:mt-4 md:mt-6 hover:cursor-pointer hover:shadow-lg bg-blue-700 duration-300 lg:hidden sm:mb-3 md:mb-0">
            Lihat Detail
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
