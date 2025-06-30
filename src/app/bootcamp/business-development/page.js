"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Plane, Code, Users, Monitor } from "lucide-react";

const BusinessDevelopment = () => {
  const data = {
    title: "Business Development Bootcamp",
    description:
      "Business Development focuses on identifying growth opportunities, building strategic partnerships, and expanding market presence. It involves market research, lead generation, relationship management, and sales strategies to drive long-term revenue and business success.",
    duration: "03 Months",
    schedule: "Thursday,Friday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "Amir Jabbar",
      title:
        "Data Top Voice | Business Analyst @Engro Group | Keynote Speaker | Solving Business Problems with Data Analytics",
      image: "/images/courses/Amir Bhai-003.png",
      bio: "Amir is a globally experienced Business Data Analyst, currently serving in the Business Strategy & Development department at Quecko Inc. He empowers organizations with data-driven insights and innovative solutions. With a strong track record in multinational companies, He has driven transformations through analytical techniques such as customer analysis, churn analysis, and product- level analysis.",
      experience:
        "Amir has trained over 100 professionals from top organizations like GSK, HBL, PSO, Nokia, Etisalat, UNDP, and Citi Bank, helping them acquire future-ready skills. Known for his interactive and hands-on teaching style, He delivers industry-relevant training that ensures practical and impactful learning.",
      // subtitle: "Business Development",
      // badges: [
      //   { text: "Business Development", icon: Users, color: "green" },
      //   { text: "Business Development", color: "blue" },
      // ],
    },
    modules: [
      {
        title: "Module 1: Introduction to Business Development",

        subtopics: [
          {
            items: [
              "What is Business Development?",
              "Role and importance in organizational growth",
              "Key responsibilities of a business developer",
              "Overview of the business development lifecycle",
            ],
          },
        ],
      },

      {
        title: "Module 2: Market Research & Industry Analysis",

        subtopics: [
          {
            items: [
              "Understanding target markets",
              "Competitor analysis",
              "Market trends and forecasting",
              "Identifying customer pain points and needs",
            ],
          },
        ],
      },

      {
        title: "Module 3: Lead Generation & Prospecting",

        subtopics: [
          {
            items: [
              "Effective lead generation techniques",
              "Building and managing a sales pipeline",
              "Tools for lead generation (LinkedIn, email outreach, CRM)",
              "Qualifying prospects",
            ],
          },
        ],
      },

      {
        title: "Module 4: Sales Strategy & Relationship Management",

        subtopics: [
          {
            items: [
              "Understanding the sales funnel",
              "B2B vs. B2C strategies",
              "Building long-term client relationships",
              "Handling objections and negotiation",
            ],
          },
        ],
      },

      {
        title: "Module 5: Strategic Partnerships & Alliances",

        subtopics: [
          {
            items: [
              "Identifying and approaching potential partners",
              "Collaboration models (JV, strategic alliances, resellers)",
              "Building trust and mutual benefit",
              "Legal and contract basics",
            ],
          },
        ],
      },

      {
        title: "Module 6: Communication & Pitching Skills",

        subtopics: [
          {
            items: [
              "Crafting effective business pitches",
              "Presentation and storytelling techniques",
              "Email and proposal writing",
              "Verbal and non-verbal communication",
            ],
          },
        ],
      },

      {
        title: "Module 7: Financial Acumen & Pricing Strategies",

        subtopics: [
          {
            items: [
              "Understanding financial statements",
              "Costing, pricing models, and profit margins",
              "ROI analysis and forecasting",
              "Budgeting for business development",
            ],
          },
        ],
      },

      {
        title: "Module 8: Digital Tools & CRM",

        subtopics: [
          {
            items: [
              "CRM platforms (HubSpot, Salesforce, Zoho)",
              "Automation tools for outreach and follow-up",
              "Analytics and tracking KPIs",
              "Email marketing and funnel automation",
            ],
          },
        ],
      },

      {
        title: "Module 9: Capstone Project & Career Preparation",

        subtopics: [
          {
            items: [
              "Develop a business development plan for a real or fictional company",
              "Pitch deck creation and mock presentations",
              "Resume and LinkedIn optimization",
              "Interview preparation for business development roles",
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
      "Start your journey to a global career in Data Engineering! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "Business Development",
  };

  return <BootcampComponent {...data} />;
};

export default BusinessDevelopment;
