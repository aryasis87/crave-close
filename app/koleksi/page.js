import Image from 'next/image'
import Link from 'next/link'
import Jarak from '@/components/Jarak'
import { PRODUK, SITUASI, rupiah } from '@/lib/katalog'

const SITE = 'https://crave-close.vercel.app'

export const metadata = {
  title: 'Koleksi menurut Situasi — Positive Crave',
  description:
    'Koleksi Positive Crave disusun menurut situasi hubungan: saat baru mulai, saat ingin lebih dekat, saat berjauhan, dan untuk diri sendiri. Setiap barang datang dengan obrolan pembukanya.',
  alternates: { canonical: `${SITE}/koleksi` },
}

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Koleksi Positive Crave menurut situasi',
  itemListElement: PRODUK.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/produk/${p.slug}`, name: p.nama })),
}

export default function KoleksiPage() {
  let urut = 0
  return (
    <section className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6">
        <header className="max-w-3xl">
          <p className="micro text-tide">Koleksi · {PRODUK.length} barang</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.05] md:text-[3.8rem]">
            Bukan menurut jenisnya, <span className="text-tide italic">tapi menurut jaraknya</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-haze">
            Mulai dari mana Anda berdua sekarang — baru saling menebak, ingin lebih dekat, atau sedang terpisah kota.
            Setiap barang datang dengan kalimat pembuka obrolannya sendiri.
          </p>
          <nav aria-label="Lompat ke situasi" className="mt-8 flex flex-wrap gap-2">
            {SITUASI.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="card-soft inline-flex min-h-11 items-center gap-3 px-4 text-sm text-mist hover:border-tide/50">
                <Jarak jarak={s.jarak} className="h-4 w-10 text-tide" />
                {s.label}
              </a>
            ))}
          </nav>
        </header>

        {SITUASI.map((s) => {
          const isi = PRODUK.filter((p) => p.situasi === s.id)
          return (
            <section key={s.id} id={s.id} aria-labelledby={`judul-${s.id}`} className="converge mt-20 scroll-mt-24 pt-12">
              <div className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center">
                <Jarak jarak={s.jarak} className="h-12 w-32 text-tide" />
                <div>
                  <h2 id={`judul-${s.id}`} className="text-[2rem] leading-[1.1] md:text-[2.5rem]">{s.label}</h2>
                  <p className="mt-2 text-haze">{s.desc}</p>
                </div>
              </div>

              <ul className="mt-10 space-y-6">
                {isi.map((p) => {
                  const kanan = urut++ % 2 === 1
                  return (
                    <li key={p.slug}>
                      <article className="card-soft group relative grid overflow-hidden sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                        <div className={`relative aspect-[4/3] sm:aspect-auto sm:min-h-[16rem] ${kanan ? 'sm:order-2' : ''}`}>
                          <Image src={p.image} alt={p.nama} fill sizes="(min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="flex flex-col p-6 sm:p-8">
                          <h3 className="text-[1.7rem] leading-tight">
                            <Link href={`/produk/${p.slug}`} className="after:absolute after:inset-0">{p.nama}</Link>
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-haze">{p.ringkas}</p>
                          <p className="mt-5 rounded-2xl rounded-bl-sm bg-tide/15 px-4 py-3 text-sm text-mist">{p.obrolan[0]}</p>
                          <p className="mt-5 text-base font-semibold text-mist">{rupiah(p.harga)}</p>
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}

        <p className="micro mt-16 leading-[1.7] text-haze">Nama, harga, dan spesifikasi adalah contoh untuk keperluan purwarupa desain.</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </section>
  )
}
