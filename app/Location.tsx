import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Location() {
  return (
    <div className='flex justify-center py-[5%]'>
      <div className='bg-[#161616] text-white max-w-[1280px] flex flex-col md:flex-row justify-center items-center mb-24'>
        <div className='w-4/5 flex justify-center  '>
          <div className='relative aspect-square w-4/5 h-auto overflow-hidden rounded-full mb-8 md:mb-0'>
            <Image
              src='/assets/location.jpg'
              alt='location'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>

        <div className='w-4/5 flex justify-center md:px-[4%]'>
          <div className='flex flex-col justify-center gap-6 mobile:text-center md:text-left'>
            <h1 className='text-[#caad66] md:font-bold mobile:text-[20px] ipadV:text-5xl'>
              CRAFTING THE ULTIMATE DINING EXPERIENCE
            </h1>
            <p className='text-gray-500'>
              Since its founding in 2010, our brand has been serving a Chinese
              hot pot and Korean barbecue experience unlike any other. We
              operate on three core values: quality, service, and affordability.
              Our wide range of spices and sauces cater to even the most
              adventurous diners. Regardless of your preferences, we have
              something for everyone.
            </p>
            <Link href='#detail'>
              <button className='mt-4 bg-[#caad66] hover:bg-[#dbc87c] rounded p-5 w-[200px]'>
                OUR LOCATION
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
