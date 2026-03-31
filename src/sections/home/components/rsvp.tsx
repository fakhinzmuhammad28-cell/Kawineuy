'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export const RSVP = () => {
  const { t } = useTranslation('home');

  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '1',
    dietaryRestrictions: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const payload = {
      ...formData,
      guests: formData.attendance === 'yes' ? formData.guests : '0', // 🔥 FIX TAMU
    };

    await fetch('https://script.google.com/macros/s/AKfycbwT1W76Pplcy9MYTscUHEDL0J5MWDBcKNNlfzSBoj5EeRDKADibuDACOmobb2UQV48I/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // 🔥 WAJIB INI
      },
      body: JSON.stringify(payload), // 🔥 PAKAI PAYLOAD
    });

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        attendance: '',
        guests: '1',
        dietaryRestrictions: '',
        message: '',
      });
    }, 3000);

  } catch (error) {
    console.error('Gagal kirim:', error);
  }
};
  
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-12 shadow-xl border border-rose-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✅</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              {t('rsvp.thank-you')}
            </h3>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              {t('rsvp.thank-you-received')}
            </p>
            <div className="mt-6 text-2xl">💕</div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-100"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
            {t('rsvp.title')}
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('rsvp.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 mb-6 text-center">
                {t('rsvp.confirm-attendance')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {t('rsvp.full-name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-rose-400 outline-none"
                    placeholder={t('rsvp.full-name')}
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {t('rsvp.will-attend')} *
                  </label>
                  <select
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900"
                  >
                    <option value="">{t('rsvp.please-select')}</option>
                    <option value="yes">{t('rsvp.yes-there')}</option>
                    <option value="no">{t('rsvp.no-cant')}</option>
                  </select>
                </div>

                {/* Guests */}
                {formData.attendance === 'yes' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      {t('rsvp.number-guests')}
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900"
                    >
                      <option value="1">1 {t('rsvp.guest-count')}</option>
                      <option value="2">2 {t('rsvp.guests-count')}</option>
                      <option value="3">3 {t('rsvp.guests-count')}</option>
                      <option value="4">4 {t('rsvp.guests-count')}</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {t('rsvp.message-couple')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 resize-none"
                    placeholder={t('rsvp.message-placeholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 px-6 rounded-xl font-medium text-base sm:text-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-lg"
                >
                  {t('rsvp.send-rsvp')}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >

            {/* Deadline */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-rose-600 text-xl">⏰</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {t('rsvp.deadline')}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {t('rsvp.deadline-date')}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                {t('rsvp.deadline-help')}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {t('rsvp.questions')}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {t('rsvp.questions-help')}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p>📧 alfakh28@gmail.com</p>
                <p>📱 +62-82319210105</p>
              </div>
            </div>

            {/* DOA */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 shadow-lg border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 text-xl">🤲</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    Doa & Ucapan
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Mohon doa restu untuk kami
                  </p>
                </div>
              </div>

              <p className="text-center text-lg sm:text-xl font-semibold text-gray-900 leading-relaxed mb-3">
                بَارَكَ اللّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
              </p>

              <p className="text-gray-700 text-sm italic text-center">
                "Semoga Allah memberkahimu, melimpahkan keberkahan atasmu,
                dan mengumpulkan kalian berdua dalam kebaikan."
              </p>
            </div>

            

          </motion.div>
        </div>
      </div>
    </div>
  );
};
