"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBootcampOpen, setIsBootcampOpen] = useState(false);
  const bootcampRef = useRef(null);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.15)"]
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bootcampRef.current && !bootcampRef.current.contains(e.target)) {
        setIsBootcampOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (path) =>
    pathname === path
      ? "text-white bg-black font-semibold"
      : "text-black hover:text-white hover:bg-black";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solution", path: "/solution" },
    { name: "Contact", path: "/contact" },
  ];

  const bootcampOptions = [
    { name: "All Bootcamps", path: "/bootcamp" },
    { name: "Web Development", path: "/bootcamp/web-development" },
    // { name: "Data Science", path: "/bootcamp/data-science" },
    { name: "Digital Marketing", path: "/bootcamp/digital-marketing" },
    // { name: "Data Engineering Bootcamp", path: "/bootcamp/data-engineering" },
    { name: "Airline Reservation", path: "/bootcamp/airline-reservation" },
    { name: "Data Analytics Bootcamp", path: "/bootcamp/data-analytics" },
    { name: "Business Analytics", path: "/bootcamp/business-analytics" },
    { name: "Mern Stack Bootcamp", path: "/bootcamp/mern-stack" },
    {
      name: "Mobile Development Bootcamp",
      path: "/bootcamp/mobile-development",
    },
    { name: "Business Development", path: "/bootcamp/business-development" },
    {
      name: "Web Design and Development",
      path: "/bootcamp/web-design-development",
    },
    { name: "Cyber Security", path: "/bootcamp/cyber-security" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setIsBootcampOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="sticky top-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20 shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 z-60"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/">
              <Image
                src="/images/logo/logo1.jpg"
                width={80}
                height={80}
                alt="logo"
                className="rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Home */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive(
                "/"
              )}`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive(
                "/about"
              )}`}
            >
              About
            </Link>

            {/* Bootcamp Menu */}
            <div
              className="relative"
              ref={bootcampRef}
              onMouseEnter={() => setIsBootcampOpen(true)}
              onMouseLeave={() => setIsBootcampOpen(false)}
            >
              <div
                className={`px-4 py-2 rounded-md text-sm font-medium transition duration-75 cursor-pointer flex items-center ${
                  isBootcampOpen
                    ? "text-white bg-black"
                    : "text-black hover:text-white hover:bg-black"
                }`}
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
              </div>

              <motion.div
                className="absolute left-0 top-9 w-72 max-h-96 overflow-auto bg-white backdrop-blur-lg rounded-lg shadow-xl border border-white/30 scrollbar-hide"
                style={{
                  display: isBootcampOpen ? "block" : "none",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <style jsx>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>
                <div className="py-2">
                  {bootcampOptions.map((option, i) => (
                    <motion.div
                      key={option.path}
                      whileHover={{ backgroundColor: "#000", color: "#fff" }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={option.path}
                        onClick={() => setIsBootcampOpen(false)}
                        className="block px-4 py-3 text-sm text-black hover:text-white hover:bg-black transition-all duration-200"
                      >
                        {option.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Solution */}
            <Link
              href="/solution"
              className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive(
                "/solution"
              )}`}
            >
              Solution
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive(
                "/contact"
              )}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-60">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-md text-black hover:text-white hover:bg-black transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ y: "-100%" }}
        animate={{ y: isMenuOpen ? 0 : "-100%" }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Close button in top right */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="bg-black/10 backdrop-blur-sm p-3 rounded-full text-black hover:text-white hover:bg-black transition-all duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col justify-center items-center h-full px-8 space-y-8">
          {/* Home */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 30 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Link
              href="/"
              onClick={handleMenuItemClick}
              className={`text-3xl font-bold transition-all duration-300 hover:scale-110 ${
                pathname === "/"
                  ? "text-black bg-gray-200 px-6 py-3 rounded-lg"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Home
            </Link>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 30 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link
              href="/about"
              onClick={handleMenuItemClick}
              className={`text-3xl font-bold transition-all duration-300 hover:scale-110 ${
                pathname === "/about"
                  ? "text-black bg-gray-200 px-6 py-3 rounded-lg"
                  : "text-black hover:text-gray-600"
              }`}
            >
              About
            </Link>
          </motion.div>

          {/* Bootcamp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 30 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-center w-full"
          >
            <button
              onClick={() => setIsBootcampOpen(!isBootcampOpen)}
              className="text-3xl font-bold text-black hover:text-gray-600 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 mx-auto"
            >
              Bootcamp
              <motion.svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isBootcampOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
          </motion.div>

          {/* Bootcamp Dropdown */}
          {isBootcampOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 w-full max-w-sm mx-auto"
            >
              <div className="max-h-64 overflow-y-auto bg-white/30 rounded-lg p-4 backdrop-blur-sm scrollbar-hide">
                <style jsx>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>
                <div className="space-y-3">
                  {bootcampOptions.map((option, i) => (
                    <motion.div
                      key={option.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        href={option.path}
                        onClick={handleMenuItemClick}
                        className="block text-lg font-medium text-black hover:text-gray-600 transition-all duration-200 hover:scale-105 text-center py-2 px-3 rounded-md hover:bg-white/20"
                      >
                        {option.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 30 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Link
              href="/solution"
              onClick={handleMenuItemClick}
              className={`text-3xl font-bold transition-all duration-300 hover:scale-110 ${
                pathname === "/solution"
                  ? "text-black bg-gray-200 px-6 py-3 rounded-lg"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Solution
            </Link>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 30 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link
              href="/contact"
              onClick={handleMenuItemClick}
              className={`text-3xl font-bold transition-all duration-300 hover:scale-110 ${
                pathname === "/contact"
                  ? "text-black bg-gray-200 px-6 py-3 rounded-lg"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200 rounded-full opacity-10 blur-2xl"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
