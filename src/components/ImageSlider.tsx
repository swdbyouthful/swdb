'use client';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getAssetPath } from '@/utils';

const slideImageUrlList = [
  getAssetPath('image/slide_2.webp'),
  getAssetPath('image/slide_3.webp'),
  getAssetPath('image/slide_4.webp'),
  getAssetPath('image/slide_5.webp'),
  getAssetPath('image/slide_6.webp'),
  getAssetPath('image/slide_7.webp'),
  getAssetPath('image/slide_8.webp'),
];

const slideSwiperStyle: CSSProperties & Record<`--${string}`, string> = {
  '--swiper-navigation-color': '#CDC9C3',
  '--swiper-pagination-color': '#CDC9C3',
  '--swiper-pagination-bullet-inactive-opacity': '0.5',
  '--swiper-pagination-bullet-inactive-color': '#ffffff',
};

export const ImageSlider = () => (
  <div className={'min-h-[188px] w-full overflow-hidden rounded-sm'}>
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      loop
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      style={slideSwiperStyle}
    >
      {slideImageUrlList.map((url, index) => (
        <SwiperSlide key={url}>
          <Image
            className={'w-full'}
            src={url}
            width={750}
            height={422}
            sizes="(max-width: 768px) 100vw, 750px"
            alt={''}
            loading={index === 0 ? 'eager' : 'lazy'}
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
