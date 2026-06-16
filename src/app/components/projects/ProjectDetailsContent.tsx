"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SwiperCore from "swiper";
import Link from "next/link";
import { ProjectDescription } from "@/store/useStore";
import { useStore } from "@/store/useStore";
import { useParams } from "next/navigation";
import RelatedProjectCard from "./RelatedProjectCard";
import Breadcrumb from "../common/Breadcrumb";

const ProjectsDetailsContent = () => {
  const params = useParams();
  const currentSlug = typeof params.slug === "string" ? params.slug : "";
  const {
    getProjectByUrl,
    getClientById,
    getServiceById,
    getProjectsByServiceId,
  } = useStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = getProjectByUrl(currentSlug);
  if (!project) {
    return null; 
  }
  const client = getClientById(project.clientid);
  const service = getServiceById(project.serviceid);
  const images = Array.isArray(project.images) ? project.images : [];
  const projectDescription: ProjectDescription[] = Array.isArray(
    project.description,
  )
    ? project.description.every(
        (desc) =>
          typeof desc === "object" &&
          "summary" in desc &&
          "overview" in desc &&
          "paragraph_1" in desc &&
          "paragraph_2" in desc &&
          "paragraph_3" in desc,
      )
      ? (project.description as ProjectDescription[])
      : []
    : [];

  const relatedProjects = getProjectsByServiceId(project.serviceid)
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <section className="bg-slate-50 relative pb-24">
      {/* Cinematic Header Background (Extends behind gallery) */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-masala-950 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-masala-950 to-slate-50 opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Top Header: Title & Badges */}
        <div className="mb-12">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb theme="dark" projectName={project.name} />
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <Link href={`/layanan/${service?.url || ""}`}>
              <span className="inline-flex items-center px-4 py-1.5 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-sm font-semibold rounded-full hover:bg-blue-600/40 transition-colors duration-300">
                {service?.name ?? "Unknown Service"}
              </span>
            </Link>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 text-sm font-medium rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-malachite-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Tahun Selesai: {project.yearcompleted.join(", ")}
            </span>
          </div>
          
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white font-PlayfairDisplay leading-tight mb-4 drop-shadow-xl max-w-4xl">
            {project.name}
          </h1>
        </div>

        {/* Cinematic Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 mb-16 bg-masala-900"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true, type: "bullets" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={handleSlideChange}
            initialSlide={currentIndex}
            className="w-full h-[500px] lg:h-[700px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${image}`}
                    alt={`${project.name} - Foto ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Info */}
          <div className="absolute bottom-8 right-8 z-20 bg-black/60 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/20 font-medium text-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
            {currentIndex + 1} <span className="text-gray-400">/</span> {images.length}
          </div>
        </motion.div>

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Description (Left 2 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <div className="prose prose-lg prose-blue max-w-none">
              {/* Highlight summary */}
              <div className="text-xl md:text-2xl font-light font-openSans text-masala-800 leading-relaxed mb-10 border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50 rounded-r-2xl">
                {projectDescription[0]?.summary}
              </div>

              {/* Detailed paragraphs */}
              <div className="space-y-6 text-masala-600 font-openSans font-light leading-loose text-lg">
                <p>{projectDescription[0]?.overview}</p>
                <p>{projectDescription[0]?.paragraph_1}</p>
                <p>{projectDescription[0]?.paragraph_2}</p>
                <p>{projectDescription[0]?.paragraph_3}</p>
              </div>
            </div>
          </motion.div>

          {/* Sticky Executive Summary Sidebar (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 order-1 lg:order-2"
          >
            <div className="sticky top-32">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5 p-8 relative overflow-hidden">
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-malachite-500" />
                
                <h3 className="text-xl font-bold text-masala-900 font-PlayfairDisplay mb-8">
                  Executive Summary
                </h3>
                
                <div className="space-y-6">
                  {/* Client */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Klien Utama</p>
                      <p className="text-masala-900 font-semibold text-base">{client?.name}</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-100" />

                  {/* Location */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Lokasi Proyek</p>
                      <p className="text-masala-900 font-semibold text-base">{project.location}</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-100" />

                  {/* Service */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-malachite-50 flex items-center justify-center flex-shrink-0 text-malachite-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Layanan Terkait</p>
                      <p className="text-masala-900 font-semibold text-base">{service?.name}</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href="/kontak">
                    <button className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-700/20 transition-all duration-300">
                      Diskusikan Proyek Anda
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="mt-32 border-t border-gray-200 pt-20">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-blue-800 font-semibold text-xs tracking-wider uppercase">
                    Eksplorasi Lainnya
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-PlayfairDisplay">
                  Proyek <span className="text-blue-600">Terkait</span>
                </h2>
              </div>
              <Link href={"/layanan"} className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                Lihat Semua Layanan Serupa
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Related Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <RelatedProjectCard
                  key={relatedProject.id}
                  project={relatedProject}
                  index={index}
                />
              ))}
            </div>

            {/* Mobile View All Services */}
            <div className="mt-8 text-center md:hidden">
              <Link href={"/layanan"} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                Lihat Semua Layanan Serupa
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsDetailsContent;
