"use client";
import React from "react";
import BootcampComponent from "../../../components/BootcampComponent";
import { Users, Code, Monitor } from "lucide-react";

const DataEngineering = () => {
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
      {
        title: "Core Data Engineering Concepts",
        description:
          "Master foundational concepts that form the backbone of modern data engineering practices.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
        ],
        tags: ["Data Architecture", "ETL/ELT", "Dimensional Modeling"],
      },
      {
        title: "Python for Data Engineering",
        description:
          "Learn Python programming specifically tailored for data engineering tasks and automation.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
          {
            category: "Module 2: Python for Data Engineering",
            items: [
              "Python Essentials:",
              "  - Data Types: int, float, str, bool, etc.",
              "  - Type Conversion: str(), int()",
              "  - Operators: Arithmetic, Comparison, Logical, Assignment, Bitwise",
              "  - Control Flow: if, else, elif, for, while, break, continue, pass",
              "  - Functions: def, *args, **kwargs, return, lambda",
              "  - Data Structures: Lists, Tuples, Dictionaries, Sets",
              "  - String Manipulation: upper(), lower(), split(), replace(), f-strings",
              "  - Error Handling: try, except, finally, raise",
              "",
              "Python for Data Engineering:",
              "  - Data Extraction/Manipulation with File Formats",
              "  - NumPy for Numerical Operations",
              "  - Pandas for Data Transformation",
              "  - MySQL Interaction using mysql-connector, pymysql",
              "  - CRUD Operations",
              "  - API Integration (Requests & Responses)",
              "  - Data Loading to Snowflake",
              "  - Logging Pipeline Execution",
              "  - Integration with PySpark & Cloud Storage",
              "  - Real-Time Data with Python & Kafka",
              "",
              "Case Study & Project:",
              "  - ETL/ELT Pipeline using Netflix Dataset (TV shows, Movies, Documentaries)",
              "  - Use Pandas, NumPy, and Snowflake Connector for analysis and loading",
            ],
          },
        ],
        tags: ["Python", "Programming", "Data Processing"],
      },

      {
        title: "Scripting and Data Engineering with SQL",
        description:
          "Master advanced SQL techniques for data manipulation, querying, and database management.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
          {
            category: "Module 3: Scripting and Data Engineering with SQL",
            items: [
              "MySQL Fundamentals:",
              "  - Role of MySQL in RDBMS & ACID Properties",
              "  - Data Types: Numeric, String, Date/Time",
              "  - Constraints: PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, DEFAULT, AUTO_INCREMENT",
              "  - SQL Queries: CREATE, DROP, SELECT, INSERT, UPDATE, DELETE",
              "  - Clauses: WHERE, HAVING, UNION, LIKE, BETWEEN, IN, ORDER BY, LIMIT",
              "  - Joins: INNER, LEFT, RIGHT, FULL OUTER",
              "",
              "Functions:",
              "  - Aggregate: COUNT, SUM, AVG, MIN, MAX",
              "  - Window: ROW_NUMBER, RANK, SUM OVER, LEAD, LAG",
              "",
              "Subqueries, Nested Joins, Indexing, Views",
              "Stored Procedures, Error Logging, EXPLAIN Clause",
              "",
              "Advanced Topics:",
              "  - Normal Forms: 1NF, 2NF, 3NF",
              "  - Schema Designs: Star, Snowflake",
              "  - CTEs with WITH clause",
              "  - Transactions: BEGIN, COMMIT, ROLLBACK",
              "  - Triggers (BEFORE, AFTER), UDFs",
              "  - Optimization: Composite & Covering Indices, Query Logs",
              "  - Horizontal Partitioning & Scaling (Sharding)",
              "  - ETL with LOAD DATA INFILE",
              "  - The Three Vs: Volume, Velocity, Variety",
            ],
          },
        ],
        tags: ["SQL", "Database", "Querying"],
      },

      {
        title: "Data Wrangling",
        description:
          "Clean, transform, and prepare raw data for analysis and downstream processing.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
          {
            category: "Module 4: Data Wrangling Techniques",
            items: [
              "Transforming and refining raw datasets",
              "",
              "Managing:",
              "  - Incomplete data",
              "  - Duplicate entries",
              "  - Data type adjustments",
              "  - Consistency checks",
              "",
              "Reshaping & Pivoting data",
              "Merging & integrating diverse datasets",
              "Extracting data from JSON, XML, and other unstructured formats",
            ],
          },
        ],
        tags: ["Data Cleaning", "Transformation", "Preprocessing"],
      },
      {
        title: "Cloud Computing",
        description:
          "Leverage cloud platforms for scalable data engineering solutions and infrastructure.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
        ],
        tags: ["AWS", "Azure", "GCP", "Cloud Architecture"],
      },

      {
        title: "Data Visualization in Tableau",
        description:
          "Create compelling visual representations of data to communicate insights effectively.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
          {
            category: "Module 5: Cloud Computing",
            items: [
              "Importance of platforms: Snowflake, Azure, AWS",
              "On-Premise vs. Cloud Platforms",
              "Cloud Storage & Analytics",
              "Introduction to AWS and Azure Cloud Services",
              "Scalable & Efficient Data Engineering on Cloud",
              "",
              "Case Study & Project:",
              "  - Build real-time data pipeline using Azure Cloud",
              "  - Collect, process, and analyze sensor data",
              "  - Trigger alerts based on insights",
            ],
          },
        ],
        tags: ["Tableau", "Visualization", "Business Intelligence"],
      },

      {
        title: "Real-Time Data Streaming",
        description:
          "Build systems for processing and analyzing data as it flows in real-time.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
          {
            category: "Module 6: Data Visualization in Tableau",
            items: [
              "Connecting BI Tools with Data Sources",
              "Importance of Data Visualization",
              "Overview of Tableau and Power BI",
              "Types of Charts & Visualizations",
              "Creating Interactive Dashboards & Reports",
              "",
              "Case Study & Project:",
              "  - Create a dashboard on Tableau/Power BI",
              "  - Display trends using Snowflake-connected data",
              "  - Data Preprocessing & choosing right visualizations",
            ],
          },
        ],
        tags: ["Streaming", "Real-time", "Apache Kafka"],
      },

      {
        title: "Data Pipelines Automation & Scheduling",
        description:
          "Automate data workflows and schedule recurring data processing tasks.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
          {
            category: "Module 7: Real-Time Data Streaming",
            items: [
              "Stream Processing Architecture",
              "Event-Driven Systems & Message Queues",
              "Real-Time Data Ingestion & Publishing",
              "Stateful vs. Stateless Processing",
              "",
              "Components of Real-Time Pipelines:",
              "  - Sources: sensors, social media, databases",
              "  - Processing: stream transformations, aggregations, filtering, windowing",
              "  - Storage: Kafka Topics, real-time DBs",
              "  - Alerts & Downstream Systems",
              "",
              "Tools: Apache Kafka, Apache Spark, Apache Flink, AWS Kinesis",
              "",
              "Case Study & Project:",
              "  - ELT pipeline for real-time analytics",
              "  - Stream data manipulation, processing, monitoring",
            ],
          },
        ],
        tags: ["Automation", "Scheduling", "Apache Airflow"],
      },

      {
        title: "Capstone Projects & Career Mentorship",
        description:
          "Apply your skills to real-world projects and receive guidance for career advancement.",
        subtopics: [
          {
            category: "Understanding",
            items: [
              "Databases, Data Warehouses, Data Lakes, Data Marts",
              "Differences between Structured, Semi-Structured, and Unstructured Data",
            ],
          },
          {
            category: "Change Tracking",
            items: [
              "CDC (Change Data Capture)",
              "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
            ],
          },
          {
            category: "Data Flow",
            items: [
              "Batch Data vs. Stream Data",
              "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
              "MySQL, Python, PySpark",
              "Tools: Talend, Airflow, Kafka",
            ],
          },
          {
            category: "Methodologies",
            items: ["OLAP vs. OLTP – Definitions and Usage"],
          },
          {
            category: "Dimensional Modelling",
            items: ["Importance", "Star Schema vs. Snowflake Schema"],
          },
        ],
        tags: ["Projects", "Mentorship", "Career Development"],
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
    certificationTitle: "DATA ENGINEER",
  };

  return <BootcampComponent {...data} />;
};

export default DataEngineering;
