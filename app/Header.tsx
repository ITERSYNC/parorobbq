'use client'
import { useState, useEffect } from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className='w-full mb-20 mx-auto shadow fixed top-0 z-50 ipadV: mobile:px-7 bg-[#161616]'>
      <div className='justify-evenly py-4 md:items-center md:flex'>
        <div className='flex items-center justify-center text-2xl'>
          <Image
            src='/assets/logo.svg'
            alt='Paroro Logo'
            width={isScrolled ? 60 : 180}
            height={isScrolled ? 60 : 180}
            className='transition-all duration-500 ease-in-out'
          />
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
    </div>
  )
}
