import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb' : '',
  // images: {
  //   loader: 'imgix',
  //   path: 'https://swdbyouthful.github.io/swdb',
  // },
};

export default nextConfig;
