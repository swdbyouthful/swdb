import type { Metadata, Viewport } from 'next';
import { Diphylleia, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { cn } from '@/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const diphylleia = Diphylleia({
  variable: '--font-diphylleia',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const SITE_URL = 'https://swdbyouthful.github.io/swdb';
const OG_IMAGE = `${SITE_URL}/image/main_banner.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '수원동부교회',
    template: '%s | 수원동부교회',
  },
  description: '수원동부교회 행복한 사람들의 봄 축제 초대장',
  manifest: '/swdb/manifest.json',
  icons: {
    icon: [
      { url: process.env.NODE_ENV === 'production' ? `${SITE_URL}/swdb.ico` : '/swdb.ico', sizes: 'any' },
      {
        url: process.env.NODE_ENV === 'production' ? `${SITE_URL}/favicon-32x32.png` : '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: process.env.NODE_ENV === 'production' ? `${SITE_URL}/favicon-16x16.png` : '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: process.env.NODE_ENV === 'production' ? `${SITE_URL}/apple-touch-icon.png` : '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: '수원동부교회',
    description: '수원동부교회 행복한 사람들의 봄 축제 초대장',
    url: `${SITE_URL}/`,
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 720,
        alt: '수원동부교회',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(geistSans.variable, geistMono.variable, diphylleia.variable, 'h-dvh overflow-y-auto antialiased')}>
        {!!process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID && (
          <Script
            type="text/javascript"
            strategy="beforeInteractive"
            src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
          />
        )}
        {children}
      </body>
    </html>
  );
}
