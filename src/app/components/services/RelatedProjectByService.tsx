// "use client";
// import { Client, Project, Service } from "@/generated/prisma";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import ProjectCard from "../projects/ProjectCard";

// interface ProjectsProps {
//   projects: (Project & { Client: Client; Service: Service })[];
// }

// const RelatedProjectByService: React.FC<ProjectsProps> = ({ projects }) => {
//   const searchParams = useSearchParams();
//   const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
//     null
//   );
//   const currentServiceUrl = searchParams.get("service");
//   useEffect(() => {
//     if (currentServiceUrl) {
//       const service = projects.find(
//         (p) => p.Service.url === currentServiceUrl
//       )?.Service;
//       setSelectedServiceId(service ? service.id : null);
//     } else {
//       setSelectedServiceId(null);
//     }
//   }, [currentServiceUrl, projects]);

//   const filteredProjects = selectedServiceId
//     ? projects.filter((project) => project.Service.id === selectedServiceId)
//     : projects;
//   return (
//     <div className="max-w-screen-xl w-full mx-auto grid sm:grid-cols-1 sm:place-items-center gap-8">
//       {filteredProjects.map((project) => (
//         <ProjectCard key={project.id} project={project} />
//       ))}
//     </div>
//   );
// };
// export default RelatedProjectByService;
