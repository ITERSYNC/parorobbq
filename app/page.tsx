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

export default function Home() {
  return (
    <main>
      <Header />

      <div className='bg-[#161616] flex w-full justify-center items-center mobile:mt-[210px]'>
        {/* <Carousels /> */}
        <Image
          src='/assets/hero.jpg'
          alt='Paroro Logo'
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
        />
      </div>
      <FindOutMore />
      <Details />
      <Location />
      <Offerings />
      <div className='flex justify-center items-center'>
        <CarouselPlugin />
      </div>
      <Footer />
    </main>
  )
}
