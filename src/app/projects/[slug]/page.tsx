import Breadcrumb from "@/app/components/common/Breadcrumb";
import ProjectsDetailsContent from "@/app/components/projects/ProjectDetailsContent";
import { fetchProjectsSlugs, getProjectBySlug } from "@/app/lib/data";
// import Breadcrumb from "../components/common/Breadcrumb";

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (isNaN(project))
    <div className="text-center text-red-500">Invalid project ID</div>;

  if (!project)
    <div className="text-center text-red-500">Project Not Found</div>;

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
