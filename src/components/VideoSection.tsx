import { PROMO_VIDEO_SRC } from '@/constants/event';

export const VideoSection = () => (
  <div className={'aspect-16/9 w-full overflow-hidden rounded-sm'}>
    <iframe
      width="100%"
      height="100%"
      src={PROMO_VIDEO_SRC}
      title="행복한 사람들의 봄 축제 홍보 영상"
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      sandbox="allow-scripts allow-same-origin allow-presentation"
      allowFullScreen
    />
  </div>
);
