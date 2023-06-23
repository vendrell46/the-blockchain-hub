import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>Built by Bloqarl</p>
        <p>
          &copy; {new Date().getFullYear()} The Blockchainer Hub | All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
