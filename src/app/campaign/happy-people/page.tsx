'use client';
import React, { useEffect } from 'react';
import moment from 'moment';
// import { initNaverMap } from '@/utils';
import { Countdown } from '@/components';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    // initNaverMap('map', {
    //   center: new window.naver.maps.LatLng(37.2872, 127.0324),
    //   zoom: 15,
    //   mapTypeId: window.naver.maps.MapTypeId.NORMAL,
    // });
  }, []);

  return (
    <div className={'flex justify-center bg-gray-200 text-center'}>
      <div className={'flex w-full flex-col items-center gap-[20px] bg-white p-[20px] md:w-[750px]'}>
        <div className={'flex w-full flex-col gap-[8px] border p-[16px]'}>
          <Image
            className={'w-full bg-green-300'}
            src={`${process.env.NODE_ENV === 'production' ? 'https://swdbyouthful.github.io/swdb/' : '/'}image/main_banner.png`}
            width={3840}
            height={2160}
            alt="대표이미지"
            priority
          />

          <div>
            <span>{moment(eventDate, 'YYYYMMDDHH').format('YYYY. MM. DD')}</span>
            <span>{' / '}</span>
            <span>수원동부교회</span>
          </div>

          {/* TODO: 초대하는 글 확인후 변경 */}
          <div className={'border border-gray-300 p-[8px]'}>
            <p className={'text-[16px] font-bold'}>
              예수님을 만나면 행복해집니다
              <br />그 행복의 현장으로 여러분을 초대합니다
            </p>

            <p className={'mt-[8px] text-[12px]'}>행복한 사람들의 축제는 교회 공동체 속에</p>
            <p className={'text-[12px]'}>전도운동과 영적 각성운동을 동시에 불러일으키는</p>
            <p className={'text-[12px]'}>전 교회적 운동으로 세상에 복음을 편만하게 선포하는 것이</p>
            <p className={'text-[12px]'}>그 목적입니다. 행복한 사람들의 축제는</p>
            <p className={'text-[12px]'}>지역 사회에 교회의 위상을 높이고 성도들로 하여금</p>
            <p className={'text-[12px]'}>전도에 대한 자신감을 갖게 하며 단 한 번도 교회를</p>
            <p className={'text-[12px]'}>가본 적이 없는 사람들을 교회로 초청하여</p>
            <p className={'text-[12px]'}>예수님을 전하는 전도입니다.</p>
          </div>

          <div className={'flex justify-center text-[12px] whitespace-break-spaces'}>
            <span>{moment(eventDate, 'YYYYMMDDHH').format('YYYY년 M월 DD일, ')}</span>
            <span>{'앞으로 '}</span>
            <Countdown targetDate={moment(eventDate, 'YYYYMMDDHH')} useHours={false} useMinutes={false} useSeconds={false} />
            <span>{' 남았습니다.'}</span>
          </div>
        </div>

        <div className={'aspect-2/1 w-full border p-[16px]'}>
          {/* TODO: 슬라이드가 안넘어감 */}
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
                <Image className={'w-full bg-green-300'} src={url} width={3840} height={2160} alt={`슬라이드 ${index}`} priority />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* TODO: url 변경 */}
        <div className={'w-full border'}>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/bCAH-KVT-hs?si=kU9eYBau-gQ87AAg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className={'w-full'}>
          <p>오시는 길</p>
          <a href={'https://map.naver.com/p/entry/place/13068216?c=15.00,0,0,0,dh'}>{'경기 화성시 영통로26번길 12'}</a>
          {/* TODO: 네이버지도 api 초기화 해결중 */}
          <div id="map" className={'aspect-1/1 w-full border'}></div>

          <div className={'mt-[8px] flex gap-[8px]'}>
            {/* TODO: 아이콘도 추가 */}
            {/* TODO: 네이버지도 */}
            <a className={'aspect-1/1 flex-auto border'}></a>
            {/* TODO: 카카오맵 */}
            <a className={'aspect-1/1 flex-auto border'}></a>
            {/* TODO: 홈페이지 링크 */}
            <a className={'aspect-1/1 flex-auto border'}></a>
            {/* TODO: 유튜브 링크 */}
            <a className={'aspect-1/1 flex-auto border'}></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
