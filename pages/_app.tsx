import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'; // Import the Head component
import Script from 'next/script';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {


  useEffect(() => {
    if(typeof window === undefined) return;
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...rest:any){(window as any).dataLayer.push(rest);}
    gtag('js', new Date());
    gtag('config', 'G-EM01G3PYRV');
  })

  return (
    <>
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=gtag('config', 'G-EM01G3PYRV')" ></script>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
