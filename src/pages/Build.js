import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[550px] flex items-end justify-center overflow-hidden md:m-5 rounded-2xl">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/db9mlt7iq/video/upload/v1750488171/ratih6wegieqjt1mezp8.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000000] bg-opacity-40 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          {/* Left Side - Main Text */}
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl pl-6 sm:pl-8 lg:pl-10 lg:text-6xl font-bold text-gray-600 leading-tight">
              Let's build a decentralized
              <br />
              world together.
            </h2>
          </div>

          {/* Right Side - Statistics */}
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-gray-900 text-sm sm:text-base lg:text-lg leading-relaxed">
              From a team of four to 100+ Web3 enthusiasts, Quecko has built
              products with a combined market cap of over $500 million and a
              user base of 2 million+. Our projects have been ranked among the
              top 100 on CoinMarketCap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
