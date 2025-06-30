"use client";
import React from "react";

const UniqueSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white salt-texture relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-white/40 to-gray-200/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-gray-100/50 to-white/50 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/4 right-1/6 w-32 h-32 border border-gray-300/30 rounded-full animate-spin-slow"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          What Makes Us{" "}
          <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            Unique
          </span>
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Our artificial intelligence developers build beneficial products and
          software solutions, delivering unparalleled innovation and value to
          our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Top-Notch Team",
              desc: "With years of experience, our AI software engineers excel at delivering innovative, AI-powered solutions across industries.",
              icon: "👥",
              gradient: "from-gray-600 to-gray-800",
            },
            {
              title: "Strong Technical Expertise",
              desc: "We bring deep knowledge in custom AI application development and software design tailored to diverse business domains.",
              icon: "💡",
              gradient: "from-gray-700 to-black",
            },
            {
              title: "Reliable Technology Partner",
              desc: "We ensure transparency throughout the AI development process and maintain clear, consistent communication at every stage.",
              icon: "🤝",
              gradient: "from-gray-800 to-gray-600",
            },
            {
              title: "Flexible Collaboration",
              desc: "Our adaptive cooperation terms are designed to perfectly align with your project's specific needs and objectives.",
              icon: "🔄",
              gradient: "from-black to-gray-700",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white/10 backdrop-blur-lg border shadow-xl border-gray-300 rounded-2xl p-8 hover:bg-gray-100/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:rotate-1 cursor-pointer perspective-1000"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* 3D Card effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/5 to-transparent rounded-2xl transform perspective-1000 group-hover:rotate-y-5 transition-transform duration-500"></div>

              {/* Glowing border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 ">
                <h3 className="font-bold mb-4 text-xl text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-200/5 to-gray-300/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50 "></div>

              {/* Bottom glow */}
              <div
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r ${item.gradient} blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
