/* Janji Close — hanya yang benar-benar ada di situs ini. Klaim lama seperti
   "enkripsi end-to-end", "teruji dermatologis", dan "brand kelas dunia"
   dibuang karena tidak ada yang bisa membuktikannya. */

const JANJI = [
  ['Kotak polos', 'Tanpa logo dan tanpa nama barang. Di resi tertulis "perlengkapan pribadi"; di mutasi rekening, nama perusahaan pengirim.'],
  ['Silikon medical-grade', 'Tidak berpori dan bebas BPA, sehingga bisa dibersihkan tuntas. Spesifikasi tiap alat tercantum di halaman produknya.'],
  ['Percakapan lebih dulu', 'Setiap barang datang dengan kalimat pembuka dan tiga kesepakatan kecil. Dek 24 kartu bisa dipakai gratis.'],
  ['Dijawab manusia', 'Pertanyaan dijawab orang, bukan bot — tanpa dorongan untuk membeli yang lebih mahal.'],
]

export default function USPSection() {
  return (
    <section id="jaminan" aria-labelledby="jaminan-judul" className="bg-deep-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="micro mb-5 text-tide">Yang kami jamin</p>
          <h2 id="jaminan-judul" className="text-[2.1rem] leading-[1.12] md:text-[2.9rem]">Empat hal, semuanya bisa diperiksa</h2>
        </div>
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-mist/10 bg-mist/10 sm:grid-cols-2 lg:grid-cols-4">
          {JANJI.map(([j, d], i) => (
            <div key={j} className="bg-deep-2 p-7">
              <p aria-hidden="true" className="font-[family-name:var(--font-display)] text-3xl text-tide">0{i + 1}</p>
              <dt className="mt-4 font-[family-name:var(--font-display)] text-2xl text-mist">{j}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-haze">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
