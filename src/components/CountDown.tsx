'use client';
import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Dayjs;
  useDays?: boolean;
  useHours?: boolean;
  useMinutes?: boolean;
  useSeconds?: boolean;
}

const calculateTimeLeft = (targetDate: Dayjs): TimeLeft | null => {
  const now = dayjs();
  const diffMs = targetDate.diff(now);

  if (diffMs <= 0) return null;

  return {
    days: targetDate.diff(now, 'day'),
    hours: targetDate.diff(now, 'hour') % 24,
    minutes: targetDate.diff(now, 'minute') % 60,
    seconds: targetDate.diff(now, 'second') % 60,
  };
};

export const Countdown = ({
  targetDate,
  useDays = true,
  useHours = true,
  useMinutes = true,
  useSeconds = true,
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));

    const intervalMs = useSeconds ? 1_000 : useMinutes ? 60_000 : 3_600_000;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, intervalMs);

    return () => clearInterval(timer);
  }, [targetDate, useSeconds, useMinutes]);

  if (!mounted) {
    return <div role="timer" aria-live="polite" />;
  }

  if (!timeLeft) {
    return <div>축제가 시작되었습니다!</div>;
  }

  const ariaLabel = [
    useDays && `${timeLeft.days}일`,
    useHours && `${timeLeft.hours}시간`,
    useMinutes && `${timeLeft.minutes}분`,
    useSeconds && `${timeLeft.seconds}초`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div role="timer" aria-live="polite" aria-label={`${ariaLabel} 남음`}>
      {useDays && <span>{timeLeft.days}일</span>}
      {useHours && <span>{` ${timeLeft.hours}시간`}</span>}
      {useMinutes && <span>{` ${timeLeft.minutes}분`}</span>}
      {useSeconds && <span>{` ${timeLeft.seconds}초`}</span>}
    </div>
  );
};
