"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data
const faqs = [
  {
    id: 1,
    question: "What services does Discover Tech offer?",
    answer:
      "Discover Tech specializes in Web3 development, including decentralized applications (dApps), smart contracts, DeFi solutions, DAOs, NFT marketplaces, and blockchain consulting. We also provide resource augmentation and Web3 marketing to help businesses scale efficiently.",
  },
  {
    id: 2,
    question:
      "How does Discover Tech ensure the security of blockchain solutions?",
    answer:
      "We implement industry-leading security practices including comprehensive smart contract audits, multi-signature wallets, secure coding standards, and rigorous testing protocols. Our team follows best practices for blockchain security and conducts thorough vulnerability assessments before deployment.",
  },
  {
    id: 3,
    question:
      "Can Discover Tech help with Web3 marketing and community building?",
    answer:
      "Absolutely! We offer comprehensive Web3 marketing services including community management, social media strategy, influencer partnerships, tokenomics design, and growth hacking specifically tailored for blockchain projects. Our team understands the unique challenges of Web3 marketing.",
  },
  {
    id: 4,
    question: "How does the resource augmentation process work?",
    answer:
      "Our resource augmentation process begins with understanding your specific needs and project requirements. We then match you with skilled blockchain developers, designers, or consultants from our vetted talent pool. The process includes onboarding, integration with your existing team, and ongoing support to ensure seamless collaboration.",
  },
  {
    id: 5,
    question: "How can I get started with Discover Tech?",
    answer:
      "Getting started is simple! Reach out to us through our contact form or schedule a consultation call. We'll discuss your project requirements, provide a detailed proposal, and outline the next steps. Our team is ready to help you navigate the Web3 landscape and bring your vision to life.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            FAQs
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Answers to Your
            <br />
            Questions
          </motion.h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, duration: 0.3 },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.4 },
                },
              }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              layout
            >
              <motion.button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <span
                    className={`text-lg font-bold flex-shrink-0 ${
                      openIndex === index ? "text-[#101828]" : "text-gray-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <h3
                    className={`text-lg font-semibold pr-4 ${
                      openIndex === index ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 hover:cursor-pointer"
                  animate={{
                    rotate: openIndex === index ? 45 : 0,
                    backgroundColor:
                      openIndex === index ? "#101828" : "#f3f4f6",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      color: openIndex === index ? "#ffffff" : "#6b7280",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={16} />
                  </motion.div>
                </motion.div>
              </motion.button>

              <AnimatePresence mode="wait">
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      marginTop: 16,
                      transition: {
                        height: { duration: 0.4 },
                        opacity: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      marginTop: 0,
                      transition: { duration: 0.3 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="pl-8">
                        <motion.p
                          className="text-gray-600 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
