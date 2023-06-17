import React from 'react';
import SideBar from 'theblockchainhub/components/SideBar';
import Watch from 'theblockchainhub/components/Watch';

const BlockchainWatch = () => {
  return (
    <div>
      <div id="BlockchainWatch" className="w-full pt-40 p-5">
        <SideBar path="just_started" page="BlockchainWatch" />
        <div className="max-w-[1240px] mt-10 ml-20 mx-auto flex flex-col justify-center h-full">
          <h1 className=" capitalize tracking-widest text-[#5651e5]">
            Just Started
          </h1>
          <h2 className="py-4">What to watch?</h2>
          <Watch />
        </div>
      </div>
    </div>
  );
};

export default BlockchainWatch;
