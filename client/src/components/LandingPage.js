import React from "react";

const LandingPage = () => {
  return (
    <div>
    

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SubBuddy</h1>
          <p className="text-lg mb-8">
            Effortlessly manage and share your subscriptions with friends and
            family. Take control of your subscriptions today.
          </p>
          <a
            href="/signup"
            className="bg-white text-green-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            Get Started for Free
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Why Choose SubBuddy?
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c1.993 0 3.627-1.79 3.912-4.03a5.975 5.975 0 00-7.824 0A4.99 4.99 0 0112 8z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 21v-3a4 4 0 014-4h0a4 4 0 014 4v3M7 7h.01M17 7h.01"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Shared Access
                </h3>
                <p className="text-gray-600">
                  Seamlessly share your subscriptions with friends and family
                  while keeping everything organized.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v11.494M15.75 12H8.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Save Money
                </h3>
                <p className="text-gray-600">
                  Cut costs by splitting subscription fees. SubBuddy helps you
                  make the most out of your subscriptions.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c1.993 0 3.627-1.79 3.912-4.03a5.975 5.975 0 00-7.824 0A4.99 4.99 0 0112 8z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 21v-3a4 4 0 014-4h0a4 4 0 014 4v3M7 7h.01M17 7h.01"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Secure Management
                </h3>
                <p className="text-gray-600">
                  Manage your subscriptions with confidence. Our platform
                  ensures your data is secure and easily accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 SubBuddy. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="text-gray-400 hover:underline">
              Privacy Policy
            </a>{" "}
            |
            <a href="/terms" className="text-gray-400 hover:underline ml-2">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
