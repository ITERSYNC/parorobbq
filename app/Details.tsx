import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaDollarSign } from 'react-icons/fa'
import { GrSchedule } from 'react-icons/gr'

function Details() {
  return (
    <div className='bg-[#161616] justify-center text-center md:text-left md:flex md:gap-16'>
      <div>
        <div className='text-[20px]'>Contact Us</div>
        <div>0484 636 478</div>
      </div>
      <div className='my-6 md:my-0'>
        <div className='text-[20px]'>Address</div>
        <div>
          level 1, 315 Elizabth St
          <br /> Melbourne, VIC, 3000
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[230px]'>
          <div className='text-[20px]'>Opening Hours</div>
          <div className='flex justify-between'>
            <div>Monday</div> <div>17:30-22:30</div>
          </div>
          <div className='flex justify-between'>
            <div>Tuesday</div> <div>17:30-22:30</div>
          </div>
          <div className='flex justify-between'>
            <div>Wednesday</div> <div>17:30-22:30</div>
          </div>
          <div className='flex justify-between'>
            <div>Thursday</div> <div>17:30-01:00</div>
          </div>
          <div className='flex justify-between'>
            <div>Friday</div> <div>17:30-01:00</div>
          </div>
          <div className='flex justify-between'>
            <div>Saturday</div> <div>17:30-01:00</div>
          </div>
          <div className='flex justify-between'>
            <div>Sunday</div> <div>17:30-22:30</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
