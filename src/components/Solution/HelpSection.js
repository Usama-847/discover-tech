"use client";
import React from "react";

const HelpSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
          How We Can Help You
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          We welcome collaboration with teams on projects of any complexity.
          Together, we'll create innovative systems, solutions, and products
          that give you a competitive edge.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "AI/ML Strategy & Consulting",
              desc: "Have an AI project idea but unsure where to start? Our experts provide strategic consulting to help you avoid common pitfalls and set your project up for success.",
              icon: "🧠",
              gradient: "from-gray-600 to-gray-800",
            },
            {
              title: "PoC of AI-based Solution",
              desc: "A PoC is a crucial step before full AI adoption. Our data science consultants will validate your idea's potential to ensure it's worth pursuing.",
              icon: "🔬",
              gradient: "from-gray-700 to-black",
            },
            {
              title: "MVP of AI-based Product",
              desc: "Looking for a breakthrough? As product lifecycle MVPs with essential features to engage early users and gather valuable feedback for ongoing improvement.",
              icon: "🚀",
              gradient: "from-gray-800 to-gray-600",
            },
            {
              title: "Custom Model Development",
              desc: "We build and train tailored AI models to meet your unique business requirements or optimize and retrain your existing models—whether open-source or proprietary—for enhanced performance and scalability.",
              icon: "⚙️",
              gradient: "from-black to-gray-700",
            },
            {
              title: "AI Software Development",
              desc: "Whether starting a new AI-powered web application or enhancing your current system with AI capabilities, our development team is here to bring your vision to life.",
              icon: "💻",
              gradient: "from-gray-900 to-gray-600",
            },
            {
              title: "Business Data Analytics",
              desc: "Improve decision-making with comprehensive analytics services, including regression analysis, time series forecasting, classification, and anomaly detection.",
              icon: "📊",
              gradient: " from-gray-600 to-gray-900",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white/10 backdrop-blur-lg border border-gray-600/30 rounded-2xl p-8 hover:bg-gray-800/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:rotate-1 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl transform perspective-1000 group-hover:rotate-y-5 transition-transform duration-500"></div>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}
              ></div>
              <div className="relative z-10 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
                >
                  {item.icon}
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="font-bold mb-4 text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-600/5 to-gray-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
