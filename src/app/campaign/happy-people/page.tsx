import { CountdownBox, HeroBanner, ImageSlider, InvitationText, LinkButtons, MapSection, VideoSection } from '@/components';
import { CHURCH } from '@/constants/event';

const CampaignPage = () => (
  <div className={'flex justify-center bg-[#fffbec] text-center select-none'}>
    <div className={'flex w-full flex-col items-center gap-[20px] bg-[#ffffff] p-[20px] md:w-[750px]'}>
      <div className={'flex w-full flex-col items-center gap-[8px]'}>
        <HeroBanner />
        <InvitationText />
        <CountdownBox />
      </div>

      <ImageSlider />

      <VideoSection />

      <div className={'w-full'}>
        <p className={'nanum-square-neo-heavy text-[20px] text-[#1a191b]'}>오시는 길</p>
        <a
          className={'nanum-square-neo-extra-bold text-[13px] text-[#1a191b]'}
          target="_blank"
          rel="noopener noreferrer"
          href={CHURCH.naverMapUrl}
        >
          {CHURCH.address}
        </a>
        <MapSection />
        <LinkButtons />
      </div>
    </div>
  </div>
);

export default CampaignPage;
