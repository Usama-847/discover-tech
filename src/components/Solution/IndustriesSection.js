"use client";
import React from "react";

const IndustriesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-gray-400 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-gray-500 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-gray-500 rounded-full opacity-25 animate-ping delay-1000"></div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-gray-500 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 border border-gray-400 rounded-full animate-pulse"></div>
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Industries We{" "}
          <span className="bg-gradient-to-r from-gray-300 via-white to-gray-200 bg-clip-text text-transparent">
            Serve
          </span>
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          Delivering cutting-edge AI solutions across diverse industries to
          drive innovation and growth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Technology",
              icon: "💻",
              gradient: "from-gray-600 to-gray-800",
              pattern: "tech",
            },
            {
              name: "Retail & Fashion",
              icon: "👗",
              gradient: "from-gray-700 to-black",
              pattern: "retail",
            },
            {
              name: "E-commerce",
              icon: "🛒",
              gradient: "from-gray-600 to-gray-900",
              pattern: "commerce",
            },
            {
              name: "FinTech",
              icon: "💳",
              gradient: "from-gray-800 to-gray-600",
              pattern: "fintech",
            },
            {
              name: "Logistics",
              icon: "🚚",
              gradient: "from-black to-gray-700",
              pattern: "logistics",
            },
            {
              name: "Healthcare",
              icon: "🏥",
              gradient: "from-gray-700 to-gray-900",
              pattern: "health",
            },
            {
              name: "Education",
              icon: "🎓",
              gradient: "from-gray-900 to-gray-600",
              pattern: "education",
            },
            {
              name: "Real Estate",
              icon: "🏠",
              gradient: "from-gray-600 to-black",
              pattern: "realestate",
            },
          ].map((industry, index) => (
            <div
              key={industry.name}
              className="group relative perspective-1000"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInScale 0.6s ease-out forwards",
              }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg border border-gray-600/30 rounded-2xl p-8 hover:bg-gray-800/30 transition-all duration-500 cursor-pointer transform-gpu hover:scale-110 hover:-translate-y-2 hover:rotate-y-12 hover:rotate-x-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-2xl transition-opacity duration-500`}
                ></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div
                    className={`w-16 h-16 mb-4 bg-gradient-to-r ${industry.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border border-gray-600/20`}
                  >
                    {industry.icon}
                  </div>
                  <span className="font-bold text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                    {industry.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-600/5 to-gray-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r ${industry.gradient} blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
