"use client";
import React, { useRef } from "react";
import { Clock, Calendar, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/Homepage/HeroSection";
import Image from "next/image";

const CourseCardsGrid = () => {
  const router = useRouter();
  const coursesRef = useRef(null);

  const coursePathMapping = {
    "DATA ENGINEER": "/bootcamp/data-engineering",
    "MERN STACK DEVELOPMENT": "/bootcamp/mern-stack",
    "MOBILE APP DEVELOPER (REACT NATIVE)": "/bootcamp/mobile-development",
    "DATA ANALYTICS": "/bootcamp/data-analytics",
    "BUSINESS ANALYTICS": "/bootcamp/business-analytics",
    "WEB DESIGN & DEVELOPMENT": "/bootcamp/web-design-development",
    "BUSINESS DEVELOPMENT": "/bootcamp/business-development",
    "DIGITAL MARKETING": "/bootcamp/digital-marketing",
    "CYBER SECURITY EXPERT": "/bootcamp/cyber-security",
    "AIRLINE RESERVATION": "/bootcamp/airline-reservation",
  };

  const courses = [
    // {
    //   id: 1,
    //   title: "DATA ENGINEER",
    //   instructor: "AMIR JABBAR",
    //   instructorImage: "/images/members/Amir.png",
    //   duration: "Duration: 3 Months",
    //   days: "Days: Wed,Thur",
    //   mode: "Mode: Online & Interactive",
    //   starting: "Starting: 16-June-2025",
    //   price: "PKR 40,000",
    //   category: "BECOME A CERTIFIED",
    //   gradient: "from-gray-800 to-black",
    // },
    {
      id: 2,
      title: "MERN STACK DEVELOPMENT",
      instructor: "MUHAMMAD UBAID UR REHMAN",
      instructorImage: "/images/members/Ubaid.png",
      duration: "Duration: 3 Months",
      days: "Days: Tues,Thurs,Sat",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 40,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-gray-800 to-black",
    },
    {
      id: 3,
      title: "MOBILE APP DEVELOPER (REACT NATIVE)",
      instructor: "KHURRAM SHAHID",
      instructorImage: "/images/members/KHurram.png", // Updated different image path
      duration: "Duration: 3 Months",
      days: "Days: Mon,Wed,Fri",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 40,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-black to-gray-800",
    },
    {
      id: 4,
      title: "DATA ANALYTICS",
      instructor: "AMIR JABBAR",
      instructorImage: "/images/members/Amir.png",
      duration: "Duration: 3 Months",
      days: "Days: Mon,Tue",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 40,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      id: 5,
      title: "BUSINESS ANALYTICS",
      instructor: "AMIR JABBAR",
      instructorImage: "/images/members/Amir.png",
      duration: "Duration: 3 Months",
      days: "Days: Thurs,Fri",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 40,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-gray-800 to-black",
    },
    {
      id: 6,
      title: "WEB DESIGN & DEVELOPMENT",
      instructor: "MUHAMMAD UBAID UR REHMAN",
      instructorImage: "/images/members/Ubaid.png",
      duration: "Duration: 5 Months",
      days: "Days: Tues,Thurs,Sat",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 40,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-black to-gray-700",
    },
    {
      id: 7,
      title: "BUSINESS DEVELOPMENT",
      instructor: "AMIR JABBAR",
      instructorImage: "/images/members/Amir.png",
      duration: "Duration: 1 Months",
      days: "Days: Thu,Fri",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 20,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-gray-800 to-black",
    },
    {
      id: 8,
      title: "DIGITAL MARKETING",
      instructor: "FARAZ KHAN",
      instructorImage: "/images/members/Faraz.png",
      duration: "Duration: 3 Months",
      days: "Days: Mon,Wed",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 40,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      id: 9,
      title: "CYBER SECURITY EXPERT",
      instructor: "KHURRAM SHAHID",
      instructorImage: "/images/members/Khurram.png", // Updated different image path
      duration: "Duration: 3 Months",
      days: "Days: Mon,Wed,Fri",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 40,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-black to-gray-800",
    },
    {
      id: 11,
      title: "AIRLINE RESERVATION",
      instructor: "M S KHAN YOUSAFZAI",
      instructorImage: "/images/members/Mskhanyousaf.jpg",
      duration: "Duration: 2 Months",
      days: "Days: Mon,Fri",
      mode: "Mode: Online & Interactive",
      starting: "Starting: 16-June-2025",
      price: "PKR 25,000",
      category: "BECOME A CERTIFIED",
      gradient: "from-gray-800 to-black",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleStartJourney = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnrollClick = (courseTitle) => {
    const path = coursePathMapping[courseTitle] || "/bootcamp";
    router.push(path);
  };

  return (
    <div>
      <HeroSection onStartJourney={handleStartJourney} />
      <div
        ref={coursesRef}
        className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative bottom-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance your career with our industry-certified programs designed
              by experts
            </p>
          </motion.div>

          {/* Course Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                {/* Course Header with Gradient */}
                <div
                  className={`bg-gradient-to-r ${course.gradient} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative z-10">
                    <motion.p
                      className="text-sm font-medium opacity-90 mb-2 text-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {course.category}
                    </motion.p>
                    <motion.h3
                      className="text-xl font-bold mb-4 leading-tight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {course.title}
                    </motion.h3>

                    {/* Instructor Info */}
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-400">
                        <Image
                          src={course.instructorImage}
                          alt={course.instructor}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div
                          className="w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center text-white font-bold text-sm rounded-full hidden"
                          style={{ display: "none" }}
                        >
                          {course.instructor
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          {course.instructor}
                        </p>
                        <p className="text-xs opacity-80 text-gray-300">
                          Course Instructor
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <motion.div
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <Clock className="w-4 h-4 mr-2 text-gray-700" />
                      <span className="text-sm">{course.duration}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <Calendar className="w-4 h-4 mr-2 text-gray-800" />
                      <span className="text-sm">{course.days}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      <Users className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm">{course.mode}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm">{course.starting}</span>
                    </motion.div>
                  </div>

                  {/* Price and Enroll Button */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                  >
                    <div className="text-2xl font-bold text-gray-900">
                      {course.price}
                    </div>
                    <motion.button
                      className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-2 rounded-full font-semibold hover:from-black hover:to-gray-900 transition-all duration-200 cursor-pointer border border-gray-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEnrollClick(course.title)}
                    >
                      Enroll Now
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with
              our expert-led courses
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardsGrid;
