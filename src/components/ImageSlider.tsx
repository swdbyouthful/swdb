'use client';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getAssetPath } from '@/utils';

const slides = [
  {
    src: getAssetPath('image/slide_2.webp'),
    alt: '수원동부교회 소개 - 함께 예배하는 행복한 가정, 함께 성장하는 부흥 공동체 (제자·부흥·사랑·선교·차세대 공동체)',
  },
  {
    src: getAssetPath('image/slide_3.webp'),
    alt: '예배 안내 - 주일예배 오전 9시/11시/오후 1시 30분, 수요예배 저녁 7시 30분, 금요성령집회 저녁 8시 30분 (임마누엘 홀)',
  },
  {
    src: getAssetPath('image/slide_4.webp'),
    alt: '주일학교 안내 - 영아부(0-4세)·유치부(5-7세)·유초등부(8-13세)·청소년부(14-19세) 매주 주일 오전 11시',
  },
  {
    src: getAssetPath('image/slide_5.webp'),
    alt: '부모·교사 세미나 - 강사 서유지 소장 (한국부모교육연구소)',
  },
  {
    src: getAssetPath('image/slide_6.webp'),
    alt: '청년부 THE WAVE 2026 겨울 수련회 단체 사진 - 젊은이 예배(3부) 매주 주일 오후 1시 30분, 소그룹 모임 15-16시 30분',
  },
  {
    src: getAssetPath('image/slide_7.webp'),
    alt: '금요성령집회 - 매주 금요일 오후 8시 30분, 임마누엘 본당(B2)',
  },
  {
    src: getAssetPath('image/slide_8.webp'),
    alt: '가정교회 리더 세미나 - 함께 예배하고 함께 성장하는 믿음의 공동체',
  },
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
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.src}>
          <Image
            className={'w-full'}
            src={slide.src}
            width={750}
            height={422}
            sizes="(max-width: 768px) 100vw, 750px"
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
