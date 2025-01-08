// components/Banner.tsx

'use client'

import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      {/* 店名标题 */}
      <div className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
        <div className='absolute inset-0 overflow-hidden'>
          <Image
            src='/assets/banner.jpg'
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
        {/* Booking按钮 */}
        <div className='flex w-full justify-center'>
          <div className='mb-10 flex w-fit animate-bounce rounded-lg border-4 border-white bg-slate-300 px-6 py-1 sm:mb-14'>
            <Link
              href='https://inline.app/booking/-Nr-BBQqdK0NczlWjl-0:inline-live-3/-Nr-BBd6FsMz7P6GfGcX'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              <p className='text-3xl lg:text-5xl'>Booking tables!</p>
            </Link>
          </div>
        </div>
        <div className='relative mx-auto flex max-w-7xl flex-col items-center text-center'>
          <h2
            id='cause-heading'
            className='font-sans text-4xl font-bold tracking-tight text-white sm:text-9xl'
          >
            PARORO
            <br /> KOREAN <br />
            BBQ .<br />
            <span className='font-nanum-brush'>한국식 바비큐.</span>
          </h2>
        </div>
      </div>

      <div className='mx-auto max-w-2xl pb-8 lg:py-36'>
        <div className='text-center'>
          <div className='grid  md:grid-cols-2'>
            <h1 className='pt-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Lunch <br />
              $19.90
              <span className='text-xl sm:text-3xl'>(Weekdays)</span> $39.90
              <span className='text-xl sm:text-3xl'>(Weekends)</span>
              <br />
              <span className='font-sans text-[25px] sm:text-3xl'>
                Whats included: Korean Hot Foods, Salads, Desserts <br /> *NO
                BBQ or sushi for lunch on weekdays <br />
                *No sushi for lunch on weekends
              </span>
            </h1>

            <h1 className='pt-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Dinner $49.90 <br />
              <span className='font-sans text-[25px] sm:text-3xl'>
                Whats included: Premium Meat BBQ, Korean Hot Foods, Salads,
                Desserts
              </span>
            </h1>
          </div>
          <Separator
            orientation='horizontal'
            className='my-3 h-[2px] bg-white sm:h-1'
          />
          <h1 className='pt-6 font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl'>
            Kids special price
            <br />
            <span className='font-sans text-[25px] font-bold sm:text-3xl'>
              Lunch $11.90
              <Separator
                orientation='vertical'
                className='my-3 w-[2px] bg-white sm:w-1'
              />
              Dinner $29.90
            </span>
          </h1>

          <Separator
            orientation='horizontal'
            className='my-3 h-[2px] bg-white sm:h-1'
          />
          <h1 className='font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            10% OFF for students
            <br />
            <span className='font-sans text-[25px] sm:text-3xl'>
              *Student ID required
            </span>
            <br />
            <span className='font-sans text-[25px] sm:text-3xl'>
              *Only On Monday Tuesday
            </span>
            <br />
            <span className='font-sans text-[25px] sm:text-3xl'>
              *Drinks excluded
            </span>
            <br />
            <span className='font-sans text-[25px] sm:text-3xl'>
              *Public holiday excluded
            </span>
          </h1>
          <Separator
            orientation='horizontal'
            className='my-3 h-[2px] bg-white sm:h-1'
          />
          <h1 className='font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            <span className='font-sans text-[25px] sm:text-3xl'>
              *Public holiday 10% surcharge
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}
