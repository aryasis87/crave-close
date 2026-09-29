import { Suspense } from 'react'
import CheckoutPage from '@/components/CheckoutPage'

export const metadata = {
  title: 'Pemesanan — Positive Crave',
  description: 'Selesaikan pemesanan Anda. Bisa dikirim ke alamat pasangan, dengan satu kartu percakapan gratis.',
  alternates: { canonical: 'https://crave-close.vercel.app/checkout' },
  robots: { index: false, follow: true },
}

// useSearchParams (?produk=…) butuh batas Suspense agar halaman tetap bisa diprerender.
export default function CheckoutRoute() {
  return (
    <Suspense fallback={<section className="min-h-screen bg-deep" />}>
      <CheckoutPage />
    </Suspense>
  )
}
