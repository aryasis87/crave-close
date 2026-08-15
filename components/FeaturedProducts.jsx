'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const featured = [
  {
    title: 'Velvet Pulse',
    desc: 'Stimulator dengan 10 mode getaran, lembut dan powerful. Cocok untuk pemula & pasangan.',
    image: '/images/p2.jpg',
    href: '/produk',
  },
  {
    title: 'Sora Essentials Kit',
    desc: 'Paket eksplorasi awal dengan pelumas, massage oil, dan toy cleaner. Praktis & stylish.',
    image: '/images/p3.jpg',
    href: '/produk',
  },
  {
    title: 'Moonlite Touch',
    desc: 'Massager berdesain elegan untuk momen me-time atau sesi intim bersama.',
    image: '/images/p4.jpg',
    href: '/produk',
  },
]

export default function FeaturedProductSection() {
  return (
    <section className="bg-deep-2 px-6 py-28 md:px-20 text-mist border-t border-mist/12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🌟 Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-mist">
            Pilihan Unggulan
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Produk favorit dari pelanggan kami — aman, edukatif, dan menyenangkan.
          </p>
        </motion.div>

        {/* 🛍️ Product Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {featured.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-tide/10 hover:bg-tide/15 transition rounded-xl overflow-hidden shadow-sm border border-tide/25"
            >
              <Link href={item.href}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-700">{item.desc}</p>
                  <span className="inline-block mt-2 text-tide text-sm font-medium">
                    Lihat Detail →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
