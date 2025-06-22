"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Plane, Code } from "lucide-react";

const AirlineReservation = () => {
  const data = {
    title: "Airline Reservation Bootcamp",
    description:
      "Master the development of comprehensive airline reservation systems from scratch. Learn to build robust booking platforms, manage flight schedules, handle passenger data, and integrate payment gateways. This intensive program covers both frontend and backend development, database design, API integration, and system architecture specifically tailored for the aviation industry. Gain expertise in creating scalable, secure, and user-friendly airline booking systems that handle real-world complexities like seat management, pricing algorithms, and multi-airline integrations.",
    duration: "04 Months",
    schedule: "Monday, Wednesday, Friday",
    startDate: "01 July, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "USAMA KHAN",
      title:
        "Senior Software Engineer | Aviation Systems Specialist | Full-Stack Developer | Building Next-Gen Airline Solutions",
      image: "/api/placeholder/200/250",
      bio: "Usama is a highly experienced Software Engineer specializing in aviation and travel technology systems. Currently leading development teams at major airline tech companies, he has architected and built reservation systems that handle millions of bookings annually. With deep expertise in airline industry standards, GDS integrations, and modern web technologies, Usama brings real-world experience from working with major airlines and travel agencies.",
      experience:
        "Usama has successfully delivered 15+ airline reservation projects for companies like Emirates, Qatar Airways, and leading travel agencies. He has mentored over 200 developers in aviation software development, helping them transition into high-paying roles in the travel tech industry. Known for his practical approach and industry insights, he ensures students learn not just coding, but the business logic that drives airline operations.",
      subtitle: "Aviation Systems Expert",
      badges: [
        { text: "Aviation Tech", icon: Plane, color: "green" },
        { text: "Full-Stack Expert", icon: Code, color: "blue" },
      ],
    },
    modules: [
      { title: "Aviation Industry Fundamentals & Business Logic" },
      { title: "Database Design for Airline Systems" },
      { title: "Frontend Development with React & Airline UI/UX" },
      { title: "Backend Development with Node.js & Express" },
      { title: "Flight Search & Booking Engine Development" },
      { title: "Payment Gateway Integration & Security" },
      { title: "GDS (Global Distribution System) Integration" },
      { title: "Seat Management & Aircraft Configuration" },
      { title: "Pricing Algorithms & Revenue Management" },
      { title: "Multi-airline Integration & API Development" },
      { title: "Real-time Notifications & Communication Systems" },
      { title: "Testing, Deployment & System Maintenance" },
      { title: "Capstone Project: Complete Airline Reservation System" },
    ],
    tools: [
      { name: "React", icon: null },
      { name: "Node.js", icon: null },
      { name: "MongoDB", icon: null },
      { name: "Express.js", icon: null },
      { name: "AWS", icon: null },
      { name: "Stripe", icon: null },
      { name: "Socket.io", icon: null },
      { name: "Docker", icon: null },
      { name: "Redis", icon: null },
      { name: "JWT", icon: null },
    ],
    heroMessage:
      "Launch your career in Aviation Technology! Build real-world airline systems and become an industry expert",
    certificationTitle: "AIRLINE SYSTEMS DEVELOPER",
    instructorStats: [
      { value: "15+", label: "Airline Projects", color: "blue" },
      { value: "200+", label: "Students Mentored", color: "green" },
      { value: "8+", label: "Years Experience", color: "purple" },
      { value: "100%", label: "Job Placement", color: "orange" },
    ],
  };

  return <BootcampComponent {...data} />;
};

export default AirlineReservation;
