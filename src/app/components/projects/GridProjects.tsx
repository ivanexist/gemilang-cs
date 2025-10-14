"use client";
// import { Client, Project, Service } from "@/generated/prisma";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "@/store/useStore";
// import { useStore } from "@/store/useStore";
// import { Project } from "@/store/useStore";

const GridProjects = () => {
  const { getProjects, getProjectsByServiceUrl, getServiceByUrl } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentServiceUrl = searchParams.get("service");

  // Reset to all projects if invalid service URL
  useEffect(() => {
    if (currentServiceUrl && !getServiceByUrl(currentServiceUrl)) {
      router.push("/projects");
    }
  }, [currentServiceUrl, getServiceByUrl, router]);

  const filteredProjects = currentServiceUrl
    ? getProjectsByServiceUrl(currentServiceUrl)
    : getProjects();

  if (filteredProjects.length === 0) {
    return (
      <div className="max-w-screen-xl w-full mx-auto text-center py-8">
        <p className="text-gray-600 text-lg">
          No projects found for this service.
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col sm:mr-0 lg:mr-8 pb-24 overflow-hidden bg-transparent">
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
