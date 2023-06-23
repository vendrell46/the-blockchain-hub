import Head from 'next/head';
import Navbar from 'theblockchainhub/components/Navbar';
import Main from 'theblockchainhub/components/Main';
import MyJourney from 'theblockchainhub/components/MyJourney';
import SmartContract from 'theblockchainhub/components/SmartContract';
import DeFi from 'theblockchainhub/components/DeFi';
import Web3Security from 'theblockchainhub/components/Web3Security';
import Roadmap from 'theblockchainhub/components/Roadmap';
import Articles from 'theblockchainhub/components/Articles';
import Services from 'theblockchainhub/components/Services';
import Auditing from 'theblockchainhub/components/Auditing';
import Web3Community from 'theblockchainhub/components/Web3Community';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Blockchainer Hub</title>
      </Head>
      <Navbar />
      <Main />
      <Articles />
      <Services />
      <Auditing />
      <Web3Community />
    </div>
  );
}
