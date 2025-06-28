"use client";

import Link from "next/link";
import { Client, Project, Service } from "@/generated/prisma";
import Image from "next/image";

interface ProjectCardProps {
  project: Project & {
    Client: Client;
    Service: Service;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const images = project.images as string[];

  const projectDescription = Array.isArray(project.description)
    ? (project.description as string[])
    : [];

  return (
    <div className="bg-white overflow-hidden lg:my-0 lg:h-[324px] sm:h-full sm:w-full sm:mx-4 lg:mx-0 md:mr-8 lg:mr-0 hover:border-blue-500 hover:shadow-xl border border-transparent transition-all duration-300">
      <div className="h-full md:flex sm:flex-col md:flex-row p-4 ">
        <Link href={`/projects/${project.url}`} scroll={true}>
          <div>
            <Image
              className="sm:w-full md:w-72 h-72 object-cover object-center hover:opacity-90 hover:zoom-out-40 ease-in duration-150"
              width={1400}
              height={2400}
              src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${images[0]}`}
              loading="lazy"
              alt={project.name}
            />
          </div>
        </Link>

        <div className="px-6 flex-1 flex flex-col justify-between">
          <div className="flex flex-col">
            <Link href={`/projects/${project.url}`} scroll={true}>
              <h1 className="text-lg text-start font-bold text-blue-600 hover:text-blue-500 uppercase">
                {project.name}
              </h1>
            </Link>
            <p className="py-2 text-gray-600">
              {projectDescription[0].overview}
            </p>
          </div>

          <div className="flex justify-between items-center text-masala-800 gap-4 pb-2">
            {/* Service */}
            <div className="flex items-center mt-4">
              {/* SVG Icon */}
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                  stroke="#7edf1d"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                  stroke="#00cc00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="px-2 text-sm text-start">
                {project.Service?.name ?? "Unknown Service"}
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center mt-4 text-masala-800">
              <svg className="h-6 w-6" viewBox="0 0 64 64" fill="#00cc00">
                <path d="M32,0C18.7,0,8,10.7,8,24c0,5.2,1.7,10,4.6,13.9l16,24C29.4,63.3,30.7,64,32,64s2.6-0.7,3.3-1.8l16-24C54.3,34,56,29.2,56,24 C56,10.7,45.3,0,32,0z M32,32c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S36.4,32,32,32z" />
              </svg>
              <h1 className="px-2 text-sm text-start">{project.location}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
