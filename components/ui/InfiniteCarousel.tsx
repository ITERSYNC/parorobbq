'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ overwrite: true })

function InfiniteCarousel() {
  const [isMobile, setIsMobile] = useState(false)
  const logoSize = isMobile ? 40 : 60

  const listItems = [
    { name: 'meat', image: '/assets/meat.png' },
    { name: 'seafood', image: '/assets/seafood.png' },
    { name: 'sushi', image: '/assets/sushi.png' },
    { name: 'buffet', image: '/assets/bbq.png' },
  ]

  const extendedList = [...listItems, ...listItems, ...listItems, ...listItems]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      '.leftToRight',
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
        ease: 'none',
        duration: 45,
        repeat: -1,
      }
    )
  }, [])

  useEffect(() => {
    gsap
      .to('.rightToLeft', {
        xPercent: -100,
        duration: 45,
        ease: 'none',
        repeat: -1,
      })
      .timeScale(1)
  }, [])

  return (
    <div className='flex justify-center items-center'>
      <div className='lg:text-[60px] text-[40px] font-extrabold uppercase overflow-hidden'>
        <ul className='leftToRight flex text-nowrap gap-20'>
          {extendedList.map(({ name, image }, index) => (
            <li key={index} className='flex items-center justify-center'>
              {image && (
                <Image
                  src={image}
                  alt={`${name} icon`}
                  className='inline-block mr-2'
                  width={logoSize}
                  height={logoSize}
                />
              )}
              {name}
            </li>
          ))}
        </ul>
        <ul className='rightToLeft flex text-nowrap gap-20'>
          {extendedList.map(({ name, image }, index) => (
            <li key={index} className='flex items-center justify-center'>
              {image && (
                <Image
                  src={image}
                  alt={`${name} icon`}
                  className='inline-block mr-2'
                  width={logoSize}
                  height={logoSize}
                />
              )}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InfiniteCarousel
