import Link from 'next/link'
import DekKartu from '@/components/DekKartu'
import Jarak from '@/components/Jarak'

export const metadata = {
  title: 'Dek Percakapan — Positive Crave',
  description:
    'Dua puluh empat kartu percakapan untuk pasangan dalam tiga dek: ringan, lebih dalam, dan sesudahnya. Tidak satu pun menyebut produk.',
  alternates: { canonical: 'https://crave-close.vercel.app/percakapan' },
}

const ATURAN = [
  ['Satu kartu cukup', 'Tidak perlu menghabiskan dek. Satu pertanyaan yang dijawab jujur lebih berharga dari sepuluh yang terburu-buru.'],
  ['Boleh dilewati', 'Siapa pun boleh berkata "lewat" tanpa menjelaskan. Kartu itu bisa kembali lain waktu.'],
  ['Dengarkan sampai selesai', 'Jangan membela diri dulu. Jawaban pasangan adalah informasi, bukan tuduhan.'],
]

export default function PercakapanPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep pt-28 pb-20 md:pt-36 md:pb-28">
        <div aria-hidden="true" className="tide-glow absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6">
          <header className="mx-auto max-w-2xl text-center">
            <Jarak jarak={1} className="mx-auto h-10 w-28 text-tide" />
            <p className="micro mt-6 text-tide">Dek percakapan</p>
            <h1 className="mt-5 text-[2.6rem] leading-[1.05] md:text-[3.8rem]">
              Jaraknya mengecil <span className="text-tide italic">satu pertanyaan sekali</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-haze">
              Dua puluh empat kartu dalam tiga dek. Tidak satu pun menyebut produk — karena yang paling sulit biasanya
              bukan mencobanya, tapi membicarakannya.
            </p>
          </header>
          <div className="mt-14">
            <DekKartu />
          </div>
        </div>
      </section>

      <section aria-labelledby="aturan-judul" className="bg-deep-2 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="aturan-judul" className="text-[2rem] leading-tight md:text-[2.5rem]">Tiga aturan main</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {ATURAN.map(([j, d], i) => (
              <li key={j} className="card-soft p-7">
                <p className="font-[family-name:var(--font-display)] text-4xl text-tide">{i + 1}</p>
                <h3 className="mt-4 text-xl">{j}</h3>
                <p className="mt-2 text-sm leading-relaxed text-haze">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-haze">
            Ingin versi cetaknya? Dua belas kartu dari dek ini ada di{' '}
            <Link href="/produk/kit-berdua" className="text-mist underline decoration-tide underline-offset-4 hover:text-tide">Kit Berdua</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
