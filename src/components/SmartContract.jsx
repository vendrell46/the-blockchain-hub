import React from 'react';

import { AppWrap } from '../wrapper';

function levelCard(level) {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {level}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}

const SmartContract = () => {
  return (
    <div id="SmartContract" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Smart Contract
        </p>
        <h2 className="py-4">What to learn about?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levelCard('Beginner')}
          {levelCard('Getting to know more')}
          {levelCard('Getting more advanced')}
          {levelCard('Advanced')}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(SmartContract, 'SmartContract');
