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
              src='/assets/Location.jpg'
              alt='location'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>

        <div className='w-4/5 flex justify-center md:px-[4%]'>
          <div className='flex flex-col justify-center gap-6 mobile:text-center md:text-left'>
            <h1 className='text-[#caad66] md:font-bold mobile:text-[20px] ipadV:text-5xl'>
              CRAFTING THE ULTIMATE DINING
              EXPERIENCE
            </h1>
            <p className='text-gray-500'>
              Since its inception in 2024, our
              brand has been delivering a Korean
              BBQ buffet experience unparalleled
              in the industry. We adhere to three
              fundamental principles: quality,
              service, and affordability. Our
              extensive selection of spices and
              sauces is designed to satisfy even
              the most daring palates. No matter
              your taste preferences, we offer
              something for every diner.
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
