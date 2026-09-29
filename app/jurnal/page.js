import Link from 'next/link'
import { OBROLAN } from '@/lib/obrolan'

export const metadata = {
  title: 'Obrolan — Positive Crave',
  description:
    'Tulisan berbentuk dialog tentang perbedaan keinginan, hubungan jarak jauh, dan menyepakati kata berhenti — untuk pasangan yang ingin lebih dekat.',
  alternates: { canonical: 'https://crave-close.vercel.app/jurnal' },
}

export default function ObrolanPage() {
  return (
    <section className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="micro text-tide">Obrolan</p>
        <h1 className="mt-5 max-w-3xl text-[2.6rem] leading-[1.05] md:text-[3.8rem]">
          Ditulis sebagai percakapan, <span className="text-tide italic">karena memang begitu terjadinya</span>
        </h1>

        <ol className="mt-16 space-y-6">
          {OBROLAN.map((o, i) => {
            const contoh = o.isi.find((b) => b.dialog)?.dialog.slice(0, 2) ?? []
            return (
              <li key={o.slug}>
                <article className="card-soft group relative grid gap-8 p-7 transition-colors hover:border-tide/50 sm:p-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                  <div>
                    <p className="micro text-haze">Obrolan {String(i + 1).padStart(2, '0')} · {o.menit} menit</p>
                    <h2 className="mt-4 text-[1.9rem] leading-[1.12]">
                      <Link href={`/jurnal/${o.slug}`} className="after:absolute after:inset-0 group-hover:text-tide">{o.judul}</Link>
                    </h2>
                    <p className="mt-3 leading-relaxed text-haze">{o.ringkas}</p>
                  </div>
                  <div aria-hidden="true" className="space-y-2.5 self-center">
                    {contoh.map(([siapa, kata], k) => (
                      <p key={k} className={`w-fit max-w-[90%] rounded-2xl px-4 py-2.5 text-sm ${siapa === 'A' ? 'rounded-bl-sm bg-tide/15 text-mist' : 'ml-auto rounded-br-sm bg-coral/20 text-mist'}`}>
                        {kata}
                      </p>
                    ))}
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
