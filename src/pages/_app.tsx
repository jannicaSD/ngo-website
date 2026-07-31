import type { AppProps } from "next/app";
import Head from "next/head";
import "../style/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo1.png" type="image/png" />
        <title>Moments of Hope</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}