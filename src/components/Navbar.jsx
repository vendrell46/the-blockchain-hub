import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  async function contactMe() {}

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <nav className="bg-white border-gray-200 dark:bg-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <div className="flex items-center">
            <Link href="/#Home">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/assets/course_logo.jpeg"
                  alt="/"
                  width={80}
                  height={80}
                  className="hidden sm:block"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center flex-grow">
            <Link href="/#Home">
              <Image
                src="/assets/blockchainer_logo.png"
                alt="/"
                width={300}
                height={0}
                className="w-45 sm:w-auto"
              />
            </Link>
          </div>
          <div className="flex flex-col items-end justify-center space-y-2 md:space-y-0 md:flex-row md:items-center">
            <div className="flex flex-col">
              <a
                href={'https://twitter.com/TheBlockChainer'}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 mt-1 mb-1 text-sm sm:text-md font-bold capitalize text-white rounded-md bg-blue-400 p-2"
              >
                Follow me on Twitter
              </a>
              <a
                href={'https://medium.com/@bloqarl/membership'}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 mt-2 mb-2 text-sm sm:text-md font-bold capitalize text-white rounded-md bg-gray-800 p-2"
              >
                Subscribe to my Medium
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-2 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-6 text-md font-medium">
              <li
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleDropdownToggle}
                ref={dropdownRef}
              >
                <button className="text-gray-900 dark:text-white hover:underline capitalize shadow-none flex items-center">
                  <span className="mr-0">My Articles</span>
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul
                    className="absolute left-0 w-40 py-2 mt-0 space-y-2 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={dropdownRef}
                  >
                    <li>
                      <Link
                        href="/#MyJourney"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Journey
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#SmartContract"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Smart Contract
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#DeFi"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        DeFi Protocols
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#Web3Security"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Web3 Security
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#Roadmap"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Roadmap
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/services/ServicesPage"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/recommendations/RecommendationsPage"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Recommendations
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
