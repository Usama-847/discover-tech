"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBootcampOpen, setIsBootcampOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bootcampRef = useRef(null);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.15)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], [8, 20]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBootcamp = () => {
    setIsBootcampOpen(!isBootcampOpen);
  };

  const closeBootcamp = () => {
    setIsBootcampOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path
      ? "text-gray-900 font-semibold bg-white/20 backdrop-blur-sm"
      : "text-gray-800 hover:text-gray-900 hover:bg-white/10";
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bootcampRef.current && !bootcampRef.current.contains(event.target)) {
        setIsBootcampOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="backdrop-blur-md border-b border-white/20 shadow-lg sticky top-0 z-50 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-evenly items-center">
        <div className="w-full flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="rounded-2xl">
              <Image
                src="/images/logo/logo.png"
                width={150}
                height={150}
                alt="logo"
                className="rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <motion.div
              className="ml-10 flex items-baseline space-x-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 backdrop-blur-sm ${isActive(
                    "/"
                  )}`}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 backdrop-blur-sm ${isActive(
                    "/about"
                  )}`}
                >
                  About
                </Link>
              </motion.div>

              {/* Bootcamp Dropdown */}
              <div className="relative" ref={bootcampRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsBootcampOpen(true)}
                  onMouseLeave={() => setIsBootcampOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-gray-900 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center"
                >
                  Bootcamp
                  <motion.svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: isBootcampOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>

                <motion.div
                  className="absolute right-0 mt-2 w-56 bg-white/20 backdrop-blur-lg rounded-lg shadow-xl border border-white/30 overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{
                    opacity: isBootcampOpen ? 1 : 0,
                    y: isBootcampOpen ? 0 : -10,
                    scale: isBootcampOpen ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ display: isBootcampOpen ? "block" : "none" }}
                  onMouseEnter={() => setIsBootcampOpen(true)}
                  onMouseLeave={() => setIsBootcampOpen(false)}
                >
                  <div className="py-2">
                    <motion.div
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Link
                        href="/bootcamp"
                        onClick={closeBootcamp}
                        className="block px-4 py-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200"
                      >
                        All Bootcamps
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Link
                        href="/bootcamp/web-development"
                        onClick={closeBootcamp}
                        className="block px-4 py-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200"
                      >
                        Web Development
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Link
                        href="/bootcamp/data-science"
                        onClick={closeBootcamp}
                        className="block px-4 py-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200"
                      >
                        Data Science
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Link
                        href="/bootcamp/digital-marketing"
                        onClick={closeBootcamp}
                        className="block px-4 py-3 text-sm text-gray-800 hover:text-gray-900 transition-colors duration-200"
                      >
                        Digital Marketing
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/solution"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 backdrop-blur-sm ${isActive(
                    "/solution"
                  )}`}
                >
                  Solution
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 backdrop-blur-sm ${isActive(
                    "/contact"
                  )}`}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="bg-white/20 backdrop-blur-sm inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-200"
            >
              <motion.svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-0 pt-2 pb-3 space-y-1 bg-white/20 backdrop-blur-lg border-t border-white/30 w-full">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-6 py-3 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200 w-full"
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-6 py-3 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200 w-full"
            >
              About
            </Link>
          </motion.div>

          {/* Mobile Bootcamp Menu */}
          <motion.div
            className="w-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={toggleBootcamp}
              className="w-full text-left px-6 py-3 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-white/20 flex justify-between items-center transition-colors duration-200"
            >
              Bootcamp
              <motion.svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isBootcampOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isBootcampOpen ? "auto" : 0,
                opacity: isBootcampOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-white/10 backdrop-blur-sm w-full">
                <Link
                  href="/bootcamp"
                  onClick={() => {
                    closeBootcamp();
                    closeMenu();
                  }}
                  className="block px-10 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200 w-full"
                >
                  All Bootcamps
                </Link>
                <Link
                  href="/bootcamp/web-development"
                  onClick={() => {
                    closeBootcamp();
                    closeMenu();
                  }}
                  className="block px-10 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200 w-full"
                >
                  Web Development
                </Link>
                <Link
                  href="/bootcamp/data-science"
                  onClick={() => {
                    closeBootcamp();
                    closeMenu();
                  }}
                  className="block px-10 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200 w-full"
                >
                  Data Science
                </Link>
                <Link
                  href="/bootcamp/digital-marketing"
                  onClick={() => {
                    closeBootcamp();
                    closeMenu();
                  }}
                  className="block px-10 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200 w-full"
                >
                  Digital Marketing
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/solution"
              onClick={closeMenu}
              className="block px-6 py-3 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200 w-full"
            >
              Solution
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block px-6 py-3 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200 w-full"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
