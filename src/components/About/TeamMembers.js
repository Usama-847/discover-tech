"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "M S Khan Yousafzai",
      title: "Founder",
      role: "CEO",
      image: "/images/members/Mskhanyousaf.jpg",
    },
    {
      name: "Shafqat Mehmood",
      title: "CEO & Director",
      role: "CEO & Director",
      image: "/images/members/shafqat.png",
    },
    {
      name: "Amir Jabbar",
      title: "CTO & Co-Founder",
      role: "CTO & Co-Founder",
      image: "/images/members/Amir.png",
    },
    {
      name: "Zaryab Shafqat",
      title: "Director",
      role: "Director",
      image: "/images/members/Sajid.png",
    },
    {
      name: "Ubaid",
      title: "Web Dev Lead",
      role: "Web Dev Lead",
      image: "/images/members/Ubaid.png",
    },
    {
      name: "Sajjad Akbar",
      title: "IT & Network Engineer",
      role: "Web Dev Lead",
      image: "/images/members/Sajjad-Akbar.png",
    },
    {
      name: "Khurram",
      title: "Mobile Dev Lead",
      role: "Mobile Dev Lead",
      image: "/images/members/KHurram.png",
    },
    {
      name: "Jameel Khan",
      title: "Graphic Designer",
      role: "Graphic Designer",
      image: "/images/members/Jameel.png",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 rounded-full bg-white blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-gray-400 blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Enhanced heading with decorative elements */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-24"></div>
            <div className="mx-4 w-2 h-2 bg-white rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-24"></div>
          </div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-4 tracking-wide">
            Meet Our Team
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The brilliant minds behind our success, dedicated to excellence and
            innovation
          </p>

          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-32"></div>
          </div>
        </div>

        {/* Enhanced Swiper with custom styling */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer">
                  {/* Card container with advanced hover effects */}
                  <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 border border-gray-700 hover:border-gray-500 backdrop-blur-sm">
                    {/* Subtle shine effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>

                    {/* Profile image with enhanced styling */}
                    <div className="relative mb-6">
                      <div className="w-36 h-36 rounded-full mx-auto overflow-hidden transition-all duration-500 group-hover:scale-110 relative">
                        {/* Image border with gradient */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-gray-400/20 to-black/20 p-1">
                          <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={144}
                              height={144}
                              className="object-cover w-full h-full transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                            />
                          </div>
                        </div>

                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-gray-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300 delay-100"></div>
                    </div>

                    {/* Member info with typography hierarchy */}
                    <div className="text-center">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-gray-100 transition-colors duration-300 tracking-wide">
                        {member.name}
                      </h3>

                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-3 group-hover:via-gray-300 transition-colors duration-300"></div>

                      <p className="text-gray-400 text-sm font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                        {member.role}
                      </p>
                    </div>

                    {/* Subtle corner accents */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-gray-600 opacity-50 group-hover:opacity-100 group-hover:border-gray-400 transition-all duration-300"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-gray-600 opacity-50 group-hover:opacity-100 group-hover:border-gray-400 transition-all duration-300"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-gray-400 backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-gray-400 backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
    </section>
  );
};

export default TeamMembers;
