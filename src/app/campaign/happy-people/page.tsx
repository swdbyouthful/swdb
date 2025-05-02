'use client';
import React, { useEffect } from 'react';
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
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_1.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_2.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_3.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_4.png`,
  `${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/slide_5.png`,
];

const CampaignPage = () => {
  useEffect(() => {
    initNaverMap('map', {
      center: new window.naver.maps.LatLng(37.233643, 127.065661),
      zoom: 18,
      mapTypeId: window.naver.maps.MapTypeId.NORMAL,
    });
  }, []);

  return (
    <div className={'flex justify-center bg-[#fffbec] text-center select-none'}>
      <div className={'flex w-full flex-col items-center gap-[20px] bg-white p-[20px] md:w-[750px]'}>
        <div className={'flex w-full flex-col gap-[8px]'}>
          {/* TODO: Image 사용시 빌드후 이미지 못불러옴 */}
          <Image
            className={'w-full'}
            src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/main_banner.png`}
            width={3840}
            height={2160}
            alt="대표이미지"
            priority
          />

          <div className={'diphylleia-regular leading-[1.2] font-bold text-[#276616]'}>
            {/* TODO: font-size, letter-spacing 요청값 반영 불가 임시반영 */}
            <p className={'text-[20px] tracking-[-2px]'}>예수님을 만나면 행복해집니다</p>
            <p className={'text-[15px] tracking-[-2px]'}>그 행복의 현장으로 여러분을 초대합니다</p>
          </div>

          {/* TODO: 초대하는 글 확인후 변경 */}
          <div className={'chosunilbo_myungo-regular text-[12px]'}>
            <p className={'mt-[8px]'}>행복한 사람들의 축제는 교회 공동체 속에</p>
            <p className={''}>전도운동과 영적 각성운동을 동시에 불러일으키는</p>
            <p className={''}>전 교회적 운동으로 세상에 복음을 편만하게 선포하는 것이</p>
            <p className={''}>그 목적입니다. 행복한 사람들의 축제는</p>
            <p className={''}>지역 사회에 교회의 위상을 높이고 성도들로 하여금</p>
            <p className={''}>전도에 대한 자신감을 갖게 하며 단 한 번도 교회를</p>
            <p className={''}>가본 적이 없는 사람들을 교회로 초청하여</p>
            <p className={''}>예수님을 전하는 전도입니다.</p>
          </div>

          <div className={'nanum-square-neo-extra-bold flex justify-center text-[14px] whitespace-break-spaces text-[#276616]'}>
            <span>{moment(eventDate, 'YYYYMMDDHH').format('YYYY년 M월 DD일, ')}</span>
            <span>{'앞으로 '}</span>
            <Countdown targetDate={moment(eventDate, 'YYYYMMDDHH')} useHours={false} useMinutes={false} useSeconds={false} />
            <span>{' 남았습니다.'}</span>
          </div>
        </div>

        <div className={'aspect-2/1 w-full'}>
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
          >
            {slideImageUrlList.map((url, index) => (
              <SwiperSlide key={index}>
                <Image className={'w-full'} src={url} width={3840} height={2160} alt={`슬라이드 ${index}`} priority />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* TODO: url 변경 */}
        <div className={'aspect-16/9 w-full'}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bCAH-KVT-hs?si=kU9eYBau-gQ87AAg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className={'w-full'}>
          <p className={'nanum-square-neo-heavy text-[20px] text-[#1a191b]'}>오시는 길</p>
          <a
            className={'nanum-square-neo-extra-bold text-[10px] text-[#1a191b]'}
            href={'https://map.naver.com/p/entry/place/13068216?c=15.00,0,0,0,dh'}
          >
            {'경기 화성시 영통로26번길 12'}
          </a>
          <div id="map" className={'aspect-1/1 w-full'}></div>

          <div className={'mt-[8px] flex gap-[40px]'}>
            {/* MEMO: 네이버지도 */}
            <a className={'aspect-1/1 flex-auto'} target="_blank" href={'https://map.naver.com/p/entry/place/13068216?c=15.00,0,0,0,dh'}>
              <Image
                className={''}
                src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/Map_Service_Icon.png`}
                width={170}
                height={170}
                alt="네이버지도"
              />
            </a>
            {/* MEMO: 카카오맵 */}
            <a className={'aspect-1/1 flex-auto'} target="_blank" href={'https://kko.kakao.com/DyIRZgeqZj'}>
              <Image
                className={''}
                src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/kakaomap_basic.png`}
                width={170}
                height={170}
                alt="카카오맵"
              />
            </a>
            {/* MEMO: 홈페이지 링크 */}
            <a className={'aspect-1/1 flex-auto'} target="_blank" href={'http://www.dongbu2030.or.kr/'}>
              <Image
                className={''}
                src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/swdb_ico.jpg`}
                width={170}
                height={170}
                alt="홈페이지"
              />
            </a>
            {/* MEMO: 유튜브 링크 */}
            <a className={'flex aspect-1/1 flex-auto items-center'} target="_blank" href={'https://www.youtube.com/@suwondongbu'}>
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
