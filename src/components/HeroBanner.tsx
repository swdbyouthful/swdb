import Image from 'next/image';
import { getAssetPath } from '@/utils';

export const HeroBanner = () => (
  <Image
    className={'w-full rounded-sm'}
    src={getAssetPath('image/main_banner.webp')}
    width={750}
    height={422}
    sizes="(max-width: 768px) 100vw, 750px"
    alt="2026 행복한 사람들의 봄축제 '소망의 닻(Anchor of Hope)' - 5월 31일(일) 1부 오전 9시, 2부 오전 11시, 3부 오후 2시"
    priority
  />
);
