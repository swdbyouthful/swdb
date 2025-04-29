import { Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <body>
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NAVER_MAP_CLIENT_ID}`}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
