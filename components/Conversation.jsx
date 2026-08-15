import Link from 'next/link'

/* ============================================================================
   Bagian penanda varian ini: "Percakapan Pembuka".
   Varian Close berangkat dari kenyataan bahwa hambatan terbesar bukan memilih
   produk, melainkan memulai pembicaraannya. Empat kartu ini bisa dipakai apa
   adanya — tidak satu pun menyebut produk.
   ========================================================================== */

const kartu = [
  {
    no: '01',
    kapan: 'Saat santai, bukan di kamar',
    tanya: '"Ada nggak sesuatu yang pengin kamu coba, tapi belum pernah kamu bilang?"',
    kenapa: 'Dibuka di ruang netral supaya tidak terasa seperti tuntutan pada saat itu juga.',
  },
  {
    no: '02',
    kapan: 'Setelah malam yang menyenangkan',
    tanya: '"Bagian mana tadi yang paling kamu suka?"',
    kenapa: 'Lebih mudah dijawab daripada pertanyaan tentang apa yang kurang.',
  },
  {
    no: '03',
    kapan: 'Ketika salah satu sedang ragu',
    tanya: '"Kalau nanti kamu berubah pikiran di tengah, kamu mau ngomong gimana?"',
    kenapa: 'Menyepakati cara berhenti lebih dulu membuat keduanya lebih berani mencoba.',
  },
  {
    no: '04',
    kapan: 'Sebelum membeli apa pun',
    tanya: '"Kita mulai dari yang paling sederhana dulu, gimana?"',
    kenapa: 'Kesepakatan soal titik mulai mencegah salah satu merasa didorong.',
  },
]

export default function Conversation() {
  return (
    <section id="percakapan" className="relative overflow-hidden bg-deep py-20 md:py-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="micro mb-5 text-tide">Percakapan Pembuka</p>
          <h2 className="text-[2.1rem] leading-[1.14] md:text-[2.9rem]">
            Yang paling sulit biasanya bukan mencobanya —
            <span className="text-tide"> tapi membicarakannya</span>
          </h2>
          <p className="mt-5 leading-relaxed text-haze">
            Empat kalimat yang bisa dipakai apa adanya. Tidak satu pun menyebut produk, karena
            memang bukan itu yang perlu disepakati lebih dulu.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {kartu.map((k) => (
            <article key={k.no} className="card-soft flex flex-col p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="micro text-tide">{k.no}</span>
                <span className="micro text-haze/55">{k.kapan}</span>
              </div>

              <p className="font-[family-name:var(--font-display)] text-xl leading-snug text-mist md:text-2xl">
                {k.tanya}
              </p>

              <p className="mt-6 border-t border-mist/12 pt-4 text-sm leading-relaxed text-haze">
                {k.kenapa}
              </p>
            </article>
          ))}
        </div>

        <div className="converge mt-12 px-6 py-10 text-center">
          <p className="mx-auto max-w-xl leading-relaxed text-haze">
            Kalau percakapannya sudah terjadi, memilih barangnya jadi bagian yang paling mudah.
          </p>
          <Link
            href="/#produk"
            className="micro mt-6 inline-block rounded-full bg-tide px-7 py-3.5 text-deep transition-colors hover:bg-mist"
          >
            Baru Lihat Koleksi
          </Link>
        </div>
      </div>
    </section>
  )
}
