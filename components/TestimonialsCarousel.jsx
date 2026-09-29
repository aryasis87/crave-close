/* Cerita pembeli versi Close: bukan ulasan barang, melainkan apa yang berubah
   dalam percakapan mereka. Tanpa bintang; nama disingkat. */

const CERITA = [
  { kutip: 'Kami tidak langsung membeli apa-apa. Kami ambil satu kartu dari dek "Ringan" tiap Jumat malam. Tiga minggu kemudian, baru kami memesan.', nama: 'A. & R.', ket: 'Bersama 6 tahun' },
  { kutip: 'Kata berhenti kami "jeruk". Kedengarannya konyol, tapi justru karena itu kami jadi berani mencoba hal yang dulu cuma dibayangkan.', nama: 'D. & S.', ket: 'Baru menikah' },
  { kutip: 'Kami beda kota setahun ini. Yang paling membantu bukan alatnya, tapi pertanyaan "hal paling random hari ini apa?" setiap malam.', nama: 'M. & K.', ket: 'Jakarta–Makassar' },
]

export default function TestimonialsCarousel() {
  return (
    <section aria-labelledby="cerita-judul" className="relative overflow-hidden bg-deep py-20 md:py-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="micro mb-5 text-tide">Dari pasangan</p>
          <h2 id="cerita-judul" className="text-[2.1rem] leading-[1.12] md:text-[2.9rem]">Yang berubah biasanya percakapannya</h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {CERITA.map((c) => (
            <li key={c.nama} className="card-soft flex flex-col p-7">
              <blockquote className="flex-1 font-[family-name:var(--font-display)] text-xl leading-snug text-mist">&ldquo;{c.kutip}&rdquo;</blockquote>
              <p className="mt-6 border-t border-mist/10 pt-4 text-sm text-haze">
                <span className="font-semibold text-mist">{c.nama}</span> · {c.ket}
              </p>
            </li>
          ))}
        </ul>
        <p className="micro mt-8 leading-[1.7] text-haze">Nama disingkat atas permintaan. Kutipan adalah ilustrasi untuk keperluan purwarupa desain.</p>
      </div>
    </section>
  )
}
