"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useScrollStore } from "@/store/useScrollStore";

const NavbarMenu = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "PROJECTS", path: "/projects" },
  { label: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const { scrollToTop } = useScrollStore();
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsSticky(true);
      return;
    }
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Navbar becomes sticky after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav
      className={`${
        isHomePage ? "fixed" : "sticky"
      } transition-all top-0 w-full duration-300 ease-in-out z-20 py-4 ${
        isSticky ? "bg-wildsand-50 shadow-sm py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl w-full flex items-center justify-between mx-auto py-2">
        <div className="flex">
          <div className="flex">
            <Link
              href="/"
              onClick={scrollToTop}
              className="flex items-center space-x-3 rtl:space-x-reverse mx-2 sm:w-24 sm:h-12 md:w-40 md:h-24"
            >
              <span className="self-center font-semibold whitespace-nowrap">
                <Image
                  src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/Logo-GCS.png"
                  alt="Logo Gemilang Cipta Sentosa"
                  width={400}
                  height={400}
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="items-center justify-between sm:hidden sm:w-full mx-4 md:flex md:w-auto md:text-lg">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blumine-100 rounded-lg bg-blumine-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent ">
            {NavbarMenu.map(({ label, path }) => {
              const isActive =
                pathname === path ||
                (path === "/services" && pathname.startsWith("/services/")) ||
                (path === "/projects" && pathname.startsWith("/projects/"));

              return (
                <li key={label}>
                  <Link
                    href={path}
                    onClick={scrollToTop}
                    className={`py-2 px-4 rounded hover:text-blue-600 md:hover:bg-transparent md:p-0 ${
                      isActive
                        ? "font-bold text-blue-600"
                        : isSticky
                        ? "text-gray-400"
                        : "text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <NavbarMobile /> */}
      </div>
    </nav>
  );
}
