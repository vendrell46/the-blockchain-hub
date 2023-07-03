import React from 'react';

const Report = ({ label, href }) => {
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

const PostMortemReports = () => {
  return (
    <div id="PostMortemReports" className="w-full bg-black mb-40">
      <div className="max-w-[1240px] mx-auto p-2 pt-10 pb-20">
        <div>
          <h2 className="text-xxl tracking-widest uppercase text-[#00FFFF] text-center mt-40">
            <b>Post Mortem Reports</b>
          </h2>
          <div className="flex flex-wrap mt-18">
            <div className="w-full md:w-2/3 bg-black rounded-lg p-10 m-4 shadow-3d border mt-12">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                QuillAudits - Web3 Security
              </h2>
              <hr className="border-gray-500 my-4" />
              <div className="w-full md:w-2/3">
                <ul className="list-disc ml-6 mt-4 font-normal text-white">
                  <Report
                    label="Orion Protocol’s Reentrancy Exploit"
                    href="https://quillaudits.medium.com/decoding-orion-protocols-reentrancy-exploit-quillaudits-396de59449f7?source=user_profile"
                  />
                  <Report
                    label="dForce Protocol “Read Only Reentrancy” Exploit"
                    href="https://quillaudits.medium.com/decoding-dforce-protocol-read-only-reentrancy-exploit-quillaudits-c012aed4d666?source=user_profile"
                  />
                  <Report
                    label="SwapX Protocol’s $1 Million Exploit"
                    href="https://quillaudits.medium.com/decoding-swapx-1-million-exploit-quillaudits-502c5e7a542c?source=user_profile"
                  />
                  <Report
                    label="DKP Token‘s Price Manipulation Exploit"
                    href="https://quillaudits.medium.com/decoding-dkp-token-s-80k-exploit-quillaudits-45c67df973d6?source=user_profile"
                  />
                  <Report
                    label="Euler Finance’s $197 Million Exploit"
                    href="https://quillaudits.medium.com/decoding-euler-finances-197-million-exploit-quillaudits-c70fed910d2c?source=user_profile"
                  />
                  <Report
                    label="Kokomo Finance $4 Million Rug Pull"
                    href="https://quillaudits.medium.com/decoding-kokomo-finance-4-million-rug-pull-quillaudits-d5d027522bf3?source=user_profile"
                  />
                  <Report
                    label="SafeMoon Protocol’s $8.9 million Exploit"
                    href="https://quillaudits.medium.com/decoding-safemoon-protocols-8-9-million-exploit-quillaudits-a5b11417f0b9?source=user_profile"
                  />
                  <Report
                    label="AllBridge’s $570K Flash Loan Exploit"
                    href="https://quillaudits.medium.com/decoding-allbridge-570k-flash-loan-exploit-quillaudits-8da8dccd729d?source=user_profile"
                  />
                  <Report
                    label="Sentiment Protocol’s $1 Million Exploit"
                    href="https://quillaudits.medium.com/decoding-sentiment-protocols-1-million-exploit-quillaudits-f36bee77d376?source=user_profile"
                  />
                  <Report
                    label="Yearn Finance $11 Million Hack"
                    href="https://quillaudits.medium.com/decoding-yearn-finance-11-million-hack-quillaudits-c9a75ac7e68b?source=user_profile"
                  />
                  <Report
                    label="BeatGenAI (BGN) Flash Loan Exploit"
                    href="https://quillaudits.medium.com/decoding-beatgenai-bgn-flash-loan-exploit-quillaudits-cfa1823f12c7?source=user_profile"
                  />
                  <Report
                    label="Ovix Protocol’s $2 Million Exploit"
                    href="https://quillaudits.medium.com/decoding-ovix-protocols-2-million-exploit-quillaudits-92befc250e7c?source=user_profile"
                  />
                  <Report
                    label="Deus DAO $6.5 Million Exploit"
                    href="https://quillaudits.medium.com/decoding-deus-dao-6-5-million-exploit-quillaudits-588bbecec61f?source=user_profile"
                  />
                  <Report
                    label="Swaprum Finance $3 Million Rug Pull"
                    href="https://quillaudits.medium.com/decoding-swaprum-finance-3-million-rug-pull-quillaudits-2c6f9527b589?source=user_profile"
                  />
                  <Report
                    label="Jimbo’s Protocol $7.5M Exploit"
                    href="https://quillaudits.medium.com/decoding-jimbos-protocol-7-5m-exploit-quillaudits-772ad1db6c07?source=user_profile"
                  />
                  <Report
                    label="USEA Token’s $1.1 Million Rug Pull"
                    href="https://quillaudits.medium.com/decoding-usea-tokens-1-1-million-rug-pull-quillaudits-75f049f68e63?source=user_profile"
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

export default PostMortemReports;
