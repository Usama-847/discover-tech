export default function EmpoweringLeaders() {
  const features = [
    {
      title: "Hands-on Learning",
      description:
        "Master AI and data skills through project-based training, so you can confidently apply them in your industry",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "1-on-1 Mentorship",
      description:
        "Receive guidance from experienced industry experts to gain essential skills and future-proof your career confidently.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Profile Building",
      description:
        "Strong focus on personal branding to showcase your skills to community, helping you stand out as a job-ready candidate.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ];

  const companies = [
    { name: "S&P Global", color: "text-black" },
    { name: "cisco", color: "text-blue-600" },
    { name: "Nestlé", color: "text-red-600" },
    { name: "telenor", color: "text-gray-800" },
    { name: "etisalat", color: "text-gray-500" },
    { name: "amazon", color: "text-orange-600" },
    { name: "citibank", color: "text-blue-700" },
    { name: "PEPSICO", color: "text-red-600" },
    { name: "LCI", color: "text-black" },
    { name: "HBL", color: "text-gray-700" },
    { name: "DataYard", color: "text-blue-600" },
  ];

  return (
    <div className="mb-20 px-4">
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-12:hover {
          transform: rotateY(12deg) scale(1.05);
        }
      `}</style>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
        Empowering Leaders through{" "}
        <span className="text-green-500">AI & Data Science</span>
      </h2>

      {/* 3D Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <div key={index} className="group perspective-1000">
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-y-12 preserve-3d border-l-4 border-green-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Success Story Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our Trainees are shaping the future as{" "}
          <span className="text-green-500">AI and Data</span> leaders in top
          global companies.
        </h3>
      </div>

      {/* Company Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-20 flex items-center justify-center"
          >
            <span className={`font-bold text-xl ${company.color}`}>
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
