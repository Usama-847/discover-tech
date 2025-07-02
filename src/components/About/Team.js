"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const images = [
  { src: "/images/team/C1.jpeg" },
  { src: "/images/team/C2.jpeg" },
  { src: "/images/team/C3.jpeg" },
  { src: "/images/team/C4.jpeg" },
  { src: "/images/team/C5.jpeg" },
  { src: "/images/team/C6.jpeg" },
  { src: "/images/team/C7.jpeg" },
  { src: "/images/team/C8.jpeg" },
  // Duplicate images for seamless loop
  { src: "/images/team/C1.jpeg" },
  { src: "/images/team/C2.jpeg" },
  { src: "/images/team/C3.jpeg" },
  { src: "/images/team/C4.jpeg" },
];

const TeamGallery = () => {
  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header with Salt & Pepper styling */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Making Every Impression Count
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Bridging Global Communities for an Impactful Future
          </p>
        </div>

        {/* First Swiper - Moving Right to Left */}
        <div className="mb-8">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={16}
            slidesPerView="auto"
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            speed={3000}
            className="team-swiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={`slide1-${index}`} className="!w-auto">
                <div className="relative w-64 h-64 overflow-hidden rounded-xl shadow-lg border-2 border-gray-300 bg-white group transition-all duration-300 hover:shadow-xl hover:border-gray-500">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <Image
                    src={img.src}
                    alt={`Team Member ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />

                  {/* Corner decoration */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action with Salt & Pepper styling */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-black text-white py-8 px-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of a community that's shaping the future and making every
              moment count.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for smoother animation */}
      <style jsx global>{`
        .team-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        .team-swiper .swiper-slide {
          width: auto !important;
        }

        /* Remove default swiper button styles if any */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        .swiper-pagination {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamGallery;
