import Image from 'next/image';
import React from 'react';

import { AppWrap } from '../wrapper';

function imageField(name, pictureSrc) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={pictureSrc} width={90} height={90} alt="/" />
          <div className="flex flex-col items-center justify-center">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const Blockchain = () => {
  return (
    <div id="Blockchain" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Blockchain
        </p>
        <h2 className="py-4">What to learn about?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {imageField(
            'Blockchain Concepts',
            '/../public/assets/blockchain/blockchain01.png'
          )}
          {imageField(
            'Important Blockchains',
            '/../public/assets/blockchain/blockchain02.png'
          )}
          {imageField(
            'Blockchain Usages',
            '/../public/assets/blockchain/blockchain03.png'
          )}
          {imageField('DeFi', '/../public/assets/blockchain/blockchain04.png')}
          {imageField(
            'Blockchain Concepts',
            '/../public/assets/blockchain/blockchain01.png'
          )}
          {imageField(
            'Important Blockchains',
            '/../public/assets/blockchain/blockchain02.png'
          )}
          {imageField(
            'Blockchain Usages',
            '/../public/assets/blockchain/blockchain03.png'
          )}
          {imageField('DeFi', '/../public/assets/blockchain/blockchain04.png')}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Blockchain, 'Blockchain');
