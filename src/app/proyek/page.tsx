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
      <div className="max-w-screen-xl mx-auto w-screen">
        <Breadcrumb />
        <div className="">
          <ProjectContent />
        </div>
      </div>
      <div className="w-full mx-auto text-center bg-malachite-400 p-16 text-white">
        <h2 className="text-4xl font-bold">Punya Proyek Konstruksi?</h2>
        <p className="text-lg mt-4">
          Mari diskusikan bagaimana kami dapat membantu mewujudkan visi proyek
          Anda dengan kualitas terbaik
        </p>
        <button className="bg-white rounded-lg text-malachite-400 font-semibold px-6 py-3 mt-6 hover:bg-malachite-600 hover:text-white hover:cursor-pointer transition duration-300">
          Hubungi Kami
        </button>
      </div>
    </Suspense>
  );
}
