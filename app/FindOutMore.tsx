import React from 'react'
import Image from 'next/image'

function FindOutMore() {
  return (
    <div className=' text-center flex justify-center py-6'>
      <div className='w-1/2 flex flex-col gap-10 items-center'>
        <h1 className='text-5xl text-yellow-500 mobile:text-[20px] ipadV:text-5xl'>
          UNLEASH YOUR INNER FOODIE AT PARORO KOREAN BBQ
        </h1>
        <div className='text-zinc-400'>
          PARORO KORAEN BBQ is an AYCE restaurant brand that offers a unique and
          satisfying dining experience of Korean BBQ.
        </div>
        <button className='bg-yellow-500 p-3 w-[200px]'>FIND OUT MORE</button>
      </div>
    </div>
  )
}

export default FindOutMore
