import 'theblockchainhub/styles/globals.css';
import Head from 'next/head';
import Web3 from 'web3';
import Navbar from 'theblockchainhub/components/Navbar';
import Footer from 'theblockchainhub/components/Footer';

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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="a442a91e-022d-41b8-b795-00215ef6a901";
            (function(){
              var d=document;
              var s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
            `,
          }}
        />
      </Head>
      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
      <div className="font-inconsolata">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>{' '}
    </>
  );
}

export default App;
