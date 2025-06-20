'use client'

import Image from 'next/image'
import { Star, ShieldCheck, Truck, CheckCircle } from 'lucide-react'

const product = {
  name: 'Velvet Pulse Wand',
  tagline: 'A masterpiece of sensual silence.',
  price: 149,
  reviews: 248,
  rating: 4.9,
  description: `Blending aesthetic harmony and engineering excellence, Velvet Pulse is more than a wand — it's an invitation to explore intimacy through sensation, precision, and silence.`,
  highlights: [
    'Whisper-quiet dual motors',
    'Medical-grade silicone surface',
    'App-controlled vibration modes',
    'Wireless magnetic USB charging',
    'Full-body waterproof (IPX7)',
  ],
}

export default function ProductDetailPage() {
  return (
    <section className="bg-white text-zinc-900 px-6 py-32 md:px-24 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* 💫 Scene 1: Hero Visual */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-5">
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight">
              {product.name}
            </h1>
            <p className="text-zinc-600 text-lg">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#facc15" className="text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-zinc-500">({product.reviews} reviews)</span>
            </div>

            <p className="text-base text-zinc-700 leading-relaxed mt-6">{product.description}</p>
          </div>

          <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/p3.jpg"
              alt={product.name}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* 🎯 Scene 2: Features + Icons */}
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl font-serif font-semibold">Crafted For Deep Connection</h2>
            <ul className="mt-6 space-y-3 pl-5 text-zinc-600 text-sm list-disc">
              {product.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 text-sm text-zinc-600">
            <div className="flex items-center gap-4">
              <Truck size={20} className="text-orange-500" />
              <span>Discreet worldwide shipping in 2–5 business days</span>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck size={20} className="text-orange-500" />
              <span>2-year quality warranty & lifetime support</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size={20} className="text-orange-500" />
              <span>100% body-safe materials (tested & certified)</span>
            </div>
          </div>
        </div>

        {/* 💳 Scene 3: Pricing + CTA */}
        <div className="border-t border-zinc-200 pt-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold font-serif">{product.name}</h3>
            <p className="text-sm text-zinc-500 max-w-md">
              Secure checkout. Discreet packaging. Designed in Berlin.
            </p>
          </div>

          <div className="flex items-center gap-8 justify-start md:justify-end">
            <span className="text-4xl font-bold text-orange-500">${product.price}</span>
            <button className="px-7 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition shadow-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
