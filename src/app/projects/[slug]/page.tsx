import Breadcrumb from "@/app/components/common/Breadcrumb";
import ProjectsDetailsContent from "@/app/components/projects/ProjectDetailsContent";
import { getProjectBySlug } from "@/app/lib/data";
// import type { PageProps } from "next";
// import Breadcrumb from "../components/common/Breadcrumb";

interface ProjectDetailsProps {
  params: { slug: string };
}
export const dynamic = "force-dynamic"; // this page will be server-side rendered on every request
export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsProps) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

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
