import React from "react";
import ProjectCard from "./ProjectCard"; // Adjust the import path if needed

type Project = {
  id: string;
  name: string;
  services: string[];
  description?: string;
};

type RelatedProjectsProps = {
  projects: Project[];
  selectedServices: string[];
};

function getRelatedProjects(projects: Project[], selectedServices: string[]) {
  if (selectedServices.length === 0) return [];
  return projects.filter((project) =>
    project.services.some((service) => selectedServices.includes(service))
  );
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({
  projects,
  selectedServices,
}) => {
  const related = getRelatedProjects(projects, selectedServices);

  if (related.length === 0) {
    return <div>No related projects found.</div>;
  }

  return (
    <div>
      <h3>Related Projects</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {related.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
