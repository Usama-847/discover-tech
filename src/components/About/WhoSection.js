import React from "react";

const WhoSection = () => {
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
          src="https://res.cloudinary.com/db9mlt7iq/video/upload/v1750874660/collabvideo_iqsntv_qsbyad.mp4"
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
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight">
                Who We Are?
              </h2>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="p-0 lg:p-0">
            <p className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed">
              We are a team of designers, developers, and strategists who blend
              creativity, technology, and vision to bring bold digital ideas to
              life. Whether it's startups building their first web or mobile
              app, or enterprises integrating AI and machine learning into their
              workflows, Discover Tech crafts tailored solutions that are
              technically robust, creatively sharp, and strategically smart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoSection;
