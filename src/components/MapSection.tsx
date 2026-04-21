'use client';
import { useState } from 'react';
import Script from 'next/script';
import { initNaverMap } from '@/utils';
import { CHURCH, MAP_DEFAULT_OPTIONS } from '@/constants/event';

const MAP_CONTAINER_ID = 'map';

export const MapSection = () => {
  const [mapError, setMapError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const handleRetry = () => {
    setMapError(false);
    setRetryKey((k) => k + 1);
  };

  return (
    <>
      {process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID && !mapError && (
        <Script
          key={retryKey}
          strategy="afterInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
          onReady={() => {
            initNaverMap(MAP_CONTAINER_ID, {
              center: new window.naver.maps.LatLng(CHURCH.lat, CHURCH.lng),
              ...MAP_DEFAULT_OPTIONS,
            });
          }}
          onError={() => setMapError(true)}
        />
      )}
      <div id={MAP_CONTAINER_ID} className={'aspect-1/1 w-full rounded-sm'}>
        {mapError && (
          <div className={'flex h-full w-full flex-col items-center justify-center gap-[8px] bg-[#f4f4f4] text-[13px]'}>
            <p>{'지도를 불러올 수 없습니다.'}</p>
            <button
              type="button"
              className={'rounded-sm border border-[#1a191b] px-[8px] py-[2px]'}
              onClick={handleRetry}
            >
              {'다시 시도'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
