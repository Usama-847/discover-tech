import React from "react";
import Image from "next/image";

const Contributors = () => {
  const contributors = [
    {
      name: "Sajjad Akbar",
      title: "IT and Network Engineer",
      image: "/images/contributors/sajjad-akbar.jpg",
    },
    {
      name: "Ubaid",
      title: "Web Dev Lead",
      image: "/images/contributors/ubaid.jpg",
    },
    {
      name: "Amir Jabbar",
      title: "CTO/Co-Founder",
      image: "/images/contributors/amir-jabbar.jpg",
    },
    {
      name: "Usama",
      title: "Next.js Expert",
      image: "/images/contributors/usama.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-16">
          MEET OUR EXPERT CONTRIBUTORS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contributors.map((contributor, index) => (
            <div key={index} className="text-center group">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">
                {/* Placeholder for now - replace with Image component when you add photos */}
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {contributor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/* Uncomment this when you add images */}
                {/* <Image
                  src={contributor.image}
                  alt={contributor.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-1">
                {contributor.name}
              </h3>
              <p className="text-gray-600 text-sm">{contributor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
