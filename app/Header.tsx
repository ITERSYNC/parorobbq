import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-vw flex h-40 items-center justify-around ipadV:p-2 ipadV:mt-6 mobile:p-0 mobile:mx-2 mobile:text-[8px] ipadV:text-[18px]'>
      <div className='gap-6 w-10 whitespace-nowrap ipadV:flex '>
        <div>HOME</div>
        <div>ABOUT US</div>
        <div>LOCATION</div>
        <div className=' ipadV:hidden mobile:block'>
          CONTACT US
        </div>
      </div>
      <div className='mobile:w-[100px] ipadV:w-auto'>
        <Image
          src='/assets/logo.svg'
          alt='Paroro Logo'
          width={200}
          height={200}
        />
      </div>

      <div className='w-10 whitespace-nowrap mobile:hidden ipadV:block'>
        CONTACT US
      </div>
    </div>
  )
}

export default Header
