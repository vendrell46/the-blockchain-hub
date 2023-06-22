import React from 'react';

const Audit = ({ label, href }) => {
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

const PrivateAuditsPage = () => {
  return (
    <div id="PrivateAuditsPage" className="w-full min-h-screen bg-black">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center pt-10 pb-20">
        <div className="font-inconsolata">
          <h2 className="text-xxl tracking-widest uppercase text-blue-800 text-center font-inconsolata-bold mt-40">
            <b>Private Audit Reports</b>
          </h2>
          <div className="flex flex-wrap mt-18 justify-left">
            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border mt-12">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                My Private Audits
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit label="Not Public Yet" />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Guardian Audits
              </h2>
              <hr className="border-gray-500 my-4" />
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <p className="text-white font-bold mt-4">Auditors:</p>
                  <ul className="list-disc ml-6 mt-4 font-normal text-white">
                    <Audit
                      label="@trust__90"
                      href="https://twitter.com/trust__90"
                    />
                    <Audit
                      label="@gogotheauditor"
                      href="https://twitter.com/gogotheauditor"
                    />
                    <Audit
                      label="@pashovkrum"
                      href="https://twitter.com/pashovkrum"
                    />
                    <Audit
                      label="@zachobront"
                      href="https://twitter.com/zachobront"
                    />
                    <Audit
                      label="@0xWeisss"
                      href="https://twitter.com/0xWeisss"
                    />
                    <Audit
                      label="@gjaldon"
                      href="https://twitter.com/gjaldon"
                    />
                    <Audit
                      label="@bytes032"
                      href="https://twitter.com/bytes032"
                    />
                    <Audit
                      label="@0xWeisss"
                      href="https://twitter.com/0xWeisss"
                    />
                    <Audit
                      label="@KrisApost1"
                      href="https://twitter.com/KrisApost1"
                    />
                    <Audit
                      label="@NevvDevv"
                      href="https://twitter.com/NevvDevv"
                    />
                    <Audit label="@0xkato" href="https://twitter.com/0xkato" />
                  </ul>
                </div>
                <div>
                  <p className="text-white font-bold mt-4">Content Creators:</p>
                  <ul className="list-disc ml-6 mt-4 font-normal text-white">
                    <Audit
                      label="@PatrickAlphaC"
                      href="https://twitter.com/PatrickAlphaC"
                    />
                    <Audit
                      label="@ProgrammerSmart"
                      href="https://twitter.com/ProgrammerSmart"
                    />
                    <Audit
                      label="@RealJohnnyTime"
                      href="https://twitter.com/RealJohnnyTime"
                    />
                    <Audit
                      label="@0xOwenThurm"
                      href="https://twitter.com/0xOwenThurm"
                    />
                    <Audit
                      label="@officer_cia"
                      href="https://twitter.com/officer_cia"
                    />
                    <Audit
                      label="@_iphelix"
                      href="https://twitter.com/_iphelix"
                    />
                    <Audit
                      label="@DevDacian"
                      href="https://twitter.com/DevDacian"
                    />
                  </ul>
                </div>
                <div>
                  <p className="text-white font-bold mt-4">Web3 Security:</p>
                  <ul className="list-disc ml-6 mt-4 font-normal text-white">
                    <Audit
                      label="@immunefi"
                      href="https://twitter.com/immunefi"
                    />
                    <Audit
                      label="@code4rena"
                      href="https://twitter.com/code4rena"
                    />
                    <Audit
                      label="@sherlockdefi"
                      href="https://twitter.com/sherlockdefi"
                    />
                    <Audit
                      label="@hatsfinance"
                      href="https://twitter.com/hatsfinance"
                    />
                    <Audit
                      label="@SoloditOfficial"
                      href="https://twitter.com/SoloditOfficial"
                    />
                    <Audit
                      label="@TheSecureum"
                      href="https://twitter.com/TheSecureum"
                    />
                    <Audit
                      label="@SpearbitDAO"
                      href="https://twitter.com/SpearbitDAO"
                    />
                    <Audit
                      label="@cantinaxyz"
                      href="https://twitter.com/cantinaxyz"
                    />
                    <Audit
                      label="@CyfrinAudits"
                      href="https://twitter.com/CyfrinAudits"
                    />
                    <Audit
                      label="@BowTiedPickle"
                      href="https://twitter.com/BowTiedPickle"
                    />
                    <Audit
                      label="@LearnWeb3DAO"
                      href="https://twitter.com/LearnWeb3DAO"
                    />
                    <Audit label="@RektHQ" href="https://twitter.com/RektHQ" />
                    <Audit
                      label="@andyfeili"
                      href="https://twitter.com/andyfeili"
                    />
                    <Audit
                      label="@BlockSecTeam"
                      href="https://twitter.com/BlockSecTeam"
                    />
                    <Audit
                      label="@gakonst"
                      href="https://twitter.com/gakonst"
                    />
                  </ul>
                </div>
                <div>
                  <p className="text-white font-bold mt-4">General:</p>
                  <ul className="list-disc ml-6 mt-4 font-normal text-white">
                    <Audit
                      label="@NFT_GOD"
                      href="https://twitter.com/NFT_GOD"
                    />
                    <Audit
                      label="@FrancescoCiull4"
                      href="https://twitter.com/FrancescoCiull4"
                    />
                    <Audit
                      label="@TheAnkurTyagi"
                      href="https://twitter.com/TheAnkurTyagi"
                    />
                    <Audit
                      label="@PaulRBerg"
                      href="https://twitter.com/PaulRBerg"
                    />
                    <Audit
                      label="@Definews_Info"
                      href="https://twitter.com/Definews_Info"
                    />
                    <Audit
                      label="@VittoStack"
                      href="https://twitter.com/VittoStack"
                    />
                    <Audit
                      label="@hashoshi4"
                      href="https://twitter.com/hashoshi4"
                    />
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Pashov's Private Audits
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit
                    label="Blockchain Threat Intelligence"
                    href="https://example.com"
                  />
                  <Audit label="web3sec.news" href="https://example.com" />
                  <Audit label="bytes032's alpha" href="https://example.com" />
                  <Audit
                    label="DeFi Protocol by code"
                    href="https://example.com"
                  />
                  <Audit label="Decrypt" href="https://example.com" />
                </ul>
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Cantina's Private Audits
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit label="Ethernaut" href="https://example.com" />
                  <Audit label="Cryptozombies" href="https://example.com" />
                  <Audit
                    label="Damn Vulnerable DeFi"
                    href="https://example.com"
                  />
                  <Audit
                    label="Ghosts: Secureum races"
                    href="https://example.com"
                  />
                  <Audit label="EVM Opcodes" href="https://example.com" />
                  <Audit label="VyperFun" href="https://example.com" />
                  <Audit label="Wriggly" href="https://example.com" />
                  <Audit label="CryptoHack" href="https://example.com" />
                  <Audit label="Cairo Playground" href="https://example.com" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateAuditsPage;
