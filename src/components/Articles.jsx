import React from 'react';

import { AppWrap } from '../wrapper';
import Link from 'next/link';

function contentCard(title, description, link, tag) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700 relative">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-1000">
          {title}
        </h5>
      </a>
      <p className="mb-8 font-normal text-gray-700 dark:text-gray-900">
        {description}
      </p>
      {/* <span className="absolute bottom-4 right-4 inline-block px-2 py-1 text-sm font-semibold text-black bg-white rounded-md">
        {tag}
      </span> */}
    </div>
  );
}

const Articles = () => {
  return (
    <div id="Articles" className="w-full min-h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="font-inconsolata">
          <h2 className="text-xxl tracking-widest uppercase text-[#00FFFF] font-inconsolata-bold text-center pt-40">
            Articles
          </h2>
          <h2 className="text-xxl tracking-widest capitalize text-white font-inconsolata-bold mt-20">
            My Journey
          </h2>
          <p className="py-4 text-lg text-white">
            Check out the articles connected with my journey through learning
            about Blockchain and Web3 Security
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentCard(
              'How do you even start learning about Blockchain?',
              'This is how I started to learn about Blockchain. I will tell you about my background and which were my first steps.',
              'https://medium.com/@bloqarl/how-do-you-even-start-learning-about-blockchain-870ee5505010?sk=e2e091e4c1ab0d76ad841020f47cd99b'
              // 'Journey'
            )}
            {contentCard(
              'Journey to build the best dApp: I’ve got an idea, now what?',
              'I would like to contribute to Web3 space by creating a dApp. Here are the first steps I took.',
              'https://medium.com/@bloqarl/journey-to-build-the-best-dapp-1-ive-got-an-idea-now-what-2336a71148a4?sk=935c4437b514604578b749eeed4cf993'
              // 'Journey'
            )}
            {contentCard(
              'New in Blockchain? Don’t start from learning Solidity. Learn first about DeFi',
              'Beginning in Web3 is complicated, there are lots of material and you want to get quickly to master. Here is how to properly start.',
              'https://medium.com/@bloqarl/new-in-blockchain-dont-start-from-learning-solidity-learn-first-about-defi-a1c9822a2427?sk=b5af621d5c7cbb9daa9377ba203fe780'
              // 'Journey'
            )}
            {contentCard(
              'Why have I decided to pay for a Smart Contract Hacking course?',
              'There was a moment where I saw a big opportunity to boost my learning speed by joining the Smart Contract Hacking course. Learn why I took this decision',
              'https://medium.com/@bloqarl/why-have-i-decided-to-pay-for-a-smart-contract-hacking-course-ed8b1ce449c8?sk=8cbc50e3bb9e7dce37d3858d78a206db'
              // 'Journey'
            )}
          </div>
          <Link
            href={'/myJourney/MyJourneyPage'}
            className=" mt-6 inline-flex items-center px-3 py-2 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
          >
            Read more articles
          </Link>

          <h2 className="text-xxl tracking-widest capitalize text-white font-inconsolata-bold mt-20">
            Smart Contract
          </h2>
          <div>
            <p className="py-4 text-lg text-white">
              Check out the articles connected with Solidity, Ethereum and more.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentCard(
                'Ethereum latest news #1: ConsenSys zkEVM | Polygon zk ID — What are Zero-Knowledge proofs?',
                'Let’s use the latest news to introduce and learn new concepts and at the same time stay up to date.',
                'https://medium.com/coinmonks/hardhat-1-deploying-smart-contracts-f35af00726d9?sk=db580c713c04ccf656023b86a3a15035'
              )}
              {contentCard(
                'Solidity Gas Optimization: Understanding how EVM works can save you gas.',
                'I want to focus more on how understanding the Ethereum Virtual Machine can effectively save you gas costs on your smart contracts.',
                'https://medium.com/@bloqarl/solidity-gas-optimization-1-understanding-how-evm-works-can-save-you-gas-44c87011b295?sk=04fb24367a4545be2cd387c5a7b496ec'
              )}
              {contentCard(
                'Solidity Gas Optimization tips with assembly you haven’t heard yet!',
                'When it comes to writing efficient and cost-effective smart contracts on the Ethereum blockchain, every little bit of gas savings counts. One way to optimize gas usage is by using assembly.',
                'https://medium.com/@bloqarl/solidity-gas-optimization-tips-with-assembly-you-havent-heard-yet-1381c77ff078?sk=60145cae2d640e4d7ac584dcdd92570b'
              )}
              {contentCard(
                'Start using Foundry in your audits. Follow this guide.',
                'Foundry is fundamental for testing smart contracts during your audits. Here is a guide I gathered for you starting from zero up to prepare your setup for the audit.',
                'https://medium.com/@bloqarl/ripped-jesus-from-foundry-exists-start-using-foundry-in-your-audits-follow-his-guide-eab417db1a51?sk=13b8aee0f5384be6cc06a01ddba090d8'
              )}
            </div>
            <Link
              href={'/smartContract/SmartContractPage'}
              className=" mt-6 inline-flex items-center px-3 py-2 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
            >
              Read more articles
            </Link>
          </div>

          <h2 className="text-xxl tracking-widest capitalize text-white font-inconsolata-bold mt-20">
            Web3 Security
          </h2>
          <div>
            <p className="py-4 text-lg text-white">
              Check out my articles related to Web3 Security.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentCard(
                'What is a Reentrancy attack? — Let’s understand them and prevent them.',
                'I am going to help you understand in a simple way what is a reentrancy attack and how you can prevent it. I`ll dive deeper in code examples in order to show where are the vulnerabilities.',
                'https://medium.com/@bloqarl/solidity-vulnerabilities-1-reentrancy-attacks-lets-understand-them-and-prevent-them-f6db8dc604de?sk=c27de6883dcc6a94349fed90102914c3'
              )}
              {contentCard(
                'Auditing a project in Code4rena: Find out how the very first steps look like.',
                ' I’d like to share with you how the very first steps look like. Follow this article to get started in your first audit. This will make sure you success from the start.',
                'https://coinsbench.com/auditing-a-project-in-code4rena-find-out-how-the-very-first-steps-look-like-694ed907564e?sk=835fb3a16123e255038a05ccf6093b5a'
              )}
              {contentCard(
                'My contest Audit results are 4 Highs, 7 Mediums… do you see this a lot?',
                'How do these people find so many issues on the audit contests? Do you know what is it that you are not doing to achieve those results? I`ll tell you what I`ve noticed',
                'https://medium.com/@bloqarl/my-contest-audit-results-are-4-highs-7-mediums-do-you-see-this-a-lot-6eeb40016cab?sk=f1cc80129c14b7e91592d60efcf8fbde'
              )}
              {contentCard(
                'Learn attack vectors and explore H/M severity issues. Over/Underflow',
                'I have gathered an explanation for a very popular vulnerability in Solidity, a few high and medium issues that are not a one-time thing but that you will potentially find in other protocols during your next audits.',
                'https://medium.com/coinmonks/learn-attack-vectors-and-explore-h-m-severity-issues-over-underflow-e331aa41d97b?sk=ca0b10daa52776d21dda296b11b40ad8'
              )}
            </div>
            <Link
              href={'/web3security/Web3SecurityPage'}
              className=" mt-6 inline-flex items-center px-3 py-2 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
            >
              Read more articles
            </Link>
          </div>

          <h2 className="text-xxl tracking-widest capitalize text-white font-inconsolata-bold mt-20">
            Roadmap
          </h2>
          <div>
            <p className="py-4 text-lg text-white">
              This is a roadmap for web3 security based on my personal path and
              improved by my experience.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            </div>
            <Link
              href={'/roadmap/RoadmapPage'}
              className=" mt-6 inline-flex items-center px-3 py-2 text-md font-medium text-center text-black bg-[#00FFFF] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00FFFF] dark:hover:bg-blue-300 dark:focus:ring-blue-800"
            >
              Read more articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Articles, 'Articles');
