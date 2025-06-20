'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Infinity, Gem } from 'lucide-react'

const usps = [
  {
    icon: <Sparkles className="text-zinc-700" size={28} />,
    title: 'Crafted for Chemistry',
    desc: 'We fuse neuroscience and industrial design to awaken intimacy through ergonomic forms and responsive feedback.',
  },
  {
    icon: <ShieldCheck className="text-zinc-700" size={28} />,
    title: 'Unmatched Discretion',
    desc: 'Neutral billing. Minimalist packaging. Silent mode tech. Always built for privacy and peace of mind.',
  },
  {
    icon: <Infinity className="text-zinc-700" size={28} />,
    title: 'Endless Assurance',
    desc: 'Backed by our lifetime care promise and 2-year no-questions warranty on all intimacy devices.',
  },
  {
    icon: <Gem className="text-zinc-700" size={28} />,
    title: 'Luxury That Listens',
    desc: 'Sourced from body-safe, luxury-grade materials, hand-inspected and rigorously lab-tested for your comfort.',
  },
]

export default function USPSection() {
  return (
    <section className="bg-white py-32 px-6 md:px-20 font-sans text-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight">
            The Foundation of Intimacy
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            More than just products — we deliver values that shape trust, comfort, and deeper connection.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-zinc-50 hover:bg-zinc-100 transition-all duration-300 border border-zinc-100 hover:border-zinc-300 rounded-xl p-8 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 bg-zinc-200/60 rounded-full shadow-inner">
                  {usp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{usp.title}</h3>
                  <p className="mt-2 text-zinc-600 leading-relaxed text-sm">{usp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-sm uppercase text-zinc-400 tracking-widest">Fully Certified • Discreet • Ethically Made</p>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent mt-4 w-full" />
        </motion.div>
      </div>
    </section>
  )
}
