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
    <section className="bg-slate-50 relative pb-24 min-h-screen">
      {/* Massive Cinematic Hero */}
      <div className="relative h-[400px] lg:h-[600px] w-full bg-masala-950 overflow-hidden">
        {images.length > 0 && (
          <Image
            src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${images[0]}`}
            alt={project.name}
            fill
            className="object-cover opacity-40"
            priority
          />
        )}
        {/* Dark cinematic gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-masala-950 via-masala-950/60 to-blue-950/80" />
        
        {/* Content over hero */}
        <div className="absolute inset-0 flex items-end pb-24 lg:pb-32 pt-28">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Breadcrumb */}
              <div className="mb-6 flex justify-start">
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
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-PlayfairDisplay leading-tight drop-shadow-xl mb-6">
                {project.name}
              </h1>
              
              {/* <p className="text-lg md:text-xl text-blue-50/90 font-openSans font-light max-w-2xl leading-relaxed drop-shadow-md">
                {projectDescription[0]?.summary}
              </p> */}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 lg:-mt-12 relative z-10">
        
        {/* Cinematic Image Gallery */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 mb-16 bg-masala-900 border border-white/10"
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
              className="w-full h-[400px] lg:h-[600px]"
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
        )}

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Description (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 order-2 lg:order-1"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-70 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-masala-900 font-PlayfairDisplay">
                    Rincian Proyek
                  </h2>
                </div>
                
                <div className="prose prose-lg prose-blue max-w-none text-masala-600 font-openSans font-light leading-loose text-lg space-y-12">
                  
                  {/* Overview Block */}
                  <div className="bg-slate-50/80 rounded-2xl p-6 md:p-8 border-l-4 border-blue-600">
                    <p className="m-0 text-masala-800 font-medium italic">"{projectDescription[0]?.overview}"</p>
                  </div>

                  {/* Latar Belakang */}
                  <div>
                    <h3 className="text-xl font-bold text-masala-900 font-PlayfairDisplay mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-blue-600"></span> Latar Belakang & Objektif
                    </h3>
                    <p className="text-masala-600 leading-loose">{projectDescription[0]?.paragraph_1}</p>
                  </div>

                  {/* Tantangan & Implementasi */}
                  <div>
                    <h3 className="text-xl font-bold text-masala-900 font-PlayfairDisplay mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-malachite-500"></span> Tantangan & Implementasi
                    </h3>
                    <p className="text-masala-600 leading-loose">{projectDescription[0]?.paragraph_2}</p>
                  </div>

                  {/* Hasil Akhir */}
                  <div>
                    <h3 className="text-xl font-bold text-masala-900 font-PlayfairDisplay mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-amber-500"></span> Hasil & Kualitas Akhir
                    </h3>
                    <p className="text-masala-600 leading-loose">{projectDescription[0]?.paragraph_3}</p>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Trust Indicators / Conversion Banner Below Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 bg-gradient-to-r from-masala-950 to-blue-950 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white font-PlayfairDisplay mb-2">Ingin Hasil Serupa untuk Proyek Anda?</h3>
                  <p className="text-blue-100/80 font-openSans font-light max-w-md">Tim ahli kami siap mendiskusikan kebutuhan teknis Anda dan memberikan solusi konstruksi terbaik.</p>
                </div>
                <Link href="/kontak" className="w-full md:w-auto flex-shrink-0">
                  <button className="w-full md:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-50 shadow-xl shadow-black/20 hover:scale-105 transition-all duration-300">
                    Jadwalkan Konsultasi
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Sticky Executive Summary Sidebar (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 order-1 lg:order-2"
          >
            <div className="sticky top-32 space-y-8">
              
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5 p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-malachite-500" />
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-in-out opacity-50" />
                
                <h3 className="text-xl font-bold text-masala-900 font-PlayfairDisplay mb-8 relative z-10 flex items-center gap-3">
                  Executive Summary
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {/* Client */}
                  <div className="flex gap-4 items-start group/item">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Klien Utama</p>
                      <p className="text-masala-900 font-semibold text-[15px]">{client?.name}</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-50" />

                  {/* Location */}
                  <div className="flex gap-4 items-start group/item">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Lokasi Proyek</p>
                      <p className="text-masala-900 font-semibold text-[15px]">{project.location}</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-50" />

                  {/* Service */}
                  <div className="flex gap-4 items-start group/item">
                    <div className="w-12 h-12 rounded-xl bg-malachite-50 flex items-center justify-center flex-shrink-0 text-malachite-700 group-hover/item:bg-malachite-600 group-hover/item:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Layanan Terkait</p>
                      <Link href={`/layanan/${service?.url}`} className="text-masala-900 font-semibold text-[15px] hover:text-blue-600 transition-colors">
                        {service?.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Capabilities Quick Card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-l from-amber-500 to-orange-400" />
                <h3 className="text-xl font-bold text-masala-900 font-PlayfairDisplay mb-6">Standar Kualitas</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-masala-600 font-openSans text-sm">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Kepatuhan pada Standar SNI & ISO
                  </li>
                  <li className="flex items-center gap-3 text-masala-600 font-openSans text-sm">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Manajemen K3 yang Ketat
                  </li>
                  <li className="flex items-center gap-3 text-masala-600 font-openSans text-sm">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Material Kualitas Terbaik
                  </li>
                </ul>
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
