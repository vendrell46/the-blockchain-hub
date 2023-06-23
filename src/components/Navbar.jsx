import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isArticlesDropdownOpen, setIsArticlesDropdownOpen] = useState(false);
  const [isAuditingDropdownOpen, setIsAuditingDropdownOpen] = useState(false);
  const articlesDropdownRef = useRef(null);
  const auditingDropdownRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleArticlesDropdownToggle = () => {
    setIsArticlesDropdownOpen(!isArticlesDropdownOpen);
  };

  const handleAuditingDropdownToggle = () => {
    setIsAuditingDropdownOpen(!isAuditingDropdownOpen);
  };

  const handleArticlesMouseEnter = () => {
    setIsArticlesDropdownOpen(true);
  };

  const handleArticlesMouseLeave = () => {
    setIsArticlesDropdownOpen(false);
  };

  const handleAuditingMouseEnter = () => {
    setIsAuditingDropdownOpen(true);
  };

  const handleAuditingMouseLeave = () => {
    setIsAuditingDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      articlesDropdownRef.current &&
      !articlesDropdownRef.current.contains(event.target)
    ) {
      setIsArticlesDropdownOpen(false);
    }
    if (
      auditingDropdownRef.current &&
      !auditingDropdownRef.current.contains(event.target)
    ) {
      setIsAuditingDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const Separator = () => (
    <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>
  );

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
              <div className="flex items-center">
                <a
                  href={'https://twitter.com/TheBlockChainer'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 mt-1 mb-1 text-sm sm:text-md font-bold capitalize text-white rounded-md bg-blue-400 p-2"
                >
                  Follow me
                </a>
                <div className="relative ml-4">
                  <Image
                    src="/assets/twitter.png"
                    alt="/"
                    width={25}
                    height={25}
                  />
                  <span className="absolute left-0 bottom-0 transform translate-x-1/2 -translate-y-full opacity-0 bg-gray-800 text-white text-xs py-0 px-2 rounded-md transition-opacity duration-300 pointer-events-none">
                    Twitter
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <a
                  href={'https://medium.com/@bloqarl/membership'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 mt-2 mb-2 text-sm sm:text-md font-bold capitalize text-white rounded-md bg-gray-800 p-2"
                >
                  Subscribe
                </a>
                <div className="relative ml-4">
                  <Image
                    src="/assets/medium.png"
                    alt="/"
                    width={25}
                    height={25}
                  />
                  <span className="absolute left-0 bottom-0 transform translate-x-1/2 -translate-y-full opacity-0 bg-gray-800 text-white text-xs py-0 px-2 rounded-md transition-opacity duration-300 pointer-events-none">
                    Medium
                  </span>
                </div>
              </div>
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
                onMouseEnter={handleArticlesMouseEnter}
                onMouseLeave={handleArticlesMouseLeave}
                onClick={handleArticlesDropdownToggle}
                ref={articlesDropdownRef}
              >
                <button className="text-gray-900 dark:text-white hover:underline capitalize shadow-none flex items-center">
                  <span className="mr-0">Articles</span>
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
                {isArticlesDropdownOpen && (
                  <ul
                    className="absolute left-0 w-40 py-2 mt-0 space-y-2 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    onMouseEnter={handleArticlesMouseEnter}
                    onMouseLeave={handleArticlesMouseLeave}
                    ref={articlesDropdownRef}
                  >
                    <li>
                      <Link
                        href={'/myJourney/MyJourneyPage'}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        My Journey
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/smartContract/SmartContractPage'}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        Smart Contract
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/defi/DeFiPage'}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        DeFi Protocols
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/web3security/Web3SecurityPage'}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        Web3 Security
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/roadmap/RoadmapPage'}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        Roadmap
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <Separator />
              <li>
                <Link
                  href="/services/ServicesPage"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Services
                </Link>
              </li>
              <Separator />
              <li
                className="relative"
                onMouseEnter={handleAuditingMouseEnter}
                onMouseLeave={handleAuditingMouseLeave}
                onClick={handleAuditingDropdownToggle}
                ref={auditingDropdownRef}
              >
                <button className="text-gray-900 dark:text-white hover:underline capitalize shadow-none flex items-center">
                  <span className="mr-0">Auditing</span>
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
                {isAuditingDropdownOpen && (
                  <ul
                    className="absolute left-0 w-40 py-2 mt-0 space-y-2 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    onMouseEnter={handleAuditingMouseEnter}
                    onMouseLeave={handleAuditingMouseLeave}
                    ref={auditingDropdownRef}
                  >
                    <li>
                      <Link
                        href={'/privateAudits/PrivateAuditsPage'}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsAuditingDropdownOpen(false)}
                      >
                        Private audit reports
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/auditTools/AuditTools'}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsAuditingDropdownOpen(false)}
                      >
                        Audit tools
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <Separator />
              <li>
                <Link
                  href="/recommendations/RecommendationsPage"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Web3Sec Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
