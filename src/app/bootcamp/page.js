import Head from "next/head";
import Link from "next/link";

export default function Bootcamp() {
  const bootcamps = [
    {
      id: "web-development",
      title: "Full Stack Web Development",
      duration: "24 weeks",
      level: "Beginner to Advanced",
      description:
        "Master modern web development with React, Node.js, and database technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      price: "$12,999",
      nextStart: "March 15, 2025",
    },
    {
      id: "data-science",
      title: "Data Science & Machine Learning",
      duration: "20 weeks",
      level: "Intermediate",
      description:
        "Become a data scientist with Python, machine learning, and AI technologies.",
      technologies: [
        "Python",
        "Pandas",
        "TensorFlow",
        "Scikit-learn",
        "Jupyter",
      ],
      price: "$14,999",
      nextStart: "April 1, 2025",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Analytics",
      duration: "16 weeks",
      level: "Beginner",
      description:
        "Learn comprehensive digital marketing strategies and analytics.",
      technologies: [
        "Google Analytics",
        "Facebook Ads",
        "SEO",
        "Content Marketing",
        "Email Marketing",
      ],
      price: "$8,999",
      nextStart: "March 22, 2025",
    },
  ];

  return (
    <div>
      <Head>
        <title>Bootcamps - Your Company</title>
        <meta
          name="description"
          content="Explore our intensive bootcamp programs"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Bootcamp Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intensive, career-focused programs designed to take you from
            beginner to job-ready professional in months, not years.
          </p>
        </div>

        {/* Bootcamp Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
          {bootcamps.map((bootcamp) => (
            <div
              key={bootcamp.id}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1 mb-6 lg:mb-0 lg:pr-8">
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 mr-4">
                      {bootcamp.title}
                    </h2>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {bootcamp.level}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{bootcamp.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Duration
                      </h4>
                      <p className="text-gray-600">{bootcamp.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Next Start Date
                      </h4>
                      <p className="text-gray-600">{bootcamp.nextStart}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Technologies You'll Learn
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {bootcamp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:text-right">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-600">
                      {bootcamp.price}
                    </span>
                    <p className="text-gray-500 text-sm">
                      Payment plans available
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href={`/bootcamp/${bootcamp.id}`}
                      className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    <button className="block w-full border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Bootcamps */}
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Bootcamps?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Job Guarantee
              </h3>
              <p className="text-gray-600 text-sm">
                Get hired within 6 months or get your money back.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Mentors
              </h3>
              <p className="text-gray-600 text-sm">
                Learn from industry professionals with real-world experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Build a portfolio with real-world projects and case studies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Career Support
              </h3>
              <p className="text-gray-600 text-sm">
                Lifetime career support including resume help and interview
                prep.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
