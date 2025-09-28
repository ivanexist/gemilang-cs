// "use client";

// import React from "react";
// import { Client, Project, Service } from "@/generated/prisma";
// import ProjectCard from "./ProjectCard"; // Adjust the import path if needed

// interface ProjectsProps {
//   projects: (Project & { Client: Client; Service: Service })[];
// }

// // const getRelatedProjects = (
// //   { project }: ProjectDetailsProps,
// //   selectedServices: string[]
// // ) => {
// //   if (selectedServices.length === 0) return [];
// //   return projects.filter((project) =>
// //     project.services.some((service) => selectedServices.includes(service))
// //   );
// // };

// const RelatedProjects: React.FC<ProjectsProps> = ({
//   selectedProject,
//   projects,
// }) => {
//   const relatedProjectsbyServices = projects.filter(
//     (project) =>
//       project.Service.id === selectedProject.Service.id &&
//       project.id !== selectedProject.id
//   );

//   return (
//     <div>
//       <h3>Related Projects</h3>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
//         {relatedProjectsbyServices.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedProjects;
