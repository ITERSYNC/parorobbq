import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

function FindOutMore() {
  return (
    <div className='text-center flex justify-center py-14 bg-white'>
      <div className='w-4/5 ipadV:w-1/2 flex flex-col gap-10 items-center'>
        <h1 className='text-5xl text-[#caad66] font-bold mobile:text-[20px] ipadV:text-5xl md:w-[1000px]'>
          SESSION & PRICING
        </h1>
        <h3 className='text-black text-xl font-bold'>
          Notice: Lunch session start from 18/03/2024
        </h3>

        <div className='text-black flex gap-10'>
          <div className='text-nowrap leading-loose'>
            <div>
              <h1 className='text-[#caad66] font-bold text-xl md:text-2xl'>
                Lunch
              </h1>
              <h2>
                Time: <span className='font-bold'>12:00-14:30</span>
              </h2>
              <p>
                Adult: <span className='font-bold'>$19.90</span>
              </p>
              <p>
                Kid(4-10): <span className='font-bold'>$11.9</span>
              </p>
              <p>Including: </p>
              <p>Korean Hot Food</p>
              <p>Fruit and Salad</p>
            </div>
            <div></div>
          </div>
          <Separator orientation='vertical' className='bg-black h-full' />

          <div className='text-nowrap leading-loose'>
            <div></div>
            <div>
              <h1 className='text-[#caad66] font-bold text-xl md:text-2xl'>
                Dinner
              </h1>
              <h2>
                Time: <span className='font-bold'>17:00-22:30</span>
              </h2>
              <p>
                Adult: <span className='font-bold'>$49.90</span>
              </p>
              <p>
                Kid(4-10): <span className='font-bold'>$29.9</span>
              </p>
              <p>Including: </p>
              <p>Korean BBQ</p>
              <p>Sushi</p>
              <p>Korean Hot Food</p>
              <p>Fruit and Salad</p>
            </div>
          </div>
        </div>

        <div className=' text-gray-400'>
          <p>
            Time limit for each session is{' '}
            <span className='font-bold'>90MIN</span>
          </p>
          <p>
            <span className='font-bold'></span>
            <span className='font-bold'>1.5%</span> surcharge for card payment
          </p>
          <p>
            <span className='font-bold'>10%</span> Weekend surcharge
          </p>
          <p>
            <span className='font-bold'>15%</span> Public Holiday surcharge
          </p>
        </div>
        {/* <div className='md:flex text-[#caad66] gap-40'>
          <div className='flex flex-col items-center'>
            <Image
              src='/assets/Baby.jpg'
              alt='Paroro Logo'
              width={100}
              height={100}
              className='opacity-75'
            />
            <p className='text-2xl font-bold'>0y~3y</p>
            <p className='bg-[#caad66] hover:bg-[#dbc87c] rounded p-3 w-[80px] text-white'>
              FREE
            </p>
          </div>
          <div className='flex flex-col items-center my-8 md:my-0'>
            <Image
              src='/assets/Children.jpg'
              alt='Paroro Logo'
              width={100}
              height={100}
              className='opacity-75'
            />
            <p className='text-2xl font-bold'>4y~10y</p>
            <p className='bg-[#caad66] hover:bg-[#dbc87c] rounded p-3 w-[80px] text-white'>
              $29.90
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='/assets/Adult.png'
              alt='Paroro Logo'
              width={100}
              height={100}
              className='opacity-75'
            />
            <p className='text-2xl font-bold'>Adult</p>
            <p className='bg-[#caad66] hover:bg-[#dbc87c]  rounded p-3 w-[80px] text-white'>
              $49.95
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default FindOutMore
