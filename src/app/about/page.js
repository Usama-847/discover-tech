import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DataScienceLanding = () => {
  const stats = [
    { number: "60%", label: "Alumni Achieved Career Growth" },
    { number: "2,000+", label: "Learning Experiences Created" },
    { number: "10+", label: "Countries Represented" },
    { number: "20+", label: "AI Solutions" },
    { number: "40+", label: "Research Project" },
    { number: "30+", label: "Research Project" },
    { number: "5K+", label: "Worldwide Community" },
  ];

  const teamMembers = [
    { name: "M S Khan", title: "Founder", role: "CEO" },
    {
      name: "Shafqat Mehmood",
      title: "CTO & Director",
      role: "CTO & Director",
    },
    { name: "Zaryab Bhatti", title: "Director", role: "Director" },
    { name: "Ubaid", title: "Web Dev Lead", role: "Web Dev Lead" },
  ];

  const contributors = [
    { name: "Sajjad Akbar", title: "IT and Network Engineer" },
    { name: "Ubaid", title: "Web Dev Lead" },
    { name: "Amir Jabbar", title: "CTO/Co-Founder" },
    { name: "Usama", title: "Next.js Expert" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-gray-100 to-blue-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Empowering Leaders with{" "}
            <span className="text-emerald-500">Data Science and AI Skills</span>{" "}
            for a Data-Driven Future
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            DiscoverTech was founded in 2022. We have trained more than 1000
            individuals and teams around the globe to harness the power of AI
            for more productivity and better results.
          </p>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About</h2>
            <div className="flex justify-center space-x-8 mb-12">
              <div className="w-16 h-16 bg-yellow-200 rounded-full"></div>
              <div className="w-12 h-12 bg-emerald-200 rounded-full mt-4"></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-16">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {member.name}
                </h3>
                <p className="text-blue-200 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Making Every Impression Count Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Making Every{" "}
                <span className="text-emerald-500">Impression Count</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Bridging Global Communities for an Impactful Future
              </p>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="flex space-x-4 overflow-hidden">
                <div className="w-64 h-48 bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex-shrink-0"></div>
                <div className="w-64 h-48 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex-shrink-0"></div>
              </div>

              {/* Navigation Arrows */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Contributors Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-16">
            MEET OUR EXPERT CONTRIBUTORS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributors.map((contributor, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                </div>
                <h3 className="text-gray-800 font-semibold text-lg">
                  {contributor.name}
                </h3>
                <p className="text-gray-600 text-sm">{contributor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataScienceLanding;
