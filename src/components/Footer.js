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

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex-shrink-0 -mt-6">
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
              Empowering careers through innovative <br /> technology education
              and comprehensive <br /> bootcamp programs.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="https://web.facebook.com/discovertech01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24H12.82v-9.294H9.692V11.29h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.416h-3.123V24h6.116C23.407 24 24 23.406 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@discovertech0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.75 0h3.375a5.994 5.994 0 0 0 5.25 5.25v3.375a9.369 9.369 0 0 1-5.25-1.575v7.8a7.875 7.875 0 1 1-7.875-7.875 7.62 7.62 0 0 1 2.625.45v3.675a4.5 4.5 0 1 0 3.375 4.35V0z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/discoverthetech0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
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
                href="https://www.pinterest.com/discoverthetech0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
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
