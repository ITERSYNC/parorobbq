import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='text-center my-6'>
      <div className='flex items-center justify-center  gap-6 whitespace-nowrap my-6'>
        <Link href='#header'>
          <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer'>
            Home
          </div>
        </Link>
        <Link href='#location'>
          <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer'>
            About Us
          </div>
        </Link>
      </div>
      <div className='text-gray-500'>
        © 2024 Paroro Korean BBQ. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
