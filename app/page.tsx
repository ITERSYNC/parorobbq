import Image from 'next/image'
import Header from './Header'
import { Carousels } from './Caiousel'
import Location from './Location'
import FindOutMore from './FindOutMore'
import { CarouselPlugin } from './Gallery'

export default function Home() {
  return (
    <main className=''>
      <Header />

      <div className=' flex w-full justify-center items-center my-6'>
        {/* <Carousels /> */}
        <Image
          src='/assets/hero.jpg '
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
      <div>Offerings</div>
      <div className='flex justify-center items-center'>
        <CarouselPlugin />
      </div>
      <div>Footer</div>
    </main>
  )
}
