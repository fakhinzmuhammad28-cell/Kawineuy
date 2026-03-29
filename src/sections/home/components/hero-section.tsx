'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  isLoaded: boolean;
  couple: WeddingConfigType;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({
  isLoaded,
  couple,
  onScrollToSection,
}: HeroSectionProps) => {
  const { t } = useTranslation('home');

  return (
    <div className="h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 pt-10 sm:pt-18 md:pt-20">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 font-medium">
                {t('hero.welcome')}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-gray-800 mb-6 leading-tight">
                Our
                <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Wedding
                </span>
              </h1>

              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            </motion.div>

            {/* Couple Photos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-6">

                {/* Bride */}
                <div className="text-center flex-shrink-0 justify-items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 shadow-lg">
                    🧕🏻
                  </div>
                  <div className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto px-2">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-tight">
                      {couple.bride.name}
                    </h3>
                  </div>
                </div>

                {/* Heart */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-500 animate-pulse flex-shrink-0">
                  💕
                </div>

                {/* Groom */}
                <div className="text-center flex-shrink-0 justify-items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 shadow-lg">
                    🧑🏻‍💼
                  </div>
                  <div className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto px-2">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-tight">
                      {couple.groom.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ✅ CTA (TIDAK DIUBAH CLASS & MOTION, CUMA ISI DIGANTI) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <div className="text-gray-700 font-medium text-sm sm:text-base md:text-lg">
                📅 6 April 2026
              </div>

              <div className="text-gray-600 text-sm sm:text-base md:text-lg">
                📍 Tasikmalaya
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-6 sm:pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-600 text-center cursor-pointer"
              onClick={() => onScrollToSection('couple')}
            >
              <div className="text-xs mb-2">
                {t('hero.scroll-down')}
              </div>
              <div className="text-xl">⬇️</div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};