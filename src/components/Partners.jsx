import React from 'react';
import Link from 'next/link';

const Partners = () => {
  return (
    <div
      id="Partners"
      className="flex flex-col items-center justify-center mt-14"
    >
      <div className="">
        <h1 className="text-4xl text-center p-4 text-[#00FFFF] ">PARTNERS</h1>
      </div>

      <div className="flex flex-wrap mt-16 justify-center mb-40">
        <Link
          href={'https://smartcontractshacking.com/?referral=bloqarl'}
          target="_blank"
          rel="noopener noreferrer"
          passHref
          className="w-full md:w-1/3 bg-gray-200 border border-white rounded-lg p-10 m-4 hover:shadow-lg hover:shadow-[#00FFFF]"
        >
          <h2 className="text-xl font-bold mb-2 text-black">
            Smart Contract Hacking Course
          </h2>
          <p className="text-black mt-10">
            Search no more! If you want to boost your Web3 security skills,
            enroll in the most effective and practical course.
          </p>
        </Link>

        <Link
          href={'https://discord.com/invite/opensense'}
          target="_blank"
          rel="noopener noreferrer"
          passHref
          className="w-full md:w-1/3 bg-gray-200 border border-white rounded-lg p-10 m-4 hover:shadow-lg hover:shadow-[#00FFFF]"
        >
          <h2 className="text-xl font-bold mb-2 text-black">OpenSense</h2>
          <p className="text-black mt-10">
            One of the most active Web3 Sec community. Join their Discord and
            get to interact and audit with some of the best security
            researchers.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Partners;
