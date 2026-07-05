'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Clock } from 'lucide-react'

export default function ContactSupport() {
  return (
    <section className="bg-white text-zinc-900 px-6 py-32 md:px-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* 💬 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 leading-tight">
            Butuh Bantuan atau Saran?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Kami siap membantu Anda dengan ramah dan rahasia—baik soal produk, pengiriman, maupun kebutuhan emosional.
          </p>
        </motion.div>

        {/* 🛎️ Contact Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageCircle size={28} className="text-blue-600" />,
              title: 'Live Chat',
              desc: 'Diskusi real-time dengan tim kami. Buka setiap hari 10.00–22.00 WIB.',
              btn: 'Mulai Chat',
            },
            {
              icon: <Mail size={28} className="text-blue-600" />,
              title: 'Email Support',
              desc: 'Kirim pertanyaan kapan saja. Balasan maksimal 1x24 jam.',
              btn: 'Kirim Email',
            },
            {
              icon: <Phone size={28} className="text-blue-600" />,
              title: 'Telepon',
              desc: 'Hubungi Intimacy Concierge untuk percakapan pribadi.',
              btn: 'Hubungi Sekarang',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-blue-50 border border-blue-100 p-8 rounded-2xl space-y-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h4 className="text-lg font-semibold text-zinc-900">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
              <button className="mt-2 px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition">
                {item.btn}
              </button>
            </motion.div>
          ))}
        </div>

        {/* ⏱️ Footer Info */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>Waktu respons rata-rata: 1–4 jam (chat), 6–12 jam (email)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
