import React from 'react'
import Image from 'next/image'

function Location() {
  return (
    <div className='bg-black text-white flex py-10 gap-12'>
      <div className='w-1/2 flex justify-end items-center'>
        <div className='relative w-[500px] h-[500px] rounded-full overflow-hidden'>
          <Image
            src='/assets/location.jpg'
            alt='location'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='w-1/2 '>
        <div className='w-1/2 flex flex-col justify-center gap-6'>
          <h1 className='font-bold text-4xl'>
            CRAFTING THE ULTIMATE DINING EXPERIENCE
          </h1>
          <p className='text-gray-500'>
            Since its founding in 2010, our brand has been serving a Chinese hot
            pot and Korean barbecue experience unlike any other. We operate on
            three core values: quality, service, and affordability. Our wide
            range of spices and sauces cater to even the most adventurous
            diners. Regardless of your preferences, we have something for
            everyone.
          </p>
          <button className='mt-4 bg-yellow-500 p-5 w-[200px]'>
            OUR LOCATION
          </button>
        </div>
      </div>
    </div>
  )
}

export default Location
