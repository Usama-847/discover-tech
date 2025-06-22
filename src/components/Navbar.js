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
    { name: "Data Science", path: "/bootcamp/data-science" },
    { name: "Digital Marketing", path: "/bootcamp/digital-marketing" },
    { name: "Data Engineering Bootcamp", path: "/bootcamp/data-engineering" },
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

  return (
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
          className="flex-shrink-0"
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
              className="absolute left-0 mt-0.5 w-72 max-h-96 overflow-auto bg-white backdrop-blur-lg rounded-lg shadow-xl border border-white/30 scrollbar-hide"
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
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-md text-black hover:text-white hover:bg-black"
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
          {/* Home */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0 * 0.1 }}
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 text-base font-medium text-black hover:text-white hover:bg-black transition duration-200"
            >
              Home
            </Link>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 * 0.1 }}
          >
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 text-base font-medium text-black hover:text-white hover:bg-black transition duration-200"
            >
              About
            </Link>
          </motion.div>

          {/* Bootcamp (Mobile Dropdown) */}
          <div>
            <button
              onClick={() => setIsBootcampOpen(!isBootcampOpen)}
              className="w-full px-6 py-3 text-base font-medium text-black hover:text-white hover:bg-black flex justify-between items-center"
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
              className="overflow-hidden bg-white/10 backdrop-blur-sm max-h-64 overflow-y-auto scrollbar-hide"
              style={{
                scrollbarWidth: "none" /* Firefox */,
                msOverflowStyle: "none" /* Internet Explorer 10+ */,
              }}
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
              {bootcampOptions.map((option, i) => (
                <motion.div
                  key={option.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={option.path}
                    onClick={() => {
                      setIsBootcampOpen(false);
                      setIsMenuOpen(false);
                    }}
                    className="block px-10 py-3 text-sm font-medium text-black hover:text-white hover:bg-black"
                  >
                    {option.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Solution */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3 * 0.1 }}
          >
            <Link
              href="/solution"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 text-base font-medium text-black hover:text-white hover:bg-black transition duration-200"
            >
              Solution
            </Link>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4 * 0.1 }}
          >
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 text-base font-medium text-black hover:text-white hover:bg-black transition duration-200"
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
