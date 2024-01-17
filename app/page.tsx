import Image from 'next/image'
import Header from './Header'
import { Carousels } from './Caiousel'
import Location from './Location'
import FindOutMore from './FindOutMore'


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
      <div>Find Out More</div>
      <div>Location</div>
      <FindOutMore />
      <Location />
      <div>Offerings</div>
      <div>Gallery</div>
      <div>Footer</div>
    </main>
  )
}
