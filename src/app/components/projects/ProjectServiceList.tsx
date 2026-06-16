"use client";

import { useStore } from "@/store/useStore";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

const ProjectServiceList: React.FC = () => {
  const { getProjects, getServiceById } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentServiceUrl = searchParams.get("service");
  const allProjects = getProjects();
  
  const uniqueServices = Array.from(
    new Map(
      allProjects
        .map((p) => {
          const service = getServiceById(p.serviceid);
          if (!service) return null;
          return [service.id, service];
        })
        .filter((s): s is [number, NonNullable<ReturnType<typeof getServiceById>>] => s !== null)
    ).values()
  );

  const handleServiceClick = useCallback(
    (serviceUrl: string | null) => {
      const params = new URLSearchParams();
      if (serviceUrl) {
        params.set("service", serviceUrl);
      }
      router.push(`/proyek?${params.toString()}`);
    },
    [router]
  );

  useEffect(() => {
    if (currentServiceUrl) {
      const service = uniqueServices.find((s) => s.url === currentServiceUrl);
      if (!service && currentServiceUrl !== "all-services") {
        router.push("/proyek");
      }
    }
  }, [currentServiceUrl, uniqueServices, router]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-32 z-20"
    >
      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 px-6 py-8 relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          
          <div className="relative z-10 flex flex-col gap-2">
            <h3 className="text-white font-bold text-xl font-PlayfairDisplay">Kategori Layanan</h3>
            <p className="text-blue-200 text-sm font-light font-openSans">Temukan proyek berdasarkan {uniqueServices.length} spesialisasi kami.</p>
          </div>
        </div>

        {/* List */}
        <div className="p-3">
          <ul className="space-y-1">
            {/* All Services Item */}
            <li>
              <button
                onClick={() => handleServiceClick(null)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                  !currentServiceUrl
                    ? "bg-blue-50/80 shadow-inner"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  !currentServiceUrl ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                }`}>
                  <ReactSVG
                    className="w-5 h-5 [&_svg]:fill-currentColor"
                    src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/semua-layanan.svg`}
                  />
                </div>
                <span className={`text-sm font-medium transition-colors duration-300 flex-1 text-left ${
                  !currentServiceUrl ? "text-blue-800 font-bold" : "text-gray-600 group-hover:text-blue-700"
                }`}>
                  Semua Proyek
                </span>
                {!currentServiceUrl && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mr-1" />
                )}
              </button>
            </li>

            {/* Individual Services */}
            {uniqueServices.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => handleServiceClick(service.url)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                    currentServiceUrl === service.url
                      ? "bg-blue-50/80 shadow-inner"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    currentServiceUrl === service.url 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                      : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                  }`}>
                    <ReactSVG
                      className="w-5 h-5 [&_svg]:fill-currentColor"
                      src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/${service.icon}`}
                    />
                  </div>
                  <span className={`text-sm font-medium transition-colors duration-300 flex-1 text-left ${
                    currentServiceUrl === service.url ? "text-blue-800 font-bold" : "text-gray-600 group-hover:text-blue-700"
                  }`}>
                    {service.name}
                  </span>
                  {currentServiceUrl === service.url && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mr-1" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile View: Premium Select Dropdown */}
      <div className="lg:hidden w-full mb-8">
        <div className="bg-white rounded-2xl shadow-lg shadow-blue-900/5 border border-gray-100 p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />
          <h3 className="text-sm font-bold text-gray-900 mb-3 ml-2 uppercase tracking-wider">Kategori Layanan</h3>
          <div className="relative">
            <select
              value={currentServiceUrl || ""}
              onChange={(e) => handleServiceClick(e.target.value || null)}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-medium appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <option value="">Semua Proyek</option>
              {uniqueServices.map((service) => (
                <option key={service.id} value={service.url}>
                  {service.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectServiceList;
