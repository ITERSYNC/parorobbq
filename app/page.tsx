import Image from 'next/image'
import Header from './Header'
import Location from './Location'
import FindOutMore from './FindOutMore'

export default function Home() {
  return (
    <main>
      <Header />
      <div>Carousel</div>
      <FindOutMore />
      <Location />
      <div>Offerings</div>
      <div>Gallery</div>
      <div>Footer</div>
    </main>
  )
}
