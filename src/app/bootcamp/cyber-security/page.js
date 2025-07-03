"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Users, Code, Monitor } from "lucide-react";

const Cybersecurity = () => {
  const data = {
    title: "Cyber Security Bootcamp",
    description:
      "Cyber Security is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and cyber threats. This field focuses on implementing defensive measures, monitoring systems for vulnerabilities, and responding to incidents in real time. As cyber threats grow more complex, skilled professionals are in high demand to safeguard sensitive information and maintain digital trust across industries.",
    duration: "03 Months",
    schedule: "Monday, Wednesday, Friday",
    startDate: "16 June, 2025",
    format: "Online & Interactive",
    instructor: {
      name: "Khurram Shahid",
      title:
        "Mobile App Development Expert | React Native Specialist | Industry Mentor | Empowering Businesses through Scalable Mobile Solutions",
      image: "/images/courses/Khuram-002 (1).png",
      bio: "Khurram Shahid is a skilled Mobile App Developer with extensive experience in building cross-platform mobile applications using React Native. With a strong foundation in frontend and backend integration, he has delivered high-performance apps for startups and enterprises alike. Currently mentoring aspiring developers, Khurram focuses on real-world application of React Native, UI/UX best practices, and app deployment strategies.",
      experience:
        "He has successfully trained professionals from leading organizations and has a passion for simplifying complex concepts through project-based learning. Known for his interactive sessions, Khurram ensures that learners not only understand the theory but also build production-ready mobile applications by the end of the course.",

      // badges: [
      //   { text: "Cyber Security Expert", icon: Users, color: "green" },
      //   { text: "Cyber Security Expert", color: "blue" },
      // ],
    },
    modules: [
      {
        title: "Module 1: Introduction to Cyber Security",

        subtopics: [
          {
            items: [
              "Overview of cyber security concepts",
              "Types of cyber threats & attacks",
              "Importance of cyber security in the digital world",
              "Cyber security principles: CIA Triad (Confidentiality, Integrity, Availability)",
            ],
          },
        ],
      },

      {
        title: "Module 2: Networking Fundamentals",

        subtopics: [
          {
            items: [
              "OSI & TCP/IP models",
              "IP addressing, DNS, ports & protocols",
              "Firewalls, proxies, and VPNs",
              "Network devices and security zones",
            ],
          },
        ],
      },

      {
        title: "Module 3: Operating Systems & System Security",

        subtopics: [
          {
            items: [
              "Windows and Linux OS basics",
              "System vulnerabilities and hardening",
              "Access control and file system permissions",
              "OS security tools and practices",
            ],
          },
        ],
      },

      {
        title: "Module 4: Cryptography",

        subtopics: [
          {
            items: [
              "Basics of encryption and decryption",
              "Symmetric vs asymmetric encryption",
              "Hashing, digital signatures, and certificates",
              "Real-world cryptographic applications",
            ],
          },
        ],
      },

      {
        title: "Module 5: Web & Application Security",

        subtopics: [
          {
            items: [
              "Web application architecture",
              "Common web vulnerabilities (OWASP Top 10)",
              "Secure coding practices",
              "Penetration testing & vulnerability assessment tools",
            ],
          },
        ],
      },

      {
        title: "Module 6: Network Security & Monitoring",

        subtopics: [
          {
            items: [
              "IDS/IPS systems",
              "Packet analysis with Wireshark",
              "Network security architecture",
              "Logging and monitoring best practices",
            ],
          },
        ],
      },

      {
        title: "Module 7: Ethical Hacking & Penetration Testing",

        subtopics: [
          {
            items: [
              "Phases of ethical hacking",
              "Footprinting, scanning, enumeration",
              "Exploitation and post-exploitation techniques",
              "Kali Linux and Metasploit framework",
            ],
          },
        ],
      },

      {
        title: "Module 8: Cyber Laws, Compliance & Risk Management",

        subtopics: [
          {
            items: [
              "Data protection laws (GDPR, HIPAA, etc.)",
              "Security policies and governance",
              "Risk analysis and mitigation",
              "Compliance frameworks (ISO, NIST, PCI-DSS)",
            ],
          },
        ],
      },

      {
        title: "Module 9: Capstone Project & Incident Response",

        subtopics: [
          {
            items: [
              "Create a full security audit/report",
              "Simulate incident response scenario",
              "Implement a defensive strategy",
              "Final assessment & presentation",
            ],
          },
        ],
      },
    ],
    tools: [
      // Module 2: Networking Fundamentals
      { name: "Wireshark", icon: Monitor },
      { name: "Cisco Packet Tracer", icon: Monitor },
      { name: "Nmap", icon: Monitor },

      // Module 3: Operating Systems & System Security
      { name: "Linux (Kali, Ubuntu)", icon: Monitor },
      { name: "Windows Defender", icon: Monitor },
      { name: "SELinux/AppArmor", icon: Monitor },

      // Module 4: Cryptography
      { name: "OpenSSL", icon: Code },
      { name: "GnuPG", icon: Code },

      // Module 5: Web & Application Security
      { name: "OWASP ZAP", icon: Monitor },
      { name: "Burp Suite", icon: Monitor },

      // Module 6: Network Security & Monitoring
      { name: "Snort", icon: Monitor },
      { name: "Suricata", icon: Monitor },
      { name: "Splunk", icon: Monitor },

      // Module 7: Ethical Hacking & Penetration Testing
      { name: "Kali Linux", icon: Monitor },
      { name: "Metasploit", icon: Code },
      { name: "Hydra", icon: Code },
      { name: "John the Ripper", icon: Code },

      // Module 8: Compliance & Risk Management
      { name: "NIST Cybersecurity Framework", icon: Monitor },
      { name: "ISO 27001 Toolkit", icon: Monitor },

      // General Purpose
      { name: "Git", icon: Code },
      { name: "Python", icon: Code },
    ],
    heroMessage:
      "Start your journey to a global career in Cyber Security! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "Cyber Security Expert",
  };

  return <BootcampComponent {...data} />;
};

export default Cybersecurity;
