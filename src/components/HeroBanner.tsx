import Image from 'next/image';
import { getAssetPath } from '@/utils';

export const HeroBanner = () => (
  <Image
    className={'w-full rounded-sm'}
    src={getAssetPath('image/main_banner.webp')}
    width={750}
    height={422}
    sizes="(max-width: 768px) 100vw, 750px"
    alt="대표이미지"
    priority
  />
);
