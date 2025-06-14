'use client';
import React, { CSSProperties, useEffect } from 'react';
import moment from 'moment';
import { Countdown } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { initNaverMap } from '@/utils';
import Image from 'next/image';

const eventDate = '2025052509';

const slideImageUrlList = [
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_2_2.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_3_2.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_4_2.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_5_2.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_6_2.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_7_2.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_8_2.png`,
];

const CampaignPage = () => {
  useEffect(() => {
    initNaverMap('map', {
      center: new window.naver.maps.LatLng(37.233643, 127.065661),
      zoom: 17,
      maxZoom: 19,
      minZoom: 13,
    });
  }, []);

  return (
    <div className={'flex justify-center bg-[#fffbec] text-center select-none'}>
      <div className={'flex w-full flex-col items-center gap-[20px] bg-[#ffffff] p-[20px] md:w-[750px]'}>
        <div className={'flex w-full flex-col items-center gap-[8px]'}>
          <Image
            className={'w-full rounded-sm'}
            src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/main_banner_2.png`}
            width={3840}
            height={2160}
            alt="대표이미지"
            loading="lazy"
          />

          <div className={'diphylleia-regular mt-[12px] leading-[1.2] font-bold tracking-[-2px] text-[#276616]'}>
            <p className={'text-[20px]'}>예수님을 만나면 행복해집니다</p>
            <p className={'text-[15px]'}>그 행복의 현장으로 여러분을 초대합니다</p>
          </div>

          {/* MEMO: 초대장 본문 */}
          <div className={'chosunilbo_myungo-regular text-[12px] leading-[1.3] font-bold break-keep'}>
            <p className={'mt-[8px]'}>행복하기를 원하는 사람은 많지만,</p>
            <p>정작 그 행복을 찾은 사람은 적습니다.</p>
            <p>살아계신 하나님을 만나 행복한 사람들이</p>
            <p>그 행복을 당신에게 소개하고자 합니다.</p>
            <p>세상에서 가장 행복한 축제에 당신을 초대합니다.</p>
          </div>

          <div
            className={
              'nanum-square-neo-extra-bold flex w-[fit-content] justify-center border border-[#1A191B] px-[4px] text-[14px] whitespace-break-spaces text-[#276616]'
            }
          >
            <span className={'whitespace-nowrap'}>{moment(eventDate, 'YYYYMMDDHH').format('YYYY년 M월 DD일,')}</span>
            <span>{' 앞으로 '}</span>
            <Countdown targetDate={moment(eventDate, 'YYYYMMDDHH')} useHours={false} useMinutes={false} useSeconds={false} />
            <span>{' 남았습니다.'}</span>
          </div>
        </div>

        <div className={'min-h-[188px] w-full overflow-hidden rounded-sm'}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            loop
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            style={
              {
                '--swiper-navigation-color': '#CDC9C3',
                '--swiper-pagination-color': '#CDC9C3',
                '--swiper-pagination-bullet-inactive-opacity': '0.5',
                '--swiper-pagination-bullet-inactive-color': '#ffffff',
              } as CSSProperties
            }
          >
            {slideImageUrlList.map((url, index) => (
              <SwiperSlide key={index}>
                <Image className={'w-full'} src={url} width={3840} height={2160} alt={`슬라이드 ${index}`} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* TODO: url 변경 */}
        <div className={'aspect-16/9 w-full overflow-hidden rounded-sm'}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/AB4ItzOL7M0?si=fsslNxJiLlWQAhdr"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className={'w-full'}>
          <p className={'nanum-square-neo-heavy text-[20px] text-[#1a191b]'}>오시는 길</p>
          <a
            className={'nanum-square-neo-extra-bold text-[13px] text-[#1a191b]'}
            target="_blank"
            href={'https://map.naver.com/p/entry/place/13068216?c=15.00,0,0,0,dh'}
          >
            {'경기 화성시 영통로26번길 12'}
          </a>

          <div id="map" className={'aspect-1/1 w-full rounded-sm'}></div>

          <div className={'mt-[20px] flex justify-evenly gap-[40px]'}>
            {/* MEMO: 네이버지도 */}
            <a
              className={'aspect-1/1 max-w-[90px] flex-auto'}
              target="_blank"
              href={'https://map.naver.com/p/entry/place/13068216?c=15.00,0,0,0,dh'}
            >
              <Image
                className={''}
                src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/Map_Service_Icon.png`}
                width={170}
                height={170}
                alt="네이버지도"
              />
            </a>
            {/* MEMO: 카카오맵 */}
            <a className={'aspect-1/1 max-w-[90px] flex-auto'} target="_blank" href={'https://kko.kakao.com/DyIRZgeqZj'}>
              <Image
                className={''}
                src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/kakaomap_basic.png`}
                width={170}
                height={170}
                alt="카카오맵"
              />
            </a>
            {/* MEMO: 홈페이지 링크 */}
            <a className={'aspect-1/1 max-w-[90px] flex-auto'} target="_blank" href={'http://www.dongbu2030.or.kr/'}>
              <Image
                className={''}
                src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/swdb_ico.jpg`}
                width={170}
                height={170}
                alt="홈페이지"
              />
            </a>
            {/* MEMO: 유튜브 링크 */}
            <a
              className={'flex aspect-1/1 max-w-[90px] flex-auto items-center'}
              target="_blank"
              href={'https://www.youtube.com/@suwondongbu'}
            >
              <Image
                className={''}
                src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/youtube_social_icon_red.png`}
                width={170}
                height={170}
                alt="YOUTUBE"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
