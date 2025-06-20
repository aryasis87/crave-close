'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Couples Collection',
    desc: 'Curated for shared pleasure and connection.',
    image: '/images/w1.jpeg',
    href: '/categories/couples',
  },
  {
    name: 'Remote Romance',
    desc: 'App-enabled toys for long-distance lovers.',
    image: '/images/p2.jpg',
    href: '/categories/long-distance',
  },
  {
    name: 'Sensual Essentials',
    desc: 'Lubricants, oils, and accessories to elevate touch.',
    image: '/images/p14.jpeg',
    href: '/categories/essentials',
  },
  {
    name: 'Wearable Allure',
    desc: 'Elegant lingerie and intimate fashion.',
    image: '/images/p15.jpeg',
    href: '/categories/lingerie',
  },
]

export default function CategoryGrid() {
  return (
    <section className="bg-white py-24 px-6 md:px-20 text-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center mb-14"
        >
          Curated for Intimacy
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <Link href={cat.href} className="block">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden shadow-sm grayscale hover:grayscale-0 transition duration-700">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="mt-5 space-y-1">
                  <h3 className="text-xl font-medium tracking-tight">{cat.name}</h3>
                  <p className="text-sm text-zinc-500">{cat.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
