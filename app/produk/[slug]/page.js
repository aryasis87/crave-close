import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Jarak from '@/components/Jarak'
import Kesepakatan from '@/components/Kesepakatan'
import { PRODUK, produkBySlug, rupiah, situasiDari } from '@/lib/katalog'

const SITE = 'https://crave-close.vercel.app'

export function generateStaticParams() {
  return PRODUK.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) return {}
  const s = situasiDari(p.situasi)
  return {
    title: `${p.nama} — ${s.label}, Positive Crave`,
    description: `${p.ringkas} Lengkap dengan obrolan pembuka dan tiga kesepakatan kecil sebelum mencoba.`,
    alternates: { canonical: `${SITE}/produk/${p.slug}` },
    openGraph: { images: [{ url: p.image }] },
  }
}

export default async function ProdukPage({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) notFound()
  const s = situasiDari(p.situasi)
  const lain = PRODUK.filter((x) => x.situasi === p.situasi && x.slug !== p.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.nama,
    description: p.ringkas,
    image: `${SITE}${p.image}`,
    offers: { '@type': 'Offer', priceCurrency: 'IDR', price: p.harga, availability: 'https://schema.org/InStock' },
  }

  return (
    <>
      <section className="relative overflow-clip bg-deep pt-28 pb-20 md:pt-36 md:pb-24">
        <div aria-hidden="true" className="tide-glow absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6">
          <nav aria-label="Remah roti" className="micro mb-10 flex flex-wrap items-center gap-2 text-haze">
            <Link href="/" className="hover:text-tide">Beranda</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/koleksi#${s.id}`} className="hover:text-tide">{s.label}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-mist" aria-current="page">{p.nama}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="card-soft relative aspect-[4/5] overflow-hidden">
                <Image src={p.image} alt={p.nama} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>

            <div>
              <p className="micro flex items-center gap-3 text-tide">
                <Jarak jarak={s.jarak} className="h-4 w-10" /> {s.label}
              </p>
              <h1 className="mt-5 text-[2.8rem] leading-[1.02] md:text-[3.6rem]">{p.nama}</h1>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-haze">{p.cerita}</p>
              <p className="mt-8 text-3xl text-mist">{rupiah(p.harga)}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/checkout?produk=${p.slug}`} className="inline-flex flex-1 items-center justify-center rounded-full bg-tide px-8 py-4 text-sm font-semibold text-deep transition-colors hover:bg-mist">
                  Pesan
                </Link>
                <Link href="/percakapan" className="inline-flex flex-1 items-center justify-center rounded-full border border-mist/20 px-8 py-4 text-sm font-semibold text-mist transition-colors hover:border-tide">
                  Buka dek percakapan
                </Link>
              </div>

              {/* Obrolan sebelum mencoba — ciri khas halaman produk Close */}
              <section aria-labelledby="obrolan-judul" className="mt-12">
                <h2 id="obrolan-judul" className="text-2xl">Obrolan sebelum mencoba</h2>
                <ul className="mt-5 space-y-3">
                  {p.obrolan.map((o, i) => (
                    <li key={o} className={`flex ${i % 2 ? 'justify-end' : ''}`}>
                      <p className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${i % 2 ? 'rounded-br-sm bg-coral/20 text-mist' : 'rounded-bl-sm bg-tide/15 text-mist'}`}>{o}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-10">
                <Kesepakatan daftar={p.sepakat} />
              </div>

              <dl className="mt-10 divide-y divide-mist/10 border-y border-mist/10">
                {p.spek.map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-6">
                    <dt className="micro text-haze">{k}</dt>
                    <dd className="text-sm text-mist sm:text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="micro mt-8 leading-[1.7] text-haze">Nama, harga, dan spesifikasi adalah contoh untuk keperluan purwarupa desain.</p>
            </div>
          </div>
        </div>
      </section>

      {lain.length > 0 && (
        <section className="bg-deep-2 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-[2rem] leading-tight">Juga {s.label.toLowerCase()}</h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {lain.map((x) => (
                <li key={x.slug}>
                  <Link href={`/produk/${x.slug}`} className="card-soft group flex items-center gap-5 p-4 transition-colors hover:border-tide/50">
                    <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image src={x.image} alt="" fill sizes="80px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-[family-name:var(--font-display)] text-xl text-mist group-hover:text-tide">{x.nama}</span>
                      <span className="mt-1 block text-sm text-haze">{rupiah(x.harga)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
