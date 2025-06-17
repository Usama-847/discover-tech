export default function FlagshipTrainingsSection({ onStartJourney }) {
  const trainings = [
    {
      title: "MERN Stack Bootcamp",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500 to-pink-500",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: [
        "Duration: 3 Months",
        "Days: Tues, Thurs, Sat",
        "This program offers hands-on experience in Data Engineering, you will delve into designing data architectures.",
      ],
    },
    {
      title: "React Native",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500 to-cyan-500",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        "Learn to build an ML model for predictive analytics",
        "3+ Industry-based projects",
        "The best choice for tech, HR, finance, supply chain, marketing, strategy, and Business Professionals",
      ],
    },
    {
      title: "Airline Ticketing",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500 to-teal-500",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      features: [
        "Learn to analyze, predict, and forecast data with AI",
        "5+ Industry-based projects",
        "The best choice for tech, HR, finance, supply chain, marketing, strategy, and Business Professionals",
      ],
    },
    {
      title: "Digital Marketing",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-500 to-red-500",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        "Learn to analyze, predict, and forecast data with AI",
        "5+ Industry-based projects",
        "The best choice for tech, HR, finance, supply chain, marketing, strategy, and Business Professionals",
      ],
    },
  ];

  return (
    <div
      className="relative py-20 px-4 mb-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Browse Our Flagship Trainings
        </h2>

        {/* Training Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trainings.map((training, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${training.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300`}
              ></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${training.bgGradient} rounded-lg flex items-center justify-center mb-3`}
                  >
                    {training.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {training.title}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  {training.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-${
                        featureIndex === training.features.length - 1
                          ? "start"
                          : "center"
                      } text-gray-300`}
                    >
                      <svg
                        className={`w-4 h-4 mr-2 ${
                          featureIndex === training.features.length - 1
                            ? "mt-0.5 flex-shrink-0"
                            : ""
                        } text-green-400`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Courses Button */}
        <div className="text-center">
          <button
            onClick={onStartJourney}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            BROWSE ALL COURSES
          </button>
        </div>
      </div>
    </div>
  );
}
