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

const Web3Security = () => {
  return (
    <div id="DeFi" className="w-full lg:h-screen p-2 mb-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-xxl tracking-widest uppercase text-blue-800">
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
              'Phishing attack in Web3 — Why you shouldn’t use tx.origin?',
              'Let’s understand what is the role of tx.origin and msg.sender and when it’s recommended to be used.',
              'https://medium.com/@bloqarl/solidity-vulnerabilities-2-phishing-attack-in-web3-why-not-to-use-tx-origin-65039c4a483c?sk=16c7754b38573f353df759d2285de865'
            )}
            {contentCard(
              'How to solve Ethernaut challenges #1: Levels 1 to 5',
              'Let’s learn to hack Solidity together. I will go through how to complete the levels and I will be providing any additional resources to extend the knowledge or to prepare you to complete the challenge by yourself.',
              'https://coinsbench.com/how-to-solve-ethernaut-challenges-1-levels-1-to-5-42eb3981f16c?sk=36b4580b90d87c749f0a0e02334c5711'
            )}
            {contentCard(
              'Smart Contract Hacking course: Was it worth to pay for it? Did I learn much?',
              'Here is my review of the Smart Contract Hacking course after three weeks into it. Was it a good decision to join it?',
              'https://medium.com/@bloqarl/smart-contract-hacking-course-was-it-worth-to-pay-for-it-did-i-learn-much-ddd1c775cf26?sk=8b669b60d8d6ddecc90668f828b33526'
            )}
            {contentCard(
              'Not all Gas Optimization audit reports get accepted in Code4rena. Follow these tips to make sure.',
              'I gathered some useful information about how to best write your Gas Optimization report on your Auditing contests.',
              'https://coinsbench.com/not-all-gas-optimization-audit-reports-get-accepted-in-code4rena-follow-this-tips-to-make-sure-69aabb4622ca?sk=f4c67db704f333f6f859225b17ec1561'
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
            class=" mt-6 inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Web3Security, 'Web3Security');
