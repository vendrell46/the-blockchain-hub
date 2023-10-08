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
            Web3 Security Technical Writer
          </h2>
          <hr className="border-gray-500 my-4" />
          <div>
            <p className="text-white font-bold mt-4">
              <ul className="list-disc ml-6 mt-4 font-normal space-y-4">
                <li>
                  I can write a breakdown article of your DeFi protocol in a way
                  that most developers/auditors will understand, in order to
                  help it be developed further and/or audited.
                </li>
                <li>
                  I can review your newly developed tool/website and write an
                  article for auditors in order to introduce it to the Web3
                  community.
                </li>
                <li>
                  I like writing about anything interesting Blockchain-related.
                  Reach out with your proposal.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <Link
          href="https://twitter.com/TheBlockChainer"
          target="_blank"
          rel="noopener noreferrer"
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
                Audit for small projects. The focus would be on the following
                potential issues:
              </p>
              <ul className="list-disc ml-6 mt-4 text-white font-normal">
                <li>Base package (Informational + Gas Optimization)</li>
                <li>Low severity</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <hr className="md:hidden border-gray-500 my-4" />
              <div className="md:border-l md:border-gray-500 md:pl-4">
                <p className="text-white font-bold uppercase pb-6 text-center">
                  Deep Dive Audit
                </p>
                <p className="text-white font-bold">
                  Audit providing a complete review to identify all potential
                  issues in the codebase. It includes:
                </p>
                <ul className="list-disc ml-6 mt-4 text-white font-normal">
                  <li>Base package (Informational, Gas Opt)</li>
                  <li>Low, Medium and High severity issues</li>
                  <li>Complete report provided</li>
                  <li>Follow up work on feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="https://twitter.com/TheBlockChainer"
          target="_blank"
          rel="noopener noreferrer"
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
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-0 inline-flex items-center px-6 py-1 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
