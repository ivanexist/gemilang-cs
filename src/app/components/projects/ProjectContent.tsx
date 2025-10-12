"use client";
// import { getProjects } from "@/app/lib/data";
// import { useStore } from "@/store/useStore";
import GridProjects from "./GridProjects";
import ProjectServiceList from "./ProjectServiceList";
// import RelatedProjects from "./RelatedProjects";

export default function ProjectContent() {
  return (
    <div className="flex flex-col overflow-hidden bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-no-repeat pt-8">
      <div className="max-w-screen-xl w-full mx-auto px-4 pb-8 mb-4 text-center">
        <h1 className="font-bold text-4xl py-4 text-blue-600">Proyek Kami</h1>
        <p className="text-lg text-gray-500 pt-2 pb-4">
          Menampilkan keunggulan kami melalui proyek infrastruktur dan
          konstruksi yang berhasil diselesaikan.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3">
        <div className="col-span-1">
          <ProjectServiceList />
        </div>
        <div className="col-span-2 sm:mx-4 lg:mx-0">
          <GridProjects />
        </div>
      </div>
    </div>
  );
}
