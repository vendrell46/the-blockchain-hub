import React from 'react';

const Tool = ({ label, href }) => {
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
    <div id="PrivateAuditsPage" className="w-full min-h-screen bg-black mb-40">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center pt-10 pb-20">
        <div className="font-inconsolata">
          <h2 className="text-xxl tracking-widest uppercase text-[#00FFFF] text-center font-inconsolata-bold mt-40">
            <b>Audit tools</b>
          </h2>
          <div className="flex flex-wrap mt-18 justify-left">
            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border mt-12">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Cryptography
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Tool
                    label="Keccack-256 hash function"
                    href="https://emn178.github.io/online-tools/keccak_256.html"
                  />
                  <Tool
                    label="Ethereum Signature Database"
                    href="https://www.4byte.directory/"
                  />
                </ul>
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Simulator
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Tool
                    label="Automated Market Maker Playground"
                    href="https://amm-playground.on.fleek.co/"
                  />
                  <Tool
                    label="Enso Transaction Simulator"
                    href="https://github.com/EnsoFinance/transaction-simulator/?utm_source=substack&utm_medium=email#enso-transaction--simulator-"
                  />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border ">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                IDE Plugins
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Tool
                    label="Solidity Visual Developer"
                    href="https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-visual-auditor"
                  />
                  <Tool
                    label="Solidity Metrics"
                    href="https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-metrics"
                  />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Testing
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Tool
                    label="Broken Token"
                    href="https://github.com/zeroknots/brokentoken?utm_source=substack&utm_medium=email"
                  />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Converters
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Tool
                    label="Convert Gwei/Wei to Ether"
                    href="https://eth-converter.com"
                  />
                  <Tool
                    label="Convert second to year"
                    href="https://www.unitconverters.net/time/second-to-year.htm"
                  />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                General
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Tool
                    label="Set of useful tools"
                    href="https://eth-toolbox.com/"
                  />
                  <Tool
                    label="Search for verified smart contracts"
                    href="https://www.codeslaw.app/"
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

export default PrivateAuditsPage;
