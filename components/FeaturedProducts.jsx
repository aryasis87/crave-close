import Image from 'next/image'
import Link from 'next/link'
import { PRODUK, rupiah, situasiDari } from '@/lib/katalog'

/* Tiga barang pilihan, masing-masing dengan kalimat pembukanya — bukan
   daftar fitur. Dulu nama & fotonya tidak cocok dengan barangnya. */
export default function FeaturedProducts() {
  const unggulan = PRODUK.filter((p) => p.unggulan).slice(0, 3)
  return (
    <section id="produk" aria-labelledby="produk-judul" className="border-t border-mist/10 bg-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="micro mb-5 text-tide">Pilihan</p>
          <h2 id="produk-judul" className="text-[2.1rem] leading-[1.12] md:text-[2.9rem]">Tiga barang, tiga kalimat pembuka</h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {unggulan.map((p) => (
            <li key={p.slug}>
              <article className="card-soft group relative flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={p.image} alt={p.nama} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="micro text-haze">{situasiDari(p.situasi).label}</p>
                  <h3 className="mt-2 text-2xl">
                    <Link href={`/produk/${p.slug}`} className="after:absolute after:inset-0">{p.nama}</Link>
                  </h3>
                  <p className="mt-4 flex-1 rounded-2xl rounded-bl-sm bg-tide/15 px-4 py-3 text-sm text-mist">{p.obrolan[0]}</p>
                  <p className="mt-5 font-semibold text-mist">{rupiah(p.harga)}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <p className="micro mt-8 leading-[1.7] text-haze">Nama dan harga adalah contoh untuk keperluan purwarupa desain.</p>
      </div>
    </section>
  )
}
