"use client";
import React from "react";
import Image from "next/image";

const ExpertiseSection = () => {
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
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-slate-100 salt-texture">
      <h2 className="text-5xl md:text-6xl font-semibold text-center mb-6 text-gray-800">
        Our Expertise
      </h2>
      <p className="text-center text-base text-gray-600 max-w-2xl mx-auto mb-12">
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
            <div className="absolute inset-0">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full group-hover:opacity-0 transition-all duration-500"></div>
            <div className="absolute bottom-6 left-6 right-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-white font-semibold text-lg drop-shadow-lg hidden md:block">
                {service.title}
              </h3>
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 z-30">
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
  );
};

export default ExpertiseSection;
