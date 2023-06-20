import React from 'react';

const RecommendationsPage = () => {
  return (
    <div id="Recommendations" className="w-full h-screen mb-24 bg-black">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center pt-10 pb-20">
        <div className="font-inconsolata">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-40">
            <div className="text-center bg-gray-100 p-6 mb-6">
              <h2 className="pt-4">
                <span className="text-gray-800">Recommendation 1</span>
              </h2>
              <p className="py-2 text-gray-600 mb-4">
                Description for Recommendation 1
              </p>
              <a
                href="#"
                className="py-2 mt-4 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
              >
                Read More
              </a>
            </div>
            <div className="text-center bg-gray-100 p-6 mb-6">
              <h2 className="pt-4">
                <span className="text-gray-800">Recommendation 2</span>
              </h2>
              <p className="py-2 text-gray-600 mb-4">
                Description for Recommendation 2
              </p>
              <a
                href="#"
                className="py-2 mt-4 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
              >
                Read More
              </a>
            </div>
            <div className="text-center bg-gray-100 p-6 mb-6">
              <h2 className="pt-4">
                <span className="text-gray-800">Recommendation 3</span>
              </h2>
              <p className="py-2 text-gray-600 mb-4">
                Description for Recommendation 3
              </p>
              <a
                href="#"
                className="py-2 mt-4 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
              >
                Read More
              </a>
            </div>
            <div className="text-center bg-gray-100 p-6 mb-6">
              <h2 className="pt-4">
                <span className="text-gray-800">Recommendation 4</span>
              </h2>
              <p className="py-2 text-gray-600 mb-4">
                Description for Recommendation 4
              </p>
              <a
                href="#"
                className="py-2 mt-4 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
