'use client'

import { useState } from 'react'
import { ChevronDown, Quote } from 'lucide-react'

const faqs = [
  {
    q: 'Apakah produk kami aman untuk kulit sensitif?',
    a: 'Tentu. Semua produk kami dirancang menggunakan material body-safe, bebas dari lateks, phthalate, dan hypoallergenic.'
  },
  {
    q: 'Apakah produk tersedia untuk pasangan?',
    a: 'Ya, kami memiliki lini produk khusus untuk eksplorasi bersama pasangan dengan desain ergonomis dan fitur sinkronisasi.'
  },
  {
    q: 'Bagaimana proses pengembalian barang?',
    a: 'Mudah. Cukup ajukan permintaan via dashboard akun Anda, dan kami akan bantu proses pengembalian dalam waktu 48 jam.'
  },
  {
    q: 'Dikirim dari mana dan berapa lama sampai?',
    a: 'Produk dikirim dari pusat logistik regional kami di Jakarta dan Bandung. Estimasi pengiriman 2–4 hari kerja.'
  },
]

export default function AboutAndFAQ() {
  const [active, setActive] = useState(null)

  const toggle = index => {
    setActive(active === index ? null : index)
  }

  return (
    <section className="bg-white text-zinc-900 py-28 px-6 md:px-12 relative overflow-hidden">
      {/* Gradient background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-orange-100 rounded-full blur-[160px] opacity-30" />
        <div className="absolute bottom-[-80px] left-[-100px] w-[300px] h-[300px] bg-yellow-100 rounded-full blur-[120px] opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">
        
        {/* 📖 About Story */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight leading-snug">
            Who We Are
          </h2>

          <p className="text-zinc-600 text-lg leading-relaxed">
            We’re not just designing intimacy products — we’re reshaping how people connect with themselves and others. Each creation we craft is rooted in compassion, science, and style.
          </p>

          <div className="border-l-4 border-orange-500 pl-6 text-zinc-500 italic text-base">
            <Quote className="w-4 h-4 inline-block mb-1 mr-1 text-orange-400" />
            "Designed not just to perform, but to empower your most intimate journey."
          </div>

          <div className="text-sm text-zinc-400 pt-2">
            🔒 100% private billing & shipping — always.
          </div>
        </div>

        {/* ❓ FAQ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-zinc-800">Frequently Asked</h3>
          <div className="divide-y divide-zinc-200 border border-zinc-100 rounded-xl bg-white shadow-sm">
            {faqs.map((item, index) => (
              <div key={index} className="px-6 py-5 group transition-all duration-200 hover:bg-zinc-50">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-medium text-zinc-800 group-hover:text-orange-600 transition">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`ml-4 text-zinc-400 group-hover:text-orange-500 transition-transform duration-300 ${
                      active === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {active === index && (
                  <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
