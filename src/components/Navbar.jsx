import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] px-3">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        <Link href="/#Home">
          <Image
            src="/../public/assets/logo.png"
            alt="/"
            width={300}
            height={0}
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/#Blockchain">
              <li className="ml-5 text-xs uppercase hover:border-b py-10">
                Blockchain
              </li>
            </Link>
            <Link href="/#SmartContract">
              <li className="ml-5 text-xs uppercase hover:border-b py-10">
                Smart Contract
              </li>
            </Link>
            <Link href="/">
              <li className="ml-5 mr-8 text-xs uppercase hover:border-b py-10">
                Social Media
              </li>
            </Link>
          </ul>
          {/* Hamburger icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Image
                src={'/../public/assets/logo.png'}
                width={175}
                height={20}
                alt="/"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p></p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#Home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#Blockchain">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Blockchain
                </li>
              </Link>
              <Link href="/#SmartContract">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Smart Contract
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Social Media
                </li>
              </Link>
              {/* <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  More
                </li>
              </Link> */}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsTwitter />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
