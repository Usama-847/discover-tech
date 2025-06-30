"use client";
import React from "react";

const TimelineSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white salt-texture relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Turn Your Vision into a Market-Ready Solution
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          Our user-focused MVP development process lays a strong foundation,
          ensuring your product is ready for the market before full-scale
          development begins.
        </p>
        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-600 via-black to-gray-800 shadow-lg shadow-gray-500/50 rounded-full"></div>
          {[
            {
              name: "Planning",
              desc: "Strategic roadmap development and requirement analysis",
              icon: "📋",
              color: "gray",
            },
            {
              name: "Designing",
              desc: "User-centric design and prototype creation",
              icon: "🎨",
              color: "gray",
            },
            {
              name: "Defining",
              desc: "Technical specifications and architecture design",
              icon: "📐",
              color: "slate",
            },
            {
              name: "Building",
              desc: "Agile development with continuous integration",
              icon: "🔨",
              color: "gray",
            },
            {
              name: "Testing",
              desc: "Comprehensive quality assurance and validation",
              icon: "🧪",
              color: "slate",
            },
            {
              name: "Deployment",
              desc: "Seamless production deployment and monitoring",
              icon: "🚀",
              color: "gray",
            },
            {
              name: "Maintenance",
              desc: "Ongoing support and performance optimization",
              icon: "⚙️",
              color: "slate",
            },
          ].map((step, idx) => (
            <div
              key={step.name}
              className="flex flex-col md:flex-row items-center mb-12 w-full group"
              style={{
                animationDelay: `${idx * 200}ms`,
                animation: "slideInFromSide 0.8s ease-out forwards",
              }}
            >
              <div className="md:w-1/2 md:pr-8 w-full mb-6 md:mb-0">
                {idx % 2 === 0 && (
                  <div className="flex md:justify-end justify-center">
                    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 max-w-sm group-hover:scale-105 group-hover:-translate-y-1 group-hover:rotate-1">
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r from-${step.color}-600 to-${step.color}-800 rounded-xl flex items-center justify-center text-xl mr-4 shadow-lg`}
                        >
                          {step.icon}
                        </div>
                        <h4 className="font-bold text-lg text-gray-800">
                          {step.name}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative z-10 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border-4 border-white">
                  {idx + 1}
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-black blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              <div className="md:w-1/2 md:pl-8 w-full">
                {idx % 2 !== 0 && (
                  <div className="flex md:justify-start justify-center">
                    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 max-w-sm group-hover:scale-105 group-hover:-translate-y-1 group-hover:-rotate-1">
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r from-${step.color}-600 to-${step.color}-800 rounded-xl flex items-center justify-center text-xl mr-4 shadow-lg`}
                        >
                          {step.icon}
                        </div>
                        <h4 className="font-bold text-lg text-gray-800">
                          {step.name}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
