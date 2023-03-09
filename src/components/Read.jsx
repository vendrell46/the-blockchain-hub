import React from 'react';
import LevelCard from 'theblockchainhub/components/LevelCard';

const Read = () => {
  return (
    <div id="Read">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <LevelCard
          url="https://docs.soliditylang.org/en/latest/"
          title="Solidity docs"
          description="Solidity is an object-oriented, high-level language for implementing smart contracts. 
              Smart contracts are programs which govern the behaviour of accounts within the Ethereum state."
        />
        <LevelCard
          url="https://docs.soliditylang.org/en/latest/"
          title="Solidity docs"
          description="Solidity is an object-oriented, high-level language for implementing smart contracts. 
              Smart contracts are programs which govern the behaviour of accounts within the Ethereum state."
        />
        <LevelCard
          url="https://docs.soliditylang.org/en/latest/"
          title="Solidity docs"
          description="Solidity is an object-oriented, high-level language for implementing smart contracts. 
              Smart contracts are programs which govern the behaviour of accounts within the Ethereum state."
        />
        <LevelCard
          url="https://docs.soliditylang.org/en/latest/"
          title="Solidity docs"
          description="Solidity is an object-oriented, high-level language for implementing smart contracts. 
              Smart contracts are programs which govern the behaviour of accounts within the Ethereum state."
        />
      </div>
    </div>
  );
};

export default Read;
