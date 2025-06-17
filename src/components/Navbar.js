"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBootcampOpen, setIsBootcampOpen] = useState(false);
  const bootcampRef = useRef(null);

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
      ? "text-white font-semibold bg-green-600/20"
      : "text-white/90 hover:text-white hover:bg-white/10";
  };

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
    <nav className="bg-[#6A7282] shadow-lg sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-evenly items-center">
        <div className="w-full flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 bg-gray-500">
            <Link href="/" className="rounded-2xl">
              <Image
                src="/images/logo/logo.png"
                width={150}
                height={150}
                alt="logo"
                className="rounded-2xl"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(
                  "/"
                )}`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(
                  "/about"
                )}`}
              >
                About
              </Link>

              {/* Bootcamp Dropdown */}
              <div className="relative" ref={bootcampRef}>
                <button
                  onMouseEnter={() => setIsBootcampOpen(true)}
                  onMouseLeave={() => setIsBootcampOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center"
                >
                  Bootcamp
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isBootcampOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 transform ${
                    isBootcampOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                  onMouseEnter={() => setIsBootcampOpen(true)}
                  onMouseLeave={() => setIsBootcampOpen(false)}
                >
                  <div className="py-2">
                    <Link
                      href="/bootcamp"
                      onClick={closeBootcamp}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                    >
                      All Bootcamps
                    </Link>
                    <Link
                      href="/bootcamp/web-development"
                      onClick={closeBootcamp}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/bootcamp/data-science"
                      onClick={closeBootcamp}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                    >
                      Data Science
                    </Link>
                    <Link
                      href="/bootcamp/digital-marketing"
                      onClick={closeBootcamp}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                    >
                      Digital Marketing
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/solution"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(
                  "/solution"
                )}`}
              >
                Solution
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(
                  "/contact"
                )}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-200"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-0 pt-2 pb-3 space-y-1 bg-white border-t w-full">
          <Link
            href="/"
            onClick={closeMenu}
            className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 w-full"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 w-full"
          >
            About
          </Link>

          {/* Mobile Bootcamp Menu */}
          <div className="w-full">
            <button
              onClick={toggleBootcamp}
              className="w-full text-left px-6 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 flex justify-between items-center transition-colors duration-200"
            >
              Bootcamp
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  isBootcampOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isBootcampOpen
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="bg-gray-50 w-full">
                <Link
                  href="/bootcamp"
                  onClick={() => {
                    closeBootcamp();
                    closeMenu();
                  }}
                  className="block px-10 py-3 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-100 transition-colors duration-200 w-full"
                >
                  All Bootcamps
                </Link>
                <Link
                  href="/bootcamp/web-development"
                  onClick={() => {
                    closeBootcamp();
                    closeMenu();
                  }}
                  className="block px-10 py-3 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-100 transition-colors duration-200 w-full"
                >
                  Web Development
                </Link>
                <Link
                  href="/bootcamp/data-science"
                  onClick={() => {
                    closeBootcamp();
                    closeMenu();
                  }}
                  className="block px-10 py-3 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-100 transition-colors duration-200 w-full"
                >
                  Data Science
                </Link>
                <Link
                  href="/bootcamp/digital-marketing"
                  onClick={() => {
                    closeBootcamp();
                    closeMenu();
                  }}
                  className="block px-10 py-3 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-100 transition-colors duration-200 w-full"
                >
                  Digital Marketing
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/solution"
            onClick={closeMenu}
            className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 w-full"
          >
            Solution
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 w-full"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
