"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Service() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = {
    web3: {
      id: "web3",
      number: "01",
      title: "Web3 Development",
      initial: [
        "Blockchain Development",
        "Web3 & DeFi Solutions",
        "RWA (Real World Assets) Tokenization",
        "Infrastructure & Node Services",
      ],
      additional: [
        "Enterprise & Consulting",
        "Interoperability & Cross-Chain Solutions",
        "Tokenomics & Compliance",
        "Mobile App Development",
      ],
    },
    resource: {
      id: "resource",
      number: "02",
      title: "Resource Augmentation",
      initial: [
        "Mobile App Developers",
        "UI/UX Designers",
        "QA Engineers",
        "Blockchain Developers",
      ],
      additional: [
        "Backend Developers",
        "Frontend Developers",
        "Technical Writers",
        "Marketing Experts",
      ],
    },
    marketing: {
      id: "marketing",
      number: "03",
      title: "Web3 Marketing",
      initial: [
        "Social Media Management",
        "Technical Writing",
        "Digital Marketing",
        "PR & Influencer Marketing",
      ],
      additional: [
        "Strategy & Campaign Design",
        "Creative Services",
        "Community Management",
        "Blog Writing",
      ],
    },
  };

  // toggle expand/collapse
  const handleToggle = (id) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  // determine which cards to show
  const visibleSections = Object.values(sections).filter((sec) => {
    if (
      (expandedSection === "web3" || expandedSection === "resource") &&
      sec.id === "marketing"
    ) {
      return false;
    }
    if (expandedSection === "marketing" && sec.id === "web3") {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">
            WHAT WE DO
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold text-black mb-2">
            Our Services &amp;
          </h1>
          <h1 className="text-5xl md:text-6xl font-semibold text-black">
            Expertise
          </h1>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch ">
          {visibleSections.map((sec) => {
            const isExpanded = expandedSection === sec.id;
            return (
              <div
                key={sec.id}
                className={`
                  flex flex-col h-full
                  bg-gray-50 hover:bg-gray-100 rounded-2xl p-8
                  transition-all duration-300 ease-in-out
                  ${
                    isExpanded
                      ? "lg:flex-[2]"
                      : expandedSection
                      ? "lg:flex-[0.5] lg:opacity-50"
                      : "lg:flex-1"
                  }
                `}
              >
                {/* Section number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400 text-sm font-medium">
                    {sec.number}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-black mb-8">
                  {sec.title}
                </h2>

                {/* Services list */}
                <div
                  className={`space-y-4 ${
                    isExpanded ? "lg:grid lg:grid-cols-2 lg:gap-x-12" : ""
                  }`}
                >
                  {/* initial items */}
                  <div className="space-y-4">
                    {sec.initial.map((item, idx) => (
                      <div key={idx} className="text-gray-700 text-lg">
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* additional items only when expanded */}
                  {isExpanded && (
                    <div className="space-y-4">
                      {sec.additional.map((item, idx) => (
                        <div key={idx} className="text-gray-700 text-lg">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* View More / View Less */}
                <button
                  onClick={() => handleToggle(sec.id)}
                  className="mt-auto pt-5 self-end flex items-center text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-colors"
                >
                  <span
                    className="text-lg font-medium mr-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </span>
                  {isExpanded ? (
                    <ChevronLeft className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
