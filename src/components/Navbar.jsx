import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { injected } from './wallet/connectors';
import { useWeb3React } from '@web3-react/core';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const handleNav = () => {
    setNav(!nav);
  };

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] px-1">
      <nav class="bg-white border-gray-200 dark:bg-gray-200">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="/#Home">
            <Image
              src="/../public/assets/logo.png"
              alt="/"
              width={330}
              height={0}
            />
          </Link>
          <div class="flex flex-col items-end justify-center">
            {!active ? (
              <button
                onClick={connect}
                class="py-1 mt-2 mb-2 text-sm font-bold capitalize text-white rounded-md w-26 bg-blue-700 hover:bg-blue-900 p-4"
              >
                Connect Wallet
              </button>
            ) : (
              <button
                onClick={disconnect}
                className="py-1 mt-2 mb-2 text-sm font-bold capitalize text-white rounded-md w-26 bg-blue-700 hover:bg-blue-900 p-4"
              >
                Disconnect
              </button>
            )}

            {active ? (
              <span class="text-xs">
                <b>{account}</b>
              </span>
            ) : (
              <span class="text-xs">Not connected</span>
            )}
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  href="/#Home"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#Blockchain"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Blockchain
                </Link>
              </li>
              <li>
                <Link
                  href="/#SmartContract"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Smart Contract
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Web3 Security
                </Link>
              </li>
            </ul>
            <div onClick={handleNav} className="md:hidden text-white">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </nav>
      {/* Hamburger icon */}
      {/* <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div> */}

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
                  Twitter
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
