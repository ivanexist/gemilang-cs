"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useScrollStore } from "@/store/useScrollStore";
import { ReactSVG } from "react-svg";
import NavbarMobile from "./NavbarMobile";

const NavbarMenu = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
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
        isSticky ? "bg-white shadow-sm py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl w-full flex items-center justify-between mx-auto py-2 ">
        <div className="flex">
          <div className="flex">
            <Link
              href="/"
              onClick={scrollToTop}
              className="flex items-center space-x-3 rtl:space-x-reverse mx-2 sm:w-24 sm:h-12 md:w-32 md:h-14"
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
                <Link
                  key={label}
                  href={path}
                  onClick={scrollToTop}
                  // className={`pb-4 px-4  md:hover:bg-transparent md:p-0 `}
                >
                  <li
                    className={`pb-2 hover:text-blue-600 hover:border-b-2 hover:border-b-malachite-400 ${
                      isActive
                        ? "font-bold text-blue-600 border-b-2 pb-2 border-b-malachite-400"
                        : isSticky
                        ? "text-masala-600"
                        : "text-white"
                    }`}
                  >
                    {label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <button className="sm:hidden lg:flex items-center px-4 py-2 font-semibold text-white bg-blue-700 hover:bg-blue-600 hover:text-gray-100 hover:cursor-pointer transition duration-300 rounded-lg">
            <ReactSVG
              className="text-blue-500 transition-colors duration-300"
              src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/phone-icon.svg`}
            />
            <span className="font-medium ml-1 text-white p-1">Get Quote</span>
          </button>
        </div>
        <NavbarMobile />
      </div>
    </nav>
  );
}
