import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { src: "/images/partners/p1.png", alt: "Partner 1" },
    { src: "/images/partners/p2.png", alt: "Partner 2" },
    { src: "/images/partners/p3.png", alt: "Partner 3" },
    { src: "/images/partners/p4.jpeg", alt: "Partner 4", rounded: true },
    { src: "/images/partners/p5.jpeg", alt: "Partner 5", rounded: true },
  ];

  return (
    <div className="mb-16">
      <p className="text-xl text-gray-700 mb-6 font-medium text-center">
        Trusted by leading companies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-32">
        {partners.map((partner, index) => (
          <div key={index} className="h-20">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={120}
              className={`object-contain h-full w-auto ${
                partner.rounded ? "rounded-full" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
