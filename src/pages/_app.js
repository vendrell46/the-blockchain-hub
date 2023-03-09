import 'theblockchainhub/styles/globals.css';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Navbar from 'theblockchainhub/components/Navbar';

function getLibrary(provider) {
  return new Web3(provider);
}

export default function App({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar />
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
