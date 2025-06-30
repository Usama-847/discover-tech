"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Users, Code, Monitor } from "lucide-react";

const BusinessAnalytics = () => {
  const data = {
    title: "Business Analytics Bootcamp",
    description:
      "Business Analytics is the practice of using data, statistical models, and technology to gain actionable insights and support strategic decision-making. It combines data analysis, visualization, and business intelligence to solve real-world problems, identify trends, and improve performance. Business analysts bridge the gap between data and business goals, driving growth and efficiency across industries.",
    duration: "03 Months",
    schedule: "Thursday, Friday",
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

      // badges: [
      //   { text: "Big Data Analytics Expert", icon: Users, color: "green" },
      //   { text: "Data Consultant", color: "blue" },
      // ],
    },
    modules: [
      {
        title: "Module 1: Introduction to Business Analytics",

        subtopics: [
          {
            items: [
              "Overview of Business Analytics and its importance",
              "Types of analytics: Descriptive, Predictive, Prescriptive",
              "Role of a Business Analyst",
              "Real-world applications in various industries",
            ],
          },
        ],
      },

      {
        title: "Module 2: Fundamentals of Data & Statistics",

        subtopics: [
          {
            items: [
              "Types of data: Structured, semi-structured, unstructured",
              "Data collection & cleaning techniques",
              "Descriptive statistics: Mean, median, mode, standard deviation",
              "Probability & basic statistical concepts",
            ],
          },
        ],
      },

      {
        title: "Module 3: Excel for Business Analytics",

        subtopics: [
          {
            items: [
              "Excel formulas and functions",
              "Data summarization with PivotTables",
              "Data visualization using charts",
              "Scenario analysis and forecasting tools",
            ],
          },
        ],
      },

      {
        title: "Module 4: SQL for Data Extraction",

        subtopics: [
          {
            items: [
              "Basics of relational databases",
              "Writing queries to fetch, filter, and aggregate data",
              "Joins, subqueries, and views",
              "Case study using real-world datasets",
            ],
          },
        ],
      },

      {
        title: "Module 5: Data Visualization & BI Tools",

        subtopics: [
          {
            items: [
              "Importance of visual storytelling",
              "Introduction to Tableau/Power BI",
              "Creating dashboards and interactive reports",
              "Choosing the right chart for data types",
            ],
          },
        ],
      },

      {
        title: "Module 6: Business Metrics & KPIs",

        subtopics: [
          {
            items: [
              "Understanding business goals and aligning KPIs",
              "Metrics for different business functions (marketing, finance, operations)",
              "ROI, customer churn, conversion rates, etc.",
              "Building KPI dashboards",
            ],
          },
        ],
      },

      {
        title: "Module 7: Introduction to Predictive Analytics",

        subtopics: [
          {
            items: [
              "Regression analysis basics",
              "Time-series forecasting",
              "Classification & clustering concepts",
              "Intro to machine learning models (no coding focus)",
            ],
          },
        ],
      },

      {
        title: "Module 8: Case Studies & Domain Applications",

        subtopics: [
          {
            items: [
              "Retail: Sales forecasting and inventory optimization",
              "Finance: Risk assessment and customer segmentation",
              "Healthcare: Patient data and cost efficiency",
              "Marketing: Campaign performance and customer lifetime value",
            ],
          },
        ],
      },

      {
        title: "Module 9: Capstone Project & Career Preparation",

        subtopics: [
          {
            items: [
              "Real-world business problem analysis",
              "Data storytelling and presentation skills",
              "Resume building & interview prep",
              "Mock interviews and expert mentoring",
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
    certificationTitle: "DATA ANALYTICS EXPERT",
  };

  return <BootcampComponent {...data} />;
};

export default BusinessAnalytics;
