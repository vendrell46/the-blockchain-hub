import React from 'react';

const Recommendation = ({ label, href }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {label}
      </a>
    </li>
  );
};

const Web3CommunityPage = () => {
  return (
    <div id="Web3CommunityPage" className="w-full min-h-screen bg-black mb-40">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center pt-10 pb-20">
        <div className="font-inconsolata">
          <div className="flex flex-wrap mt-18 justify-left">
            <div
              id="Discord"
              className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border mt-40"
            >
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Discord Communities
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Recommendation
                    label="Guardian Audits"
                    href="https://discord.gg/vBh3M4tEpU"
                  />
                  <Recommendation
                    label="Secureum"
                    href="https://t.co/m9fMLfXhEU"
                  />
                  <Recommendation
                    label="web3sec.news"
                    href="https://t.co/MM9Xg4Cr7P"
                  />
                  <Recommendation
                    label="G360DAO"
                    href="https://discord.g360dao.io"
                  />
                </ul>
                <div id="Twitter"></div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Twitter Accounts
              </h2>
              <hr className="border-gray-500 my-4" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-white font-bold mt-4">Auditors:</p>
                  <ul className="list-disc ml-6 mt-4 font-normal text-white">
                    <Recommendation
                      label="@trust__90"
                      href="https://twitter.com/trust__90"
                    />
                    <Recommendation
                      label="@gogotheauditor"
                      href="https://twitter.com/gogotheauditor"
                    />
                    <Recommendation
                      label="@pashovkrum"
                      href="https://twitter.com/pashovkrum"
                    />
                    <Recommendation
                      label="@zachobront"
                      href="https://twitter.com/zachobront"
                    />
                    <Recommendation
                      label="@0xWeisss"
                      href="https://twitter.com/0xWeisss"
                    />
                    <Recommendation
                      label="@gjaldon"
                      href="https://twitter.com/gjaldon"
                    />
                    <Recommendation
                      label="@bytes032"
                      href="https://twitter.com/bytes032"
                    />
                    <Recommendation
                      label="@KrisApost1"
                      href="https://twitter.com/KrisApost1"
                    />
                    <Recommendation
                      label="@NevvDevv"
                      href="https://twitter.com/NevvDevv"
                    />
                    <Recommendation
                      label="@0xkato"
                      href="https://twitter.com/0xkato"
                    />
                  </ul>
                </div>

                <div>
                  <p className="text-white font-bold mt-4">Content Creators:</p>
                  <ul className="list-disc ml-6 mt-4 font-normal text-white">
                    <Recommendation
                      label="@PatrickAlphaC"
                      href="https://twitter.com/PatrickAlphaC"
                    />
                    <Recommendation
                      label="@ProgrammerSmart"
                      href="https://twitter.com/ProgrammerSmart"
                    />
                    <Recommendation
                      label="@RealJohnnyTime"
                      href="https://twitter.com/RealJohnnyTime"
                    />
                    <Recommendation
                      label="@0xOwenThurm"
                      href="https://twitter.com/0xOwenThurm"
                    />
                    <Recommendation
                      label="@officer_cia"
                      href="https://twitter.com/officer_cia"
                    />
                    <Recommendation
                      label="@_iphelix"
                      href="https://twitter.com/_iphelix"
                    />
                    <Recommendation
                      label="@DevDacian"
                      href="https://twitter.com/DevDacian"
                    />
                  </ul>
                </div>

                <div>
                  <p className="text-white font-bold mt-4">Web3 Security:</p>
                  <ul className="list-disc ml-6 mt-4 font-normal text-white">
                    <Recommendation
                      label="@immunefi"
                      href="https://twitter.com/immunefi"
                    />
                    <Recommendation
                      label="@code4rena"
                      href="https://twitter.com/code4rena"
                    />
                    <Recommendation
                      label="@sherlockdefi"
                      href="https://twitter.com/sherlockdefi"
                    />
                    <Recommendation
                      label="@hatsfinance"
                      href="https://twitter.com/hatsfinance"
                    />
                    <Recommendation
                      label="@SoloditOfficial"
                      href="https://twitter.com/SoloditOfficial"
                    />
                    <Recommendation
                      label="@TheSecureum"
                      href="https://twitter.com/TheSecureum"
                    />
                    <Recommendation
                      label="@SpearbitDAO"
                      href="https://twitter.com/SpearbitDAO"
                    />
                    <Recommendation
                      label="@cantinaxyz"
                      href="https://twitter.com/cantinaxyz"
                    />
                    <Recommendation
                      label="@CyfrinAudits"
                      href="https://twitter.com/CyfrinAudits"
                    />
                    <Recommendation
                      label="@BowTiedPickle"
                      href="https://twitter.com/BowTiedPickle"
                    />
                    <Recommendation
                      label="@LearnWeb3DAO"
                      href="https://twitter.com/LearnWeb3DAO"
                    />
                    <Recommendation
                      label="@RektHQ"
                      href="https://twitter.com/RektHQ"
                    />
                    <Recommendation
                      label="@andyfeili"
                      href="https://twitter.com/andyfeili"
                    />
                    <Recommendation
                      label="@BlockSecTeam"
                      href="https://twitter.com/BlockSecTeam"
                    />
                    <Recommendation
                      label="@gakonst"
                      href="https://twitter.com/gakonst"
                    />
                  </ul>
                </div>

                <div>
                  <p className="text-white font-bold mt-4">General:</p>
                  <ul className="list-disc ml-6 mt-4 font-normal text-white">
                    <Recommendation
                      label="@NFT_GOD"
                      href="https://twitter.com/NFT_GOD"
                    />
                    <Recommendation
                      label="@FrancescoCiull4"
                      href="https://twitter.com/FrancescoCiull4"
                    />
                    <Recommendation
                      label="@TheAnkurTyagi"
                      href="https://twitter.com/TheAnkurTyagi"
                    />
                    <Recommendation
                      label="@PaulRBerg"
                      href="https://twitter.com/PaulRBerg"
                    />
                    <Recommendation
                      label="@Definews_Info"
                      href="https://twitter.com/Definews_Info"
                    />
                    <Recommendation
                      label="@VittoStack"
                      href="https://twitter.com/VittoStack"
                    />
                    <Recommendation
                      label="@hashoshi4"
                      href="https://twitter.com/hashoshi4"
                    />
                  </ul>
                  <div id="Newsletters"></div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Newsletters
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Recommendation
                    label="Blockchain Threat Intelligence"
                    href="https://newsletter.blockthreat.io/"
                  />
                  <Recommendation
                    label="web3sec.news"
                    href="https://web3secnews.substack.com/"
                  />
                  <Recommendation
                    label="bytes032's alpha"
                    href="https://blog.bytes032.xyz/"
                  />
                  <Recommendation
                    label="DeFi Protocol by code"
                    href="https://defiprotocolbycode.substack.com/"
                  />
                  <Recommendation
                    label="Week in Ethereum News"
                    href="https://weekinethereumnews.com/"
                  />
                  <Recommendation
                    label="Decrypt"
                    href="https://decrypt.co/newsletters"
                  />
                </ul>
                <div id="Marketplace"></div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Auditors Marketplace
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Recommendation
                    label="Lightnet Marketplace by G360DAO"
                    href="https://lightnet.g360dao.io"
                  />
                  <Recommendation label="Cantina" href="https://cantina.xyz/" />
                </ul>
                <div id="Courses"></div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Courses
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Recommendation
                    label="LearnWeb3.io"
                    href="https://learnweb3.io/degrees/ethereum-developer-degree/"
                  />
                  <Recommendation
                    label="Smart Contract Hacking Course"
                    href="https://smartcontractshacking.com/?referral=bloqarl"
                  />
                  <Recommendation
                    label="Alchemy University"
                    href="https://university.alchemy.com/"
                  />
                </ul>
                <div id="CodeChallenges"></div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Code Challenges
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Recommendation
                    label="Ethernaut"
                    href="https://ethernaut.openzeppelin.com/"
                  />
                  <Recommendation
                    label="Cryptozombies"
                    href="https://cryptozombies.io/"
                  />
                  <Recommendation
                    label="Damn Vulnerable DeFi"
                    href="https://www.damnvulnerabledefi.xyz/"
                  />
                  <Recommendation
                    label="Ghosts: Secureum races"
                    href="https://www.ghostsofepochspast.xyz/dashboard"
                  />
                  <Recommendation
                    label="EVM Opcodes Playground"
                    href="https://www.evm.codes/playground?fork=shanghai"
                  />
                  <Recommendation
                    label="Wriggly"
                    href="https://www.wriggly.io/"
                  />
                  <Recommendation
                    label="CryptoHack"
                    href="https://cryptohack.org/"
                  />
                  <Recommendation
                    label="Cairo Playground"
                    href="https://www.cairo-lang.org/playground/"
                  />
                </ul>
                <div id="Podcasts"></div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Podcasts
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Recommendation
                    label="Bankless"
                    href="https://www.bankless.com/listen"
                  />
                  <Recommendation
                    label="Devs Do Something"
                    href="https://www.devsdosomething.fm/"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3CommunityPage;
