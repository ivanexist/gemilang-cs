"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useScrollStore } from "@/store/useScrollStore";
import NavbarMobile from "./NavbarMobile";
import { NavMenu } from "@/app/constants/navigation";

export default function Navbar() {
  const { scrollToTop } = useScrollStore();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    // If not homepage, always consider it "scrolled" for solid background
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex-shrink-0 flex items-center group"
          >
            <div className="relative w-32 sm:w-40 h-10 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/Logo-GCS.png"
                alt="Logo PT Gemilang Cipta Sentosa"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NavMenu.map(({ label, path }) => {
              const isActive =
                pathname === path ||
                (path === "/layanan" && pathname.startsWith("/layanan/")) ||
                (path === "/proyek" && pathname.startsWith("/proyek/"));

              return (
                <Link
                  key={label}
                  href={path}
                  onClick={scrollToTop}
                  className="relative group px-4 py-2"
                >
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : isScrolled
                        ? "text-masala-700 group-hover:text-blue-600"
                        : "text-white/90 group-hover:text-white"
                    }`}
                  >
                    {label}
                  </span>
                  {/* Underline animation */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-transform duration-300 origin-left ${
                      isActive ? "bg-malachite-500 scale-x-100" : "bg-blue-500 scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/kontak"
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Konsultasi Gratis
            </Link>

            {/* Mobile Menu Component */}
            <div className="lg:hidden">
              <NavbarMobile isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
