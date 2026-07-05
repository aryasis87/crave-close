'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Globe, Leaf } from 'lucide-react'

const uspList = [
  {
    icon: <ShieldCheck className="text-blue-600" size={28} />,
    title: 'Privasi & Keamanan Terjamin',
    desc: 'Pengemasan tanpa label, transaksi terenkripsi, dan pengalaman belanja yang benar-benar privat.',
  },
  {
    icon: <Sparkles className="text-blue-600" size={28} />,
    title: 'Panduan Interaktif',
    desc: 'Setiap produk dilengkapi dengan panduan penggunaan digital dan edukasi hubungan yang suportif.',
  },
  {
    icon: <Globe className="text-blue-600" size={28} />,
    title: 'Kurasi Global',
    desc: 'Kami hanya menghadirkan produk terpercaya, aman, dan didesain oleh brand intimacy kelas dunia.',
  },
  {
    icon: <Leaf className="text-blue-600" size={28} />,
    title: 'Aman & Ramah Tubuh',
    desc: 'Bebas BPA, menggunakan bahan medical-grade, hypoallergenic, dan telah teruji secara dermatologis.',
  },
]

export default function USPSection() {
  return (
    <section className="bg-white text-zinc-900 px-6 py-28 md:px-20 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto text-center space-y-16">

        {/* 🧠 Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-zinc-900">
            Kenapa Positive Crave?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Kami percaya eksplorasi keintiman harus dimulai dari rasa aman, informasi yang tepat, dan produk yang berkualitas.
          </p>
        </motion.div>

        {/* 🔹 USP Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {uspList.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-5 items-start p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition duration-300"
            >
              <div className="shrink-0">{usp.icon}</div>
              <div>
                <h4 className="text-lg font-semibold mb-1">{usp.title}</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{usp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
