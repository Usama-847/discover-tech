"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
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

  const getPhoneNumber = () => {
    const encoded = "KzkyIDMxMDIyOTk5ODU=";
    return atob(encoded);
  };

  const getEmail = () => {
    const encoded = "aW5mb0BkaXNjb3ZlcnRlY2guY29tLnBr";
    return atob(encoded);
  };

  const getWhatsAppLink = () => {
    const phone = getPhoneNumber().replace(/\s+/g, "");
    return `https://wa.me/${phone}`;
  };

  const handlePhoneClick = () => {
    window.open(getWhatsAppLink(), "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${getEmail()}`;
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex-shrink-0">
              <Link href="/" className="rounded-2xl">
                <Image
                  src="/images/logo/logo.png"
                  width={120}
                  height={120}
                  alt="Discovertech logo"
                  className="rounded-2xl"
                />
              </Link>
            </div>
            <h3 className="text-xl font-bold text-green-400">Discovertech</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering careers through innovative technology education and
              comprehensive bootcamp programs.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.343-.09.377-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/solution"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Bootcamp Programs - Split into two columns for better organization */}
          <div className="space-y-4 lg:col-span-1">
            <h4 className="text-lg font-semibold text-green-400">
              Bootcamp Programs
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {bootcampOptions.slice(0, 7).map((option) => (
                <Link
                  key={option.path}
                  href={option.path}
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm block"
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>

          {/* More Bootcamp Programs */}
          <div className="space-y-4 lg:col-span-1">
            <h4 className="text-lg font-semibold text-green-400 lg:opacity-0 lg:pointer-events-none">
              More Programs
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {bootcampOptions.slice(7).map((option) => (
                <Link
                  key={option.path}
                  href={option.path}
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm block"
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Section - Moved to separate row */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-start md:items-center justify-center gap-5 md:gap-10">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-green-400">
              Contact Info
            </h4>
          </div>

          <div className="space-y-3 flex flex-col md:flex-row items-start md:items-center justify-center w-full gap-5 md:gap-10">
            <div className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <button
                onClick={handleEmailClick}
                className="text-gray-300 hover:text-green-400 transition-colors text-sm cursor-pointer"
                title="Click to send email"
              >
                info@discovertech.com.pk
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <button
                onClick={handlePhoneClick}
                className="text-gray-300 hover:text-green-400 transition-colors text-sm cursor-pointer flex items-center space-x-2"
                title="Click to open WhatsApp"
              >
                <span>+92 310 2299985</span>
              </button>
            </div>
            <div className="flex items-start space-x-3">
              <svg
                className="h-5 w-5 text-green-400 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-300 text-sm">
                Vella no 1827 Street No 72, Block A
                <br />
                Faisal Town F-18 Islamabad, Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Discovertech. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
