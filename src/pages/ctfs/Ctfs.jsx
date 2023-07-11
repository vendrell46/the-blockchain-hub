import React from 'react';

const Challenge = ({ label, href, imageUrl }) => {
  const shouldUnderline = href ? 'hover:underline' : '';

  return (
    <tr>
      <td className="border border-white p-8">
        <a>{label}</a>
        <img src={imageUrl} alt={'Challenge'} className="mt-6 mb-6" />
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            shouldUnderline +
            'border-white border justify-center text-center p-2 mt-10'
          }
        >
          Answer
        </a>
      </td>
    </tr>
  );
};

const Ctfs = () => {
  return (
    <div id="Ctfs" className="w-full bg-black mb-40">
      <div className="max-w-[1240px] mx-auto p-2 pt-10 pb-20">
        <div>
          <h2 className="text-xxl tracking-widest uppercase text-[#00FFFF] text-center mt-40">
            <b>CTFs</b>
          </h2>
          <div className="flex flex-wrap mt-18">
            <div className="w-full md:w-4/5 bg-black rounded-lg p-10 m-4 shadow-3d mt-12">
              <h2 className="text-xl font-semibold mb-2 text-left text-white">
                Calyptus
              </h2>
              <hr className="border-gray-500 my-4" />
              <div className="w-full md:w-4/5 text-white mt-6">
                <table className="w-full">
                  <tbody>
                    <Challenge
                      label="This contract is intended to allow the deployer to load some ETH into the contract during deployment and 
                      later call the sendEther() function to send 1 ETH from the contract to any specified address. However, there is an error in the code.
                       Find the error."
                      href="https://twitter.com/calyptus_web3/status/1653998713306599425?s=20"
                      imageUrl="/assets/ctfs/12.png"
                    />
                    <Challenge
                      label="This contract implements a lottery system where users can register by paying 1 ETH each, and the owner can choose a winner 
                      and transfer the lottery amount. What's wrong with deploying it on the mainnet?"
                      href="https://twitter.com/calyptus_web3/status/1654357039278088192?s=20"
                      imageUrl="/assets/ctfs/13.png"
                    />
                    <Challenge
                      label="An old man has stored his wealth in this smart contract and revealed the secret password to his grandson to unlock the funds. 
                      The grandson is just about to transfer the ETH to his own account by calling inherit(). How would you hack this?"
                      href="https://twitter.com/calyptus_web3/status/1654708350662090754?s=20"
                      imageUrl="/assets/ctfs/14.png"
                    />
                    <Challenge
                      label="The following smart contract allows anyone (except a smart contract) to be a member of a club by calling the register() 
                      function from their wallet address. How would you make a smart contract register itself as a member?"
                      href="https://twitter.com/calyptus_web3/status/1655065998498594818?s=20"
                      imageUrl="/assets/ctfs/15.png"
                    />
                    <Challenge
                      label="The following example can't be exploited following a basic re-entrancy approach. Why is this so? Can you think of any 
                      option to leverage this scenario?"
                      href="https://twitter.com/calyptus_web3/status/1655837800896274432?s=20"
                      imageUrl="/assets/ctfs/17.png"
                    />
                    <Challenge
                      label="You're selling an NFT collection of 100 NFTs. 10 users are whitelisted to mint it in the 1st day (presale). Everyone else can 
                      buy after 1 day (86400 sec) has passed. Which of these functions would you use in your smart contract for NFT minting and why?"
                      href="https://twitter.com/calyptus_web3/status/1656155624940634123?s=20"
                      imageUrl="/assets/ctfs/18.png"
                    />
                    <Challenge
                      label="You've created this smart contract to save some of your money in it and withdraw it at least after 10 days. You used compiler 
                      version 0.7.0. Two days after depositing, you got an urgent need for money. Is there a way you can get your money right now?"
                      href="https://twitter.com/calyptus_web3/status/1658348818117857285?s=20"
                      imageUrl="/assets/ctfs/23.png"
                    />
                    <Challenge
                      label="In what slot is the variable 'isPassed' stored? How would you re-arrange these variables in an ideal scenario? Explain."
                      href="https://twitter.com/calyptus_web3/status/1660514355379597314?s=20"
                      imageUrl="/assets/ctfs/28.png"
                    />
                    <Challenge
                      label="Explain the vulnerability in the following smart contract."
                      href="https://twitter.com/calyptus_web3/status/1662693574478032896?s=20343"
                      imageUrl="/assets/ctfs/34.png"
                    />
                    <Challenge
                      label="Which among the following modifiers 'onlyOwner1()' and 'onlyOwner2()' is more gas efficient way of writing modifiers? Why?"
                      href="https://twitter.com/calyptus_web3/status/1663783318519791616?s=20"
                      imageUrl="/assets/ctfs/37.png"
                    />
                    <Challenge
                      label="The following smart contract allows anyone to be a member of a club by calling the register() function from their wallet
                       address. It prohibits smart contracts from registering as members. How would you make a smart contract register itself as a member?"
                      href="https://twitter.com/calyptus_web3/status/1664505656626274304?s=20"
                      imageUrl="/assets/ctfs/39.png"
                    />
                    <Challenge
                      label="An old man has stored his wealth in this smart contract and revealed the secret password to his grandson to unlock the funds. 
                      The grandson is just about to transfer the ETH to his own account by calling inherit(). How would you hack this?"
                      href="https://twitter.com/calyptus_web3/status/1666671244194840578?s=20"
                      imageUrl="/assets/ctfs/44.png"
                    />
                    <Challenge
                      label="You're selling an NFT collection of 100 NFTs. 10 users are whitelisted to mint it in the 1st day (presale). Everyone else can 
                      buy after 1 day (i.e. 86400 sec). Which of the following functions would you use in your smart contract for NFT minting and why?"
                      href="https://twitter.com/calyptus_web3/status/1670001841164423168?s=20"
                      imageUrl="/assets/ctfs/52.png"
                    />
                    <Challenge
                      label="Identify the error in the following contract."
                      href="https://twitter.com/calyptus_web3/status/1671767187877404672?s=20"
                      imageUrl="/assets/ctfs/56.png"
                    />
                    <Challenge
                      label="How many errors can you find in the following smart contract?"
                      href="https://twitter.com/calyptus_web3/status/1676488160279142400?s=20"
                      imageUrl="/assets/ctfs/67.png"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ctfs;
