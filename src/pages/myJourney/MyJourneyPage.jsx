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

const MyJourneyPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-40 pb-20">
      <h2 className="text-xxl tracking-widest uppercase text-[#00FFFF] text-center">
        My Journey
      </h2>
      <p className="mt-4 mb-0 text-lg text-white text-center">
        These articles are written by me.
      </p>{' '}
      <p className="mb-6 text-lg text-white text-center">
        These are the articles I write along my journey in Blockchain world and
        Web3 Security more specifically.
      </p>{' '}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contentCard(
          'How do you even start learning about Blockchain?',
          'This is how I started to learn about Blockchain. I will tell you about my background and which were my first steps.',
          'https://medium.com/@bloqarl/how-do-you-even-start-learning-about-blockchain-870ee5505010?sk=e2e091e4c1ab0d76ad841020f47cd99b'
        )}
        {contentCard(
          'Journey to build the best dApp: I’ve got an idea, now what?',
          'I would like to contribute to Web3 space by creating a dApp. Here are the first steps I took.',
          'https://medium.com/@bloqarl/journey-to-build-the-best-dapp-1-ive-got-an-idea-now-what-2336a71148a4?sk=935c4437b514604578b749eeed4cf993'
        )}
        {contentCard(
          'New in Blockchain? Don’t start from learning Solidity. Learn first about DeFi',
          'Beginning in Web3 is complicated, there are lots of material and you want to get quickly to master. Here is how to properly start.',
          'https://medium.com/@bloqarl/new-in-blockchain-dont-start-from-learning-solidity-learn-first-about-defi-a1c9822a2427?sk=b5af621d5c7cbb9daa9377ba203fe780'
        )}
        {contentCard(
          'Why have I decided to pay for a Smart Contract Hacking course?',
          'There was a moment where I saw a big opportunity to boost my learning speed by joining the Smart Contract Hacking course. Learn why I took this decision',
          'https://medium.com/@bloqarl/why-have-i-decided-to-pay-for-a-smart-contract-hacking-course-ed8b1ce449c8?sk=8cbc50e3bb9e7dce37d3858d78a206db'
        )}
        {contentCard(
          'Studying Web3 security, auditing SC and Full-time job. How do I handle this?',
          'I have started doing my first audit in code4rena and together with the Smart Contract Hacking course and my full-time job it’s quite a lot to handle.',
          'https://medium.com/coinmonks/studying-web3-security-auditing-sc-and-full-time-job-how-do-i-handle-this-5985fd0cfa3c?sk=e1f2158d39b6f99193ba554c2f2aaa5e'
        )}
        {contentCard(
          '0–500 followers in 5 weeks — Why sharing everything I learn about Blockchain in Twitter has taken me to that?',
          'Sharing everything I learn about Blockchain in Twitter has taken me to grow in popularity among the community. Let me tell you how can you do the same.',
          'https://medium.com/@bloqarl/0-500-followers-in-5-weeks-why-sharing-everything-i-learn-about-blockchain-in-twitter-has-taken-ebf523b522c4?sk=63892645ca0dfb12d9c388643d5021b7'
        )}
        {contentCard(
          'Do you want to get rich with Solo Auditing SC in public contests? Let me tell you a secret!',
          'Read about what is the best way to be successful in your smart contract audits.',
          'https://medium.com/@bloqarl/do-you-want-to-get-rich-with-solo-auditing-sc-in-public-contests-let-me-tell-you-a-secret-bcade368bf2d?sk=f51f0d86f46526f21773ed390ae81df7'
        )}
        {contentCard(
          'How long did it take me to start making money in Web3 Security?',
          'I would like to share my experience on how long it’s taken me to start making money since I got into Blockchain.',
          'https://medium.com/@bloqarl/how-long-did-it-take-me-to-start-making-money-in-web3-security-65887eeac41?sk=f1ec970492732e682645befccfd6fbc3'
        )}
        {contentCard(
          'Feeling overwhelmed while progressing on Web3 Security? Here’s what you should do',
          'Learning in Web3 Security is exciting but also exhausting. You need to learn to control your time spent with Web3 sec to not saturate. Here is how I do it.',
          'https://medium.com/@bloqarl/feeling-overwhelmed-while-progressing-on-web3-security-heres-what-you-should-do-9e6b44498740?sk=14b104103cbf66121c9e6685369d50d6'
        )}
        {contentCard(
          'How I used ChatGPT to help me build my Web3 Security website',
          'Is it actually possible to use ChatGPT to build a website? I spent one month building a website on my own and another one with ChatGPT prompts help.',
          'https://medium.com/@bloqarl/how-i-used-chatgpt-to-help-me-build-my-web3-security-website-8f0aed95dd2e?sk=2cf51cdffb464945fd38abbbdc74075e'
        )}
      </div>
    </div>
  );
};

export default MyJourneyPage;
