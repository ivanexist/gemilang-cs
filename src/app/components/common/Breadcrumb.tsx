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

    if (segment === "services") return "Services";
    if (segment === "projects") return "Projects";
    if (segment === "about") return "About";
    if (segment === "contact") return "Contact";
    if (prev === "services") return serviceName ?? "Service Not Found";
    if (prev === "projects") return projectName ?? "Project Not Found";

    return capitalize(segment);
  };

  const breadcrumbs = segments.map((segment, index) => ({
    href: "/" + segments.slice(0, index + 1).join("/"),
    label: getLabel(segment, index),
  }));

  return (
    <section className="flex flex-col overflow-hidden relative">
      {/* <div className="mx-auto w-full px-4 sm:py-16 lg:py-36 sm:px-6 justify-center sm:justify-center flex flex-col sm:h-16 lg:h-36 lg:px-8 bg-[linear-gradient(to_right,rgba(21,93,252,0.6),rgba(21,93,252,0.6)),url('https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
        <nav
          className="text-center font-PlayfairDisplay"
          aria-label="Breadcrumb"
        >
          Title page based on Breadcrumb

          <h1 className="font-bold sm:text-xl md:text-2xl lg:text-4xl mx-4 uppercase tracking-wider text-white bg-clip-text">
            {breadcrumbs.at(-1)?.label ?? "Home"}
          </h1>
        </nav>
      </div> */}
      <div className="max-w-screen-xl mx-auto w-full my-6 sm:ml-4 lg:ml-0">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
          <li className="inline-flex items-center font-PlayfairDisplay">
            {/* Place code dynamic breadcrumb here */}
            <Link
              href="/"
              className="text-gray-500 hover:text-blue-600 inline-flex items-center sm:text-sm md:text-base font-medium"
            >
              <FaHome className="mr-2" />
              <span className="mt-0.5">Home</span>
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
