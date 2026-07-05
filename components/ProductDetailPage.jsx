'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, Heart, BookOpen } from 'lucide-react'

export default function ProductDetailSection() {
  return (
    <section className="bg-white text-zinc-900 px-6 py-28 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* 📷 Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-blue-50"
        >
          <Image
            src="/product-sample.png" // Replace with real product image
            alt="Product image"
            fill
            className="object-contain p-6"
            priority
          />
        </motion.div>

        {/* 📖 Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold">
              Velvet Pulse Wand
            </h1>
            <p className="text-blue-600 text-sm font-medium">For Connection & Comfort</p>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed">
            Dirancang untuk pengalaman eksplorasi yang lembut dan menyenangkan. Ideal untuk pasangan pemula maupun berpengalaman. Dengan 5 mode getar & desain ergonomis.
          </p>

          {/* 💡 Features */}
          <div className="grid gap-4">
            {[
              {
                icon: <ShieldCheck className="text-blue-600" size={20} />,
                text: 'Bahan medical-grade, bebas BPA, dan waterproof',
              },
              {
                icon: <Heart className="text-blue-600" size={20} />,
                text: 'Mode getar responsif untuk stimulasi berbeda',
              },
              {
                icon: <BookOpen className="text-blue-600" size={20} />,
                text: 'Termasuk panduan digital interaktif & tips penggunaan',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div>{item.icon}</div>
                <p className="text-sm text-slate-700 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>

          {/* 🛒 CTA */}
          <div className="flex gap-4 pt-6">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition shadow">
              Tambah ke Keranjang
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition">
              Lihat Panduan
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
