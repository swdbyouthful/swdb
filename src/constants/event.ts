import dayjs from 'dayjs';

export const EVENT_DATE = dayjs('2026-05-31T09:00:00');

export const CHURCH = {
  name: '수원동부교회',
  address: '경기 화성시 영통로26번길 12',
  lat: 37.233643,
  lng: 127.065661,
  naverMapUrl: 'https://map.naver.com/p/entry/place/13068216?c=15.00,0,0,0,dh',
  kakaoMapUrl: 'https://kko.kakao.com/DyIRZgeqZj',
  homepageUrl: 'http://www.dongbu2030.or.kr/',
  youtubeUrl: 'https://www.youtube.com/@suwondongbu',
} as const;

export const PROMO_VIDEO_SRC = 'https://www.youtube.com/embed/AB4ItzOL7M0?si=fsslNxJiLlWQAhdr';

export const MAP_DEFAULT_OPTIONS = {
  zoom: 17,
  maxZoom: 19,
  minZoom: 13,
} as const;
