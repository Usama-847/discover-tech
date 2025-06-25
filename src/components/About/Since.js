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
            Our story began with a small, passionate team of four visionaries
            who believed in the transformative power of blockchain technology.
            From these humble beginnings, Quecko has grown into a powerhouse of
            over 100+ talented professionals. Each team member represents a
            unique building block, much like the individual blocks in a
            blockchain, contributing to the strength, resilience, and innovation
            of our company. Our commitment to pioneering Web3 solutions has
            enabled us to help businesses navigate the complexities of
            blockchain, creating decentralized applications and software that
            drive progress and innovation. We take pride in our role as the
            architects of a decentralized future, where every block and every
            team member plays a crucial part in building a more connected and
            empowered world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
