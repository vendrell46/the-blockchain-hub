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

const RecommendationsPage = () => {
  return (
    <div id="Recommendations" className="w-full min-h-screen bg-black">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center pt-10 pb-20">
        <div className="font-inconsolata">
          <div className="flex flex-wrap mt-18 justify-left">
            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border mt-40">
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
                  <Recommendation label="Secureum" href="https://example.com" />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Twitter Accounts
              </h2>
              <hr className="border-gray-500 my-4" />
              <div className="grid grid-cols-4 gap-8">
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
                      label="@0xWeisss"
                      href="https://twitter.com/0xWeisss"
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
                    href="https://example.com"
                  />
                  <Recommendation
                    label="web3sec.news"
                    href="https://example.com"
                  />
                  <Recommendation
                    label="bytes032's alpha"
                    href="https://example.com"
                  />
                  <Recommendation
                    label="DeFi Protocol by code"
                    href="https://example.com"
                  />
                  <Recommendation label="Decrypt" href="https://example.com" />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Auditors Marketplace
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Recommendation label="G360DAO" href="https://example.com" />
                  <Recommendation label="Cantina" href="https://example.com" />
                </ul>
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
                    href="https://example.com"
                  />
                  <Recommendation
                    label="Cryptozombies"
                    href="https://example.com"
                  />
                  <Recommendation
                    label="Damn Vulnerable DeFi"
                    href="https://example.com"
                  />
                  <Recommendation
                    label="Ghosts: Secureum races"
                    href="https://example.com"
                  />
                  <Recommendation
                    label="EVM Opcodes"
                    href="https://example.com"
                  />
                  <Recommendation label="VyperFun" href="https://example.com" />
                  <Recommendation label="Wriggly" href="https://example.com" />
                  <Recommendation
                    label="CryptoHack"
                    href="https://example.com"
                  />
                  <Recommendation
                    label="Cairo Playground"
                    href="https://example.com"
                  />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Podcasts
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Recommendation label="Bankless" href="https://example.com" />
                  <Recommendation
                    label="Devs Do Something"
                    href="https://example.com"
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

export default RecommendationsPage;
