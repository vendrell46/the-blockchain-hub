import Head from 'next/head';
import Navbar from 'theblockchainhub/components/Navbar';
import Main from 'theblockchainhub/components/Main';
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
