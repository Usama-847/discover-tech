"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Users, Code, Monitor } from "lucide-react";

const WebDesignDevelopment = () => {
  const data = {
    title: "Web Design and Development",
    description:
      "Learn to build modern, responsive, and user-friendly websites from scratch. This course covers the complete web design and development lifecycle—from HTML, CSS, and JavaScript to advanced frameworks like React and backend technologies like Node.js. You’ll master both the design aesthetics and the technical skills required to create functional, visually appealing websites and web applications. Ideal for beginners and aspiring full-stack developers.",
    duration: "03 Months",
    schedule: "Tuesday, Thursday, Saturday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "Muhammad Ubaud Ur Rehman",
      title:
        "Full-Stack Developer | MERN Stack Expert | Tech Mentor | Transforming Ideas into Scalable Web Applications",
      image: "/images/courses/Ubaib  (2).png",
      bio: "Ubaid is a skilled Full-Stack Web Developer with deep expertise in the MERN Stack (MongoDB, Express.js, React, Node.js). With hands-on experience in building dynamic and scalable web applications, he helps students and professionals master modern web development tools and techniques.Currently mentoring developers and leading tech initiatives, Ubaid specializes in turning complex technical concepts into simple, practical lessons. He has trained over 100 aspiring developers and working professionals across various industries, empowering them with the skills needed to thrive in today’s digital world.",
      experience:
        "Known for his project-based teaching style, Ubaid delivers real-world training that focuses on practical implementation, helping learners build portfolio-ready projects and industry-relevant expertise.",

      // badges: [
      //   { text: "Full Stack Development", icon: Users, color: "green" },
      //   { text: "Web Design & Development", color: "blue" },
      // ],
    },
    modules: [
      {
        title: "Module 1: Introduction to Web Design & Development",

        subtopics: [
          {
            items: [
              "Overview of the web ecosystem",
              "Web design vs. web development",
              "Understanding how the web works (HTTP, browsers, servers)",
              "Tools of the trade (Text editors, browsers, DevTools)",
            ],
          },
        ],
      },

      {
        title: "Module 2: HTML Essentials",

        subtopics: [
          {
            items: [
              "Structure of a web page",
              "Common HTML tags (headings, paragraphs, links, images, lists)",
              "Forms and input elements",
              "Semantic HTML and accessibility",
            ],
          },
        ],
      },

      {
        title: "Module 3: CSS Fundamentals",

        subtopics: [
          {
            items: [
              "Styling elements using CSS",
              "Selectors, properties, and values",
              "Box model, layout techniques (Flexbox, Grid)",
              "Responsive design and media queries",
            ],
          },
        ],
      },

      {
        title: "Module 4: JavaScript Basics",

        subtopics: [
          {
            items: [
              "Introduction to JavaScript syntax",
              "Variables, data types, functions, and events",
              "DOM manipulation",
              "Control structures (loops, conditionals)",
            ],
          },
        ],
      },

      {
        title: "Module 5: Advanced JavaScript & Interactivity",

        subtopics: [
          {
            items: [
              "JavaScript ES6+ features (let/const, arrow functions, spread/rest)",
              "Working with APIs and JSON",
              "Local storage and form validation",
              "Introduction to asynchronous JavaScript (Promises, fetch)",
            ],
          },
        ],
      },

      {
        title: "Module 6: Version Control & Deployment",

        subtopics: [
          {
            items: [
              "Git and GitHub basics",
              "Commit, push, pull, merge",
              "Hosting websites on GitHub Pages or Netlify",
              "Introduction to CI/CD",
            ],
          },
        ],
      },

      {
        title: "Module 7: Introduction to Frontend Frameworks",

        subtopics: [
          {
            items: [
              "Basics of React.js",
              "JSX, components, props, state",
              "Component lifecycle",
              "Handling events and conditional rendering",
            ],
          },
        ],
      },

      {
        title: "Module 8: Backend Development Fundamentals",

        subtopics: [
          {
            items: [
              "Introduction to Node.js and Express.js",
              "Creating APIs and routing",
              "Connecting to a database (MongoDB or Firebase)",
              "Basic CRUD operations",
            ],
          },
        ],
      },

      {
        title: "Module 9: Capstone Project & Portfolio Building",

        subtopics: [
          {
            items: [
              "Plan and design a full website or web app",
              "Implement frontend + backend functionality",
              "Responsive and accessible design",
              "Deploy project and present in portfolio",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "Git", icon: Code },
      { name: "GitHub", icon: Monitor },
      { name: "VS Code", icon: Monitor },
      { name: "Figma", icon: Monitor },
      { name: "Netlify", icon: Monitor },
    ],
    heroMessage:
      "Start your journey to a global career in Digital Marketing! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "Digital Marketing Expert",
  };

  return <BootcampComponent {...data} />;
};

export default WebDesignDevelopment;
