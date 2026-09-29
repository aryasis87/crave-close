/* Bantuan Close — saluran kontak yang sama dengan varian lain dari brief ini.
   Janji waktu respons yang tidak konsisten dan "Intimacy Concierge" dibuang. */

const SALURAN = [
  { label: 'Chat', nilai: 'Setiap hari 10.00–22.00 WIB', ket: 'Dijawab orang, bukan bot.' },
  { label: 'Surel', nilai: 'halo@positivecrave.id', href: 'mailto:halo@positivecrave.id', ket: 'Untuk pertanyaan panjang atau klaim garansi.' },
  { label: 'Telepon', nilai: '+62 812 3456 7890', href: 'tel:+6281234567890', ket: 'Senin–Jumat 09.00–17.00 WIB.' },
]

export default function ContactSupport() {
  return (
    <section id="kontak" aria-labelledby="kontak-judul" className="relative overflow-hidden bg-deep py-20 md:py-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="micro mb-5 text-tide">Bantuan</p>
          <h2 id="kontak-judul" className="text-[2.1rem] leading-[1.12] md:text-[2.9rem]">Tanyakan berdua, atau sendiri dulu</h2>
          <p className="mt-5 max-w-md leading-relaxed text-haze">
            Kadang yang dibutuhkan bukan barang, melainkan seseorang yang bisa ditanya tanpa dihakimi. Kami menjawab
            tanpa menawarkan produk sebagai jawabannya.
          </p>
        </div>
        <dl className="space-y-4">
          {SALURAN.map((s) => (
            <div key={s.label} className="card-soft p-6">
              <dt className="micro text-tide">{s.label}</dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl text-mist">
                {s.href ? <a href={s.href} className="break-all hover:text-tide">{s.nilai}</a> : s.nilai}
              </dd>
              <dd className="mt-1 text-sm text-haze">{s.ket}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
