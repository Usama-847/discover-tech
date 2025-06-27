"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Plane, Code, Users, Monitor } from "lucide-react";

const AirlineReservation = () => {
  const data = {
    title: "Airline Reservation Bootcamp",
    description:
      "An Airline Reservation System is a web-based or desktop application that automates the process of booking airline tickets. It allows customers to search flights, check availability, reserve seats, make payments, and receive e-tickets in real-time. The system streamlines operations for airlines by managing schedules, fares, passenger data, and cancellations, ensuring efficient and user-friendly air travel experiences.",
    duration: "02 Months",
    schedule: "Monday, Friday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "MS Khan Yousafzai",
      title:
        "Tech Mentor | Software Engineer | Expert in Travel Tech Systems | Transforming Airline Booking with Code",
      image: "/api/placeholder/200/250",
      bio: "M S Khan Yousafzai is a seasoned Software Engineer and Airline Tech Specialist, renowned for his deep expertise in designing and building robust airline reservation systems. With a career spanning over a decade in software and travel technologies, he has helped streamline booking operations for various aviation and travel companies.Khan brings a practical, hands-on approach to teaching, ensuring students gain real-world skills in system architecture, flight search logic, booking engines, and payment integrations. He has mentored over 200 professionals and students in building scalable travel and booking platforms.",
      experience:
        "Having worked closely with both startups and enterprise-level travel businesses, Khan is passionate about bridging the gap between theory and application in the travel tech space. His sessions are known for their clarity, industry relevance, and project-based learning that prepares students for real-world challenges.",
      subtitle: "Senior Data Engineer",
      badges: [
        { text: "Airline Ticket Expert", icon: Users, color: "green" },
        { text: "GDS system expert", color: "blue" },
      ],
    },
    modules: [
      {
        title: "Module 1: Introduction to Airline Reservation Systems",

        subtopics: [
          {
            items: [
              "Overview of the airline industry operations.",
              "Key components of reservation systems.",
              "Importance of automation and real-time booking",
              "System requirements and architecture",
            ],
          },
        ],
      },

      {
        title: "Module 2: Database Design & Management",

        subtopics: [
          {
            items: [
              "Entity-Relationship (ER) modeling",
              "Designing flight schedules, airports, bookings, and users tables",
              "Relational database schema design (e.g., MySQL/PostgreSQL)",
              "Data normalization and integrity constraints",
            ],
          },
        ],
      },

      {
        title: "Module 3: Frontend Development",

        subtopics: [
          {
            items: [
              "User Interface design principles for travel systems",
              "Building search forms, booking screens, seat maps",
              "HTML, CSS, JavaScript basics (or React for advanced UI)",
              "Responsive and accessible design",
            ],
          },
        ],
      },

      {
        title: "Module 4: Backend Development",

        subtopics: [
          {
            items: [
              "Building RESTful APIs for bookings, payments, and schedules",
              "Authentication and user roles (admin, customer, agent)",
              "Integration with database",
              "Technologies: Node.js, Express.js, or Django/Flask",
            ],
          },
        ],
      },

      {
        title: "Module 5: Flight Search & Booking Logic",

        subtopics: [
          {
            items: [
              "Building the flight search engine (by destination, date, class, etc.)",
              "Real-time seat availability",
              "Booking confirmation and ticket generation logic",
              "Handling bookings and waitlists",
            ],
          },
        ],
      },

      {
        title: "Module 6: Payment Gateway Integration",

        subtopics: [
          {
            items: [
              "Understanding payment flow",
              "Integrating Stripe, PayPal, or other gateways",
              "Handling payment failures and refunds",
              "Secure transactions with SSL and tokens",
            ],
          },
        ],
      },

      {
        title: "Module 7: Admin Panel & Airline Management",

        subtopics: [
          {
            items: [
              "Admin dashboard for managing flights, aircraft, pricing, and schedules",
              "Managing booking history and customer data",
              "Reporting tools and analytics",
              "Role-based access control",
            ],
          },
        ],
      },

      {
        title: "Module 8: Deployment & Cloud Hosting",

        subtopics: [
          {
            items: [
              "Hosting on AWS, Azure, or Firebase",
              "Using Docker and GitHub for CI/CD",
              "Environment setup (production vs development)",
              "Backup and recovery",
            ],
          },
        ],
      },

      {
        title: "Module 9: Final Project & Case Study",

        subtopics: [
          {
            items: [
              "Build a complete Airline Reservation System",
              "Include real-world features like multi-city booking, email/SMS ticketing",
              "Code documentation and presentation",
              "Feedback and mentorship session",
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
    certificationTitle: "AIRLINE RESERVATION",
  };

  return <BootcampComponent {...data} />;
};

export default AirlineReservation;
