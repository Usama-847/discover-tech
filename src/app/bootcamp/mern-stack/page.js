"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Plane, Code, Users, Monitor } from "lucide-react";

const MERNstack = () => {
  const data = {
    title: "MERN Stack Develpment",
    description:
      "MERN Stack Development is a full-stack JavaScript framework using MongoDB, Express.js, React.js, and Node.js to build dynamic web applications. It enables developers to create powerful, scalable, and responsive apps using a single programming language across the entire tech stack—JavaScript.",
    duration: "03 Months",
    schedule: "Tuesday, Thursday, Saturday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "Muhammad Ubaud Ur Rehman",
      title:
        "Full-Stack Developer | MERN Stack Expert | Tech Mentor | Transforming Ideas into Scalable Web Applications",
      image: "/images/courses/Ubaib1.png",
      bio: "Ubaid is a skilled Full-Stack Web Developer with deep expertise in the MERN Stack (MongoDB, Express.js, React, Node.js). With hands-on experience in building dynamic and scalable web applications, he helps students and professionals master modern web development tools and techniques.Currently mentoring developers and leading tech initiatives, Ubaid specializes in turning complex technical concepts into simple, practical lessons. He has trained over 100 aspiring developers and working professionals across various industries, empowering them with the skills needed to thrive in today’s digital world.",
      experience:
        "Known for his project-based teaching style, Ubaid delivers real-world training that focuses on practical implementation, helping learners build portfolio-ready projects and industry-relevant expertise.",
      // subtitle: "MERN Stack Development",
      // badges: [
      //   { text: "Full Stack Development", icon: Users, color: "green" },
      //   { text: "MERN Stack", color: "blue" },
      // ],
    },
    modules: [
      {
        title: "Module 1: Introduction to Web Development & JavaScript",

        subtopics: [
          {
            items: [
              "Basics of web development (frontend vs backend)",
              "HTML, CSS fundamentals",
              "JavaScript ES6+ concepts",
              "DOM manipulation",
              "Understanding how the web works (HTTP, REST)",
            ],
          },
        ],
      },

      {
        title: "Module 2: React.js - Frontend Development",

        subtopics: [
          {
            items: [
              "Introduction to React and component-based architecture",
              "JSX, props, state, and event handling",
              "React hooks (useState, useEffect, etc.)",
              "Routing using React Router",
              "Conditional rendering and lists",
            ],
          },
        ],
      },

      {
        title: "Module 3: Advanced React & State Management",

        subtopics: [
          {
            items: [
              "Context API and custom hooks",
              "Form handling and validation",
              "Working with APIs (Fetch, Axios)",
              "Redux or Zustand for global state management",
              "Performance optimization in React",
            ],
          },
        ],
      },

      {
        title: "Module 4: Node.js - Backend Basics",

        subtopics: [
          {
            items: [
              "Introduction to Node.js and npm",
              "Understanding asynchronous programming (callbacks, promises, async/await)",
              "File system and environment setup",
              "Creating servers using HTTP and Express.js",
            ],
          },
        ],
      },

      {
        title: "Module 5: Express.js - REST API Development",

        subtopics: [
          {
            items: [
              "Creating and managing RESTful APIs",
              "Route handling and middleware",
              "Error handling and status codes",
              "Using Postman for API testing",
              "Securing APIs with headers and tokens",
            ],
          },
        ],
      },

      {
        title: "Module 6: MongoDB - Database Integration",

        subtopics: [
          {
            items: [
              "Introduction to NoSQL and MongoDB",
              "MongoDB Atlas setup",
              "CRUD operations (Create, Read, Update, Delete)",
              "Data modeling with Mongoose",
              "Relationships using refs and embedded documents",
            ],
          },
        ],
      },

      {
        title: "Module 7: Full-Stack Integration (MERN)",

        subtopics: [
          {
            items: [
              "Connecting React frontend with Node/Express backend",
              "Fetching and displaying data in React",
              "Form submission from React to backend",
              "Managing loading and error states",
              "Deploying both backend and frontend locally",
            ],
          },
        ],
      },

      {
        title: "Module 8: Authentication & Authorization",

        subtopics: [
          {
            items: [
              "User registration and login systems",
              "JWT (JSON Web Tokens) for authentication",
              "Password hashing with bcrypt",
              "Role-based access control",
              "Session management",
            ],
          },
        ],
      },

      {
        title: "Module 9: Deployment, DevOps & Final Project",

        subtopics: [
          {
            items: [
              "Environment variables and production settings",
              "Hosting backend (e.g., Render, Railway)",
              "Deploying frontend (e.g., Vercel, Netlify)",
              "Git & GitHub for version control",
              "Final capstone project: A full MERN app with auth, CRUD, and deployment",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "MongoDB", icon: Monitor },
      { name: "Express.js", icon: Monitor },
      { name: "React.js", icon: Monitor },
      { name: "Node.js", icon: Monitor },
      { name: "JavaScript (ES6+)", icon: Code },
      { name: "Mongoose", icon: Code },
      { name: "JWT", icon: Code },
      { name: "Postman", icon: Monitor },
      { name: "Git", icon: Code },
      { name: "GitHub", icon: Monitor },
      { name: "Vercel", icon: Plane },
      { name: "Render", icon: Plane },
    ],

    heroMessage:
      "Start your journey to a global career in Data Engineering! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "MERN STACK DEVELOPMENT",
  };

  return <BootcampComponent {...data} />;
};

export default MERNstack;
