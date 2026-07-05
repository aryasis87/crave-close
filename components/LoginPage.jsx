'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LoginSection() {
  const [form, setForm] = useState({ email: '', password: '' })

  return (
    <section className="bg-white min-h-screen px-6 py-32 md:px-20 text-zinc-900">
      <div className="max-w-md mx-auto space-y-10">

        {/* 🔐 Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-serif text-zinc-900">
            Selamat Datang Kembali
          </h1>
          <p className="mt-3 text-slate-600 text-sm">
            Masuk untuk melanjutkan eksplorasi personal Anda.
          </p>
        </motion.div>

        {/* 🔐 Form Login */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-md space-y-5"
        >
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          <div className="flex justify-between text-sm text-slate-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Ingat saya
            </label>
            <Link href="/forgot" className="text-blue-600 hover:underline">
              Lupa Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition active:scale-[0.98] shadow-md"
          >
            Masuk
          </button>
        </motion.form>

        {/* 🧭 Daftar Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-sm text-slate-500"
        >
          Belum punya akun?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Daftar sekarang →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
