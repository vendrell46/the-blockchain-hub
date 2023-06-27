import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mt-8 justify-center">
          <div className="items-center justify-center text-center">
            <h2 className="text-white text-lg font-semibold text-center">
              Subscribe to the Newsletter
            </h2>
            <h2 className="text-white text-lg font-semibold mb-4 text-center">
              and stay up to date with the latest changes
            </h2>
          </div>

          <iframe
            src="https://theblockchainerhub.substack.com/embed"
            width="340"
            height="100"
            style={{ border: '1px solid #EEE', background: 'white' }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
          <hr className="border-white w-full mt-8" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <p>Built by Bloqarl</p>
          <p className="justify-right items-end text-right">
            &copy; {new Date().getFullYear()} The Blockchainer Hub | All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
