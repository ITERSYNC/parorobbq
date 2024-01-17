import Image from 'next/image'
import Header from './Header'
import FindOutMore from './FindOutMore'

export default function Home() {
  return (
    <main>
      <Header />

      <div>Carousel</div>
      <FindOutMore />
      <div>Location</div>
      <div>Offerings</div>
      <div>Gallery</div>
      <div>Footer</div>
    </main>
  )
}
