import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppWrap } from '../wrapper';

const Main = () => {
  return (
    <div
      id="Home"
      className="flex flex-col items-center justify-center min-h-screen mb-24"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center mt-10 ">
        <div className="font-inconsolata">
          <div className="flex flex-col md:flex-row md:space-x-10 mt-40 mb-20">
            <div className="md:w-1/3 flex justify-center items-center">
              {/* Add your avatar image */}
              <div className="rounded-full overflow-hidden w-70 h-70">
                <Image
                  src="/assets/about_me.png"
                  alt="Avatar"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              {/* Add text about yourself */}
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                About Me
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id nunc varius, volutpat est sit amet, elementum tellus. Fusce
                ultrices ultricies lectus, vitae lobortis nunc fermentum eu.
                Pellentesque condimentum sapien non justo efficitur, sit amet
                viverra neque tempus. Vestibulum tempor nunc a lorem feugiat,
                vitae hendrerit elit mattis.
              </p>
            </div>
          </div>

          <div className="text-center bg-gray-100 p-6 mb-6">
            <h2 className="pt-4">Read articles related to Web3 Security</h2>
            <h3 className="py-2 text-gray-600 mb-4">
              Go ahead and start navigating through the different topics I write
              about and other resources.
            </h3>
            <Link
              href="/#Articles"
              className="py-2 mt-4 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
            >
              Start Reading
            </Link>
          </div>
          <div className="bg-gray-100 p-6 mb-6 text-center">
            <h2 className="pt-4">
              Hire me as a Technical Writer or Private Auditor
            </h2>
            <h3 className="py-2 text-gray-600 mb-4">
              I write technical content to help me and others during audit
              sessions.
            </h3>
            <Link
              href="/services/ServicesPage"
              className="py-2 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
            >
              Contact Me
            </Link>
          </div>
          <div className="bg-gray-100 p-6 mb-6 text-center">
            <h2 className="pt-4 pb-4">
              Take advantage of the full potential of the Web3 Community.
            </h2>
            <h3 className="py-0 text-gray-600 mb-4">
              Study their private audit reports. Check how to stay up to date
              and connected. Find the best auditing tools.
            </h3>
            <div className="flex justify-center space-x-20">
              <Link
                href="/privateAudits/PrivateAuditsPage"
                className="py-2 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
              >
                Audit reports
              </Link>
              <Link
                href="/recommendations/RecommendationsPage"
                className="py-2 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
              >
                Web3 Community
              </Link>
              <Link
                href="/auditTools/AuditTools"
                className="py-2 mt-2 mb-2 text-md font-bold capitalize text-white rounded-md w-26 bg-gray-800 p-2"
              >
                Auditing tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Main, 'Home');
