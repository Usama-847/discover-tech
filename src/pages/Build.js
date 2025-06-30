"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for parallax
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.4, 0.6, 0.8]
  );
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  // Check if elements are in view
  const isTextInView = useInView(textRef, {
    once: true,
    threshold: 0.3,
    margin: "-100px",
  });

  const isVideoInView = useInView(videoRef, {
    once: true,
    threshold: 0.1,
  });

  // Animation variants
  const fadeInUp = {
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
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  };

  const videoScale = {
    hidden: {
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[550px] flex items-end justify-center overflow-hidden md:m-5 rounded-2xl"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Video Background with Parallax */}
      <motion.div
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ y: videoY }}
        variants={videoScale}
        animate={isVideoInView ? "visible" : "hidden"}
      >
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ scale: textScale }}
        >
          <source
            src="https://res.cloudinary.com/db9mlt7iq/video/upload/v1750488171/ratih6wegieqjt1mezp8.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>

      {/* Dynamic Dark Overlay with Parallax */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto w-full min-h-screen flex items-end mb-5 px-6 sm:px-8 lg:px-10"
        style={{ y: textY }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          {/* Left Side - Main Text */}
          <motion.div
            className="relative min-h-screen"
            variants={slideInLeft}
            animate={isTextInView ? "visible" : "hidden"}
          >
            {/* Text Positioned Bottom-Left */}
            <motion.div
              ref={textRef}
              className="absolute bottom-0 left-1 z-10"
              variants={fadeInUp}
            >
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Let's build a decentralized
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                  }
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  world together.
                </motion.span>
              </motion.h2>
            </motion.div>
          </motion.div>

          {/* Right Side - Statistics */}
          <motion.div
            className="p-0 lg:p-0"
            variants={slideInRight}
            animate={isTextInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-white text-sm sm:text-base lg:text-lg leading-relaxed backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                From a small team of four to a powerhouse of 100+ experts,
                Discover Tech has delivered cutting-edge web, mobile, and
                AI-driven solutions across industries.
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Our products have reached millions of users globally and
                contributed to client success with a combined valuation
                exceeding $10 million.
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                Our expertise consistently places our projects among the most
                impactful in the digital innovation landscape.
              </motion.span>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements for Added Visual Interest */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-white rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-6 h-6 bg-white rounded-full opacity-10"
        animate={{
          y: [0, -30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
};

export default HeroSection;
