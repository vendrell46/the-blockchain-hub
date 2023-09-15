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

const Web3SecurityPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-20 pb-20">
      <section className="mb-14 mt-40">
        <h2 className="text-xxl tracking-widest uppercase text-[#00FFFF] text-center">
          Web3 Security
        </h2>
        <p className="mt-4 mb-0 text-lg text-white text-center">
          These articles are written by me.
        </p>{' '}
        <p className="mb-6 text-lg text-white text-center">
          You will find articles about attack vectors, auditing, ctfs and more.
        </p>{' '}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentCard(
            'How to efficiently prepare for a productive Smart Contract Audit',
            'Ensure that your smart contracts are as prepared as possible for the security review. Go into the ultimate guide to efficiently prepare your smart contracts.',
            'https://blog.soken.io/how-to-efficiently-prepare-for-a-productive-smart-contract-audit-6ddc9751c960?sk=01500650708fc890c7d8a4980ec16499'
          )}
          {contentCard(
            'Learn attack vectors and explore H/M severity issues. Over/Underflow',
            'I have gathered an explanation for a very popular vulnerability in Solidity, a few high and medium issues that are not a one-time thing but that you will potentially find in other protocols during your next audits.',
            'https://medium.com/coinmonks/learn-attack-vectors-and-explore-h-m-severity-issues-over-underflow-e331aa41d97b?sk=ca0b10daa52776d21dda296b11b40ad8'
          )}
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
            'The ultimate way to boost your Smart Contract Audit skills — I am Shadow Auditing.',
            'The time arrived, I’ve embraced it and I am determined to improve my auditing skills not only by reading reports but by doing shadow audits. I found the right way to do them.',
            'https://medium.com/@bloqarl/the-ultimate-way-to-boost-your-smart-contract-audit-skills-i-am-shadow-auditing-3d35fc2495a1?sk=90233fbddca6cc709bd4c7654c84f885'
          )}
        </div>
      </section>
      <section>
        <h2 className="text-white text-3xl font-bold mb-4">
          Other resources about Web3 Security
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentCard(
            'Lending/Borrowing DeFi Attacks',
            '',
            'https://dacian.hashnode.dev/lending-borrowing-defi-attacks'
          )}
          {contentCard(
            'DeFi Slippage Attacks',
            '',
            'https://dacian.hashnode.dev/defi-slippage-attacks'
          )}
          {contentCard(
            'Message traps in the Arbitrum bridge',
            '',
            'https://www.notonlyowner.com/research/message-traps-in-the-arbitrum-bridge'
          )}
          {contentCard(
            'MEV Resources',
            '',
            'https://thedailyape.notion.site/MEV-8713cb4c2df24f8483a02135d657a221'
          )}
          {contentCard(
            'ECDSA signature vulnerabilities',
            '',
            'https://github.com/0xbok/ecdsa-vuln-poc'
          )}
          {contentCard(
            'Multichain Auditor',
            '',
            'https://github.com/0xJuancito/multichain-auditor'
          )}
          {contentCard(
            'Weird ERC20 Tokens',
            '',
            'https://github.com/d-xo/weird-erc20#revert-on-zero-value-transfers'
          )}
          {contentCard(
            'Audit Findings 201',
            '',
            'https://secureum.substack.com/p/audit-findings-201'
          )}
          {contentCard(
            'ZK Reading List',
            '',
            'https://plum-lightning-36c.notion.site/ZK-Reading-List-2e85993b316b4c7c831bcdc866005e1b'
          )}
          {contentCard(
            'Smart contract attack vectors',
            '',
            'https://github.com/harendra-shakya/smart-contract-attack-vectors'
          )}
          {contentCard(
            'Quillhash DeFi Attack Vectors',
            '',
            'https://github.com/Quillhash/DeFi-Attack-Vectors'
          )}
          {contentCard(
            'Smart Contract Weakness Classification',
            '',
            'https://swcregistry.io/'
          )}
          {contentCard(
            'Solidity Security blog',
            '',
            'https://github.com/sigp/solidity-security-blog'
          )}
          {contentCard(
            'Ethereum Smart Contract Best Practices',
            '',
            'https://consensys.github.io/smart-contract-best-practices/attacks/'
          )}
          {contentCard(
            'Bug Fix review Immunefi',
            '',
            'https://github.com/immunefi-team/Web3-Security-Library/tree/main/BugFixReviews#moonbeam-astar-and-acala-library-truncation-bugfix-review-$1m-payout'
          )}
          {contentCard(
            'Ethereum Smart Contract Auditor`s 2022 Rewind',
            '',
            'https://ventral.digital/posts/2022/12/15/ethereum-smart-contract-auditors-2022-rewind'
          )}
          {contentCard(
            'Code4rena report categorized',
            '',
            'https://tom-sol.notion.site/Code4rena-report-categorized-dcce565a3ead49fba36ff0b912e1910a'
          )}
          {contentCard(
            'Smart Contracts audit checklist',
            '',
            'https://github.com/tamjid0x01/SmartContracts-audit-checklist'
          )}
          {contentCard(
            'Learn EVM Attacks',
            '',
            'https://github.com/coinspect/learn-evm-attacks/tree/master'
          )}
          {contentCard(
            'DeFi Hacks Reproduce - Foundry',
            '',
            'https://github.com/SunWeb3Sec/DeFiHackLabs'
          )}
          {contentCard(
            'NFT attacks',
            '',
            'https://0xvolodya.hashnode.dev/nft-attacks'
          )}
          {contentCard(
            'Smart Contract Vulnerabilities',
            '',
            'https://github.com/kadenzipfel/smart-contract-vulnerabilities'
          )}
          {contentCard(
            'Multichain Auditor',
            '',
            'https://github.com/0xJuancito/multichain-auditor'
          )}
          {contentCard(
            'Smart Contract Security Verification Standard',
            '',
            'https://github.com/ComposableSecurity/SCSVS/blob/master/README.md'
          )}
        </div>
      </section>
    </div>
  );
};

export default Web3SecurityPage;
