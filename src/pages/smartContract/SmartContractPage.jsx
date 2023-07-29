import React from 'react';

function contentCard(title, description, link) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700">
      <a href={link} target="_blank" rel="noopener noreferrer" passHref>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-1000">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-900">
        {description}
      </p>
    </div>
  );
}

const SmartContractPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-20 pb-20">
      <section className="mb-14 mt-40">
        <h2 className="text-xxl tracking-widest uppercase text-[#00FFFF] text-center">
          Smart Contract
        </h2>
        <p className="mt-4 mb-0 text-lg text-white text-center">
          These articles are written by me.
        </p>{' '}
        <p className="mb-6 text-lg text-white text-center">
          You will find articles connected with Solidity, Ethereum and Testing
          among others.
        </p>{' '}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          {contentCard(
            'Save over a HUNDRED THOUSAND gas with this Solidity Gas Optimization tip',
            'This approach has huge gas-saving power and I want to show you in which scenarios it can have a very big impact to optimize the smart contract’s gas consumption.',
            'https://medium.com/@bloqarl/save-over-a-hundred-thousand-gas-with-this-solidity-gas-optimization-tip-ba791d6acafd?sk=43fc0ae06bef828126c85deeec91ed3f'
          )}
        </div>
      </section>
      <section>
        <h2 className="text-white text-3xl font-bold mb-4">
          Other resources about Smart Contracts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentCard(
            'Useful Solidity Patterns',
            '',
            'https://github.com/dragonfly-xyz/useful-solidity-patterns'
          )}
          {contentCard(
            'Low-Level Guide To Solidity`s Storage',
            '',
            'https://degatchi.com/articles/low_level_guide_to_soliditys_storage_management'
          )}
          {contentCard(
            'Bit Shifting and Masking in Assembly(YUL)',
            '',
            'https://medium.com/@mweiss.eth/solidity-and-evm-bit-shifting-and-masking-in-assembly-yul-942f4b4ebb6a'
          )}
          {contentCard(
            'How to test a smart contract function a million times',
            '',
            'https://www.notonlyowner.com/learn/how-to-test-a-smart-contract-function-a-million-times'
          )}
          {contentCard(
            'Awesome EIP2535 Diamond resources',
            '',
            'https://github.com/mudgen/awesome-diamonds'
          )}
          {contentCard(
            'Awesome zero knowledge proofs (zkp)',
            '',
            'https://github.com/matter-labs/awesome-zero-knowledge-proofs'
          )}
        </div>
      </section>
    </div>
  );
};

export default SmartContractPage;
