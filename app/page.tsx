import Image from 'next/image'
import Header from './Header'
import Location from './Location'

export default function Home() {
  return (
    <main>
      <Header />

      <div>Carousel</div>
      <div>Find Out More</div>
      <Location />
      <div>Offerings</div>
      <div>Gallery</div>
      <div>Footer</div>
    </main>
  )
}