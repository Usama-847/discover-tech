"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-slate-50 to-gray-50 salt-texture py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-white/40 to-gray-200/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-r from-gray-100/50 to-white/50 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-black to-gray-700 bg-clip-text text-transparent">
          Your Trusted Partner in{" "}
          <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
            AI Development
          </span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
