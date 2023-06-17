import React from 'react';
import Link from 'next/link';

const SideBar = (path, page) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-20 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg mt-36"
    >
      <div className="mt-10">
        <ul class="w-20">
          <li>
            <Link href={'/blockchain/just_started/BlockchainRead'}>
              <button
                class="my-5 rounded-3xl shadow-none capitalize text-gray-900 dark:text-white 
                                border-2 w-20 hover:underline bg-gray-700 hover:bg-green-900 hover:rounded-xl"
              >
                Read
              </button>
            </Link>
          </li>
          <li>
            <Link href={'/blockchain/just_started/BlockchainWatch'}>
              <button
                class="my-5 rounded-3xl shadow-none capitalize text-gray-900 dark:text-white 
                                border-2 w-20 hover:underline bg-gray-700 hover:bg-green-900 hover:rounded-xl"
              >
                Watch
              </button>
            </Link>
          </li>
          <li>
            <Link href={'/blockchain/just_started/BlockchainPractice'}>
              <button
                class="my-5 rounded-3xl shadow-none capitalize text-gray-900 dark:text-white 
                                border-2 w-20 hover:underline bg-gray-700 hover:bg-green-900 hover:rounded-xl"
              >
                Practice
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
