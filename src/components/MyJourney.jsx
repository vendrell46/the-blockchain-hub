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
      <span className="absolute bottom-4 right-4 inline-block px-2 py-1 text-sm font-semibold text-black bg-white rounded-md">
        {tag}
      </span>
    </div>
  );
}

const MyJourney = () => {
  return (
    <div id="MyJourney" className="w-full lg:h-screen p-2 mb-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="font-inconsolata">
          <h2 className="text-xxl tracking-widest uppercase text-violet-800 font-inconsolata-bold">
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
              'https://medium.com/@bloqarl/how-do-you-even-start-learning-about-blockchain-870ee5505010?sk=e2e091e4c1ab0d76ad841020f47cd99b',
              'Journey'
            )}
            {contentCard(
              'Journey to build the best dApp: I’ve got an idea, now what?',
              'I would like to contribute to Web3 space by creating a dApp. Here are the first steps I took.',
              'https://medium.com/@bloqarl/journey-to-build-the-best-dapp-1-ive-got-an-idea-now-what-2336a71148a4?sk=935c4437b514604578b749eeed4cf993',
              'Journey'
            )}
            {contentCard(
              'New in Blockchain? Don’t start from learning Solidity. Learn first about DeFi',
              'Beginning in Web3 is complicated, there are lots of material and you want to get quickly to master. Here is how to properly start.',
              'https://medium.com/@bloqarl/new-in-blockchain-dont-start-from-learning-solidity-learn-first-about-defi-a1c9822a2427?sk=b5af621d5c7cbb9daa9377ba203fe780',
              'Journey'
            )}
            {contentCard(
              'Why have I decided to pay for a Smart Contract Hacking course?',
              'There was a moment where I saw a big opportunity to boost my learning speed by joining the Smart Contract Hacking course. Learn why I took this decision',
              'https://medium.com/@bloqarl/why-have-i-decided-to-pay-for-a-smart-contract-hacking-course-ed8b1ce449c8?sk=8cbc50e3bb9e7dce37d3858d78a206db',
              'Journey'
            )}
            {contentCard(
              'Studying Web3 security, auditing SC and Full-time job. How do I handle this?',
              'I have started doing my first audit in code4rena and together with the Smart Contract Hacking course and my full-time job it’s quite a lot to handle.',
              'https://medium.com/coinmonks/studying-web3-security-auditing-sc-and-full-time-job-how-do-i-handle-this-5985fd0cfa3c?sk=e1f2158d39b6f99193ba554c2f2aaa5e',
              'Journey'
            )}
            {contentCard(
              'I’m getting a car from my earnings on Web3 Security. Don’t miss this advice and you will as well.',
              'If you want to achieve something either in your professional or personal life it is very important to set goals and to plan ahead. I have my goals set. In this article I wrote about them.',
              'https://medium.com/@bloqarl/im-getting-a-car-from-my-earnings-on-web3-security-don-t-miss-this-advice-and-you-will-as-well-2bd1a263da96?sk=b30223b8416583399660a9cebec4d418',
              'Journey'
            )}
            {contentCard(
              'Do you want to get rich with Solo Auditing SC in public contests? Let me tell you a secret!',
              'Read about what is the best way to be successful in your smart contract audits.',
              'https://medium.com/@bloqarl/do-you-want-to-get-rich-with-solo-auditing-sc-in-public-contests-let-me-tell-you-a-secret-bcade368bf2d?sk=f51f0d86f46526f21773ed390ae81df7',
              'Journey'
            )}
            {contentCard(
              'How long did it take me to start making money in Web3 Security?',
              'I would like to share my experience on how long it’s taken me to start making money since I got into Blockchain.',
              'https://medium.com/@bloqarl/how-long-did-it-take-me-to-start-making-money-in-web3-security-65887eeac41?sk=f1ec970492732e682645befccfd6fbc3',
              'Journey'
            )}
          </div>
          <Link
            href={'/myJourney/MyJourneyPage'}
            class=" mt-6 inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MyJourney, 'MyJourney');
