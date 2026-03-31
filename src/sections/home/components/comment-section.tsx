'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

type Comment = {
  nama?: string;
  pesan?: string;
  kehadiran?: string;
};

export const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/rsvp');
        const data = await res.json();

        const filtered = data.filter(
          (item: any) =>
            item.pesan && item.pesan.toString().trim() !== ''
        );

        setComments(filtered.reverse());
      } catch (err) {
        console.error('Gagal ambil komentar:', err);
      }
    };

    fetchComments();
    const interval = setInterval(fetchComments, 3000);
    return () => clearInterval(interval);
  }, []);

  const getInitial = (name?: string) => {
    return name ? name.charAt(0).toUpperCase() : '?';
  };

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-lg px-6 py-3 rounded-full shadow-md border border-rose-100 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white text-lg">
              💬
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-800">
              Ucapan & Doa
            </h3>
          </div>

          <p className="text-gray-500 text-sm sm:text-base">
            Doa terbaik dari tamu undangan
          </p>
        </motion.div>

        {/* LIST */}
        <div className="space-y-6">
          {comments.length === 0 ? (
            <p className="text-center text-gray-400">
              Belum ada ucapan 😇
            </p>
          ) : (
            comments.map((c, i) => {
              const hadir = (c.kehadiran || '').toLowerCase().trim();

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  {/* AVATAR */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white flex items-center justify-center font-semibold shadow-md">
                    {getInitial(c.nama)}
                  </div>

                  {/* BUBBLE */}
                  <div className="flex-1 bg-white/80 backdrop-blur-lg rounded-2xl px-5 py-4 shadow-md border border-rose-100 hover:shadow-lg transition-all duration-300">
                    <p className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      {c.nama}

                      {hadir === 'yes' ? (
                        <span className="text-green-500 text-xs">(Hadir👍)</span>
                      ) : (
                        <span className="text-red-500 text-xs">(Tidak Hadir😭)</span>
                      )}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {c.pesan}
                    </p>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
