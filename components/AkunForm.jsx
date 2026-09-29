'use client'

import { useState } from 'react'
import Link from 'next/link'
import Jarak from '@/components/Jarak'

/* Cangkang akun Close. Sudut pandangnya: akun untuk berdua — satu daftar
   keinginan yang bisa dilihat pasangan (opsional), supaya tidak ada yang
   dibeli tanpa diobrolkan. Purwarupa tanpa autentikasi. */

const MODE = {
  masuk: {
    judul: 'Masuk',
    lead: 'Untuk melihat pesanan dan daftar keinginan yang Anda bagi dengan pasangan.',
    tombol: 'Masuk',
    medan: [
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'current-password' },
    ],
    selesai: 'Di toko sungguhan, Anda kini masuk. Ini purwarupa desain, jadi tidak ada akun yang diperiksa.',
  },
  daftar: {
    judul: 'Buat akun',
    lead: 'Nama boleh nama panggilan. Undang pasangan bila ingin berbagi satu daftar keinginan — atau lewati saja.',
    tombol: 'Buat akun',
    medan: [
      { name: 'sapaan', label: 'Nama panggilan', type: 'text', auto: 'nickname', wajib: false },
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'new-password' },
      { name: 'pasangan', label: 'Surel pasangan', type: 'email', auto: 'off', wajib: false },
    ],
    selesai: 'Di toko sungguhan, akun Anda aktif dan undangan terkirim ke pasangan — dengan subjek polos. Ini purwarupa desain.',
  },
  lupa: {
    judul: 'Lupa kata sandi',
    lead: 'Kami kirim tautan untuk mengatur ulang. Subjeknya polos: "Atur ulang kata sandi".',
    tombol: 'Kirim tautan',
    medan: [{ name: 'surel', label: 'Surel', type: 'email', auto: 'email' }],
    selesai: 'Di toko sungguhan, tautannya sudah terkirim dan berlaku 30 menit. Ini purwarupa desain.',
  },
}

const DAFTAR = [
  ['Anda menandai', 'Jembatan', 'Dilihat pasangan'],
  ['Pasangan menandai', 'Minyak Pijat Teduh', 'Dilihat Anda'],
  ['Belum diobrolkan', 'Set Arus', 'Hanya Anda'],
]

export default function AkunForm({ mode }) {
  const m = MODE[mode]
  const [proses, setProses] = useState(false)
  const [ok, setOk] = useState(false)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setOk(true)
    }, 900)
  }

  return (
    <section className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto grid max-w-5xl items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="card-soft p-7 sm:p-10">
          <Jarak jarak={mode === 'daftar' ? 1 : 3} className="h-8 w-24 text-tide" />
          <h1 className="mt-5 text-[2.6rem] leading-[1.05]">{m.judul}</h1>
          <p className="mt-4 leading-relaxed text-haze">{m.lead}</p>

          {ok ? (
            <p role="status" className="mt-8 rounded-2xl bg-tide/15 p-5 text-mist">{m.selesai}</p>
          ) : (
            <form onSubmit={kirim} className="mt-8 space-y-5">
              {m.medan.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="micro mb-2 block text-haze">
                    {f.label}
                    {f.wajib === false && <span className="ml-2 tracking-normal normal-case">(opsional)</span>}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.auto}
                    required={f.wajib !== false}
                    className="w-full rounded-full border border-mist/15 bg-deep px-5 py-3.5 text-mist focus:border-tide focus:outline-none"
                  />
                </div>
              ))}
              <button type="submit" disabled={proses} className="w-full rounded-full bg-tide py-4 text-sm font-semibold text-deep transition-colors hover:bg-mist disabled:opacity-70">
                {proses ? 'Memproses…' : m.tombol}
              </button>
            </form>
          )}

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {mode !== 'masuk' && <Link href="/masuk" className="micro text-tide hover:text-mist">Masuk</Link>}
            {mode !== 'daftar' && <Link href="/register" className="micro text-tide hover:text-mist">Buat akun</Link>}
            {mode === 'masuk' && <Link href="/forgot" className="micro text-haze hover:text-mist">Lupa kata sandi</Link>}
          </div>
          <p className="micro mt-6 leading-[1.7] text-haze">Purwarupa desain — tidak ada autentikasi sungguhan.</p>
        </div>

        <aside className="lg:pt-8">
          <p className="micro text-tide">Daftar keinginan berdua</p>
          <h2 className="mt-3 text-[2rem] leading-tight">Tidak ada yang dibeli tanpa diobrolkan</h2>
          <ul className="mt-8 space-y-3">
            {DAFTAR.map(([siapa, barang, lihat]) => (
              <li key={barang} className="card-soft flex items-center justify-between gap-4 p-5">
                <span>
                  <span className="micro block text-haze">{siapa}</span>
                  <span className="mt-1.5 block font-[family-name:var(--font-display)] text-xl text-mist">{barang}</span>
                </span>
                <span className="shrink-0 rounded-full bg-deep px-3 py-1.5 text-xs text-haze">{lihat}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-haze">
            Barang yang Anda tandai hanya terlihat oleh pasangan bila Anda memilih untuk membaginya. Riwayat pesanan tidak
            pernah dibagikan.
          </p>
        </aside>
      </div>
    </section>
  )
}
