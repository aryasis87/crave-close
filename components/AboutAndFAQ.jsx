import Link from 'next/link'

/* Tanya jawab Close. Jawaban disesuaikan dengan isi situs yang sebenarnya:
   dulu ada janji "kuis eksplorasi di halaman Panduan" dan "animasi edukatif"
   yang tidak pernah ada. <details> supaya jawaban ada di HTML. */

const TANYA = [
  { q: 'Kami belum pernah membicarakan hal ini. Mulai dari mana?', a: 'Dari percakapan, bukan dari barang. Dek percakapan kami punya 24 kartu, dimulai dari yang paling ringan dan tidak menyebut produk sama sekali.', tautan: ['/percakapan', 'Buka dek percakapan'] },
  { q: 'Apakah ini hanya untuk pasangan?', a: 'Tidak. Ada bagian "Untuk diri sendiri" di koleksi, karena mengenal tubuh sendiri juga bagian dari kedekatan dengan orang lain.', tautan: ['/koleksi#sendiri', 'Untuk diri sendiri'] },
  { q: 'Kami sedang berjauhan. Apa yang bisa membantu?', a: 'Alat yang dikendalikan dari jauh bisa membantu, tapi yang paling sering membantu adalah mengubah telepon harian dari laporan menjadi percakapan. Kami menuliskannya di Obrolan.', tautan: ['/jurnal/dekat-saat-berjauhan', 'Tetap dekat saat berjauhan'] },
  { q: 'Apa yang tertulis di paket?', a: 'Kotak cokelat polos tanpa logo. Di resi hanya "perlengkapan pribadi". Bila dikirim ke alamat pasangan, nota di dalamnya tanpa harga.' },
  { q: 'Apakah daftar keinginan saya bisa dilihat pasangan?', a: 'Hanya bila Anda memilih untuk membaginya. Riwayat pesanan tidak pernah dibagikan, bahkan ke akun pasangan.' },
  { q: 'Bagaimana kalau barangnya rusak?', a: 'Alat bergaransi 12 bulan untuk kerusakan yang bukan akibat salah pemakaian. Penggantian dikirim dalam kotak polos yang sama.' },
]

export default function AboutAndFAQ() {
  return (
    <section id="tanya" aria-labelledby="tanya-judul" className="relative overflow-clip bg-deep-2 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="micro mb-5 text-tide">Tanya jawab</p>
          <h2 id="tanya-judul" className="text-[2.1rem] leading-[1.12] md:text-[2.8rem]">Pertanyaan yang biasanya ditanyakan berdua</h2>
          <p className="mt-5 leading-relaxed text-haze">
            Tidak menemukan jawabannya? Tanyakan langsung — boleh berdua, boleh sendiri.
          </p>
        </div>
        <div className="space-y-3">
          {TANYA.map((t, i) => (
            <details key={t.q} className="card-soft group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-mist [&::-webkit-details-marker]:hidden">
                <span className="font-[family-name:var(--font-display)] text-xl leading-snug">{t.q}</span>
                <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-mist/20 text-tide transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-sm leading-relaxed text-haze">
                <p>{t.a}</p>
                {t.tautan && (
                  <Link href={t.tautan[0]} className="micro mt-4 inline-block text-tide hover:text-mist">{t.tautan[1]} →</Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
