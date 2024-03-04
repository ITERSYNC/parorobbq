'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ overwrite: true })

function InfiniteCarousel() {
  const listItems = [
    { name: 'buffet' },
    { name: 'meat' },
    { name: 'seafood' },
    { name: 'all' },
    { name: 'you' },
    { name: 'can' },
    { name: 'eat' },
  ]

  useEffect(() => {
    gsap.fromTo(
      '.leftToRight',
      {
        xPercent: -150,
      },
      {
        xPercent: 0,
        ease: 'none',
        duration: 30,
        repeat: -1,
      }
    )
  }, [])

  useEffect(() => {
    gsap
      .to('.rightToLeft', {
        xPercent: -150,
        duration: 30,
        ease: 'none',
        repeat: -1,
      })
      .timeScale(1)
  }, [])

  return (
    <div className='flex justify-center items-center'>
      <div className='lg:text-[60px] text-[40px] font-extrabold uppercase overflow-hidden'>
        <ul className='leftToRight flex text-nowrap gap-5 md:gap-20'>
          {listItems.map(({ name }) => {
            return <li key={name}>{name}</li>
          })}
          {listItems.map(({ name }) => {
            return <li key={name}>{name}</li>
          })}
        </ul>
        <ul className='rightToLeft flex text-nowrap gap-5 md:gap-20'>
          {listItems.map(({ name }) => {
            return <li key={name}>{name}</li>
          })}
          {listItems.map(({ name }) => {
            return <li key={name}>{name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default InfiniteCarousel
