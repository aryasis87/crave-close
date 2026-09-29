/* Motif "jarak yang mengecil": dua garis dari kiri yang saling mendekat ke
   kanan. `jarak` 1–5 menentukan celah di ujungnya — makin kecil, makin dekat. */
export default function Jarak({ jarak = 3, className = '' }) {
  const celah = 2 + jarak * 3.2
  return (
    <svg viewBox="0 0 120 40" className={className} aria-hidden="true" fill="none">
      <path d={`M2 4 C 50 4, 80 ${20 - celah / 2}, 118 ${20 - celah / 2}`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d={`M2 36 C 50 36, 80 ${20 + celah / 2}, 118 ${20 + celah / 2}`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <circle cx="118" cy={20 - celah / 2} r="2.4" fill="currentColor" />
      <circle cx="118" cy={20 + celah / 2} r="2.4" fill="var(--color-coral)" />
    </svg>
  )
}
