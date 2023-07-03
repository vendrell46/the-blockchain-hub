import React from 'react';

import Link from 'next/link';
import { AppWrap } from '../wrapper';

const Auditing = () => {
  return (
    <div
      id="Auditing"
      className="flex flex-col items-center justify-center mt-14"
    >
      <div className="">
        <h1 className="text-4xl text-center p-4 text-[#00FFFF] ">Auditing</h1>
      </div>

      <p className="text-lg text-center mt-8 text-white mx-6">
        Here you will find the best reports from the top auditors.
      </p>
      <p className="text-lg text-center mt-0 text-white mx-6">
        And to help you out on the way you will find here some of the best tools
        for auditors.
      </p>

      <div className="flex flex-wrap mt-16 justify-center">
        <Link
          href="/privateAudits/PrivateAuditsPage"
          className="w-full md:w-1/3 bg-black border border-white rounded-lg p-10 m-4 hover:shadow-xl hover:shadow-white"
        >
          <h2 className="text-xl font-semibold mb-2 text-white">
            Private Audit Reports
          </h2>
          <p className="text-white mt-10">
            Get ready to learn from top auditors thanks to their public reports
            of their private audits.
          </p>
        </Link>

        <Link
          href="/auditTools/AuditTools"
          className="w-full md:w-1/3 bg-black border border-white rounded-lg p-10 m-4 hover:shadow-xl hover:shadow-white"
        >
          <h2 className="text-xl font-semibold mb-2 text-white">Audit Tools</h2>
          <p className="text-white mt-10">
            I have gathered some tools that will help you while auditing the
            code. Here you will always have them at hand.
          </p>
        </Link>

        <Link
          href="/postMortemReports/PostMortemReports"
          className="w-full md:w-1/3 bg-black border border-white rounded-lg p-10 m-4 hover:shadow-xl hover:shadow-white"
        >
          <h2 className="text-xl font-semibold mb-2 text-white">
            Post Mortem Reports
          </h2>
          <p className="text-white mt-10">
            Stay up to date with what happened in the recent hacks. You'll find
            here a summary, flow of funds, scam steps and everything connected
            with most important hacks.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AppWrap(Auditing, 'Auditing');
