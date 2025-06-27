"use client";
import React from "react";
import Image from "next/image";

export default function Solution() {
  const services = [
    {
      title: "Machine Learning",
      icon: "/images/solution/img1.jpg",
      description:
        "Our expert machine learning team empowers businesses to grow by unlocking insights hidden within unstructured data. We help transform complex datasets from diverse sources into strategic, data-driven decisions.",
      gradient: "from-gray-800 to-gray-600",
      bgPattern: "bg-gradient-to-br from-gray-800/20 to-gray-900/20",
    },
    {
      title: "Business Intelligence",
      icon: "/images/solution/img2.jpg",
      description:
        "We offer expert BI and Data Warehouse consulting, along with powerful Big Data analytics solutions. Our services help you harness the full potential of your data and establish efficient data management systems to support smarter, faster decision-making.",
      gradient: "from-gray-700 to-black",
      bgPattern: "bg-gradient-to-br from-gray-700/20 to-black/20",
    },
    {
      title: "Predictive Analytics",
      icon: "/images/solution/img3.jpg",
      description:
        "Our team develops proprietary AI models tailored for personalized recommendations, churn prediction, dynamic pricing, fraud detection, sentiment analysis, and customer segmentation—empowering your business with smarter, data-driven strategies.",
      gradient: "from-gray-600 to-gray-800",
      bgPattern: "bg-gradient-to-br from-gray-600/20 to-gray-800/20",
    },
    {
      title: "Natural Language Processing",
      icon: "/images/solution/img4.jpg",
      description:
        "We analyze text and audio data from sources like social media and emails to reveal deep audience insights. Our custom NLP solutions help you understand your users better by identifying sentiment, interests, gender, and more.",
      gradient: "from-black to-gray-700",
      bgPattern: "bg-gradient-to-br from-black/20 to-gray-700/20",
    },
    {
      title: "Generative AI",
      icon: "/images/solution/img5.jpg",
      description:
        "We help businesses harness the power of ChatGPT to automate workflows, enhance customer service, and accelerate decision-making. Our team offers seamless integration and custom solutions tailored to your specific needs.",
      gradient: "from-gray-900 to-gray-600",
      bgPattern: "bg-gradient-to-br from-gray-900/20 to-gray-600/20",
    },
    {
      title: "App & Web Development",
      icon: "/images/solution/img6.jpg",
      description:
        "We build custom mobile and app development solutions designed to drive business growth. Our intuitive, user-focused applications enhance customer engagement, streamline operations, improve efficiency, and reduce manual errors through smart automation and seamless user experiences.",
      gradient: "from-gray-800 to-black",
      bgPattern: "bg-gradient-to-br from-gray-800/20 to-black/20",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromSide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
        }
        .salt-texture {
          background-image: radial-gradient(
              circle at 20% 80%,
              rgba(255, 255, 255, 0.15) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(248, 250, 252, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 40%,
              rgba(255, 255, 255, 0.08) 0%,
              transparent 50%
            );
        }
      `}</style>

      {/* Hero Section - Salt Background */}
      <section className="bg-gradient-to-br from-gray-100 via-slate-50 to-gray-50 salt-texture py-20 px-4 text-center relative overflow-hidden">
        {/* Floating salt crystals */}
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

      {/* Our Expertise Section - Salt Background */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-slate-100 salt-texture">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Our Expertise
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-12">
          As an AI development company, we always keep track of emerging
          technologies and have developed our proprietary models and tools to
          deliver benefits to our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-64 cursor-pointer"
            >
              {/* Background Image - Always visible */}
              <div className="absolute inset-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Pepper gradient overlay - visible by default, becomes lighter on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
                {/* Dark pepper overlay for better text readability on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
              </div>

              {/* Decorative elements - visible by default, hidden on hover */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full group-hover:opacity-0 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full group-hover:opacity-0 transition-all duration-500"></div>

              {/* Title - Always visible at bottom, hidden on hover */}
              <div className="absolute bottom-6 left-6 right-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Hover Content - Text Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-30">
                <h3 className="text-white font-bold text-xl mb-4 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-white/95 text-sm leading-relaxed drop-shadow-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Can Help You Section - Pepper Dark */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Animated background elements */}
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
                gradient: "from-gray-600 to-gray-900",
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
                {/* 3D Card effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl transform perspective-1000 group-hover:rotate-y-5 transition-transform duration-500"></div>

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
                <div className="relative z-10">
                  <h3 className="font-bold mb-4 text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-600/5 to-gray-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Salt Background */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white salt-texture relative">
        {/* Background decoration */}
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
            {/* Vertical line */}
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
                {/* Left content (desktop) */}
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

                {/* Center timeline marker */}
                <div className="relative z-10 mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border-4 border-white">
                    {idx + 1}
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-black blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>

                {/* Right content (desktop) */}
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

      {/* Industries We Serve Section - Pepper Dark */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-gray-400 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-gray-500 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-gray-500 rounded-full opacity-25 animate-ping delay-1000"></div>
        </div>

        {/* Floating geometric shapes */}
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
                  {/* 3D depth effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl"></div>

                  {/* Glowing background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon container with 3D effect */}
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

                  {/* Hover light effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-600/5 to-gray-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Bottom glow */}
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r ${industry.gradient} blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section - Salt Background */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-100 salt-texture">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          What Makes us Unique
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-12">
          Our artificial intelligence developers build beneficial products and
          software solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Top-Notch Team",
              desc: "With years of experience, our AI software engineers excel at delivering innovative, AI-powered solutions across industries.",
            },
            {
              title: "Strong Technical Expertise",
              desc: "We bring deep knowledge in custom AI application development and software design tailored to diverse business domains.",
            },
            {
              title: "Reliable Technology Partner",
              desc: "We ensure transparency throughout the AI development process and maintain clear, consistent communication at every stage.",
            },
            {
              title: "Flexible Collaboration",
              desc: "Our adaptive cooperation terms are designed to perfectly align with your project's specific needs and objectives.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-300 rounded-lg p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              <h3 className="font-medium mb-2 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
