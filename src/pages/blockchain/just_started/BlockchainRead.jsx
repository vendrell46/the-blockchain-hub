import React from 'react';
import SideBar from 'theblockchainhub/components/SideBar';
import Read from 'theblockchainhub/components/Read';

const BlockchainRead = () => {
  return (
    <div>
      <div id="BlockchainRead" className="w-full pt-40 p-5">
        <SideBar path="just_started" page="BlockchainRead" />
        <div className="max-w-[1240px] mt-10 ml-20 mx-auto flex flex-col justify-center h-full">
          <h1 className=" capitalize tracking-widest text-[#5651e5]">
            Just Started
          </h1>
          <h2 className="py-4">What to learn about?</h2>
          <Read />
        </div>
      </div>
    </div>
  );
};

export default BlockchainRead;
