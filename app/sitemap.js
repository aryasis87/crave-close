import { PRODUK } from '@/lib/katalog'
import { OBROLAN } from '@/lib/obrolan'

const SITE = 'https://crave-close.vercel.app'

export default function sitemap() {
  const now = new Date()
  return [
    { url: SITE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/koleksi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/percakapan`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/jurnal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...PRODUK.map((p) => ({ url: `${SITE}/produk/${p.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })),
    ...OBROLAN.map((a) => ({ url: `${SITE}/jurnal/${a.slug}`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 })),
  ]
}
