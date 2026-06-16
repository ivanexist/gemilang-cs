import { Suspense } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ProjectContent from "../components/projects/ProjectContent";
import Link from "next/link";
import { motion } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Proyek | PT Gemilang Cipta Sentosa",
  description:
    "Lihat berbagai proyek infrastruktur dan konstruksi yang telah berhasil diselesaikan oleh PT Gemilang Cipta Sentosa.",
};

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col justify-center items-center min-h-screen bg-slate-50">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4" />
          <div className="text-blue-600 text-lg font-semibold font-PlayfairDisplay">
            Memuat Portofolio...
          </div>
        </div>
      }
    >
      {/* <div className="w-full bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb />
        </div>
      </div> */}

      {/* Main Content Area */}
      <ProjectContent />

      {/* Premium CTA Banner */}
      <div className="relative overflow-hidden py-24 bg-masala-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-malachite-950 opacity-90" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-malachite-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-2 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-malachite-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <span className="text-white/90 font-medium text-sm tracking-wide">
              Mari Berdiskusi
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-PlayfairDisplay mb-6 leading-tight drop-shadow-lg">
            Siap Memulai Proyek{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-malachite-300">
              Konstruksi Anda?
            </span>
          </h2>

          <p className="text-blue-100/80 text-lg md:text-xl font-openSans mb-12 leading-relaxed">
            Mari diskusikan bagaimana kami dapat membantu mewujudkan visi proyek
            Anda dengan standar profesional dan kualitas terbaik.
          </p>

          <Link href="/kontak">
            <button className="inline-flex items-center gap-2 py-4 px-10 bg-white text-blue-900 font-bold text-lg rounded-full shadow-xl shadow-blue-900/20 hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              Hubungi Kami Sekarang
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
