"use client";
// import { getProjects } from "@/app/lib/data";
// import { useStore } from "@/store/useStore";
import GridProjects from "./GridProjects";
import ProjectServiceList from "./ProjectServiceList";
import { motion } from "framer-motion";
// import RelatedProjects from "./RelatedProjects";

export default function ProjectContent() {
  return (
    <div className="flex flex-col overflow-hidden bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-no-repeat pt-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-xl w-full mx-auto px-4 pb-8 mb-4 text-center"
      >
        <h1 className="font-bold text-4xl pb-4 text-blue-600">Proyek Kami</h1>
        <p className="text-lg text-gray-500 pt-2 pb-4">
          Menampilkan keunggulan kami melalui proyek infrastruktur dan
          konstruksi yang berhasil diselesaikan.
        </p>
      </motion.div>
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
