import React from 'react'

function Footer() {
  return (
    <div className='text-center mb-4'>
      <div className='flex items-center justify-center  gap-6 whitespace-nowrap my-6'>
        <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer'>
          Home
        </div>
        <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer'>
          About Us
        </div>
        <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer'>
          Location
        </div>
        <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer'>
          Contact Us
        </div>
      </div>
      <div className='text-gray-500'>
        © 2024 Paroro Korean BBQ. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
