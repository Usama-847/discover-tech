import Head from "next/head";
import Image from "next/image";

export default function Solution() {
  const services = [
    {
      title: "Machine Learning",
      icon: "/images/solution/img1.jpg",
      description:
        "Our expert machine learning team empowers businesses to grow by unlocking insights hidden within unstructured data. We help transform complex datasets from diverse sources into strategic, data-driven decisions.",
      gradient: "from-blue-700 to-blue-300",
      bgPattern: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
    },
    {
      title: "Business Intelligence",
      icon: "/images/solution/img2.jpg",
      description:
        "We offer expert BI and Data Warehouse consulting, along with powerful Big Data analytics solutions. Our services help you harness the full potential of your data and establish efficient data management systems to support smarter, faster decision-making.",
      gradient: "from-pink-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-pink-500/20 to-red-500/20",
    },
    {
      title: "Predictive Analytics",
      icon: "/images/solution/img3.jpg",
      description:
        "Our team develops proprietary AI models tailored for personalized recommendations, churn prediction, dynamic pricing, fraud detection, sentiment analysis, and customer segmentation—empowering your business with smarter, data-driven strategies.",
      gradient: "from-cyan-500 to-blue-500",
      bgPattern: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Natural Language Processing",
      icon: "/images/solution/img4.jpg",
      description:
        "We analyze text and audio data from sources like social media and emails to reveal deep audience insights. Our custom NLP solutions help you understand your users better by identifying sentiment, interests, gender, and more.",
      gradient: "from-green-500 to-teal-400",
      bgPattern: "bg-gradient-to-br from-green-500/20 to-teal-400/20",
    },
    {
      title: "Generative AI",
      icon: "/images/solution/img5.jpg",
      description:
        "We help businesses harness the power of ChatGPT to automate workflows, enhance customer service, and accelerate decision-making. Our team offers seamless integration and custom solutions tailored to your specific needs.",
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
      title: "App & Web Development",
      icon: "/images/solution/img6.jpg",
      description:
        "We build custom mobile and app development solutions designed to drive business growth. Our intuitive, user-focused applications enhance customer engagement, streamline operations, improve efficiency, and reduce manual errors through smart automation and seamless user experiences.",
      gradient: "from-indigo-500 to-blue-600",
      bgPattern: "bg-gradient-to-br from-indigo-500/20 to-blue-600/20",
    },
  ];

  return (
    <>
      <Head>
        <title>DiscoverTech AI Services</title>
        <meta
          name="description"
          content="Your Trusted Partner in AI Development"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h1 className="text-4xl font-semibold mb-4">
          Your Trusted Partner in AI Development
        </h1>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Our Expertise
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-12">
          As an AI development company, we always keep track of emerging
          technologies and have developed our proprietary models and tools to
          deliver benefits to our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-64 cursor-pointer"
            >
              {/* Background Image - Always visible */}
              <div className="absolute inset-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay - visible by default, becomes darker on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
                {/* Dark overlay for better text readability on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
              </div>

              {/* Decorative elements - visible by default, hidden on hover */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full group-hover:opacity-0 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full group-hover:opacity-0 transition-all duration-500"></div>

              {/* Title - Always visible at bottom, hidden on hover */}
              <div className="absolute bottom-6 left-6 right-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Hover Content - Text Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-30">
                <h3 className="text-white font-bold text-xl mb-4 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-white/95 text-sm leading-relaxed drop-shadow-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Can Help You Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-6">
          How We Can Help You
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-12">
          We welcome collaboration with teams on projects of any complexity.
          Together, we'll create innovative systems, solutions, and products
          that give you a competitive edge.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "AI/ML Strategy & Consulting",
              desc: "Have an AI project idea but unsure where to start? Our experts provide strategic consulting to help you avoid common pitfalls and set your project up for success.",
            },
            {
              title: "PoC of AI-based Solution",
              desc: "A PoC is a crucial step before full AI adoption. Our data science consultants will validate your idea's potential to ensure it's worth pursuing.",
            },
            {
              title: "MVP of AI-based Product",
              desc: "Looking for a breakthrough? As product lifecycle MVPs with essential features to engage early users and gather valuable feedback for ongoing improvement.",
            },
            {
              title: "Custom Model Development",
              desc: "We build and train tailored AI models to meet your unique business requirements or optimize and retrain your existing models—whether open-source or proprietary—for enhanced performance and scalability.",
            },
            {
              title: "AI Software Development",
              desc: "Whether starting a new AI-powered web application or enhancing your current system with AI capabilities, our development team is here to bring your vision to life.",
            },
            {
              title: "Business Data Analytics",
              desc: "Improve decision-making with comprehensive analytics services, including regression analysis, time series forecasting, classification, and anomaly detection.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Turn Your Vision into a Market-Ready Solution
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-12">
          Our user-focused MVP development process lays a strong foundation,
          ensuring your product is ready for the market before full-scale
          development begins.
        </p>
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1 bg-gray-300 w-1 h-full"></div>
          {[
            "Planning",
            "Designing",
            "Defining",
            "Building",
            "Testing",
            "Deployment",
            "Maintenance",
          ].map((step, idx) => (
            <div key={step} className="flex items-start mb-10 w-full">
              <div className="w-1/2 pr-4 text-right">
                {idx % 2 === 0 && (
                  <div className="inline-block bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-1">{step}</h4>
                    <p className="text-sm text-gray-600">
                      Description for {step} phase.
                    </p>
                  </div>
                )}
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mx-4 mt-1">
                {idx + 1}
              </div>
              <div className="w-1/2 pl-4 text-left">
                {idx % 2 !== 0 && (
                  <div className="inline-block bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-1">{step}</h4>
                    <p className="text-sm text-gray-600">
                      Description for {step} phase.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Technology",
            "Retail & Fashion",
            "E-commerce",
            "FinTech",
            "Logistics",
            "Healthcare",
            "Education",
            "Real Estate",
          ].map((industry) => (
            <div
              key={industry}
              className="flex flex-col items-center justify-center border border-white rounded-lg p-6 hover:bg-white hover:text-blue-900 transition"
            >
              {/* Placeholder icon */}
              <div className="mb-2">
                <svg className="w-6 h-6" fill="currentColor">
                  <rect width="24" height="24" />
                </svg>
              </div>
              <span className="font-medium text-sm text-center">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          What Makes us Unique
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-12">
          Our artificial intelligence developers build beneficial products and
          software solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Top-Notch Team",
              desc: "With years of experience, our AI software engineers excel at delivering innovative, AI-powered solutions across industries.",
            },
            {
              title: "Strong Technical Expertise",
              desc: "We bring deep knowledge in custom AI application development and software design tailored to diverse business domains.",
            },
            {
              title: "Reliable Technology Partner",
              desc: "We ensure transparency throughout the AI development process and maintain clear, consistent communication at every stage.",
            },
            {
              title: "Flexible Collaboration",
              desc: "Our adaptive cooperation terms are designed to perfectly align with your project's specific needs and objectives.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
