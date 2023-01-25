import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { AppWrap } from '../wrapper';

const Main = () => {
  return (
    <div id="Home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            Let's learn together
          </p>
          <h1 className="py-4">
            This is the <span className="text-blue-700">Blockchain</span> hub{' '}
          </h1>
          <h2 className="py-2 text-gray-800">Where you will find</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Blockchain concepts explained from the best. All you need to know to
            write Smart Contracts.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            A section with Blockchain/Solidity related Tweets filtered by topic.
            As well as a section with a selection of YouTube videos filtered
            depending on what you are interested to learn.
          </p>
          <div className="flex items-center justify-between max-w-[150px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsTwitter />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Main, 'Home');
