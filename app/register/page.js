import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Daftar — Positive Crave',
  description: 'Buat akun Positive Crave — undang pasangan untuk berbagi satu daftar keinginan, atau lewati saja.',
  alternates: { canonical: 'https://crave-close.vercel.app/register' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="daftar" />
}
