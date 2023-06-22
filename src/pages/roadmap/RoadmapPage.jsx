import React from 'react';

function contentCard(title, description, link) {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700">
      <a href={link} target="_blank" rel="noopener noreferrer" passHref>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-1000">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-900">
        {description}
      </p>
    </div>
  );
}

const RoadmapPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-20 pb-20">
      <section className="mb-14 mt-40">
        <h2 className="text-xxl tracking-widest uppercase text-blue-800 text-center">
          Roadmap
        </h2>
        <p className="mt-4 mb-0 text-lg text-white text-center">
          These articles are written by me.
        </p>{' '}
        <p className="mb-6 text-lg text-white text-center">
          You will find a series of articles guiding you to become an auditor
          starting from zero.
        </p>{' '}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentCard(
            'Learn about SC Auditing from zero! Week 1 — Learning Roadmap',
            'Understand what a Blockchain is. Learn constantly about DeFi. Learn to code in Solidity. Understand the EVM.',
            'https://medium.com/@bloqarl/how-can-i-learn-about-smart-contract-auditing-from-zero-week-1-learning-roadmap-4347785e6f9b?sk=918f4fc9e72ffb1ef8f8890f78ae5ef6'
          )}
          {contentCard(
            'Learn about SC Auditing from zero! Week 2— Mining, Oracles, AMM, dive into EVM',
            'Types of Blockchain, Bitcoin Whitepaper explained. DEX, AMM, Liquidity Pool. How does the EVM work? Solidity lessons',
            'https://medium.com/@bloqarl/how-can-i-learn-about-smart-contract-auditing-from-zero-c49953a11ed3?sk=8aa0ac75bd5ce32fedcb8a0a2589c972'
          )}
          {contentCard(
            'Learn about SC Auditing from zero! Week 3— Proof of Stake, Lending Protocols, Opcodes, Foundry',
            'Bitcoin forks, Proof of Work, Proof of Stake. Lending and Borrowing. Opcodes. EtherJS. Foundry tests',
            'https://medium.com/@bloqarl/learn-about-smart-contract-auditing-from-zero-77faf330dae4?sk=63f40e3a9e736ad45cbcd9eba10477c7'
          )}
          {contentCard(
            'Learn about SC Auditing from zero! Week 4— Blockchain trilemma, Tokens, Mastering Ethereum.',
            'The blockchain trilemma. Uniswap, Coin vs Token, Stablecoins. Ethereum layer 2, Mastering Ethereum. Cryptozombies. Audit a smart contract',
            'https://coinsbench.com/learn-about-smart-contract-auditing-from-zero-eb357ff90b03?sk=83a59e8d1fd9a0b061420fc17817bab1'
          )}
          {contentCard(
            'Learn about SC Auditing from zero! Week 5 — Lightning network, ERC20, NFTs, DAO and Web3 hacks',
            'Lightning network, Polygon. NFTs, ERC-20, DAO. ENS, Mastering Ethereum. Cryptozombies, Creating NFTs, ERC20 & DAO. Arithmetic Overflow, Denial of Service, and Phishing',
            'https://medium.com/coinmonks/learn-about-smart-contract-auditing-from-zero-a5cb47f18f55?sk=89e20b6927576013db1e42480d030cfc'
          )}
          {contentCard(
            'Learn about SC Auditing from zero! Week 6 — UTXOs, Wrapped Tokens, Cryptography, Hacking Solidity',
            'Digital ID, UTXOs, Rollups. Litecoin, Airdrops, Crypto bridge, Ethereum Cryptography basics. Hardhat upgrades, Hardhat DeFi and Aave. Hacking Solidity',
            'https://medium.com/coinmonks/learn-about-sc-auditing-from-zero-week-6-utxos-wrapped-tokens-cryptography-hacking-solidity-6f6f2545ceab?sk=dd0ff7d44b40c881ec111cec84a26a08'
          )}
        </div>
      </section>
      <section>
        <h2 className="text-white text-3xl font-bold mb-4">Other roadmaps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentCard(
            'Title 1',
            'One line description 1',
            'https://example.com/link1'
          )}
          {contentCard(
            'Title 2',
            'One line description 2',
            'https://example.com/link2'
          )}
          {contentCard(
            'Title 3',
            'One line description 3',
            'https://example.com/link3'
          )}
          {contentCard(
            'Title 4',
            'One line description 4',
            'https://example.com/link4'
          )}
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage;
