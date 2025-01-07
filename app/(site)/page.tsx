// app/(site)/page.tsx

'use client'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import CategorySection from '@/components/CategorySection'
import CTASection from '@/components/CTASection'
import FavoritesSection from '@/components/FavoritesSection'
import GallerySection from '@/components/GallerySection'
import NoticeSection from '@/components/NoticeSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div>
      {/* 头部导航 */}
      <Header />

      {/* 顶部Banner区块 */}
      <Banner />

      {/* Grill, Chill, and Fill */}
      <CategorySection />

      {/* CTA区块 - Sizzle Your Senses */}
      <CTASection />

      {/* Favorites */}
      <FavoritesSection />

      {/* Gallery - We are open lunch and dinner */}
      <GallerySection />

      {/* NoticeSection */}
      <NoticeSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}