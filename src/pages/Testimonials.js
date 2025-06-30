"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anonymous Client",
      role: "UI/UX",
      testimonial:
        "Attention to detail, thoughtful product strategy, and a professional team with deep expertise in web and mobile development. Truly reliable.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      testimonial:
        "Outstanding work on our AI-driven platform. The Discover Tech team delivered beyond expectations with innovative features and a seamless user experience.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO",
      testimonial:
        "Discover Tech transformed our idea into a scalable solution. Their technical expertise and commitment to quality made all the difference in our success.",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Founder",
      testimonial:
        "Working with Discover Tech was a turning point. Their AI/ML capabilities and mobile app development skills helped us launch our product efficiently.",
    },
    {
      id: 5,
      name: "David Thompson",
      role: "Marketing Director",
      testimonial:
        "The team's creativity and technical proficiency are unmatched. They delivered a powerful, user-friendly web solution that exceeded our goals.",
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  const goToTestimonial = (index) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Header */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <motion.p
                className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                CLIENTS
              </motion.p>
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                What people
                <br />
                say about us?
              </motion.h2>
            </div>

            {/* Navigation Arrows */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 hover:cursor-pointer"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ChevronLeft size={20} className="text-gray-600 " />
              </motion.button>
              <motion.button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 hover:cursor-pointer"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ChevronRight size={20} className="text-gray-600" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Testimonial Card */}
          <motion.div
            className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: 50, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              shadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -5,
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="space-y-6 cursor-grab active:cursor-grabbing"
              >
                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center overflow-hidden shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-black">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </motion.div>
                </div>

                {/* Testimonial Text */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <p className="text-gray-800 text-lg leading-relaxed">
                    "{testimonials[currentIndex].testimonial}"
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex justify-center mt-8 space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                backgroundColor: index === currentIndex ? "#1f2937" : "#d1d5db",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
