import React from 'react';
import { BsTwitter, BsMedium } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

import { AppWrap } from '../wrapper';

const Main = () => {
  return (
    <div id="Home" className="w-full h-screen ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center pt-40 pb-20">
        <div>
          <div className="text-center bg-blue-100  p-6 mb-6">
            <h2 className="pt-4">
              <span className="text-blue-700">Read articles</span> related to
              Web3 Security
            </h2>
            <h3 className="py-2 text-gray-800">
              Go ahead and start navigating through the different topics I write
              about.
            </h3>
            <a
              href="/#Web3Security"
              class="py-1 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800  p-2"
            >
              Start Reading
            </a>
          </div>
          <div className="bg-violet-200  p-6 mb-6">
            <h2 className="pt-4 pb-4">
              Book a<span className="text-violet-900"> Private Audit</span>
            </h2>

            <a
              href="/#MyJourney"
              class="py-1 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800  p-2"
            >
              Contact Me
            </a>
          </div>
          <div className="bg-orange-100  p-6 mb-6">
            <h2 className="pt-4">
              Need guidance to{' '}
              <span className="text-orange-700">become an auditor</span>? I can
              help you.
            </h2>
            <h3 className="py-2 text-gray-800">
              Go ahead and start navigating through the different topics I write
              about.
            </h3>
            <a
              href="/#MyJourney"
              class="py-1 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800  p-2"
            >
              Book a guidance session
            </a>
          </div>

          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Blockchain concepts explained from the best. All you need to know to
            write Smart Contracts.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            A section with Blockchain/Solidity related Tweets filtered by topic.
            As well as a section with a selection of YouTube videos filtered
            depending on what you are interested to learn.
          </p> */}
          {/* <div className="flex items-center justify-between max-w-[260px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsTwitter />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsMedium />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Main, 'Home');
