import Image from 'next/image'
import Header from './Header'
import { Carousels } from './Caiousel'
import Location from './Location'
import FindOutMore from './FindOutMore'
import Offerings from './Offerings'
import { CarouselPlugin } from './Gallery'
import Footer from './Footer'

export default function Home() {
  return (
    <main className=''>
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
      <Location />
      <Offerings />
      <div className='flex justify-center items-center'>
        <CarouselPlugin />
      </div>
      <Footer />
    </main>
  )
}
