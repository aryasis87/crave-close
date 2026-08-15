import Link from 'next/link'

const kolom = [
  {
    judul: 'Jelajahi',
    tautan: [
      { label: 'Percakapan Pembuka', href: '/#percakapan' },
      { label: 'Koleksi', href: '/#produk' },
      { label: 'Produk Pilihan', href: '/produk' },
    ],
  },
  {
    judul: 'Ketenangan',
    tautan: [
      { label: 'Jaminan Mutu', href: '/#jaminan' },
      { label: 'Tanya Jawab', href: '/#tanya' },
      { label: 'Bantuan', href: '/#kontak' },
    ],
  },
  {
    judul: 'Akun',
    tautan: [
      { label: 'Masuk', href: '/masuk' },
      { label: 'Pemesanan', href: '/checkout' },
    ],
  },
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="border-t border-mist/10 bg-deep">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.7fr))]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xl text-mist">
              Positive <span className="text-tide italic">Crave</span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-haze">
              Perlengkapan keintiman untuk pasangan — dimulai dari percakapan, bukan dari
              keranjang belanja.
            </p>
          </div>

          {kolom.map((k) => (
            <nav key={k.judul} aria-label={k.judul}>
              <h2 className="micro mb-5 text-mist">{k.judul}</h2>
              <ul className="space-y-3">
                {k.tautan.map((t) => (
                  <li key={t.href}>
                    <Link href={t.href} className="text-sm text-haze transition-colors hover:text-tide">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-mist/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="micro text-haze/50">© {tahun} Positive Crave</p>
          <p className="micro text-haze/50">Khusus dewasa 18+</p>
        </div>
      </div>
    </footer>
  )
}
