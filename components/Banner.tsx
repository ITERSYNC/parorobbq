// components/Banner.tsx

'use client'

import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div className='mx-auto max-w-2xl pb-8 pt-16 lg:py-36'>
        {/* Booking按钮 */}
        <div className='flex w-full justify-center'>
          <div className='mb-10 flex w-fit animate-bounce rounded-lg border-4 border-gray-900 bg-slate-300 px-6 py-1 sm:mb-14'>
            <Link
              href='https://inline.app/booking/-Nr-BBQqdK0NczlWjl-0:inline-live-3/-Nr-BBd6FsMz7P6GfGcX'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              <p className='text-3xl lg:text-5xl'>Booking tables!</p>
            </Link>
          </div>
        </div>

        {/* 店名标题 */}
        <div className='text-center'>
          <h1 className='font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl'>
            PARORO KOREAN BBQ .
            <br />
            <span className='font-nanum-brush'>한국식 바비큐.</span>
          </h1>
          <Separator className='my-3 h-[2px] bg-gray-900 sm:h-1' />

          <h1 className='font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            10% OFF for students
            <br />
            <span className='font-nanum-brush text-[25px] sm:text-3xl'>
              *Student ID required
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}
