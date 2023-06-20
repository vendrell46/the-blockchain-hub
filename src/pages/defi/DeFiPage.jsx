import React from 'react';

function contentCard(title, description, link) {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700">
      <a href={link} target="_blank" rel="noreferrer" passHref>
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

const DeFiPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-40 pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contentCard(
          'Uniswap V2 — DeFi Protocol explained from its code',
          'Deep dive into UniswapV2 main smart contracts that will help you understand the protocol and prepare you to tackle audits forked from this DeFi protocol.',
          'https://medium.com/@bloqarl/uniswap-v2-complete-guide-to-understand-the-defi-protocol-d3a0e766cbdd?sk=82b4b9d2a22e548316a8991a83294b8d'
        )}
        {contentCard(
          'Aave-V3 — DeFi Protocol’s code explained. Part 1— Pool.sol',
          'It is super helpful to dive into the code of such popular protocols because first of all you’ll understand it much better and second because all new protocols forked from Aave will be based in the same code.',
          'https://medium.com/@bloqarl/aave-v3-defi-protocols-code-explained-part-1-pool-sol-bfa87ef6bece?sk=60e66a7cbefbc61167be97e7655b15ef'
        )}
        {contentCard(
          'Struggling to prepare for a Smart Contract audit? Check how I prepared for the audit of Gravita protocol',
          'Starting an audit is always challenging. In this article I am giving an example of how did I prepare for an actual audit.',
          'https://coinsbench.com/struggling-to-prepare-for-a-smart-contract-audit-b7bd77237ec2?sk=bb2a0ab966d6276bddfd6732f31cf2f0'
        )}
        {contentCard(
          'Liquity Protocol — DeFi protocol explained from its Smart Contracts',
          'Liquity is a fully automated and governance-free decentralized borrowing protocol. Here is an overview for the protocol and a breakdown of its smart contracts',
          'https://medium.com/@bloqarl/liquity-protocol-34380c7a977d?sk=f68b5788301efc4935694e5ae8994bde'
        )}
        {contentCard(
          'Why do they say you learn when you do SC audits? Let’s learn some things by analyzing Raft Protocol',
          'I can guarantee you that the more DeFi protocols you learn about, the easier it will get to audit any other new protocol released. So, let’s go check what we can learn by reviewing Raft, that we didn’t know before..',
          'https://medium.com/@bloqarl/why-do-they-say-you-learn-when-you-do-sc-audits-lets-learn-some-things-by-analyzing-raft-protocol-51698eecb7ed?sk=5443c17bef308821746b7314385cb215'
        )}
        {contentCard(
          'Juicebox Protocol. How to prepare for an audit of an already deployed project?',
          'you have to get used to analyzing the project and creating a summary from their website and documentation. here’s how I have prepared my summary for the Juicebox Buyback Delegate audit.',
          'https://medium.com/@bloqarl/juicebox-protocol-how-to-prepare-for-an-audit-of-an-already-deployed-project-23a1506fe126?sk=58a3e2d1f75568ad048b8315283580b7'
        )}
        {contentCard(
          'Spiral DAO. Smart Contract breakdown. DeFi yield aggregators explained. How to create a DAO.',
          'I have written this article to cover how a DAO is created by going through some steps Spiral DAO had to consider in the process.',
          'https://coinsbench.com/spiral-dao-smart-contract-breakdown-defi-yield-aggregators-explained-how-to-create-a-dao-e6ee48348ac8?sk=710a3b82189ddfce70a628f1e99177f4'
        )}
        {contentCard(
          'Liquity Protocol. What is a Stability Pool? How do liquidations and redemptions work?',
          'There is a great way to learn about technical glossary in defi and that is by learning directly from their code what is it all about. Read this article and learn more about Stability pool.',
          'https://medium.com/coinmonks/liquity-protocol-what-is-a-stability-pool-how-do-liquidations-and-redemptions-work-35e976a29a44?sk=274b2bc1b4a30abffc431dbe412f2666'
        )}
        {contentCard(
          'Smart Contract Hacking course: How DeFi lessons changed everything',
          'Once I finished the part 1 of the course I felt I made a huge progress, I thought I reached a summit. But what I found out after starting part 2, changed everything.',
          'https://medium.com/@bloqarl/smart-contract-hacking-course-how-defi-lessons-changed-everything-d6b5ab5416cc?sk=e2b6011e21e8caa950fa6f307b44c4a7'
        )}
      </div>
    </div>
  );
};

export default DeFiPage;
