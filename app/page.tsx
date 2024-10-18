'use client'

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  CakeIcon
} from '@heroicons/react/20/solid'
import { Separator } from '@/components/ui/separator'

// const navigation2 = {
//   categories: [
//     {
//       id: 'women',
//       name: 'Women',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc:
//             'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
//           imageAlt:
//             'Models sitting back to back, wearing Basic Tee in black and bone.'
//         },
//         {
//           name: 'Basic Tees',
//           href: '#',
//           imageSrc:
//             'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
//           imageAlt:
//             'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
//         }
//       ],
//       sections: [
//         {
//           id: 'clothing',
//           name: 'Clothing',
//           items: [
//             { name: 'Tops', href: '#' },
//             { name: 'Dresses', href: '#' },
//             { name: 'Pants', href: '#' },
//             { name: 'Denim', href: '#' },
//             { name: 'Sweaters', href: '#' },
//             { name: 'T-Shirts', href: '#' },
//             { name: 'Jackets', href: '#' },
//             { name: 'Activewear', href: '#' },
//             { name: 'Browse All', href: '#' }
//           ]
//         },
//         {
//           id: 'accessories',
//           name: 'Accessories',
//           items: [
//             { name: 'Watches', href: '#' },
//             { name: 'Wallets', href: '#' },
//             { name: 'Bags', href: '#' },
//             { name: 'Sunglasses', href: '#' },
//             { name: 'Hats', href: '#' },
//             { name: 'Belts', href: '#' }
//           ]
//         },
//         {
//           id: 'brands',
//           name: 'Brands',
//           items: [
//             { name: 'Full Nelson', href: '#' },
//             { name: 'My Way', href: '#' },
//             { name: 'Re-Arranged', href: '#' },
//             { name: 'Counterfeit', href: '#' },
//             { name: 'Significant Other', href: '#' }
//           ]
//         }
//       ]
//     },
//     {
//       id: 'men',
//       name: 'Men',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc:
//             'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//           imageAlt:
//             'Drawstring top with elastic loop closure and textured interior padding.'
//         },
//         {
//           name: 'Artwork Tees',
//           href: '#',
//           imageSrc:
//             'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
//           imageAlt:
//             'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.'
//         }
//       ],
//       sections: [
//         {
//           id: 'clothing',
//           name: 'Clothing',
//           items: [
//             { name: 'Tops', href: '#' },
//             { name: 'Pants', href: '#' },
//             { name: 'Sweaters', href: '#' },
//             { name: 'T-Shirts', href: '#' },
//             { name: 'Jackets', href: '#' },
//             { name: 'Activewear', href: '#' },
//             { name: 'Browse All', href: '#' }
//           ]
//         },
//         {
//           id: 'accessories',
//           name: 'Accessories',
//           items: [
//             { name: 'Watches', href: '#' },
//             { name: 'Wallets', href: '#' },
//             { name: 'Bags', href: '#' },
//             { name: 'Sunglasses', href: '#' },
//             { name: 'Hats', href: '#' },
//             { name: 'Belts', href: '#' }
//           ]
//         },
//         {
//           id: 'brands',
//           name: 'Brands',
//           items: [
//             { name: 'Re-Arranged', href: '#' },
//             { name: 'Counterfeit', href: '#' },
//             { name: 'Full Nelson', href: '#' },
//             { name: 'My Way', href: '#' }
//           ]
//         }
//       ]
//     }
//   ],
//   pages: [
//     { name: 'Company', href: '#' },
//     { name: 'Stores', href: '#' }
//   ]
// }

const favorites = [
  {
    id: 1,
    name: 'Premium Beef',
    price: '프리미엄 쇠고기',
    href: '#',
    imageSrc: '/assets/gallery1.png',
    imageAlt: ''
  },

  {
    id: 2,
    name: 'Premium Beef',
    price: '프리미엄 쇠고기',
    href: '#',
    imageSrc: '/assets/gallery5.png',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle."
  },

  {
    id: 3,
    name: 'Premium Beef',
    price: '프리미엄 쇠고기',
    href: '#',
    imageSrc: '/assets/gallery4.png',
    imageAlt: "Model wearing women's off-white cotton crewneck tee."
  }
]
const footerNavigation = {
  shop: [
    {
      name: 'level 1, 315 Elizabeth St',
      href: 'https://www.google.com/maps/place/Paroro+BBQ/@-37.8112843,144.9589269,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad64305b8fd955f:0x9dad3e6ecb5421f7!8m2!3d-37.8112843!4d144.9615018!16s%2Fg%2F11l2cjm717?entry=ttu'
    },
    {
      name: 'Melbourne, VIC, 3000',
      href: 'https://www.google.com/maps/place/Paroro+BBQ/@-37.8112843,144.9589269,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad64305b8fd955f:0x9dad3e6ecb5421f7!8m2!3d-37.8112843!4d144.9615018!16s%2Fg%2F11l2cjm717?entry=ttu'
    }
  ],
  opening: [
    {
      name: 'Lunch 12:00-14:30',
      href: 'https://www.google.com/maps/place/Paroro+BBQ/@-37.8112843,144.9589269,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad64305b8fd955f:0x9dad3e6ecb5421f7!8m2!3d-37.8112843!4d144.9615018!16s%2Fg%2F11l2cjm717?entry=ttu'
    },
    {
      name: 'Dinner 17:00-22:30',
      href: 'https://www.google.com/maps/place/Paroro+BBQ/@-37.8112843,144.9589269,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad64305b8fd955f:0x9dad3e6ecb5421f7!8m2!3d-37.8112843!4d144.9615018!16s%2Fg%2F11l2cjm717?entry=ttu'
    }
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' }
  ],
  contact: [{ name: '0484 636 478', href: '#' }]
}
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Menu', href: '#' },
  { name: 'Location', href: '#footer-heading' },
  { name: 'Contact us', href: '#footer-heading' },
  { name: 'About us', href: '#' }
]

const cards = [
  {
    name: 'FOOD WASTAGE',
    description: 'Food wastage will be charged $15 per person.',
    icon: CakeIcon
  },
  {
    name: 'SURCHARGE',
    description:
      "Weekends will have a 1o% surcharge, while public holiday's will have a 15% surcharge.",
    icon: LifebuoyIcon
  },
  {
    name: 'TIME',
    description: 'Seating time is restricted to 90 mins.',
    icon: NewspaperIcon
  },
  {
    name: 'MINIMUM',
    description: 'Minimum 2 adults per table required.',
    icon: NewspaperIcon
  },
  {
    name: 'DRINKS',
    description: 'Drinks are not included.',
    icon: NewspaperIcon
  },
  {
    name: 'OUTSIDE FOOD',
    description: 'no outside food or drinks.',
    icon: NewspaperIcon
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <div className=''>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                <div className='flex px-4 pb-2 pt-5'>
                  <button
                    type='button'
                    className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                {/* <Tab.Group as='div' className='mt-2'>
                  <div className='border-b border-gray-200'>
                    <Tab.List className='-mb-px flex space-x-8 px-4'>
                      {navigation2.categories.map(category => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation2.categories.map(category => (
                      <Tab.Panel
                        key={category.name}
                        className='space-y-10 px-4 pb-8 pt-10'
                      >
                        <div className='grid grid-cols-2 gap-x-4'>
                          {category.featured.map(item => (
                            <div
                              key={item.name}
                              className='group relative text-sm'
                            >
                              <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className='object-cover object-center'
                                />
                              </div>
                              <a
                                href={item.href}
                                className='mt-6 block font-medium text-gray-900'
                              >
                                <span
                                  className='absolute inset-0 z-10'
                                  aria-hidden='true'
                                />
                                {item.name}
                              </a>
                              <p aria-hidden='true' className='mt-1'>
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map(section => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className='font-medium text-gray-900'
                            >
                              {section.name}
                            </p>
                            <ul
                              role='list'
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className='mt-6 flex flex-col space-y-6'
                            >
                              {section.items.map(item => (
                                <li key={item.name} className='flow-root'>
                                  <a
                                    href={item.href}
                                    className='-m-2 block p-2 text-gray-500'
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  {navigation2.pages.map(page => (
                    <div key={page.name} className='flow-root'>
                      <a
                        href={page.href}
                        className='-m-2 block p-2 font-medium text-gray-900'
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div> */}

                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='-m-2 block p-2 font-medium text-gray-900'
                    >
                      Sign in
                    </a>
                  </div>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='-m-2 block p-2 font-medium text-gray-900'
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className='border-t border-gray-200 px-4 py-6'>
                  <a href='#' className='-m-2 flex items-center p-2'>
                    <Image
                      src='https://tailwindui.com/img/flags/flag-canada.svg'
                      alt=''
                      className='block h-auto w-5 flex-shrink-0'
                      width={400}
                      height={0}
                    />
                    <span className='ml-3 block text-base font-medium text-gray-900'>
                      CAD
                    </span>
                    <span className='sr-only'>, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

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
                alt=''
                width={400}
                height={0}
              />

              {/* logo 放在这里*/}
            </a>
          </div>

          <div className='lg:hidden'>
            <a
              href='https://inline.app/booking/-Nr-BBQqdK0NczlWjl-0:inline-live-3/-Nr-BBd6FsMz7P6GfGcX'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              <p className='text-lg lg:text-5xl '>
                Authentic Korean BBQ in Melbourne
                {/* <span aria-hidden='true'>&rarr;</span> */}
              </p>
            </a>
          </div>

          <div className='flex hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

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
            {/* <a
              href='https://inline.app/booking/-Nr-BBQqdK0NczlWjl-0:inline-live-3/-Nr-BBd6FsMz7P6GfGcX'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              <p className='animate-bounce text-3xl lg:text-5xl'>
                Booking tables! <span aria-hidden='true'>&rarr;</span>
              </p>
            </a> */}
          </div>
        </nav>
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
                  alt=''
                  width={400}
                  height={0}
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

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl pb-8 pt-16 lg:py-36'>
          {/* <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Announcing our next round of funding.{' '}
              <a href='#' className='font-semibold text-indigo-600'>
                <span className='absolute inset-0' aria-hidden='true' />
                Read more <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className='flex w-full justify-center'>
            <div className='mb-10 flex w-fit animate-bounce rounded-lg border-4 border-gray-900 bg-slate-300 px-6 py-1 sm:mb-14'>
              <a
                href='https://inline.app/booking/-Nr-BBQqdK0NczlWjl-0:inline-live-3/-Nr-BBd6FsMz7P6GfGcX'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                <p className='text-3xl lg:text-5xl'>
                  Booking tables!
                  {/* <span aria-hidden='true'>&rarr;</span> */}
                </p>
              </a>
            </div>
          </div>

          <div className='text-center'>
            <h1 className='font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl'>
              PARORO KOREAN BBQ . <br />
              <span className='font-nanum-brush'>한국식 바비큐.</span>
            </h1>

            <div className='grid  md:grid-cols-2'>
              <h1 className='pt-6 font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Lunch <br />
                $19.90
                <span className='text-xl sm:text-3xl'>(Weekdays)</span> $39.90
                <span className='text-xl sm:text-3xl'>(Weekends)</span>
                <br />
                <span className='font-nanum-brush text-[25px] sm:text-3xl'>
                  *Kids (4-10) half price <br /> Whats included: Korean Hot
                  Foods, Salads, Desserts <br /> Note: <br />
                  NO BBQ or sushi for lunch on weekdays <br />
                  No sushi for lunch on weekends
                </span>
              </h1>

              <h1 className='pt-6 font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Dinner $49.90 <br />
                <span className='font-nanum-brush text-[25px] sm:text-3xl'>
                  *Kids (4-10) half price <br />
                  Whats included: Premium Meat BBQ, Korean Hot Foods, Salads,
                  Desserts
                </span>
              </h1>
            </div>
            <Separator
              orientation='horizontal'
              className='my-3 h-[2px] bg-gray-900 sm:h-1'
            />
            <h1 className='font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              ALL DAY 10% OFF
              <br />
              <span className='font-nanum-brush text-[25px] sm:text-3xl'>
                Only On Monday Tuesday Wednesday *drinks excluded
              </span>
              <br />
              <span className='font-nanum-brush text-[25px] sm:text-3xl'>
                *PUBLIC HOLIDAY EXCLUDED
              </span>
            </h1>
            {/* <Separator
              orientation='horizontal'
              className='my-3 h-[2px] bg-gray-900 sm:h-1'
            />
            <h1 className='font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Notice: <br />
              <span className='font-nanum-brush text-[25px] sm:text-3xl'>
                Only offering dinner (No Lunch) on Kings birthday on Mon, 10 Jun
                2024.
              </span>
            </h1> */}
            {/* <Separator
              orientation='horizontal'
              className='my-3 h-[2px] bg-gray-900 sm:h-1'
            />
            <h1 className='font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              ALL DAY 10% OFF
              <br />
              <span className='font-nanum-brush text-[25px] sm:text-3xl'>
                on Mothers day (12th May)
              </span>
            </h1> */}
            {/* <h1 className='font-permanent-marker text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl'>
              PARORO KOREAN BBQ . <br />
              <span className='font-nanum-brush'>한국식 바비큐.</span>
            </h1> */}
            {/* <p className='mt-6 text-lg leading-8 text-gray-600'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p> */}
            {/* <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <main>
        {/* Category section */}
        {/* Grill chill part */}
        <section aria-labelledby='category-heading' className='bg-background'>
          <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
            <div className='sm:flex sm:items-baseline sm:justify-between'>
              <h2
                id='category-heading'
                className='mb-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl'
              >
                Grill, Chill, and Fill
              </h2>
              <a
                href='#'
                className='hidden text-3xl font-semibold text-foreground hover:text-stone-50 sm:block'
              >
                All menu
                <span aria-hidden='true'> &rarr;</span>
              </a>
            </div>

            <div className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8'>
              <div className='group aspect-h-1 aspect-w-2 overflow-hidden rounded-full sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2'>
                <Image
                  src='/assets/category1.png'
                  alt=''
                  className='object-cover object-center group-hover:opacity-75'
                  height={1000}
                  width={1000}
                />
                <div
                  aria-hidden='true'
                  className='bg-gradient-to-b from-transparent to-black opacity-50'
                />
                <div className='flex items-center p-6 text-2xl text-stone-50'>
                  <div>
                    <h3 className='text-5xl font-semibold text-stone-50 sm:text-9xl'>
                      <a href='#'>
                        <span className='absolute inset-0 ' />
                        Taste Seoul
                      </a>
                    </h3>
                    <p
                      aria-hidden='true'
                      className='mt-1 text-center font-nanum-brush text-xl text-stone-100 sm:text-7xl'
                    >
                      서울 맛보기
                    </p>
                  </div>
                </div>
              </div>
              <div className='group aspect-h-1 aspect-w-2 overflow-hidden rounded-full sm:aspect-none sm:relative sm:h-full'>
                <Image
                  src='/assets/gallery2.png'
                  alt='Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.'
                  className='object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full'
                  width={400}
                  height={0}
                />
                <div
                  aria-hidden='true'
                  className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
                />
                <div className='mr-10 flex items-end justify-end p-6 text-2xl text-stone-50 sm:absolute sm:inset-0'>
                  <div>
                    <h3 className='text-5xl font-semibold text-stone-50 sm:text-9xl'>
                      <a href='#'>
                        <span className='absolute inset-0' />
                        Prime Cuts
                      </a>
                    </h3>
                    <p
                      aria-hidden='true'
                      className='mt-1 text-center font-nanum-brush text-xl text-stone-100 sm:text-7xl'
                    >
                      S최고급 부위
                    </p>
                  </div>
                </div>
              </div>
              <div className='group aspect-h-1 aspect-w-2 overflow-hidden rounded-full sm:aspect-none sm:relative sm:h-full'>
                <Image
                  src='/assets/gallery3.png'
                  alt='Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk.'
                  className='object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full'
                  width={400}
                  height={0}
                />
                <div
                  aria-hidden='true'
                  className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
                />
                <div className='mr-10 flex items-end justify-end p-6 text-2xl text-stone-50 sm:absolute sm:inset-0'>
                  <div>
                    <h3 className='text-nowrap text-5xl font-semibold text-stone-50 sm:text-9xl'>
                      <a href='#'>
                        <span className='absolute inset-0' />
                        Fresh Juicy
                      </a>
                    </h3>
                    <p
                      aria-hidden='true'
                      className='mt-1 text-center font-nanum-brush text-xl text-stone-100 sm:text-7xl'
                    >
                      신선한 맛
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 hidden'>
              <a
                href='#'
                className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
              >
                Browse all categories
                <span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby='cause-heading'>
          <div className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
            <div className='absolute inset-0 overflow-hidden'>
              <Image
                src='/assets/location-section.png'
                alt=''
                className='h-full w-full object-cover object-center'
                width={400}
                height={0}
              />
            </div>
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gray-900 bg-opacity-50'
            />
            <div className='relative mx-auto flex max-w-7xl flex-col items-center text-center'>
              <h2
                id='cause-heading'
                className='text-3xl font-bold tracking-tight text-white opacity-80 sm:text-8xl'
              >
                Sizzle Your Senses - A Journey Through Korean BBQ!
              </h2>
              <p className='mt-3 font-nanum-brush text-xl text-stone-100 opacity-80  sm:text-7xl'>
                감각을 자극하는 구이 - 한국 바비큐 여행!
              </p>
              <a
                href='https://inline.app/booking/-Nr-BBQqdK0NczlWjl-0:inline-live-3/-Nr-BBd6FsMz7P6GfGcX'
                className='mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-4xl font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'
              >
                Booking!
              </a>
            </div>
          </div>
        </section>

        {/* Favorites section */}
        <section aria-labelledby='favorites-heading'>
          <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
            <div className='sm:flex sm:items-baseline sm:justify-between'>
              <h2
                id='favorites-heading'
                className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'
              >
                Culinary Adventures, Endless Excitement
                <span className='font-nanum-brush text-2xl sm:text-4xl'>
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
                      height={0}
                    />
                  </div>
                  <h3 className='mt-4  font-semibold text-gray-900'>
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

        {/* CTA section */}
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
                      <a href='#' className='text-4xl font-semibold text-white'>
                        Check the menu
                        <span aria-hidden='true'> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className='absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0'>
                    <div className='ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8'>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notice section */}

        <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
          <img
            src='/assets/gallery6.png'
            alt=''
            className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
          />

          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Notice
              </h2>
            </div>
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
              {cards.map(card => (
                <div
                  key={card.name}
                  className='flex gap-x-4 rounded-full bg-black/75 px-12 py-6 ring-1 ring-inset ring-white/10'
                >
                  {/* <card.icon
                    className='h-7 w-5 flex-none text-gray-400'
                    aria-hidden='true'
                  /> */}
                  <div className='text-base leading-7'>
                    <h3 className='font-semibold text-white'>{card.name}</h3>
                    <p className='mt-2 text-gray-300'>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <footer aria-labelledby='footer-heading' className='text-gray-900'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='py-20 xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
              <div className='space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>Shop</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.shop.map(item => (
                      <li key={item.name} className='text-sm'>
                        <a
                          href={item.href}
                          className='text-gray-900 hover:text-gray-600'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Opening 7 Days
                  </h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.opening.map(item => (
                      <li key={item.name} className='text-sm'>
                        <a
                          href={item.href}
                          className='text-gray-900 hover:text-gray-600'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Contact Us
                  </h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.contact.map(item => (
                      <li key={item.name} className='text-sm'>
                        <a
                          href={item.href}
                          className='text-gray-900 hover:text-gray-600'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>Connect</h3>
                  <ul role='list' className='mt-6 space-y-6'>
                    {footerNavigation.connect.map(item => (
                      <li key={item.name} className='text-sm'>
                        <a
                          href={item.href}
                          className='text-gray-900 hover:text-gray-600'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='mt-16 md:mt-16 xl:mt-0'>
              <h3 className='text-sm font-medium text-gray-900'>
                Sign up for our newsletter
              </h3>
              <p className='mt-6 text-sm text-gray-900'>
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className='mt-2 flex sm:max-w-md'>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  type='text'
                  autoComplete='email'
                  required
                  className='w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-indigo-500 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
                />
                <div className='ml-4 flex-shrink-0'>
                  <button
                    type='submit'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='border-t border-gray-900 py-10'>
            <p className='text-sm text-gray-900'>
              Copyright &copy; 2024 Paroro Korean BBQ, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
