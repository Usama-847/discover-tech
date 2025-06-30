"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Plane, Code, Users, Monitor } from "lucide-react";

const MobileDevelopment = () => {
  const data = {
    title: "Mobile App Development (React Native)",
    description:
      "A React Native Mobile App Developer specializes in building cross-platform mobile applications for iOS and Android using JavaScript and the React Native framework. They create high-performance, user-friendly apps with native-like experiences, handling everything from UI design to backend integration.",
    duration: "03 Months",
    schedule: "Monday, Wednesday, Friday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "Khurram Shahid",
      title:
        "Mobile App Development Expert | React Native Specialist | Industry Mentor | Empowering Businesses through Scalable Mobile Solutions",
      image: "/images/courses/Khuram-002 (2).png",
      bio: "Khurram Shahid is a skilled Mobile App Developer with extensive experience in building cross-platform mobile applications using React Native. With a strong foundation in frontend and backend integration, he has delivered high-performance apps for startups and enterprises alike. Currently mentoring aspiring developers, Khurram focuses on real-world application of React Native, UI/UX best practices, and app deployment strategies.",
      experience:
        "He has successfully trained professionals from leading organizations and has a passion for simplifying complex concepts through project-based learning. Known for his interactive sessions, Khurram ensures that learners not only understand the theory but also build production-ready mobile applications by the end of the course.",
      // subtitle: "Mobile App Development",
      // badges: [
      //   { text: "React Native", icon: Users, color: "green" },
      //   { text: "Mobile App Developer", color: "blue" },
      // ],
    },
    modules: [
      {
        title: "Module 1: Introduction to React Native & Environment Setup",

        subtopics: [
          {
            items: [
              "What is React Native?",
              "Cross-platform mobile development concepts",
              "Setting up development environment (Expo CLI & React Native CLI)",
              "Creating your first React Native app",
            ],
          },
        ],
      },

      {
        title: "Module 2: React Fundamentals for Mobile Apps",

        subtopics: [
          {
            items: [
              "JSX, components, props, and state",
              "Functional vs Class components",
              "Component lifecycle",
              "Event handling in React Native",
            ],
          },
        ],
      },

      {
        title: "Module 3: React Native Core Components & Styling",

        subtopics: [
          {
            items: [
              "Core components: View, Text, Image, ScrollView, TextInput, etc.",
              "Flexbox layout in React Native",
              "Platform-specific design (iOS vs Android)",
              "Responsive & adaptive design",
            ],
          },
        ],
      },

      {
        title: "Module 4: Navigation and Routing",

        subtopics: [
          {
            items: [
              "Installing React Navigation",
              "Stack, Tab, Drawer navigation",
              "Passing data between screens",
              "Deep linking and screen transitions",
            ],
          },
        ],
      },

      {
        title: "Module 5: State Management",

        subtopics: [
          {
            items: [
              "Lifting state up",
              "Context API",
              "Redux: Actions, Reducers, Store",
              "Using Redux Toolkit (RTK)",
            ],
          },
        ],
      },

      {
        title: "Module 6: API Integration & Backend Communication",

        subtopics: [
          {
            items: [
              "Fetching data using REST APIs (Axios & Fetch)",
              "Handling loading, success, and error states",
              "CRUD operations",
              "Introduction to GraphQL (optional)",
            ],
          },
        ],
      },

      {
        title: "Module 7: Advanced Features & Device APIs",

        subtopics: [
          {
            items: [
              "Accessing device features: Camera, Geolocation, Vibration, etc.",
              "Push notifications (Firebase/OneSignal)",
              "Local storage (AsyncStorage, MMKV)",
              "Permissions and background tasks",
            ],
          },
        ],
      },

      {
        title: "Module 8: App Deployment & Optimization",

        subtopics: [
          {
            items: [
              "Debugging and performance tips",
              "App testing (manual & automated)",
              "Building and deploying apps to Play Store & App Store",
              "Versioning, signing, and OTA updates with Expo",
            ],
          },
        ],
      },

      {
        title: "Module 9: Capstone Project & Interview Preparation",

        subtopics: [
          {
            items: [
              "Build a complete mobile app (e.g., To-do App, E-commerce App)",
              "Code review & documentation",
              "Git & GitHub for version control",
              "Resume building & interview preparation tips for React Native roles",
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
      "Start your journey to a global career in Mobile App Development! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "Mobile App Developer",
  };

  return <BootcampComponent {...data} />;
};

export default MobileDevelopment;
