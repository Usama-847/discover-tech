import Head from "next/head";

export default function DataScience() {
  return (
    <div>
      <Head>
        <title>Data Science Bootcamp - Your Company</title>
        <meta
          name="description"
          content="Data Science & Machine Learning Bootcamp"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Data Science &{" "}
            <span className="text-green-600">Machine Learning</span> Bootcamp
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master data science, machine learning, and AI in 20 weeks. Learn to
            extract insights from data and build predictive models that drive
            business decisions.
          </p>
        </div>

        {/* Program Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Program Highlights
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Python Programming Mastery
                  </h3>
                  <p className="text-gray-600">
                    Learn Python from scratch, including data structures,
                    algorithms, and object-oriented programming.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Data Analysis & Visualization
                  </h3>
                  <p className="text-gray-600">
                    Master pandas, NumPy, Matplotlib, and Seaborn for data
                    manipulation and visualization.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Machine Learning Algorithms
                  </h3>
                  <p className="text-gray-600">
                    Implement supervised and unsupervised learning algorithms
                    using scikit-learn and TensorFlow.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Deep Learning & Neural Networks
                  </h3>
                  <p className="text-gray-600">
                    Build and train neural networks for image recognition, NLP,
                    and predictive modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Course Structure
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Duration</span>
                  <span className="text-gray-600">20 weeks</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Schedule</span>
                  <span className="text-gray-600">
                    Tue/Thu 7-10 PM + Saturday 10-2 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">
                    Prerequisites
                  </span>
                  <span className="text-gray-600">Basic math & statistics</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Projects</span>
                  <span className="text-gray-600">4 major projects</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">
                    Certification
                  </span>
                  <span className="text-gray-600">
                    Industry-recognized certificate
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Career Outcomes
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    $95K
                  </div>
                  <div className="text-sm text-gray-600">
                    Average starting salary
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    92%
                  </div>
                  <div className="text-sm text-gray-600">
                    Job placement rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technologies You'll Master
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Python</h3>
              <p className="text-gray-600 text-sm">
                Core programming language for data science
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Pandas & NumPy
              </h3>
              <p className="text-gray-600 text-sm">
                Data manipulation and numerical computing
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">TensorFlow</h3>
              <p className="text-gray-600 text-sm">
                Deep learning and neural networks
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Scikit-learn</h3>
              <p className="text-gray-600 text-sm">
                Machine learning algorithms and tools
              </p>
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Launch Your Data Science Career
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the next generation of data scientists and unlock high-paying
            opportunities in the fastest-growing field in tech.
          </p>
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <span className="text-4xl font-bold text-green-400">$14,999</span>
              <p className="text-gray-300">Complete program</p>
              <p className="text-sm text-gray-400 mt-2">
                Flexible payment options available
              </p>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors">
                Enroll Today
              </button>
              <button className="w-full border border-green-400 text-green-400 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-400 hover:text-gray-900 transition-colors">
                Download Curriculum
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Next cohort starts April 1, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
