'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'This feels like the future of intimacy. Beautifully engineered, deeply human.',
    name: 'Alena Roy',
    company: 'NOVA Wellness',
    logo: '/images/l1.jpeg',
    rating: 5,
  },
  {
    quote: 'The attention to detail is beyond anything we’ve experienced in sensual design.',
    name: 'Hiro Tanaka',
    company: 'Eros Japan',
    logo: '/images/l2.jpeg',
    rating: 4.5,
  },
  {
    quote: 'A product line that understands emotional connection and technological finesse.',
    name: 'Clara Min',
    company: 'MoodMatter',
    logo: '/images/l3.jpeg',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  return (
    <section className="bg-white py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-semibold text-zinc-900"
        >
          The Trust Gallery
        </motion.h2>
        <p className="text-zinc-500 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Brands that value intimacy, precision, and discretion share their thoughts on our vision and products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-2xl mx-auto px-2 md:px-0">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 160 }}
            className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-md transition group"
          >
            <p className="text-zinc-700 text-[17px] leading-relaxed italic relative pl-4 border-l-4 border-zinc-400">
              {item.quote}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-base font-semibold text-zinc-900">{item.name}</span>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <img src={item.logo} alt={item.company} className="h-5" />
                  <span>{item.company}</span>
                </div>
              </div>
              <div className="ml-auto flex gap-[2px]">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.floor(item.rating)
                        ? 'text-zinc-700'
                        : i < item.rating
                        ? 'text-zinc-500'
                        : 'text-zinc-300'
                    }
                    fill={i < item.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
