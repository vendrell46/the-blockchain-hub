import React from 'react';

import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-3d mb-40">
      <div className="border-3d rounded-lg p-2 m-4 mt-10">
        <h1 className="text-4xl text-center text-[#00FFFF] mt-40">Services</h1>

        <p className="text-lg text-center mt-8 text-white">
          Hire me for professional services.
        </p>
      </div>

      <div className="flex flex-wrap flex-col mt-18 justify-center items-center">
        <div className="w-full md:w-2/3 bg-gray-800 rounded-lg p-14 m-4 ">
          <h2 className="text-xl font-semibold mb-2 text-center text-white">
            Blockchain Technical Content Writer
          </h2>
          <hr className="border-gray-500 my-4" />
          <div>
            <p className="text-white font-bold mt-4">
              You have a small project and would be interested on someone
              checking in order to:
              <ul className="list-disc ml-6 mt-4 font-normal">
                <li>Code review</li>
                <li>Deep Dive Audit</li>
              </ul>
            </p>
          </div>
        </div>
        <Link
          href="https://twitter.com/TheBlockChainer"
          className=" mt-0 inline-flex items-center px-6 py-1 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
        >
          DM me
        </Link>

        <div className="w-full md:w-2/3 bg-gray-800 rounded-lg p-14 m-4">
          <h2 className="text-xl font-semibold mb-2 text-center text-white">
            Book a Private Audit
          </h2>
          <hr className="border-gray-500 my-4" />
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <p className="text-white font-bold uppercase pb-6 text-center">
                Simple Audit
              </p>
              <p className="text-white font-bold">
                You have a small project and would be interested in having
                someone check it in order to:
              </p>
              <ul className="list-disc ml-6 mt-4 text-white font-normal">
                <li>Code review</li>
                <li>Deep Dive Audit</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <hr className="md:hidden border-gray-500 my-4" />
              <div className="md:border-l md:border-gray-500 md:pl-4">
                <p className="text-white font-bold uppercase pb-6 text-center">
                  Deep Dive Audit
                </p>
                <p className="text-white font-bold">
                  Another paragraph for the second column.
                </p>
                <ul className="list-disc ml-6 mt-4 text-white font-normal">
                  <li>Another bullet point</li>
                  <li>Yet another bullet point</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="https://twitter.com/TheBlockChainer"
          className=" mt-0 inline-flex items-center px-6 py-1 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
        >
          DM me
        </Link>

        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg p-14 m-4 mt-6">
          <h2 className="text-xl font-semibold mb-2 text-center text-white">
            Consultancy session
          </h2>
          <hr className="border-gray-500 my-4" />
          <div>
            <p className="text-white font-bold mt-4">
              You have a small project and would be interested on someone
              checking in order to:
              <ul className="list-disc ml-6 mt-4 font-normal">
                <li>Quick feedback chat</li>
                <li>Career guidance</li>
                <li>Consultancy session</li>
              </ul>
            </p>
          </div>
        </div>
        <Link
          href="https://topmate.io/bloqarl"
          className=" mt-0 inline-flex items-center px-6 py-1 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
