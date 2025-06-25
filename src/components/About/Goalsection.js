import React from "react";

const GoalSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side - Title */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl lg:text-6xl font-bold text-center">
            Our Goal
          </h2>
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-1/2 text-lg text-justify leading-7 text-gray-800">
          <p>
            Our mission is to empower businesses, creators, and innovators with
            the tools, technology, and expertise they need to succeed in a
            decentralized world. The digital landscape is evolving, and
            blockchain is at the heart of this transformation. Yet, many
            struggle to navigate its complexities. Quecko bridges this gap by
            delivering secure, scalable, and innovative blockchain solutions
            that drive real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
