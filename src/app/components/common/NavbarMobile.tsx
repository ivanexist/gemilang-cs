"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useClickAway } from "react-use";
import HamburgerMenu from "hamburger-react";
// import { useRouter } from "next/navigation";

// Define the routes for the mobile navigation
const routesMobile = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];

const NavbarMobile: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  // const router = useRouter();

  // Close the menu when clicking outside
  useClickAway(ref, () => setOpen(false));

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={ref} className="md:hidden">
      <HamburgerMenu
        toggled={isOpen}
        toggle={setOpen}
        color="#249fd3"
        size={24}
      />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed z-50 left-0 right-0 top-24 p-6 pt-0 bg-white border-b border-b-white/20 shadow-4xl"
        >
          <ul className="grid gap-2 my-2">
            {routesMobile.map((route, idx) => (
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + idx / 10,
                }}
                key={route.title}
                className="w-full p-[0.08rem]"
              >
                <Link
                  href={route.link}
                  onClick={handleNavigation}
                  className="flex items-center justify-between w-full p-5 bg-blue-100"
                >
                  <span className="flex gap-1 text-lg text-blue-600 font-semibold">
                    {route.title}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavbarMobile;
