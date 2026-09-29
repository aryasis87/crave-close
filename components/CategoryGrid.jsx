import Link from 'next/link'
import Jarak from '@/components/Jarak'
import { PRODUK, SITUASI } from '@/lib/katalog'

/* Empat situasi hubungan, masing-masing dengan motif jarak yang mengecil.
   Dulu judulnya berbahasa Inggris dan tautannya "#" (tidak ke mana-mana). */
export default function CategoryGrid() {
  return (
    <section id="situasi" aria-labelledby="situasi-judul" className="bg-deep-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-tide">Mulai dari situasinya</p>
            <h2 id="situasi-judul" className="text-[2.1rem] leading-[1.12] md:text-[2.9rem]">Di mana jarak kalian sekarang?</h2>
          </div>
          <Link href="/koleksi" className="micro shrink-0 rounded-full border border-mist/25 px-5 py-3 text-mist transition-colors hover:border-tide">
            Seluruh koleksi · {PRODUK.length}
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SITUASI.map((s) => (
            <li key={s.id}>
              <Link href={`/koleksi#${s.id}`} className="card-soft group flex h-full flex-col p-6 transition-colors hover:border-tide/50">
                <Jarak jarak={s.jarak} className="h-10 w-28 text-tide" />
                <span className="mt-6 font-[family-name:var(--font-display)] text-2xl leading-tight text-mist group-hover:text-tide">{s.label}</span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-haze">{s.desc}</span>
                <span className="micro mt-5 text-haze">{PRODUK.filter((p) => p.situasi === s.id).length} barang</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
