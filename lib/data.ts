// lib/data.ts

import {
  CakeIcon,
  LifebuoyIcon,
  NewspaperIcon
} from '@heroicons/react/20/solid'

export const favorites = [
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
    imageAlt: ''
  },
  {
    id: 3,
    name: 'Premium Beef',
    price: '프리미엄 쇠고기',
    href: '#',
    imageSrc: '/assets/gallery4.png',
    imageAlt: ''
  }
]

export const footerNavigation = {
  shop: [
    {
      name: 'level 1, 315 Elizabeth St',
      href: 'https://www.google.com/maps/place/Paroro+BBQ/...'
    },
    {
      name: 'Melbourne, VIC, 3000',
      href: 'https://www.google.com/maps/place/Paroro+BBQ/...'
    }
  ],
  opening: [
    {
      name: 'Lunch 12:00-14:30',
      href: 'https://www.google.com/maps/place/Paroro+BBQ/...'
    },
    {
      name: 'Dinner 17:00-22:30',
      href: 'https://www.google.com/maps/place/Paroro+BBQ/...'
    }
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' }
  ],
  contact: [{ name: '0484 636 478', href: '#' }]
}

export const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Menu', href: '#' },
  { name: 'Location', href: '#footer-heading' },
  { name: 'Contact us', href: '#footer-heading' },
  { name: 'About us', href: '#' }
]

export const cards = [
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
