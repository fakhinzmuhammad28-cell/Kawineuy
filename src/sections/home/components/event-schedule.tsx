'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export const EventSchedule = () => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // ❌ NONAKTIFKAN SECTION TOTAL
  return null;

  const scheduleItems = [
    {
      time: '3:30 PM',
      event: t('schedule.guest-arrival'),
      description: t('schedule.welcome-drinks'),
    },
    {
      time: '4:00 PM',
      event: t('schedule.wedding-ceremony'),
      description: t('schedule.vows'),
    },
    {
      time: '4:30 PM',
      event: t('schedule.photography'),
      description: t('schedule.welcome-drink'),
    },
    {
      time: '6:30 PM',
      event: t('schedule.reception-begins'),
      description: t('schedule.dinner-celebration'),
    },
    {
      time: '7:30 PM',
      event: t('schedule.first-dance'),
      description: t('schedule.special-moment'),
    },
    {
      time: '8:00 PM',
      event: t('schedule.dancing-party'),
      description: t('schedule.celebration-continues'),
    },
    {
      time: '12:00 AM',
      event: t('schedule.send-off'),
      description: t('schedule.sparkler-farewell'),
    },
  ];

  return (
    <div />
  );
};