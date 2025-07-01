"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBootcampOpen, setIsBootcampOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  // Logo rotates unlimited times with scroll - every 100px = full rotation
  const logoRotation = useTransform(scrollY, (value) => value * 0.36);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solution", path: "/solution" },
  ];

  const bootcampOptions = [
    { name: "All Bootcamps", path: "/bootcamp" },
    { name: "Web Development", path: "/bootcamp/web-development" },
    { name: "Digital Marketing", path: "/bootcamp/digital-marketing" },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 1024); // lg breakpoint
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleBootcamp = () => {
    setIsBootcampOpen(!isBootcampOpen);
  };

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const isBootcampActive = () => {
    return pathname.startsWith("/bootcamp");
  };

  // Animation properties based on device size
  const getNavAnimationProps = () => {
    if (isLargeDevice) {
      return {
        width: isScrolled ? "75%" : "100%",
        borderRadius: isScrolled ? "50px" : "0px",
        marginLeft: isScrolled ? "12.5%" : "0%",
        marginRight: isScrolled ? "12.5%" : "0%",
        marginTop: isScrolled ? "10px" : "0px",
      };
    } else {
      return {
        width: "100%",
        borderRadius: "0px",
        marginLeft: "0%",
        marginRight: "0%",
        marginTop: isScrolled ? "10px" : "0px",
      };
    }
  };

  const getLogoContainerAnimation = () => {
    if (isLargeDevice) {
      // Large devices: move logo closer to center
      return {
        marginRight: isScrolled ? "40px" : "0px",
        transform: isScrolled ? "translateX(80px)" : "translateX(0px)",
      };
    } else {
      // Small devices: no position change
      return {
        marginRight: "0px",
        transform: "translateX(0px)",
      };
    }
  };

  const getContactButtonAnimation = () => {
    if (isLargeDevice) {
      // Large devices: move contact button
      return {
        transform: isScrolled ? "translateX(-80px)" : "translateX(0px)",
        marginLeft: isScrolled ? "-40px" : "0px",
      };
    } else {
      // Small devices: no position change
      return {
        transform: "translateX(0px)",
        marginLeft: "0px",
      };
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={getNavAnimationProps()}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 right-0 z-[999] backdrop-blur-xl border border-white/30"
        style={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.9)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-between items-center"
            animate={{
              height: isScrolled ? "72px" : "64px",
              paddingTop: isScrolled ? "8px" : "0px",
              paddingBottom: isScrolled ? "8px" : "0px",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo - position changes only on large devices */}
            <motion.div
              className="flex-shrink-0"
              animate={getLogoContainerAnimation()}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="/" className="flex items-center">
                <motion.div
                  className="w-10 h-10  rounded-lg flex items-center justify-center mr-3 shadow-lg"
                  style={{ rotate: logoRotation }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
<<<<<<< Updated upstream
                    src="/images/logo/D.jpg"
=======
                    src="/images/logo/logo.png"
>>>>>>> Stashed changes
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </motion.div>
                <motion.span
                  className="text-gray-800 text-xl font-semibold"
                  animate={{
                    fontSize: isScrolled ? "1.125rem" : "1.25rem",
                    opacity: isScrolled ? 0.9 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  DiscoverTech
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={`text-sm font-medium transition-all duration-300 relative group ${
                        isActive(link.path)
                          ? "text-gray-800"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      {link.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive(link.path) ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Bootcamp Dropdown */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={toggleBootcamp}
                    className={`text-sm font-medium flex items-center transition-all duration-300 relative group ${
                      isBootcampActive()
                        ? "text-gray-800"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    Bootcamp
                    <motion.div
                      animate={{ rotate: isBootcampOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isBootcampActive() ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>

                  <AnimatePresence>
                    {isBootcampOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 bg-gray-300 backdrop-blur-md rounded-xl shadow-2xl py-2 z-50 border border-gray-200"
                      >
                        {bootcampOptions.map((option, index) => (
                          <motion.div
                            key={option.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={option.path}
                              className={`block px-4 py-2 text-sm transition-all duration-200 rounded-lg mx-2 ${
                                isActive(option.path)
                                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-800"
                              }`}
                              onClick={() => setIsBootcampOpen(false)}
                            >
                              {option.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Right side items - Contact Us moves closer when scrolled on large devices only */}
            <motion.div
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity: 1,
                x: 0,
                ...getContactButtonAnimation(),
              }}
              transition={{
                delay: 0.4,
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {/* Contact Us Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-purple-500/25"
                >
                  Contact Us
                  <motion.svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-800 p-2 z-50 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden"
          >
            {/* Mobile Header with Logo */}
            <div className="flex justify-between items-center h-16 px-4 border-b border-white/10">
              <Link href="/" className="flex items-center">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mr-2"
                  style={{ rotate: logoRotation }}
                >
                  <span className="text-white font-bold text-lg">D</span>
                </motion.div>
                <span className="text-white text-lg font-semibold">
                  DiscoverTech
                </span>
              </Link>
              <motion.button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Mobile Menu Content - Centered */}
            <div className="flex flex-col justify-center items-center h-full px-6 -mt-16">
              <div className="space-y-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={`block text-xl font-medium transition-all duration-200 px-4 py-2 rounded-lg ${
                        isActive(link.path)
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Bootcamp Section */}
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={toggleBootcamp}
                    className={`flex items-center justify-center w-full text-xl font-medium transition-all duration-200 px-4 py-2 rounded-lg ${
                      isBootcampActive()
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Bootcamp
                    <motion.div
                      animate={{ rotate: isBootcampOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-2 h-5 w-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isBootcampOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-3 max-h-72 overflow-y-auto scrollbar-hide">
                          {bootcampOptions.map((option, index) => (
                            <motion.div
                              key={option.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={option.path}
                                className={`block text-lg font-medium transition-all duration-200 text-center px-3 py-2 rounded-lg ${
                                  isActive(option.path)
                                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-white/10"
                                }`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsBootcampOpen(false);
                                }}
                              >
                                {option.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 flex items-center justify-center mt-8 shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                    <motion.svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom scrollbar hiding styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;
