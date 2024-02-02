import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaDollarSign } from 'react-icons/fa'
import { GrSchedule } from 'react-icons/gr'

function Details() {
  return (
    <div className='flex justify-center items-center py-14 bg-[#161616]'>
      <div className='text-left md:text-left flex flex-col justify-center items-center'>
        <div className='w-4/5 ipadV:w-1/2 text-xl text-[#caad66] whitespace-nowrap gap-4'>
          <Image
            src='/assets/logo.svg'
            alt='Paroro Logo'
            width={500}
            height={500}
          />
          <p>
            <FaLocationDot className='inline mb-1' /> Elizabth st, Melbourne,
            3000{' '}
          </p>
          <p>
            <FaPhoneSquareAlt className='inline mb-1' /> 0484-636-478
          </p>
        </div>
        <div className='w-4/5 ipadV:w-1/2 text-xl text-[#caad66] whitespace-nowrap gap-4'>
          <p>
            <GrSchedule className='inline mb-1' /> Sun-Wed: 5:30PM - 10:30PM
          </p>
          <p>
            <GrSchedule className='inline mb-1 text-[#161616]' />
            Thur-Sat: 5:30PM - 01:00AM
          </p>
        </div>
        <div className='w-4/5 ipadV:w-1/2 text-xl text-[#caad66] whitespace-nowrap gap-4'>
          <p>$49.95 (Kids 3-12yrs $24.95)</p>
        </div>
      </div>
    </div>
  )
}

export default Details
