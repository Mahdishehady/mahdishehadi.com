import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'; // Import the Head component
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     
      <Script async src="https://www.googletagmanager.com/gtag/js?id=gtag('config', 'G-EM01G3PYRV')" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-EM01G3PYRV');
        `}
      </Script>

     
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
