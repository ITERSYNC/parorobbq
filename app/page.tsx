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
    <main className='mobile:text-[10px] ipadV:text-[16px]'>
      <Header />

      <div className=' flex w-full justify-center items-center my-6 mobile:my-10'>
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
