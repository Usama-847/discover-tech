import React from "react";
import Image from "next/image";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "M S Khan",
      title: "Founder",
      role: "CEO",
      image: "/images/team/ms-khan.jpg", // Add your image path here
    },
    {
      name: "Shafqat Mehmood",
      title: "CTO & Director",
      role: "CTO & Director",
      image: "/images/team/shafqat-mehmood.jpg",
    },
    {
      name: "Zaryab Bhatti",
      title: "Director",
      role: "Director",
      image: "/images/team/zaryab-bhatti.jpg",
    },
    {
      name: "Ubaid",
      title: "Web Dev Lead",
      role: "Web Dev Lead",
      image: "/images/team/ubaid.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-16">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                {/* Placeholder for now - replace with Image component when you add photos */}
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/* Uncomment this when you add images */}
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-blue-200 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
