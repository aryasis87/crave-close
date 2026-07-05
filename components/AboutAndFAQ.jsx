'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Info } from 'lucide-react'

const sections = {
  Umum: [
    {
      q: 'Apa misi utama Positive Crave?',
      a: 'Membantu Anda dan pasangan membangun keintiman yang sehat dan menyenangkan dengan pendekatan aman, edukatif, dan penuh empati.',
    },
    {
      q: 'Apakah ini hanya untuk pasangan?',
      a: 'Tidak. Kami mendukung eksplorasi personal dan menyediakan panduan individual untuk kenyamanan setiap orang.',
    },
  ],
  Privasi: [
    {
      q: 'Apakah data saya aman?',
      a: 'Sangat. Kami menggunakan enkripsi end-to-end dan tidak pernah membagikan data Anda ke pihak ketiga.',
    },
    {
      q: 'Apakah kemasan benar-benar tanpa label?',
      a: 'Benar. Semua produk dikirim dalam kotak polos tanpa logo atau indikasi konten.',
    },
  ],
  Panduan: [
    {
      q: 'Saya pemula, dari mana mulai?',
      a: 'Kami rekomendasikan memulai dari kuis eksplorasi atau panduan pemula yang tersedia di halaman Panduan.',
    },
    {
      q: 'Apakah ada panduan video?',
      a: 'Ya. Kami menyediakan ilustrasi dan animasi edukatif non-vulgar untuk membantu Anda memahami cara penggunaan.',
    },
  ],
}

const categories = Object.keys(sections)

export default function AboutFAQSection() {
  const [selected, setSelected] = useState(categories[0])
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-white text-zinc-900 px-6 py-32 md:px-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* 🧡 Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <Info className="mx-auto text-blue-500 mb-4" size={36} />
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-zinc-900">
            Kenyamanan Dimulai dari Pemahaman
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Kami percaya keintiman modern adalah eksploratif dan sadar. Temukan jawaban, bukan asumsi.
          </p>
        </motion.div>

        {/* 🔍 FAQ Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Tabs & Accordion */}
          <div className="space-y-6">
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelected(cat)
                    setOpenIndex(null)
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                    selected === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-4 mt-6">
              {sections[selected].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-200 bg-blue-50"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-blue-100 transition"
                  >
                    <span className="text-base font-medium text-zinc-800">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-500 transition-transform ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 text-sm text-slate-600 leading-relaxed"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="sticky top-28 space-y-8 bg-blue-50 p-8 rounded-2xl border border-zinc-200 shadow-md"
          >
            <div className="text-lg font-light italic text-blue-700 border-l-4 pl-4 border-blue-500">
              “Kenyamanan itu bukan datang dari tahu semuanya, tapi dari berani tanya.”
            </div>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition">
              Baca Panduan Lengkap
            </button>
            <p className="text-sm text-center text-slate-500">
              Atau hubungi tim support kami →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
