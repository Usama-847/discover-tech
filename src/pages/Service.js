"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Service() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = {
    web3: {
      id: "web3",
      number: "01",
      title: "Web Development",
      initial: [
        "Custom Web Applications",
        "Cross-Platform Mobile Apps",
        "Responsive UI/UX Design",
        "E-commerce & CMS Solutions",
      ],
      additional: [
        "API Integration & Backend Services",
        "Real-Time Apps (Chat, Maps, etc.)",
        "Progressive Web Apps (PWAs)",
        "Maintenance & Support",
      ],
    },
    resource: {
      id: "resource",
      number: "02",
      title: "AI, ML & LLM Solutions",
      initial: [
        "AI-Powered Web & Mobile Apps",
        "MLM Development",
        "Chatbots & Virtual Assistants",
        "Data Analysis & Predictions",
      ],
      additional: [
        "Custom LLM Training & Integration",
        "AI Automation for Workflows",
        "NLP & Computer Vision",
        "Recommendation Systems",
      ],
    },
    marketing: {
      id: "marketing",
      number: "03",
      title: "Resource Augmentation",
      initial: [
        "Mobile App Developers",
        "UI/UX Designers",
        "QA Engineers",
        "AI/ML Engineers",
      ],
      additional: [
        "Frontend & Backend Developers",
        "DevOps & Cloud Engineers",
        "Project Managers & SCRUM Masters",
        "Technical Writers & Marketers",
      ],
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const serviceItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const additionalItemsVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  // Toggle expand/collapse with animation
  const handleToggle = (id) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  // Determine which cards to show
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
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Animated Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.p
            className="text-gray-500 text-sm uppercase tracking-wide mb-4"
            variants={titleVariants}
          >
            WHAT WE DO
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl font-semibold text-black mb-2"
            variants={titleVariants}
          >
            Our Services &amp;
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-6xl font-semibold text-black"
            variants={titleVariants}
          >
            Expertise
          </motion.h1>
        </motion.div>

        {/* Animated Services Grid */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 items-stretch"
          layout
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {visibleSections.map((sec, index) => {
              const isExpanded = expandedSection === sec.id;
              return (
                <motion.div
                  key={sec.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
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
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Animated Section Number */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.span
                      className="text-gray-400 text-sm font-medium"
                      variants={numberVariants}
                    >
                      {sec.number}
                    </motion.span>
                  </div>

                  {/* Animated Title */}
                  <motion.h2
                    className="text-2xl font-semibold text-black mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {sec.title}
                  </motion.h2>

                  {/* Animated Services List */}
                  <motion.div
                    className={`space-y-4 ${
                      isExpanded ? "lg:grid lg:grid-cols-2 lg:gap-x-12" : ""
                    }`}
                    layout
                  >
                    {/* Initial items with stagger animation */}
                    <motion.div
                      className="space-y-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{
                        staggerChildren: 0.1,
                        delayChildren: index * 0.1 + 0.4,
                      }}
                    >
                      {sec.initial.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="text-gray-700 text-lg"
                          variants={serviceItemVariants}
                          whileHover={{
                            x: 10,
                            color: "#3B82F6",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Additional items with entrance/exit animation */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          className="space-y-4"
                          variants={additionalItemsVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          layout
                        >
                          {sec.additional.map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="text-gray-700 text-lg"
                              variants={serviceItemVariants}
                              whileHover={{
                                x: 10,
                                color: "#10B981",
                                transition: { duration: 0.2 },
                              }}
                            >
                              {item}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Animated View More/Less Button */}
                  <motion.button
                    onClick={() => handleToggle(sec.id)}
                    className="mt-auto pt-5 self-end flex items-center text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-colors"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.span
                      className="text-lg font-medium mr-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      layout
                    >
                      {isExpanded ? "View Less" : "View More"}
                    </motion.span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isExpanded ? (
                        <ChevronLeft className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </motion.div>
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Subtle background animation elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
    </div>
  );
}
