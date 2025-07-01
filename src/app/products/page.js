"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  MapPin,
  Plane,
  Hotel,
  Car,
  FileText,
  Clock,
  Star,
  Shield,
  Utensils,
  ShoppingBag,
  Wrench,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Users,
  Heart,
} from "lucide-react";

// Import SpeedyMeals images
import S1 from "../../../public/images/products/S1.jpg";
import S2 from "../../../public/images/products/S2.jpg";
import S3 from "../../../public/images/products/S3.jpg";
import S4 from "../../../public/images/products/S4.jpg";

// Import TravelGO images
import T1 from "../../../public/images/products/T1.jpg";
import T2 from "../../../public/images/products/T2.jpg";
import T3 from "../../../public/images/products/T3.jpg";
import T4 from "../../../public/images/products/T4.jpg";

const ProductShowcase = () => {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("hero");

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.1]);

  const AnimatedSection = ({ children, className = "" }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const FeatureCard = ({
    icon: Icon,
    title,
    description,
    gradient,
    delay = 0,
    image = null,
  }) => (
    <AnimatedSection>
      <motion.div
        className="group relative z-10"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl overflow-hidden">
          {image && (
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Image
                src={image}
                alt={`${title} background`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="relative z-10">
            <motion.div
              className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );

  const ProductSection = ({
    title,
    subtitle,
    description,
    features,
    bgGradient,
    accentColor,
    reverse = false,
    productImages = [],
  }) => (
    <section
      className={`min-h-screen flex items-center py-20 ${bgGradient} relative z-10`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <AnimatedSection className={reverse ? "lg:order-2" : ""}>
            <div className="space-y-8">
              <div>
                <motion.div
                  className={`inline-block px-4 py-2 ${accentColor} text-white rounded-full text-sm font-semibold mb-4`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {subtitle}
                </motion.div>
                <motion.h2
                  className="text-5xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {title}
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {description}
                </motion.p>
              </div>

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div
                      className={`w-3 h-3 ${accentColor} rounded-full flex-shrink-0`}
                    ></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  className={`${accentColor} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl flex items-center space-x-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Visual with Product Images */}
          <AnimatedSection className={reverse ? "lg:order-1" : ""}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500">
                {productImages.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {productImages.map((image, i) => (
                      <motion.div
                        key={i}
                        className="aspect-square rounded-xl overflow-hidden bg-white/10 hover:bg-white/20 transition-all duration-300 relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Image
                          src={image}
                          alt={`${title} feature ${i + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="aspect-square bg-white/20 rounded-xl flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                      </motion.div>
                    ))}
                  </div>
                )}
                <div className="space-y-3">
                  <motion.div
                    className="h-4 bg-white/20 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.div
                    className="h-4 bg-white/15 rounded-full w-3/4"
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                  <motion.div
                    className="h-4 bg-white/10 rounded-full w-1/2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/20 to-pink-50/20"></div>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              className="inline-block px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full text-sm font-semibold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Discover Tech Solutions
            </motion.div>

            <motion.h1
              className="text-7xl lg:text-8xl font-black text-gray-800 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Discover Tech
              <motion.span
                className="block text-5xl lg:text-6xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Innovation
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Transforming everyday experiences through cutting-edge technology.
              Meet TravelGO and SpeedyMeals - your ultimate lifestyle
              companions.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore TravelGO
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Try SpeedyMeals
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none z-5">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-20"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </section>

      {/* TravelGO Section */}
      <ProductSection
        title="TravelGO"
        subtitle="Ultimate Travel Experience"
        description="Your all-in-one travel companion that brings together hotel bookings, airline tickets, visa assistance, and cab services into one seamless platform."
        features={[
          "Hotel Room Booking Made Simple",
          "Effortless Airline Ticket Booking",
          "Expert Visa Services for Hajj, Umrah & Gulf Countries",
          "Reliable Hotel Cab Services",
          "24/7 Customer Support & Competitive Pricing",
        ]}
        bgGradient="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        accentColor="bg-gradient-to-r from-blue-600 to-indigo-700"
        productImages={[T1, T2, T3, T4]}
      />

      {/* TravelGO Features Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl font-black text-gray-800 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                TravelGO Features
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Everything you need for the perfect journey
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Hotel}
              title="Hotel Booking"
              description="Find and book perfect accommodations worldwide with instant confirmation"
              gradient="bg-gradient-to-br from-blue-500 to-blue-700"
              image={T1}
            />
            <FeatureCard
              icon={Plane}
              title="Flight Booking"
              description="Real-time flight search and comparison for best prices from leading airlines"
              gradient="bg-gradient-to-br from-indigo-500 to-indigo-700"
              image={T2}
            />
            <FeatureCard
              icon={FileText}
              title="Visa Services"
              description="Expert visa processing for Hajj, Umrah, and Gulf countries with end-to-end support"
              gradient="bg-gradient-to-br from-purple-500 to-purple-700"
              image={T3}
            />
            <FeatureCard
              icon={Car}
              title="Cab Services"
              description="Pre-scheduled and on-demand cab services with trusted drivers"
              gradient="bg-gradient-to-br from-teal-500 to-teal-700"
              image={T4}
            />
          </div>
        </div>
      </section>

      {/* SpeedyMeals Section */}
      <ProductSection
        title="SpeedyMeals"
        subtitle="Smart Living Companion"
        description="A revolutionary digital platform that simplifies your life through speed, convenience, and innovation. Everything you need is just a tap away."
        features={[
          "Speedy Food and General Delivery",
          "Reliable Ride Services",
          "Professional Technical Services",
          "Speedy Mall Commerce",
          "All-in-One Platform with 24/7 Availability",
        ]}
        bgGradient="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
        accentColor="bg-gradient-to-r from-orange-500 to-red-600"
        reverse={true}
        productImages={[S1, S2, S3, S4]}
      />

      {/* SpeedyMeals Features Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl font-black text-gray-800 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                SpeedyMeals Services
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your complete urban lifestyle solution
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Utensils}
              title="Food Delivery"
              description="Hot meals and fresh groceries delivered fast with real-time tracking"
              gradient="bg-gradient-to-br from-orange-500 to-orange-700"
              image={S1}
            />
            <FeatureCard
              icon={Car}
              title="Speedy Rides"
              description="Quick, safe, and affordable rides with trusted drivers for all your travel needs"
              gradient="bg-gradient-to-br from-red-500 to-red-700"
              image={S2}
            />
            <FeatureCard
              icon={Wrench}
              title="Technical Services"
              description="Vetted professionals for electrical, plumbing, IT support, and appliance servicing"
              gradient="bg-gradient-to-br from-pink-500 to-pink-700"
              image={S3}
            />
            <FeatureCard
              icon={ShoppingBag}
              title="Mall Commerce"
              description="Virtual shopping from top brands with exclusive deals and fast delivery"
              gradient="bg-gradient-to-br from-purple-500 to-purple-700"
              image={S4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl font-black mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Why Choose Our Solutions?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Built for modern life, designed for you
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <motion.div
                className="text-center space-y-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Trusted & Secure</h3>
                <p className="text-gray-300">
                  Your safety and privacy are our top priorities with end-to-end
                  security
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                className="text-center space-y-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Lightning Fast</h3>
                <p className="text-gray-300">
                  Experience unmatched speed and efficiency in every interaction
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                className="text-center space-y-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">User-Centric</h3>
                <p className="text-gray-300">
                  Designed with love, built for your convenience and
                  satisfaction
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="space-y-8">
              <motion.h2
                className="text-5xl font-black text-gray-800 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ready to Transform Your Life?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join thousands of satisfied users who have already discovered
                the power of our innovative solutions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Start with TravelGO</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Try SpeedyMeals</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;
