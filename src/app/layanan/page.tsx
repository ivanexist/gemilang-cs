import { Suspense } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ServicesContent from "../components/services/ServicesContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Konstruksi | PT Gemilang Cipta Sentosa",
  description: "Eksplorasi layanan konstruksi profesional kami, mulai dari perencanaan hingga penyelesaian proyek dengan standar mutu internasional.",
};

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col justify-center items-center min-h-screen bg-slate-50">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4" />
          <div className="text-blue-600 text-lg font-semibold font-PlayfairDisplay">
            Memuat Layanan...
          </div>
        </div>
      }
    >
      {/* Main Content Area */}
      <ServicesContent />

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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-malachite-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
            <span className="text-white/90 font-medium text-sm tracking-wide">Mulai Bersama Kami</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-PlayfairDisplay mb-6 leading-tight drop-shadow-lg">
            Siap Membangun{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-malachite-300">
              Masa Depan?
            </span>
          </h2>
          
          <p className="text-blue-100/80 text-lg md:text-xl font-openSans mb-12 leading-relaxed">
            Dapatkan konsultasi gratis dengan tim ahli kami untuk merencanakan solusi konstruksi terbaik yang sesuai dengan kebutuhan Anda.
          </p>
          
          <Link href="/kontak">
            <button className="inline-flex items-center gap-2 py-4 px-10 bg-white text-blue-900 font-bold text-lg rounded-full shadow-xl shadow-blue-900/20 hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              Konsultasi Sekarang
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
