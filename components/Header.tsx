// components/Header.tsx

'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { navigation } from '@/lib/data'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              className='h-8 w-auto rounded-full bg-[#F2F2F2]'
              src='/assets/logo.svg'
              alt='logo'
              width={48}
              height={48}
            />
          </a>
        </div>

        {/* 小屏幕标题 or CTA */}
        <div className='lg:hidden'>
          <a
            href='https://inline.app/booking/-Nr-BBQqdK0NczlWjl-0:inline-live-3/-Nr-BBd6FsMz7P6GfGcX'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            <p className='text-lg lg:text-5xl '>
              Authentic Korean BBQ in Melbourne
            </p>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        {/* 大屏幕导航 */}
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-5xl font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {/* 如果有右侧功能按钮，可放这里 */}
        </div>
      </nav>

      {/* 小屏幕抽屉 */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='logo'
                width={48}
                height={48}
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
