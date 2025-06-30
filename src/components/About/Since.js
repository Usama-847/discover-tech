import React from "react";

const GoalSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left Side - Title */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl lg:text-6xl font-bold text-center">
            Since 2022
          </h2>
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-1/2 text-lg text-justify leading-7 text-gray-800">
          <p>
            Our journey began with a small, passionate team of four visionaries
            who believed in the transformative power of technology. From these
            humble beginnings, Discover Tech has grown into a powerhouse of over
            100+ talented professionals. Each team member brings unique
            expertise—like building blocks forming a strong, intelligent
            system—contributing to our culture of innovation, resilience, and
            excellence. As pioneers in web, mobile, and AI/ML/LLM solutions, we
            help businesses and creators navigate the evolving digital
            landscape. From intuitive web platforms to intelligent AI-powered
            systems, we build products that drive real-world impact. We take
            pride in being the architects of a smarter, more connected
            future—where every team member plays a vital role in turning bold
            ideas into lasting solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
