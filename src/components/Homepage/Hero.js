import React from "react";

export default function BuildingBlocksHero() {
  return (
    <div className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
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
        <h2 className="text-4xl lg:text-6xl font-light text-gray-700 leading-tight mb-6">
          We're the
          <br />
          <span className="font-bold text-gray-700">Building Blocks</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-black max-w-2xl">
          Discover Tech is a leading blockchain development & marketing company.
          We empower Web3 startups to turn ideas into reality by building
          scalable, secure solutions including L1/L2 chains, CEXs and DEXs,
          multichain wallets and all kinds of dApps.
        </p>
      </div>
    </div>
  );
}
