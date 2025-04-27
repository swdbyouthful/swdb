// layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '행복한 사람들의 봄 축제',
  description: '수원동부교회 2025 행복한 사람들의 축제',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
