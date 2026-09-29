'use client'

import { useState } from 'react'
import { DEK } from '@/lib/kartu'

/* Dek kartu percakapan interaktif: pilih dek, balik kartu berikutnya,
   atau acak. Semua kartu juga tersedia sebagai daftar di bawah (tanpa JS). */
export default function DekKartu() {
  const [dek, setDek] = useState(0)
  const [i, setI] = useState(0)
  const d = DEK[dek]
  const kartu = d.kartu[i]

  const pilihDek = (k) => {
    setDek(k)
    setI(0)
  }
  const berikut = () => setI((x) => (x + 1) % d.kartu.length)
  const acak = () => setI((x) => {
    let n = x
    while (n === x) n = Math.floor(Math.random() * d.kartu.length)
    return n
  })

  return (
    <div>
      <div role="tablist" aria-label="Pilih dek" className="flex flex-wrap justify-center gap-2">
        {DEK.map((x, k) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={dek === k}
            onClick={() => pilihDek(k)}
            className={`min-h-11 rounded-full px-5 text-sm transition-colors ${dek === k ? 'bg-tide font-semibold text-deep' : 'border border-mist/20 text-mist hover:border-tide'}`}
          >
            {x.nama}
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-haze">{d.ket}</p>

      {/* Kartu */}
      <div className="relative mx-auto mt-10 max-w-xl">
        <span aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-3xl bg-deep-2/70" />
        <span aria-hidden="true" className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-1 rounded-3xl bg-deep-2" />
        <figure className="relative flex min-h-[20rem] flex-col justify-between rounded-3xl bg-mist p-8 text-deep shadow-[0_40px_60px_-30px_rgb(0_0_0/0.6)] sm:p-12">
          <figcaption className="flex justify-between text-xs font-semibold tracking-[0.18em] uppercase">
            <span>{d.nama}</span>
            <span>{i + 1} / {d.kartu.length}</span>
          </figcaption>
          <blockquote aria-live="polite" className="my-8 font-[family-name:var(--font-display)] text-[1.9rem] leading-[1.2] sm:text-[2.3rem]">
            {kartu}
          </blockquote>
          <p className="text-xs text-deep/75">Boleh dilewati tanpa alasan.</p>
        </figure>
      </div>

      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={berikut} className="min-h-12 rounded-full bg-tide px-8 text-sm font-semibold text-deep transition-colors hover:bg-mist">
          Kartu berikutnya
        </button>
        <button type="button" onClick={acak} className="min-h-12 rounded-full border border-mist/25 px-8 text-sm font-semibold text-mist transition-colors hover:border-tide">
          Acak
        </button>
      </div>

      <details className="card-soft mx-auto mt-14 max-w-3xl p-6">
        <summary className="cursor-pointer text-sm font-semibold text-mist">Lihat semua 24 kartu</summary>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {DEK.map((x) => (
            <div key={x.id}>
              <p className="micro text-tide">{x.nama}</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-haze">
                {x.kartu.map((k) => <li key={k}>{k}</li>)}
              </ol>
            </div>
          ))}
        </div>
      </details>
    </div>
  )
}
