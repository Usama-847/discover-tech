"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

const BootcampComponent = ({
  title,
  description,
  duration,
  schedule,
  startDate,
  format,
  instructor = {},
  modules = [],
  tools = [],
  heroMessage,
  certificationTitle,
  instructorStats = [],
}) => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-black via-gray-800 to-gray-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              rotate: [45, 50, 45],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Plane className="absolute top-20 left-10 w-32 h-32" />
          </motion.div>
          <motion.div
            animate={{
              rotate: [-12, -8, -12],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Plane className="absolute bottom-20 right-10 w-24 h-24" />
          </motion.div>
        </div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
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
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {heroMessage}
                  </h3>
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    variants={staggerContainer}
                  >
                    <motion.div
                      className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-5 h-5 text-gray-300" />
                      <span className="text-sm font-medium">{duration}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="w-5 h-5 text-gray-300" />
                      <span className="text-sm font-medium">{schedule}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-5 h-5 text-gray-300" />
                      <span className="text-sm font-medium">{startDate}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <MapPin className="w-5 h-5 text-gray-300" />
                      <span className="text-sm font-medium">{format}</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {certificationTitle && (
                  <div className="text-center mb-6">
                    <p className="text-gray-600 text-sm font-medium mb-2">
                      BECOME A CERTIFIED
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {certificationTitle}
                    </h3>
                  </div>
                )}
                {instructor.name && (
                  <div className="relative mb-6">
                    <motion.img
                      src={instructor.image || "/api/placeholder/200/250"}
                      alt={instructor.name}
                      className="w-full h-64 object-cover rounded-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg">
                      <div className="font-bold text-lg">
                        {instructor.name.split(" ")[0]}
                      </div>
                      <div className="font-bold text-lg">
                        {instructor.name.split(" ")[1] || ""}
                      </div>
                      <div className="text-xs opacity-80">
                        {instructor.subtitle || "Industry Expert"}
                      </div>
                    </div>
                    {instructor.badges && instructor.badges.length > 0 && (
                      <div className="absolute bottom-4 right-4 flex flex-col space-y-1">
                        {instructor.badges.map((badge, index) => (
                          <motion.div
                            key={index}
                            className={`bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {badge.icon && (
                              <badge.icon className="w-3 h-3 mr-1" />
                            )}
                            {badge.text}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
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
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => toggleModule(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="bg-gray-100 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {index + 1}
                    </motion.div>
                    <span className="font-medium text-gray-800">
                      {typeof module === "string" ? module : module.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedModule === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedModule === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {expandedModule === index && (
                    <motion.div
                      className="px-6 pb-6 bg-gray-50 border-t border-gray-100"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="ml-12">
                        <p className="text-gray-600 mb-4">
                          {typeof module === "object" && module.description
                            ? module.description
                            : ""}
                        </p>
                        {typeof module === "object" && module.subtopics && (
                          <div className="space-y-3">
                            {module.subtopics.map((subtopic, subtopicIndex) => (
                              <motion.div
                                key={subtopicIndex}
                                className="ml-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subtopicIndex * 0.1 }}
                              >
                                <h5 className="font-semibold text-gray-700 mb-2">
                                  {subtopic.category}
                                </h5>
                                <ul className="space-y-1 ml-4">
                                  {subtopic.items.map((item, itemIndex) => (
                                    <motion.li
                                      key={itemIndex}
                                      className="text-sm text-gray-600 flex items-start"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay:
                                          subtopicIndex * 0.1 +
                                          itemIndex * 0.05,
                                      }}
                                    >
                                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                      {item}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        )}
                        {typeof module === "object" && module.tags && (
                          <motion.div
                            className="flex flex-wrap gap-2 mt-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {module.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: tagIndex * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tools Section */}
      {tools.length > 0 && (
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black text-white py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Technologies & Tools You'll Master
              </h2>
              <p className="text-gray-300">
                Industry-standard tools used by top professionals
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center h-24 hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {tool.icon ? (
                    <tool.icon className="w-8 h-8 mb-2 text-gray-300 group-hover:text-white transition-colors" />
                  ) : (
                    <Monitor className="w-8 h-8 mb-2 text-gray-300 group-hover:text-white transition-colors" />
                  )}
                  <span className="text-sm font-semibold text-center">
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Your Instructor
            </h2>
            <p className="text-gray-600">
              Learn from an industry expert with real-world experience
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {instructor.name}
              </h3>
              <p className="text-gray-600 font-medium text-lg">
                {instructor.title}
              </p>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-start"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {instructor.bio && (
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Professional Background
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {instructor.bio}
                  </p>
                </motion.div>
              )}
              {instructor.experience && (
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Teaching Excellence
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {instructor.experience}
                  </p>
                </motion.div>
              )}
            </motion.div>
            {instructorStats.length > 0 && (
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {instructorStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-gray-50 rounded-xl p-6"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-gray-800 mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
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
