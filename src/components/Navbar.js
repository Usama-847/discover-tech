"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBootcampOpen, setIsBootcampOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solution", path: "/solution" },
    { name: "Contact", path: "/contact" },
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

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo1.jpg"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Home */}
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/")
                    ? "bg-black text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/about")
                    ? "bg-black text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
              </Link>

              {/* Bootcamp Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleBootcamp}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200 ${
                    isBootcampActive()
                      ? "bg-black text-white"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  Bootcamp
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isBootcampOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isBootcampOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    {bootcampOptions.map((option) => (
                      <Link
                        key={option.name}
                        href={option.path}
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive(option.path)
                            ? "bg-black text-white"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                        onClick={() => setIsBootcampOpen(false)}
                      >
                        {option.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solution */}
              <Link
                href="/solution"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/solution")
                    ? "bg-black text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Solution
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/contact")
                    ? "bg-black text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 z-50 relative"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        {/* Mobile Header with Logo */}
        <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo1.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Content - Centered */}
        <div className="flex flex-col justify-center items-center h-full px-6 -mt-16">
          <div className="space-y-6 text-center">
            <Link
              href="/"
              className={`block text-xl font-medium transition-colors duration-200 px-4 py-2 rounded-md ${
                isActive("/")
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block text-xl font-medium transition-colors duration-200 px-4 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Bootcamp Section */}
            <div className="w-full">
              <button
                onClick={toggleBootcamp}
                className={`flex items-center justify-center w-full text-xl font-medium transition-colors duration-200 px-4 py-2 rounded-md ${
                  isBootcampActive()
                    ? "bg-black text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Bootcamp
                <ChevronDown
                  className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                    isBootcampOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isBootcampOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="pt-3 space-y-3 max-h-72 overflow-y-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitScrollbar: { display: "none" },
                  }}
                >
                  {bootcampOptions.map((option) => (
                    <Link
                      key={option.name}
                      href={option.path}
                      className={`block text-lg font-medium transition-colors duration-200 text-center px-3 py-2 rounded-md ${
                        isActive(option.path)
                          ? "bg-black text-white"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setIsBootcampOpen(false);
                      }}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/solution"
              className={`block text-xl font-medium transition-colors duration-200 px-4 py-2 rounded-md ${
                isActive("/solution")
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Solution
            </Link>

            <Link
              href="/contact"
              className={`block text-xl font-medium transition-colors duration-200 px-4 py-2 rounded-md ${
                isActive("/contact")
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

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
    </nav>
  );
};

export default Navbar;
