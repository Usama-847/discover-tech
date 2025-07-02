"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Plus,
  Minus,
  Plane,
  Code,
  Monitor,
  Sparkles,
  Zap,
} from "lucide-react";

const BootcampComponent = ({
  title = "Advanced Web Development Bootcamp",
  description = "Master modern web development with hands-on projects and industry-best practices. Transform your coding skills from novice to professional.",
  duration = "12 Weeks",
  schedule = "Mon-Fri, 6-9 PM",
  startDate = "March 15, 2025",
  format = "Hybrid Learning",
  instructor = {
    name: "Sarah Johnson",
    title: "Senior Full Stack Developer",
    subtitle: "Industry Expert",
    bio: "With over 8 years of experience in web development, Sarah has worked with Fortune 500 companies and led development teams at top tech startups.",
    experience:
      "Sarah has successfully mentored over 200 developers and maintains a 98% student satisfaction rate across all her courses.",
    image: "/api/placeholder/200/250",
  },
  modules = [
    {
      title: "HTML & CSS Fundamentals",
      description: "Build a solid foundation in web markup and styling",
      tags: ["HTML5", "CSS3", "Responsive Design"],
    },
    {
      title: "JavaScript & DOM Manipulation",
      description: "Master JavaScript programming and browser interactions",
      tags: ["ES6+", "DOM API", "Event Handling"],
    },
    {
      title: "React Development",
      description: "Create dynamic user interfaces with React",
      tags: ["Components", "Hooks", "State Management"],
    },
  ],
  tools = [
    { name: "React", icon: Code },
    { name: "JavaScript", icon: Zap },
    { name: "HTML/CSS", icon: Monitor },
    { name: "Git", icon: Code },
    { name: "VS Code", icon: Monitor },
  ],
  heroMessage = "Join the Next Generation of Developers",
  certificationTitle = "WEB DEVELOPER",
  instructorStats = [
    { value: "200+", label: "Students Taught", color: "gray" },
    { value: "98%", label: "Success Rate", color: "black" },
    { value: "8+", label: "Years Experience", color: "gray" },
    { value: "50+", label: "Projects Completed", color: "black" },
  ],
}) => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            animate={{
              rotate: 360,
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles className="absolute top-20 left-10 w-32 h-32" />
          </motion.div>
          <motion.div
            animate={{
              rotate: -360,
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Zap className="absolute bottom-20 right-10 w-24 h-24" />
          </motion.div>
        </motion.div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl lg:text-5xl font-bold leading-tight"
                variants={fadeInUp}
              >
                {title}
              </motion.h1>
              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                variants={fadeInUp}
              >
                {description}
              </motion.p>
              {heroMessage && (
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h3
                    className="text-xl font-semibold mb-6 text-center"
                    variants={fadeInUp}
                  >
                    {heroMessage}
                  </motion.h3>
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    variants={staggerContainer}
                  >
                    {[
                      { icon: Calendar, text: duration },
                      { icon: Clock, text: schedule },
                      { icon: Calendar, text: startDate },
                      { icon: MapPin, text: format },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20"
                        variants={fadeInUp}
                        whileHover={{
                          backgroundColor: "rgba(255,255,255,0.15)",
                        }}
                      >
                        <item.icon className="w-5 h-5 text-gray-300" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="flex justify-center"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gray-200"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {certificationTitle && (
                  <motion.div className="text-center mb-6" variants={fadeInUp}>
                    <p className="text-gray-500 text-sm font-medium mb-2 tracking-wider">
                      BECOME A CERTIFIED
                    </p>
                    <h3 className="text-2xl font-bold text-black">
                      {certificationTitle}
                    </h3>
                  </motion.div>
                )}
                {instructor.name && (
                  <motion.div className="relative mb-6" variants={scaleIn}>
                    <img
                      src={instructor.image || "/api/placeholder/200/250"}
                      alt={instructor.name}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="font-bold text-lg">
                        {instructor.name.split(" ")[0]}
                      </div>
                      <div className="font-bold text-lg">
                        {instructor.name.split(" ")[1] || ""}
                      </div>
                      <div className="text-xs opacity-80">
                        {instructor.subtitle || "Industry Expert"}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
                <motion.button
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-5 h-5" />
                  <span>RESERVE YOUR SEAT</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* What You'll Learn Section */}
      {modules.length > 0 && (
        <motion.div
          className="container mx-auto px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-black mb-4">
              What You'll Learn
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master key skills with hands-on projects and real-world scenarios
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <motion.button
                  onClick={() => toggleModule(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {index + 1}
                    </motion.div>
                    <span className="font-medium text-black">
                      {typeof module === "string" ? module : module.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedModule === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedModule === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedModule === index ? "auto" : 0,
                    opacity: expandedModule === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                    <div className="ml-12">
                      <p className="text-gray-700 mb-4">
                        {typeof module === "object" && module.description
                          ? module.description
                          : ""}
                      </p>
                      {typeof module === "object" && module.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {module.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tools Section */}
      {tools.length > 0 && (
        <motion.div
          className="bg-gradient-to-br from-gray-100 to-gray-200 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-black mb-4">
                Technologies & Tools You'll Master
              </h2>
              <p className="text-gray-700">
                Industry-standard tools used by top professionals
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center h-24 hover:bg-gray-50 transition-all duration-300 border border-gray-300 group shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#000000",
                    color: "#ffffff",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tool.icon ? (
                    <tool.icon className="w-8 h-8 mb-2 text-black group-hover:text-white transition-colors" />
                  ) : (
                    <Monitor className="w-8 h-8 mb-2 text-black group-hover:text-white transition-colors" />
                  )}
                  <span className="text-sm font-semibold text-center group-hover:text-white">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Meet Your Instructor Section */}
      {instructor.name && (
        <motion.div
          className="container mx-auto px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-black mb-4">
              Meet Your Instructor
            </h2>
            <p className="text-gray-600">
              Learn from an industry expert with real-world experience
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-8" variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-black mb-2">
                {instructor.name}
              </h3>
              <p className="text-gray-700 font-medium text-lg">
                {instructor.title}
              </p>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-start"
              variants={staggerContainer}
            >
              {instructor.bio && (
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-xl font-semibold text-black mb-4">
                    Professional Background
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {instructor.bio}
                  </p>
                </motion.div>
              )}
              {instructor.experience && (
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-xl font-semibold text-black mb-4">
                    Teaching Excellence
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {instructor.experience}
                  </p>
                </motion.div>
              )}
            </motion.div>
            {instructorStats.length > 0 && (
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                variants={staggerContainer}
              >
                {instructorStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`text-center ${
                      stat.color === "black"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black"
                    } rounded-xl p-6`}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="text-3xl font-bold mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="font-medium opacity-80">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BootcampComponent;
