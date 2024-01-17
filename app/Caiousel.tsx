import React from 'react'
import Image from 'next/image'

import {
  Card,
  CardContent,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Carousels() {
  return (
    <Carousel className='w-full'>
      <CarouselContent>
        {Array.from({ length: 5 }).map(
          (_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <Image
                      src='/assets/logo.svg'
                      alt='Paroro Logo'
                      width={200}
                      height={200}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
