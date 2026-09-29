import HeroSection from '@/components/HeroSection'
import Conversation from '@/components/Conversation'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import USPSection from '@/components/USPSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ObrolanTeaser from '@/components/ObrolanTeaser'
import AboutAndFAQ from '@/components/AboutAndFAQ'
import ContactSupport from '@/components/ContactSupport'

/* Beranda Close: percakapan lebih dulu, situasi kedua, barang ketiga.
   Dek 24 kartu di /percakapan, koleksi per situasi di /koleksi, tulisan
   berbentuk dialog di /jurnal. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <Conversation />
      <CategoryGrid />
      <FeaturedProducts />
      <USPSection />
      <TestimonialsCarousel />
      <ObrolanTeaser />
      <AboutAndFAQ />
      <ContactSupport />
    </>
  )
}
