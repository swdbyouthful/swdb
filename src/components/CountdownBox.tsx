'use client';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Countdown } from '@/components';
import { cn } from '@/utils';
import { EVENT_DATE } from '@/constants/event';

export const CountdownBox = () => {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setIsStarted(EVENT_DATE.diff(dayjs(), 'day') <= 0);
  }, []);

  return (
    <div
      className={cn(
        'nanum-square-neo-extra-bold flex w-[fit-content] justify-center border border-[#1a191b] px-[4px] text-[14px] whitespace-pre text-[#276616]',
        isStarted && 'flex-wrap'
      )}
    >
      <span className={'whitespace-nowrap'}>{EVENT_DATE.format('YYYY년 M월 DD일,')}</span>

      {!isStarted ? (
        <>
          <span>{' 앞으로 '}</span>
          <Countdown targetDate={EVENT_DATE} useHours={false} useMinutes={false} useSeconds={false} />
          <span>{' 남았습니다.'}</span>
        </>
      ) : (
        <p>{'행복한 사람들의 축제가 시작되었습니다!'}</p>
      )}
    </div>
  );
};
