import React from 'react';

const Audit = ({ label, href }) => {
  const shouldUnderline = href ? 'hover:underline' : '';

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={shouldUnderline}
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
                  <Audit label="The Block Temple - Reviews on-chain" />
                  <Audit label="Not Public Yet" />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border mt-12">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Guardian Audits
              </h2>
              <hr className="border-gray-500 my-4" />
              <div className="grid grid-cols-2 gap-8">
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit
                    label="Bridges Exchange 1"
                    href="https://github.com/GuardianAudits/Audits/blob/main/Bridges/Bridges_Exchange_Audit_1.pdf"
                  />
                  <Audit
                    label="Bridges Exchange 2"
                    href="https://github.com/GuardianAudits/Audits/blob/main/Bridges/Bridges_Exchange_Audit_2.pdf"
                  />
                  <Audit
                    label="GMX Synthetics 1"
                    href="https://github.com/GuardianAudits/Audits/blob/main/GMX/GMX_Synthetics_Audit_1.pdf"
                  />
                  <Audit
                    label="GMX Synthetics 2"
                    href="https://github.com/GuardianAudits/Audits/blob/main/GMX/GMX_Synthetics_Audit_2.pdf"
                  />
                  <Audit
                    label="GMX Synthetics 3"
                    href="https://github.com/GuardianAudits/Audits/blob/main/GMX/GMX_Synthetics_Audit_3.pdf"
                  />
                  <Audit
                    label="NFTR"
                    href="https://github.com/GuardianAudits/Audits/blob/main/NFTR/NFTR_Audit.pdf"
                  />
                  <Audit
                    label="NFTR Market"
                    href="https://github.com/GuardianAudits/Audits/blob/main/NFTR/NFTR_Market_Audit.pdf"
                  />
                  <Audit
                    label="NFTR Naming Credits"
                    href="https://github.com/GuardianAudits/Audits/blob/main/NFTR/NFTR_Naming_Credits_Audit.pdf"
                  />
                  <Audit
                    label="UltiBets 1"
                    href="https://github.com/GuardianAudits/Audits/blob/main/UltiBets/UltiBets_Audit_1.pdf"
                  />
                  <Audit
                    label="UltiBets 2"
                    href="https://github.com/GuardianAudits/Audits/blob/main/UltiBets/UltiBets_Audit_2.pdf"
                  />
                </ul>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit
                    label="Beefy Finance Strategy Geist Eth"
                    href="https://github.com/GuardianAudits/Audits/blob/main/BeefyFinance_StrategyGeistEth_Audit.pdf"
                  />
                  <Audit
                    label="Ethernote"
                    href="https://github.com/GuardianAudits/Audits/blob/main/Ethernote_Audit.pdf"
                  />
                  <Audit
                    label="Hamsters of Opera"
                    href="https://github.com/GuardianAudits/Audits/blob/main/HamstersOfOpera_Guardian_Audit.pdf"
                  />
                  <Audit
                    label="Ice Bear Society"
                    href="https://github.com/GuardianAudits/Audits/blob/main/IceBearSociety_Audit.pdf"
                  />
                  <Audit
                    label="Infinity Lotto"
                    href="https://github.com/GuardianAudits/Audits/blob/main/InfinityLotto_Audit.pdf"
                  />
                  <Audit
                    label="Key Finance"
                    href="https://github.com/GuardianAudits/Audits/blob/main/Key_Finance_Audit.pdf"
                  />
                  <Audit
                    label="Poolshark Cover"
                    href="https://github.com/GuardianAudits/Audits/blob/main/Poolshark_Cover_Audit.pdf"
                  />
                  <Audit
                    label="Reliquary"
                    href="https://github.com/GuardianAudits/Audits/blob/main/Reliquary_Audit.pdf"
                  />
                  <Audit
                    label="Ultimate Fantomns"
                    href="https://github.com/GuardianAudits/Audits/blob/main/UltimateFantoms_Audit.pdf"
                  />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border mt-12">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Pashov Private Audits
              </h2>
              <hr className="border-gray-500 my-4" />
              <div className="grid grid-cols-2 gap-8">
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit
                    label="Ninja Yield - yield aggregator"
                    href="https://github.com/pashov/audits/blob/master/solo/NinjaYielder-security-review.md"
                  />
                  <Audit
                    label="Zerem - DeFi Circuit Breaker"
                    href="https://github.com/pashov/audits/blob/master/solo/Zerem-security-review.md"
                  />
                  <Audit
                    label="Poseidon DAO"
                    href="https://github.com/solidified-platform/audits/blob/master/Audit%20Report%20-%20Poseidon%20DAO%20%5B09.12.2022%5D.pdf"
                  />
                  <Audit
                    label="Arcana - extension of ERC721A"
                    href="https://github.com/pashov/audits/blob/master/solo/Arcana-security-review.md"
                  />
                  <Audit
                    label="Cadmos Finance"
                    href="https://github.com/pashov/audits/blob/master/solo/CadmosFinance-security-review.md"
                  />
                  <Audit
                    label="GMD - yield aggregator"
                    href="https://github.com/pashov/audits/blob/master/solo/GMD-security-review.md"
                  />
                  <Audit
                    label="Azuro - decentralized betting 1"
                    href="https://github.com/pashov/audits/blob/master/solo/Azuro-security-review.md"
                  />
                  <Audit
                    label="Polygon zkEVM - L1-L2 bridge"
                    href="https://github.com/0xPolygonHermez/zkevm-contracts/blob/main/audits/zkEVM-bridge-Spearbit-27-March.pdf"
                  />
                  <Audit
                    label="Mugen - cross-chain DEX adapter"
                    href="https://github.com/pashov/audits/blob/master/solo/Mugen-security-review.md"
                  />
                  <Audit
                    label="Metalabel - ERC721 collection 1"
                    href="https://github.com/pashov/audits/blob/master/solo/Metalabel-security-review.md"
                  />
                  <Audit
                    label="Hypercerts - ERC1155 certificates for contribution"
                    href="https://github.com/pashov/audits/blob/master/solo/Hypercerts-security-review.md"
                  />
                  <Audit
                    label="Metalabel - ERC721 collection 2"
                    href="https://github.com/pashov/audits/blob/master/solo/Metalabel-second-security-review.md"
                  />
                </ul>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit
                    label="Azuro - decentralized betting 2"
                    href="https://github.com/pashov/audits/blob/master/solo/Azuro-second-security-review.md"
                  />
                  <Audit
                    label="Parcel Payroll - Gnosis Safe"
                    href="https://github.com/pashov/audits/blob/master/solo/ParcelPayroll-security-review.md"
                  />
                  <Audit
                    label="Punk Bid - on-chain order book"
                    href="https://github.com/GuardianAudits/Audits/blob/main/HamstersOfOpera_Guardian_Audit.pdf"
                  />
                  <Audit
                    label="LizardStaking"
                    href="https://github.com/pashov/audits/blob/master/solo/LizardStarking-security-review.md"
                  />
                  <Audit
                    label="Bear Cave - NFT games"
                    href="https://github.com/pashov/audits/blob/master/solo/BearCave-security-review.md"
                  />
                  <Audit
                    label="Florence Finance - lending & borrowing"
                    href="https://github.com/pashov/audits/blob/master/solo/FlorenceFinance-security-review.md"
                  />
                  <Audit
                    label="Molecule Vesting - token vesting"
                    href="https://github.com/pashov/audits/blob/master/solo/MoleculeVesting-security-review.md"
                  />
                  <Audit
                    label="Ambire - smart wallet"
                    href="https://github.com/pashov/audits/blob/master/solo/Ambire-security-review.md"
                  />
                  <Audit
                    label="Babylon7 - on-chain raffles"
                    href="https://github.com/pashov/audits/blob/master/solo/Babylon7-security-review.md"
                  />
                  <Audit
                    label="IPNFT - NFTs & fundraises"
                    href="https://github.com/pashov/audits/blob/master/solo/IPNFT-security-review.md"
                  />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Gogo the auditor Private Audits
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit
                    label="Vinci - Staking & ERC20 Token"
                    href="https://github.com/gogotheauditor/audits/blob/main/reports/Vinci-Solo-Security-Review.pdf"
                  />
                  <Audit
                    label="Metalabel - ERC721 Collection Releasing"
                    href="https://github.com/gogotheauditor/audits/blob/main/reports/Metalabel-Solo-Security-Review.md"
                  />
                  <Audit
                    label="Metalabel - ERC721 Collection Releasing V1.1"
                    href="https://github.com/gogotheauditor/audits/blob/main/reports/Metalabel-V1_1-Solo-Security-Review.md"
                  />
                  <Audit
                    label="Yield - Variable Rate Lending & Borrowing"
                    href="https://github.com/gogotheauditor/audits/blob/main/reports/Yield-VR-Solo-Security-Review.md"
                  />
                  <Audit
                    label="Aelin - Fundraising"
                    href="https://github.com/gogotheauditor/audits/blob/main/reports/Aelin-Sub7-Security-Review.pdf"
                  />
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Cantina Private Audits
              </h2>
              <hr className="border-gray-500 my-4" />
              <div>
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Audit
                    label="Mapel Finance"
                    href="https://cantina.xyz/portfolio/cantina_maple_apr2023.pdf"
                  />
                  <Audit
                    label="Parcel Money"
                    href="https://cantina.xyz/portfolio/cantina_parcel_feb2023.pdf"
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
