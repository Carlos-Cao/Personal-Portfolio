import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content="Carlos Cao, New Zealand, NZ, Auckland" />
        <meta name="description" content="Carlos Cao's personal website" />
        <meta name="author" content="Carlos Cao" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7PD5BP7V9Z"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`  
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7PD5BP7V9Z');
          `}
        </Script>
      </Head>
      <title>Carlos Cao</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
