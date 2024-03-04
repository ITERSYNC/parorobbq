'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

const Navbar = () => {
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
    <div
      className={`fixed top-0 z-[40] w-full h-${
        isScrolled ? '[60px]' : '[100px]'
      } flex justify-between items-center px-10 md:px-20 transition-all duration-300 ease-in-ou bg-gradient-to-b from-black to-[#161616] to-99%`}
    >
      <div className='flex flex-row gap-3 items-center'>
        <div className='relative'>
          <Image
            src='/assets/logo.svg'
            alt='Paroro Logo'
            width={isScrolled ? 60 : 100}
            height={isScrolled ? 60 : 100}
            className='transition-all duration-500 ease-in-out'
          />
        </div>
        <h1 className='text-white text-[25px] font-semibold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-red-100'></span>
        </h1>
      </div>

      <div className='flex justify-end ipadV:hidden'>
        <button onClick={() => setHeader(!header)}>
          {header ? (
            <IoMdClose className='hover:text-[#dbc87c]' />
          ) : (
            <IoMdMenu className='hover:text-[#dbc87c]' />
          )}
        </button>
      </div>
      <div
        className={`ipadV:block transition-all transform duration-300 ${
          !header && 'hidden'
        }`}
      >
        <div className='gap-14 text-end space-y-4 pt-2 md:space-y-0'>
          <div className='justify-end md:flex gap-10'>
            <Link href='#header'>
              <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer'>
                HOME
              </div>
            </Link>
            <Link href='#location'>
              <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer text-nowrap'>
                ABOUT US
              </div>
            </Link>
            <Link href='#detail'>
              <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer text-nowrap'>
                LOCATION
              </div>
            </Link>
            <Link href='#detail'>
              <div className='hover:text-[#dbc87c] hover:scale-105 duration-300 cursor-pointer text-nowrap'>
                CONTACT US
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
