import Image from 'next/image'
import Header from './Header'
import { Carousels } from './Caiousel'
import Location from './Location'
import FindOutMore from './FindOutMore'
import Offerings from './Offerings'
import Details from './Details'
import { CarouselPlugin } from './Gallery'
import Footer from './Footer'
import Head from 'next/head'
import Hero from '@/components/ui/Hero'

export default function Home() {
  return (
    <main>
      <div id='header'>
        <Header />
      </div>
      <Hero />

      <FindOutMore />
      <div id='location'>
        <Location />
      </div>
      <Offerings />
      <div className='flex justify-center items-center'>
        <CarouselPlugin />
      </div>
      <div id='detail'>
        <Details />
      </div>
      <Footer />
    </main>
  )
}
