'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { PRODUK, produkBySlug, rupiah, situasiDari } from '@/lib/katalog'

const ONGKIR = 25000

function Medan({ label, name, type = 'text', auto, lebar }) {
  return (
    <div className={lebar ? 'sm:col-span-2' : ''}>
      <label htmlFor={name} className="micro mb-2 block text-haze">{label}</label>
      <input id={name} name={name} type={type} autoComplete={auto} required className="w-full rounded-full border border-mist/15 bg-deep px-5 py-3.5 text-mist focus:border-tide focus:outline-none" />
    </div>
  )
}

export default function CheckoutPage() {
  const q = useSearchParams()
  const p = produkBySlug(q.get('produk')) ?? PRODUK.find((x) => x.unggulan)
  const s = situasiDari(p.situasi)
  const [kePasangan, setKePasangan] = useState(p.situasi === 'jauh')
  const [kartu, setKartu] = useState(true)
  const [proses, setProses] = useState(false)
  const [selesai, setSelesai] = useState(false)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setSelesai(true)
    }, 1000)
  }

  return (
    <section className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="micro text-tide">Pemesanan</p>
        <h1 className="mt-4 text-[2.6rem] leading-[1.05] md:text-[3.2rem]">Tinggal sedikit lagi</h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          {selesai ? (
            <div role="status" className="card-soft p-10 text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl text-mist">Terima kasih</p>
              <p className="mx-auto mt-3 max-w-sm leading-relaxed text-haze">
                Ini purwarupa desain untuk kontes — tidak ada pesanan atau pembayaran yang diproses. Di toko sungguhan,
                {' '}{p.nama} dikirim dalam kotak polos{kePasangan ? ' ke alamat pasangan Anda' : ''}{kartu ? ', dengan satu kartu percakapan di dalamnya' : ''}.
              </p>
              <button onClick={() => setSelesai(false)} className="micro mt-6 text-tide hover:text-mist">Kembali ke formulir</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="card-soft space-y-7 p-6 sm:p-9">
              <label className="flex cursor-pointer items-start gap-4 rounded-2xl bg-deep p-5">
                <input type="checkbox" checked={kePasangan} onChange={(e) => setKePasangan(e.target.checked)} className="mt-1 h-5 w-5 accent-[#6fb3d2]" />
                <span>
                  <span className="block font-semibold text-mist">Kirim ke alamat pasangan</span>
                  <span className="mt-1 block text-sm text-haze">Untuk yang sedang berjauhan. Nota tanpa harga, resi tanpa nama merek.</span>
                </span>
              </label>

              <fieldset className="grid gap-5 sm:grid-cols-2">
                <legend className="micro mb-2 text-mist sm:col-span-2">{kePasangan ? 'Anda (pemesan)' : 'Penerima'}</legend>
                <Medan label="Nama" name="nama" auto="name" />
                <Medan label="Telepon" name="telepon" type="tel" auto="tel" />
                <Medan label="Surel" name="surel" type="email" auto="email" lebar />
                {!kePasangan && <Medan label="Alamat pengiriman" name="alamat" auto="street-address" lebar />}
              </fieldset>

              {kePasangan && (
                <fieldset className="grid gap-5 sm:grid-cols-2">
                  <legend className="micro mb-2 text-mist sm:col-span-2">Pasangan (penerima)</legend>
                  <Medan label="Nama pasangan" name="nama-pasangan" auto="off" />
                  <Medan label="Telepon pasangan" name="telepon-pasangan" type="tel" auto="off" />
                  <Medan label="Alamat pasangan" name="alamat-pasangan" auto="off" lebar />
                </fieldset>
              )}

              <label className="flex cursor-pointer items-start gap-4">
                <input type="checkbox" checked={kartu} onChange={(e) => setKartu(e.target.checked)} className="mt-1 h-5 w-5 accent-[#6fb3d2]" />
                <span className="text-sm text-mist">
                  Sertakan satu kartu percakapan acak — gratis
                  <span className="mt-1 block text-haze">Dari dek &ldquo;Ringan&rdquo;, dicetak tanpa logo.</span>
                </span>
              </label>

              <button type="submit" disabled={proses} className="w-full rounded-full bg-tide py-4 text-sm font-semibold text-deep transition-colors hover:bg-mist disabled:opacity-70">
                {proses ? 'Memproses…' : `Pesan · ${rupiah(p.harga + ONGKIR)}`}
              </button>
              <p className="micro text-center leading-[1.7] text-haze">Purwarupa desain — tidak ada pembayaran maupun data yang tersimpan.</p>
            </form>
          )}

          <aside className="card-soft h-fit overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="micro text-tide">{s.label}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-mist">{p.nama}</p>
              <dl className="mt-5 divide-y divide-mist/10 border-y border-mist/10 text-sm">
                {[[p.nama, rupiah(p.harga)], ['Pengiriman, kotak polos', rupiah(ONGKIR)], ...(kartu ? [['Kartu percakapan', 'Gratis']] : [])].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="text-haze">{k}</dt>
                    <dd className="text-mist">{v}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4 py-4">
                  <dt className="font-semibold text-mist">Total</dt>
                  <dd className="text-lg font-semibold text-tide">{rupiah(p.harga + ONGKIR)}</dd>
                </div>
              </dl>
              <Link href={`/produk/${p.slug}`} className="micro mt-5 inline-block text-tide hover:text-mist">← Kembali ke produk</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
