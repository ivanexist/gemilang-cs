"use client";

import Link from "next/link";
import { Client, Project, Service } from "@/generated/prisma";
import Image from "next/image";
import { ReactSVG } from "react-svg";

interface ProjectCardProps {
  project: Project & {
    Client: Client;
    Service: Service;
  };
}

type DescriptionItem = {
  overview: string;
  // maybe other fields later
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const images = project.images as string[];

  const projectDescription = Array.isArray(project.description)
    ? (project.description as DescriptionItem[])
    : [];

  return (
    <div className="bg-white overflow-hidden lg:my-0 lg:h-[324px] sm:h-full sm:w-full sm:mx-4 lg:mx-0 md:mr-8 lg:mr-0 hover:border-blue-500 hover:shadow-xl border border-transparent transition-all duration-300">
      <div className="h-full md:flex sm:flex-col md:flex-row ">
        <Link href={`/projects/${project.url}`} scroll={true}>
          <div>
            <Image
              className="sm:w-full md:w-72 h-82 object-cover object-center hover:opacity-90 hover:zoom-out-40 ease-in duration-150"
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
              <div className="bg-malachite-600 rounded-full p-2 text-xs text-white font-semibold uppercase">
                <p>{project.Service?.name ?? "Unknown Service"}</p>
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
            <Link href={`/projects/${project.url}`} scroll={true}>
              <h1 className="text-lg text-start font-bold text-blue-700 hover:text-blue-600 uppercase">
                {project.name}
              </h1>
            </Link>
            <p className="py-2 text-gray-600">
              {projectDescription[0].overview}
            </p>
          </div>

          <div className="flex justify-between items-center text-gray-500 gap-4 pb-2">
            {/* Service */}
            <div className="flex items-center mt-4">
              {/* SVG Icon */}
              <div className="flex text-blue-600">
                <ReactSVG
                  src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/client-gray.svg`}
                />
                <span className="text-sm ml-1 text-gray-800 p-1 font-semibold">
                  {project.Client.name}
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center mt-4 text-gray-500 ">
              <div className="flex">
                <ReactSVG
                  src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/location-gray.svg`}
                />
                <span className="text-sm ml-1 p-1 font-semibold text-gray-800">
                  {project.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
