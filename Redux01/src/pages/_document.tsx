// import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <link
          rel="stylesheet"
          href={
            "https://cdn.jsdelivr.net/gh/kimeiga/bahunya/dist/bahunya.min.css"
          }
        />
        <title></title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
