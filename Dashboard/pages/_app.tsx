import "../styles/globals.css";

import { Rajdhani } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "../common/Layout";

export const rajdhani = Rajdhani({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={rajdhani.className}>
      <Head>
        <title>Codaping</title>
        <meta name="description" content="Search subject" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
