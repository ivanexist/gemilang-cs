"use client";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import ProjectsDetailsContent from "@/app/components/projects/ProjectDetailsContent";

import { useStore } from "@/store/useStore";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { getProjectByUrl } = useStore();
  const project = getProjectByUrl(slug);
  // If slug is not a valid project or not found
  if (!project) {
    return (
      <div className="container mx-auto p-4 text-center text-red-500">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        {/* <p>The project with slug "{slug}" does not exist.</p> */}
        <Link
          href="/projects"
          className="mt-4 inline-block bg-blue-700 text-white px-6 py-2 rounded"
        >
          Back to Projects
        </Link>
      </div>
    );
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
