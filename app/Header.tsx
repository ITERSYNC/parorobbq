'use client'
import { useState, useEffect } from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Image from 'next/image'

export default function Header() {
  const [header, setHeader] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='w-full mb-20 mx-auto shadow fixed top-0 z-50 ipadV:px-40 mobile:px-7 bg-black'>
      <div className='justify-around py-4 md:items-center md:flex'>
        <div className='hidden ipadV:w-1/3'></div>
        <div className='flex items-center justify-between text-2xl'>
          <div
            className={`transition-all duration-500 ease-in-out bg-cyan-500 ${
              isScrolled ? 'h-[80px]' : 'h-[180px]'
            }`}
          >
            <Image
              src='/assets/logo.svg'
              alt='Paroro Logo'
              layout='fill'
              objectFit='contain'
            />
          </div>

          <button className='ipadV:hidden ' onClick={() => setHeader(!header)}>
            {header ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        <div
          className={`md:block transition-all transform duration-300 ipadV:w-1/3 ${
            !header && 'hidden'
          }`}
        >
          <div className='gap-14 text-end space-y-4 pt-2 md:space-y-0'>
            <div className='justify-end md:flex gap-10'>
              <div className='hover:text-neutral-500 hover:scale-105 duration-300 cursor-pointer'>
                HOME
              </div>
              <div className='hover:text-neutral-500 hover:scale-105 duration-300 cursor-pointer'>
                ABOUT US
              </div>
              <div className='hover:text-neutral-500 hover:scale-105 duration-300 cursor-pointer'>
                LOCATION
              </div>
              <div className='hover:text-neutral-500 hover:scale-105 duration-300 cursor-pointer'>
                CONTACT US
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
