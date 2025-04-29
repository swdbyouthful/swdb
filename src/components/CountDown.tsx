import React from 'react';
import moment from 'moment';
import { useEffect, useState } from 'react';

export const Countdown = ({
  targetDate = moment('20250525', 'YYYYMMDD'),
  useDays = true,
  useHours = true,
  useMinutes = true,
  useSeconds = true,
}) => {
  const calculateTimeLeft = () => {
    const now = moment();
    const difference = targetDate.diff(now);

    if (difference > 0) {
      return {
        days: targetDate.diff(now, 'days'),
        hours: targetDate.diff(now, 'hours') % 24,
        minutes: targetDate.diff(now, 'minutes') % 60,
        seconds: targetDate.diff(now, 'seconds') % 60,
      };
    } else {
      return null;
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div>Event has started!</div>;
  }

  return (
    <div>
      {useDays && <span>{timeLeft.days}일</span>}
      {useHours && <span>{` ${timeLeft.hours}시간`}</span>}
      {useMinutes && <span>{` ${timeLeft.minutes}분`}</span>}
      {useSeconds && <span>{` ${timeLeft.seconds}초`}</span>}
    </div>
  );
};
