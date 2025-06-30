"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Users, Code, Monitor } from "lucide-react";

const DataAnalytics = () => {
  const data = {
    title: "Data Analytics Bootcamp",
    description:
      "Data Analytics is the process of examining, transforming, and interpreting data to uncover meaningful insights, patterns, and trends. It helps businesses make informed decisions, optimize performance, and predict future outcomes. Using tools like Excel, SQL, Power BI, and Python, data analysts turn raw data into actionable intelligence.",
    duration: "03 Months",
    schedule: "Monday, Tuesday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "AMir Jabbar",
      title:
        "Data Top Voice | Business Analyst @Engro Group | Keynote Speaker | Solving Business Problems with Data Analytics",
      image: "/images/courses/Amir Bhai-002.png",
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
        title: "Module 1: Introduction to Data Analytics",

        subtopics: [
          {
            items: [
              "What is Data Analytics?",
              "Types of Data Analytics: Descriptive, Diagnostic, Predictive, Prescriptive",
              "Data Analytics Lifecycle",
              "Role of a Data Analyst in organizations",
            ],
          },
        ],
      },

      {
        title: "Module 2: Excel for Data Analysis",

        subtopics: [
          {
            items: [
              "Data cleaning & transformation techniques",
              "Pivot tables, charts, and dashboards",
              "Lookup functions (VLOOKUP, HLOOKUP, INDEX-MATCH)",
              "Basic data visualization",
            ],
          },
        ],
      },

      {
        title: "Module 3: SQL for Data Querying",

        subtopics: [
          {
            items: [
              "Introduction to Relational Databases",
              "SQL Basics: SELECT, WHERE, JOIN, GROUP BY",
              "Aggregations and filtering",
              "Subqueries and CTEs",
            ],
          },
        ],
      },

      {
        title: "Module 4: Python for Data Analysis",

        subtopics: [
          {
            items: [
              "Python basics: variables, loops, functions",
              "Using Pandas for data manipulation",
              "Numpy for numerical computations",
              "Data visualization with Matplotlib & Seaborn",
            ],
          },
        ],
      },

      {
        title: "Module 5: Data Cleaning and Preparation",

        subtopics: [
          {
            items: [
              "Handling missing, duplicate, and inconsistent data",
              "Data type conversions and formatting",
              "Outlier detection and removal",
              "Preparing data for analysis",
            ],
          },
        ],
      },

      {
        title: "Module 6: Exploratory Data Analysis (EDA)",

        subtopics: [
          {
            items: [
              "Univariate and Bivariate analysis",
              "Data profiling and distribution checks",
              "Correlation and trend analysis",
              "Data visualization techniques",
            ],
          },
        ],
      },

      {
        title: "Module 7: Introduction to Business Intelligence (BI) Tools",

        subtopics: [
          {
            items: [
              "Overview of BI tools: Power BI/Tableau",
              "Connecting data sources",
              "Creating visual dashboards",
              "Interactive filtering and drill-downs",
            ],
          },
        ],
      },

      {
        title: "Module 8: Data-Driven Decision Making",

        subtopics: [
          {
            items: [
              "Creating KPI reports and business insights",
              "Real-life use cases: Sales, Marketing, HR Analytics",
              "Communicating insights through storytelling",
              "Building and presenting data reports",
            ],
          },
        ],
      },

      {
        title: "Module 9: Capstone Project & Career Mentorship",

        subtopics: [
          {
            items: [
              "End-to-end data analytics project",
              "Problem statement to data visualization",
              "Resume building & interview preparation",
              "Mentoring sessions from industry professionals",
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

export default DataAnalytics;
