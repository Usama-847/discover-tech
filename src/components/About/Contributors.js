"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Contributors = () => {
  const contributors = [
    {
      name: "Shafqat Mehmood",
      title: "CEO & Director",
      image: "/images/members/shafqat.png",
    },
    {
      name: "Sajjad Akbar",
      title: "IT & Network Engineer",
      image: "/images/members/Sajjad-Akbar.png",
    },
    {
      name: "Amir Jabbar",
      title: "CTO & Co-Founder",
      image: "/images/members/Amir.png",
    },
    {
      name: "Ubaid",
      title: "Web Dev Lead",
      image: "/images/members/Ubaid.png",
    },
    {
      name: "Usama",
      title: "Full Stack Developer",
      image: "/images/members/Usama.jpg",
    },
    {
      name: "Zaroon",
      title: "Shopify Expert",
      image: "/images/members/Zaroon.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-16">
          MEET OUR EXPERT CONTRIBUTORS
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000 }}
          // pagination={{ clickable: true }}
          // navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {contributors.map((contributor, index) => (
            <SwiperSlide key={index}>
              <div className="text-center group">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg relative">
                  <Image
                    src={contributor.image}
                    alt={contributor.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-gray-800 font-semibold text-lg mb-1">
                  {contributor.name}
                </h3>
                <p className="text-gray-600 text-sm">{contributor.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Contributors;
