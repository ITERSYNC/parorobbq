// components/CTASection.tsx

import Image from 'next/image'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section aria-labelledby='cause-heading'>
      <div className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
        <div className='absolute inset-0 overflow-hidden'>
          <Image
            src='/assets/location-section.png'
            alt=''
            className='h-full w-full object-cover object-center'
            width={1920}
            height={1080}
          />
        </div>
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-gray-900 bg-opacity-50'
        />
        <div className='relative mx-auto flex max-w-7xl flex-col items-center text-center'>
          <h2
            id='cause-heading'
            className='text-3xl font-bold tracking-tight text-white opacity-80 sm:text-8xl'
          >
            Sizzle Your Senses - A Journey Through Korean BBQ!
          </h2>
          <p className='mt-3 font-nanum-brush text-xl text-stone-100 opacity-80 sm:text-7xl'>
            감각을 자극하는 구이 - 한국 바비큐 여행!
          </p>
          <Link
            href='https://inline.app/booking/...'
            className='mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-4xl font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'
          >
            Booking!
          </Link>
        </div>
      </div>
    </section>
  )
}
