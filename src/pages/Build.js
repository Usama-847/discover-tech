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
      <div className="relative z-20 max-w-7xl mx-auto w-full min-h-screen flex items-end mb-5 px-6 sm:px-8 lg:px-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          {/* Left Side - Main Text */}
          <div className="relative min-h-screen">
            {/* Text Positioned Bottom-Left */}
            <div className="absolute bottom-0 left-1 z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
                Let's build a decentralized
                <br />
                world together.
              </h2>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="p-0 lg:p-0">
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
