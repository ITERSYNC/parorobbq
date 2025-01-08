// components/FavoritesSection.tsx

import Image from 'next/image'
import { favorites } from '@/lib/data'

export default function FavoritesSection() {
  return (
    <section aria-labelledby='favorites-heading' className='bg-red-500'>
      <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='sm:flex sm:items-baseline sm:justify-between'>
          <h2
            id='favorites-heading'
            className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'
          >
            Culinary Adventures, Endless Excitement
            <span className='font-nanum-brush text-2xl sm:text-4xl'>
              {' '}
              - 미각 탐험, 끊임없는 재미
            </span>
          </h2>
          <a
            href='#'
            className='hidden text-4xl font-semibold text-gray-900 sm:block '
          >
            Browse all menu
            <span aria-hidden='true'> &rarr;</span>
          </a>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8'>
          {favorites.map(favorite => (
            <div
              key={favorite.id}
              className='group relative text-center text-5xl'
            >
              <div className='h-96 w-full overflow-hidden rounded-full sm:aspect-h-1 sm:aspect-w-1 group-hover:opacity-75 sm:h-auto'>
                <Image
                  src={favorite.imageSrc}
                  alt={favorite.imageAlt}
                  className='h-full w-full object-cover object-center'
                  width={400}
                  height={400}
                />
              </div>
              <h3 className='mt-4 font-semibold text-gray-900'>
                <a href={favorite.href} className='text-gray-900'>
                  <span className='absolute inset-0 font-nanum-brush' />
                  {favorite.name}
                </a>
              </h3>
              <p className='mt-1 text-gray-900'>{favorite.price}</p>
            </div>
          ))}
        </div>

        <div className='mt-6 sm:hidden'>
          <a
            href='#'
            className='block text-sm font-semibold text-gray-900 hover:text-stone-100'
          >
            Browse all favorites
            <span aria-hidden='true'> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
