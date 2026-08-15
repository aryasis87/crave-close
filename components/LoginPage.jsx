'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [form, setForm] = useState({ surel: '', sandi: '' })
  const [memproses, setMemproses] = useState(false)

  const ubah = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const kirim = (e) => {
    e.preventDefault()
    setMemproses(true)
    // Purwarupa desain — tidak ada autentikasi sungguhan.
    setTimeout(() => setMemproses(false), 1000)
  }

  return (
    <section className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="tide-glow absolute inset-x-0 top-0 h-72" />

      <div className="relative z-10 mx-auto w-full max-w-md px-6">
        <p className="micro mb-5 text-tide">Akun</p>
        <h1 className="text-[2rem] leading-[1.08] md:text-[2.5rem]">Masuk</h1>
        <p className="mt-4 leading-relaxed text-haze">
          Untuk melihat riwayat pesanan dan status pengiriman. Riwayat pesanan bisa dilihat berdua bila
          Anda mau.
        </p>

        <form onSubmit={kirim} className="mt-10 space-y-7">
          <div>
            <label htmlFor="surel" className="micro mb-3 block text-haze/60">
              Surel <span className="text-tide">*</span>
            </label>
            <input
              id="surel"
              name="surel"
              type="email"
              required
              value={form.surel}
              onChange={ubah}
              className="w-full border-b border-mist/20 bg-transparent pb-2 text-sm text-mist focus:border-tide focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="sandi" className="micro mb-3 block text-haze/60">
              Kata sandi <span className="text-tide">*</span>
            </label>
            <input
              id="sandi"
              name="sandi"
              type="password"
              required
              value={form.sandi}
              onChange={ubah}
              className="w-full border-b border-mist/20 bg-transparent pb-2 text-sm text-mist focus:border-tide focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={memproses}
            className="w-full rounded-full bg-tide py-4 text-sm font-semibold text-deep transition-colors hover:bg-mist disabled:opacity-70"
          >
            {memproses ? 'Memproses…' : 'Masuk'}
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-3 border-t border-mist/12 pt-6">
          <Link href="/forgot" className="micro text-tide hover:text-mist">
            Lupa kata sandi
          </Link>
          <Link href="/register" className="micro text-haze hover:text-mist">
            Belum punya akun — daftar
          </Link>
        </div>

        <p className="micro mt-8 leading-[1.7] text-haze/45">
          Purwarupa desain — tidak ada autentikasi sungguhan dan tidak ada data yang tersimpan.
        </p>
      </div>
    </section>
  )
}
