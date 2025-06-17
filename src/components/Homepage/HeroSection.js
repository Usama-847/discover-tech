"use client";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});
export default function HeroSection({ onStartJourney }) {
  return (
    <div
      className="relative grid lg:grid-cols-2 gap-12 w-full items-center mb-16 px-4"
      style={{
        background: "linear-gradient(180deg, #000000 65%, #752468 100%)",
      }}
    >
      {/* Spline Background for md and smaller devices */}
      <div className="absolute inset-0 lg:hidden">
        <Spline
          scene="https://prod.spline.design/taOghM6nLvPP22Ko/scene.splinecode"
          className="w-full h-full opacity-30"
        />
      </div>

      {/* Left side - Text content */}
      <div className="relative z-10 text-left py-16 lg:py-0">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Learn <span className="text-green-400">Data Science & AI</span> with
          Global Experts
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Unlock the power of data and AI by learning Python, ChatGPT, SQL,
          Power BI for a Data-Driven Future.
        </p>
        <button
          onClick={onStartJourney}
          className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition-colors mb-8 shadow-lg"
        >
          Start Your Journey
        </button>
      </div>

      {/* Right side - Spline 3D Scene (visible only on lg+ screens) */}
      <div className="relative h-[600px] lg:h-[700px] hidden lg:block">
        <Spline
          scene="https://prod.spline.design/taOghM6nLvPP22Ko/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
