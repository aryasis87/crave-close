import Link from 'next/link'
import { OBROLAN } from '@/lib/obrolan'

export default function ObrolanTeaser() {
  return (
    <section id="obrolan" aria-labelledby="obrolan-teaser" className="bg-deep-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-tide">Obrolan</p>
            <h2 id="obrolan-teaser" className="text-[2.1rem] leading-[1.12] md:text-[2.9rem]">Ditulis sebagai percakapan</h2>
          </div>
          <Link href="/jurnal" className="micro shrink-0 rounded-full border border-mist/25 px-5 py-3 text-mist transition-colors hover:border-tide">
            Semua obrolan
          </Link>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {OBROLAN.map((o) => {
            const [a, b] = o.isi.find((x) => x.dialog).dialog
            return (
              <li key={o.slug}>
                <Link href={`/jurnal/${o.slug}`} className="card-soft group flex h-full flex-col p-6 transition-colors hover:border-tide/50">
                  <span aria-hidden="true" className="space-y-2">
                    <span className="block w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-tide/15 px-4 py-2 text-sm text-mist">{a[1]}</span>
                    <span className="ml-auto block w-fit max-w-[90%] rounded-2xl rounded-br-sm bg-coral/20 px-4 py-2 text-sm text-mist">{b[1]}</span>
                  </span>
                  <span className="mt-6 flex-1 font-[family-name:var(--font-display)] text-xl leading-snug text-mist group-hover:text-tide">{o.judul}</span>
                  <span className="micro mt-4 text-haze">{o.menit} menit baca</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
