"use client";
import { Suspense } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
// import GridProjects from "../components/projects/GridProjects";
import ProjectContent from "../components/projects/ProjectContent";

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="text-blue-600 text-xl font-semibold">
            Loading projects...
          </div>
        </div>
      }
    >
      <div>
        <Breadcrumb />
        <div className="">
          <ProjectContent />
        </div>
      </div>
    </Suspense>
  );
}
