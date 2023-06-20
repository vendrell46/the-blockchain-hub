import 'theblockchainhub/styles/globals.css';
import Head from 'next/head';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Navbar from 'theblockchainhub/components/Navbar';

function getLibrary(provider) {
  return new Web3(provider);
}

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Blockchainer Hub</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
      <div className="font-inconsolata">
        <Navbar />
        <Component {...pageProps} />
      </div>{' '}
    </>
  );
}

export default App;
