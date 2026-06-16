"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";
import { NavMenu } from "@/app/constants/navigation";

interface NavbarMobileProps {
  isScrolled?: boolean;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ isScrolled = false }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useClickAway(ref, () => setOpen(false));

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

  return (
    <div ref={ref} className="lg:hidden">
      {/* Custom Hamburger Button */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="relative z-50 p-2 w-10 h-10 flex flex-col justify-center items-center group focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-masala-800 rotate-45 translate-y-1.5"
              : isScrolled
              ? "bg-masala-800"
              : "bg-white"
          }`}
        />
        <span
          className={`h-0.5 w-6 rounded-full my-1.5 transition-all duration-300 ${
            isOpen ? "opacity-0" : isScrolled ? "bg-masala-800" : "bg-white"
          }`}
        />
        <span
          className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-masala-800 -rotate-45 -translate-y-1.5"
              : isScrolled
              ? "bg-masala-800"
              : "bg-white"
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
            >
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
    </div>
  );
};

export default NavbarMobile;
