import Image from 'next/image'
import Header from './Header'
import Location from './Location'
import FindOutMore from './FindOutMore'
import Offerings from './Offerings'

export default function Home() {
  return (
    <main>
      <Header />
      <div>Carousel</div>
      <FindOutMore />
      <Location />
      <Offerings />
      <div>Gallery</div>
      <div>Footer</div>
    </main>
  )
}
