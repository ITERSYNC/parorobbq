import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-vw flex h-20 items-center justify-around p-2 mt-6'>
      <div className='flex gap-6 w-10 whitespace-nowrap'>
        <div>HOME</div>
        <div>ABOUT US</div>
        <div>LOCATION</div>
      </div>

      <Image
        src='/assets/logo.svg'
        alt='Paroro Logo'
        width={100}
        height={100}
      />

      <div className='w-10 whitespace-nowrap'>
        CONTACT US
      </div>
    </div>
  )
}

export default Header
