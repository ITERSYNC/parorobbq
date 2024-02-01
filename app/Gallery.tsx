'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className='ipadV:w-1/2 mobile:w-full mt-24'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent>
                  <Image
                    src={`/assets/gallery${index + 1}.jpg`}
                    alt='Paroro Logo'
                    sizes='100vw'
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={300}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
