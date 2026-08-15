'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const ringkasan = [
  ['Tide Duo', 'Rp 1.320.000'],
  ['Pengiriman reguler', 'Rp 25.000'],
]

export default function CheckoutPage() {
  const [form, setForm] = useState({ nama: '', surel: '', telepon: '', alamat: '', catatan: '' })
  const [mengirim, setMengirim] = useState(false)
  const [selesai, setSelesai] = useState(false)

  const ubah = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const kirim = (e) => {
    e.preventDefault()
    setMengirim(true)
    // Purwarupa desain — pemesanan disimulasikan, tanpa backend maupun pembayaran.
    setTimeout(() => {
      setMengirim(false)
      setSelesai(true)
    }, 1100)
  }

  return (
    <section className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="micro mb-5 text-tide">Pemesanan</p>
        <h1 className="text-[2.2rem] leading-[1.06] md:text-[2.9rem]">Satu langkah lagi</h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <AnimatePresence mode="wait">
            {selesai ? (
              <motion.div key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="card-soft px-8 py-16 text-center">
                <span aria-hidden="true" className="mx-auto mb-6 block h-12 w-12 bg-tide/40" />
                <h2 className="text-xl font-semibold text-mist">Pesanan tercatat</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-haze">
                  Kami kirim rincian ke surel Anda. Paket berangkat dalam kotak cokelat polos, tanpa
                  nama merek di resi.
                </p>
                <button onClick={() => setSelesai(false)} className="micro mt-8 border-b border-tide/50 pb-1 text-tide hover:border-tide">
                  Buat pesanan lain
                </button>
              </motion.div>
            ) : (
              <motion.form key="f" onSubmit={kirim} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <Field label="Nama penerima" name="nama" value={form.nama} onChange={ubah} required />
                  <Field label="Telepon" name="telepon" type="tel" value={form.telepon} onChange={ubah} required />
                </div>
                <Field label="Surel" name="surel" type="email" value={form.surel} onChange={ubah} required />

                <div>
                  <label htmlFor="alamat" className="micro mb-3 block text-haze/60">
                    Alamat pengiriman <span className="text-tide">*</span>
                  </label>
                  <textarea
                    id="alamat"
                    name="alamat"
                    rows={3}
                    required
                    value={form.alamat}
                    onChange={ubah}
                    className="w-full resize-y border-b border-mist/20 bg-transparent pb-2 text-sm text-mist placeholder:text-haze/35 focus:border-tide focus:outline-none"
                    placeholder="Nama jalan, nomor, kota, kode pos"
                  />
                </div>

                <div>
                  <label htmlFor="catatan" className="micro mb-3 block text-haze/60">
                    Catatan untuk kurir
                  </label>
                  <input
                    id="catatan"
                    name="catatan"
                    value={form.catatan}
                    onChange={ubah}
                    placeholder="Mis. titip ke satpam, jangan dibunyikan bel"
                    className="w-full border-b border-mist/20 bg-transparent pb-2 text-sm text-mist placeholder:text-haze/35 focus:border-tide focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={mengirim}
                  className="w-full rounded-full bg-tide py-4 text-sm font-semibold text-deep transition-colors hover:bg-mist disabled:opacity-70"
                >
                  {mengirim ? 'Memproses…' : 'Selesaikan Pesanan'}
                </button>

                <p className="micro leading-[1.7] text-haze/45">
                  Purwarupa desain — pemesanan disimulasikan, tidak ada pembayaran maupun data yang
                  tersimpan.
                </p>
              </motion.form>
            )}
          </AnimatePresence>

          <aside className="h-fit card-soft p-7">
            <h2 className="micro mb-6 text-mist">Ringkasan</h2>
            <dl className="divide-y divide-mist/12">
              {ringkasan.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-sm text-haze">{k}</dt>
                  <dd className="text-sm font-semibold text-mist">{v}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-sm font-semibold text-mist">Total</dt>
                <dd className="text-lg font-semibold text-tide">Rp 1.345.000</dd>
              </div>
            </dl>

            <div className="mt-7 flex items-start gap-3.5 border-t border-mist/12 pt-6">
              <span aria-hidden="true" className="mt-0.5 h-7 w-7 shrink-0 bg-tide/40" />
              <p className="text-sm leading-relaxed text-haze">
                Dikirim dalam kemasan polos, tanpa nama merek di resi.
              </p>
            </div>

            <Link href="/produk" className="micro mt-6 inline-block text-tide hover:text-mist">
              ← Kembali ke produk
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label htmlFor={name} className="micro mb-3 block text-haze/60">
        {label}
        {required && <span className="ml-1 text-tide">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border-b border-mist/20 bg-transparent pb-2 text-sm text-mist focus:border-tide focus:outline-none"
      />
    </div>
  )
}
