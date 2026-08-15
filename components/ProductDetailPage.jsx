import Link from 'next/link'

const spek = [
  ['Material', 'Silikon medical-grade, bebas BPA'],
  ['Ketahanan air', 'Tahan percik — tidak untuk direndam'],
  ['Daya', 'Isi ulang USB-C, ±2 jam pemakaian'],
  ['Kebisingan', 'Di bawah 45 dB pada mode terendah'],
  ['Isi paket', 'Alat, kabel, kantong simpan, panduan'],
  ['Garansi', '12 bulan untuk kerusakan bukan akibat salah pakai'],
]

const galeri = ['/images/p5.jpg', '/images/p9.jpeg', '/images/p10.jpeg']

export default function ProductDetailPage() {
  return (
    <section className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="tide-glow absolute inset-x-0 top-0 h-72" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <nav aria-label="Remah roti" className="micro mb-10 flex flex-wrap items-center gap-2 text-haze/55">
          <Link href="/" className="transition-colors hover:text-tide">
            Beranda
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-mist">Tide Duo</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <div className="relative aspect-square overflow-hidden card-soft">
              <img src={galeri[0]} alt="Tide Duo" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {galeri.map((g, i) => (
                <div key={g} className="relative aspect-square overflow-hidden card-soft">
                  <img src={g} alt={`Tide Duo tampilan ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="micro mb-4 text-tide">Dipakai berdua</p>
            <h1 className="text-[2.2rem] leading-[1.06] md:text-[2.9rem]">Tide Duo</h1>

            <p className="mt-5 leading-relaxed text-haze">
              Dua motor yang dikendalikan bergantian, jadi keduanya sama-sama memutuskan. Sebelum
              memesan, sepakati dulu titik mulainya — kartu percakapan kami bisa membantu.
            </p>

            <p className="mt-8 text-2xl font-semibold text-mist">Rp 1.320.000</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/checkout"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-tide px-8 py-4 text-sm font-semibold text-deep transition-colors duration-300 hover:bg-mist"
              >
                Pesan Sekarang
              </Link>
              <Link
                href="/#kontak"
                className="inline-flex items-center justify-center rounded-full border border-mist/25 px-8 py-4 text-sm font-semibold text-mist transition-colors duration-300 hover:border-mist/55"
              >
                Tanya Dulu
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3.5 card-soft px-5 py-4">
              <span aria-hidden="true" className="h-8 w-8 shrink-0 bg-tide/40" />
              <p className="text-sm leading-relaxed text-mist/85">
                Belum dibicarakan berdua? Buka Percakapan Pembuka dulu — empat kalimat yang bisa
                dipakai apa adanya.
              </p>
            </div>

            <dl className="mt-10 divide-y divide-mist/12 border-t border-mist/12">
              {spek.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="micro text-haze/55">{k}</dt>
                  <dd className="text-sm text-mist sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="micro mt-8 leading-[1.7] text-haze/45">
              Spesifikasi dan harga di atas adalah contoh untuk keperluan purwarupa desain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
