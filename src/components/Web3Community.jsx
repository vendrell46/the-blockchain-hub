import React from 'react';

import { AppWrap } from '../wrapper';
import Link from 'next/link';

const Web3Community = () => {
  return (
    <div
      id="Web3Community"
      className="flex flex-col items-center justify-center mt-14"
    >
      <div className="">
        <h1 className="text-4xl text-center p-4 text-[#00FFFF] ">
          Web3 Community
        </h1>
      </div>

      <p className="text-lg text-center mt-8 text-white mx-6">
        Learn, connect with people, stay up to date and work hand by hand with
        others.
      </p>
      <p className="text-lg text-center mt-0 text-white mx-6">
        Make sure you integrate with the community and also take advantage of
        the resources it offers.
      </p>

      <div className="w-full md:w-2/3 bg-black rounded-lg p-6 m-4 shadow-3d mt-6">
        <Link href="/web3community/Web3CommunityPage/">
          <h2 className="list-disc text-xl font-semibold text-white text-left mb-6 border p-1 hover:shadow-md hover:shadow-white">
            <span className="text-[#00FFFF]">Integrate</span> with Discord
            Communities
          </h2>
        </Link>

        <Link href="/web3community/Web3CommunityPage/#Twitter">
          <h2 className="text-xl font-semibold text-white text-left mb-6 border p-1 hover:shadow-md hover:shadow-white">
            <span className="text-[#00FFFF]">Connect and learn</span> from the
            best on Twitter
          </h2>
        </Link>

        <Link href="/web3community/Web3CommunityPage/#Newsletters">
          <h2 className="text-xl font-semibold text-white text-left mb-6 border p-1 hover:shadow-md hover:shadow-white">
            Stay up to date with the most complete{' '}
            <span className="text-[#00FFFF]">Newsletters</span>
          </h2>
        </Link>

        <Link href="/web3community/Web3ComWeb3CommunityPagemunity/#Marketplace">
          <h2 className="text-xl font-semibold text-white text-left mb-6 border p-1 hover:shadow-md hover:shadow-white">
            Be part of a team on the{' '}
            <span className="text-[#00FFFF]">auditor marketplace </span>
            platforms
          </h2>
        </Link>

        <Link href="/web3community/Web3CommunityPage/#Courses">
          <h2 className="text-xl font-semibold text-white text-left mb-6 border p-1 hover:shadow-md hover:shadow-white">
            Find the
            <span className="text-[#00FFFF]"> course</span> that fits you the
            most
          </h2>
        </Link>

        <Link href="/web3community/Web3CommunityPage/#CodeChallenges">
          <h2 className="text-xl font-semibold text-white text-left mb-6 border p-1 hover:shadow-md hover:shadow-white">
            Learn with the most interesting
            <span className="text-[#00FFFF]"> code challenges</span>
          </h2>
        </Link>

        <Link href="/web3community/Web3CommunityPage/#Podcasts">
          <h2 className="text-xl font-semibold text-white text-left mb-6 border p-1 hover:shadow-md hover:shadow-white">
            Stay up to date with amazing
            <span className="text-[#00FFFF]"> podcasts</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default AppWrap(Web3Community, 'Web3Community');
