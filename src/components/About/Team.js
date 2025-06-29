import Image from "next/image";
import React from "react";

const images = [
  { src: "/images/team/C1.jpeg", span: 1 },
  { src: "/images/team/C2.jpeg", span: 2 },
  { src: "/images/team/C3.jpeg", span: 3 },
  { src: "/images/team/C4.jpeg", span: 2 },
  { src: "/images/team/C5.jpeg", span: 3 },
  { src: "/images/team/C6.jpeg", span: 3 },
  { src: "/images/team/C7.jpeg", span: 1 },
  { src: "/images/team/C8.jpeg", span: 2 },
];

const getColSpan = (span) => {
  switch (span) {
    case 1:
      return "col-span-1";
    case 2:
      return "col-span-2";
    case 3:
      return "col-span-3";
    default:
      return "col-span-1";
  }
};

const TeamGallery = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-center">
          Making Every Impression Count Bridging Global Communities for an
          Impactful Future.
        </h2>

        <div className="grid grid-cols-3 gap-4 auto-rows-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className={`${getColSpan(
                img.span
              )} relative w-full h-96 overflow-hidden rounded-xl shadow`}
            >
              <Image
                src={img.src}
                alt={`Team Member ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
