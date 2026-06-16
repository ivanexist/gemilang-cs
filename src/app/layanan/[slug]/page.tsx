"use client";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import ServiceDetails from "@/app/components/services/ServiceDetails";
import { useStore } from "@/store/useStore";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { getServiceByUrl } = useStore();
  const service = getServiceByUrl(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute inset-0 flex justify-center items-center opacity-[0.02] pointer-events-none">
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white p-12 md:p-16 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 max-w-xl relative z-10"
        >
          {/* Icon */}
          <div className="w-24 h-24 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 font-PlayfairDisplay mb-4">
            Layanan Tidak Ditemukan
          </h1>
          <p className="text-gray-500 mb-10 max-w-md mx-auto font-openSans font-light leading-relaxed">
            Maaf, layanan yang Anda cari tidak tersedia atau URL tidak valid. Silakan kembali ke halaman layanan untuk melihat keahlian kami.
          </p>
          <Link href="/layanan">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 py-4 px-10 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Kembali ke Layanan
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div>
        <ServiceDetails />
      </div>
    </div>
  );
}
