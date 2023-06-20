import React from 'react';

import { AppWrap } from '../wrapper';
import Link from 'next/link';

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

const SmartContract = () => {
  return (
    <div id="SmartContract" className="w-full lg:h-screen p-2 mb-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div>
          <h2 className="text-xxl tracking-widest uppercase text-[#5651e5]">
            Smart Contract
          </h2>
          <p className="py-4 text-lg">
            Check out the articles connected with Solidity, Ethereum and more.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentCard(
              'Ethereum latest news #1: ConsenSys zkEVM | Polygon zk ID — What are Zero-Knowledge proofs?',
              'Let’s use the latest news to introduce and learn new concepts and at the same time stay up to date.',
              'https://medium.com/coinmonks/hardhat-1-deploying-smart-contracts-f35af00726d9?sk=db580c713c04ccf656023b86a3a15035'
            )}
            {contentCard(
              'Hardhat #1: Deploying Smart Contracts',
              'Use these articles as a reference for starting testing with Hardhat. You will find in this article instructions to successfully deploy smart contracts in your tests.',
              'https://medium.com/@bloqarl/journey-to-build-the-best-dapp-1-ive-got-an-idea-now-what-2336a71148a4?sk=935c4437b514604578b749eeed4cf993'
            )}
            {contentCard(
              'Hardhat #2: Testing using Ethers.js — Potential problems and solutions',
              'In this article I will go through my first experience testing with Hardhat, how to connect and interact with the deployed contract in your tests.',
              'https://medium.com/coinmonks/hardhat-2-testing-using-ethers-js-potential-problems-and-solutions-on-your-first-day-915b22dc2e29?sk=d0b31e4aa9fb0dea75d088e09d0840dc'
            )}
            {contentCard(
              'Start using Foundry in your audits. Follow this guide.',
              'Foundry is fundamental for testing smart contracts during your audits. Here is a guide I gathered for you starting from zero up to prepare your setup for the audit.',
              'https://medium.com/@bloqarl/ripped-jesus-from-foundry-exists-start-using-foundry-in-your-audits-follow-his-guide-eab417db1a51?sk=13b8aee0f5384be6cc06a01ddba090d8'
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
          </div>
          <Link
            href={'/smartContract/SmartContractPage'}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(SmartContract, 'SmartContract');
