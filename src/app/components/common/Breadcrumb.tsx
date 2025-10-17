"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight, FaHome } from "react-icons/fa";

type BreadcrumbProps = {
  serviceName?: string;
  projectName?: string;
};

// Utility to capitalize
const capitalize = (text: string) =>
  text.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

export default function Breadcrumb({
  serviceName,
  projectName,
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

  return (
    <section className="flex flex-col overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto w-screen my-6 sm:mx-2 lg:mx-0">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
          <li className="inline-flex items-center font-PlayfairDisplay">
            {/* Place code dynamic breadcrumb here */}
            <Link
              href="/"
              className="text-gray-500 hover:text-blue-600 inline-flex items-center sm:text-sm md:text-base font-medium"
            >
              <FaHome className="mr-2" />
              <span className="mt-0.5">Beranda</span>
            </Link>
          </li>
          {breadcrumbs.map(({ href, label }) => (
            <li key={href} className="inline-flex items-center">
              <FaAngleRight className="mr-2 text-gray-400" />
              <Link
                href={href}
                className={`${
                  href === pathname
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500 hover:text-blue-600"
                } sm:text-sm md:text-base`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
