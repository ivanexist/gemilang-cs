"use client";
// import { Client, Project, Service } from "@/generated/prisma";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// import { useStore } from "@/store/useStore";
import { Project } from "@/store/useStore";

const GridProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  {
    console.log("projects" + projects);
  }
  const searchParams = useSearchParams();
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  );

  const currentServiceUrl = searchParams.get("service");

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/src/app/json/gcsdata.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch gcsdata.json");
        }
        const rawProjects = await response.json();
        // Convert IDs to strings
        const formattedProjects: Project[] = rawProjects.map(
          (project: any) => ({
            ...project,
            id: String(project.id),
            clientId: String(project.clientId),
            serviceId: String(project.serviceId),
            Client: {
              ...project.Client,
              id: String(project.Client.id),
            },
            Service: {
              ...project.Service,
              id: String(project.Service.id),
            },
          })
        );
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects.json:", error);
      }
    }
    loadProjects();
  }, []);
  {
    console.log("projects" + projects);
  }
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
    <div className="flex flex-col mr-8 pb-24 overflow-hidden bg-transparent">
      <div className="max-w-screen-xl w-full mx-auto grid sm:grid-cols-1 sm:place-items-center gap-8">
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
