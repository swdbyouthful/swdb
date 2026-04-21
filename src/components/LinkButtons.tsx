import Image from 'next/image';
import { getAssetPath } from '@/utils';
import { CHURCH } from '@/constants/event';

const buttons = [
  { href: CHURCH.naverMapUrl, alt: '네이버지도', src: 'image/Map_Service_Icon.png' },
  { href: CHURCH.kakaoMapUrl, alt: '카카오맵', src: 'image/kakaomap_basic.png' },
  { href: CHURCH.homepageUrl, alt: '홈페이지', src: 'image/swdb_ico.jpg' },
  { href: CHURCH.youtubeUrl, alt: 'YOUTUBE', src: 'image/youtube_social_icon_red.png' },
];

export const LinkButtons = () => (
  <div className={'mt-[20px] flex justify-evenly gap-[40px]'}>
    {buttons.map((button) => (
      <a
        key={button.href}
        className={'flex aspect-1/1 max-w-[90px] flex-auto items-center'}
        target="_blank"
        rel="noopener noreferrer"
        href={button.href}
      >
        <Image src={getAssetPath(button.src)} width={170} height={170} alt={button.alt} />
      </a>
    ))}
  </div>
);
