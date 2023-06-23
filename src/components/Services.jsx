import React from 'react';

import Link from 'next/link';
import { AppWrap } from '../wrapper';

const Services = () => {
  return (
    <div
      id="Services"
      className="flex flex-col items-center justify-center min-h-screen mb-24"
    >
      <div className="">
        <h1 className="text-4xl text-center p-4 text-[#00FFFF] ">Services</h1>
      </div>

      <p className="text-lg text-center mt-8 text-white">
        Hire me for professional services to boost your business.
      </p>

      <div className="flex flex-wrap mt-16 justify-center">
        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg p-4 m-4 ">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Blockchain Technical Content Writer
          </h2>
          <p className="text-white mt-10">
            This is the description of Service 1. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg p-4 m-4 ">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Book a Private Audit
          </h2>
          <p className="text-white mt-10">
            This is the description of Service 2. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <Link
        href={'/services/ServicesPage'}
        class=" mt-6 inline-flex items-center px-3 py-2 text-md font-medium text-center text-black  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
      >
        Go to Services
      </Link>
    </div>
  );
};

export default AppWrap(Services, 'Services');
