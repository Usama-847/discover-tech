"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Users, Code, Monitor } from "lucide-react";

const DigitalMarketing = () => {
  const data = {
    title: "Digital Marketing Bootcamp",
    description:
      "Digital Marketing involves promoting products or services through online channels such as social media, search engines, email, and websites. It focuses on increasing brand awareness, engaging target audiences, and driving conversions using data-driven strategies and digital tools.",
    duration: "03 Months",
    schedule: "Monday, Tuesday, Wednesday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "Faraz Khan",
      title:
        "Digital Marketing Strategist | Growth Consultant | Industry Trainer | Helping Brands Scale Online",
      image: "/api/placeholder/200/250",
      bio: "Faraz Khan is a seasoned Digital Marketing expert with over a decade of experience in driving online growth for startups and enterprise brands. Currently consulting at leading digital firms, he specializes in creating high-conversion marketing funnels, SEO, paid ads, and brand visibility strategies.",
      experience:
        "He has successfully trained and mentored 100+ professionals and business owners from companies like Daraz, Nestlé, Telenor, Jazz, and Ufone—equipping them with actionable digital skills for the modern market. Known for his results-driven approach and practical teaching methods, Faraz ensures every learner walks away ready to implement real-world strategies with confidence.",

      badges: [
        { text: "Digital Marketing Expert", icon: Users, color: "green" },
        { text: "Targted Ads", color: "blue" },
      ],
    },
    modules: [
      {
        title: "Module 1: Introduction to Digital Marketing",

        subtopics: [
          {
            items: [
              "Understanding Digital vs Traditional Marketing",
              "Digital Marketing Ecosystem",
              "Key Concepts: SEO, SEM, SMM, Content, Analytics",
              "Buyer’s Journey & Digital Funnels",
            ],
          },
        ],
      },

      {
        title: "Module 2: Website Planning & WordPress",

        subtopics: [
          {
            items: [
              "Importance of Website in Marketing",
              "Website Architecture & User Experience (UX)",
              "WordPress Setup & Optimization",
              "Landing Page Design & Call-to-Actions (CTAs)",
            ],
          },
        ],
      },

      {
        title: "Module 3: Search Engine Optimization (SEO)",

        subtopics: [
          {
            items: [
              "On-page, Off-page, and Technical SEO",
              "Keyword Research & Content Optimization",
              "Link Building Strategies",
              "SEO Tools: Google Search Console, Ahrefs, SEMrush",
            ],
          },
        ],
      },

      {
        title: "Module 4: Search Engine Marketing (SEM)",

        subtopics: [
          {
            items: [
              "Google Ads (PPC) Fundamentals",
              "Campaign Creation & Targeting",
              "Bidding Strategies & Quality Score",
              "A/B Testing for Ad Performance",
            ],
          },
        ],
      },

      {
        title: "Module 5: Social Media Marketing (SMM)",

        subtopics: [
          {
            items: [
              "Facebook, Instagram, LinkedIn, Twitter Strategies",
              "Organic vs Paid Social Campaigns",
              "Audience Targeting & Retargeting",
              "Social Media Analytics & Scheduling Tools",
            ],
          },
        ],
      },

      {
        title: "Module 6: Content Marketing & Copywriting",

        subtopics: [
          {
            items: [
              "Content Types & Strategy",
              "Content Calendar Creation",
              "Blogging & Visual Content",
              "Writing Compelling Ad Copy & Email Content",
            ],
          },
        ],
      },

      {
        title: "Module 7: Email Marketing & Automation",

        subtopics: [
          {
            items: [
              "Building & Segmenting Email Lists",
              "Crafting Effective Campaigns",
              "Tools like Mailchimp, ConvertKit",
              "Automation Sequences & Performance Tracking",
            ],
          },
        ],
      },

      {
        title: "Module 8: Web Analytics & Conversion Tracking",

        subtopics: [
          {
            items: [
              "Google Analytics Setup & Navigation",
              "Tracking KPIs & Funnels",
              "Event & Goal Tracking",
              "Using Data to Improve Campaigns",
            ],
          },
        ],
      },

      {
        title: "Module 9: Digital Marketing Strategy & Capstone Project",

        subtopics: [
          {
            items: [
              "Creating a 360° Digital Strategy",
              "Budgeting & Channel Selection",
              "Building a Portfolio Project",
              "Industry Case Studies & Career Guidance",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "Python", icon: Code },
      { name: "SQL", icon: Code },
      { name: "Apache Airflow", icon: Monitor },
      { name: "Apache Kafka", icon: Monitor },
      { name: "Tableau", icon: Monitor },
      { name: "AWS", icon: Monitor },
      { name: "PySpark", icon: Code },
      { name: "MySQL", icon: Monitor },
      { name: "Talend", icon: Monitor },
      { name: "Git", icon: Code },
    ],
    heroMessage:
      "Start your journey to a global career in Digital Marketing! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "Digital Marketing Expert",
  };

  return <BootcampComponent {...data} />;
};

export default DigitalMarketing;
