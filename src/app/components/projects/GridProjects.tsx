"use client";
import { Client, Project, Service } from "@/generated/prisma";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface ProjectsProps {
  projects: (Project & { Client: Client; Service: Service })[];
}
const GridProjects: React.FC<ProjectsProps> = ({ projects }) => {
  const searchParams = useSearchParams();
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  );

  const currentServiceUrl = searchParams.get("service");

  useEffect(() => {
    if (currentServiceUrl) {
      const service = projects.find(
        (p) => p.Service.url === currentServiceUrl
      )?.Service;
      setSelectedServiceId(service ? service.id : null);
    } else {
      setSelectedServiceId(null);
    }
  }, [currentServiceUrl, projects]);

  const filteredProjects = selectedServiceId
    ? projects.filter((project) => project.Service.id === selectedServiceId)
    : projects;
  return (
    <div className="flex flex-col ml-4 mr-8 pb-24 overflow-hidden bg-transparent">
      <div className=" max-w-screen-xl w-full mx-auto grid sm:grid-cols-1 sm:place-items-center gap-8">
        {filteredProjects.length === 0 ? (
          <div className="max-w-screen-xl w-full mx-auto text-center py-8">
            <p className="text-gray-600 text-lg">
              No projects found for this service.
            </p>
          </div>
        ) : (
          <div className="max-w-screen-xl w-full mx-auto grid sm:grid-cols-1 sm:place-items-center gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GridProjects;
