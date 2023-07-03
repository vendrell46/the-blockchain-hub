import 'theblockchainhub/styles/globals.css';
import Head from 'next/head';
import Web3 from 'web3';
import Navbar from 'theblockchainhub/components/Navbar';
import Footer from 'theblockchainhub/components/Footer';
import { Analytics } from '@vercel/analytics/react';

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
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            function loadScript(a){var b=document.getElementsByTagName('head')[0],c=document.createElement('script');c.type='text/javascript',c.src='https://tracker.metricool.com/resources/be.js',c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:'2ba07da6edff1af44a9f6e72814107a'})});
            `,
        }}
      />{' '}
      <div className="font-inconsolata">
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </div>{' '}
    </>
  );
}

export default App;
