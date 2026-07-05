'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CheckoutSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    payment: '',
  })

  return (
    <section className="bg-white text-zinc-900 px-6 py-24 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* 🛍️ Cart Summary */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-blue-50 border border-blue-100 rounded-xl p-6 space-y-6 shadow-sm"
        >
          <h2 className="text-2xl font-semibold">Ringkasan Pesanan</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Velvet Pulse</span>
              <span>Rp 499.000</span>
            </div>
            <div className="flex justify-between">
              <span>Sora Essentials Kit</span>
              <span>Rp 289.000</span>
            </div>
            <hr className="border-zinc-200" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>Rp 788.000</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-4">
            *Harga sudah termasuk PPN. Pengiriman rahasia & tanpa label produk.
          </p>
        </motion.div>

        {/* 📦 Formulir Checkout */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Detail Pengiriman</h2>

          <input
            type="text"
            placeholder="Nama Lengkap"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email (untuk resi & konfirmasi)"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={4}
            placeholder="Alamat lengkap (dengan kode pos)"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={form.payment}
            onChange={(e) => setForm({ ...form, payment: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Pilih metode pembayaran</option>
            <option value="bank">Transfer Bank</option>
            <option value="qris">QRIS / E-Wallet</option>
            <option value="cod">Bayar di Tempat (COD)</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition active:scale-[0.98] shadow-lg"
          >
            Lanjutkan Pembayaran
          </button>

          <p className="text-xs text-center text-slate-500">
            Kami menjamin privasi Anda. Semua data terenkripsi.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
