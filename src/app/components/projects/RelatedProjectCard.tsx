"use client";

import Link from "next/link";
// import { Client, Project, Service } from "@/generated/prisma";
import Image from "next/image";
import { ReactSVG } from "react-svg";
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
}

// type DescriptionItem = {
//   overview: string;
//   // maybe other fields later
// };

const RelatedProjectCard: React.FC<RelatedProjectCardProps> = ({ project }) => {
  const { getClientById, getServiceById } = useStore();
  const client = getClientById(project.clientid);
  const service = getServiceById(project.serviceid);
  // Safely handle images array
  const images = project.images as string[];

  //   const projectDescription = Array.isArray(project.description)
  //     ? (project.description as DescriptionItem[])
  //     : [];

  return (
    <div className="bg-white overflow-hidden lg:my-0 lg:h-[420px] sm:h-full sm:w-full md:mr-0 lg:mr-0 hover:border-blue-500 hover:shadow-xl border border-transparent transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-background border-0 border-transparent shadow-sm overflow-hidden group project-card">
          <div className="relative h-52 overflow-hidden">
            <Image
              src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${images[0]}`}
              loading="lazy"
              alt={project.name}
              width={1400}
              height={2400}
              className="project-image w-full h-full object-cover"
            />
            <div className="bg-malachite-600 rounded-full py-2 px-4 text-xs text-white font-semibold z-30   absolute top-2 left-2">
              <Link href={`/layanan/${service?.url || ""}`}>
                <p>{service?.name ?? "Unknown Service"}</p>
              </Link>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-700 font-PlayfairDisplay">
              {project.name}
            </h3>
            {/* <p className="text-muted-foreground text-sm mb-4">
              {language === "en"
                ? relatedProject.description
                : relatedProject.descriptionId}
            </p> */}
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span className="flex items-center mr-4">
                <ReactSVG
                  src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/client-gray.svg`}
                  className="mr-2"
                />
                {client?.name}
              </span>
              <span className="flex items-center">
                <ReactSVG
                  className="text-center text-blue-500 transition-colors duration-300 mr-2"
                  src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/date-gray.svg`}
                />
                {project.yearcompleted.join(", ")}
              </span>
            </div>
            <Link href={`/proyek/${project.url}`}>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-white h-9 rounded-md px-3 w-full mt-6 text-blue-700 hover:border-blue-700 hover:cursor-pointer hover:shadow-lg hover:bg-blue-700 duration-300">
                View Project Details
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RelatedProjectCard;
