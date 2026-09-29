'use client'

import { useState } from 'react'

/* Tiga kesepakatan kecil sebelum mencoba. Dicentang berdua di layar yang
   sama — tidak ada yang disimpan. Saat ketiganya dicentang, muncul
   kalimat penutup. */
export default function Kesepakatan({ daftar }) {
  const [centang, setCentang] = useState(() => daftar.map(() => false))
  const semua = centang.every(Boolean)

  return (
    <fieldset className="card-soft p-6 sm:p-7">
      <legend className="sr-only">Kesepakatan kecil sebelum mencoba</legend>
      <p className="micro text-tide">Tiga kesepakatan kecil</p>
      <ul className="mt-5 space-y-3">
        {daftar.map((d, i) => (
          <li key={d}>
            <label className="flex cursor-pointer items-start gap-3.5 text-sm leading-relaxed text-mist">
              <input
                type="checkbox"
                checked={centang[i]}
                onChange={(e) => setCentang((c) => c.map((x, k) => (k === i ? e.target.checked : x)))}
                className="mt-0.5 h-5 w-5 shrink-0 accent-[#6fb3d2]"
              />
              <span className={centang[i] ? 'text-haze line-through decoration-tide/60' : ''}>{d}</span>
            </label>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className={`mt-5 text-sm transition-opacity ${semua ? 'text-coral opacity-100' : 'text-haze opacity-100'}`}>
        {semua ? 'Ketiganya sudah disepakati. Selamat mencoba, pelan-pelan saja.' : 'Centang berdua, di layar yang sama. Tidak ada yang disimpan.'}
      </p>
    </fieldset>
  )
}
