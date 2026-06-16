"use client";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

const GridProjects = () => {
  const { getProjects, getProjectsByServiceUrl, getServiceByUrl } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentServiceUrl = searchParams.get("service");

  // Reset to all projects if invalid service URL
  useEffect(() => {
    if (currentServiceUrl && !getServiceByUrl(currentServiceUrl)) {
      router.push("/proyek");
    }
  }, [currentServiceUrl, getServiceByUrl, router]);

  const filteredProjects = currentServiceUrl
    ? getProjectsByServiceUrl(currentServiceUrl)
    : getProjects();

  if (filteredProjects.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-24 px-4 bg-white rounded-3xl border border-dashed border-gray-200"
      >
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 font-PlayfairDisplay mb-3">
          Belum Ada Proyek
        </h3>
        <p className="text-gray-500 text-center max-w-md font-openSans font-light leading-relaxed">
          Belum ada portofolio proyek yang dapat ditampilkan untuk kategori layanan ini. Silakan pilih layanan lain.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default GridProjects;
