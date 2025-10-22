"use client";

// import { Client, Project, Service } from "@/generated/prisma";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// import {  } from "next/router";
import { useCallback, useEffect } from "react";
import { ReactSVG } from "react-svg";

const ProjectServiceList: React.FC = () => {
  const { getProjects, getServiceById } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentServiceUrl = searchParams.get("service");
  const allProjects = getProjects();
  // Extract unique services from projects
  const uniqueServices = Array.from(
    new Map(
      allProjects
        .map((p) => {
          const service = getServiceById(p.serviceid);
          if (!service) {
            console.warn(
              `No service found for serviceid: ${p.serviceid} in project: ${p.name}`
            );
            return null;
          }
          return [service.id, service];
        })
        .filter(
          (s): s is [number, NonNullable<ReturnType<typeof getServiceById>>] =>
            s !== null
        )
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

  // Sync with URL on mount
  useEffect(() => {
    if (currentServiceUrl) {
      const service = uniqueServices.find((s) => s.url === currentServiceUrl);
      if (!service && currentServiceUrl !== "all-services") {
        router.push("/proyek"); // Reset to all services if invalid
      }
    }
  }, [currentServiceUrl, uniqueServices, router]);
  return (
    <div className="flex justify-between items-start col-span-2 sm:mx-2 lg:mx-0 pb-4 sm:mb-8 lg:mb-16">
      <div className="sm:hidden lg:block leading-6 bg-wildsand-50 shadow border-transparent">
        <ul>
          <Link href="/proyek" scroll={true}>
            <li
              className={`text-blue-700 transition-all duration-300 hover:text-white hover:bg-blue-700 hover:cursor-pointer hover:border-l-8 hover:border-l-malachite-600 border-b border-b-blue-300 ${
                !currentServiceUrl
                  ? "text-white bg-blue-700 font-semibold border-l-8 border-l-malachite-600"
                  : ""
              } hover:font-semibold py-6 px-8 text-base group`}
              onClick={() => handleServiceClick(null)}
            >
              <div className="flex">
                <ReactSVG
                  className={`w-7 h-7 pt-1 group-hover:text-white text-blue-700 transition-colors duration-300 ${
                    !currentServiceUrl ? "text-white" : ""
                  }`}
                  src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/semua-layanan.svg`}
                />
                <span className="ml-4 mt-1">Semua Layanan</span>
              </div>
            </li>
          </Link>
          {uniqueServices.map((service) => (
            <Link
              href={`/proyek?service=${encodeURIComponent(service.url)}`}
              key={service.id}
              scroll={true}
            >
              <li
                className={`text-blue-700 transition-all duration-300 hover:text-white hover:bg-blue-700 hover:cursor-pointer hover:border-l-8 hover:border-malachite-500 border-b border-b-blue-300 ${
                  currentServiceUrl === service.url
                    ? "text-white bg-blue-700 font-semibold border-l-8 border-malachite-500"
                    : ""
                } hover:font-semibold py-6 px-8 text-lg group`}
                onClick={() => handleServiceClick(service.url)}
              >
                <div className="flex">
                  <ReactSVG
                    className={`w-8 h-8 group-hover:text-white text-blue-700 transition-colors duration-300 ${
                      currentServiceUrl === service.url ? "text-white" : ""
                    }`}
                    src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/services/${service.icon}`}
                  />
                  <span className="ml-4 mt-1">{service.name}</span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile View: Dropdown Menu */}
      <div className="sm:block lg:hidden w-full">
        <select
          value={currentServiceUrl || ""}
          onChange={(e) => handleServiceClick(e.target.value || null)}
          className="w-[95%] p-3 bg-wildsand-50 border border-blue-300 rounded-lg text-blue-700 focus:outline-none focus:ring-2 focus:ring-malachite-500 text-base ml-2"
        >
          <option value="">Semua Layanan</option>
          {uniqueServices.map((service) => (
            <option key={service.id} value={service.url}>
              {service.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProjectServiceList;
