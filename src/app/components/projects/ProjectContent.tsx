"use client";

import Breadcrumb from "../common/Breadcrumb";
import GridProjects from "./GridProjects";
import ProjectServiceList from "./ProjectServiceList";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectContent() {
  return (
    <div className="flex flex-col overflow-hidden bg-slate-50 relative min-h-screen">
      {/* Premium Cinematic Header */}
      <div className="relative py-24 lg:py-32 overflow-hidden bg-masala-950 mb-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
            alt="Proyek Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-masala-950" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="project-header-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#project-header-grid)" />
          </svg>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-left"
        >
          {/* Breadcrumb */}
          <div className="flex justify-start mb-6">
            <Breadcrumb theme="dark" />
          </div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-malachite-400 animate-pulse" />
            Portofolio Kami
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-PlayfairDisplay leading-tight drop-shadow-xl mb-6 max-w-3xl">
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Terbaik</span> Kami
          </h1>

          <p className="text-lg md:text-xl text-blue-50/90 font-openSans font-light max-w-2xl leading-relaxed drop-shadow-md">
            Jelajahi rekam jejak keberhasilan kami dalam membangun infrastruktur dan fasilitas komersial berkualitas tinggi di seluruh Indonesia.
          </p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex-shrink-0">
            <ProjectServiceList />
          </div>

          {/* Project Grid */}
          <div className="w-full lg:w-3/4">
            <GridProjects />
          </div>
        </div>
      </div>
    </div>
  );
}
