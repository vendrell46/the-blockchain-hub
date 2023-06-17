import React from 'react';

import { AppWrap } from '../wrapper';
import Link from 'next/link';

function contentCard(level, path, page) {
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
      <Link
        href={'/blockchain/' + path + '/' + page}
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Start
      </Link>
    </div>
  );
}

const Blockchain = () => {
  return (
    <div id="Blockchain" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Blockchain
        </p>
        <h2 className="py-4">What to learn about?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentCard('Just started', 'just_started', 'BlockchainRead')}
          {contentCard('Getting to know more', 'know_more', 'BlockchainMore')}
          {contentCard(
            'Getting more advanced',
            'more_advanced',
            'BlockchainMoreAdvanced'
          )}
          {contentCard('Advanced', 'advanced', 'BlockchainAdvanced')}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Blockchain, 'Blockchain');
