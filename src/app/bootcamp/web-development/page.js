import Head from "next/head";

export default function WebDevelopment() {
  return (
    <div>
      <Head>
        <title>Web Development Bootcamp - Your Company</title>
        <meta
          name="description"
          content="Full Stack Web Development Bootcamp"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Full Stack <span className="text-green-600">Web Development</span>{" "}
            Bootcamp
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform into a full-stack developer in 24 weeks. Learn modern web
            technologies and build real-world applications that employers want
            to see.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Program Overview
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  <strong>Duration:</strong> 24 weeks (6 months)
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  <strong>Schedule:</strong> Monday to Friday, 6-9 PM
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  <strong>Format:</strong> Live online classes + hands-on
                  projects
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  <strong>Class Size:</strong> Maximum 20 students
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  <strong>Prerequisites:</strong> Basic computer skills, no
                  coding experience required
                </span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What You'll Build
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• E-commerce website with payment integration</li>
                <li>• Social media dashboard with real-time updates</li>
                <li>• Task management application</li>
                <li>• Portfolio website showcasing your projects</li>
                <li>• Full-stack web application as capstone project</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Curriculum Breakdown
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Weeks 1-6: Frontend Fundamentals
                </h3>
                <p className="text-gray-600 mb-2">
                  HTML5, CSS3, JavaScript ES6+, Responsive Design, Git & GitHub
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    HTML
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    JavaScript
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Weeks 7-12: React Development
                </h3>
                <p className="text-gray-600 mb-2">
                  React.js, Components, State Management, Hooks, Context API
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    React
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    Redux
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    Next.js
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Weeks 13-18: Backend Development
                </h3>
                <p className="text-gray-600 mb-2">
                  Node.js, Express.js, MongoDB, RESTful APIs, Authentication
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    Node.js
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    Express
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    MongoDB
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Weeks 19-24: Full Stack Integration
                </h3>
                <p className="text-gray-600 mb-2">
                  Deployment, Testing, DevOps, Capstone Project
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                    AWS
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                    Docker
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                    Jest
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing and Enrollment */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <span className="text-4xl font-bold text-green-600">$12,999</span>
              <p className="text-gray-600">Full program tuition</p>
              <p className="text-sm text-gray-500 mt-2">
                Payment plans available starting at $542/month
              </p>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors">
                Apply Now
              </button>
              <button className="w-full border border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-50 transition-colors">
                Schedule Info Session
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Next cohort starts March 15, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
