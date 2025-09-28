import Breadcrumb from "@/app/components/common/Breadcrumb";
import ProjectsDetailsContent from "@/app/components/projects/ProjectDetailsContent";
import { fetchProjectsSlugs, getProjectBySlug } from "@/app/lib/data";
// import type { PageProps } from "next";
// import Breadcrumb from "../components/common/Breadcrumb";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }
// interface ProjectDetailsPageProps {
//   params: {
//     slug: string;
//   };
// }

export default async function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  // If slug is not a valid project or not found
  if (!project) {
    return <div className="text-center text-red-500">Project Not Found</div>;
  }

  return (
    <div>
      <Breadcrumb projectName={project?.name} />
      <div className="">
        <ProjectsDetailsContent project={project} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await fetchProjectsSlugs();
  return projects.map((project) => ({ slug: project.url }));
}
