import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isArticlesDropdownOpen, setIsArticlesDropdownOpen] = useState(false);
  const [isAuditingDropdownOpen, setIsAuditingDropdownOpen] = useState(false);
  const articlesDropdownRef = useRef(null);
  const auditingDropdownRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the screen width breakpoint as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <nav className="bg-white border-gray-200 dark:bg-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 ">
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
                <Link
                  href={'https://twitter.com/TheBlockChainer'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 mt-1 mb-1 text-sm sm:text-md font-bold capitalize text-white rounded-md bg-blue-400 p-2 hidden sm:block"
                >
                  Follow me
                </Link>
                <div className="relative ml-4">
                  <Link
                    href={'https://twitter.com/TheBlockChainer'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/twitter.png"
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </Link>

                  <span className="absolute left-0 bottom-0 transform translate-x-1/2 -translate-y-full opacity-0 bg-gray-800 text-white text-xs py-0 px-2 rounded-md transition-opacity duration-300 pointer-events-none">
                    Twitter
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <Link
                  href={'https://medium.com/@bloqarl/membership'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 mt-2 mb-2 text-sm sm:text-md font-bold capitalize text-white rounded-md bg-gray-800 p-2 hidden sm:block"
                >
                  Subscribe
                </Link>
                <div className="relative ml-4">
                  <Link
                    href={'https://medium.com/@bloqarl/membership'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/medium.png"
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </Link>

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
              <li>
                <button
                  className="text-gray-900 dark:text-white hover:underline capitalize shadow-none flex items-center md:hidden"
                  onClick={handleMenuToggle}
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2.75 8.5C2.33579 8.5 2 8.83579 2 9.25C2 9.66421 2.33579 10 2.75 10H17.25C17.6642 10 18 9.66421 18 9.25C18 8.83579 17.6642 8.5 17.25 8.5H2.75ZM17.25 12C17.6642 12 18 12.3358 18 12.75C18 13.1642 17.6642 13.5 17.25 13.5H2.75C2.33579 13.5 2 13.1642 2 12.75C2 12.3358 2.33579 12 2.75 12H17.25Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              {!isMobile && (
                <div className="flex flex-row mt-0 mr-6 space-x-6 text-md font-medium">
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
                        <li>
                          <Link
                            href={'/postMortemReports/PostMortemReports'}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => setIsAuditingDropdownOpen(false)}
                          >
                            Post Mortem reports
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <Separator />
                  <li>
                    <Link
                      href="/ctfs/Ctfs"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      CTFs
                    </Link>
                  </li>
                  <Separator />
                  <li>
                    <Link
                      href="/web3community/Web3CommunityPage"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Web3Sec Community
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 right-0 w-64 h-screen bg-white dark:bg-gray-800 shadow-md">
            <ul className="px-4 py-2 space-y-10">
              <li
                className="relative"
                onMouseEnter={handleArticlesMouseEnter}
                onMouseLeave={handleArticlesMouseLeave}
                onClick={handleArticlesDropdownToggle}
                ref={articlesDropdownRef}
              >
                <button className="text-gray-900 dark:text-white hover:underline capitalize shadow-none flex items-center pt-8">
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
                        className="block px-4 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        My Journey
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/smartContract/SmartContractPage'}
                        className="block px-4 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        Smart Contract
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/defi/DeFiPage'}
                        className="block px-4 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        DeFi Protocols
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/web3security/Web3SecurityPage'}
                        className="block px-4 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        Web3 Security
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/roadmap/RoadmapPage'}
                        className="block px-4 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsArticlesDropdownOpen(false)}
                      >
                        Roadmap
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <hr className="border-gray-500 my-4" />

              <li>
                <Link
                  href="/services/ServicesPage"
                  className="text-gray-900 dark:text-white hover:underline mt-4"
                >
                  Services
                </Link>
              </li>
              <hr className="border-gray-500 my-4" />

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
                    <li>
                      <Link
                        href={'/postMortemReports/PostMortemReports'}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsAuditingDropdownOpen(false)}
                      >
                        Post Mortem reports
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <hr className="border-gray-500 my-4" />

              <li>
                <Link
                  href="/ctfs/Ctfs"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  CTFs
                </Link>
              </li>

              <hr className="border-gray-500 my-4" />

              <li>
                <Link
                  href="/web3community/Web3CommunityPage"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Web3Sec Community
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
