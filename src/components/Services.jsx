import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-24">
      <h1 className="text-4xl text-center pt-40">Services</h1>

      <p className="text-lg text-center mt-8">
        Hire me for professional services to boost your business.
      </p>

      <div className="flex flex-wrap mt-16 justify-center">
        <div className="w-full md:w-1/3 bg-gray-300 rounded-lg p-4 m-4 hover:bg-gray-400">
          <h2 className="text-xl font-semibold mb-2">Service 1</h2>
          <p className="text-gray-700">
            This is the description of Service 1. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
            Learn More
          </button>
        </div>

        <div className="w-full md:w-1/3 bg-gray-300 rounded-lg p-4 m-4 hover:bg-gray-400">
          <h2 className="text-xl font-semibold mb-2">Service 2</h2>
          <p className="text-gray-700">
            This is the description of Service 2. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
            Learn More
          </button>
        </div>

        <div className="w-full md:w-1/3 bg-gray-300 rounded-lg p-4 m-4 hover:bg-gray-400">
          <h2 className="text-xl font-semibold mb-2">Service 3</h2>
          <p className="text-gray-700">
            This is the description of Service 3. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
