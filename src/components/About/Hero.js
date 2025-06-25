import React from "react";

function Hero() {
  return (
    <div className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 right-[-30%] z-[99] h-[120vh] object-cover object-center rotate-[17deg] opacity-40 scale-[1.3] flex-shrink-0"
      >
        <source
          src="https://res.cloudinary.com/db9mlt7iq/video/upload/v1750488174/kpyuxf2n8lc84mzfebbx.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#ffffff37] bg-opacity-20 z-10"></div>

      {/* Content */}
      <div className="absolute bottom-24 left-1.5 md:left-6 z-20 max-w-4xl px-4 sm:px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6">
          About Us
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-black max-w-2xl">
          At Discover Tech, we don’t just provide solutions; we build them.
          We’re actively involved in creating the foundation for a decentralized
          future, one block at a time.
        </p>
      </div>
    </div>
  );
}

export default Hero;
