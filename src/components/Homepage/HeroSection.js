"use client";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function HeroSection({ onStartJourney }) {
  return (
    <div className="relative w-full h-[500px] lg:h-[700px] mb-16">
      {/* Full width Spline background */}
      <div className="absolute inset-0 pointer-events-auto">
        <Spline
          scene="https://prod.spline.design/nhnZ428NKP3ZGr32/scene.splinecode"
          // scene="https://prod.spline.design/5opHLfyPLyobL4Bm/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Left side text content overlaid on background */}
      <div className="relative z-10 flex items-end justify-start h-full px-4 pb-16 pointer-events-none">
        <div className="w-full lg:w-2/5 text-left pointer-events-auto">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-100 my-1.5">
            We’re the{" "}
          </h2>
          <span
            className="text-4xl md:text-6xl font-extrabold text-gray-100"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            {" "}
            Building Blocks
          </span>
          <p
            className="text-xl text-gray-200 mb-8 mt-2"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            Unlock the power of data and AI by learning Python, ChatGPT, SQL,
            Power BI for a Data-Driven Future.
          </p>
          <button
            onClick={onStartJourney}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-600 transition-colors mb-8 shadow-lg hover:cursor-pointer"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
