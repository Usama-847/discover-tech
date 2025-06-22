"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Users } from "lucide-react";

const DataAnalytics = () => {
  const data = {
    title: "Data Engineering Bootcamp",
    description:
      "Data Engineering is the process of designing, building and maintaining data infrastructure and pipelines to collect, store and process large volumes of data efficiently. It supports data analysis, machine learning, and business intelligence by ensuring data is clean, accessible, and reliable. With the growth of big data, IoT, and AI, data engineering has become a critical role in modern organizations. The demand for skilled data engineers is rapidly increasing across industries. In the future, automation, real-time processing, and cloud-native technologies will likely define this field's evolution.",
    duration: "03 Months",
    schedule: "Wednesday, Thursday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "AMIR JABBAR",
      title:
        "Data Top Voice | Business Analyst @Engro Group | Keynote Speaker | Solving Business Problems with Data Analytics",
      image: "/api/placeholder/200/250",
      bio: "Amir is a globally experienced Business Data Analyst, currently serving in the Business Strategy & Development department at Quasico Inc. He empowers organizations with data-driven insights and innovative solutions. With a strong track record in multinational companies, he has driven transformations through analytical techniques such as predictive modeling, statistical analysis, and data visualization.",
      experience:
        "Amir has trained over 100 professionals from top organizations like GSK, HBL, P&G, Marico, Easyss, UNCP, and Citi Bank, helping them acquire future-ready skills. Known for his interactive and hands-on teaching style, he delivers industry-relevant training that ensures practical and impactful learning.",
      subtitle: "Senior Data Engineer",
      badges: [
        { text: "Data Consultant", icon: Users, color: "green" },
        { text: "Big Data Analytics Expert", color: "blue" },
      ],
    },
    modules: [
      { title: "Core Data Engineering Concepts" },
      { title: "Python for Data Engineering" },
      { title: "Scripting and Data Engineering with SQL" },
      { title: "Data Wrangling" },
      { title: "Cloud Computing" },
      { title: "Data Visualization in Tableau" },
      { title: "Real-Time Data Streaming" },
      { title: "Data Pipelines Automation & Scheduling" },
      { title: "Capstone Projects & Career Mentorship" },
    ],
    tools: [],
    heroMessage:
      "Start your journey to a global career in Data Engineering! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "DATA ENGINEER",
  };

  return <BootcampComponent {...data} />;
};

export default DataAnalytics;
