import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Masuk — Positive Crave',
  description: 'Masuk ke akun Positive Crave untuk melihat pesanan dan daftar keinginan berdua.',
  alternates: { canonical: 'https://crave-close.vercel.app/masuk' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="masuk" />
}
