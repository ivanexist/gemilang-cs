"use client";

import { Client, Project, Service } from "@/generated/prisma";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// import {  } from "next/router";
import { useCallback, useEffect } from "react";
import { ReactSVG } from "react-svg";

interface ProjectServiceListProps {
  projects: (Project & {
    Client: Client;
    Service: Service;
  })[];
  onServiceSelect?: (serviceId: string | null) => void;
}

const ProjectServiceList: React.FC<ProjectServiceListProps> = ({
  projects,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentServiceUrl = searchParams.get("service");

  const uniqueServices = Array.from(
    new Map(projects.map((p) => [p.Service.id, p.Service])).values()
  );

  const handleServiceClick = useCallback(
    (serviceUrl: string | null) => {
      const params = new URLSearchParams();
      if (serviceUrl) {
        params.set("service", serviceUrl);
      }
      router.push(`/projects?${params.toString()}`);
    },
    [router]
  );

  // Sync with URL on mount
  useEffect(() => {
    if (currentServiceUrl) {
      const service = uniqueServices.find((s) => s.url === currentServiceUrl);
      if (!service && currentServiceUrl !== "all-services") {
        router.push("/projects"); // Reset to all services if invalid
      }
    }
  }, [currentServiceUrl, uniqueServices, router]);
  return (
    <div className="flex justify-between items-start col-span-2 sm:mx-2 lg:mx-0 pb-4">
      <div className="leading-6 bg-wildsand-50 shadow border-transparent">
        <ul>
          <Link href="/projects" scroll={true}>
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
              href={`/projects?service=${encodeURIComponent(service.url)}`}
              key={service.id}
              scroll={true}
            >
              <li
                className={`text-blue-600 transition-all duration-300 hover:text-white hover:bg-blue-700 hover:cursor-pointer hover:border-l-8 hover:border-malachite-500 border-b border-b-blue-300 ${
                  currentServiceUrl === service.url
                    ? "text-white bg-blue-500 font-semibold border-l-8 border-malachite-500"
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
    </div>
  );
};

export default ProjectServiceList;
