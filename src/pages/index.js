import Head from 'next/head';
import Navbar from 'theblockchainhub/components/Navbar';
import Main from 'theblockchainhub/components/Main';
import Blockchain from 'theblockchainhub/components/Blockchain';
import SmartContract from 'theblockchainhub/components/SmartContract';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Blockchain Hub</title>
      </Head>
      <Navbar />
      <Main />
      <Blockchain />
      <SmartContract />
    </div>
  );
}
