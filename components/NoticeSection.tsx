// components/NoticeSection.tsx

import Image from 'next/image'
import { cards } from '@/lib/data'

export default function NoticeSection() {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
      <Image
        src='/assets/gallery6.png'
        alt=''
        className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
        width={1920}
        height={1080}
      />
      <div className='absolute inset-0 bg-gray-900/10' aria-hidden='true' />
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            Notice
          </h2>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
          {cards.map(card => (
            <div
              key={card.name}
              className='flex gap-x-4 rounded-full bg-black/75 px-12 py-6 ring-1 ring-inset ring-white/10'
            >
              <div className='text-base leading-7'>
                <h3 className='font-semibold text-white'>{card.name}</h3>
                <p className='mt-2 text-gray-300'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
