"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "@/app/constants/navigation";
import { createPortal } from "react-dom";

interface NavbarMobileProps {
  isScrolled?: boolean;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ isScrolled = false }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            onClick={() => setOpen(false)}
          />

          {/* Slide-out Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-[100] flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
          >
            {/* Close Button Inside Menu */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col space-y-2 mb-8">
              {NavMenu.map((route, idx) => (
                <motion.div
                  key={route.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    href={route.path}
                    onClick={handleNavigation}
                    className="block w-full py-4 px-4 rounded-xl text-masala-800 font-PlayfairDisplay text-xl font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                  >
                    {route.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-6 border-t border-gray-100"
            >
              <Link
                href="/kontak"
                onClick={handleNavigation}
                className="w-full flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dapatkan Penawaran
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      {/* Custom Hamburger Button */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="relative z-50 p-2 w-10 h-10 flex flex-col justify-center items-center group focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-transparent"
              : isScrolled
              ? "bg-masala-800"
              : "bg-white"
          }`}
        />
        <span
          className={`h-0.5 w-6 rounded-full my-1.5 transition-all duration-300 ${
            isOpen ? "bg-transparent" : isScrolled ? "bg-masala-800" : "bg-white"
          }`}
        />
        <span
          className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-transparent"
              : isScrolled
              ? "bg-masala-800"
              : "bg-white"
          }`}
        />
      </button>

      {mounted && createPortal(menuContent, document.body)}
    </div>
  );
};

export default NavbarMobile;
