import React from 'react'
import Image from 'next/image'

function FindOutMore() {
  return (
    <div className=' text-center flex justify-center py-14 bg-white'>
      <div className='w-4/5 ipadV:w-1/2 flex flex-col gap-10 items-center'>
        <h1 className='text-5xl text-[#caad66] font-bold mobile:text-[20px] ipadV:text-5xl md:w-[1000px]'>
          OUR PRICING <br />
          <br /> PARORO KOREAN BBQ
        </h1>
        <div className='md:flex text-[#caad66] gap-40'>
          <div className='flex flex-col items-center'>
            <Image
              src='/assets/Baby.jpg'
              alt='Paroro Logo'
              width={100}
              height={100}
              className='opacity-75'
            />
            <p className='text-2xl font-bold'>
              0y~3y
            </p>
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
            <p className='text-2xl font-bold'>
              4y~10y
            </p>
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
            <p className='text-2xl font-bold'>
              Adult
            </p>
            <p className='bg-[#caad66] hover:bg-[#dbc87c]  rounded p-3 w-[80px] text-white'>
              $49.95
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindOutMore
