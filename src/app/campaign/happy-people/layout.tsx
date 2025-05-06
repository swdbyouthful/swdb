// layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '행복한 사람들의 봄 축제',
  description: '수원동부교회 2025 행복한 사람들의 축제에 여러분을 초대합니다.',
  openGraph: {
    title: '행복한 사람들의 봄 축제',
    description: '수원동부교회 2025 행복한 사람들의 축제에 여러분을 초대합니다.',
    url: 'https://swdbyouthful.github.io/swdb/campaign/happy-people',
    type: 'website',
    images: [
      {
        url: 'https://swdbyouthful.github.io/swdb/image/main_banner_2.png',
        width: 1280,
        height: 720,
        alt: '행복한 사람들의 봄 축제 초대장',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
