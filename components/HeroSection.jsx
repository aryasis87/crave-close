import Image from 'next/image'
import Link from 'next/link'

const janji = [
  ['Kemasan', 'Polos, tanpa merek'],
  ['Material', 'Medical-grade, bebas BPA'],
  ['Dukungan', 'Dijawab manusia'],
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-deep pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div>
          <p className="micro mb-7 text-tide">Positive Crave · Untuk pasangan</p>

          <h1 className="text-[2.7rem] leading-[1.06] sm:text-5xl lg:text-[4rem]">
            A New Way
            <br />
            to Feel <span className="text-tide">Close</span>.
          </h1>

          <p className="mt-7 max-w-lg leading-relaxed text-haze">
            Kedekatan tidak dibeli, tapi dibicarakan. Kami mulai dari percakapannya dulu — soal apa
            yang ingin dicoba, apa yang tidak, dan bagaimana cara berhenti kalau salah satu berubah
            pikiran.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#percakapan"
              className="micro inline-flex items-center justify-center rounded-full bg-tide px-8 py-4 text-deep transition-colors duration-300 hover:bg-mist"
            >
              Mulai Percakapan
            </Link>
            <Link
              href="/koleksi"
              className="micro inline-flex items-center justify-center rounded-full border border-mist/25 px-8 py-4 text-mist transition-colors duration-300 hover:border-mist/55"
            >
              Lihat Koleksi
            </Link>
          </div>

          <dl className="mt-14 grid gap-7 border-t border-mist/12 pt-8 sm:grid-cols-3">
            {janji.map(([k, v]) => (
              <div key={k}>
                <dt className="micro text-haze">{k}</dt>
                <dd className="mt-2.5 text-sm font-semibold text-mist">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-deep-2">
            <Image
              src="/images/p16.jpeg"
              alt="Dua orang tertidur berdampingan, tangan masih saling menggenggam"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent"
            />
          </div>

          <figcaption className="card-soft absolute right-5 bottom-5 left-5 px-5 py-4">
            <p className="micro text-tide">Sebelum apa pun</p>
            <p className="mt-2 text-sm leading-relaxed text-mist/85">
              Sepakati dulu titik mulainya — sisanya jauh lebih mudah.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
