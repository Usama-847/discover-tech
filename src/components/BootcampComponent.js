"use client";
import React, { useState } from "react";
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

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Plane className="absolute top-20 left-10 w-32 h-32 rotate-45" />
          <Plane className="absolute bottom-20 right-10 w-24 h-24 -rotate-12" />
        </div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed">
                {description}
              </p>
              {heroMessage && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {heroMessage}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20">
                      <Calendar className="w-5 h-5 text-blue-300" />
                      <span className="text-sm font-medium">{duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20">
                      <Clock className="w-5 h-5 text-blue-300" />
                      <span className="text-sm font-medium">{schedule}</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20">
                      <Calendar className="w-5 h-5 text-blue-300" />
                      <span className="text-sm font-medium">{startDate}</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20">
                      <MapPin className="w-5 h-5 text-blue-300" />
                      <span className="text-sm font-medium">{format}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gray-100">
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
                    <img
                      src={instructor.image || "/api/placeholder/200/250"}
                      alt={instructor.name}
                      className="w-full h-64 object-cover rounded-2xl"
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
                          <div
                            key={index}
                            className={`bg-${
                              badge.color || "blue"
                            }-500 text-white px-2 py-1 rounded text-xs flex items-center`}
                          >
                            {badge.icon && (
                              <badge.icon className="w-3 h-3 mr-1" />
                            )}
                            {badge.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
                  <Users className="w-5 h-5" />
                  <span>RESERVE YOUR SEAT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      {modules.length > 0 && (
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What You'll Learn
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master key skills with hands-on projects and real-world scenarios
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-800">
                      {typeof module === "string" ? module : module.title}
                    </span>
                  </div>
                  {expandedModule === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedModule === index && (
                  <div className="px-6 pb-6 bg-gray-50 border-t border-gray-100">
                    <div className="ml-12">
                      <p className="text-gray-600 mb-4">
                        {typeof module === "object" && module.description
                          ? module.description
                          : ""}
                      </p>
                      {typeof module === "object" && module.subtopics && (
                        <div className="space-y-3">
                          {module.subtopics.map((subtopic, subtopicIndex) => (
                            <div key={subtopicIndex} className="ml-4">
                              <h5 className="font-semibold text-gray-700 mb-2">
                                {subtopic.category}
                              </h5>
                              <ul className="space-y-1 ml-4">
                                {subtopic.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-sm text-gray-600 flex items-start"
                                  >
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      {typeof module === "object" && module.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {module.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tools Section */}
      {tools.length > 0 && (
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Technologies & Tools You'll Master
              </h2>
              <p className="text-blue-200">
                Industry-standard tools used by top professionals
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center h-24 hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                >
                  {tool.icon ? (
                    <tool.icon className="w-8 h-8 mb-2 text-blue-300 group-hover:text-white transition-colors" />
                  ) : (
                    <Monitor className="w-8 h-8 mb-2 text-blue-300 group-hover:text-white transition-colors" />
                  )}
                  <span className="text-sm font-semibold text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Meet Your Instructor Section */}
      {instructor.name && (
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Your Instructor
            </h2>
            <p className="text-gray-600">
              Learn from an industry expert with real-world experience
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {instructor.name}
              </h3>
              <p className="text-blue-600 font-medium text-lg">
                {instructor.title}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {instructor.bio && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Professional Background
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>
              )}
              {instructor.experience && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Teaching Excellence
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {instructor.experience}
                  </p>
                </div>
              )}
            </div>
            {instructorStats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {instructorStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center bg-${stat.color}-50 rounded-xl p-6`}
                  >
                    <div
                      className={`text-3xl font-bold text-${stat.color}-600 mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BootcampComponent;
