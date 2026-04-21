import { Metadata } from 'next';
import { CHURCH, EVENT_DATE } from '@/constants/event';

const SITE_URL = 'https://swdbyouthful.github.io/swdb';

export const metadata: Metadata = {
  title: '행복한 사람들의 봄 축제',
  description: '수원동부교회 2026 행복한 사람들의 축제에 여러분을 초대합니다.',
  openGraph: {
    title: '행복한 사람들의 봄 축제',
    description: '수원동부교회 2026 행복한 사람들의 축제에 여러분을 초대합니다.',
    url: `${SITE_URL}/campaign/happy-people`,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/image/main_banner.webp`,
        width: 1280,
        height: 720,
        alt: '행복한 사람들의 봄 축제 초대장',
      },
    ],
  },
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: '행복한 사람들의 봄 축제',
  description: '수원동부교회 2026 행복한 사람들의 축제에 여러분을 초대합니다.',
  startDate: EVENT_DATE.toISOString(),
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: CHURCH.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CHURCH.address,
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CHURCH.lat,
      longitude: CHURCH.lng,
    },
  },
  organizer: {
    '@type': 'Organization',
    name: CHURCH.name,
    url: CHURCH.homepageUrl,
  },
  image: [`${SITE_URL}/image/main_banner.webp`],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      {children}
    </>
  );
}
