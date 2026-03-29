'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface CoupleIntroductionProps {
  bride: WeddingConfigType['bride'];
  groom: WeddingConfigType['groom'];
  isVisible: boolean;
}

export const CoupleIntroduction = ({
  bride,
  groom,
}: CoupleIntroductionProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-white to-rose-50/30"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-4">
            {t('couple.our-story')}
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            {t('couple.story-text')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <div className="relative inline-block mb-6">
              <div className="w-64 h-64 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
                <Image
                  src={bride.photo}
                  alt={bride.fullName}
                  width={256}
                  height={256}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-5xl font-serif text-gray-800 mb-2">
              {bride.fullName}
            </h3>

            <p className="text-xl text-rose-600 mb-4 font-medium">
              {t('couple.the-bride')}
            </p>

            {/* 🔥 INSTAGRAM BRIDE */}
            <a
              href="https://www.instagram.com/annidaazizahn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-rose-100 text-gray-600 hover:text-rose-500 hover:shadow-md transition-all duration-300 mb-4 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-pink-500 group-hover:scale-110 transition"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zM8 3.993a4.109 4.109 0 1 1 0 8.217 4.109 4.109 0 0 1 0-8.217zm0 1.441a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334zm4.988-1.328a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/>
              </svg>
              <span>@annidaazizahn</span>
            </a>

            <p className="text-lg text-gray-600">
              {t('couple.bride-description')}
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-6">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
                <Image
                  src={groom.photo}
                  alt={groom.fullName}
                  width={256}
                  height={256}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-5xl font-serif text-gray-800 mb-2">
              {groom.fullName}
            </h3>

            <p className="text-xl text-blue-600 mb-4 font-medium">
              {t('couple.the-groom')}
            </p>

            {/* 🔥 INSTAGRAM GROOM */}
            <a
              href="https://www.instagram.com/alfakh28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-blue-100 text-gray-600 hover:text-blue-500 hover:shadow-md transition-all duration-300 mb-4 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-blue-500 group-hover:scale-110 transition"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zM8 3.993a4.109 4.109 0 1 1 0 8.217 4.109 4.109 0 0 1 0-8.217zm0 1.441a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334zm4.988-1.328a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/>
              </svg>
              <span>@alfakh28</span>
            </a>

            <p className="text-lg text-gray-600">
              {t('couple.groom-description')}
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};