import Link from 'next/link'
import { notFound } from 'next/navigation'
import Jarak from '@/components/Jarak'
import { OBROLAN, obrolanBySlug } from '@/lib/obrolan'

const SITE = 'https://crave-close.vercel.app'

export function generateStaticParams() {
  return OBROLAN.map((o) => ({ slug: o.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const o = obrolanBySlug(slug)
  if (!o) return {}
  return {
    title: `${o.judul} — Obrolan, Positive Crave`,
    description: o.ringkas,
    alternates: { canonical: `${SITE}/jurnal/${o.slug}` },
    openGraph: { type: 'article' },
  }
}

function Blok({ b }) {
  if (b.h) return <h2 className="mt-14 text-[1.9rem] leading-[1.15]">{b.h}</h2>
  if (b.dialog)
    return (
      <div className="my-8 space-y-3 rounded-3xl bg-deep-2 p-5 sm:p-7" role="group" aria-label="Contoh percakapan">
        {b.dialog.map(([siapa, kata], k) => (
          <div key={k} className={`flex items-end gap-2.5 ${siapa === 'B' ? 'flex-row-reverse' : ''}`}>
            <span aria-hidden="true" className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${siapa === 'A' ? 'bg-tide text-deep' : 'bg-coral text-deep'}`}>{siapa}</span>
            <p className={`max-w-[80%] rounded-2xl px-4 py-3 leading-relaxed text-mist ${siapa === 'A' ? 'rounded-bl-sm bg-tide/15' : 'rounded-br-sm bg-coral/20'}`}>
              <span className="sr-only">{siapa}: </span>
              {kata}
            </p>
          </div>
        ))}
      </div>
    )
  if (b.inti)
    return (
      <p className="converge my-12 py-8 text-center font-[family-name:var(--font-display)] text-[1.6rem] leading-snug text-mist italic md:text-[1.9rem]">
        {b.inti}
      </p>
    )
  return <p className="mt-6 text-[1.075rem] leading-[1.85] text-haze">{b.p}</p>
}

export default async function ObrolanArtikel({ params }) {
  const { slug } = await params
  const o = obrolanBySlug(slug)
  if (!o) notFound()
  const lain = OBROLAN.filter((x) => x.slug !== o.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: o.judul,
    description: o.ringkas,
    author: { '@type': 'Organization', name: 'Positive Crave' },
    mainEntityOfPage: `${SITE}/jurnal/${o.slug}`,
  }

  return (
    <article className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto max-w-2xl px-6">
        <nav aria-label="Remah roti" className="micro text-haze">
          <Link href="/jurnal" className="hover:text-tide">Obrolan</Link> <span aria-hidden="true">/</span> {o.menit} menit baca
        </nav>
        <Jarak jarak={2} className="mt-8 h-10 w-28 text-tide" />
        <h1 className="mt-6 text-[2.6rem] leading-[1.05] md:text-[3.4rem]">{o.judul}</h1>
        <p className="mt-6 text-lg leading-relaxed text-mist">{o.ringkas}</p>

        <div className="mt-10 border-t border-mist/10 pt-4">
          {o.isi.map((b, k) => <Blok key={k} b={b} />)}
        </div>

        <aside className="card-soft mt-16 p-7">
          <p className="micro text-tide">Lanjutkan berdua</p>
          <p className="mt-3 text-haze">
            Butuh kalimat pembuka lain? Ada 24 kartu di{' '}
            <Link href="/percakapan" className="text-mist underline decoration-tide underline-offset-4 hover:text-tide">dek percakapan</Link>.
          </p>
        </aside>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {lain.map((x) => (
            <li key={x.slug}>
              <Link href={`/jurnal/${x.slug}`} className="card-soft block h-full p-6 hover:border-tide/50">
                <span className="micro text-haze">{x.menit} menit</span>
                <span className="mt-2 block font-[family-name:var(--font-display)] text-xl leading-snug text-mist">{x.judul}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
