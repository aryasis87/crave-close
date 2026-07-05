'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Andra & Livia',
    avatar: '/users/andra-livia.jpg',
    text: 'Awalnya ragu, tapi Positive Crave kasih pengalaman yang bukan cuma nyaman, tapi juga membuka komunikasi di hubungan kami.',
    tag: 'Pasangan menikah 3 tahun',
  },
  {
    name: 'Dion',
    avatar: '/users/dion.jpg',
    text: 'Produk dan panduannya sangat thoughtful. Bukan sekadar alat, tapi beneran membantu eksplorasi diri.',
    tag: 'Pria, 28 tahun',
  },
  {
    name: 'Sasha',
    avatar: '/users/sasha.jpg',
    text: 'Privasinya bikin nyaman banget. Barang datang tanpa label, dan kualitasnya premium!',
    tag: 'Perempuan, 32 tahun',
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-white text-zinc-900 px-6 py-28 md:px-20 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto space-y-16 text-center">

        {/* 🧠 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif">Apa Kata Mereka</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Cerita nyata dari mereka yang menemukan kenyamanan dan koneksi baru lewat Positive Crave.
          </p>
        </motion.div>

        {/* 💬 Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 hover:bg-blue-100 transition rounded-2xl p-6 space-y-4 shadow-sm"
            >
              <Quote className="text-blue-400 w-6 h-6" />
              <p className="text-slate-700 text-sm leading-relaxed">“{item.text}”</p>
              <div className="flex items-center gap-3 pt-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover border border-white shadow-md"
                />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-blue-600">{item.tag}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
