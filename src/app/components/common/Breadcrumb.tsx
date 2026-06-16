"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaAngleRight, FaHome } from "react-icons/fa";

type BreadcrumbProps = {
  serviceName?: string;
  projectName?: string;
  theme?: "light" | "dark";
};

// Utility to capitalize
const capitalize = (text: string) =>
  text.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

export default function Breadcrumb({
  serviceName,
  projectName,
  theme = "light",
}: BreadcrumbProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const getLabel = (segment: string, index: number): string => {
    const prev = segments[index - 1];

    if (segment === "layanan") return "Layanan";
    if (segment === "proyek") return "Proyek";
    if (segment === "tentang") return "Tentang Kami";
    if (segment === "kontak") return "Kontak";
    if (prev === "layanan") return serviceName ?? "Layanan Tidak Ditemukan";
    if (prev === "proyek") return projectName ?? "Proyek Tidak Ditemukan";

    return capitalize(segment);
  };

  const breadcrumbs = segments.map((segment, index) => ({
    href: "/" + segments.slice(0, index + 1).join("/"),
    label: getLabel(segment, index),
  }));

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <ol className="inline-flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className={`${
              isDark ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-blue-600"
            } inline-flex items-center text-sm transition-colors duration-200`}
          >
            <FaHome className="mr-1.5 text-xs" />
            Beranda
          </Link>
        </li>
        {breadcrumbs.map(({ href, label }) => {
          const isActive = href === pathname;
          
          let linkClass = "text-gray-500 hover:text-blue-600";
          if (isActive) linkClass = "text-blue-600 font-semibold";
          
          if (isDark) {
            linkClass = isActive ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white";
          }

          return (
            <li key={href} className="inline-flex items-center">
              <FaAngleRight className={`mr-2 ${isDark ? "text-gray-400" : "text-gray-400"}`} />
              <Link
                href={href}
                className={`${linkClass} sm:text-sm md:text-base`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
