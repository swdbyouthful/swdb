import { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      {/* TODO: layout 충돌? */}
      <Head>
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NAVER_MAP_CLIENT_ID}`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
