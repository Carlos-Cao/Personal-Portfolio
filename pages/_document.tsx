import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Carlos Cao</title>
      <meta name="keywords" content="Carlos Cao, New Zealand, NZ, Auckland" />
      <meta name="description" content="Carlos Cao's personal website" />
      <meta name="author" content="Carlos Cao" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
