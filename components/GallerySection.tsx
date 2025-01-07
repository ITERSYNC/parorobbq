// components/GallerySection.tsx

'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function GallerySection() {
  return (
    <section aria-labelledby='sale-heading'>
      <div className='overflow-hidden pt-32 sm:pt-14'>
        <div className='bg-gray-800'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='relative pb-16 pt-48 sm:pb-24'>
              <div>
                <h2
                  id='sale-heading'
                  className='text-4xl font-bold tracking-tight text-white md:text-6xl'
                >
                  We are open
                  <br />
                  lunch and dinner!
                </h2>
                <div className='mt-6 text-base'>
                  <Link href='#' className='text-4xl font-semibold text-white'>
                    Check the menu
                    <span aria-hidden='true'> &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* 你的 gallery 图片，都在这里 */}
              <div className='absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0'>
                <div className='ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8'>
                  {/* 第一列图片 */}
                  <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <Image
                        className='h-64 w-64 rounded-3xl object-cover md:h-72 md:w-72'
                        src='/assets/gallery6.png'
                        alt=''
                        width={400}
                        height={0}
                      />
                    </div>
                    <div className='mt-6 flex-shrink-0 sm:mt-0'>
                      <Image
                        className='h-64 w-64 rounded-3xl object-cover md:h-72 md:w-72'
                        src='/assets/gallery9.png'
                        alt=''
                        width={400}
                        height={0}
                      />
                    </div>
                  </div>

                  {/* 第二列图片 */}
                  <div className='flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <Image
                        className='h-64 w-64 rounded-3xl object-cover md:h-72 md:w-72'
                        src='/assets/gallery7.png'
                        alt=''
                        width={400}
                        height={0}
                      />
                    </div>
                    <div className='mt-6 flex-shrink-0 sm:mt-0'>
                      <Image
                        className='h-64 w-64 rounded-3xl object-cover md:h-72 md:w-72'
                        src='/assets/gallery8.png'
                        alt=''
                        width={400}
                        height={0}
                      />
                    </div>
                  </div>

                  {/* 第三列图片 */}
                  <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <Image
                        className='h-64 w-64 rounded-3xl object-cover md:h-72 md:w-72'
                        src='/assets/category2.png'
                        alt=''
                        width={400}
                        height={0}
                      />
                    </div>
                    <div className='mt-6 flex-shrink-0 sm:mt-0'>
                      <Image
                        className='h-64 w-64 rounded-3xl object-cover md:h-72 md:w-72'
                        src='/assets/gallery10.png'
                        alt=''
                        width={400}
                        height={0}
                      />
                    </div>
                  </div>
                  {/* 如果还有更多列，也可以继续添加 */}
                </div>
              </div>
              {/* 如果此处还有其他元素，可以加在这里 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
