import React, { useEffect } from 'react';

const Donation: React.FC = () => {
  useEffect(() => {
    // Ensure the climate clock script is loaded
    const script = document.createElement('script');
    script.src = 'https://climateclock.world/widget-v1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-8">Support Our Mission</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your donation helps us protect the environment and create a sustainable future.
          </p>
        </div>

        {/* Climate Clock Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Climate Clock</h2>
          <div className="flex justify-center">
            <div dangerouslySetInnerHTML={{ __html: '<climate-clock></climate-clock>' }} />
          </div>
        </div>

        {/* Donation Form */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Donation Amount
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Donate Now
            </button>
          </form>
        </div>

        {/* Impact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-green-600">Tree Planting</h3>
              <p className="mt-2 text-gray-600">Help us plant trees and restore forests</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-green-600">Clean Energy</h3>
              <p className="mt-2 text-gray-600">Support renewable energy projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-green-600">Education</h3>
              <p className="mt-2 text-gray-600">Fund environmental education programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation; 