"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactSVG } from "react-svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStore } from "@/store/useStore";
import RelatedProjectCard from "../projects/RelatedProjectCard";
import { useRouter } from "next/navigation";
import Breadcrumb from "../common/Breadcrumb";

interface ServiceDescription {
  description_new: string[];
  description_complete: string;
  description_overview: string;
  description_key_benefit: string[];
  description_our_process: string[];
}

export default function ServiceDetails() {
  const params = useParams();
  const router = useRouter();
  const currentSlug = typeof params.slug === "string" ? params.slug : "";
  const { getServiceByUrl, getServices, getProjectsByServiceId } = useStore();
  const service = getServiceByUrl(currentSlug);
  const servicesList = getServices();
  const relatedProjects = getProjectsByServiceId(service?.id || 0);

  if (!service) {
    return null; 
  }
  
  const serviceDescription: ServiceDescription[] = Array.isArray(
    service.description
  )
    ? service.description.every(
        (desc) =>
          typeof desc === "object" &&
          "description_new" in desc &&
          "description_complete" in desc &&
          "description_overview" in desc &&
          "description_key_benefit" in desc &&
          "description_our_process" in desc
      )
      ? (service.description as ServiceDescription[])
      : []
    : [];

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSlug = e.target.value;
    if (selectedSlug) {
      router.push(`/layanan/${selectedSlug}`);
    }
  };

  return (
    <section className="bg-slate-50 relative pb-24 min-h-screen">
      {/* Massive Cinematic Hero */}
      <div className="relative h-[400px] lg:h-[600px] w-full bg-masala-950 overflow-hidden">
        <Image
          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${service.image}`}
          alt={service.name}
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Dark cinematic gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-masala-950 via-masala-950/60 to-blue-950/80" />
        
        {/* Content over hero */}
        <div className="absolute inset-0 flex items-center pt-20">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* Breadcrumb */}
              <div className="mb-6">
                <Breadcrumb theme="dark" serviceName={service.name} />
              </div>

              <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-malachite-400 animate-pulse" />
                Layanan Profesional
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-PlayfairDisplay leading-tight drop-shadow-xl mb-6">
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-blue-50/90 font-openSans font-light max-w-2xl leading-relaxed drop-shadow-md">
                {serviceDescription[0]?.description_overview}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content Area (Left 2 columns) */}
          <div className="lg:col-span-2">
            
            {/* About Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-8 md:p-12 mb-12 border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-masala-900 font-PlayfairDisplay mb-8">
                Tentang Layanan Ini
              </h2>
              <div className="prose prose-lg prose-blue max-w-none text-masala-600 font-openSans font-light leading-loose">
                <p className="mb-6">{serviceDescription[0]?.description_new[0]}</p>
                <p>{serviceDescription[0]?.description_new[1]}</p>
              </div>
            </motion.div>

            {/* Key Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-masala-900 font-PlayfairDisplay">
                  Keunggulan Utama
                </h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {serviceDescription[0]?.description_key_benefit.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4 group hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-masala-700 font-openSans font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Process Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-masala-900 font-PlayfairDisplay">
                  Tahapan Proses
                </h3>
              </div>

              <div className="bg-white rounded-3xl shadow-lg shadow-blue-900/5 p-8 md:p-12 border border-gray-100">
                <div className="relative border-l-2 border-blue-100 ml-4 md:ml-6 space-y-12">
                  {serviceDescription[0]?.description_our_process.map((step, index) => (
                    <div key={index} className="relative pl-10 md:pl-12 group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-17px] top-0.5 w-8 h-8 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center group-hover:border-blue-600 transition-colors duration-300">
                        <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                      </div>
                      
                      <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors duration-300">
                        <p className="text-masala-700 font-openSans font-light leading-relaxed text-lg">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Executive Sidebar (Right Column) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              
              {/* Category Nav Card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                  <h3 className="text-xl font-bold text-white font-PlayfairDisplay relative z-10">Kategori Layanan</h3>
                </div>
                
                {/* Mobile Dropdown */}
                <div className="block lg:hidden p-4 border-b border-gray-100">
                  <select
                    value={currentSlug}
                    onChange={handleServiceChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    {servicesList.map((svc) => (
                      <option key={svc.id} value={svc.url}>{svc.name}</option>
                    ))}
                  </select>
                </div>

                {/* Desktop List */}
                <ul className="hidden lg:block p-3">
                  {servicesList.map((svc) => (
                    <li key={svc.id}>
                      <Link href={`/layanan/${svc.url}`}>
                        <div className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer group ${
                          svc.url === currentSlug ? "bg-blue-50" : "hover:bg-gray-50"
                        }`}>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                            svc.url === currentSlug ? "bg-blue-600 shadow-md" : "bg-gray-100 group-hover:bg-blue-100"
                          }`}>
                            <ReactSVG
                              className={`w-5 h-5 transition-colors duration-300 ${
                                svc.url === currentSlug ? "text-white [&_svg]:fill-white" : "text-gray-500 group-hover:text-blue-600 [&_svg]:fill-currentColor"
                              }`}
                              src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/${svc.icon}`}
                            />
                          </div>
                          <span className={`text-[15px] font-openSans transition-colors duration-300 flex-1 ${
                            svc.url === currentSlug ? "text-blue-800 font-bold" : "text-gray-600 group-hover:text-blue-700 font-medium"
                          }`}>
                            {svc.name}
                          </span>
                          {svc.url === currentSlug && (
                            <div className="w-2 h-2 rounded-full bg-blue-600 mr-2" />
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Info Card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-malachite-500 to-blue-600" />
                <h3 className="text-xl font-bold text-masala-900 font-PlayfairDisplay mb-6">Info Singkat</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Durasi</p>
                      <p className="text-masala-900 font-semibold text-sm">Sesuai Skala Proyek</p>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-gray-100" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Kualitas</p>
                      <p className="text-masala-900 font-semibold text-sm">Standar ISO & SNI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Massive CTA Card */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-950 rounded-3xl shadow-2xl overflow-hidden relative p-8 text-center">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-malachite-500/20 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-6 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-PlayfairDisplay">Butuh Konsultasi?</h3>
                  <p className="text-blue-100 font-openSans font-light mb-8 text-sm leading-relaxed">
                    Diskusikan kebutuhan proyek Anda dengan tim ahli kami dan dapatkan penawaran terbaik.
                  </p>
                  <Link href="/kontak">
                    <button className="w-full py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-50 shadow-xl shadow-black/20 transition-all duration-300">
                      Hubungi Kami
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="mt-32 pt-20 border-t border-gray-200">
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
                    Portofolio
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-masala-900 font-PlayfairDisplay">
                  Proyek <span className="text-blue-600">Terkait</span>
                </h2>
              </div>
              <Link href={"/proyek"} className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                Lihat Semua Proyek
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project, index) => (
                <RelatedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            {/* Mobile View All */}
            <div className="mt-8 text-center md:hidden">
              <Link href={"/proyek"} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                Lihat Semua Proyek
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
}
