'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-white text-black px-6 py-32 md:px-20 overflow-hidden">
      {/* ✨ Background highlight */}
      <div className="absolute top-[-10%] left-[60%] w-[800px] h-[800px] bg-gradient-to-br from-zinc-200 to-transparent rounded-full blur-[160px] opacity-30 z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 z-10">
        {/* 📝 Left: Text */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif leading-tight tracking-tight"
          >
            Intimacy Begins with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-700">
              Light.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-zinc-600 leading-relaxed max-w-md"
          >
            Eksplorasi keintiman tidak harus gelap. Kami hadir dengan edukasi, rasa hormat, dan desain yang membantu Anda merasa aman, tanpa rasa malu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <button className="px-6 py-3 rounded-full text-white bg-black hover:bg-zinc-800 focus:ring-2 focus:ring-offset-2 focus:ring-black transition font-medium shadow-md">
              Mulai Eksplorasi
            </button>
            <button className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-black transition font-medium">
              Pelajari Panduan
            </button>
          </motion.div>
        </div>

        {/* 🎨 Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative w-full aspect-[4/5] md:aspect-square"
        >
          <Image
            src="/images/w2.jpeg" // 💡 Ganti dengan path gambar kamu
            alt="Positive intimacy illustration"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
