'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-zinc-50 text-zinc-900 px-6 py-32 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* 👈 Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
            <Sparkles className="w-4 h-4" />
            Designed for Discovery
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight tracking-tight">
            A New Way to Feel Close.
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Positive Crave bukan hanya produk. Ini adalah gerakan untuk membangun keintiman yang lebih jujur, tenang, dan saling memahami — melalui desain, edukasi, dan eksplorasi.
          </p>

          <div className="flex gap-4 flex-wrap pt-2">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition shadow">
              Mulai Eksplorasi
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition">
              Lihat Panduan
            </button>
          </div>
        </motion.div>

        {/* 👉 Right Illustration / Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/3] md:aspect-[5/6] bg-blue-50 rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/w1.jpeg" // Replace with your illustration
            alt="Modern intimacy illustration"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-transparent opacity-30 pointer-events-none z-0" />
    </section>
  )
}
