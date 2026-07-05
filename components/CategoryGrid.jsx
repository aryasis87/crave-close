'use client'

import { motion } from 'framer-motion'
import { Heart, Flame, Lightbulb, Compass } from 'lucide-react'

const categories = [
  {
    icon: <Heart size={28} className="text-blue-600" />,
    title: 'For Beginners',
    desc: 'Eksplorasi pertama kali dengan rasa aman, pelan-pelan, dan menyenangkan.',
    href: '#',
  },
  {
    icon: <Flame size={28} className="text-blue-600" />,
    title: 'Deepen Connection',
    desc: 'Untuk pasangan yang ingin memperdalam rasa, bukan sekadar sensasi.',
    href: '#',
  },
  {
    icon: <Lightbulb size={28} className="text-blue-600" />,
    title: 'Learn Together',
    desc: 'Panduan edukatif, kuis interaktif, dan eksplorasi bersama.',
    href: '#',
  },
  {
    icon: <Compass size={28} className="text-blue-600" />,
    title: 'Just Curious',
    desc: 'Jelajahi dengan rasa penasaran tanpa tekanan atau harapan.',
    href: '#',
  },
]

export default function CategoryGrid() {
  return (
    <section className="bg-white text-zinc-800 px-6 py-28 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🧭 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Choose Your Starting Point
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Tidak ada satu cara untuk menjelajah. Pilih jalur yang paling cocok dengan Anda dan pasangan.
          </p>
        </motion.div>

        {/* 📦 Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href={cat.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group block p-6 rounded-2xl border border-blue-100 bg-blue-50/50 hover:bg-blue-100 transition shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow text-blue-600">
                  {cat.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-zinc-900 mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
