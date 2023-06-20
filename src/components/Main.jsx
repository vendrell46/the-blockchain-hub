import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppWrap } from '../wrapper';

const Main = () => {
  return (
    <div id="Home" className="w-full h-screen mb-24 bg-black ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center pt-10 pb-20">
        <div className="font-inconsolata">
          <div className="flex flex-col md:flex-row md:space-x-10 mt-40 mb-20">
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Add your avatar image */}
              <div className="rounded-full overflow-hidden w-70 h-70">
                <Image
                  src="/../public/assets/about_me.png"
                  alt="Avatar"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              {/* Add text about yourself */}
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                About Me
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id nunc varius, volutpat est sit amet, elementum tellus. Fusce
                ultrices ultricies lectus, vitae lobortis nunc fermentum eu.
                Pellentesque condimentum sapien non justo efficitur, sit amet
                viverra neque tempus. Vestibulum tempor nunc a lorem feugiat,
                vitae hendrerit elit mattis.
              </p>
            </div>
          </div>

          <div className="text-center bg-gray-100 p-6 mb-6">
            <h2 className="pt-4">
              <span className="text-gray-800">Read articles</span> related to
              Web3 Security
            </h2>
            <h3 className="py-2 text-gray-600 mb-4">
              Go ahead and start navigating through the different topics I write
              about.
            </h3>
            <Link
              href="/#Web3Security"
              className="py-2 mt-4 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
            >
              Start Reading
            </Link>
          </div>
          <div className="bg-gray-100 p-6 mb-6 text-center">
            <h2 className="pt-4 pb-4">
              Book a<span className="text-gray-800"> private audit</span> or a
              <span className="text-gray-800"> consultancy session</span>
            </h2>
            <Link
              href="/services/ServicesPage"
              className="py-2 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
            >
              Contact Me
            </Link>
          </div>
          <div className="bg-gray-100 p-6 mb-6 text-center">
            <h2 className="pt-4 pb-4">
              Take advantage of the full potential of the Web3 Community.
              <span className="text-gray-800"> Check my recommendations</span>
            </h2>
            <Link
              href="/#MyJourney"
              className="py-2 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
            >
              Find out!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Main, 'Home');
