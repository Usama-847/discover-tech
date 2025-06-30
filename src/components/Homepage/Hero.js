import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BuildingBlocksHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotateX: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const boldTextVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const videoVariants = {
    hidden: {
      scale: 1.1,
      filter: "blur(5px)",
    },
    visible: {
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  // Split text animation for "Building Blocks"
  const words = ["Building", "Blocks"];
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background Video with Animation */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        variants={videoVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <source
          src="https://res.cloudinary.com/db9mlt7iq/video/upload/v1750488174/kpyuxf2n8lc84mzfebbx.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#ffffff37] bg-opacity-20 z-10"
        variants={overlayVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      />

      {/* Content Container with Stagger Animation */}
      <motion.div
        className="absolute bottom-32 md:bottom-24 left-1.5 md:left-6 z-20 max-w-4xl px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Animated Title */}
        <motion.div variants={titleVariants}>
          <motion.div
            className="text-4xl lg:text-6xl font-light text-gray-700 leading-tight mb-6"
            variants={lineVariants}
          >
            We're the
            <br />
            <motion.span
              className="font-bold text-gray-700 inline-block"
              variants={boldTextVariants}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4"
                  variants={wordVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.05,
                    color: "#3B82F6",
                    transition: { duration: 0.3 },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Animated Paragraph */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-black max-w-2xl"
          variants={paragraphVariants}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Discover Tech is a leading web and mobile development company
          specializing in cutting-edge AI, machine learning, and large language
          model (LLM) solutions. We help startups and enterprises bring their
          ideas to life by building scalable, secure digital products—including
          dynamic websites, powerful mobile apps, and intelligent AI-driven
          applications.
        </motion.p>

        {/* Subtle floating animation for additional visual interest */}
        <motion.div
          className="absolute -top-4 -right-4 w-2 h-2 bg-blue-500 rounded-full opacity-70"
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute -bottom-8 -left-2 w-1 h-1 bg-green-500 rounded-full opacity-60"
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      {/* Additional subtle background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
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
        className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
