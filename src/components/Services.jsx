import React from 'react';

import Link from 'next/link';
import { AppWrap } from '../wrapper';

const Services = () => {
  return (
    <div
      id="Services"
      className="flex flex-col items-center justify-center mt-14"
    >
      <div className="">
        <h1 className="text-4xl text-center p-4 text-[#00FFFF] ">Hire me!</h1>
      </div>

      <p className="text-lg text-center mt-8 text-white">
        Hire me for professional services to boost your business.
      </p>

      <div className="flex flex-wrap mt-16 justify-center">
        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg p-10 m-4 ">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Web3 Security Technical Writer
          </h2>
          <p className="text-white mt-10">
            I am able to research, analyze and write about any complex topics
            related to Web3. Reach out with your proposal.
          </p>
        </div>

        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg p-10 m-4 ">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Book a Private Audit
          </h2>
          <p className="text-white mt-10">First solo audit with me FOR FREE.</p>
        </div>
      </div>

      <Link
        href={'/services/ServicesPage'}
        className="mt-2 inline-flex items-center px-3 py-2 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg dark:bg-[#00FFFF] dark:hover:bg-blue-300 "
      >
        Go to Services
      </Link>
    </div>
  );
};

export default AppWrap(Services, 'Services');
